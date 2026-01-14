import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div
            className="relative bg-white overflow-hidden min-h-[580px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/slide-1.jpeg)',
                backgroundPosition: 'center right'
            }}
        >
            {/* White overlay gradient from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row min-h-[580px] items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-[50%] pt-8 pb-16 px-4 sm:px-6 lg:pl-8 lg:pr-8 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-[2.75rem] md:text-[3.25rem] leading-[1.15] font-bold text-[#2D2D2D] mb-5 tracking-tight">
                                UAE's Most Trusted <br />
                                Mortgage Advisor
                            </h1>

                            <p className="mt-3 text-[17px] text-[#666] mb-10 max-w-[480px] leading-relaxed">
                                Take the first step towards securing a mortgage with hassle-free, transparent, and expertly guided services.
                            </p>

                            <div className="flex items-center gap-4 mb-10">
                                <span className="text-[5rem] leading-[1] font-bold text-[#3a307f] -mt-1">4.9</span>
                                <div className="flex flex-col justify-center gap-2">
                                    <div className="flex text-[#EA3934] gap-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
                                    </div>
                                    <span className="text-[#888] text-[13px] font-normal">1200+ Total reviews on Google</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#EA3934] text-white text-[15px] font-bold rounded-[4px] hover:bg-red-600 transition-colors shadow-sm min-w-[170px]">
                                    Get Pre-Approved <ArrowRight size={18} className="ml-2" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#3a307f] border border-[#3a307f] text-[15px] font-bold rounded-[4px] hover:bg-gray-50 transition-colors min-w-[210px]">
                                    Mortgage Calculator <ArrowRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

