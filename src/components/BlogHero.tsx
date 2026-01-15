import React from 'react';

const BlogHero = () => {
    return (
        <div className="relative bg-white h-[400px] mb-12 overflow-hidden">
            {/* Background Image Area - 50% split approach roughly based on visual */}
            <div className="absolute top-0 right-0 w-full md:w-2/3 h-full">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://www.mortgagefinder.ae/blog/wp-content/uploads/2026/01/dubai-aerial-burj.jpg)', // efficient re-use of an existing image for now, user can swap
                    }}
                >
                    {/* Gradient Overlay to fade into white on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
                <div className="flex flex-col justify-center h-full max-w-xl">
                    <h1 className="text-[2.75rem] leading-[1.2] font-bold text-[#2D2D2D] mb-4 tracking-tight">
                        Stay informed with <br />
                        our mortgage insights.
                    </h1>
                    <p className="text-[#666] text-[16px]">
                        Latest news, tips, and updates on the UAE mortgage market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;
