import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HowItWorksHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/how-it-work-hero.jpeg"
                    alt="Mortgage Consultation"
                    className="w-full h-full object-cover object-[center_30%]"
                />
                {/* White Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12 pt-16 lg:pt-0 pb-12 lg:pb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
                        We work for you, not the <span className="text-[#2D2D2D]">bank.</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                        We understand that the property transaction and mortgage process is more complicated than most expect. This is why we are here to support you through each step of the journey.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink to="/qualification-journey#get-pre-approved" className="bg-[#EA3934] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#D9332E] transition-colors flex items-center justify-center shadow-lg">
                            Get Pre-Approved
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </NavLink>

                        <NavLink
                            to="/mortgage-calculator"
                            className="bg-white text-[#3a307f] border border-[#3a307f] px-8 py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                            Mortgage Calculator
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksHero;
