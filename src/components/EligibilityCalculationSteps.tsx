import React from 'react';

const steps = [
    {
        title: 'Monthly Income',
        description: "As a rule of thumb, your loan amount is usually capped at around seven times your annual income, and your total monthly loan payments shouldn't go over 50% of what you earn each month.",
        image: '/assets/flexible.jpeg', // Placeholder
        direction: 'left' // text left, image right
    },
    {
        title: 'Monthly Debt',
        description: "UAE banks assess your Debt Burden Ratio (DBR) to decide how much you can borrow. It's the percentage of your monthly income that goes toward repaying debts (including your future mortgage payments). Lenders use a slightly higher interest rate to calculate your mortgage — just to ensure you can still afford payments if rates rise in the future.",
        image: '/assets/monthly-payments.jpeg', // Placeholder
        direction: 'right' // image left, text right
    },
    {
        title: 'Down Payment',
        description: "If you're a resident, you'll need at least 20% of the property price in cash to get a mortgage. For UAE nationals, it's a bit lower at 15%. Non-residents can also apply, but they'll need a minimum of 40% as a down payment. Don't forget to budget for extra costs like fees, taxes, and registration which is typically an additional 8%.",
        image: '/assets/blog-2.jpeg', // Placeholder
        direction: 'left' // text left, image right
    }
];

const EligibilityCalculationSteps = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-3xl font-bold text-[#2D2D2D]">
                        How is your eligibility calculated?
                    </h2>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${step.direction === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Text Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-xl lg:text-2xl font-bold text-[#2D2D2D] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image with Shape */}
                            <div className="flex-1 relative justify-center flex w-full">
                                <div className="relative w-full max-w-lg aspect-[4/3]">
                                    {/* Red Shape Background */}
                                    <div className={`absolute top-4 -bottom-4 w-full h-full bg-[#EE4238] rounded-[2rem] z-0
                                        ${step.direction === 'left' ? 'right-4 left-auto rounded-tl-none rounded-br-[4rem]' : 'left-4 right-auto rounded-tr-none rounded-bl-[4rem]'}`}
                                    ></div>

                                    {/* Image */}
                                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EligibilityCalculationSteps;
