import React from 'react';
import Navbar from '../components/Navbar';
import CommercialHero from '../components/CommercialHero';
import CommercialFeatures from '../components/CommercialFeatures';
import CommercialLeadCapture from '../components/CommercialLeadCapture';
import BankPartners from '../components/BankPartners';

const CommercialFinancePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            
            <div className="flex-grow">
                <CommercialHero />
                <CommercialFeatures />
                <CommercialLeadCapture />
            </div>
            {/* banks  */}
            <BankPartners />
        </div>
    );
};

export default CommercialFinancePage;
