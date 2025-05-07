// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Import Page Components (we'll create these as placeholders next)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
// Placeholder for Blog pages - routing can be added later
// import BlogIndexPage from './pages/BlogIndexPage';
// import ArticleDetailPage from './pages/ArticleDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/cara-kerja" element={<HowItWorksPage />} />
          <Route path="/tentang-kami" element={<AboutUsPage />} />
          <Route path="/harga" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="/ketentuan-layanan" element={<TermsOfServicePage />} />
          {/* Example for blog if added later:
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          */}
        </Route>
        {/* Add other routes perhaps not using MainLayout here, e.g., a 404 page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
