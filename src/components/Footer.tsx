import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, Award, Navigation } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast, t, language, theme } = useDolphy();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(language === 'vi' 
      ? 'Cảm ơn bạn đã đăng ký nhận thông tin mới nhất từ Dolphy Café!' 
      : 'Thank you for subscribing to Dolphy Café newsletter!'
    );
    setNewsletterEmail('');
  };

  const branchList = [
    '28 Thảo Điền, P. Thảo Điền, TP. Thủ Đức',
    '31 Thảo Điền, P. Thảo Điền, TP. Thủ Đức',
    '14 Nguyễn Đăng Giai, P. Thảo Điền, TP. Thủ Đức',
    '126 Nguyễn Hữu Cảnh, Q. Bình Thạnh',
    'SB-02 Mỹ Đức, Phú Mỹ Hưng, Quận 7',
    '08 Bà Huyện Thanh Quan, Quận 3'
  ];

  const ecoLinks = [
    { title: language === 'vi' ? 'Về Dolphy Café' : 'About Dolphy Café', path: '/about' },
    { title: language === 'vi' ? 'Học Viện Barista 2026' : 'Barista Academy 2026', path: '/academy' },
    { title: language === 'vi' ? 'Cà Phê Gói Rang Mộc' : 'Specialty Packaged Beans', path: '/shop' },
    { title: language === 'vi' ? 'Cẩm Nang Cà Phê' : 'Knowledge Hub', path: '/knowledge' },
    { title: language === 'vi' ? 'Tuyển Dụng Dolphier' : 'Careers at Dolphy', path: '/careers' },
    { title: language === 'vi' ? 'Chính Sách Đổi Trả' : 'Return & Refund Policy', path: '/policies' }
  ];

  // ==========================================================================
  // 1. THEME: ROASTERY (Cyberpunk Terminal HUD Footer)
  // ==========================================================================
  if (theme === 'roastery') {
    return (
      <footer className="bg-[#05070d] text-cyan-100/90 border-t-2 border-cyan-500/50 pt-10 pb-8 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top HUD Status Bar */}
          <div className="py-2.5 px-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3 text-[11px] text-cyan-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-bold">DOLPHY CAFÉ</span>
              <span className="text-slate-500">//</span>
              <span>HAPPINESS IN A CUP • SINCE 2013</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-pink-400 font-bold">{t('footer.top10_badge')}</span>
            </div>
          </div>

          {/* Cyber 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-cyan-500/20">
            
            {/* Cột 1 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <img src="/favicon.png" alt="Dolphy" className="theme-logo-img w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-base font-bold tracking-widest text-cyan-300 block font-oswald uppercase">DOLPHY CAFÉ</span>
                  <span className="text-[10px] text-pink-400 tracking-wider">HAPPINESS IN A CUP • SINCE 2013</span>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                {language === 'vi'
                  ? 'Chuỗi cà phê hạt mộc nguyên chất và Học viện Barista thực chiến tại TP.HCM từ năm 2013. Tự hào kết nối cộng đồng bản địa và quốc tế qua từng tách cà phê chân thành.'
                  : 'Specialty whole bean coffee chain & hands-on Barista Academy in HCMC since 2013. Proudly serving authentic espresso and connecting global communities.'}
              </p>
              <div className="space-y-1 pt-1">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                  {t('footer.social_title')}
                </span>
                <div className="flex gap-2">
                  <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-[10px] text-cyan-300 hover:border-cyan-400">
                    Facebook
                  </a>
                  <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-[10px] text-cyan-300 hover:border-cyan-400">
                    Instagram
                  </a>
                  <a href={brandInfo.tiktok} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-[10px] text-cyan-300 hover:border-cyan-400">
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px] font-oswald border-l-2 border-cyan-400 pl-2">
                10 CHI NHÁNH TP.HCM
              </span>
              <ul className="space-y-1 text-slate-300 text-[11px] font-sans">
                {branchList.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <Link to="/branches" className="inline-block text-xs text-cyan-400 hover:text-pink-400 hover:underline mt-1 font-bold">
                {language === 'vi' ? 'Xem tất cả 10 chi nhánh & bản đồ →' : 'View all 10 branches & map →'}
              </Link>
            </div>

            {/* Cột 3 */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px] font-oswald border-l-2 border-cyan-400 pl-2">
                HỆ SINH THÁI
              </span>
              <ul className="space-y-1.5 text-slate-300 text-[11px] font-sans">
                {ecoLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="hover:text-cyan-300 hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px] font-oswald border-l-2 border-cyan-400 pl-2">
                KẾT NỐI VỚI DOLPHY
              </span>
              <p className="text-slate-400 text-[11px] font-sans">
                {language === 'vi' 
                  ? 'Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:'
                  : 'Subscribe to receive 15% voucher for Barista courses and beans:'}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={language === 'vi' ? 'Nhập email của bạn...' : 'Enter your email...'}
                  className="w-full px-3 py-2 text-xs rounded bg-slate-950 border border-cyan-500/40 text-cyan-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all font-oswald flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send size={13} />
                  <span>{language === 'vi' ? 'ĐĂNG KÝ NHẬN TIN' : 'SUBSCRIBE'}</span>
                </button>
              </form>
              <div className="pt-1 text-[11px] text-slate-400">
                <p>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></p>
                <p>Email: <strong className="text-white">{brandInfo.email}</strong></p>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-2 font-mono">
            <span>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</span>
            <div className="flex gap-4">
              <Link to="/policies" className="hover:underline text-slate-400">{language === 'vi' ? 'Chính Sách' : 'Policies'}</Link>
              <Link to="/admin" className="hover:underline text-slate-400">Admin CRM</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 2. THEME: VINTAGE (French Botanical Gazette Broadside Footer)
  // ==========================================================================
  if (theme === 'vintage') {
    return (
      <footer className="bg-[#112019] text-[#faf6f0]/90 border-t-4 border-double border-[#1b4d3e] pt-14 pb-10 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#2d4d3d] text-xs">
            
            {/* Cột 1 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#faf6f0] p-1.5 flex items-center justify-center border border-[#c05621]/40 shadow-xs shrink-0">
                  <img src="/favicon.png" alt="Dolphy Café" className="theme-logo-img w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-wider text-[#faf6f0] uppercase block leading-none">
                    DOLPHY CAFÉ
                  </span>
                  <span className="text-[10px] tracking-widest text-[#c05621] font-bold uppercase block mt-1 font-sans">
                    HAPPINESS IN A CUP • SINCE 2013
                  </span>
                </div>
              </div>

              <p className="text-[#faf6f0]/80 leading-relaxed font-sans text-xs">
                {language === 'vi'
                  ? 'Chuỗi cà phê hạt mộc nguyên chất và Học viện Barista thực chiến tại TP.HCM từ năm 2013. Tự hào kết nối cộng đồng bản địa và quốc tế qua từng tách cà phê chân thành.'
                  : 'Specialty whole bean coffee chain & hands-on Barista Academy in HCMC since 2013. Proudly serving authentic espresso and connecting global communities.'}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#c05621] font-sans">
                <Award size={15} className="shrink-0 text-[#c05621]" />
                <span className="text-[11px] font-semibold text-white/95">
                  {t('footer.top10_badge')}
                </span>
              </div>

              <div className="space-y-1.5 pt-1 font-sans">
                <span className="text-[11px] uppercase tracking-wider text-[#faf6f0]/80 block font-semibold">
                  {t('footer.social_title')}
                </span>
                <div className="flex gap-2">
                  <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-[#182b22] border border-[#2d4d3d] text-[#faf6f0] hover:text-[#c05621]">Facebook</a>
                  <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-[#182b22] border border-[#2d4d3d] text-[#faf6f0] hover:text-[#c05621]">Instagram</a>
                  <a href={brandInfo.tiktok} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-[#182b22] border border-[#2d4d3d] text-[#faf6f0] hover:text-[#c05621]">TikTok</a>
                </div>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="lg:col-span-3 space-y-3 font-sans">
              <span className="font-serif text-sm uppercase tracking-wider text-[#c05621] font-bold block border-l-2 border-[#c05621] pl-2.5">
                10 CHI NHÁNH TP.HCM
              </span>
              <ul className="space-y-1.5 text-xs text-[#faf6f0]/75">
                {branchList.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <Link to="/branches" className="inline-block text-xs text-[#c05621] hover:underline font-serif font-semibold mt-2">
                {language === 'vi' ? 'Xem tất cả 10 chi nhánh & bản đồ →' : 'View all 10 branches & map →'}
              </Link>
            </div>

            {/* Cột 3 */}
            <div className="lg:col-span-2 space-y-3 font-sans">
              <span className="font-serif text-sm uppercase tracking-wider text-[#c05621] font-bold block border-l-2 border-[#c05621] pl-2.5">
                HỆ SINH THÁI
              </span>
              <ul className="space-y-2 text-xs text-[#faf6f0]/75">
                {ecoLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4 */}
            <div className="lg:col-span-3 space-y-3 font-sans">
              <span className="font-serif text-sm uppercase tracking-wider text-[#c05621] font-bold block border-l-2 border-[#c05621] pl-2.5">
                KẾT NỐI VỚI DOLPHY
              </span>
              <p className="text-xs text-[#faf6f0]/75">
                {language === 'vi' 
                  ? 'Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:'
                  : 'Subscribe to receive 15% voucher for Barista courses and beans:'}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={language === 'vi' ? 'Nhập email của bạn...' : 'Enter your email...'}
                  className="w-full px-3 py-2 text-xs rounded bg-[#182b22] border border-[#2d4d3d] text-[#faf6f0] placeholder-[#faf6f0]/40 focus:outline-none focus:border-[#c05621]"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded bg-[#c05621] hover:bg-[#a04518] text-white text-xs uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 shadow font-serif cursor-pointer"
                >
                  <Send size={13} />
                  <span>{language === 'vi' ? 'ĐĂNG KÝ NHẬN TIN' : 'SUBSCRIBE'}</span>
                </button>
              </form>
              <div className="pt-2 text-xs text-[#faf6f0]/70">
                <p>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></p>
                <p>Email: <strong className="text-white">{brandInfo.email}</strong></p>
              </div>
            </div>

          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-[#faf6f0]/60 font-sans">
            <p>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/policies" className="hover:underline">{language === 'vi' ? 'Chính Sách' : 'Policies'}</Link>
              <Link to="/admin" className="hover:underline">Admin CRM</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 3. THEME: NORDIC (Swiss Minimalist Typographic Index Footer)
  // ==========================================================================
  if (theme === 'nordic') {
    return (
      <footer className="bg-[#09090b] text-zinc-300 border-t border-zinc-800 pt-12 pb-10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-800">
            
            {/* Cột 1 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white p-1 flex items-center justify-center border border-zinc-800 shrink-0">
                  <img src="/favicon.png" alt="Dolphy Café" className="theme-logo-img w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-oswald text-lg font-bold tracking-wider text-white uppercase block leading-none">
                    DOLPHY CAFÉ
                  </span>
                  <span className="text-[10px] tracking-widest text-zinc-400 font-bold uppercase block mt-1">
                    HAPPINESS IN A CUP • SINCE 2013
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed text-xs font-sans">
                {language === 'vi'
                  ? 'Chuỗi cà phê hạt mộc nguyên chất và Học viện Barista thực chiến tại TP.HCM từ năm 2013. Tự hào kết nối cộng đồng bản địa và quốc tế qua từng tách cà phê chân thành.'
                  : 'Specialty whole bean coffee chain & hands-on Barista Academy in HCMC since 2013. Proudly serving authentic espresso and connecting global communities.'}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-700 text-xs text-white">
                <Award size={15} className="shrink-0 text-white" />
                <span className="text-[11px] font-semibold">
                  {t('footer.top10_badge')}
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">
                  {t('footer.social_title')}
                </span>
                <div className="flex gap-2">
                  <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="px-3 py-1 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white">Facebook</a>
                  <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="px-3 py-1 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white">Instagram</a>
                  <a href={brandInfo.tiktok} target="_blank" rel="noreferrer" className="px-3 py-1 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white">TikTok</a>
                </div>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-widest text-white font-bold block border-l-2 border-white pl-2">
                10 CHI NHÁNH TP.HCM
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-sans">
                {branchList.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <Link to="/branches" className="inline-block text-xs text-[#ff3b00] hover:underline mt-2">
                {language === 'vi' ? 'Xem tất cả 10 chi nhánh & bản đồ →' : 'View all 10 branches & map →'}
              </Link>
            </div>

            {/* Cột 3 */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-widest text-white font-bold block border-l-2 border-white pl-2">
                HỆ SINH THÁI
              </span>
              <ul className="space-y-2 text-xs text-zinc-400 font-sans">
                {ecoLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-widest text-white font-bold block border-l-2 border-white pl-2">
                KẾT NỐI VỚI DOLPHY
              </span>
              <p className="text-xs text-zinc-400 font-sans">
                {language === 'vi' 
                  ? 'Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:'
                  : 'Subscribe to receive 15% voucher for Barista courses and beans:'}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={language === 'vi' ? 'Nhập email của bạn...' : 'Enter your email...'}
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono rounded-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-white hover:bg-[#ff3b00] text-black hover:text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 rounded-none cursor-pointer transition-colors"
                >
                  <Send size={13} />
                  <span>{language === 'vi' ? 'ĐĂNG KÝ NHẬN TIN' : 'SUBSCRIBE'}</span>
                </button>
              </form>
              <div className="pt-2 text-xs text-zinc-400">
                <p>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></p>
                <p>Email: <strong className="text-white">{brandInfo.email}</strong></p>
              </div>
            </div>

          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-mono">
            <p>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/policies" className="hover:underline">{language === 'vi' ? 'Chính Sách' : 'Policies'}</Link>
              <Link to="/admin" className="hover:underline">Admin CRM</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 4. THEME: SUNSET (Tropical Wave Horizon Footer with Rounded Pebble Curves)
  // ==========================================================================
  if (theme === 'sunset') {
    return (
      <footer className="bg-[#221215] text-[#fff1ec]/90 rounded-t-[36px] sm:rounded-t-[48px] border-t-4 border-rose-500 pt-14 pb-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-rose-500/20 text-xs">
            
            {/* Cột 1 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center border-2 border-rose-400 shadow-lg shrink-0">
                  <img src="/favicon.png" alt="Dolphy Café" className="theme-logo-img w-full h-full object-contain rounded-xl" />
                </div>
                <div>
                  <span className="font-oswald text-xl font-bold tracking-wider text-white uppercase block leading-none">
                    DOLPHY CAFÉ
                  </span>
                  <span className="text-[10px] tracking-widest text-rose-300 font-bold uppercase block mt-1 font-oswald">
                    HAPPINESS IN A CUP • SINCE 2013
                  </span>
                </div>
              </div>

              <p className="text-xs text-rose-100/80 leading-relaxed">
                {language === 'vi'
                  ? 'Chuỗi cà phê hạt mộc nguyên chất và Học viện Barista thực chiến tại TP.HCM từ năm 2013. Tự hào kết nối cộng đồng bản địa và quốc tế qua từng tách cà phê chân thành.'
                  : 'Specialty whole bean coffee chain & hands-on Barista Academy in HCMC since 2013. Proudly serving authentic espresso and connecting global communities.'}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-rose-300">
                <Award size={15} className="shrink-0 text-rose-300" />
                <span className="font-oswald text-[11px] font-semibold tracking-wide text-white/95">
                  {t('footer.top10_badge')}
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-oswald uppercase tracking-wider text-rose-200 block font-semibold">
                  {t('footer.social_title')}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-900/60 border border-rose-500/30 text-white flex items-center justify-center text-xs font-bold hover:bg-rose-600 transition-colors">FB</a>
                  <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-900/60 border border-rose-500/30 text-white flex items-center justify-center text-xs font-bold hover:bg-rose-600 transition-colors">IG</a>
                  <a href={brandInfo.tiktok} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-900/60 border border-rose-500/30 text-white flex items-center justify-center text-xs font-bold hover:bg-rose-600 transition-colors">TT</a>
                </div>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="font-oswald text-sm uppercase tracking-wider text-rose-300 font-bold block border-l-2 border-rose-400 pl-2.5">
                10 CHI NHÁNH TP.HCM
              </span>
              <ul className="space-y-1.5 text-xs text-rose-100/75">
                {branchList.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <Link to="/branches" className="inline-block text-xs text-rose-300 hover:underline font-oswald font-semibold mt-2">
                {language === 'vi' ? 'Xem tất cả 10 chi nhánh & bản đồ →' : 'View all 10 branches & map →'}
              </Link>
            </div>

            {/* Cột 3 */}
            <div className="lg:col-span-2 space-y-3">
              <span className="font-oswald text-sm uppercase tracking-wider text-rose-300 font-bold block border-l-2 border-rose-400 pl-2.5">
                HỆ SINH THÁI
              </span>
              <ul className="space-y-2 text-xs text-rose-100/75">
                {ecoLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4 */}
            <div className="lg:col-span-3 space-y-3">
              <span className="font-oswald text-sm uppercase tracking-wider text-rose-300 font-bold block border-l-2 border-rose-400 pl-2.5">
                KẾT NỐI VỚI DOLPHY
              </span>
              <p className="text-xs text-rose-100/75">
                {language === 'vi' 
                  ? 'Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:'
                  : 'Subscribe to receive 15% voucher for Barista courses and beans:'}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={language === 'vi' ? 'Nhập email của bạn...' : 'Enter your email...'}
                  className="w-full px-4 py-2 text-xs rounded-full bg-rose-950/80 border border-rose-500/40 text-white placeholder-rose-300/50 focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white font-oswald text-xs uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/25 cursor-pointer"
                >
                  <Send size={13} />
                  <span>{language === 'vi' ? 'ĐĂNG KÝ NHẬN TIN' : 'SUBSCRIBE'}</span>
                </button>
              </form>
              <div className="pt-2 text-xs text-rose-200/70">
                <p>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></p>
                <p>Email: <strong className="text-white">{brandInfo.email}</strong></p>
              </div>
            </div>

          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-rose-200/60 font-sans">
            <p>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/policies" className="hover:underline">{language === 'vi' ? 'Chính Sách' : 'Policies'}</Link>
              <Link to="/admin" className="hover:underline">Admin CRM</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 5. THEME: OCEAN & CLASSIC DARK (Classic Corporate 4-Column Footer)
  // ==========================================================================
  const isDarkTheme = theme === 'dark';
  return (
    <footer className={`bg-[#0f172a] text-white/90 border-t-2 pt-14 pb-8 font-sans transition-colors ${
      isDarkTheme ? 'border-[#FAEA28]' : 'border-[#2076bd]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* CỘT 1: NHẬN DIỆN THƯƠNG HIỆU & MẠNG XÃ HỘI (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center border-2 border-[#FAEA28] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                <img src="/favicon.png" alt="Dolphy Café" className="theme-logo-img w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <span className="font-oswald text-xl font-bold tracking-wider text-white uppercase block leading-none group-hover:text-[#FAEA28] transition-colors">
                  DOLPHY CAFÉ
                </span>
                <span className="text-[10px] tracking-widest text-[#FAEA28] font-bold uppercase block mt-1 font-oswald">
                  HAPPINESS IN A CUP • SINCE 2013
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/80 leading-relaxed">
              {language === 'vi'
                ? 'Chuỗi cà phê hạt mộc nguyên chất và Học viện Barista thực chiến tại TP.HCM từ năm 2013. Tự hào kết nối cộng đồng bản địa và quốc tế qua từng tách cà phê chân thành.'
                : 'Specialty whole bean coffee chain & hands-on Barista Academy in HCMC since 2013. Proudly serving authentic espresso and connecting global communities.'}
            </p>

            {/* Top 10 Award Highlight */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#FAEA28]">
              <Award size={15} className="shrink-0 text-[#FAEA28]" />
              <span className="font-oswald text-[11px] font-semibold tracking-wide text-white/95">
                {t('footer.top10_badge')}
              </span>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-oswald uppercase tracking-wider text-white/80 block font-semibold">
                {t('footer.social_title')}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={brandInfo.facebook || 'https://www.facebook.com/dolphycafe'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#1877F2] hover:opacity-90 text-white flex items-center justify-center transition-all shadow hover:scale-105"
                  title="Facebook"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a
                  href={brandInfo.instagram || 'https://www.instagram.com/dolphycafe/'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all shadow hover:scale-105"
                  title="Instagram"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href={brandInfo.tiktok || 'https://www.tiktok.com/@_.dolphycafe._'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-black hover:bg-slate-900 text-white flex items-center justify-center transition-all shadow hover:scale-105 border border-white/20"
                  title="TikTok"
                >
                  <span className="text-xs font-bold">TT</span>
                </a>
              </div>
            </div>
          </div>

          {/* CỘT 2: HỆ THỐNG 10 CHI NHÁNH (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className={`font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 pl-2.5 ${
              isDarkTheme ? 'border-[#FAEA28]' : 'border-[#2076bd]'
            }`}>
              10 CHI NHÁNH TP.HCM
            </span>
            <ul className="space-y-1.5 text-xs text-white/75">
              {branchList.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <Link to="/branches" className="inline-block text-xs text-[#FAEA28] hover:underline font-oswald font-semibold mt-2">
              {language === 'vi' ? 'Xem tất cả 10 chi nhánh & bản đồ →' : 'View all 10 branches & map →'}
            </Link>
          </div>

          {/* CỘT 3: HỌC VIỆN & CỬA HÀNG (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className={`font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 pl-2.5 ${
              isDarkTheme ? 'border-[#FAEA28]' : 'border-[#2076bd]'
            }`}>
              HỆ SINH THÁI
            </span>
            <ul className="space-y-2 text-xs text-white/75">
              {ecoLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: ĐĂNG KÝ BẢN TIN & HOTLINE (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className={`font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 pl-2.5 ${
              isDarkTheme ? 'border-[#FAEA28]' : 'border-[#2076bd]'
            }`}>
              KẾT NỐI VỚI DOLPHY
            </span>
            <p className="text-xs text-white/75">
              {language === 'vi' 
                ? 'Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:'
                : 'Subscribe to receive 15% voucher for Barista courses and beans:'}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={language === 'vi' ? 'Nhập email của bạn...' : 'Enter your email...'}
                className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FAEA28]"
              />
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg font-oswald text-xs uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                  isDarkTheme
                    ? 'bg-[#FAEA28] text-slate-950 hover:bg-amber-300'
                    : 'bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white'
                }`}
              >
                <Send size={13} />
                <span>{language === 'vi' ? 'ĐĂNG KÝ NHẬN TIN' : 'SUBSCRIBE'}</span>
              </button>
            </form>
            <div className="pt-2 text-xs text-white/70">
              <p>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></p>
              <p>Email: <strong className="text-white">{brandInfo.email}</strong></p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-wrap items-center justify-between text-xs text-white/60">
          <p>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/policies" className="hover:underline">{language === 'vi' ? 'Chính Sách' : 'Policies'}</Link>
            <Link to="/admin" className="hover:underline">Admin CRM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
