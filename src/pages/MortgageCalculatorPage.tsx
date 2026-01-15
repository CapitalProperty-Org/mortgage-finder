import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Calculator from '../components/Calculator';
import WhyRefinanceIntro from '../components/WhyRefinanceIntro';
import BankPartners from '../components/BankPartners';
import Testimonials from '../components/Testimonials';
import HelpSection from '../components/HelpSection';
import BlogSection from '../components/BlogSection';

const MortgageCalculatorPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="font-sans">
            {/* Hero Section - Split Layout */}
            <section className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Left: Content (Purple Background) */}
                <div className="w-full lg:w-1/2 bg-[#3a307f] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12">
                    <div className="max-w-xl">
                        <h1 className="text-[3rem] font-bold text-white mb-6 leading-tight">
                            Mortgage Calculator
                        </h1>
                        <p className="text-white/90 text-lg mb-10 leading-relaxed max-w-lg">
                            Use our free mortgage calculator to estimate your monthly mortgage
                            payments. We'll take care of everything else.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center bg-white text-[#3a307f] font-bold text-[15px] px-8 py-3.5 rounded-[4px] hover:bg-gray-100 transition-colors"
                        >
                            Get Pre-Approved <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    <img
                        src="/assets/hero.jpeg" // Using hero.jpeg as placeholder for the couple image
                        alt="Couple looking at laptop"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Why Refinance Intro Section */}
            <WhyRefinanceIntro />

            {/* Calculator Section */}
            <div id="mortgage-calculator">
                <Calculator />
            </div>
            <BankPartners />
            <Testimonials />
            {/* Stay informed with our mortgage insights section */}
            <BlogSection />
        </div>
    );
};

export default MortgageCalculatorPage;
