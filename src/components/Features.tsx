import React from 'react';
import { ShieldCheck, Clock, Layers, Building2 } from 'lucide-react';

const Features = () => {
    const features = [
        {
            name: 'Unbiased and transparent advice',
            description: 'Our advisors are salaried, not commission-based, ensuring our guidance is free from bank bias and solely focused on your needs.',
            icon: ShieldCheck,
        },
        {
            name: 'End-to-end service',
            description: 'We manage your mortgage journey from start to finish, including handling all documentation and interactions with banks.',
            icon: Clock,
        },
        {
            name: 'Access to every bank in the UAE',
            description: 'We pride ourselves on our extensive network of partnerships with every major bank in the UAE.',
            icon: Layers,
        },
        {
            name: 'Powered by Property Finder',
            description: 'Access calculators, guides, market reports, and more to navigate your home buying journey.',
            icon: Building2,
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        The Mortgage Finder Advantage
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Experience a seamless mortgage journey with the UAE's most trusted advisor.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-brand-blue rounded-md shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
