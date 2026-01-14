import React from 'react';

const Stats = () => {
    const stats = [
        {
            icon: '/assets/experience.svg',
            val: '20+',
            label: 'Years of Experience',
            subtext: 'Helping thousands of homeowners secure the best mortgage deals in the UAE.'
        },
        {
            icon: '/assets/feedback.svg',
            val: '1200+',
            label: '5-star Google Reviews',
            subtext: '#1 highest-rated mortgage provider on Google globally, trusted with 1200+ 5-star reviews.'
        },
        {
            icon: '/assets/process.svg',
            val: '100k+',
            label: 'Application Processed',
            subtext: 'Expertise that delivers—over 100,000 successful mortgage applications.'
        },
        {
            icon: '/assets/bank-partners.svg',
            val: '20+',
            label: 'Bank Partners',
            subtext: 'Exclusive access to top UAE banks to find the best rates for you.'
        }
    ];

    return (
        <div className="bg-[#3a307f] py-24 text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-[2.75rem] font-bold mb-5 leading-tight tracking-tight">Be a part of something bigger</h2>
                    <p className="text-white/80 text-[1.15rem] max-w-2xl font-normal leading-relaxed">
                        Experience the difference with Mortgage Finder—your most trusted mortgage broker in the UAE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-start text-left">
                            <div className="h-16 mb-6 flex items-end">
                                <img
                                    src={stat.icon}
                                    alt={stat.label}
                                    className="h-14 w-auto object-contain"
                                    style={{
                                        filter: 'brightness(0) invert(1)',
                                        opacity: 0.9
                                    }}
                                />
                            </div>
                            <div className="text-[3.25rem] font-bold mb-1 leading-none tracking-tight">{stat.val}</div>
                            <div className="text-[1.15rem] font-bold mb-4 opacity-95">{stat.label}</div>
                            <p className="text-[#A09BC2] text-[0.95rem] leading-[1.6] pr-2 font-normal">
                                {stat.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
