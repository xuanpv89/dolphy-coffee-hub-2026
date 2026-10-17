import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Coffee, GraduationCap, MapPin, BookOpen, Briefcase, UserCheck, PhoneCall } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { brandInfo } from '../data/dolphyData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useDolphy();
  const location = useLocation();

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Dolphy Academy', path: '/academy', badge: 'Mới 2026' },
    { name: 'Cà Phê & Quà Tặng', path: '/shop' },
    { name: '10 Chi Nhánh', path: '/branches' },
    { name: 'Cẩm Nang Pha Chế', path: '/knowledge' },
    { name: 'Tuyển Dụng', path: '/careers' },
    { name: 'Về Dolphy', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#24140A]/95 backdrop-blur-md border-b border-[#D4A373]/20 text-[#FDFBF7] shadow-lg transition-all duration-300">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-[#4A2C11] via-[#8C5329] to-[#4A2C11] py-1.5 px-4 text-xs font-medium text-center text-[#FAEDCD] flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E76F51] animate-ping inline-block"></span>
          <span>🎓 <strong>Dolphy Academy 2026:</strong> Ưu đãi 1.000.000đ cho 10 học viên đăng ký khóa Barista đầu tiên</span>
        </span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="hidden md:flex items-center gap-1 text-[#FAEDCD]">
          <PhoneCall size={12} /> Hotline: <strong>{brandInfo.hotline}</strong>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4A373] to-[#8C5329] p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#24140A] flex items-center justify-center overflow-hidden">
                <span className="text-xl">🐬</span>
              </div>
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-wider text-[#FDFBF7] group-hover:text-[#D4A373] transition-colors flex items-center gap-2">
                DOLPHY <span className="text-[#D4A373] font-light text-base">CAFÉ & ACADEMY</span>
              </div>
              <div className="text-[11px] text-[#D4A373]/80 tracking-widest uppercase">
                Happiness in a cup • Est. 2013
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'text-[#FAEDCD] bg-white/10 font-semibold'
                      : 'text-[#E5DED7] hover:text-[#FAEDCD] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#E76F51] text-white">
                      {link.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4A373] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Admin Portal Quick Link */}
            <Link
              to="/admin"
              title="Cổng Quản Trị Hệ Thống CRM / Admin"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4A373]/30 text-xs text-[#D4A373] hover:bg-[#D4A373]/10 transition-colors"
            >
              <UserCheck size={14} />
              <span>Admin Hub</span>
            </Link>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/15 text-[#FDFBF7] transition-all hover:scale-105 active:scale-95"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E76F51] text-white text-xs font-bold flex items-center justify-center shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Học Barista */}
            <Link
              to="/academy"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#8C5329] text-[#24140A] text-sm font-bold shadow-md hover:shadow-[#D4A373]/30 hover:brightness-110 active:scale-95 transition-all"
            >
              <GraduationCap size={16} />
              <span>Đăng Ký Học Barista</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#FDFBF7] hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#24140A] border-b border-[#D4A373]/20 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive(link.path)
                  ? 'bg-white/10 text-[#FAEDCD] font-bold'
                  : 'text-[#E5DED7] hover:bg-white/5'
              }`}
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E76F51] text-white">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <Link
              to="/academy"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#8C5329] text-[#24140A] font-bold text-center"
            >
              <GraduationCap size={18} />
              <span>Đăng Ký Học Barista 2026</span>
            </Link>
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#D4A373]/30 text-[#D4A373] text-sm font-medium text-center"
            >
              <UserCheck size={16} />
              <span>Cổng Quản Trị Hệ Thống CRM & Admin</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
