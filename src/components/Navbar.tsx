import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const calculatorLinks = [
        { name: 'Mortgage Calculator', href: '#' },
        { name: 'Refinance Calculator', href: '#' },
        { name: 'Eligibility Calculator', href: '#' },
    ];

    const resourceLinks = [
        { name: 'How it Works', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] h-[90px] flex items-center font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Desktop Layout */}
                <div className="hidden lg:flex justify-between items-center h-full">
                    <div className="flex items-center h-full">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center pr-12 cursor-pointer">
                            <img
                                src="/assets/mf-logo_website-EN.svg"
                                alt="Mortgage Finder by Property Finder"
                                className="h-[38px] w-auto"
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:space-x-8 h-full items-center">
                            <a
                                href="#"
                                className="group flex items-center text-[#555] hover:text-brand-primary hover:bg-purple-50 px-3 py-2 rounded-md text-[15px] font-semibold transition-all relative"
                            >
                                <span className="relative">
                                    Buy
                                    <span className="absolute inset-x-0 -bottom-[10px] h-1 bg-transparent group-hover:bg-brand-primary group-active:bg-brand-primary transition-all"></span>
                                </span>
                            </a>
                            <a
                                href="#"
                                className="group flex items-center text-[#555] hover:text-brand-primary hover:bg-purple-50 px-3 py-2 rounded-md text-[15px] font-semibold transition-all relative"
                            >
                                <span className="relative">
                                    Refinance
                                    <span className="absolute inset-x-0 -bottom-[10px] h-1 bg-transparent group-hover:bg-brand-primary group-active:bg-brand-primary transition-all"></span>
                                </span>
                            </a>

                            {/* Calculators Dropdown */}
                            <div
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('calculators')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href="#"
                                    className="group flex items-center text-[#555] hover:text-brand-primary hover:bg-purple-50 px-3 py-2 rounded-md text-[15px] font-semibold transition-all relative"
                                >
                                    <span className="relative flex items-center">
                                        Calculators
                                        <ChevronDown size={14} className="ml-1.5 text-[#999] stroke-[2.5px] group-hover:text-brand-primary" />
                                        <span className="absolute inset-x-0 -bottom-[10px] h-1 bg-transparent group-hover:bg-brand-primary group-active:bg-brand-primary transition-all"></span>
                                    </span>
                                </a>
                                {activeDropdown === 'calculators' && (
                                    <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-b-md min-w-[220px] py-2">
                                        {calculatorLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="block px-6 py-3 text-[#555] hover:bg-gray-50 hover:text-brand-primary text-[14px] transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a
                                href="#"
                                className="group flex items-center text-[#555] hover:text-brand-primary hover:bg-purple-50 px-3 py-2 rounded-md text-[15px] font-semibold transition-all relative"
                            >
                                <span className="relative">
                                    Commercial Finance
                                    <span className="absolute inset-x-0 -bottom-[10px] h-1 bg-transparent group-hover:bg-brand-primary group-active:bg-brand-primary transition-all"></span>
                                </span>
                            </a>

                            {/* Resources Dropdown */}
                            <div
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('resources')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href="#"
                                    className="group flex items-center text-[#555] hover:text-brand-primary hover:bg-purple-50 px-3 py-2 rounded-md text-[15px] font-semibold transition-all relative"
                                >
                                    <span className="relative flex items-center">
                                        Resources
                                        <ChevronDown size={14} className="ml-1.5 text-[#999] stroke-[2.5px] group-hover:text-brand-primary" />
                                        <span className="absolute inset-x-0 -bottom-[10px] h-1 bg-transparent group-hover:bg-brand-primary group-active:bg-brand-primary transition-all"></span>
                                    </span>
                                </a>
                                {activeDropdown === 'resources' && (
                                    <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-b-md min-w-[180px] py-2">
                                        {resourceLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="block px-6 py-3 text-[#555] hover:bg-gray-50 hover:text-brand-primary text-[14px] transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#" className="flex items-center text-[#555] hover:text-brand-primary px-1 text-[15px] font-semibold transition-colors">
                                Find a Property
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        {/* WhatsApp Icon */}
                        <a href="#" className="bg-[#25D366] w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* Phone Button */}
                        <a href="tel:+971528227053" className="flex items-center gap-3 border border-brand-secondary/40 text-brand-secondary px-5 py-2 rounded-[4px] hover:bg-brand-secondary hover:text-white transition-all font-bold text-[13px] tracking-wide">
                            <Phone size={14} className="fill-current" />
                            <span>+971 52 822 7053</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex lg:hidden justify-between items-center h-full w-full">
                    {/* Left: Hamburger Menu */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
                        <img
                            src="/assets/mf-logo_website-EN.svg"
                            alt="Mortgage Finder"
                            className="h-[32px] w-auto"
                        />
                    </div>

                    {/* Right: WhatsApp and Phone Buttons */}
                    <div className="flex items-center gap-2">
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/971528227053"
                            className="bg-[#25D366] w-11 h-11 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* Phone Button */}
                        <a
                            href="tel:+971528227053"
                            className="w-11 h-11 rounded-lg border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all"
                        >
                            <Phone size={20} className="stroke-current" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute top-[90px] left-0 w-full shadow-lg h-[calc(100vh-90px)] overflow-y-auto z-50">
                    <div className="flex flex-col h-full">
                        {/* Menu Items */}
                        <div className="flex-1 py-4">
                            {/* Buy */}
                            <a href="#" className="block px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50 border-b border-gray-100">
                                Buy
                            </a>

                            {/* Refinance */}
                            <a href="#" className="block px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50 border-b border-gray-100">
                                Refinance
                            </a>

                            {/* Calculators Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'calculators-mobile' ? null : 'calculators-mobile')}
                                    className="w-full flex items-center justify-between px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50"
                                >
                                    <span>Calculators</span>
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform ${activeDropdown === 'calculators-mobile' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeDropdown === 'calculators-mobile' && (
                                    <div className="bg-gray-50">
                                        {calculatorLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="block px-10 py-3 text-[0.95rem] text-[#666] hover:text-brand-primary"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Commercial Finance */}
                            <a href="#" className="block px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50 border-b border-gray-100">
                                Commercial Finance
                            </a>

                            {/* Resources Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'resources-mobile' ? null : 'resources-mobile')}
                                    className="w-full flex items-center justify-between px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50"
                                >
                                    <span>Resources</span>
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeDropdown === 'resources-mobile' && (
                                    <div className="bg-gray-50">
                                        {resourceLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="block px-10 py-3 text-[0.95rem] text-[#666] hover:text-brand-primary"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Find a Property */}
                            <a href="#" className="block px-6 py-4 text-[1rem] font-medium text-[#2D2D2D] hover:bg-gray-50 border-b border-gray-100">
                                Find a Property
                            </a>
                        </div>

                        {/* Language Selector at Bottom */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <label className="block text-sm text-[#666] mb-2">Language</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-[#2D2D2D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-brand-primary">
                                    <option value="en">English</option>
                                    <option value="ar">عربي</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

