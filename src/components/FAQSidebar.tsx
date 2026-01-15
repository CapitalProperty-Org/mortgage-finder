import React from 'react';

interface FAQSidebarProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FAQSidebar: React.FC<FAQSidebarProps> = ({ activeFilter, onFilterChange }) => {
    const filters = [
        'All',
        'About applicants',
        'About mortgages',
        'Buying process',
        'Mortgage brokers',
        'Property types'
    ];

    return (
        <div className="lg:w-64 flex-shrink-0">
            <h3 className="font-bold text-lg mb-6 text-[#2D2D2D]">Filter by categories</h3>
            <div className="space-y-4">
                {filters.map((filter) => (
                    <label key={filter} className="flex items-center space-x-3 cursor-pointer group select-none">
                        <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors
                            ${activeFilter === filter
                                    ? 'bg-[#3a307f] border-[#3a307f]'
                                    : 'bg-white border-gray-300 group-hover:border-gray-400'}`}
                        >
                            {activeFilter === filter && (
                                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 20 20">
                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                </svg>
                            )}
                        </div>
                        <input
                            type="radio"
                            name="category"
                            className="hidden"
                            checked={activeFilter === filter}
                            onChange={() => onFilterChange(filter)}
                        />
                        <span className={`text-[15px] ${activeFilter === filter ? 'text-[#3a307f] font-medium' : 'text-gray-600 group-hover:text-gray-800'}`}>
                            {filter}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FAQSidebar;
