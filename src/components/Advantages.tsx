import React from 'react';

const Advantages = () => {
    const advantages = [
        {
            icon: '/assets/unbiased.svg',
            title: 'Unbiased and transparent advice',
            description: 'Our advisors are salaried, not commission-based, ensuring our guidance is free from bank bias and solely focused on your needs. This transparency builds trust and aligns our interests with yours.'
        },
        {
            icon: '/assets/e2e.svg',
            title: 'End-to-end service',
            description: 'We manage your mortgage journey from start to finish, including handling all documentation, interactions with banks, and coordinating with conveyancers. This saves you valuable time and reduces stress.'
        },
        {
            icon: '/assets/bank.svg',
            title: 'Access to every bank in the UAE',
            description: 'As Mortgage Finder, we pride ourselves on our extensive network of partnerships with every major bank in the UAE, enabling us to offer a variety of mortgage products to suit different needs.'
        },
        {
            icon: '/assets/powered-by.svg',
            title: 'Powered by Property Finder',
            description: 'Access customer guides, market reports, and more to navigate your home buying journey. Powered by the biggest name in real estate.'
        }
    ];

    return (
        <div className="py-20 bg-[#F5F5F5] font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title and CTA at top */}
                <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <h2 className="text-[2.25rem] font-bold text-[#333] leading-[1.2] lg:max-w-md">
                        The Mortgage Finder<br />advantage
                    </h2>

                    <div className="lg:text-right">
                        <p className="text-[#666] text-[0.9rem] mb-4 leading-relaxed">
                            See why thousands trust us as their go-to mortgage broker.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-[#3a307f] font-bold text-[0.9rem] hover:text-[#EA3934] transition-colors border-[1px] bg-[#fff] p-3 rounded-sm border-[#3a307f] hover:border-[#EA3934] pb-0.5"
                        >
                            Connect with an advisor →
                        </a>
                    </div>
                </div>

                {/* Benefits Grid - 2x2 with white cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="relative bg-white px-10 py-12 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
                            {/* Red/Orange dot positioned absolutely at top-right corner - 0px offset */}
                            <div className="absolute top-0 right-0 border-gray-100 border-[7px] w-12 h-12 bg-[#FF6B6B] rounded-full translate-x-[40%] -translate-y-[40%]"></div>

                            {/* Icon */}
                            <div className="mb-8">
                                <img
                                    src={advantage.icon}
                                    alt={advantage.title}
                                    className="h-20 w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[1.35rem] font-bold text-[#2D2D2D] mb-5 leading-tight">
                                {advantage.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#666] text-[0.95rem] leading-[1.75]">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
