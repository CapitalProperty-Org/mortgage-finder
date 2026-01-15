import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[] | string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    name?: string; // For compatibility if needed
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder = 'Select option', error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Normalize options to object array
    const normalizedOptions = options.map(opt =>
        typeof opt === 'string' ? { value: opt, label: opt } : opt
    );

    const selectedOption = normalizedOptions.find(opt => opt.value === value);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 text-left bg-white rounded-lg border flex items-center justify-between transition-all ${error
                        ? 'border-red-500'
                        : isOpen ? 'border-[#3a307f] ring-1 ring-[#3a307f]' : 'border-gray-200'
                    }`}
            >
                <span className={`block truncate ${selectedOption ? 'text-gray-700' : 'text-gray-400'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                    <ul className="py-1">
                        {/* Placeholder as clear option or label? user didn't ask, but typically "Select..." is disabled or clears */}
                        {/* We will just list options */}
                        {normalizedOptions.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between ${value === option.value
                                        ? 'bg-purple-50 text-[#3a307f] font-medium'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {option.label}
                                {value === option.value && <Check size={16} />}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Custom Scrollbar Styles injected here or in global CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}} />
        </div>
    );
};

export default CustomSelect;
