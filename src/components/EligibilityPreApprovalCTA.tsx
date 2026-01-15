import React from 'react';
import { ArrowRight } from 'lucide-react';

const EligibilityPreApprovalCTA = () => {
    return (
        <section className="py-24 bg-[#3a307f]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Like what you see? Get pre-approved in a few simple steps!
                </h2>

                <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                    Answer a few simple questions, connect with a mortgage broker, and secure the best mortgage offers in Dubai and the UAE.
                </p>

                <button className="inline-flex items-center bg-white text-[#3a307f] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Get Pre-Approved
                    <ArrowRight className="ml-2 h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

export default EligibilityPreApprovalCTA;
