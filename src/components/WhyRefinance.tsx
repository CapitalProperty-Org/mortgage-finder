import React from 'react';

const WhyRefinance = () => {
    const benefits = [
        {
            image: '/assets/leverage.jpeg',
            title: 'Access more cash',
            description: 'If your property value has gone up, you can take out some of that increased value in cash — without needing to sell your home.'
        },
        {
            image: '/assets/monthly-payments.jpeg',
            title: 'Lower monthly payments',
            description: 'Equity release often means lower payments than credit cards or personal loans — and sometimes you can borrow without increasing your monthly payment at all.'
        },
        {
            image: '/assets/flexible.jpeg', // Assuming this asset exists or using a placeholder
            title: 'Use the money your way',
            description: 'Whether you want to upgrade your home or invest in another one, equity release gives you flexible options.'
        }
    ];

    return (
        <section className="py-24 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] mb-4">
                        Benefits of Refinancing
                    </h2>
                    <p className="text-[#666] text-sm max-w-2xl mx-auto leading-relaxed">
                        Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals,
                        expert advice, and tailored services to meet your needs.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="group">
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl h-[260px]">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative -mt-6 p-8 bg-white rounded-t-[2rem] shadow-sm border border-gray-100/50">
                                <h3 className="text-[1.1rem] font-bold text-[#2D2D2D] mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#666] text-[0.85rem] leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyRefinance;
