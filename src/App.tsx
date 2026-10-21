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
import { ThemeToast } from './components/ThemeToast';
import { BackToTop } from './components/BackToTop';
import { PwaInstallPrompt } from './components/pwa/PwaInstallPrompt';
import { OfflineIndicator } from './components/pwa/OfflineIndicator';
import { PwaUpdateNotification } from './components/pwa/PwaUpdateNotification';
import { useScrollReveal } from './hooks/useScrollReveal';

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

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Activate hardware-accelerated scroll reveal & view transitions
  useScrollReveal();

  const bgClasses = isAdmin
    ? 'bg-[#f1f5f9] dark:bg-[#0b1329] text-[#222222] dark:text-[#f1f5f9] selection:bg-[#2076bd] selection:text-white'
    : 'bg-[#f8fafc] dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] selection:bg-[#2076bd] selection:text-white';

  return (
    <div className={`min-h-screen flex flex-col ${bgClasses} transition-colors duration-200`}>
      {/* Header */}
      {!isAdmin && <Navbar />}
      
      <main key={location.pathname} className="flex-1 page-enter">
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

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      {!isAdmin && <Footer />}

      {/* Interactive Global Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <CourseRegisterModal />
      <ApplicationModal />
      <Toast />
      <ThemeToast />
      {!isAdmin && <BackToTop />}

      {/* Progressive Web App (PWA) Global Controls */}
      <PwaInstallPrompt />
      <OfflineIndicator />
      <PwaUpdateNotification />
    </div>
  );
};

export default function App() {
  return (
    <DolphyProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </DolphyProvider>
  );
}
