import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast, t, language } = useDolphy();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(language === 'vi' 
      ? 'Cảm ơn bạn đã đăng ký nhận thông tin mới nhất từ Dolphy Cafe!' 
      : 'Thank you for subscribing to Dolphy Cafe newsletter!'
    );
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#181a1b] dark:bg-[#0b1120] text-[#d1d5db] border-t-2 border-[#2076bd] pt-14 pb-8 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          
          {/* CỘT 1: THEO DÕI BẢN TIN */}
          <div className="space-y-4">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              {t('footer.newsletter_title')}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {t('footer.newsletter_desc')}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder={t('footer.newsletter_placeholder')}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-xs rounded bg-white dark:bg-slate-800 text-[#222222] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-xs uppercase tracking-wider transition-colors font-medium flex items-center justify-center gap-1.5"
              >
                <span>{t('footer.subscribe_btn')}</span>
                <Send size={12} />
              </button>
            </form>

            <div className="pt-2 text-xs text-gray-400">
              {t('footer.top10_badge')}
            </div>
          </div>

          {/* CỘT 2: LIÊN HỆ */}
          <div className="space-y-3">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              {t('footer.contact_title')}
            </h3>
            <div className="text-xs text-gray-300 space-y-2">
              <p className="font-bold text-white text-sm">Dolphy Café</p>
              <p className="text-gray-400">{t('footer.company_name')}</p>
              
              <div className="flex items-center gap-2 pt-1">
                <Phone size={13} className="text-[#2076bd]" />
                <span>Hotline: <a href="tel:0938084985" className="text-white hover:text-[#f09c05] font-medium">{brandInfo.hotline}</a></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#2076bd]" />
                <span>Email: <a href={`mailto:${brandInfo.email}`} className="text-gray-300 hover:text-white">{brandInfo.email}</a></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#2076bd]" />
                <span>{language === 'vi' ? 'Tuyển dụng' : 'Careers'}: <a href={`mailto:${brandInfo.recruitmentEmail}`} className="text-gray-300 hover:text-white">{brandInfo.recruitmentEmail}</a></span>
              </div>

              <div className="pt-2 text-[11px] text-gray-400 border-t border-gray-800 space-y-1">
                <p>{t('footer.tax_id')}</p>
                <p>{t('footer.hq_address')}</p>
              </div>
            </div>
          </div>

          {/* CỘT 3: HỖ TRỢ & ĐIỀU HƯỚNG */}
          <div className="space-y-3">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              {t('footer.support_title')}
            </h3>
            <ul className="text-xs space-y-2 text-gray-300 font-oswald tracking-wide">
              <li>
                <Link to="/" className="hover:text-[#2076bd] transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2076bd] transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#2076bd] transition-colors">{t('nav.shop')}</Link>
              </li>
              <li>
                <Link to="/academy" className="text-[#f09c05] hover:underline font-semibold flex items-center gap-1">
                  <span>{t('nav.academy')}</span>
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-[#2076bd] transition-colors">{t('nav.branches')}</Link>
              </li>
              <li>
                <a 
                  href="https://dolphycoffee.cukcuk.vn/order-online/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#2076bd] transition-colors flex items-center gap-1"
                >
                  <span>{t('nav.delivery')}</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <Link to="/knowledge" className="hover:text-[#2076bd] transition-colors">{t('nav.knowledge')}</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#2076bd] transition-colors">{t('nav.careers')}</Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-[#2076bd] transition-colors">{t('policies.title')}</Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: KẾT NỐI VỚI CHÚNG TÔI */}
          <div className="space-y-4">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              {t('footer.social_title')}
            </h3>
            <p className="text-xs text-gray-300">
              {t('footer.social_desc')}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Facebook */}
              <a
                href={brandInfo.facebook || 'https://www.facebook.com/dolphycafe'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1877F2] hover:opacity-90 text-white flex items-center justify-center transition-all shadow hover:scale-105"
                title="Facebook: @dolphycafe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={brandInfo.instagram || 'https://www.instagram.com/dolphycafe/'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all shadow hover:scale-105"
                title="Instagram: @dolphycafe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={brandInfo.tiktok || 'https://www.tiktok.com/@_.dolphycafe._'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-black hover:bg-gray-900 text-white flex items-center justify-center transition-all shadow hover:scale-105 border border-gray-700"
                title="TikTok: @_.dolphycafe._"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.68c-.01 2.27-.85 4.54-2.42 6.18-1.57 1.64-3.8 2.59-6.07 2.61-2.27.02-4.52-.89-6.12-2.49-1.61-1.6-2.52-3.85-2.5-6.12.02-2.27.93-4.52 2.53-6.12 1.6-1.6 3.86-2.5 6.13-2.48.42.01.84.05 1.25.13v4.18c-.42-.14-.87-.22-1.32-.22-1.15-.01-2.29.44-3.11 1.25-.82.81-1.28 1.95-1.27 3.1.01 1.15.47 2.29 1.29 3.1.82.81 1.96 1.26 3.11 1.25 1.15-.01 2.29-.46 3.1-1.27.81-.82 1.26-1.96 1.25-3.11V.02z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={brandInfo.youtube || 'https://www.youtube.com/@dolphycafe'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#FF0000] hover:opacity-90 text-white flex items-center justify-center transition-all shadow hover:scale-105"
                title="YouTube: Dolphy Cafe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Delivery Button */}
              <a
                href="https://dolphycoffee.cukcuk.vn/order-online/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-lg bg-[#f09c05] hover:bg-[#d98900] text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors shadow flex items-center gap-1.5"
                title={language === 'vi' ? 'Đặt giao hàng tận nơi' : 'Order online delivery'}
              >
                <span>{language === 'vi' ? 'Giao Hàng Tận Nơi' : 'Online Delivery'}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="pt-3 border-t border-gray-800">
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 dark:bg-slate-800 hover:bg-gray-700 dark:hover:bg-slate-700 text-gray-300 hover:text-white text-xs border border-gray-700 transition-colors"
              >
                <ShieldCheck size={14} className="text-[#2076bd]" />
                <span>{t('footer.admin_link')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © 2013 - 2026 <strong>Dolphy Cafe</strong>. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-[11px]">
            <Link to="/policies" className="hover:text-white">{t('footer.privacy_policy')}</Link>
            <span>•</span>
            <Link to="/policies" className="hover:text-white">{t('footer.academy_policy')}</Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-[#2076bd]">{t('footer.admin_portal')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
