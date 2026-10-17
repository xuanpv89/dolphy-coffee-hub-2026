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
import { BackToTop } from './components/BackToTop';
import { VersionSwitcherBadge } from './components/VersionSwitcherBadge';

// V1 Pages
import { Home } from './pages/Home';
import { Academy } from './pages/Academy';
import { Shop } from './pages/Shop';
import { Branches } from './pages/Branches';
import { KnowledgeHub } from './pages/KnowledgeHub';
import { Careers } from './pages/Careers';
import { About } from './pages/About';
import { Policies } from './pages/Policies';
import { AdminDashboard } from './pages/AdminDashboard';

// V2 Artisanal Coffeehouse Concept
import { NavbarV2 } from './v2/components/NavbarV2';
import { FooterV2 } from './v2/components/FooterV2';
import { HomeV2 } from './v2/pages/HomeV2';
import { MenuV2 } from './v2/pages/MenuV2';
import { StoryV2 } from './v2/pages/StoryV2';
import { AcademyV2 } from './v2/pages/AcademyV2';

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
  const isV2 = location.pathname.startsWith('/v2');

  const bgClasses = isV2
    ? 'bg-[#FAF6F0] dark:bg-[#120E0B] text-[#2C2117] dark:text-[#E8DEC8] selection:bg-[#c88232] selection:text-white'
    : isAdmin
    ? 'bg-[#f1f5f9] dark:bg-[#0b1329] text-[#222222] dark:text-[#f1f5f9] selection:bg-[#2076bd] selection:text-white'
    : 'bg-[#f8fafc] dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] selection:bg-[#2076bd] selection:text-white';

  return (
    <div className={`min-h-screen flex flex-col ${bgClasses} transition-colors duration-200`}>
      {/* Dynamic Header */}
      {!isAdmin && (isV2 ? <NavbarV2 /> : <Navbar />)}
      
      <main className="flex-1">
        <Routes>
          {/* Classic V1 Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/knowledge" element={<KnowledgeHub />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Artisanal F&B Concept V2 Routes */}
          <Route path="/v2" element={<HomeV2 />} />
          <Route path="/v2/menu" element={<MenuV2 />} />
          <Route path="/v2/story" element={<StoryV2 />} />
          <Route path="/v2/academy" element={<AcademyV2 />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Dynamic Footer */}
      {!isAdmin && (isV2 ? <FooterV2 /> : <Footer />)}

      {/* Interactive Global Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <CourseRegisterModal />
      <ApplicationModal />
      <Toast />
      {!isAdmin && <BackToTop />}
      {!isAdmin && <VersionSwitcherBadge />}
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

