import React from 'react';

const HowWeCanHelp = () => {
    const steps = [
        {
            icon: '/assets/financial-situation.svg',
            title: 'Review your finances and goals'
        },
        {
            icon: '/assets/multiple-banks.svg', // Using best match
            title: 'Walk you through all your options'
        },
        {
            icon: '/assets/manage-process.svg',
            title: 'Handle everything from start to finish'
        },
        {
            icon: '/assets/equity-release.svg',
            title: "Let's make your equity work for you."
        }
    ];

    return (
        <section className="py-24 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] mb-4">
                        How We Can Help
                    </h2>
                    <p className="text-[#666] text-sm leading-relaxed">
                        At Mortgage Finder, we're here to make the process simple and stress-free. Our team will:
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
                            {/* Floating Orange Circle */}
                            <div className="absolute top-0 right-0 border-gray-100 border-[7px] w-12 h-12 bg-[#FF6B6B] rounded-full translate-x-[30%] -translate-y-[30%] box-content"></div>


                            {/* Icon */}
                            <div className="mb-6 h-20 flex items-center">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[1.15rem] font-bold text-[#2D2D2D] pr-8">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeCanHelp;
