import React from 'react';

const features = [
    {
        icon: '/assets/save-money.svg',
        title: "You'll get the best rates",
        description: "We work for you, not the banks. We're the only mortgage provider in the UAE offering truly unbiased advice. Our expert advisors are focused on helping you find the best rates, terms, and savings, always with your best interest in mind. Your satisfaction is how we measure success."
    },
    {
        icon: '/assets/save-time.svg',
        title: "You'll save time",
        description: "No need to negotiate with dozens of banks—we'll do it on your behalf and bring you the best handful of offers from 20+ UAE top banks."
    },
    {
        icon: '/assets/vip-service.svg',
        title: "You'll get VIP treatment",
        description: "Secure your dream property with ease. We manage the mortgage process end-to-end, from pre-approval to post-purchase, ensuring a smooth path to homeownership."
    }
];

const EligibilityWhyChoose = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-3xl font-bold text-[#2D2D2D] mb-12">
                        Why homeowners prefer Mortgage Finder (and so will you)
                    </h2>

                    {/* Main Image */}
                    <div className="relative w-full max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-lg aspect-[16/9] lg:aspect-[21/9]">
                        <img
                            src="/assets/black-girl.webp"
                            alt="Couple discussing mortgage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="h-16 mb-6 flex items-center justify-center">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="h-full w-auto"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EligibilityWhyChoose;
