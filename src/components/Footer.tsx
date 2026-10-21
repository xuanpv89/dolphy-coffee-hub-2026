import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, ExternalLink, ShieldCheck, MapPin, Clock, Award, Terminal, Compass, Sparkles } from 'lucide-react';
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
              <span className="font-bold">[NODE: SAIGON_01]</span>
              <span className="text-slate-500">//</span>
              <span>10 STATIONS ACTIVE</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>SPECIALTY ROAST: 100% PURE</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">SECURITY: ENCRYPTED 2026</span>
            </div>
          </div>

          {/* Cyber Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-cyan-500/20">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <img src="/favicon.png" alt="Dolphy" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-base font-bold tracking-widest text-cyan-300 block">DOLPHY ROASTERY HUD</span>
                  <span className="text-[10px] text-amber-400 tracking-wider">HAPPINESS IN A CUP // SINCE 2013</span>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Hệ sinh thái cà phê đặc sản & đào tạo Barista thế hệ mới. Kiểm soát nhiệt độ rang mộc và chiết xuất chuẩn quốc tế.
              </p>
              <div className="flex gap-2">
                {['FB', 'IG', 'TT', 'YT'].map((s) => (
                  <span key={s} className="px-2 py-1 rounded bg-slate-900 border border-cyan-500/30 text-[10px] text-cyan-300 hover:border-cyan-400 cursor-pointer">
                    [{s}]
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px]">// DIRECTORY MATRIX</span>
              <ul className="space-y-1.5 text-slate-300">
                <li><Link to="/about" className="hover:text-cyan-300 hover:underline">01. Về Dolphy Café (13 Năm Di Sản)</Link></li>
                <li><Link to="/academy" className="hover:text-cyan-300 hover:underline">02. Học Viện Barista Thực Chiến 2026</Link></li>
                <li><Link to="/shop" className="hover:text-cyan-300 hover:underline">03. Cửa Hàng Hạt Cà Phê Mộc Rang Xay</Link></li>
                <li><Link to="/branches" className="hover:text-cyan-300 hover:underline">04. Hệ Thống 10 Trạm Cà Phê Sài Gòn</Link></li>
                <li><Link to="/careers" className="hover:text-cyan-300 hover:underline">05. Tuyển Dụng Nhân Sự Barista 2026</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px]">// TELEMETRY DISPATCH</span>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2 text-xs rounded bg-slate-950 border border-cyan-500/40 text-cyan-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                >
                  EXECUTE DISPATCH
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-2">
            <span>© 2013 - 2026 DOLPHY CAFÉ // ALL RIGHTS RESERVED</span>
            <span>NODE 01: 28 THAO DIEN, THU DUC CITY</span>
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 2. THEME: VINTAGE (French Colonial Gazette Broadside Footer)
  // ==========================================================================
  if (theme === 'vintage') {
    return (
      <footer className="bg-[#112019] text-[#faf6f0]/90 border-t-4 border-double border-[#1b4d3e] pt-14 pb-10 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Centered Ornate Quote Ribbon */}
          <div className="text-center max-w-2xl mx-auto pb-6 border-b border-[#2d4d3d]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c05621] mb-2 font-sans font-bold">
              ❦ Di Sản Cà Phê Sài Gòn • Thành Lập 2013 ❦
            </p>
            <blockquote className="text-lg sm:text-xl italic text-[#faf6f0] leading-relaxed">
              "Hạnh phúc trong từng tách cà phê chân thành — Nốt hương hoài niệm giữa lòng Thảo Điền."
            </blockquote>
          </div>

          {/* 3 Stately Broadsheet Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#2d4d3d] text-xs">
            <div className="space-y-3">
              <span className="font-serif italic text-base text-[#c05621] block font-bold">Maison de Dolphy</span>
              <p className="text-[#faf6f0]/75 leading-relaxed font-sans text-xs">
                Kế thừa 13 năm di sản rang mộc Thảo Điền. Chúng tôi gìn giữ tình yêu thuần khiết với hạt Arabica Cầu Đất và Robusta Honey Lâm Đồng.
              </p>
              <p className="text-xs font-sans text-[#faf6f0]/60">
                Trụ sở: 28 Thảo Điền, TP. Thủ Đức, TP.HCM
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif italic text-base text-[#c05621] block font-bold">Điểm Hẹn & Giảng Đường</span>
              <ul className="space-y-2 font-sans text-xs text-[#faf6f0]/80">
                <li><Link to="/branches" className="hover:text-[#c05621]">✦ 10 Không gian cà phê sân vườn Thảo Điền</Link></li>
                <li><Link to="/academy" className="hover:text-[#c05621]">✦ Học viện đào tạo Barista thực chiến</Link></li>
                <li><Link to="/shop" className="hover:text-[#c05621]">✦ Tuyển tập hạt rang mộc đóng gói thủ công</Link></li>
                <li><Link to="/knowledge" className="hover:text-[#c05621]">✦ Cẩm nang nghệ thuật pha chế & nhật ký</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-serif italic text-base text-[#c05621] block font-bold">Thư Ký & Liên Lạc</span>
              <p className="text-xs font-sans text-[#faf6f0]/75">
                Nhận tin tức ưu đãi và mùa hạt mới vào mỗi sớm mai:
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Thư điện tử của bạn..."
                  className="w-full px-3 py-2 text-xs rounded bg-[#182b22] border border-[#2d4d3d] text-[#faf6f0] focus:outline-none focus:border-[#c05621] font-sans"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#c05621] hover:bg-[#a04518] text-white text-xs font-sans font-bold rounded transition-colors shrink-0"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>

          <div className="text-center text-xs font-sans text-[#faf6f0]/50 pt-2">
            © 2013 - 2026 Dolphy Café & Botanical Courtyard • Bản quyền thuộc về Dolphy Thảo Điền.
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
      <footer className="bg-[#09090b] text-zinc-300 border-t border-zinc-800 pt-12 pb-10 font-oswald text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top Huge Stark Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-zinc-800 pb-6">
            <span className="text-3xl sm:text-4xl font-bold tracking-[0.15em] text-white uppercase">
              DOLPHY / ARCHIVE
            </span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              EDITION 2013-2026 // HCMC
            </span>
          </div>

          {/* 4 Stark Tabular Columns with 0px Radius */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-zinc-800">
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 tracking-widest block uppercase">[01 / DIRECTORY]</span>
              <ul className="space-y-1 text-sm tracking-wide">
                <li><Link to="/" className="hover:text-white hover:underline">OVERVIEW</Link></li>
                <li><Link to="/about" className="hover:text-white hover:underline">HERITAGE</Link></li>
                <li><Link to="/shop" className="hover:text-white hover:underline">ROASTERY</Link></li>
                <li><Link to="/academy" className="hover:text-white hover:underline">ACADEMY</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 tracking-widest block uppercase">[02 / 10 STATIONS]</span>
              <ul className="space-y-1 text-sm tracking-wide text-zinc-400">
                <li>28 THAO DIEN</li>
                <li>31 THAO DIEN</li>
                <li>NGUYEN DANG GIAI</li>
                <li>PHU MY HUNG</li>
                <li>BA HUYEN THANH QUAN</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 tracking-widest block uppercase">[03 / PROTOCOL]</span>
              <ul className="space-y-1 text-sm tracking-wide">
                <li><Link to="/policies" className="hover:text-white hover:underline">RETURNS</Link></li>
                <li><Link to="/policies" className="hover:text-white hover:underline">PRIVACY</Link></li>
                <li><Link to="/careers" className="hover:text-white hover:underline">DISPATCH</Link></li>
                <li><Link to="/admin" className="hover:text-white hover:underline">ADMIN CONSOLE</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 tracking-widest block uppercase">[04 / NEWSLETTER]</span>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs hover:bg-zinc-200 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>© DOLPHY COFFEE HUB 2026. BRUTALIST MINIMALIST ENGINE.</span>
            <span>HOTLINE: 0938 084 985</span>
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
      <footer className="bg-[#221215] text-[#fff1ec]/90 rounded-t-[36px] sm:rounded-t-[48px] border-t-4 border-rose-500/80 pt-12 pb-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Warm Greeting Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-950/60 to-orange-950/60 border border-rose-500/30 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-oswald text-xl font-bold uppercase tracking-wider text-rose-300 block">
                🌅 Hoàng Hôn Sài Gòn • Hạnh Phúc Trong Từng Tách Cà Phê
              </span>
              <p className="text-xs text-rose-100/80 mt-1 max-w-xl">
                Cảm ơn bạn đã đồng hành cùng Dolphy qua hơn 13 mùa hoàng hôn rực rỡ bên bờ sông Sài Gòn và khu phố Thảo Điền.
              </p>
            </div>
            <Link
              to="/branches"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald text-xs uppercase tracking-wider font-bold shadow-lg shadow-rose-500/30 hover:scale-105 transition-all"
            >
              Xem 10 Quán Hoàng Hôn
            </Link>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-rose-500/20 text-xs">
            <div className="space-y-3">
              <span className="font-oswald text-sm font-bold text-rose-400 uppercase tracking-wider block">Dolphy Sunset Hub</span>
              <p className="text-xs text-rose-100/75 leading-relaxed">
                Chuỗi cà phê mộc nguyên bản và Học viện Barista thực chiến. Nơi bạn tìm thấy sự bình yên sau những giờ làm việc căng thẳng.
              </p>
              <p className="text-xs text-rose-300 font-semibold">Hotline: 0938 084 985</p>
            </div>

            <div className="space-y-3">
              <span className="font-oswald text-sm font-bold text-rose-400 uppercase tracking-wider block">Khám Phá Nhanh</span>
              <ul className="space-y-2 text-rose-100/80">
                <li><Link to="/about" className="hover:text-rose-300 transition-colors">✦ Câu Chuyện 13 Năm Dolphy</Link></li>
                <li><Link to="/academy" className="hover:text-rose-300 transition-colors">✦ Khóa Học Barista 6 Buổi Thực Chiến</Link></li>
                <li><Link to="/shop" className="hover:text-rose-300 transition-colors">✦ Cà Phê Gói Robusta Honey & Arabica</Link></li>
                <li><Link to="/careers" className="hover:text-rose-300 transition-colors">✦ Gia Nhập Đội Ngũ Dolphier</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="font-oswald text-sm font-bold text-rose-400 uppercase tracking-wider block">Bản Tin Chiều Tà</span>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full px-4 py-2.5 text-xs rounded-full bg-rose-950/80 border border-rose-500/40 text-white placeholder-rose-300/50 focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-oswald text-xs uppercase tracking-wider font-bold shadow-md shadow-rose-500/25 transition-all"
                >
                  Đăng Ký Nhận Quà Hoàng Hôn
                </button>
              </form>
            </div>
          </div>

          <div className="text-center text-xs text-rose-300/60 pt-2">
            © 2013 - 2026 Dolphy Café Sunset Edition • Tình Yêu Cà Phê Mộc Sài Gòn.
          </div>
        </div>
      </footer>
    );
  }

  // ==========================================================================
  // 5. THEME: OCEAN (Classic Corporate 4-Column Footer)
  // ==========================================================================
  return (
    <footer className="bg-[#0f172a] text-white/90 border-t-2 border-[#2076bd] pt-14 pb-8 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* CỘT 1: NHẬN DIỆN THƯƠNG HIỆU & MẠNG XÃ HỘI (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center border-2 border-[#FAEA28] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                <img src="/favicon.png" alt="Dolphy Café" className="w-full h-full object-contain rounded-lg" />
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
            <span className="font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 border-[#2076bd] pl-2.5">
              10 CHI NHÁNH TP.HCM
            </span>
            <ul className="space-y-1.5 text-xs text-white/75">
              <li>• 28 Thảo Điền, P. Thảo Điền, TP. Thủ Đức</li>
              <li>• 31 Thảo Điền, P. Thảo Điền, TP. Thủ Đức</li>
              <li>• 14 Nguyễn Đăng Giai, P. Thảo Điền, TP. Thủ Đức</li>
              <li>• 126 Nguyễn Hữu Cảnh, Q. Bình Thạnh</li>
              <li>• SB-02 Mỹ Đức, Phú Mỹ Hưng, Quận 7</li>
              <li>• 08 Bà Huyện Thanh Quan, Quận 3</li>
            </ul>
            <Link to="/branches" className="inline-block text-xs text-[#FAEA28] hover:underline font-oswald font-semibold mt-2">
              Xem tất cả 10 chi nhánh & bản đồ →
            </Link>
          </div>

          {/* CỘT 3: HỌC VIỆN & CỬA HÀNG (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 border-[#2076bd] pl-2.5">
              HỆ SINH THÁI
            </span>
            <ul className="space-y-2 text-xs text-white/75">
              <li><Link to="/about" className="hover:text-white">Về Dolphy Café</Link></li>
              <li><Link to="/academy" className="hover:text-white">Học Viện Barista 2026</Link></li>
              <li><Link to="/shop" className="hover:text-white">Cà Phê Gói Rang Mộc</Link></li>
              <li><Link to="/knowledge" className="hover:text-white">Cẩm Nang Cà Phê</Link></li>
              <li><Link to="/careers" className="hover:text-white">Tuyển Dụng Dolphier</Link></li>
              <li><Link to="/policies" className="hover:text-white">Chính Sách Đổi Trả</Link></li>
            </ul>
          </div>

          {/* CỘT 4: ĐĂNG KÝ BẢN TIN & HOTLINE (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-oswald text-sm uppercase tracking-wider text-white font-bold block border-l-2 border-[#2076bd] pl-2.5">
              KẾT NỐI VỚI DOLPHY
            </span>
            <p className="text-xs text-white/75">
              Đăng ký để nhận voucher ưu đãi 15% khóa học Barista & cà phê hạt:
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FAEA28]"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 shadow"
              >
                <Send size={13} />
                <span>ĐĂNG KÝ NHẬN TIN</span>
              </button>
            </form>
            <div className="pt-2 text-xs text-white/70">
              <p>Hotline: <strong className="text-white">0938 084 985</strong></p>
              <p>Email: <strong className="text-white">contact@dolphycafe.com</strong></p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-wrap items-center justify-between text-xs text-white/60">
          <p>© 2013 - 2026 Dolphy Café & Coffee Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/policies" className="hover:underline">Chính Sách</Link>
            <Link to="/admin" className="hover:underline">Admin CRM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
