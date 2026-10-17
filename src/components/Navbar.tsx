import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, PhoneCall, ExternalLink, ShieldCheck, Sun, Moon, Globe } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { brandInfo } from '../data/dolphyData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen, language, toggleLanguage, theme, toggleTheme, t } = useDolphy();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.academy'), path: '/academy', badge: t('nav.badge_new') },
    { name: t('nav.branches'), path: '/branches' },
    { name: t('nav.delivery'), path: 'https://dolphycoffee.cukcuk.vn/order-online/', external: true },
    { name: t('nav.knowledge'), path: '/knowledge' },
    { name: t('nav.careers'), path: '/careers' },
    { name: t('nav.contact'), path: '/about#contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('http') || path.includes('#')) return false;
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full bg-white dark:bg-[#1e293b] text-[#222222] dark:text-[#f1f5f9] transition-colors border-b border-gray-100 dark:border-slate-800 shadow-xs">
      {/* 1. TOP INTRO HEADER */}
      <div className="border-b border-gray-100 dark:border-slate-800/80 py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Logo Dolphy Cafe */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/images/dolphy-logo.png" 
              alt="Dolphy Cafe" 
              className="h-8 xs:h-9 sm:h-12 md:h-14 w-auto object-contain dark:brightness-110"
            />
          </Link>

          {/* Right Header Area: Hotline, Search, Controls (Lang, Theme), Admin, Cart */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 shrink-0">
            
            {/* Search Input Box */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder={t('nav.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 lg:w-60 pl-3 pr-8 py-1.5 text-xs rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-[#2076bd] dark:focus:border-[#3ba0e6] transition-colors"
              />
              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2076bd]">
                <Search size={14} />
              </button>
            </div>

            {/* Hotline */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
              <PhoneCall size={13} className="text-[#2076bd] dark:text-[#3ba0e6]" />
              <span>{t('nav.hotline')}: <strong className="text-[#2076bd] dark:text-[#3ba0e6]">{brandInfo.hotline}</strong></span>
            </div>

            {/* Language Switcher Button (VI / EN) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:border-[#2076bd] text-gray-700 dark:text-gray-200 transition-colors text-[11px] sm:text-xs font-bold font-oswald tracking-wider"
              title={language === 'vi' ? 'Chuyển sang Tiếng Anh (Switch to English)' : 'Switch to Vietnamese (Chuyển sang Tiếng Việt)'}
            >
              <Globe size={12} className="text-[#2076bd] dark:text-[#3ba0e6]" />
              <span className={language === 'vi' ? 'text-[#2076bd] dark:text-[#3ba0e6]' : 'text-gray-400 dark:text-gray-500'}>VI</span>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className={language === 'en' ? 'text-[#2076bd] dark:text-[#3ba0e6]' : 'text-gray-400 dark:text-gray-500'}>EN</span>
            </button>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-amber-400 hover:border-[#2076bd] hover:text-[#2076bd] transition-colors"
              title={theme === 'light' ? t('nav.theme_dark') : t('nav.theme_light')}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            {/* Admin Hub shortcut */}
            <Link
              to="/admin"
              title="Cổng Quản Trị Hệ Thống CRM / Admin"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-200 hover:text-[#2076bd] border border-gray-200 dark:border-slate-700 text-xs font-medium transition-colors"
            >
              <ShieldCheck size={14} className="text-[#2076bd] dark:text-[#3ba0e6]" />
              <span>{t('nav.admin')}</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 bg-[#2076bd] hover:bg-[#c88232] text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-oswald tracking-wider transition-colors shadow-sm shrink-0"
            >
              <ShoppingBag size={14} />
              <span className="hidden xs:inline">{t('nav.cart')}</span>
              <span className="bg-white text-[#2076bd] font-bold px-1.5 py-0.2 rounded-full text-[10px] sm:text-[11px] min-w-[16px] text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-gray-700 dark:text-gray-200 hover:text-[#2076bd] rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. STANDARD MENU BAR */}
      <nav className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] sticky top-0 z-30 shadow-xs hidden lg:block transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between text-[13px] font-oswald tracking-wider">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              if (link.external) {
                return (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-3 text-[#222222] dark:text-slate-200 hover:text-[#2076bd] dark:hover:text-[#3ba0e6] flex items-center gap-1 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              }

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`py-3 px-3 flex items-center gap-1.5 transition-all relative ${
                      active
                        ? 'text-[#2076bd] dark:text-[#3ba0e6] font-semibold'
                        : 'text-[#222222] dark:text-slate-200 hover:text-[#2076bd] dark:hover:text-[#3ba0e6]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="bg-[#c88232] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2076bd] dark:bg-[#3ba0e6]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 shadow-lg transition-colors">
          <div className="pb-2 border-b border-gray-100 dark:border-slate-800">
            <input
              type="text"
              placeholder={t('nav.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-[#2076bd]"
            />
          </div>

          <div className="flex items-center justify-between py-1 px-1 border-b border-gray-100 dark:border-slate-800 text-xs">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-semibold"
            >
              <Globe size={13} className="text-[#2076bd]" />
              <span>{language === 'vi' ? 'Tiếng Việt (VI)' : 'English (EN)'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-semibold"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} className="text-amber-400" />}
              <span>{theme === 'light' ? t('nav.theme_dark') : t('nav.theme_light')}</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <div key={link.name}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-3 text-sm font-oswald text-gray-700 dark:text-gray-200 hover:text-[#2076bd] hover:bg-gray-50 dark:hover:bg-slate-800 rounded"
                >
                  <span>{link.name}</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 text-sm font-oswald rounded ${
                    isActive(link.path)
                      ? 'text-[#2076bd] dark:text-[#3ba0e6] bg-[#f0f8ff] dark:bg-slate-800 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-[#2076bd] hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-[#c88232] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{t('nav.hotline')}: <strong className="text-[#2076bd] dark:text-[#3ba0e6]">{brandInfo.hotline}</strong></span>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="text-[#2076bd] dark:text-[#3ba0e6] underline font-medium">
              {t('nav.admin')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
