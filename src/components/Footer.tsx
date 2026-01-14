import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe:', email);
    };

    return (
        <footer className="font-sans">
            {/* Newsletter Section - Purple Background */}
            <div className="bg-[#3a307f] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[2rem] font-bold text-white mb-4">
                        Why you should subscribe to our newsletter
                    </h2>
                    <p className="text-white/90 text-[1rem] mb-8 max-w-3xl mx-auto">
                        Buying, or refinancing, in Dubai and the UAE can be frustrating and complicated. Mortgage Finder is dedicated to ensuring you get the best mortgage advice and that your interests are protected.
                    </p>

                    {/* Email Subscription Form */}
                    <form onSubmit={handleSubscribe} className="flex justify-center max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-5 py-3 rounded-l-md text-[0.95rem] focus:outline-none bg-white"
                        />
                        <button
                            type="submit"
                            className="bg-[#EA3934] text-white px-8 py-3 rounded-r-md font-bold text-[0.95rem] hover:bg-red-600 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer - Light Gray Background */}
            <div className="bg-[#F5F5F5] py-13">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Logo Column */}
                        <div>
                            <img
                                src="/assets/mf-logo_website-EN.svg"
                                alt="Mortgage Finder"
                                className="h-10 mb-4"
                            />
                        </div>

                        {/* Calculators Column */}
                        <div>
                            <h3 className="text-[#333] font-bold text-[1rem] mb-4">Calculators</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="border-b border-[#666] p-[1px] text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        Mortgage Calculator
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#666] p-[1px] text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        Rent vs Buy Calculator
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#666] p-[1px] text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        Refinance Calculator
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#666] p-[1px] text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        Eligibility Calculator
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-[#333] font-bold text-[1rem] mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#666] text-[0.9rem] hover:text-[#3a307f] transition-colors">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Empty Column for spacing */}
                        <div></div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-6 text-[0.85rem]">
                            <a href="#" className="text-[#666] hover:text-[#3a307f] transition-colors">
                                Terms & Conditions
                            </a>
                            <a href="#" className="text-[#666] hover:text-[#3a307f] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-[#666] hover:text-[#3a307f] transition-colors">
                                Cookies Policy
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            {/* arabic switcher */}
                            <a href="#" className="text-[#3a307f] p-[3px] hover:text-[#EA3934] transition-colors">عربي </a>
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/mortgagefinder.ae/"
                                className="w-9 h-9 rounded-xl bg-[#3a307f] flex items-center justify-center text-white hover:bg-[#EA3934] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/mortgagefinder.ae/"
                                className="w-9 h-9 rounded-xl bg-[#3a307f] flex items-center justify-center text-white hover:bg-[#EA3934] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/mortgagefinder/"
                                className="w-9 h-9 rounded-xl bg-[#3a307f] flex items-center justify-center text-white hover:bg-[#EA3934] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
