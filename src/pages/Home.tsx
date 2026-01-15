import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Calculator from '../components/Calculator';
import BankPartners from '../components/BankPartners';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import HelpSection from '../components/HelpSection';
import ServicesGrid from '../components/ServicesGrid';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Stats />
            <Calculator />
            <BankPartners />
            <Advantages />
            <Testimonials />
            <HelpSection />
            <ServicesGrid />
            <FAQ />
            <BlogSection />
        </>
    );
};

export default Home;
