import React from 'react';
import { Link } from 'react-router-dom';

const RefinanceHero = () => {
    return (
        <section
            className="relative bg-white overflow-hidden min-h-[600px] flex items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/hero.jpeg')" }}
        >
            {/* Gradient Overlay for Text Readability - Stronger on left, fading to transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 py-12 lg:py-0">
                        <h1 className="text-[3.5rem] font-bold text-[#2D2D2D] leading-tight mb-6">
                            Refinance with confidence
                        </h1>
                        <p className="text-[#666] text-lg mb-10 max-w-lg leading-relaxed">
                            Use our free mortgage calculator to estimate your monthly mortgage
                            payments. We'll take care of everything else.
                        </p>

                        <Link
                            to="/qualification-journey#get-pre-approved"
                            className="inline-block bg-[#EF3E42] text-white font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-[#d93438] transition-colors"
                        >
                            Contact an advisor →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefinanceHero;
