import React from 'react';

const WhyRefinanceIntro = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[2.75rem] font-bold text-[#2D2D2D] leading-tight mb-6">
                            Why Refinance?
                        </h2>
                        <p className="text-[#666] text-lg leading-relaxed max-w-lg">
                            Refinancing your mortgage can help you save money and unlock some
                            value your home has built over time. It's a smart way to get extra cash
                            — whether you're planning home upgrades or buying another property.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative lg:pl-10">
                        <div className="relative rounded-[40px]">
                            {/* Red Background Accent (Matching Screenshot: Behind, offset to top-right/right) */}
                            {/* In WhyUseSection it was top-right. Here the screenshot shows red block primarily on top/right. 
                                Let's stick to the WhyUseSection style as it looks very similar. */}
                            <div className="absolute top-0 right-0 w-[95%] h-[95%] bg-[#E53935] rounded-[40px] transform translate-x-4 -translate-y-4"></div>

                            <div className="relative bg-gray-200 rounded-[40px] overflow-hidden aspect-[4/3] z-10 w-full transform -translate-x-2 translate-y-2">
                                <img src="/assets/dady.webp" alt="Why Refinance" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3 Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div>
                        <div className="mb-6 flex justify-center sm:justify-start">
                            <img src="/assets/save-money.svg" alt="Save Money" className="h-16 w-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 text-center sm:text-left">We'll save you money</h3>
                        <p className="text-[#666] text-sm leading-relaxed text-center sm:text-left">
                            We work closely with all the top banks, so we can
                            find you the best deals — including special
                            discounts you won't get on your own.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div>
                        <div className="mb-6 flex justify-center sm:justify-start">
                            <img src="/assets/save-time.svg" alt="Save Time" className="h-16 w-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 text-center sm:text-left">We'll save you time</h3>
                        <p className="text-[#666] text-sm leading-relaxed text-center sm:text-left">
                            We compare all your options and recommend
                            what works best for you. No need to talk to
                            dozens of banks.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div>
                        <div className="mb-6 flex justify-center sm:justify-start">
                            {/* Using vip-service.svg based on previous context, but maybe 'manage-process.svg' is better given "Take Care of Everything"?
                                User said "last 3 card we have created before". WhyUseSection used vip-service.svg.
                                Let's stick to vip-service.svg unless I find a better match. */}
                            <img src="/assets/vip-service.svg" alt="VIP Service" className="h-16 w-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 text-center sm:text-left">We'll Take Care of Everything</h3>
                        <p className="text-[#666] text-sm leading-relaxed text-center sm:text-left">
                            From paperwork to approvals, we handle the full
                            process for you. We work for you not the bank.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyRefinanceIntro;
