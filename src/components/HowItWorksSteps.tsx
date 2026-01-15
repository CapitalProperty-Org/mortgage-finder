import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Initial consultation',
        description: 'We conduct an initial consultation to develop a deep understanding of your goals, taking into consideration several aspects including your finances, employment status, age, mid to long-term plans and the type of property you are interested in purchasing.',
        image: '/assets/consultation.jpeg',
    },
    {
        number: '02',
        title: 'Recommendation',
        description: 'We search the whole market to provide you with recommendations of the best mortgage options based on your profile. We then explain your options - highlighting the benefits and drawbacks of each to make sure that you have all of the facts to reach the right decision.',
        image: '/assets/recommendation.png',
    },
    {
        number: '03',
        title: 'Agreement, application and pre-approval',
        description: 'We package your application and submit it to the bank for you. We have the highest pre-approval success rate with the banks! Sometimes the bank will come back with queries on your application, we handle all of these on your behalf saving you the hassle.',
        image: '/assets/pre-approval.jpeg',
    },
    {
        number: '04',
        title: 'Mortgage Processing',
        description: 'We proceed to arrange the property valuation. If there are any issues with the valuation outcome, we work with all parties involved to try and resolve these on your behalf. We arrange for your mortgage bank account opening and support you with all the necessary documents to avoid delays!',
        image: '/assets/mortgage-processing.jpeg',
    },
    {
        number: '05',
        title: 'Final Offer Letter',
        description: 'Prior to requesting the final offer letter we make sure to check that the mortgage selected at the beginning of the process is still the best one. We review the offer letter before you sign it to make sure all key details are correct. Then we coordinate offer signing and confirm the necessary funds are in place for property transfer to proceed smoothly.',
        image: '/assets/offer-letter.jpeg',
    },
    {
        number: '06',
        title: 'Property transfer',
        description: 'We arrange for mortgage disbursement and delivery of property documents to the conveyancer so they can organise the no objection certificate required for property transfer.',
        image: '/assets/property-transfer.png',
    },
    {
        number: '07',
        title: 'Welcome to your new home',
        description: 'Collect the keys to your new property',
        image: '/assets/new-home.jpeg',
    },
];

const HowItWorksSteps = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">How it works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals, expert advice, and tailored services to meet your needs.
                    </p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Side */}
                            <div className="flex-1">
                                <span className="block text-6xl font-bold text-[#9ca3af] mb-4 opacity-50">{step.number}</span>
                                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 relative">
                                {/* Red Accent / Background Shape */}
                                <div className={`absolute -inset-4 bg-[#EA3934] rounded-[2rem] -z-10 transform ${index % 2 === 0 ? '-rotate-2 translate-x-4 translate-y-4' : 'rotate-2 -translate-x-4 translate-y-4'} opacity-90`}></div>

                                <div className="relative rounded-[1.5rem] overflow-hidden bg-white shadow-xl aspect-[4/3]">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSteps;
