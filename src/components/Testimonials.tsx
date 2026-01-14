import React, { useState } from 'react';

const Testimonials = () => {
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        {
            initial: 'K',
            name: 'Keiran',
            text: 'I had an outstanding experience with Mortgage Finder, thanks to the incredible support from Ian Vaughan and Conchita Fabian. My circumstances weren\'t the easiest, but they went above and beyond to ensure I was informed every step of the way.'
        },
        {
            initial: 'T',
            name: 'Thomas Clifton',
            text: 'We have used Lucy Pattison and Richard Boyd from Mortgage Finder on 2 occasions now and both times have been extremely satisfied with the high level of experience navigating both processes that each had unique challenges.'
        },
        {
            initial: 'M',
            name: 'Muhammad Ashif',
            text: 'I had an excellent experience with Mortgage Finder, and a special shout-out to Raj, Anita, and Cristina! Raj was my main contact, and his professionalism and attentiveness made all the difference.'
        },
        {
            initial: 'S',
            name: 'S A',
            text: 'I had an excellent experience working with Omer and Natalie during my apartment purchase. Despite a few bumps along the way, they were always available to answer my questions and queries.'
        },
        {
            initial: 'G',
            name: 'Gabriel Cordiero',
            text: 'I cannot thank Charlotte and Natalie enough for their exceptional support throughout my home-buying journey. They were instrumental not only in helping me secure the right mortgage for my new home.'
        },
        {
            initial: 'M',
            name: 'Mark Lewis',
            text: 'Good team of mortgage brokers. Would recommend. As a new property buyer, there were a few clarification points on the mortgage offer, terms of business and final offer from the bank that needed a prompt from us.'
        },
        {
            initial: 'A',
            name: 'Angelka Josif',
            text: 'I recently worked with Mortgage Finder and was impressed with their professionalism throughout the process. They provided clear and timely communication, expertly navigated the complexities of mortgage options.'
        },
        {
            initial: 'S',
            name: 'Sentil Thambi Tholath',
            text: 'We had an excellent experience with mortgage finder, who provided knowledgeable and personalized guidance throughout the mortgage process. Efforts of Raj and Anita were commendable.'
        },
        {
            initial: 'D',
            name: 'Damien Cohrs',
            text: 'Lucy Pattison is an exceptional mortgage broker. She kept us advised every step of the mortgage process, explaining the reason for every obscure document requested from us. She is remarkable and a five-star professional.'
        },
        {
            initial: 'M',
            name: 'M.S. Ananthanarayanan',
            text: 'I recently had the pleasure of working with MortgageFinder, and I cannot recommend them highly enough! Raj and Anita went above and beyond to ensure my mortgage process was seamless and stress-free.'
        },
        {
            initial: 'T',
            name: 'Tim Skinner',
            text: 'Would thoroughly recommend! As a first-time buyer, Brendan was supremely helpful in helping me understand my options, assessed against my circumstances, explained the terminologies and gave me his impartial advice.'
        },
        {
            initial: 'A',
            name: 'Aisling Gavin',
            text: 'Such a great experience from start to finish. Charlotte and Natalie\'s advice and support throughout the whole process was so professional and helpful. Highly recommend for a professional and smooth service.'
        }
    ];

    return (
        <div className="py-20 bg-[#3a307f] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                {/* Rating */}
                <div className="mb-6">

                    <div className="flex justify-center gap-1 mb-3">
                        <div className="text-[5rem] font-bold text-white leading-none mb-2">4.9</div>
                        <div className="flex justify-center items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-7 h-7 text-[#EA3934]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                    </div>
                    <p className="text-white/80 text-sm">1200+ Total reviews on Google</p>
                </div>

                {/* Headline */}
                <h2 className="text-[2rem] font-bold text-white leading-tight mb-2">
                    Join thousands of homeowners who got<br />their mortgage with Mortgage Finder
                </h2>
            </div>

            {/* Scrolling Carousel */}
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <style>
                    {`
                    @keyframes scroll-testimonials {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-400px * ${testimonials.length}))}
                    }
                    .testimonials-track {
                        animation: scroll-testimonials 60s linear infinite;
                        animation-play-state: ${isPaused ? 'paused' : 'running'};
                        width: calc(400px * ${testimonials.length * 2});
                    }
                    `}
                </style>
                <div className="testimonials-track flex gap-6">
                    {/* First set */}
                    {testimonials.map((testimonial, index) => (
                        <div key={`testimonial-1-${index}`} className="w-[500px] flex-shrink-0">
                            <div className="bg-white rounded-lg p-8 h-[200px] flex flex-col justify-between shadow-lg">
                                <p className="text-[#666] text-[0.9rem] leading-relaxed line-clamp-6">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-7 h-7 rounded-full bg-[#EA3934] flex items-center justify-center text-white font-semibold text-md">
                                        {testimonial.initial}
                                    </div>
                                    <p className="font-bold text-[#333]">{testimonial.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Second set for seamless loop */}
                    {testimonials.map((testimonial, index) => (
                        <div key={`testimonial-2-${index}`} className="w-[400px] flex-shrink-0">
                            <div className="bg-white rounded-lg p-8 h-[280px] flex flex-col justify-between shadow-lg">
                                <p className="text-[#666] text-[0.9rem] leading-relaxed line-clamp-6">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-10 h-10 rounded-full bg-[#EA3934] flex items-center justify-center text-white font-bold text-lg">
                                        {testimonial.initial}
                                    </div>
                                    <p className="font-bold text-[#333]">{testimonial.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
