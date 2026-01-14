import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface Country {
    name: string;
    code: string;
    dialCode: string;
    flag: string;
}

const countries: Country[] = [
    { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦' },
    { name: 'Qatar', code: 'QA', dialCode: '+974', flag: '🇶🇦' },
    { name: 'Kuwait', code: 'KW', dialCode: '+965', flag: '🇰🇼' },
    { name: 'Bahrain', code: 'BH', dialCode: '+973', flag: '🇧🇭' },
    { name: 'Oman', code: 'OM', dialCode: '+968', flag: '🇴🇲' },
    { name: 'Egypt', code: 'EG', dialCode: '+20', flag: '🇪🇬' },
    { name: 'Jordan', code: 'JO', dialCode: '+962', flag: '🇯🇴' },
    { name: 'Lebanon', code: 'LB', dialCode: '+961', flag: '🇱🇧' },
    { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' },
    { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳' },
    { name: 'Pakistan', code: 'PK', dialCode: '+92', flag: '🇵🇰' },
    { name: 'Afghanistan', code: 'AF', dialCode: '+93', flag: '🇦🇫' },
];

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, placeholder = 'Enter your phone number' }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchQuery('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.dialCode.includes(searchQuery)
    );

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10 hover:opacity-80 transition-opacity"
                >
                    <span className="text-2xl">{selectedCountry.flag}</span>
                    <ChevronDown size={16} className="text-gray-600" />
                </button>
                <input
                    type="tel"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full pl-24 pr-5 py-4 border-2 border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-[#3a307f] placeholder:text-gray-400"
                />
                <span className="absolute left-[72px] top-1/2 -translate-y-1/2 text-[#666] font-medium text-[0.95rem] pointer-events-none">
                    {selectedCountry.dialCode}
                </span>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 max-h-[320px] overflow-hidden">
                    <div className="p-3 border-b border-gray-200">
                        <div className="relative">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search country or code"
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-md text-[0.9rem] focus:outline-none focus:border-[#3a307f] placeholder:text-gray-400"
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto max-h-[250px]">
                        {filteredCountries.map((country) => (
                            <button
                                key={country.code}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${selectedCountry.code === country.code ? 'bg-blue-50' : ''
                                    }`}
                            >
                                <span className="text-2xl">{country.flag}</span>
                                <span className="text-[#2D2D2D] text-[0.95rem] flex-1 text-left">
                                    {country.name}
                                </span>
                                <span className="text-[#666] text-[0.9rem]">({country.dialCode})</span>
                            </button>
                        ))}
                        {filteredCountries.length === 0 && (
                            <div className="px-4 py-8 text-center text-gray-400 text-[0.9rem]">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhoneInput;
