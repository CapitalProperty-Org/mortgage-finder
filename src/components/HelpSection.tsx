import React from 'react';

const HelpSection = () => {
    return (
        <div className="py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Row - Title and Description side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
                    {/* Left - Title */}
                    <div>
                        <h2 className="text-[2.5rem] font-bold text-[#333] leading-tight">
                            We can help with all of your home loan and commercial finance needs
                        </h2>
                    </div>

                    {/* Right - Description and CTA */}
                    <div className="flex flex-col justify-center">
                        <p className="text-[#666] text-[1rem] leading-relaxed mb-6">
                            Looking to buy a home or invest in property? Whether you're a UAE resident, an international buyer, or a business owner seeking financing, we've got you covered. Our expert advisors simplify the process, securing the best mortgage or refinancing options tailored to your needs.
                        </p>

                        <a
                            href="#"
                            className="border-[1px] p-3 rounded-sm inline-flex items-center text-[#3a307f] font-bold text-[0.95rem] hover:text-[#EA3934] transition-colors  border-[#3a307f] hover:border-[#EA3934] pb-0.5 w-fit"
                        >
                            Connect with an advisor →
                        </a>
                    </div>
                </div>

                {/* Bottom Row - Full Width Image */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/assets/cover-image.jpeg"
                            alt="Mortgage advisors helping clients"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
