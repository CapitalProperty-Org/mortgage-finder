import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RefinanceCalculator from '../components/RefinanceCalculator';
import WhyRefinanceIntro from '../components/WhyRefinanceIntro';
import WhyRefinance from '../components/WhyRefinance';
import HowWeCanHelp from '../components/HowWeCanHelp';

const RefinanceCalculatorPage = () => {
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
                            Refinance with confidence
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
                <div className="hidden lg:block w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    {/* User requested "banner bg from assets". Using slide-1.jpeg as a likely alternative to hero.jpeg, 
                        or hero.jpeg if that's what they meant. Given the screen shot shows a family, 
                        and hero.jpeg is "Couple looking at laptop", I'll try slide-1 or just hero.jpeg again 
                        as I don't see a clear "family" file name. 
                        Actually, let's use 'slide-1.jpeg' as it might be the carousel image. */}
                    <img
                        src="/assets/slide-1.jpeg"
                        alt="Family"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Why Refinance Intro Section */}
            <WhyRefinanceIntro />

            {/* Refinance Calculator Section */}
            <div id="refinance-calculator">
                <RefinanceCalculator />
            </div>

            {/* Why Refinance Section */}
            <WhyRefinance />

            {/* How We Can Help Section */}
            <HowWeCanHelp />
        </div>
    );
};

export default RefinanceCalculatorPage;
