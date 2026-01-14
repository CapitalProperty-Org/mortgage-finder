import React from 'react';
import NotificationBanner from './components/NotificationBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Calculator from './components/Calculator';
import BankPartners from './components/BankPartners';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import HelpSection from './components/HelpSection';
import ServicesGrid from './components/ServicesGrid';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* <NotificationBanner /> */}
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
