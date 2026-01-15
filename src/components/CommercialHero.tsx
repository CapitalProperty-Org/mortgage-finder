import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CommercialHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-commercial.jpeg"
                    alt="Commercial Finance Meeting"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 lg:pr-12 pt-16 lg:pt-0 pb-12 lg:pb-0">
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
                        Your partner in commercial <span className="text-[#2D2D2D]">real estate financing</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                        From industrial units to hotels, find the ideal financing options for your commercial property investments.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink to="/qualification-journey#get-pre-approved" className="bg-[#EA3934] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#D9332E] transition-colors flex items-center justify-center shadow-lg">
                            Get Pre-Approved
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </NavLink>

                        <NavLink
                            to="/mortgage-calculator"
                            className="bg-white text-[#3a307f] border border-gray-200 px-8 py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center shadow-lg"
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

export default CommercialHero;
