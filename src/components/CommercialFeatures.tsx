import React from 'react';

const features = [
    {
        icon: '/assets/upto.svg', // Borrow upto 80% (Need matching icon, using placehoder)
        title: "Borrow upto 80%",
        description: "Borrow up to 80% of property valuation. We take the hassle out of navigating paperwork and liaising with banks."
    },
    {
        icon: '/assets/loan-terms.svg', // Loan terms up to 15 years
        title: "Loan terms up to 15 years",
        description: "Flexible long-term financing options with repayment plans of up to 15 years"
    },
    {
        icon: '/assets/barrow.svg', // Upto AED 600 million
        title: "Upto AED 600 million",
        description: "Loans up to AED 600 million, designed for high-value commercial investments and large-scale acquisitions"
    },
    {
        icon: '/assets/income.svg', // Existing or forecast income
        title: "Existing or forecast income",
        description: "Loan serviceability can be based on existing or forecast rental income"
    },
    {
        icon: '/assets/release.svg', // Release cash
        title: "Release cash",
        description: "Release cash for any purpose. We take the hassle out of navigating paperwork and liaising with banks."
    },
    {
        icon: '/assets/coverage.svg', // Full UAE coverage
        title: "Full UAE coverage",
        description: "We provide commercial financing solutions across the entire UAE to support your property investments anywhere in the country."
    },
    {
        icon: '/assets/resident.svg', // Resident and non-resident
        title: "Resident and non-resident",
        description: "Resident and non-resident options available. We take the hassle out of navigating paperwork and liaising with banks."
    },
    {
        icon: '/assets/conventional.svg', // Islamic and conventional
        title: "Islamic and conventional",
        description: "Islamic and conventional options available. We take the hassle out of navigating paperwork and liaising with banks."
    },
    {
        icon: '/assets/residential.svg', // Residential, retail, office
        title: "Residential, retail, office",
        description: "Available for residential, retail, office space, warehousing, hotels, land and mixed-use buildings"
    }
];

const CommercialFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
                        Our commercial finance features
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals, expert advice, and tailored services to meet your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start text-left">
                            <div className="mb-6 bg-red-50 w-12 h-12 rounded-full flex items-center justify-center p-2.5">
                                <img src={feature.icon} alt={feature.title} className="w-full h-full text-[#EA3934]" />
                            </div>

                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommercialFeatures;
