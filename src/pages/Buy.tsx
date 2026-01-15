import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Check, Home as HomeIcon, Landmark, ChevronLeft } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '../components/HowItWorks'; // Ensure HowItWorks is imported if used, though it seems inline now?
// Actually HowItWorks logic seems inline in Buy.tsx based on previous edits, but let's check if we need to clean up unused imports later.
import CustomSelect from '../components/CustomSelect';
import MediaAndPartners from '../components/MediaAndPartners';


const Buy = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const [currentStep, setCurrentStep] = useState(0);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        loanType: '', // Changed from 'buy' to empty to force selection
        residencyStatus: '',
        buyingStage: 'found', // 'found' or 'viewing'
        propertyValue: 300000,
        employmentStatus: 'self-employed',
        monthlyIncome: 10000,
        name: '',
        email: '',
        phone: ''
    });

    const getSteps = () => {
        const steps = [
            { id: 0, label: 'Loan Type', key: 'loanType' }
        ];

        if (formData.loanType === 'buy') {
            steps.push({ id: 1, label: 'Residency', key: 'residency' });
        }

        steps.push(
            { id: 2, label: 'Property', key: 'property' },
            { id: 3, label: 'Employment', key: 'employment' },
            { id: 4, label: 'Submit Application', key: 'submit' }
        );

        return steps;
    };

    const steps = getSteps();

    const validateStep = () => {
        const currentStepKey = steps[currentStep].key;
        setError('');

        if (currentStepKey === 'loanType') {
            if (!formData.loanType) {
                setError('Please select a loan type to proceed');
                return false;
            }
        }

        if (currentStepKey === 'residency') {
            if (!formData.residencyStatus) {
                setError('Please select your residency status');
                return false;
            }
        }

        return true;
    };

    const handleNext = () => {
        if (validateStep()) {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setError('');
        }
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US');
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.15] mb-6">
                                Get pre-approved in a<br />
                                few simple steps!
                            </h1>
                            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
                                Answer a few simple questions and one of our mortgage brokers will help
                                you find and secure the best mortgage offers in Dubai and the UAE
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/qualification-journey#get-pre-approved" className="inline-flex items-center justify-center gap-2 bg-[#EF3E42] text-white px-8 py-4 rounded-lg font-semibold text-[15px] hover:bg-[#d9363a] transition-colors shadow-sm group">
                                    I want to buy a house
                                    <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link to="/qualification-journey#get-pre-approved" className="inline-flex items-center justify-center gap-2 bg-white text-[#3a307f] border border-[#3a307f]/30 px-8 py-4 rounded-lg font-semibold text-[15px] hover:border-[#3a307f] hover:bg-blue-50/50 transition-all shadow-sm group">
                                    I want to refinance
                                    <ArrowRight size={18} className="text-[#3a307f] group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Image/Visuals */}
                        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
                            <div className="relative rounded-[30px] overflow-hidden bg-gray-100 aspect-[4/3] w-full">
                                <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center">
                                    <img src="/assets/cover-image.png" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -z-10 top-0 right-0 w-[90%] h-[90%] bg-red-500 rounded-[30px] transform translate-x-4 -translate-y-4"></div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-[40%] right-[-20px] lg:right-[-30px] bg-[#3a307f] text-white p-3 rounded-full shadow-lg border-4 border-white transform -translate-y-1/2 z-10">
                                <HomeIcon size={24} fill="currentColor" className="text-white" />
                            </div>

                            <div className="absolute top-[60%] right-[-10px] lg:right-[-10px] bg-[#2E2E8C] text-white p-3 rounded-full shadow-lg border-4 border-white transform -translate-y-1/2 z-10">
                                <Check size={28} strokeWidth={4} className="text-white" />
                            </div>

                            <div className="absolute bottom-[20px] left-[20px] bg-white p-4 rounded-xl shadow-xl flex items-center justify-center z-10">
                                <div className="bg-[#EF3E42] p-2 rounded-full">
                                    <Landmark size={24} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Multi-Step Form Section */}
            <section className="py-16 bg-white" id="get-pre-approved">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <h2 className="text-[32px] md:text-[36px] font-bold text-center text-[#2D2D2D] mb-14 leading-tight">
                        Let's work together to find the perfect<br />
                        mortgage for you.
                    </h2>

                    {/* Progress Steps */}
                    <div className="flex items-start justify-center mb-14 px-4">
                        <div className="flex items-center gap-0">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    {/* Step Circle and Label */}
                                    <div className="flex flex-col items-center" style={{ width: 'auto' }}>
                                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${index < currentStep
                                            ? 'bg-[#00C48C]'
                                            : index === currentStep
                                                ? 'bg-[#3a307f]'
                                                : 'bg-[#D1D5DB]'
                                            }`}>
                                            <Check size={20} className="text-white" strokeWidth={3} />
                                        </div>
                                        <p className={`text-[11px] md:text-[12px] mt-2.5 text-center max-w-[85px] leading-tight font-medium ${index === currentStep ? 'text-[#2D2D2D]' : 'text-[#9CA3AF]'
                                            }`}>
                                            {step.label}
                                        </p>
                                    </div>

                                    {/* Connecting Line */}
                                    {index < steps.length - 1 && (
                                        <div className={`h-0.5 transition-all duration-300 mb-8 ${index < currentStep ? 'bg-[#00C48C]' : 'bg-[#D1D5DB]'
                                            }`} style={{ width: '80px', marginLeft: '8px', marginRight: '8px' }}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="max-w-5xl mx-auto">
                        {steps[currentStep].key === 'submit' ? (
                            /* Step: Submit Application - Specific Layout with Two Cards */
                            <div className="grid bg-transparent grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                {/* Left Card: Summary */}
                                <div className="bg-[#F8F9FF] rounded-2xl p-8 lg:p-10 border border-[#EEF2FF]">
                                    <h3 className="text-[#3a307f] text-xl font-bold mb-8">
                                        This is what we know about you
                                    </h3>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#2E2E8C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                1
                                            </div>
                                            <p className="text-[#4B5563] text-sm leading-relaxed pt-1">
                                                You're looking to <span className="font-semibold text-gray-900">{formData.loanType === 'buy' ? 'buy a house' : 'refinance your current property'}</span>.
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#2E2E8C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                2
                                            </div>
                                            <p className="text-[#4B5563] text-sm leading-relaxed pt-1">
                                                Your new home has a <span className="font-semibold text-gray-900">listing price of {formatCurrency(formData.propertyValue)} AED</span>
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#2E2E8C] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                3
                                            </div>
                                            <p className="text-[#4B5563] text-sm leading-relaxed pt-1">
                                                You are a <span className="font-semibold text-gray-900">{formData.employmentStatus === 'self-employed' ? 'self-employed professional' : 'salaried person'}</span>
                                                {formData.employmentStatus === 'salaried' && (
                                                    <> with total <span className="font-semibold text-gray-900">monthly income of {formatCurrency(formData.monthlyIncome)} AED</span></>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-12">
                                        <button
                                            onClick={handlePrevious}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#3a307f] text-[#3a307f] rounded-lg font-medium text-sm hover:bg-purple-50 transition-colors shadow-sm"
                                        >
                                            <ChevronLeft size={18} />
                                            Previous
                                        </button>
                                    </div>
                                </div>

                                {/* Right Card: Contact Form */}
                                <div className="bg-[#F9FAFB] rounded-2xl p-8 lg:p-10 border border-gray-100">
                                    <div className="text-center mb-8">
                                        <p className="text-[#4B5563] text-sm leading-relaxed">
                                            All set for your custom mortgage solution!<br />
                                            Please verify your contact details to unlock them.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                                        />

                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a307f] focus:border-transparent text-sm bg-white"
                                        />

                                        <PhoneInput
                                            defaultCountry="ae"
                                            value={formData.phone}
                                            onChange={(phone) => setFormData({ ...formData, phone })}
                                            placeholder="Enter your phone number"
                                            forceDialCode={true}
                                            showDisabledDialCodeAndPrefix={true}
                                        />
                                    </div>

                                    <div className="mt-8 flex justify-between items-center">
                                        <div></div> {/* Spacer */}
                                        <button
                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#3a307f] text-[#3a307f] rounded-lg font-medium text-sm hover:bg-purple-50 transition-colors shadow-sm"
                                        >
                                            Submit
                                            <Check size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Steps 0-n: Standard Card Layout */
                            <div className="bg-transparent rounded-xl card-shadow overflow-hidden">
                                <div className="p-8 md:p-10 lg:p-12">
                                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                                        {/* Left: Form Content */}
                                        <div className="flex-1">
                                            {/* Step: Loan Type */}
                                            {steps[currentStep].key === 'loanType' && (
                                                <div>
                                                    <h3 className="text-[28px] font-bold text-[#2D2D2D] mb-2 leading-tight">
                                                        Let's get started
                                                    </h3>
                                                    <p className="text-[#6B7280] text-[14px] mb-8 leading-relaxed">
                                                        Add your details to start our pre-qualification<br />
                                                        journey for free.
                                                    </p>

                                                    {/* Radio Options */}
                                                    <div className="flex flex-row gap-6 mb-10">
                                                        <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                            <input
                                                                type="radio"
                                                                name="loanType"
                                                                value="buy"
                                                                checked={formData.loanType === 'buy'}
                                                                onChange={(e) => {
                                                                    setFormData({ ...formData, loanType: e.target.value });
                                                                    setError('');
                                                                }}
                                                                className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                            />
                                                            <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                I want to buy a house
                                                            </span>
                                                        </label>

                                                        <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                            <input
                                                                type="radio"
                                                                name="loanType"
                                                                value="refinance"
                                                                checked={formData.loanType === 'refinance'}
                                                                onChange={(e) => {
                                                                    setFormData({ ...formData, loanType: e.target.value });
                                                                    setError('');
                                                                }}
                                                                className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                            />
                                                            <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                I want to refinance
                                                            </span>
                                                        </label>
                                                    </div>

                                                    {/* Error Message */}
                                                    {error && (
                                                        <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 flex items-center gap-2">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {error}
                                                        </div>
                                                    )}

                                                    {/* Navigation Buttons */}
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            disabled
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3F4F6] text-[#9CA3AF] rounded-md font-medium text-[14px] cursor-not-allowed"
                                                        >
                                                            <ChevronLeft size={16} />
                                                            Previous
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#3a307f] text-white rounded-md font-semibold text-[14px] hover:bg-[#4149c9] transition-colors"
                                                        >
                                                            Next
                                                            <ArrowRight size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step: Residency (Dynamic) */}
                                            {steps[currentStep].key === 'residency' && (
                                                <div>
                                                    <h3 className="text-[26px] font-bold text-[#2D2D2D] mb-8 leading-tight">
                                                        What is your residency status?
                                                    </h3>

                                                    <div className="mb-12 max-w-md">
                                                        <CustomSelect
                                                            options={['UAE National', 'UAE Resident', 'Non-Resident']}
                                                            value={formData.residencyStatus}
                                                            onChange={(value) => {
                                                                setFormData({ ...formData, residencyStatus: value });
                                                                setError('');
                                                            }}
                                                            placeholder="Select your residency status"
                                                            error={error}
                                                        />
                                                    </div>

                                                    {/* Navigation Buttons */}
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={handlePrevious}
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-[#374151] rounded-md font-medium text-[14px] hover:bg-gray-50 transition-colors"
                                                        >
                                                            <ChevronLeft size={16} />
                                                            Previous
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#3a307f] text-white rounded-md font-semibold text-[14px] hover:bg-[#4149c9] transition-colors"
                                                        >
                                                            Next
                                                            <ArrowRight size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step: Property */}
                                            {steps[currentStep].key === 'property' && (
                                                <div>
                                                    {formData.loanType === 'buy' ? (
                                                        <>
                                                            <h3 className="text-[26px] font-bold text-[#2D2D2D] mb-8 leading-tight">
                                                                Where are you in the home<br className="hidden sm:block" /> buying process?
                                                            </h3>

                                                            {/* Buying Stage Radio Options */}
                                                            <div className="flex flex-col sm:flex-row gap-6 mb-10">
                                                                <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                                    <input
                                                                        type="radio"
                                                                        name="buyingStage"
                                                                        value="found"
                                                                        checked={formData.buyingStage === 'found'}
                                                                        onChange={(e) => setFormData({ ...formData, buyingStage: e.target.value })}
                                                                        className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                                    />
                                                                    <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                        I have found a property
                                                                    </span>
                                                                </label>

                                                                <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                                    <input
                                                                        type="radio"
                                                                        name="buyingStage"
                                                                        value="viewing"
                                                                        checked={formData.buyingStage === 'viewing'}
                                                                        onChange={(e) => setFormData({ ...formData, buyingStage: e.target.value })}
                                                                        className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                                    />
                                                                    <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                        I am viewing properties
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <h3 className="text-[26px] font-bold text-[#2D2D2D] mb-8 leading-tight">
                                                            What is your property currently<br className="hidden sm:block" /> valued at?
                                                        </h3>
                                                    )}

                                                    <div className="mb-12">
                                                        <label className="block text-[13px] text-[#6B7280] mb-5 font-normal">
                                                            {formData.loanType === 'buy' && formData.buyingStage === 'viewing'
                                                                ? 'On average, what is the listing price of the properties you are viewing?'
                                                                : 'What is the listing price of your property?'}
                                                        </label>

                                                        <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white mb-[-10px]">
                                                            <span className="text-[18px] text-[#2D2D2D]">{formatCurrency(formData.propertyValue)}</span>
                                                            <span className="text-[15px] text-[#2D2D2D] font-normal">AED</span>
                                                        </div>

                                                        {/* Slider */}
                                                        <div className="relative pt-0 pb-2 mt-[-15px]">
                                                            <input
                                                                type="range"
                                                                min="50000"
                                                                max="50000000"
                                                                step="10000"
                                                                value={formData.propertyValue}
                                                                onChange={(e) => setFormData({ ...formData, propertyValue: parseInt(e.target.value) })}
                                                                className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer property-slider"
                                                                style={{
                                                                    background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((formData.propertyValue - 50000) / (50000000 - 50000)) * 100}%, #E5E7EB ${((formData.propertyValue - 50000) / (50000000 - 50000)) * 100}%, #E5E7EB 100%)`
                                                                }}
                                                            />
                                                            <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-2 font-normal">
                                                                <span>AED 50,000</span>
                                                                <span>AED 50,000,000</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Navigation Buttons */}
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={handlePrevious}
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-[#374151] rounded-md font-medium text-[14px] hover:bg-gray-50 transition-colors"
                                                        >
                                                            <ChevronLeft size={16} />
                                                            Previous
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#3a307f] text-white rounded-md font-semibold text-[14px] hover:bg-[#4149c9] transition-colors"
                                                        >
                                                            Next
                                                            <ArrowRight size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step: Employment */}
                                            {steps[currentStep].key === 'employment' && (
                                                <div>
                                                    <h3 className="text-[26px] font-bold text-[#2D2D2D] mb-8 leading-tight">
                                                        What is your employment status? Are<br className="hidden sm:block" /> you self-employed or salaried?
                                                    </h3>

                                                    {/* Radio Options */}
                                                    <div className="flex flex-row gap-6 mb-12">
                                                        <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                            <input
                                                                type="radio"
                                                                name="employmentStatus"
                                                                value="self-employed"
                                                                checked={formData.employmentStatus === 'self-employed'}
                                                                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                                                                className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                            />
                                                            <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                I am self-employed
                                                            </span>
                                                        </label>

                                                        <label className="flex items-center gap-3 cursor-pointer group py-1">
                                                            <input
                                                                type="radio"
                                                                name="employmentStatus"
                                                                value="salaried"
                                                                checked={formData.employmentStatus === 'salaried'}
                                                                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                                                                className="w-[18px] h-[18px] text-[#3a307f] border-[2px] border-gray-300 focus:ring-2 focus:ring-[#3a307f] cursor-pointer accent-[#3a307f]"
                                                            />
                                                            <span className="text-[#2D2D2D] text-[15px] font-normal">
                                                                I am a salaried person
                                                            </span>
                                                        </label>
                                                    </div>

                                                    {/* Income Field */}
                                                    {formData.employmentStatus === 'salaried' && (
                                                        <div className="mb-12">
                                                            <label className="block text-[15px] font-bold text-[#2D2D2D] mb-4">
                                                                What is your total monthly income
                                                            </label>

                                                            {/* Input Box */}
                                                            <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                                                <span className="text-[18px] text-[#2D2D2D]">{formatCurrency(formData.monthlyIncome)}</span>
                                                                <span className="text-[15px] text-[#2D2D2D] font-normal">AED</span>
                                                            </div>

                                                            {/* Slider (using the same style as property slider) */}
                                                            <div className="relative pt-0 pb-2 mt-[-15px]">
                                                                <input
                                                                    type="range"
                                                                    min="10000"
                                                                    max="999999"
                                                                    step="1000"
                                                                    value={formData.monthlyIncome}
                                                                    onChange={(e) => setFormData({ ...formData, monthlyIncome: parseInt(e.target.value) })}
                                                                    className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer property-slider"
                                                                    style={{
                                                                        background: `linear-gradient(to right, #3a307f 0%, #3a307f ${((formData.monthlyIncome - 10000) / (999999 - 10000)) * 100}%, #E5E7EB ${((formData.monthlyIncome - 10000) / (999999 - 10000)) * 100}%, #E5E7EB 100%)`
                                                                    }}
                                                                />
                                                                <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-2 font-normal">
                                                                    <span>10,000 AED</span>
                                                                    <span>999,999 AED</span>
                                                                </div>
                                                            </div>

                                                            <p className="text-[11px] text-[#6B7280] mt-4 leading-normal">
                                                                Please note, total income is the combined income of all the people applying for this mortgage
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Navigation Buttons */}
                                                    <div className="flex items-center justify-between">
                                                        <button
                                                            onClick={handlePrevious}
                                                            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#3a307f] text-[#3a307f] rounded-lg font-medium text-[16px] hover:bg-purple-50 transition-colors"
                                                        >
                                                            <ChevronLeft size={20} />
                                                            Previous
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            className="inline-flex items-center gap-2 px-10 py-3 bg-white border border-[#3a307f] text-[#3a307f] rounded-lg font-medium text-[16px] hover:bg-purple-50 transition-colors"
                                                        >
                                                            Next
                                                            <ChevronLeft size={20} className="rotate-180" />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right: Info Card */}
                                        <div className="lg:w-[280px] flex-shrink-0">
                                            <div className="bg-[#EEF2FF] rounded-lg p-6 border border-[#C7D2FE]">
                                                {steps[currentStep].key === 'loanType' && (
                                                    <p className="text-[#3a307f] text-[13px] leading-relaxed font-medium">
                                                        Mortgages can cover up to 80-85% of the property cost, reducing upfront expenses.
                                                    </p>
                                                )}
                                                {steps[currentStep].key === 'residency' && (
                                                    <p className="text-[#3a307f] text-[13px] leading-relaxed font-medium">
                                                        Getting mortgage pre-approval can lock in interest rates and expedite your purchase.
                                                    </p>
                                                )}
                                                {steps[currentStep].key === 'property' && (
                                                    <p className="text-[#3a307f] text-[13px] leading-relaxed font-medium">
                                                        {formData.loanType === 'buy'
                                                            ? 'Properties valued under AED 5 million often qualify for up to 80% financing for expats and 85% for UAE nationals.'
                                                            : 'Getting mortgage pre-approval can lock in interest rates and expedite your purchase.'
                                                        }
                                                    </p>
                                                )}
                                                {steps[currentStep].key === 'employment' && (
                                                    <p className="text-[#3a307f] text-[13px] leading-relaxed font-medium">
                                                        Properties valued under AED 5 million often qualify for up to 80% financing for expats and 85% for UAE nationals.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] mb-4">How it works</h2>
                        <p className="text-[#666] max-w-2xl mx-auto">
                            Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals,
                            expert advice, and tailored services to meet your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-13 h-13 border-5 border-gray-100  rounded-full bg-[#3a307f] text-white flex items-center justify-center font-bold text-sm">
                                1
                            </div>
                            <div className="w-full flex justify-start mb-6 mt-12"> {/* Left Aligned Image */}
                                <img src="/assets/speak-expert.svg" alt="Expert" className="h-40 w-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Speak to a mortgage expert</h3>
                            <p className="text-[#666] leading-relaxed text-[0.95rem]">
                                We carefully assess your home buying goals and financial needs to
                                find the best mortgage options for you.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-13 h-13 border-5 border-gray-100  rounded-full bg-[#3a307f] text-white flex items-center justify-center font-bold text-sm">
                                2
                            </div>
                            <div className="w-full flex justify-start mb-6 mt-12">
                                <img src="/assets/complete-application.svg" alt="Application" className="h-40 w-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Complete your application</h3>
                            <p className="text-[#666] leading-relaxed text-[0.95rem]">
                                We'll coordinate all necessary documents, secure your mortgage
                                pre-approval, and complete your bank application forms.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-13 h-13 border-5 border-gray-100  rounded-full bg-[#3a307f] text-white flex items-center justify-center font-bold text-sm">
                                3
                            </div>
                            <div className="w-full flex justify-start mb-6 mt-12">
                                <img src="/assets/secure-mortgage.svg" alt="Secure" className="h-40 w-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Secure your mortgage</h3>
                            <p className="text-[#666] leading-relaxed text-[0.95rem]">
                                We'll find you the best mortgage deals from every bank in the UAE
                                and handle all the bank interactions and property valuation for you.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-13 h-13 border-5 border-gray-100  rounded-full bg-[#3a307f] text-white flex items-center justify-center font-bold text-sm">
                                4
                            </div>
                            <div className="w-full flex justify-start mb-6 mt-12">
                                <img src="/assets/collect-keys.svg" alt="Keys" className="h-40 w-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Collect your keys</h3>
                            <p className="text-[#666] leading-relaxed text-[0.95rem]">
                                We facilitate the disbursal of your mortgage, and before you know it,
                                you'll have the keys in hand, ready to move into your new home!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Use Mortgage Finder Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[2.75rem] font-bold text-[#2D2D2D] leading-tight mb-6">
                                Why use Mortgage<br />
                                Finder?
                            </h2>
                            <p className="text-[#666] text-lg mb-8 max-w-lg leading-relaxed">
                                Skip the hassle of endless trips, bank application forms, lender
                                negotiation and months of uncertainty.
                            </p>

                            <div className="flex items-center gap-4 mb-16">
                                <span className="text-[3.5rem] font-bold text-[#EF3E42]">4.9</span>
                                <div className="flex flex-col">
                                    <div className="flex gap-1 text-[#EF3E42] mb-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-[#888] text-sm">1200+ Total reviews on Google</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 relative lg:pl-10">
                            <div className="relative rounded-[40px] overflow-visible">
                                {/* Red Background Accent - Shifted Top Right with Roundness */}
                                {/* <div className="absolute -top-10 -right-10 w-full h-full bg-[#EF3E42] rounded-[40px] z-0"></div> */}

                                <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] z-10 w-full shadow-lg">
                                    <img src="/assets/cover-image.webp" alt="Mortgage Consultation" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid - Moved to bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-start">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6">
                                <img src="/assets/save-money.svg" alt="Save Money" className="h-16 w-auto" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">We'll save you money</h3>
                            <p className="text-[#666] text-sm leading-relaxed max-w-xs ">
                                We have relationships with all of the top lenders,
                                giving us access to the best mortgage rates as well
                                as exclusive discounts on fees and interest rates.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6">
                                <img src="/assets/save-time.svg" alt="Save Time" className="h-16 w-auto" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">We'll save you time</h3>
                            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                                We will compare all available mortgages and
                                recommend the best one for you. Meaning you
                                don't have to negotiate with 20+ banks yourself.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6">
                                <img src="/assets/vip-service.svg" alt="VIP Service" className="h-16 w-auto" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">We'll give you a VIP service</h3>
                            <p className="text-[#666] text-sm leading-relaxed max-w-xs ">
                                We manage the mortgage process from start to
                                finish, dealing with all potential hurdles to ensure
                                you're able to buy your dream property. We work
                                for you, not the banks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <MediaAndPartners />

            <style dangerouslySetInnerHTML={{
                __html: `
                .property-slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #3a307f;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
                }

                .property-slider::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #3a307f;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
                }

                .property-slider:focus {
                    outline: none;
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
                    font-size: 14px;
                    outline: none;
                    transition: border-color 0.2s;
                    background: white;
                    height: 50px;
                }
                .react-international-phone-input-container .react-international-phone-input:focus {
                    border-color: #3a307f !important;
                    box-shadow: 0 0 0 2px rgba(82, 92, 235, 0.1);
                }
                .react-international-phone-input-container .react-international-phone-input::placeholder {
                    color: #9ca3af;
                }
                .react-international-phone-country-selector-button {
                    border: none !important;
                    background: transparent !important;
                    padding: 0 12px !important;
                    height: 50px !important;
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
                    z-index: 50 !important;
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
            `}} />
        </div >
    );
};

export default Buy;
