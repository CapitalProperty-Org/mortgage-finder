import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, ArrowRight, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const EligibilityCalculator = () => {
    const [formData, setFormData] = useState({
        monthlyIncome: '',
        liabilities: '',
        creditCards: '',
        residency: 'uae-resident', // 'uae-national', 'uae-resident', 'non-resident'
        firstTimeBuyer: 'yes',
    });

    const [showUpfrontCosts, setShowUpfrontCosts] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleContactFormChange = (field: string, value: string) => {
        setContactForm({ ...contactForm, [field]: value });
    };

    const handleGetCertificate = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                        Buying a home and wondering how much<br />you can borrow?
                    </h1>
                    <p className="text-gray-600">
                        Let's find out what you're eligible for.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column: Inputs */}
                    <div className="space-y-6">
                        {/* Monthly Income */}
                        <div>
                            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                Monthly income
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your monthly income"
                                value={formData.monthlyIncome}
                                onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                            />
                        </div>

                        {/* Total monthly liabilities */}
                        <div>
                            <div className="flex items-center mb-2">
                                <label className="block text-sm font-medium text-[#2D2D2D] mr-2">
                                    Total monthly liabilities
                                </label>
                                <div className="group relative">
                                    <Info size={16} className="text-[#3a307f] cursor-help" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-800 text-white text-xs rounded z-10">
                                        Include car loans, personal loans, etc.
                                    </div>
                                </div>
                            </div>
                            <input
                                type="number"
                                placeholder="Enter your total liabilities"
                                value={formData.liabilities}
                                onChange={(e) => handleInputChange('liabilities', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                            />
                        </div>

                        {/* Credit card limits */}
                        <div>
                            <div className="flex items-center mb-2">
                                <label className="block text-sm font-medium text-[#2D2D2D] mr-2">
                                    Credit card limits
                                </label>
                                <div className="group relative">
                                    <Info size={16} className="text-[#3a307f] cursor-help" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-800 text-white text-xs rounded z-10">
                                        Total limit of all your credit cards
                                    </div>
                                </div>
                            </div>
                            <input
                                type="number"
                                placeholder="Enter your total credit card limits"
                                value={formData.creditCards}
                                onChange={(e) => handleInputChange('creditCards', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                            />
                        </div>

                        {/* Residency status */}
                        <div>
                            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                Residency status
                            </label>
                            <div className="flex bg-[#F3F4F6] rounded-lg p-1">
                                {['UAE national', 'UAE Resident', 'Non resident'].map((option) => {
                                    const value = option.toLowerCase().replace(' ', '-');
                                    const isSelected = formData.residency === value;
                                    return (
                                        <button
                                            key={value}
                                            onClick={() => handleInputChange('residency', value)}
                                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${isSelected
                                                ? 'bg-white text-[#3a307f] shadow-sm'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* First time buying */}
                        <div>
                            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                                Is this your first time buying property in the UAE?
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="firstTimeBuyer"
                                        value="no"
                                        checked={formData.firstTimeBuyer === 'no'}
                                        onChange={(e) => handleInputChange('firstTimeBuyer', e.target.value)}
                                        className="w-4 h-4 text-[#3a307f] focus:ring-[#3a307f] accent-[#3a307f]"
                                    />
                                    <span className="text-sm text-gray-700">No</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="firstTimeBuyer"
                                        value="yes"
                                        checked={formData.firstTimeBuyer === 'yes'}
                                        onChange={(e) => handleInputChange('firstTimeBuyer', e.target.value)}
                                        className="w-4 h-4 text-[#3a307f] focus:ring-[#3a307f] accent-[#3a307f]"
                                    />
                                    <span className="text-sm text-gray-700">Yes</span>
                                </label>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="pt-4">
                            <button
                                onClick={handleGetCertificate}
                                disabled={!formData.monthlyIncome || !formData.liabilities || !formData.creditCards}
                                className={`w-full sm:w-auto px-8 py-3 font-medium rounded-lg transition-colors ${formData.monthlyIncome && formData.liabilities && formData.creditCards
                                    ? 'bg-[#EA3934] text-white hover:bg-red-600 shadow-md'
                                    : 'bg-[#E5E7EB] text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Get your eligibility certificate
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Results */}
                    <div className="bg-[#F8F9FF] rounded-2xl p-8">
                        {/* Property Purchase Price */}
                        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                            <span className="text-sm font-medium text-[#2D2D2D]">Property Purchase Price</span>
                            <span className="text-xl font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                        </div>

                        {/* Mortgage Loan Amount */}
                        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                            <span className="text-sm font-medium text-[#2D2D2D]">Mortgage Loan Amount</span>
                            <span className="text-xl font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                        </div>

                        {/* Upfront Costs */}
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <button
                                onClick={() => setShowUpfrontCosts(!showUpfrontCosts)}
                                className="w-full flex justify-between items-center group"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-[#2D2D2D]">Upfront Costs</span>
                                    {showUpfrontCosts ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                                </div>
                                <span className="text-xl font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                            </button>

                            {/* Expanded Upfront Costs Content */}
                            {showUpfrontCosts && (
                                <div className="mt-6 space-y-4 pl-4 border-l-2 border-[#3a307f]/10">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="block text-sm text-gray-600 mb-1">Down Payment</span>
                                            <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs">
                                                For properties priced under AED 5 million, buyers are typically required to make a minimum down
                                                payment of 15%, while properties priced over AED 5 million generally require a higher down payment of
                                                30%
                                            </p>
                                        </div>
                                        <span className="text-sm font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                                    </div>
                                    {[
                                        'Land Department Fee',
                                        'Land Department Title Fee',
                                        'Registration Trustee Fee',
                                        'Mortgage Registration Fee',
                                        'Real Estate Agency Fee',
                                        'Bank Arrangement Fee',
                                        'Mortgage Valuation Fee',
                                    ].map((fee) => (
                                        <div key={fee} className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">{fee}</span>
                                            <span className="text-sm font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Monthly Mortgage Payments */}
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-medium text-[#2D2D2D]">Monthly Mortgage Payments</span>
                            <span className="text-xl font-bold text-[#2D2D2D] blur-[4px]">0 AED</span>
                        </div>

                        <div className="text-center mb-8">
                            <p className="text-xs text-gray-500">
                                You can adjust your liabilities to increase the mortgage amount
                            </p>
                        </div>

                        {/* CTA Box */}
                        {/* CTA Box */}
                        <div className="bg-white rounded-xl p-6 relative overflow-hidden">
                            <div className="flex justify-between items-end">
                                <div className="relative z-10">
                                    <h3 className="text-sm font-bold text-[#2D2D2D] mb-1">
                                        We found 0 properties
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-4">
                                        within your budget.
                                    </p>
                                    <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#F3F4F6] text-gray-400 text-xs font-semibold rounded-lg cursor-not-allowed">
                                        View properties
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4">
                                    <img
                                        src="/assets/house-illustration.svg"
                                        alt="House illustration"
                                        className="w-32 h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lead Capture Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl transform transition-all">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-medium text-[#2D2D2D] mb-2 leading-relaxed">
                                Your custom eligibility certificate is ready! Please verify your contact details to unlock them.
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={contactForm.name}
                                onChange={(e) => handleContactFormChange('name', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={contactForm.email}
                                onChange={(e) => handleContactFormChange('email', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                            />

                            <div className="modal-phone-input">
                                <PhoneInput
                                    defaultCountry="ae"
                                    value={contactForm.phone}
                                    onChange={(phone) => handleContactFormChange('phone', phone)}
                                    placeholder="Enter your phone number"
                                    forceDialCode={true}
                                    showDisabledDialCodeAndPrefix={true}
                                />
                            </div>

                            <button
                                className="w-full py-3 bg-[#EE4238] text-white rounded-lg font-bold text-sm hover:bg-[#d63b32] transition-colors mt-2"
                            >
                                Continue
                            </button>

                            <p className="text-[10px] text-gray-400 text-center mt-4">
                                By continuing you accept our <Link to="/terms-and-conditions" className="underline hover:text-gray-600">Terms of Use</Link> and <Link to="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                /* Phone Input Custom Styles from Home Page */
                .react-international-phone-input-container {
                    width: 100%;
                }
                .react-international-phone-input-container .react-international-phone-input {
                    width: 100%;
                    padding: 16px 20px;
                    border: 1px solid #d1d5db !important;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    outline: none;
                    transition: border-color 0.2s;
                    background: white;
                }
                .react-international-phone-input-container .react-international-phone-input:focus {
                    border-color: #3a307f !important;
                }
                .react-international-phone-input-container .react-international-phone-input::placeholder {
                    color: #9ca3af;
                }
                .react-international-phone-country-selector-button {
                    border: none !important;
                    background: transparent !important;
                    padding: 0 12px !important;
                }
                .react-international-phone-country-selector-button__button-content {
                    gap: 6px;
                }
                .react-international-phone-country-selector-button__flag-emoji {
                    font-size: 24px;
                }
                
                /* Dropdown Styling */
                .react-international-phone-country-selector-dropdown {
                    border: 2px solid #e5e7eb !important;
                    border-radius: 12px !important;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
                    margin-top: 8px !important;
                    padding: 8px 0 !important;
                    max-height: 320px !important;
                }
                
                /* Search Input */
                .react-international-phone-country-selector-dropdown__search-container {
                    padding: 12px 16px !important;
                    border-bottom: 1px solid #f3f4f6 !important;
                }
                .react-international-phone-country-selector-dropdown__search-input {
                    width: 100% !important;
                    padding: 12px 16px 12px 42px !important;
                    border: 1px solid #e5e7eb !important;
                    border-radius: 8px !important;
                    font-size: 0.9rem !important;
                    color: #666 !important;
                    background-color: white !important;
                }
                .react-international-phone-country-selector-dropdown__search-input::placeholder {
                    color: #9ca3af !important;
                }
                .react-international-phone-country-selector-dropdown__search-input:focus {
                    border-color: #3a307f !important;
                    outline: none !important;
                }
                
                /* Country List Items */
                .react-international-phone-country-selector-dropdown__list-item {
                    padding: 14px 20px !important;
                    font-size: 0.95rem !important;
                    color: #2D2D2D !important;
                    cursor: pointer !important;
                    transition: background-color 0.15s !important;
                    display: flex !important;
                    align-items: center !important;
                    gap: 12px !important;
                }
                .react-international-phone-country-selector-dropdown__list-item:hover {
                    background-color: #f9fafb !important;
                }
                .react-international-phone-country-selector-dropdown__list-item--selected {
                    background-color: #eff6ff !important;
                    border-left: 3px solid #3a307f !important;
                }
                .react-international-phone-country-selector-dropdown__list-item__flag-emoji {
                    font-size: 22px !important;
                    width: 28px !important;
                }
                .react-international-phone-country-selector-dropdown__list-item__country-name {
                    flex: 1 !important;
                    color: #2D2D2D !important;
                    font-weight: 500 !important;
                }
                .react-international-phone-country-selector-dropdown__list-item__dial-code {
                    color: #666 !important;
                    font-size: 0.9rem !important;
                }
            `}</style>
        </div>
    );
};

export default EligibilityCalculator;
