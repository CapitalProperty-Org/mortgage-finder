import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

type ResidencyStatus = 'UAE national' | 'UAE resident' | 'Non resident';

const Calculator = () => {
    const [residencyStatus, setResidencyStatus] = useState<ResidencyStatus>('UAE national');
    const [purchasePrice, setPurchasePrice] = useState(110640000);
    const [downPayment, setDownPayment] = useState(33180000);
    const [loanAmount, setLoanAmount] = useState(77420000);
    const [loanPeriod, setLoanPeriod] = useState(25);
    const [interestRate, setInterestRate] = useState(3.75);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Residency constraints
    const getConstraints = () => {
        switch (residencyStatus) {
            case 'UAE national':
                return { minDownPercent: 15, maxLoanPercent: 85, defaultRate: 4.54 };
            case 'UAE resident':
                return { minDownPercent: 20, maxLoanPercent: 80, defaultRate: 3.75 };
            case 'Non resident':
                return { minDownPercent: 40, maxLoanPercent: 60, defaultRate: 4.54 };
        }
    };

    // Update when residency changes
    useEffect(() => {
        const constraints = getConstraints();
        const newDownPayment = Math.round(purchasePrice * (constraints.minDownPercent / 100));
        const newLoanAmount = purchasePrice - newDownPayment;
        setDownPayment(newDownPayment);
        setLoanAmount(newLoanAmount);
        setInterestRate(constraints.defaultRate);
    }, [residencyStatus]);

    // Calculate monthly payment
    const calculateMonthlyPayment = () => {
        const r = interestRate / 100 / 12;
        const n = loanPeriod * 12;
        if (r === 0) return Math.round(loanAmount / n);
        return Math.round(loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    };

    const monthlyPayment = calculateMonthlyPayment();
    const downPercent = Math.round((downPayment / purchasePrice) * 100);
    const loanPercent = Math.round((loanAmount / purchasePrice) * 100);
    const constraints = getConstraints();

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] text-center mb-12">
                    Get the right mortgage for you
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-7">
                        {/* Purchase Price */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Purchase Price</label>
                            <input
                                type="text"
                                value={purchasePrice.toLocaleString()}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value.replace(/,/g, '')) || 300000;
                                    setPurchasePrice(val);
                                    const newDown = Math.round(val * (constraints.minDownPercent / 100));
                                    setDownPayment(newDown);
                                    setLoanAmount(val - newDown);
                                }}
                                className="w-full px-5 py-2 border border-gray-300 rounded-lg text-[1.15rem] font-semibold text-[#3a307f] focus:outline-none focus:border-[#3a307f] bg-white transition-colors"
                            />
                            <div className="relative mt-[-15px]">
                                <input
                                    type="range"
                                    min="300000"
                                    max="200000000"
                                    step="10000"
                                    value={purchasePrice}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setPurchasePrice(val);
                                        const newDown = Math.round(val * (constraints.minDownPercent / 100));
                                        setDownPayment(newDown);
                                        setLoanAmount(val - newDown);
                                    }}
                                    className="w-full calc-slider"
                                    style={{
                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((purchasePrice - 300000) / (200000000 - 300000)) * 100}%, #e5e7eb ${((purchasePrice - 300000) / (200000000 - 300000)) * 100}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-[0.75rem] text-[#999] mt-2">
                                <span>300,000 AED</span>
                                <span>200,000,000 AED</span>
                            </div>
                        </div>

                        {/* Residency Status */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Residency Status</label>
                            <div className="grid grid-cols-3 gap-0 border border-gray-300 rounded-lg overflow-hidden">
                                {(['UAE national', 'UAE resident', 'Non resident'] as ResidencyStatus[]).map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setResidencyStatus(status)}
                                        className={`py-3.5 text-[0.9rem] font-semibold transition-all ${residencyStatus === status
                                            ? 'bg-[#3a307f] text-white'
                                            : 'bg-white text-[#666] hover:bg-gray-50'
                                            }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Down payment</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={downPayment.toLocaleString()}
                                    onChange={(e) => {
                                        const val = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                        setDownPayment(val);
                                        setLoanAmount(purchasePrice - val);
                                    }}
                                    className="w-full px-5 py-2 pr-20 border border-gray-300 rounded-lg text-[1.15rem] font-semibold text-[#3a307f] focus:outline-none focus:border-[#3a307f] bg-white transition-colors"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#3a307f] font-bold text-[1.1rem]">
                                    {downPercent}%
                                </span>
                            </div>
                            <div className="relative mt-[-15px]">
                                <input
                                    type="range"
                                    min={Math.round(purchasePrice * (constraints.minDownPercent / 100))}
                                    max={Math.round(purchasePrice * 0.95)}
                                    step="1000"
                                    value={downPayment}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setDownPayment(val);
                                        setLoanAmount(purchasePrice - val);
                                    }}
                                    className="w-full calc-slider"
                                    style={{
                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((downPayment - Math.round(purchasePrice * (constraints.minDownPercent / 100))) / (Math.round(purchasePrice * 0.95) - Math.round(purchasePrice * (constraints.minDownPercent / 100)))) * 100}%, #e5e7eb ${((downPayment - Math.round(purchasePrice * (constraints.minDownPercent / 100))) / (Math.round(purchasePrice * 0.95) - Math.round(purchasePrice * (constraints.minDownPercent / 100)))) * 100}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-[0.75rem] text-[#999] mt-2">
                                <span>{Math.round(purchasePrice * (constraints.minDownPercent / 100)).toLocaleString()} AED</span>
                                <span>{Math.round(purchasePrice * 0.95).toLocaleString()} AED</span>
                            </div>
                        </div>

                        {/* Loan Amount */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Loan amount</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={loanAmount.toLocaleString()}
                                    onChange={(e) => {
                                        const val = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                        setLoanAmount(val);
                                        setDownPayment(purchasePrice - val);
                                    }}
                                    className="w-full px-5 py-2 pr-20 border border-gray-300 rounded-lg text-[1.15rem] font-semibold text-[#3a307f] focus:outline-none focus:border-[#3a307f] bg-white transition-colors"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#3a307f] font-bold text-[1.1rem]">
                                    {loanPercent}%
                                </span>
                            </div>
                            <div className="relative mt-[-15px]">
                                <input
                                    type="range"
                                    min={Math.round(purchasePrice * 0.05)}
                                    max={Math.round(purchasePrice * (constraints.maxLoanPercent / 100))}
                                    step="1000"
                                    value={loanAmount}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setLoanAmount(val);
                                        setDownPayment(purchasePrice - val);
                                    }}
                                    className="w-full calc-slider"
                                    style={{
                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((loanAmount - Math.round(purchasePrice * 0.05)) / (Math.round(purchasePrice * (constraints.maxLoanPercent / 100)) - Math.round(purchasePrice * 0.05))) * 100}%, #e5e7eb ${((loanAmount - Math.round(purchasePrice * 0.05)) / (Math.round(purchasePrice * (constraints.maxLoanPercent / 100)) - Math.round(purchasePrice * 0.05))) * 100}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-[0.75rem] text-[#999] mt-2">
                                <span>{Math.round(purchasePrice * 0.05).toLocaleString()} AED</span>
                                <span>{Math.round(purchasePrice * (constraints.maxLoanPercent / 100)).toLocaleString()} AED</span>
                            </div>
                        </div>

                        {/* Loan Period */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Loan Period</label>
                            <input
                                type="number"
                                value={loanPeriod}
                                onChange={(e) => setLoanPeriod(Number(e.target.value) || 1)}
                                className="w-full px-5 py-2 border border-gray-300 rounded-lg text-[1.15rem] font-semibold text-[#3a307f] focus:outline-none focus:border-[#3a307f] bg-white transition-colors"
                            />
                            <div className="relative mt-[-15px]">
                                <input
                                    type="range"
                                    min="1"
                                    max="25"
                                    value={loanPeriod}
                                    onChange={(e) => setLoanPeriod(Number(e.target.value))}
                                    className="w-full calc-slider"
                                    style={{
                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((loanPeriod - 1) / 24) * 100}%, #e5e7eb ${((loanPeriod - 1) / 24) * 100}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-[0.75rem] text-[#999] mt-2">
                                <span>1 year</span>
                                <span>25 years</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="block text-[#666] text-[0.95rem] font-semibold mb-3">Interest rate</label>
                            <div className="relative ">
                                <input
                                    type="number"
                                    step="0.01"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value) || 1)}
                                    className="w-full px-5 py-2 pr-16 border border-gray-300 rounded-lg text-[1.15rem] font-semibold text-[#3a307f] focus:outline-none focus:border-[#3a307f] bg-white transition-colors"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#3a307f] font-bold text-[1.1rem]">
                                    %
                                </span>
                            </div>
                            <div className="relative mt-[-15px]">
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="0.01"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-full calc-slider"
                                    style={{
                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((interestRate - 1) / 9) * 100}%, #e5e7eb ${((interestRate - 1) / 9) * 100}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-[0.75rem] text-[#999] mt-2">
                                <span>1%</span>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Result Box */}
                        <div className="text-center py-6">
                            <h3 className="text-[#2D2D2D] text-[1.75rem] font-bold mb-6">
                                Estimate your monthly mortgage payment
                            </h3>
                            <div className="flex items-start justify-center gap-12 mb-6">
                                <div className="text-center">
                                    <p className="text-[#999] text-[0.85rem] mb-2">monthly payment</p>
                                    <p className="text-[#3a307f] text-[2.75rem] font-bold leading-none">
                                        {monthlyPayment.toLocaleString()} AED
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[#999] text-[0.85rem] mb-2">with interest rate of</p>
                                    <p className="text-[#3a307f] text-[2.75rem] font-bold leading-none">
                                        {interestRate}%
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className="text-[#3a307f] text-[0.95rem] font-semibold px-6 py-2.5 border-2 border-[#3a307f] rounded hover:bg-[#3a307f] hover:text-white transition-colors"
                            >
                                View upfront costs
                            </button>
                        </div>

                        <div className="border-t border-gray-200 pt-8"></div>

                        {/* Form */}
                        <div className="space-y-5">
                            <h4 className="text-[#2D2D2D] text-[1.5rem] font-bold text-center mb-6">
                                Please enter your details
                            </h4>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-[#3a307f] placeholder:text-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-[#3a307f] placeholder:text-gray-400"
                            />
                            <PhoneInput
                                defaultCountry="ae"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                placeholder="Enter your phone number"
                                forceDialCode={true}
                                showDisabledDialCodeAndPrefix={true}
                            />
                            <button className="w-full bg-[#EA3934] text-white py-4 rounded-lg font-bold text-[1.05rem] hover:bg-red-600 transition-colors shadow-sm">
                                Check your eligibility
                            </button>

                            {/* Properties Box */}
                            <div className="bg-white border-2 border-gray-100 rounded-lg p-6 relative overflow-hidden mt-6">
                                <p className="text-[#666] text-[0.9rem] mb-1">
                                    We found <span className="font-bold text-[#2D2D2D]">208,468</span>
                                </p>
                                <p className="text-[#666] text-[0.9rem] mb-4">
                                    <span className="font-bold text-[#2D2D2D]">properties</span> within your budget.
                                </p>
                                <button className="inline-flex items-center gap-2 text-[#3a307f] font-semibold text-[0.9rem] hover:text-[#EA3934] transition-colors border-2 border-[#3a307f] px-5 py-2 rounded hover:border-[#EA3934]">
                                    View properties
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="absolute bottom-4 right-4 w-32 h-32 ">
                                    <img src="/assets/house-illustration.svg" className="w-full h-full" alt="" />
                                    {/* <svg viewBox="0 0 120 120" className="w-full h-full">
                                        
                                        
                                        <ellipse cx="30" cy="100" rx="8" ry="12" fill="#60a5fa" opacity="0.6" />
                                        <rect x="45" y="65" width="50" height="45" fill="#fb923c" rx="2" />
                                        <rect x="50" y="70" width="15" height="15" fill="#fbbf24" opacity="0.7" />
                                        <rect x="70" y="70" width="15" height="15" fill="#fbbf24" opacity="0.7" />
                                        <rect x="60" y="90" width="15" height="20" fill="#dc2626" />
                                        <polygon points="70,45 45,65 95,65" fill="#ef4444" />
                                        <circle cx="100" cy="35" r="12" fill="#fbbf24" opacity="0.8" />
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upfront Costs Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-[640px] w-full relative shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
                            <h3 className="text-[1.35rem] font-bold text-[#2D2D2D]">Estimated upfront costs</h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X size={22} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-8 py-6">
                            {/* Payment Breakdown Box */}
                            <div className="border border-gray-200 rounded-lg p-6 mb-8">
                                <h4 className="text-[#2D2D2D] text-[1.05rem] font-semibold mb-6">Payment breakdown</h4>

                                <div className="space-y-5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#666] text-[0.95rem]">Down payment</span>
                                        <span className="text-[#2D2D2D] font-semibold text-[0.95rem]">{downPayment.toLocaleString()} AED</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#3a307f] text-[0.95rem] font-semibold">Total purchase costs</span>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#3a307f]">
                                                <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M7 9.5V7M7 4.5H7.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <span className="text-[#2D2D2D] font-semibold text-[0.95rem]">{Math.round(purchasePrice * 0.0653).toLocaleString()} AED</span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-5">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#2D2D2D] text-[1rem] font-bold">Total amount required upfront</span>
                                            <span className="text-[#2D2D2D] font-bold text-[1rem]">{(downPayment + Math.round(purchasePrice * 0.0653)).toLocaleString()} AED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Calculations Based On */}
                            <div>
                                <h4 className="text-[#2D2D2D] text-[1.05rem] font-semibold mb-5">Calculations based on</h4>

                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                    <div>
                                        <p className="text-[#999] text-[0.8rem] mb-2">monthly payment</p>
                                        <p className="text-[#2D2D2D] font-bold text-[1rem]">{monthlyPayment.toLocaleString()} AED</p>
                                    </div>
                                    <div>
                                        <p className="text-[#999] text-[0.8rem] mb-2">interest rate</p>
                                        <p className="text-[#2D2D2D] font-bold text-[1rem]">{interestRate}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[#999] text-[0.8rem] mb-2">loan amount</p>
                                        <p className="text-[#2D2D2D] font-bold text-[1rem]">{loanAmount.toLocaleString()} AED</p>
                                    </div>
                                    <div>
                                        <p className="text-[#999] text-[0.8rem] mb-2">loan duration</p>
                                        <p className="text-[#2D2D2D] font-bold text-[1rem]">{loanPeriod} years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .calc-slider {
                    -webkit-appearance: none;
                    height: 6px;
                    border-radius: 3px;
                    background: #e5e7eb;
                    outline: none;
                }
                .calc-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #3a307f;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .calc-slider::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #3a307f;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .calc-slider::-moz-range-progress {
                    background: #3a307f;
                    height: 6px;
                    border-radius: 3px;
                }

                /* Phone Input Custom Styles */
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

export default Calculator;
