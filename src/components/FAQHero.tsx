import React from 'react';

const FAQHero = () => {
    return (
        <section className="relative h-[500px] flex items-center overflow-hidden">
            {/* Background Image with Gradient Mask */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/MF-Hero-Section-Img.webp"
                    alt="Dubai Skyline"
                    className="w-full h-full object-cover object-right"
                />
                {/* White Gradient Overlay - Fading from left (solid white) to right (transparent) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
                        Have Questions? We've<br />
                        Got Answers!
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        Discover everything you need to know about mortgages. From understanding rates to finding the right plan, our FAQ section is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQHero;
