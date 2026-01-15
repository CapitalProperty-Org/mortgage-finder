import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Info } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import CustomSelect from './CustomSelect';

const RefinanceCalculator = () => {
    const [activeTab, setActiveTab] = useState('current-loan');
    const [formData, setFormData] = useState({
        currentLender: '',
        originalLoanAmount: '',
        currentPropertyValue: '',
        loanTermYears: '',
        loanTermMonths: '',
        startDate: '',
        interestRate: '',
        fixedRatePeriod: '',
        // New fields
        employmentStatus: '',
        monthlyIncome: '',
        employmentTenureYears: '',
        employmentTenureMonths: '',
        // Refinance Tab Fields
        borrowerDOB: '',
        currentMortgageBalance: '',
        desiredEquityRelease: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactForm(prev => ({ ...prev, [name]: value }));
    };

    const handleContactFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission logic here (API call, etc.)
        console.log('Contact Form Submitted:', contactForm);
        // Maybe close modal or show success message?
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }

    const validateCurrentLoan = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.currentLender) newErrors.currentLender = 'This field cannot be left empty';
        if (!formData.originalLoanAmount) newErrors.originalLoanAmount = 'This field cannot be left empty';
        if (!formData.currentPropertyValue) newErrors.currentPropertyValue = 'This field cannot be left empty';
        if (!formData.loanTermYears) newErrors.loanTermYears = 'This field cannot be left empty';
        if (!formData.startDate) newErrors.startDate = 'This field cannot be left empty';
        if (!formData.interestRate) newErrors.interestRate = 'This field cannot be left empty';
        if (!formData.fixedRatePeriod) newErrors.fixedRatePeriod = 'This field cannot be left empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateEmploymentDetails = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.employmentStatus) newErrors.employmentStatus = 'This field cannot be left empty';
        if (!formData.monthlyIncome) newErrors.monthlyIncome = 'This field cannot be left empty';
        if (!formData.employmentTenureYears) newErrors.employmentTenureYears = 'This field cannot be left empty';
        // Months optional

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateRefinance = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.borrowerDOB) newErrors.borrowerDOB = 'This field cannot be left empty';
        if (!formData.currentMortgageBalance) newErrors.currentMortgageBalance = 'This field cannot be left empty';
        // Desired Equity Release might be optional or 0, but usually strict in these forms. Assumption: Strict based on "cannot be left empty" pattern.
        if (!formData.desiredEquityRelease) newErrors.desiredEquityRelease = 'This field cannot be left empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleNext = () => {
        if (activeTab === 'current-loan') {
            if (validateCurrentLoan()) {
                setActiveTab('employment-details');
            }
        } else if (activeTab === 'employment-details') {
            if (validateEmploymentDetails()) {
                setActiveTab('refinance');
            }
        } else if (activeTab === 'refinance') {
            if (validateRefinance()) {
                setShowModal(true);
            }
        }
    };

    const handleBack = () => {
        if (activeTab === 'employment-details') setActiveTab('current-loan');
        if (activeTab === 'refinance') setActiveTab('employment-details');
    };

    const tabs = [
        { id: 'current-loan', label: 'Current Loan' },
        { id: 'employment-details', label: 'Employment Details' },
        { id: 'refinance', label: 'Refinance' }
    ];

    const lenderOptions = [
        "ADIB", "AJMAN BANK", "ARAB BANK", "BANK OF BARODA", "CBD",
        "DIB (Dubai Islamic Bank)", "EIB", "ENBD", "FAB", "FAB Islamic",
        "HSBC", "MASHREQ", "NBF", "NOMO", "RAK BANK", "SCB",
        "SIB (Sharjah Islamic Bank)", "UAB"
    ];

    const yearOptions = Array.from({ length: 30 }, (_, i) => ({ value: String(i + 1), label: `${i + 1} Years` }));
    const monthOptions = Array.from({ length: 11 }, (_, i) => ({ value: String(i + 1), label: `${i + 1} Months` }));
    const fixedPeriodOptions = [
        { value: "1", label: "1 Year" },
        { value: "2", label: "2 Years" },
        { value: "3", label: "3 Years" },
        { value: "5", label: "5 Years" }
    ];

    const employmentStatusOptions = [
        "Salaried", "Self-Employed", "Retired", "Other" // Standard options, adjust if user provided specifics later
    ];

    return (
        <section className="py-16 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] mb-4">
                        Refinance Calculator
                    </h2>
                    <p className="text-[#666] text-lg mb-4">
                        Refinance now to lower your monthly payments and lock in better rates.
                    </p>
                    <div className="space-y-1">
                        <p className="text-[#3a307f] font-bold text-xl">
                            Get AED 5,000 cashback on loans starting AED 1M
                        </p>
                        <p className="text-[#EA3934] text-xs font-medium">
                            Offer available for a limited time
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Panel - Form */}
                    <div className="w-full lg:w-[450px] flex-shrink-0">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-8">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`pb-3 pr-6 text-sm font-medium transition-colors relative ${activeTab === tab.id
                                        ? 'text-[#3a307f]'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#3a307f]"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Current Loan Form */}
                        {activeTab === 'current-loan' && (
                            <div className="space-y-6">
                                {/* ... Same fields as before ... */}
                                {/* Lender */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Current Mortgage Lender</label>
                                    <CustomSelect
                                        options={lenderOptions}
                                        value={formData.currentLender}
                                        onChange={(val) => handleSelectChange('currentLender', val)}
                                        placeholder="Select current mortgage lender"
                                        error={errors.currentLender}
                                    />
                                </div>
                                {/* Original Loan Amount */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Original Loan Amount</label>
                                    <input
                                        type="number"
                                        name="originalLoanAmount"
                                        placeholder="Enter Original Loan Amount"
                                        value={formData.originalLoanAmount}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.originalLoanAmount ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.originalLoanAmount && <p className="text-red-500 text-[10px] mt-1">{errors.originalLoanAmount}</p>}
                                </div>
                                {/* Current Property Eval */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Current Property Evaluation</label>
                                    <input
                                        type="number"
                                        name="currentPropertyValue"
                                        placeholder="Enter Current Property Evaluation"
                                        value={formData.currentPropertyValue}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.currentPropertyValue ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.currentPropertyValue && <p className="text-red-500 text-[10px] mt-1">{errors.currentPropertyValue}</p>}
                                </div>
                                {/* Loan Term */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-2">Full Loan Term (years)</label>
                                        <CustomSelect
                                            options={yearOptions}
                                            value={formData.loanTermYears}
                                            onChange={(val) => handleSelectChange('loanTermYears', val)}
                                            placeholder="in years"
                                            error={errors.loanTermYears}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-2">Full Loan Term (months)</label>
                                        <CustomSelect
                                            options={monthOptions}
                                            value={formData.loanTermMonths}
                                            onChange={(val) => handleSelectChange('loanTermMonths', val)}
                                            placeholder="Additional months"
                                        />
                                    </div>
                                </div>
                                {/* Date Start */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Date Mortgage started</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.startDate ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                        />
                                    </div>
                                    {errors.startDate && <p className="text-red-500 text-[10px] mt-1">{errors.startDate}</p>}
                                </div>
                                {/* Rate */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Fixed Interest Rate</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="interestRate"
                                        placeholder="Enter Fixed Interest Rate"
                                        value={formData.interestRate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.interestRate ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.interestRate && <p className="text-red-500 text-[10px] mt-1">{errors.interestRate}</p>}
                                </div>
                                {/* Rate Period */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Fixed Interest Rate Period (in years)</label>
                                    <CustomSelect
                                        options={fixedPeriodOptions}
                                        value={formData.fixedRatePeriod}
                                        onChange={(val) => handleSelectChange('fixedRatePeriod', val)}
                                        placeholder="Select Fixed Interest Rate Period"
                                        error={errors.fixedRatePeriod}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Employment Details Form */}
                        {activeTab === 'employment-details' && (
                            <div className="space-y-6">
                                {/* Employment Status */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Employment Status</label>
                                    <CustomSelect
                                        options={employmentStatusOptions}
                                        value={formData.employmentStatus}
                                        onChange={(val) => handleSelectChange('employmentStatus', val)}
                                        placeholder="Select client type"
                                        error={errors.employmentStatus}
                                    />
                                </div>

                                {/* Income per month */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Income per month</label>
                                    <input
                                        type="number"
                                        name="monthlyIncome"
                                        placeholder="Enter your monthly income"
                                        value={formData.monthlyIncome}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.monthlyIncome ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.monthlyIncome && <p className="text-red-500 text-[10px] mt-1">{errors.monthlyIncome}</p>}
                                </div>

                                {/* Employment Tenure */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-2">Employment Tenure (years)</label>
                                        <CustomSelect
                                            options={yearOptions}
                                            value={formData.employmentTenureYears}
                                            onChange={(val) => handleSelectChange('employmentTenureYears', val)}
                                            placeholder="in years"
                                            error={errors.employmentTenureYears}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-2">Employment Tenure (months)</label>
                                        <CustomSelect
                                            options={monthOptions}
                                            value={formData.employmentTenureMonths}
                                            onChange={(val) => handleSelectChange('employmentTenureMonths', val)}
                                            placeholder="Additional months"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Refinance Tab Form */}
                        {activeTab === 'refinance' && (
                            <div className="space-y-6">
                                {/* Borrower's date of birth */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Borrower's date of birth</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="borrowerDOB"
                                            value={formData.borrowerDOB}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.borrowerDOB ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                        />
                                    </div>
                                    {errors.borrowerDOB && <p className="text-red-500 text-[10px] mt-1">{errors.borrowerDOB}</p>}
                                </div>

                                {/* Current Mortgage balance */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Current Mortgage balance</label>
                                    <input
                                        type="number"
                                        name="currentMortgageBalance"
                                        placeholder="Enter Current Mortgage Balance" // Screenshot has "9,000" as example value, using placeholder
                                        value={formData.currentMortgageBalance}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.currentMortgageBalance ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.currentMortgageBalance && <p className="text-red-500 text-[10px] mt-1">{errors.currentMortgageBalance}</p>}
                                </div>

                                {/* Desired Equity Release */}
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-2">Desired Equity Release</label>
                                    <input
                                        type="number"
                                        name="desiredEquityRelease"
                                        placeholder="Enter Desired Equity Release"
                                        value={formData.desiredEquityRelease}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.desiredEquityRelease ? 'border-red-500' : 'border-gray-200'} text-gray-600 focus:outline-none focus:border-[#3a307f]`}
                                    />
                                    {errors.desiredEquityRelease && <p className="text-red-500 text-[10px] mt-1">{errors.desiredEquityRelease}</p>}
                                </div>

                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handleBack}
                                disabled={activeTab === 'current-loan'}
                                className={`flex items-center px-6 py-3 rounded font-medium text-sm transition-colors ${activeTab === 'current-loan'
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <ChevronLeft size={18} className="mr-2" />
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className="flex items-center px-8 py-3 rounded border border-[#3a307f] text-[#3a307f] font-bold text-sm hover:bg-[#3a307f] hover:text-white transition-colors"
                            >
                                Next
                                <ChevronRight size={18} className="ml-2" />
                            </button>
                        </div>

                    </div>

                    {/* Right Panel - Dynamic Content */}
                    <div className="flex-1 min-h-[600px] flex flex-col">
                        {/* Header */}
                        <div className="mb-6 text-center">
                            <h3 className="text-2xl font-semibold text-[#2D2D2D]">Refinance Recommendations</h3>
                        </div>

                        {/* Show Video only if NO data is entered AND we are on the first tab */}
                        {/* Actually, user said "any change in form even in first tab". So if there is ANY data, show table. */}
                        {Object.values(formData).every(val => val === '') ? (
                            /* Video State */
                            <div className="bg-[#F9FAFB] border border-[#eff0f6] rounded-xl p-8 flex flex-col items-center justify-center text-center flex-grow">
                                <div className="relative w-full max-w-sm aspect-square mb-8 flex items-center justify-center">
                                    <video
                                        src="/assets/basketball+player.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                                <div className="max-w-xs">
                                    <p className="text-[#333] font-medium mb-2">Our algorithm is crunching the numbers.</p>
                                    <p className="text-gray-500 text-sm">Enter your details to reveal your best refinance match!</p>
                                </div>
                            </div>
                        ) : (
                            /* Blurred Results State */
                            <div className="flex-grow flex flex-col">
                                {/* Banner */}
                                <div className="bg-[#524ba3]/10 rounded-xl p-6 mb-8 text-center">
                                    <h4 className="text-[#3a307f] font-medium mb-4">By refinancing your mortgage you can save:</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Per month:</p>
                                            <div className="mt-1"><span className="text-[#3a307f] font-bold text-lg blur-[4px] select-none">0 AED</span></div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">In this year:</p>
                                            <div className="mt-1"><span className="text-[#3a307f] font-bold text-lg blur-[4px] select-none">0 AED</span></div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Over 3 years:</p>
                                            <div className="mt-1"><span className="text-[#3a307f] font-bold text-lg blur-[4px] select-none">0 AED</span></div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-3 blur-[2px]">refinancing your mortgage will cost 0 AED</p>
                                </div>

                                {/* Table */}
                                <div className="flex-grow">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-4 border-b border-gray-100 pb-2 mb-4">
                                        <div></div>
                                        <div className="text-center">
                                            <span className="text-xs font-semibold text-[#3a307f] flex items-center justify-center gap-1">
                                                Current Loan <Info size={12} className="text-gray-400" />
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <span className="text-xs font-semibold text-[#3a307f] flex items-center justify-center gap-1">
                                                Refinance <Info size={12} className="text-gray-400" />
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <span className="text-xs font-semibold text-[#3a307f] flex items-center justify-center gap-1">
                                                Loan Difference <Info size={12} className="text-gray-400" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Rows */}
                                    {['Loan Amount', 'Equity Release', 'Interest Rate'].map((label, idx) => (
                                        <div key={label} className="grid grid-cols-4 py-4 border-b border-gray-50">
                                            <div className="text-sm font-medium text-[#333] pl-2">{label}</div>
                                            <div className="text-center blur-[4px] select-none text-gray-400">0 AED</div>
                                            <div className="text-center blur-[4px] select-none text-gray-400">0 AED</div>
                                            <div className="text-center blur-[4px] select-none text-gray-400">0 AED</div>
                                        </div>
                                    ))}

                                    {/* Monthly Payment Row */}
                                    <div className="grid grid-cols-4 py-6">
                                        <div className="text-sm font-bold text-[#3a307f] pl-2">Monthly Payment</div>
                                        <div className="text-center blur-[4px] select-none text-gray-400 font-bold">0 AED</div>
                                        <div className="text-center blur-[4px] select-none text-gray-400 font-bold">0 AED</div>
                                        <div className="text-center blur-[4px] select-none text-gray-400 font-bold">0 AED</div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Lead Capture Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Your custom refinance solutions are ready!
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Please verify your contact details to unlock them.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={handleContactFormSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={contactForm.name}
                                        onChange={handleContactFormChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-[#3a307f] focus:ring-1 focus:ring-[#3a307f]"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={contactForm.email}
                                        onChange={handleContactFormChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-[#3a307f] focus:ring-1 focus:ring-[#3a307f]"
                                    />
                                </div>
                                <div>
                                    <PhoneInput
                                        defaultCountry="ae"
                                        value={contactForm.phone}
                                        onChange={(phone) => setContactForm(prev => ({ ...prev, phone }))}
                                        placeholder="Enter your phone number"
                                        forceDialCode={true}
                                        showDisabledDialCodeAndPrefix={true}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[#EE3938] hover:bg-[#d63332] text-white font-bold rounded-lg shadow-md transition-colors mt-6"
                                >
                                    Continue
                                </button>
                            </form>

                            <p className="text-[10px] text-center text-gray-400 mt-4">
                                By continuing you accept our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* Styles for Phone Input mainly */}
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
            `}</style>
        </section>
    );
};

export default RefinanceCalculator;
