import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Menu, X, Search, PhoneCall, ExternalLink, ShieldCheck, 
  Sun, Moon, Globe, Download, Waves, Leaf, Square, Sunrise, Palette,
  Sparkles, Coffee, Compass, Flame
} from 'lucide-react';
import { Theme } from '../types/theme';
import { useDolphy } from '../context/DolphyContext';
import { brandInfo } from '../data/dolphyData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    cartCount, setIsCartOpen, language, toggleLanguage, theme, 
    toggleTheme, setTheme, themeConfig, allThemes, t, isStandalone, installPwa 
  } = useDolphy();
  const location = useLocation();

  const renderThemeIcon = (id: Theme, size = 14) => {
    switch (id) {
      case 'ocean':
        return <Waves size={size} className="text-[#2076bd]" />;
      case 'dark':
        return <Moon size={size} className="text-[#FAEA28]" />;
      case 'roastery':
        return <Flame size={size} className="text-amber-400" />;
      case 'vintage':
        return <Leaf size={size} className="text-emerald-600" />;
      case 'nordic':
        return <Square size={size} className="text-zinc-900 dark:text-zinc-100" />;
      case 'sunset':
        return <Sunrise size={size} className="text-rose-500" />;
      default:
        return <Palette size={size} className="text-[#2076bd]" />;
    }
  };

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

  // Reusable Theme Switcher Button with Hover Dropdown
  const renderThemeButton = (compact = false) => (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:border-[#2076bd] transition-all hover:scale-105 ${
          theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-400' : ''
        } ${
          theme === 'roastery' ? 'border-cyan-500/40 shadow-[0_0_12px_rgba(2,132,199,0.3)]' : ''
        }`}
        title={language === 'vi' ? `Giao diện: ${themeConfig?.nameVi || ''} (Nhấn để chuyển sang theme tiếp theo)` : `Theme: ${themeConfig?.nameEn || ''} (Click to cycle themes)`}
      >
        {renderThemeIcon(theme, 13)}
        {!compact && (
          <span className="hidden xl:inline text-[11px] font-bold font-oswald uppercase tracking-wider text-gray-700 dark:text-gray-200">
            {language === 'vi' ? themeConfig?.badgeVi : themeConfig?.badgeEn}
          </span>
        )}
      </button>

      {/* Quick Theme Selector Dropdown on Hover */}
      <div className="hidden group-hover:block absolute right-0 top-full pt-1.5 z-50">
        <div className="p-2 rounded-xl shadow-xl backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-gray-200 dark:border-slate-700 w-52 space-y-1 text-xs">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
            <span>6 Themes Thiết Kế</span>
            <span className="text-[9px] text-[#2076bd]">Click để đổi</span>
          </div>
          {allThemes?.map(tItem => (
            <button
              key={tItem.id}
              onClick={(e) => {
                e.stopPropagation();
                setTheme(tItem.id);
              }}
              className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-left transition-all ${
                theme === tItem.id
                  ? 'bg-[#2076bd]/10 text-[#2076bd] font-bold dark:bg-slate-800'
                  : 'hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
                  style={{ backgroundColor: tItem.primaryHex }}
                />
                <span className="truncate">{language === 'vi' ? tItem.nameVi : tItem.nameEn}</span>
              </div>
              {renderThemeIcon(tItem.id, 12)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Common Mobile Drawer
  const renderMobileDrawer = () => (
    mobileMenuOpen && (
      <div className={`lg:hidden border-b px-4 pt-2 pb-4 space-y-2 shadow-lg transition-all ${
        theme === 'roastery'
          ? 'bg-slate-950/95 border-slate-800 text-slate-100 font-mono'
          : theme === 'vintage'
          ? 'bg-[#faf6f0] border-[#e6ded1] text-[#221e1a] font-serif'
          : theme === 'nordic'
          ? 'bg-white border-black text-black font-mono'
          : theme === 'sunset'
          ? 'bg-[#fff8f5] border-rose-200 text-[#271a17]'
          : theme === 'dark'
          ? 'bg-[#0F172A] border-slate-800 text-slate-100'
          : 'bg-white dark:bg-[#1e293b] border-gray-200 dark:border-slate-800 text-[#222222] dark:text-[#f1f5f9]'
      }`}>
        <div className={`pb-2 border-b ${
          theme === 'roastery' ? 'border-cyan-500/20' :
          theme === 'vintage' ? 'border-[#e6ded1]' :
          theme === 'nordic' ? 'border-zinc-300' :
          theme === 'sunset' ? 'border-rose-100' :
          theme === 'dark' ? 'border-slate-800' :
          'border-gray-100 dark:border-slate-800'
        }`}>
          <input
            type="text"
            placeholder={t('nav.search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-3 py-2 text-xs focus:outline-none transition-colors ${
              theme === 'roastery' ? 'rounded-lg border border-cyan-500/30 bg-slate-900 text-cyan-200 focus:border-cyan-400 font-mono' :
              theme === 'vintage' ? 'rounded border border-[#e6ded1] bg-[#f5efe4] text-[#221e1a] focus:border-[#1b4d3e] font-serif' :
              theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 bg-white text-black focus:border-black font-mono' :
              theme === 'sunset' ? 'rounded-full border border-rose-200 bg-white text-[#271a17] focus:border-rose-500' :
              theme === 'dark' ? 'rounded-lg border border-slate-700 bg-slate-900 text-slate-100 focus:border-[#FAEA28]' :
              'rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:border-[#2076bd]'
            }`}
          />
        </div>

        <div className={`flex items-center justify-between py-1 px-1 border-b text-xs ${
          theme === 'roastery' ? 'border-cyan-500/20' :
          theme === 'vintage' ? 'border-[#e6ded1]' :
          theme === 'nordic' ? 'border-zinc-300' :
          theme === 'sunset' ? 'border-rose-100' :
          theme === 'dark' ? 'border-slate-800' :
          'border-gray-100 dark:border-slate-800'
        }`}>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 py-1 px-2.5 font-semibold transition-colors ${
              theme === 'roastery' ? 'rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/30 font-mono' :
              theme === 'vintage' ? 'rounded bg-[#f5efe4] text-[#1b4d3e] border border-[#e6ded1] font-serif' :
              theme === 'nordic' ? 'rounded-none bg-zinc-100 text-black border border-black font-mono' :
              theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-700 border border-rose-200' :
              theme === 'dark' ? 'rounded-md bg-slate-800 text-[#FAEA28] border border-slate-700 font-oswald' :
              'rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200'
            }`}
          >
            <Globe size={13} className={
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'vintage' ? 'text-[#1b4d3e]' :
              theme === 'nordic' ? 'text-black' :
              theme === 'sunset' ? 'text-rose-500' :
              theme === 'dark' ? 'text-[#FAEA28]' :
              'text-[#2076bd]'
            } />
            <span>{language === 'vi' ? 'Tiếng Việt (VI)' : 'English (EN)'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className={`flex items-center gap-1.5 py-1 px-2.5 font-semibold transition-colors ${
              theme === 'roastery' ? 'rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/30 font-mono' :
              theme === 'vintage' ? 'rounded bg-[#f5efe4] text-[#1b4d3e] border border-[#e6ded1] font-serif' :
              theme === 'nordic' ? 'rounded-none bg-zinc-100 text-black border border-black font-mono' :
              theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-700 border border-rose-200' :
              theme === 'dark' ? 'rounded-md bg-slate-800 text-[#FAEA28] border border-slate-700 font-oswald' :
              'rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200'
            }`}
            title={language === 'vi' ? 'Nhấn để chuyển theme tiếp theo' : 'Click to cycle themes'}
          >
            {renderThemeIcon(theme, 13)}
            <span>{language === 'vi' ? themeConfig?.nameVi : themeConfig?.nameEn}</span>
          </button>
        </div>

        {/* Mobile 6-Theme Quick Chips */}
        <div className="flex items-center justify-between gap-1 pt-1 pb-2 border-b border-gray-100 dark:border-slate-800">
          {allThemes?.map(tItem => (
            <button
              key={tItem.id}
              onClick={() => setTheme(tItem.id)}
              className={`flex-1 py-1 px-0.5 rounded text-[10px] font-medium border text-center transition-all ${
                theme === tItem.id
                  ? 'font-bold ring-2 ring-offset-1 shadow-xs'
                  : 'opacity-70 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
              }`}
              style={{
                borderColor: theme === tItem.id ? tItem.primaryHex : undefined,
                backgroundColor: theme === tItem.id ? tItem.primaryHex : 'transparent',
                color: theme === tItem.id ? '#ffffff' : undefined
              }}
            >
              {tItem.nameVi.split(' ')[0]}
            </button>
          ))}
        </div>

        {navLinks.map((link) => {
          const active = isActive(link.path);
          const activeClasses = 
            theme === 'roastery' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]' :
            theme === 'vintage' ? 'text-[#1b4d3e] font-bold bg-[#1b4d3e]/10 italic border-l-2 border-[#1b4d3e]' :
            theme === 'nordic' ? 'font-bold bg-zinc-100 text-black border-l-2 border-black underline' :
            theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold shadow-md shadow-rose-500/20 rounded-full' :
            theme === 'dark' ? 'text-[#FAEA28] font-bold bg-slate-800 border-l-2 border-[#FAEA28]' :
            'text-[#2076bd] font-semibold bg-blue-50/50 dark:bg-slate-800';

          const inactiveClasses =
            theme === 'roastery' ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 font-mono' :
            theme === 'vintage' ? 'text-[#4a4239] hover:text-[#1b4d3e] hover:bg-[#f5efe4] font-serif' :
            theme === 'nordic' ? 'text-zinc-600 hover:text-black hover:bg-zinc-100 font-mono' :
            theme === 'sunset' ? 'text-zinc-700 hover:text-rose-600 hover:bg-rose-50' :
            theme === 'dark' ? 'text-slate-300 hover:text-[#FAEA28] hover:bg-slate-800' :
            'text-gray-700 dark:text-gray-200 hover:text-[#2076bd] hover:bg-gray-50 dark:hover:bg-slate-800';

          return (
            <div key={link.name}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 text-sm font-oswald rounded transition-colors ${inactiveClasses}`}
                >
                  <span>{link.name}</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 text-sm font-oswald rounded transition-colors ${
                    active ? activeClasses : inactiveClasses
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-[#FAEA28] text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                      {link.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          );
        })}

        {!isStandalone && (
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              installPwa();
            }}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
              theme === 'roastery' ? 'rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
              theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#143d31] text-white font-serif' :
              theme === 'nordic' ? 'rounded-none bg-black hover:bg-zinc-800 text-white font-mono' :
              theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-sans shadow-md shadow-rose-500/25' :
              theme === 'dark' ? 'rounded-lg bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald' :
              'rounded-lg bg-[#2076bd] hover:bg-[#18629e] text-white font-oswald'
            }`}
          >
            <Download size={14} />
            <span>{language === 'vi' ? 'Cài Đặt Ứng Dụng Dolphy' : 'Install Dolphy App'}</span>
          </button>
        )}
      </div>
    )
  );

  // ==========================================================================
  // 1. THEME: ROASTERY (Cyberpunk Floating Island Header)
  // ==========================================================================
  if (theme === 'roastery') {
    return (
      <>
        <header className="fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 rounded-2xl backdrop-blur-2xl bg-slate-950/85 border border-cyan-500/35 shadow-[0_0_30px_rgba(2,132,199,0.25)] px-3 sm:px-6 py-2 transition-all">
          <div className="flex items-center justify-between gap-2">
            
            {/* Left: Cyber Logo & Live Status */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center shrink-0">
                <img 
                  src="/images/dolphy-logo-dark.png" 
                  alt="Dolphy Cyber" 
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center: Streamlined Cyber Menu Links */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-mono tracking-wider">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 py-1.5 rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: Controls & Cart */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {renderThemeButton(true)}

              <button
                onClick={toggleLanguage}
                className="hidden sm:flex items-center px-2 py-1 rounded-full border border-cyan-500/30 bg-slate-900 text-cyan-300 text-[11px] font-mono"
              >
                {language.toUpperCase()}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <ShoppingBag size={13} />
                <span className="hidden xs:inline">{t('nav.cart')}</span>
                <span className="bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                  {cartCount}
                </span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/30"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
          {renderMobileDrawer()}
        </header>
        {/* Spacer for fixed floating header */}
        <div className="h-16 sm:h-20" />
      </>
    );
  }

  // ==========================================================================
  // 2. THEME: VINTAGE (French Colonial Centered Editorial Masthead)
  // ==========================================================================
  if (theme === 'vintage') {
    return (
      <header className="w-full bg-[#faf6f0] text-[#221e1a] border-b border-[#e6ded1] transition-colors shadow-2xs font-serif">
        {/* Top Heritage Gazette Ribbon */}
        <div className="border-b border-[#e6ded1] py-1.5 px-4 text-xs text-[#6e655c] flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[11px] font-sans">
            <span className="text-[#1b4d3e] font-bold">EST. 2013</span>
            <span>•</span>
            <span>THẢO ĐIỀN, SAIGON</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">HOTLINE: <strong>{brandInfo.hotline}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded border border-[#e6ded1] text-[11px] font-sans hover:border-[#1b4d3e]"
            >
              {language === 'vi' ? 'Tiếng Việt' : 'English'}
            </button>
            {renderThemeButton(true)}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded border border-[#1b4d3e] bg-[#1b4d3e] text-white text-[11px] font-sans shadow-2xs"
            >
              <ShoppingBag size={11} />
              <span>{t('nav.cart')} ({cartCount})</span>
            </button>
          </div>
        </div>

        {/* Middle: Prominent Centered Brand Masthead */}
        <div className="py-4 text-center max-w-3xl mx-auto px-4">
          <Link to="/" className="inline-block group">
            <img 
              src="/images/dolphy-logo.png" 
              alt="Dolphy Café" 
              className="h-10 sm:h-14 mx-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Bottom: Centered Symmetrical Navigation Bar with Divider Dots */}
        <nav className="border-y border-[#e6ded1] bg-[#f5efe4]/70 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-1 py-2 text-xs tracking-wide">
              {navLinks.map((link, idx) => (
                <React.Fragment key={link.path}>
                  <li>
                    <Link
                      to={link.path}
                      className={`px-3 py-1 rounded transition-colors ${
                        isActive(link.path)
                          ? 'text-[#1b4d3e] font-bold bg-[#1b4d3e]/10 italic'
                          : 'text-[#4a4239] hover:text-[#1b4d3e]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                  {idx < navLinks.length - 1 && (
                    <li className="text-[#c05621] opacity-60 select-none text-[10px]">❦</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Toggle on Vintage */}
        <div className="lg:hidden flex items-center justify-between px-4 py-2 border-t border-[#e6ded1]">
          <span className="text-xs font-serif italic text-[#1b4d3e]">Dolphy Café</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-[#e6ded1] text-[#1b4d3e]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {renderMobileDrawer()}
      </header>
    );
  }

  // ==========================================================================
  // 3. THEME: NORDIC (Ultra-Slim Architectural Mono Strip Header)
  // ==========================================================================
  if (theme === 'nordic') {
    return (
      <header className="w-full bg-white text-black border-b border-black transition-colors sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Left: Stark Minimalist Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-oswald text-xl font-bold tracking-[0.15em] uppercase">
              DOLPHY
            </span>
            <span className="text-[10px] font-mono text-zinc-400">/ 2013</span>
          </Link>

          {/* Center: Slash-separated Minimalist Links */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-oswald uppercase tracking-[0.12em]">
            {navLinks.slice(0, 7).map((link, idx) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`py-1 px-1 transition-all ${
                    isActive(link.path)
                      ? 'font-bold underline decoration-2 underline-offset-4 text-black'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
                {idx < 6 && <span className="text-zinc-300 font-mono">/</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Stark 0px Rectangular Buttons */}
          <div className="flex items-center gap-2">
            {renderThemeButton(true)}

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-black hover:bg-zinc-800 text-white text-xs font-mono uppercase tracking-wider"
            >
              <span>{t('nav.cart')} [{cartCount}]</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 border border-black text-black"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {renderMobileDrawer()}
      </header>
    );
  }

  // ==========================================================================
  // 4. THEME: SUNSET (Floating Coral Island Header with Rounded Pills)
  // ==========================================================================
  if (theme === 'sunset') {
    return (
      <header className="sticky top-2 sm:top-2.5 z-40 mx-auto max-w-7xl w-[96%] rounded-full backdrop-blur-xl bg-white/85 border border-rose-200/90 shadow-[0_12px_30px_rgba(225,29,72,0.12)] px-4 sm:px-6 py-2 transition-all">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left: Sunset Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/images/dolphy-logo.png" 
              alt="Dolphy Sunset" 
              className="h-8 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Center: Soft Rounded-Full Pill Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-oswald tracking-wide">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold shadow-md shadow-rose-500/20'
                    : 'text-zinc-700 hover:text-rose-600 hover:bg-rose-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Coral Bubble Cart & Controls */}
          <div className="flex items-center gap-2">
            {renderThemeButton()}

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white text-xs font-oswald uppercase tracking-wider font-bold shadow-md shadow-rose-500/25"
            >
              <ShoppingBag size={13} />
              <span className="hidden xs:inline">{t('nav.cart')}</span>
              <span className="bg-white text-rose-600 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {renderMobileDrawer()}
      </header>
    );
  }

  // ==========================================================================
  // 5. THEME: OCEAN (Classic 2-Tier Heritage Corporate Header)
  // ==========================================================================
  return (
    <header className="w-full bg-white dark:bg-[#1e293b] text-[#222222] dark:text-[#f1f5f9] transition-colors border-b border-gray-100 dark:border-slate-800 shadow-xs">
      {/* 1. TOP INTRO HEADER */}
      <div className="border-b border-gray-100 dark:border-slate-800/80 py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Logo Dolphy Café */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/images/dolphy-logo.png" 
              alt="Dolphy Café" 
              className="h-8 xs:h-9 sm:h-12 md:h-14 w-auto object-contain dark:hidden"
            />
            <img 
              src="/images/dolphy-logo-dark.png" 
              alt="Dolphy Café" 
              className="h-8 xs:h-9 sm:h-12 md:h-14 w-auto object-contain hidden dark:block"
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
                className={`w-44 lg:w-60 pl-3 pr-8 py-1.5 text-xs rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 focus:outline-none transition-colors ${
                  theme === 'dark' ? 'focus:border-[#FAEA28]' : 'focus:border-[#2076bd] dark:focus:border-[#3ba0e6]'
                }`}
              />
              <button className={`absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 ${
                theme === 'dark' ? 'hover:text-[#FAEA28]' : 'hover:text-[#2076bd]'
              }`}>
                <Search size={14} />
              </button>
            </div>

            {/* Hotline */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
              <PhoneCall size={13} className={theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'} />
              <span>{t('nav.hotline')}: <strong className={theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'}>{brandInfo.hotline}</strong></span>
            </div>

            {/* Language Switcher Button (VI / EN) */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors text-[11px] sm:text-xs font-bold font-oswald tracking-wider ${
                theme === 'dark' ? 'hover:border-[#FAEA28]' : 'hover:border-[#2076bd]'
              }`}
              title={language === 'vi' ? 'Chuyển sang Tiếng Anh (Switch to English)' : 'Switch to Vietnamese (Chuyển sang Tiếng Việt)'}
            >
              <Globe size={12} className={theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'} />
              <span className={language === 'vi' ? (theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]') : 'text-gray-400 dark:text-gray-500'}>VI</span>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className={language === 'en' ? (theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]') : 'text-gray-400 dark:text-gray-500'}>EN</span>
            </button>

            {/* 6-Theme Cycle Button with Hover Quick-Picker */}
            {renderThemeButton()}

            {/* Install PWA Button (Desktop) */}
            {!isStandalone && (
              <button
                onClick={() => installPwa()}
                title={language === 'vi' ? 'Cài đặt ứng dụng Dolphy Café lên thiết bị' : 'Install Dolphy App'}
                className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-oswald uppercase tracking-wider font-bold transition-all shadow-2xs ${
                  theme === 'dark'
                    ? 'bg-[#FAEA28]/10 hover:bg-[#FAEA28] text-[#FAEA28] hover:text-slate-950 border border-[#FAEA28]/30'
                    : 'bg-[#2076bd]/10 hover:bg-[#2076bd] text-[#2076bd] hover:text-white dark:bg-[#3ba0e6]/10 dark:text-[#3ba0e6] dark:hover:bg-[#2076bd] dark:hover:text-white border border-[#2076bd]/30'
                }`}
              >
                <Download size={13} />
                <span>{language === 'vi' ? 'Cài App' : 'Install'}</span>
              </button>
            )}

            {/* Admin Hub shortcut */}
            <Link
              to="/admin"
              title="Cổng Quản Trị Hệ Thống CRM / Admin"
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-slate-700 text-xs font-medium transition-colors ${
                theme === 'dark' ? 'hover:text-[#FAEA28]' : 'hover:text-[#2076bd]'
              }`}
            >
              <ShieldCheck size={14} className={theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'} />
              <span>{t('nav.admin')}</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-oswald tracking-wider transition-colors shadow-sm shrink-0 ${
                theme === 'dark'
                  ? 'bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-bold'
                  : 'bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white'
              }`}
            >
              <ShoppingBag size={14} />
              <span className="hidden xs:inline">{t('nav.cart')}</span>
              <span className={`font-bold px-1.5 py-0.2 rounded-full text-[10px] sm:text-[11px] min-w-[16px] text-center ${
                theme === 'dark' ? 'bg-slate-950 text-[#FAEA28]' : 'bg-white text-[#2076bd]'
              }`}>
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 transition-all shadow-xs active:scale-95 shrink-0 ${
                theme === 'dark' ? 'hover:text-[#FAEA28]' : 'hover:text-[#2076bd] dark:hover:text-[#3ba0e6]'
              }`}
              aria-label="Toggle menu"
              title="Menu"
            >
              {mobileMenuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
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
                      className={`py-3 px-3 flex items-center gap-1 transition-colors group ${
                        theme === 'dark'
                          ? 'text-slate-200 hover:text-[#FAEA28]'
                          : 'text-[#222222] dark:text-slate-200 hover:text-[#2076bd] dark:hover:text-[#3ba0e6]'
                      }`}
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
                        ? (theme === 'dark' ? 'text-[#FAEA28] font-bold' : 'text-[#2076bd] dark:text-[#3ba0e6] font-semibold')
                        : (theme === 'dark' ? 'text-slate-200 hover:text-[#FAEA28]' : 'text-[#222222] dark:text-slate-200 hover:text-[#2076bd] dark:hover:text-[#3ba0e6]')
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="bg-[#FAEA28] text-slate-950 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-tighter shadow-xs">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] ${
                        theme === 'dark' ? 'bg-[#FAEA28]' : 'bg-[#2076bd] dark:bg-[#3ba0e6]'
                      }`} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {renderMobileDrawer()}
    </header>
  );
};
