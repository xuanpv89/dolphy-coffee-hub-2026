import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { brandInfo } from '../data/dolphyData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen } = useDolphy();
  const location = useLocation();

  const navLinks = [
    { name: 'TRANG CHỦ', path: '/' },
    { name: 'DOLPHY’S STORY', path: '/about' },
    { name: 'CỬA HÀNG', path: '/shop' },
    { name: 'DOLPHY ACADEMY', path: '/academy', badge: 'MỚI 2026' },
    { name: 'CHI NHÁNH', path: '/branches' },
    { name: 'GIAO HÀNG', path: 'https://dolphycoffee.cukcuk.vn/order-online/', external: true },
    { name: 'TIN TỨC', path: '/knowledge' },
    { name: 'TUYỂN DỤNG', path: '/careers' },
    { name: 'LIÊN HỆ', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('http')) return false;
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full bg-white text-[#222222]">
      {/* 1. TOP INTRO HEADER (Theo chuẩn branding dolphycafe.com) */}
      <div className="border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Dolphy Cafe */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/dolphy-logo.png" 
              alt="Dolphy Cafe" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Right Header Area: Hotline, Search, Social, Admin, Cart */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Search Input Box */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, khóa học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-3 pr-8 py-1.5 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-[#2076bd] transition-colors"
              />
              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2076bd]">
                <Search size={14} />
              </button>
            </div>

            {/* Hotline */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-gray-600">
              <PhoneCall size={14} className="text-[#2076bd]" />
              <span>Hotline: <strong className="text-[#2076bd]">{brandInfo.hotline}</strong></span>
            </div>

            {/* Social Icons matching dolphycafe.com */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={brandInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                title="Dolphy Facebook"
                className="w-7 h-7 rounded-full bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-[#2076bd] hover:bg-[#2076bd] hover:text-white transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href={brandInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                title="Dolphy Instagram"
                className="w-7 h-7 rounded-full bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-[#e1306c] hover:bg-[#e1306c] hover:text-white transition-colors text-xs font-bold"
              >
                ig
              </a>
            </div>

            {/* Admin Hub shortcut */}
            <Link
              to="/admin"
              title="Cổng Quản Trị Hệ Thống CRM / Admin"
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-[#2076bd] border border-gray-200 text-xs font-medium transition-colors"
            >
              <ShieldCheck size={14} className="text-[#2076bd]" />
              <span className="hidden sm:inline">Admin CRM</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#2076bd] hover:bg-[#f09c05] text-white px-3.5 py-1.5 rounded-full text-xs font-oswald tracking-wider transition-colors shadow-sm"
            >
              <ShoppingBag size={14} />
              <span>GIỎ HÀNG</span>
              <span className="bg-white text-[#2076bd] font-bold px-1.5 py-0.2 rounded-full text-[11px] min-w-[18px] text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#2076bd]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. STANDARD MENU BAR (Border & Oswald font matching dolphycafe.com) */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-sm hidden lg:block">
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
                      className="py-3.5 px-3 text-[#222222] hover:text-[#2076bd] flex items-center gap-1 transition-colors group"
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
                    className={`py-3.5 px-3 flex items-center gap-1.5 transition-all relative ${
                      active
                        ? 'text-[#2076bd] font-semibold'
                        : 'text-[#222222] hover:text-[#2076bd]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="bg-[#f09c05] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2076bd]" />
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
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <div className="pb-3 border-b border-gray-100">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm, khóa học..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#2076bd]"
            />
          </div>
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-3 text-sm font-oswald text-gray-700 hover:text-[#2076bd] hover:bg-gray-50 rounded"
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
                      ? 'text-[#2076bd] bg-[#f0f8ff] font-semibold'
                      : 'text-gray-700 hover:text-[#2076bd] hover:bg-gray-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-[#f09c05] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Hotline: <strong className="text-[#2076bd]">{brandInfo.hotline}</strong></span>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="text-[#2076bd] underline font-medium">
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
