import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DolphyProvider } from './context/DolphyContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CourseRegisterModal } from './components/CourseRegisterModal';
import { ApplicationModal } from './components/ApplicationModal';
import { Toast } from './components/Toast';

// Pages
import { Home } from './pages/Home';
import { Academy } from './pages/Academy';
import { Shop } from './pages/Shop';
import { Branches } from './pages/Branches';
import { KnowledgeHub } from './pages/KnowledgeHub';
import { Careers } from './pages/Careers';
import { About } from './pages/About';
import { Policies } from './pages/Policies';
import { AdminDashboard } from './pages/AdminDashboard';

// Helper component to scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <DolphyProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] selection:bg-[#2076bd] selection:text-white transition-colors duration-200">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/knowledge" element={<KnowledgeHub />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/about" element={<About />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Global Drawers & Modals */}
          <CartDrawer />
          <CheckoutModal />
          <CourseRegisterModal />
          <ApplicationModal />
          <Toast />
        </div>
      </Router>
    </DolphyProvider>
  );
}
