import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Refinance from './pages/Refinance';
import MortgageCalculatorPage from './pages/MortgageCalculatorPage';
import RefinanceCalculatorPage from './pages/RefinanceCalculatorPage';
import EligibilityCalculatorPage from './pages/EligibilityCalculatorPage';
import CommercialFinancePage from './pages/CommercialFinancePage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQLayout from './pages/FAQLayout';
import FAQList from './components/FAQList';
import FAQAnswer from './components/FAQAnswer';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-[#333]">
        {/* <NotificationBanner /> */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qualification-journey" element={<Buy />} />
            <Route path="/refinance" element={<Refinance />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
            <Route path="/refinance-calculator" element={<RefinanceCalculatorPage />} />
            <Route path="/eligibility-calculator" element={<EligibilityCalculatorPage />} />
            <Route path="/commercial-finance" element={<CommercialFinancePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQLayout />}>
              <Route index element={<FAQList />} />
              <Route path=":slug" element={<FAQAnswer />} />
            </Route>
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
