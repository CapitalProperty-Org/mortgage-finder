import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What are the requirements to get a mortgage in the UAE?',
            answer: 'Nearly everyone can get a mortgage within the UAE as long as you can demonstrate your income. Income can be from a variety of sources including salary, commission and rental income. Contact one of our mortgage brokers to discuss your specific situation.'
        },
        {
            question: 'Can I get a mortgage to finance my handover payment?',
            answer: 'Yes, both residents and non-residents are able to get a mortgage to finance their handover payment to the developer. Depending on how much has been paid prior to handover, Mortgage Finder will be able to arrange a mortgage to cover your final payment to the developer.'
        },
        {
            question: 'What types of property can I get a mortgage on?',
            answer: 'All types of property, whether freehold, leasehold, land, construction and commercial properties'
        },
        {
            question: 'Can non-residents get a mortgage in the UAE?',
            answer: 'Yes, the process is relatively easy for a non-resident to get a mortgage in the UAE. If you are a non-resident wanting to get a mortgage in Dubai, Abu Dhabi or another Emirate, we will require six months bank statements which demonstrate affordability, proof of income and a copy of your passport.'
        },
        {
            question: 'I am self-employed. Can I get a mortgage?',
            answer: 'Yes, absolutely! Banks have different preferences when it comes to employed and self-employed applications. We have a lot of experience working with self-employed clients and we are very familiar with the banks that look favourably on these applicants.'
        },
        {
            question: 'What documents do I need to get a mortgage?',
            answer: 'Documents required can differ depending on your circumstances, but our mortgage brokers will be able to discuss this with you. In general, we will require the following documents for your mortgage: Copy of your passport, Visa, Emirates ID, Salary certificate addressed to \'Mortgage Finder\', Last six months payslips and bank statements, Proof of your current address — copy of DEWA bill or tenancy agreement.'
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20 bg-[#F9F9FB] font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* Left Column - Title and CTA */}
                    <div>
                        <h2 className="text-[2.5rem] font-bold text-[#333] leading-tight mb-6">
                            Got questions?<br />We've got answers.
                        </h2>
                        <p className="text-[#666] text-[1rem] leading-relaxed mb-8">
                            Can't find what you are looking for?<br />We're here to help.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-[#3a307f] font-bold text-[0.95rem] hover:bg-[#3a307f] hover:text-white transition-colors border-[1px] border-[#3a307f] bg-white px-4 py-2.5 rounded-sm"
                        >
                            Contact an advisor →
                        </a>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-4"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between text-left py-1 hover:text-[#3a307f] transition-colors"
                                >
                                    <span className="text-[1rem] font-bold text-[#333] pr-4">
                                        {faq.question}
                                    </span>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.64645 8.14645C4.47288 8.32001 4.4536 8.58944 4.58859 8.78431L4.64645 8.85355L11.6464 15.8536C11.82 16.0271 12.0894 16.0464 12.2843 15.9114L12.3536 15.8536L19.3536 8.85355C19.5488 8.65829 19.5488 8.34171 19.3536 8.14645C19.18 7.97288 18.9106 7.9536 18.7157 8.08859L18.6464 8.14645L12 14.793L5.35355 8.14645C5.17999 7.97288 4.91056 7.9536 4.71569 8.08859L4.64645 8.14645Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-[#666] text-[0.95rem] leading-relaxed pt-2 pb-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
