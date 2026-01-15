import React, { useMemo } from 'react';
import { useParams, Link, useNavigate, createSearchParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { faqData } from '../data/faqData';
import FAQSidebar from './FAQSidebar';

const FAQAnswer = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const activeFilter = 'All'; // Default visually, or could read from history state if passed

    const handleFilterChange = (filter: string) => {
        navigate({
            pathname: '/faq',
            search: createSearchParams({ category: filter }).toString()
        });
    };

    const faqItem = useMemo(() => {
        return faqData.find(item => item.slug === slug);
    }, [slug]);

    // Get a subset of questions to display as "Frequently Asked Questions" below
    // Excluding the current one.
    const relatedQuestions = useMemo(() => {
        return faqData
            .filter(item => item.slug !== slug)
            .slice(0, 3); // Taking first 3 for now, similar to screenshot count
    }, [slug]);

    if (!faqItem) {
        return (
            <div className="py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Question not found</h2>
                <Link to="/faq" className="text-brand-primary hover:underline">
                    Back to questions
                </Link>
            </div>
        );
    }

    return (
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Sidebar - Reused for visual consistency */}
                <FAQSidebar activeFilter={activeFilter} onFilterChange={handleFilterChange} />

                {/* Main Content */}
                <div className="flex-grow max-w-4xl">
                    <article className="mb-12 border-b border-gray-200 pb-12">
                        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6 leading-tight">
                            {faqItem.question}
                        </h1>

                        <div className="prose prose-lg text-gray-600 max-w-none text-[15px] leading-relaxed">
                            {faqItem.answer}
                        </div>
                    </article>

                    {/* Frequently Asked Questions List Section */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h3>
                        <div className="divide-y divide-gray-100 border-t border-gray-100">
                            {relatedQuestions.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/faq/${item.slug}`}
                                    className="flex items-center justify-between py-5 hover:bg-gray-50/50 transition-colors group pr-4"
                                >
                                    <span className="text-[#333] font-medium text-[15px] group-hover:text-brand-primary transition-colors">
                                        {item.question}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors flex-shrink-0 ml-4" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 text-right">
                            <Link to="/faq" className="inline-flex items-center text-[#3a307f] hover:text-[#2d2566] font-medium text-[15px] transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to all FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQAnswer;
