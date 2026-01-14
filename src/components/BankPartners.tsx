import React from 'react';

const BankPartners = () => {
    const banks = [
        { name: 'Mashreq', logo: '/assets/mashreq.png' },
        { name: 'Emirates NBD', logo: '/assets/emirates-nbd.png' },
        { name: 'Arab Bank', logo: '/assets/arab-bank.png' },
        { name: 'Standard Chartered', logo: '/assets/standard-chartered.png' },
        { name: 'CBD', logo: '/assets/cbd.png' },
        { name: 'EIB', logo: '/assets/eib.png' },
        { name: 'RAK Bank', logo: '/assets/rakbank.png' },
        { name: 'ADIB', logo: '/assets/adib.png' },
        { name: 'HSBC', logo: '/assets/hsbc.png' },
        { name: 'DIB', logo: '/assets/dib-dubai-islamic-bank.png' },
        { name: 'FAB', logo: '/assets/fab.png' },
    ];

    return (
        <div className="py-16 bg-white overflow-hidden font-sans border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-[1.75rem] font-bold text-[#333]">We work with all the banks</h2>
            </div>

            {/* Container restricted to 80% width and centered */}
            <div className="relative w-[80%] mx-auto overflow-hidden">
                <style>
                    {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-250px * 11))} /* Adjust 250px * count */
                    }
                    .slider-track {
                        animation: scroll 40s linear infinite;
                        width: calc(250px * 22); /* width of one set * 2 */
                    }
                    `}
                </style>
                <div className="slider-track flex items-center">
                    {/* First Duplicate Set */}
                    {banks.map((bank, index) => (
                        <div key={`bank-1-${index}`} className="w-[250px] flex-shrink-0 flex items-center justify-center px-8">
                            <img
                                src={bank.logo}
                                alt={bank.name}
                                className="max-h-[50px] w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Second Duplicate Set for Loop */}
                    {banks.map((bank, index) => (
                        <div key={`bank-2-${index}`} className="w-[250px] flex-shrink-0 flex items-center justify-center px-8">
                            <img
                                src={bank.logo}
                                alt={bank.name}
                                className="max-h-[50px] w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BankPartners;
