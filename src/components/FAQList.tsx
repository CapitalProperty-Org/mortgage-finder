import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { faqData } from '../data/faqData';
import FAQSidebar from './FAQSidebar';


const FAQList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const activeFilter = searchParams.get('category') || 'All';

    const setActiveFilter = (filter: string) => {
        setSearchParams({ category: filter });
    };

    const filters = [
        'All',
        'About applicants',
        'About mortgages',
        'Buying process',
        'Mortgage brokers',
        'Property types'
    ];

    const filteredQuestions = faqData.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="py-12 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#2D2D2D]">Frequently Asked Questions</h2>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-16 relative">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-6 pr-32 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-gray-300 text-gray-600 text-sm placeholder-gray-400"
                    />
                    <button className="absolute right-1 bg-[#EA3934] text-white px-8 py-2.5 rounded-full font-medium hover:bg-[#D9332E] transition-colors text-sm">
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
                {/* Sidebar Filters */}
                <FAQSidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                {/* Questions List */}
                <div className="flex-grow">
                    <div className="divide-y divide-gray-100 border-t border-gray-100">
                        {filteredQuestions.map((item, index) => (
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
                        {filteredQuestions.length === 0 && (
                            <div className="py-8 text-center text-gray-500">
                                No questions found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQList;
