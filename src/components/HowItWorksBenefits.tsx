import React from 'react';
import { NavLink } from 'react-router-dom';

const benefits = [
    {
        title: 'Save money',
        description: 'Avoid hidden fees and save on upfront costs. We help you save hundreds of thousands of dirhams over the duration of the mortgage.',
        icon: '/assets/save-money.svg',
    },
    {
        title: 'Guidance throughout the journey',
        description: 'The mortgage process can be daunting and confusing. We manage the journey entirely and ensure your application is approved on time so you can enjoy your new home sooner.',
        icon: '/assets/guidance.svg',
    },
    {
        title: 'Your trusted advisor',
        description: 'We act on your behalf and protect your interests throughout the home buying journey. Our team of experts will help you navigate contract terms.',
        icon: '/assets/trusted-advisor.svg',
    },
    {
        title: 'Ongoing support',
        description: 'Building long-term relationships with our clients is key. Once your mortgage is complete we stay in touch; helping to renegotiate your mortgage after the fixed term and support on future home purchases.',
        icon: '/assets/support.svg',
    },
];

const HowItWorksBenefits = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-[#2D2D2D]">
                            Get the right mortgage
                        </h2>
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-start lg:items-end lg:text-right">
                        <p className="text-gray-500 mb-8 max-w-xl leading-relaxed text-start">
                            We search the whole market of over 20 lenders to ensure you get the best mortgage that suits your needs.
                        </p>
                        <div className="flex ms-2 gap-4 self-start lg:self-start">
                            <button className="bg-[#EA3934] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#D9332E] transition-colors shadow-lg flex items-center">
                                Get started <span className="ml-2">→</span>
                            </button>
                            <NavLink
                                to="/mortgage-calculator"
                                className="bg-white text-[#3a307f] border border-gray-200 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors shadow-sm flex items-center"
                            >
                                Mortgage Calculator <span className="ml-2">→</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
                            {/* Red circle hint at top right */}
                            <div className="absolute z-10 -top-3 -right-3 w-12 h-12 border-5 border-gray-100 bg-[#EA3934] rounded-full"></div>

                            <div className="mb-6">
                                <img src={benefit.icon} alt={benefit.title} className="h-16 w-auto" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksBenefits;
