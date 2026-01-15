import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQHero from '../components/FAQHero';

const FAQLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">

            <main className="flex-grow">
                <FAQHero />
                <Outlet />
            </main>
        </div>
    );
};

export default FAQLayout;
