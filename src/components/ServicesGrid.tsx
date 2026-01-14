import React from 'react';

const ServicesGrid = () => {
    const services = [
        {
            icon: '/assets/resident-mortgage.svg',
            title: 'Resident Mortgages',
            description: 'Using our extensive knowledge of the UAE home loan market and property transaction process - we\'ll take the hassle out of getting your mortgage.',
            cta: 'Get Pre-Approved',
            link: '#'
        },
        {
            icon: '/assets/non-resident-mortgages.svg',
            title: 'Non-Resident Mortgages',
            description: 'If you\'re looking to buy in Dubai, Abu Dhabi or anywhere else in the UAE, we can assist with our low-documentation exclusive mortgage offers.',
            cta: 'Check Eligibility',
            link: '#'
        },
        {
            icon: '/assets/equity-release.svg',
            title: 'Equity Release / Buyouts',
            description: 'We can help you unlock equity from a property you already own, or refinance an existing mortgage if you\'re currently paying too much.',
            cta: 'Find out more',
            link: '#'
        },
        {
            icon: '/assets/commercial-finance.svg',
            title: 'Commercial Finance',
            description: 'We can help you unlock equity from a property you already own, or refinance an existing mortgage if you\'re currently paying too much.',
            cta: 'Find out more',
            link: '#'
        }
    ];

    return (
        <div className="py-30 bg-white font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-19">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Icon */}
                            <div className="mb-6">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="h-16 w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[1.35rem] font-bold text-[#333] mb-4 leading-tight">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#666] text-[0.95rem] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* CTA Link */}
                            <a
                                href={service.link}
                                className="inline-flex items-center text-[#3a307f] font-bold text-[0.9rem] hover:bg-[#3a307f66]  transition-colors  bg-[#3a307f11] px-3 py-1 rounded-lg w-fit"
                            >
                                {service.cta} →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
