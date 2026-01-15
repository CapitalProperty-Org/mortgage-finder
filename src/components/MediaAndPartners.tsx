import React from 'react';

const MediaAndPartners = () => {
    const mediaOutlets = [
        { name: 'Arabian Business', logo: '/assets/arabian-business.webp' },
        // { name: 'Emirates Business', logo: '/assets/emirates-business.png' }, // Asset missing
        { name: 'Khaleej Times', logo: '/assets/khaleej-times.webp' },
        { name: 'The National', logo: '/assets/the-national.webp' },
        { name: 'Zawya', logo: '/assets/zawya.webp' },
    ];

    const banks = [
        { name: 'FAB', logo: '/assets/fab.png' },
        { name: 'HSBC', logo: '/assets/hsbc.png' },
        { name: 'Mashreq', logo: '/assets/mashreq.png' },
        { name: 'Emirates NBD', logo: '/assets/emirates-nbd.png' },
        { name: 'ADIB', logo: '/assets/adib.png' },
        { name: 'DIB', logo: '/assets/dib-dubai-islamic-bank.png' },
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Media Mentions Section */}
                <div className="text-center mb-24">
                    <h2 className="text-[2rem] font-bold text-[#2D2D2D] mb-3">Media mentions</h2>
                    <p className="text-[#666] text-sm mb-12">Featured in the UAE's most popular media outlets</p>

                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                        {mediaOutlets.map((outlet, index) => (
                            <img
                                key={index}
                                src={outlet.logo}
                                alt={outlet.name}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        ))}
                    </div>
                </div>

                {/* Bank Partners Section */}
                <div className="text-center">
                    <h2 className="text-[1.75rem] font-bold text-[#2D2D2D] mb-12 max-w-3xl mx-auto leading-tight">
                        Our partners include some of the largest financial institutions in the UAE
                    </h2>

                    <div className="relative w-full overflow-hidden">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes scroll-partners {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(calc(-200px * ${banks.length})); }
                            }
                            .partners-track {
                                animation: scroll-partners 20s linear infinite;
                                width: calc(200px * ${banks.length * 2});
                            }
                            .partners-track:hover {
                                animation-play-state: paused;
                            }
                            `
                        }} />

                        <div className="partners-track flex items-center">
                            {/* First Set */}
                            {banks.map((bank, index) => (
                                <div key={`bank-1-${index}`} className="w-[200px] flex-shrink-0 flex items-center justify-center px-6">
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        className="max-h-[50px] max-w-[140px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                            {/* Duplicate Set for Loop */}
                            {banks.map((bank, index) => (
                                <div key={`bank-2-${index}`} className="w-[200px] flex-shrink-0 flex items-center justify-center px-6">
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        className="max-h-[50px] max-w-[140px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MediaAndPartners;
