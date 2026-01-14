import React, { useState } from 'react';
import { X } from 'lucide-react';

const NotificationBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-brand-red text-white py-3 px-4 relative">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <p className="text-sm sm:text-base font-medium">
                    Refinance today to lock a lower rate & get AED 5,000 cashback on loans from AED 1M. Limited time.
                </p>
                <button className="bg-white text-brand-red px-4 py-1.5 rounded text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Refinance Now
                </button>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
                <X size={18} />
            </button>
        </div>
    );
};

export default NotificationBanner;
