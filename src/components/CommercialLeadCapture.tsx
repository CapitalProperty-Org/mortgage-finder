import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const CommercialLeadCapture = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Commercial form submitted:', formData);
        // Handle form submission
    };

    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
                    Share your details to serve you better
                </h2>

                <p className="text-gray-600 mb-12">
                    Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals, expert advice, and tailored services to meet your needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a307f]/20 focus:border-[#3a307f] transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a307f]/20 focus:border-[#3a307f] transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="text-left">
                        <style>{`
                            .react-international-phone-input-container .react-international-phone-input {
                                width: 100%;
                                height: 58px;
                                border: 1px solid #e5e7eb !important;
                                border-radius: 8px;
                                font-size: 1rem;
                                outline: none;
                                transition: border-color 0.2s;
                                background: white;
                            }
                            .react-international-phone-input-container .react-international-phone-country-selector {
                                height: 58px;
                                border: 1px solid #e5e7eb !important;
                                border-radius: 8px 0 0 8px;
                                background: white;
                            }
                            .react-international-phone-input-container .react-international-phone-country-selector-button {
                                height: 56px;
                                background: white;
                            }
                        `}</style>
                        <PhoneInput
                            defaultCountry="ae"
                            value={formData.phone}
                            onChange={(phone) => setFormData({ ...formData, phone })}
                            placeholder="Enter your phone number"
                            forceDialCode={true}
                            showDisabledDialCodeAndPrefix={true}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#EA3934] text-white font-bold py-4 rounded-lg hover:bg-[#D9332E] transition-colors mt-6 shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CommercialLeadCapture;
