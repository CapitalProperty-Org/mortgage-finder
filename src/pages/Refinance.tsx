import React from 'react';
import WhyRefinance from '../components/WhyRefinance';
import HowWeCanHelp from '../components/HowWeCanHelp';
import RefinanceCalculator from '../components/RefinanceCalculator';
import RefinanceHero from '../components/RefinanceHero';
import WhyRefinanceIntro from '../components/WhyRefinanceIntro';

const Refinance = () => {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <RefinanceHero />

            {/* Why Refinance Intro Section */}
            <WhyRefinanceIntro />

            {/* Refinance Calculator Section */}
            <RefinanceCalculator />



            {/* Why Refinance Section */}
            <WhyRefinance />

            {/* How We Can Help Section */}
            <HowWeCanHelp />
        </div>
    );
};

export default Refinance;
