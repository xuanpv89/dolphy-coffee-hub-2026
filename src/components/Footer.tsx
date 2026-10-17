import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { brandInfo, branchesData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast } = useDolphy();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast('Cảm ơn bạn đã đăng ký nhận thông tin mới nhất từ Dolphy Cafe!');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#1f2022] text-[#d1d5db] border-t-2 border-[#2076bd] pt-14 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching dolphycafe.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
          
          {/* CỘT 1: THEO DÕI BẢN TIN */}
          <div className="space-y-4">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              THEO DÕI BẢN TIN
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Nhận được những thông tin mới nhất từ website và các ưu đãi đặc quyền về cà phê gói & khóa học Barista thực chiến.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-xs rounded bg-white text-[#222222] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-xs uppercase tracking-wider transition-colors font-medium flex items-center justify-center gap-1.5"
              >
                <span>ĐĂNG KÝ NGAY</span>
                <Send size={12} />
              </button>
            </form>

            <div className="pt-2 text-xs text-gray-400">
              <span className="text-[#f09c05] font-semibold">★ Top 10 Saigon Coffee:</span> Điểm hẹn cà phê quen thuộc tại Thảo Điền từ năm 2013.
            </div>
          </div>

          {/* CỘT 2: LIÊN HỆ */}
          <div className="space-y-3">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              LIÊN HỆ
            </h3>
            <div className="text-xs text-gray-300 space-y-2">
              <p className="font-bold text-white text-sm">Dolphy Café</p>
              <p className="text-gray-400">CÔNG TY TNHH CÁ HEO XANH</p>
              
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
                <span>Tuyển dụng: <a href={`mailto:${brandInfo.recruitmentEmail}`} className="text-gray-300 hover:text-white">{brandInfo.recruitmentEmail}</a></span>
              </div>

              <div className="pt-2 text-[11px] text-gray-400 border-t border-gray-700 space-y-1">
                <p>MST: <strong>0313865203</strong></p>
                <p>Trụ sở chính: 31 Thảo Điền, P. Thảo Điền, TP. Thủ Đức, TP.HCM</p>
              </div>
            </div>
          </div>

          {/* CỘT 3: HỖ TRỢ & ĐIỀU HƯỚNG */}
          <div className="space-y-3">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              HỖ TRỢ
            </h3>
            <ul className="text-xs space-y-2 text-gray-300 font-oswald tracking-wide">
              <li>
                <Link to="/" className="hover:text-[#2076bd] transition-colors">TRANG CHỦ</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2076bd] transition-colors">DOLPHY’S STORY</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#2076bd] transition-colors">CỬA HÀNG CÀ PHÊ HẠT</Link>
              </li>
              <li>
                <Link to="/academy" className="text-[#f09c05] hover:underline font-semibold flex items-center gap-1">
                  <span>DOLPHY ACADEMY (ĐÀO TẠO)</span>
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-[#2076bd] transition-colors">CHI NHÁNH CỬA HÀNG (10 ĐIỂM)</Link>
              </li>
              <li>
                <a 
                  href="https://dolphycoffee.cukcuk.vn/order-online/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#2076bd] transition-colors flex items-center gap-1"
                >
                  <span>GIAO HÀNG TRỰC TUYẾN</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <Link to="/knowledge" className="hover:text-[#2076bd] transition-colors">TIN TỨC & CẨM NANG</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#2076bd] transition-colors">TUYỂN DỤNG BARISTA</Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-[#2076bd] transition-colors">CHÍNH SÁCH & ĐIỀU KHOẢN</Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: KẾT NỐI VỚI CHÚNG TÔI */}
          <div className="space-y-4">
            <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wider border-b border-[#2076bd] pb-2 inline-block">
              KẾT NỐI VỚI CHÚNG TÔI
            </h3>
            <p className="text-xs text-gray-300">
              Theo dõi Dolphy Cafe trên mạng xã hội để cập nhật ưu đãi và hoạt động workshop mới nhất:
            </p>

            <div className="flex items-center gap-2">
              <a
                href={brandInfo.facebook || 'https://www.facebook.com/dolphycafe'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#3b5998] hover:opacity-90 text-white flex items-center justify-center text-xs font-bold transition-opacity"
                title="Facebook"
              >
                f
              </a>
              <a
                href={brandInfo.instagram || 'https://www.instagram.com/dolphycafe/'}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#c13584] hover:opacity-90 text-white flex items-center justify-center text-xs font-bold transition-opacity"
                title="Instagram"
              >
                ig
              </a>
              <a
                href="https://dolphycoffee.cukcuk.vn/order-online/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded bg-[#f09c05] hover:bg-[#2076bd] text-white text-xs font-oswald uppercase tracking-wider transition-colors"
                title="Order Online"
              >
                CukCuk Order
              </a>
            </div>

            <div className="pt-3 border-t border-gray-700">
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs border border-gray-600 transition-colors"
              >
                <ShieldCheck size={14} className="text-[#2076bd]" />
                <span>Cổng Quản Trị Hệ Thống CRM</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright matching dolphycafe.com */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © 2013 - 2026 <strong>Dolphy Cafe</strong>. Bản quyền thuộc về CÔNG TY TNHH CÁ HEO XANH.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-[11px]">
            <Link to="/policies" className="hover:text-white">Chính sách bảo mật</Link>
            <span>•</span>
            <Link to="/policies" className="hover:text-white">Quy chế đào tạo Academy</Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-[#2076bd]">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
