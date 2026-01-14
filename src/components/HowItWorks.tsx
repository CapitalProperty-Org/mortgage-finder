import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 380;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const cards = [
        {
            icon: '/assets/get-to-know.svg',
            title: 'Get to know you',
            description: 'We start by understanding your finances, including loans and credit cards, to determine your mortgage eligibility.',
            link: { text: 'Calculate your affordability', href: '#' }
        },
        {
            icon: '/assets/unlock-options.svg',
            title: 'Unlock your options',
            description: 'Your dedicated advisor provides full transparency by showcasing an array of mortgage options from 28 banks in one place, simplifying your search and helping you shortlist the best deals.',
            link: { text: 'Get pre-qualified now', href: '#' }
        },
        {
            icon: '/assets/get-pre-approved.svg',
            title: 'Get pre-approved with confidence',
            description: 'We take the hassle out of navigating paperwork and liaising with banks, providing you with a clear mortgage pre-approval that outlines exactly how much you can borrow.',
            link: null
        },
        {
            icon: '/assets/close-on-your-new-home.svg',
            title: 'Close on your new home',
            description: 'Finalize your mortgage and prepare to move into your new home.',
            link: { text: 'Explore options', href: 'https://www.propertyfinder.ae/en/search?c=1&fu=0&ob=mr' }
        },
        {
            icon: '/assets/guiding.svg',
            title: 'Guiding you through every stage of homeownership',
            description: 'Whether you\'re buying, selling, or refinancing, we\'re here to guide you through market trends and financing options.',
            link: { text: 'Discover our mortgage insights', href: '#' }
        }
    ];

    return (
        <div className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[2.5rem] font-bold text-[#2D2D2D] mb-4 font-sans">How it works</h2>
                    <p className="max-w-3xl mx-auto text-[1rem] text-[#666] leading-relaxed">
                        Secure the best rates and personalized mortgage solutions for your dream home. Fast approvals, expert advice, and tailored services to meet your needs.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative px-12">
                    {/* Left Arrow - Always Visible */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="text-gray-700" />
                    </button>

                    {/* Right Arrow - Always Visible */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="text-gray-700" />
                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[320px] snap-start text-left"
                            >
                                {/* Wave SVG Background + Icon */}
                                <div className="relative mb-6">
                                    {/* Wave SVG */}
                                    <img
                                        src="/assets/curve.svg"
                                        alt=""
                                        className="absolute top-0 left-0 w-full max-w-[410px] h-auto opacity-20 pointer-events-none"
                                    />

                                    {/* Icon */}
                                    <div className="relative w-16 h-16 bg-[#FEF0F0] rounded-full flex items-center justify-center">
                                        <img src={card.icon} alt={card.title} className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[1.25rem] font-bold text-[#2D2D2D] mb-4 leading-snug">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#666] leading-relaxed text-[0.95rem] mb-6">
                                    {card.description}
                                </p>

                                {/* Link */}
                                {card.link && (
                                    <a
                                        href={card.link.href}
                                        className="mt-auto text-brand-secondary font-bold text-[15px] inline-flex items-center hover:text-brand-primary transition-colors bg-[#F5F5FA] px-5 py-2 rounded-full hover:bg-[#EEE]"
                                    >
                                        {card.link.text} <span className="ml-2 transform translate-y-[1px]">→</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default HowItWorks;
