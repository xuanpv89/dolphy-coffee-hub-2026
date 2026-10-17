import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Globe, Moon, Sun, ArrowLeft, Menu, X, Coffee, Sparkles } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';
import { brandInfo } from '../../data/dolphyData';

export const NavbarV2: React.FC = () => {
  const { cartCount, setIsCartOpen, language, toggleLanguage, theme, toggleTheme } = useDolphy();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: language === 'vi' ? 'Không Gian Quán' : 'Cafe Atmosphere', path: '/v2' },
    { name: language === 'vi' ? 'Thực Đơn Bảng Đen' : 'Chalkboard Menu', path: '/v2/menu' },
    { name: language === 'vi' ? 'Di Sản Thảo Điền' : 'Neighborhood Story', path: '/v2/story' },
    { name: language === 'vi' ? 'Học Viện Atelier' : 'Barista Atelier', path: '/v2/academy' },
  ];

  const isActive = (path: string) => {
    if (path === '/v2' && location.pathname === '/v2') return true;
    if (path !== '/v2' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300">
      {/* Top artisanal badge strip */}
      <div className="bg-[#1A1410] text-[#D8C7B5] py-1.5 px-3 sm:px-4 text-[11px] font-serif-editorial tracking-widest uppercase border-b border-[#30241C]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-400/90 truncate">
            <Sparkles size={11} className="shrink-0" />
            <span>{language === 'vi' ? 'Khởi nguồn từ góc nhỏ Thảo Điền năm 2013 • Cà phê rang mộc nguyên chất' : 'Handcrafted in Thao Dien since 2013 • Pure Specialty Beans'}</span>
          </span>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
            <span className="font-mono tracking-wider text-[#A69584] truncate">
              Hotline: <a href="tel:0938084985" className="text-amber-400 hover:underline font-bold">{brandInfo.hotline}</a>
            </span>

            {/* Back to V1 Button */}
            <Link
              to="/"
              className="shrink-0 inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#2076bd]/20 hover:bg-[#2076bd] text-white border border-[#2076bd]/50 text-[10px] font-sans font-semibold uppercase tracking-wider transition-colors shadow-xs"
              title="Quay lại giao diện gốc (Bản V1)"
            >
              <ArrowLeft size={10} />
              <span className="hidden xs:inline">{language === 'vi' ? 'Bản Tiêu Chuẩn (V1)' : 'Standard (V1)'}</span>
              <span className="xs:hidden">{language === 'vi' ? 'Bản V1' : 'V1'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Floating Glass Nav */}
      <div className="bg-[#FAF6F0]/95 dark:bg-[#16120E]/95 backdrop-blur-md border-b border-[#E8DFC8] dark:border-[#2C2219] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo & Cafe Heritage Monogram */}
          <Link to="/v2" className="flex items-center gap-3 group">
            <img 
              src="/favicon.png" 
              alt="Dolphy Wave" 
              className="w-10 h-10 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif-cormorant text-2xl font-bold tracking-wider text-[#1A1410] dark:text-[#F3ECE4] leading-tight group-hover:text-[#2076bd] transition-colors">
                DOLPHY CAFÉ
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C7A6B] dark:text-[#A8988B] -mt-0.5">
                Thảo Điền • Est. 2013
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-xs font-oswald tracking-widest uppercase font-semibold transition-all relative ${
                    active
                      ? 'bg-[#1A1410] text-amber-300 dark:bg-[#FAF6F0] dark:text-[#1A1410] shadow-sm'
                      : 'text-[#5A4A3E] dark:text-[#C5B7A9] hover:text-[#1A1410] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language, Theme, Cart, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full text-[11px] font-oswald font-bold tracking-wider border border-[#D5C7B5] dark:border-[#382B20] text-[#4A3B30] dark:text-[#D8C7B5] hover:border-[#2076bd] transition-colors"
              title="Chuyển ngôn ngữ"
            >
              <span className={language === 'vi' ? 'text-[#2076bd] dark:text-amber-400 font-extrabold' : 'opacity-40'}>VI</span>
              <span className="mx-1 opacity-30">/</span>
              <span className={language === 'en' ? 'text-[#2076bd] dark:text-amber-400 font-extrabold' : 'opacity-40'}>EN</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#D5C7B5] dark:border-[#382B20] text-[#5A4A3E] dark:text-amber-300 hover:border-[#2076bd] transition-colors"
              title={theme === 'light' ? 'Bật chế độ quán về đêm' : 'Bật chế độ quán ban ngày'}
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#2076bd] hover:bg-[#165b94] text-white px-3.5 py-2 rounded-full text-xs font-oswald tracking-wider transition-colors shadow-sm"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">{language === 'vi' ? 'Giỏ Hàng' : 'Cart'}</span>
              <span className="bg-white text-[#2076bd] font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#EAE2D5] dark:bg-[#251D17] text-[#2A1E17] dark:text-[#EDE3D8] border border-[#D5C7B5] dark:border-[#3A2D23] active:scale-95 transition-all"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DFC8] dark:border-[#2C2219] bg-[#FAF6F0] dark:bg-[#16120E] px-4 py-4 space-y-2 animate-fade-in shadow-lg">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-oswald uppercase tracking-wider font-bold transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#2076bd] text-white'
                    : 'text-[#4A3B30] dark:text-[#D8C7B5] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-[#E8DFC8] dark:border-[#2C2219] flex items-center justify-between text-xs text-[#8C7A6B]">
              <span>Dolphy Thảo Điền • 06:30 - 22:30</span>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#2076bd] dark:text-amber-400 font-bold underline"
              >
                Về bản V1 ➜
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
