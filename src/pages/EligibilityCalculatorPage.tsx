import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EligibilityCalculator from '../components/EligibilityCalculator';
import EligibilityCalculationSteps from '../components/EligibilityCalculationSteps';
import EligibilityPreApprovalCTA from '../components/EligibilityPreApprovalCTA';
import EligibilityWhyChoose from '../components/EligibilityWhyChoose';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

const EligibilityCalculatorPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen flex flex-col pt-2">
          
            <div id="eligibility-calculator">
                <EligibilityCalculator />
            </div>
            <EligibilityCalculationSteps />
            <EligibilityPreApprovalCTA />
            <EligibilityWhyChoose />
            <Testimonials />
            <BlogSection />
        </div>
    );
};

export default EligibilityCalculatorPage;
