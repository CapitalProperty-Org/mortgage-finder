import React from 'react';
import Footer from '../components/Footer';
import HowItWorksHero from '../components/HowItWorksHero';
import HowItWorksBenefits from '../components/HowItWorksBenefits';
import HowItWorksSteps from '../components/HowItWorksSteps';
import BankPartners from '../components/BankPartners';
import BlogSection from '../components/BlogSection';



const HowItWorksPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow">
                <HowItWorksHero />
                <HowItWorksBenefits />
                <HowItWorksSteps />
            </main>
            <BankPartners />
            <BlogSection/>
        </div>
    );
};

export default HowItWorksPage;
