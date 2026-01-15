import React from 'react';

const WhyUseSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[2.75rem] font-bold text-[#2D2D2D] leading-tight mb-6">
                            Why use Mortgage<br />
                            Finder?
                        </h2>
                        <p className="text-[#666] text-lg mb-8 max-w-lg leading-relaxed">
                            Skip the hassle of endless trips, bank application forms, lender
                            negotiation and months of uncertainty.
                        </p>

                        <div className="flex items-center gap-4 mb-16">
                            <span className="text-[3.5rem] font-bold text-[#E53935]">4.9</span>
                            <div className="flex flex-col">
                                <div className="flex gap-1 text-[#E53935] mb-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[#888] text-sm">1200+ Total reviews on Google</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div>
                                <div className="mb-4">
                                    <img src="/assets/save-money.svg" alt="Save Money" className="h-16 w-auto" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">We'll save you money</h3>
                                <p className="text-[#666] text-xs leading-relaxed">
                                    We have relationships with all of the top lenders,
                                    giving us access to the best mortgage rates as well
                                    as exclusive discounts on fees and interest rates.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div>
                                <div className="mb-4">
                                    <img src="/assets/save-time.svg" alt="Save Time" className="h-16 w-auto" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">We'll save you time</h3>
                                <p className="text-[#666] text-xs leading-relaxed">
                                    We will compare all available mortgages and
                                    recommend the best one for you. Meaning you
                                    don't have to negotiate with 20+ banks yourself.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div>
                                <div className="mb-4">
                                    <img src="/assets/vip-service.svg" alt="VIP Service" className="h-16 w-auto" />
                                </div>
                                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">We'll give you a VIP service</h3>
                                <p className="text-[#666] text-xs leading-relaxed">
                                    We manage the mortgage process from start to
                                    finish, dealing with all potential hurdles to ensure
                                    you're able to buy your dream property. We work
                                    for you, not the banks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative lg:pl-10">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {/* Red Background Accent */}
                            <div className="absolute top-0 right-0 w-[95%] h-[95%] bg-[#E53935] rounded-[40px] transform translate-x-4 -translate-y-4"></div>

                            <div className="relative bg-gray-200 rounded-[40px] overflow-hidden aspect-[4/3] z-10 w-full transform -translate-x-2 translate-y-2">
                                <img src="/assets/slide-1.jpeg" alt="Mortgage Consultation" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUseSection;
