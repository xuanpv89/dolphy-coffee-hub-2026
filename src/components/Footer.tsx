import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Heart, Coffee, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { brandInfo, branchesData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast } = useDolphy();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast('Cảm ơn bạn đã đăng ký nhận bản tin từ Dolphy Café!');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#1A0E07] text-[#D8CFCE] border-t border-[#D4A373]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A373] to-[#8C5329] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#1A0E07] flex items-center justify-center">
                  <span className="text-xl">🐬</span>
                </div>
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                DOLPHY <span className="text-[#D4A373] font-light">CAFÉ</span>
              </span>
            </div>

            <p className="text-sm text-[#B8ACA7] leading-relaxed max-w-md">
              DOLPHY – chú cá heo thân thiện mang đến những khoảnh khắc <strong>"Happiness in a cup"</strong> từ năm 2013. Nơi lưu giữ giá trị cà phê Ý nguyên bản hòa quyện cùng hạt cà phê thượng hạng của cao nguyên Việt Nam.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAEDCD]">
              <Award className="text-[#D4A373] shrink-0" size={18} />
              <span>Top 10 Quán Cà Phê Đáng Uống Nhất TP.HCM do tạp chí <em>Words</em> bình chọn.</span>
            </div>

            <div className="space-y-2 text-sm text-[#D8CFCE] pt-2">
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D4A373]" />
                <span>Hotline: <strong className="text-white">{brandInfo.hotline}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D4A373]" />
                <span>Liên hệ: <a href={`mailto:${brandInfo.email}`} className="hover:text-[#D4A373]">{brandInfo.email}</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D4A373]" />
                <span>Tuyển dụng: <a href={`mailto:${brandInfo.recruitmentEmail}`} className="hover:text-[#D4A373]">{brandInfo.recruitmentEmail}</a></span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={brandInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] hover:text-[#1A0E07] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={brandInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] hover:text-[#1A0E07] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={brandInfo.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] hover:text-[#1A0E07] flex items-center justify-center transition-colors text-white"
                aria-label="TikTok"
              >
                TT
              </a>
              <a
                href={brandInfo.orderOnlineUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#E76F51] text-white text-xs font-semibold hover:brightness-110 flex items-center gap-1.5"
              >
                <span>Đặt Món CukCuk</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 2: Hệ Sinh Thái Dolphy */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#D4A373] pl-2.5">
              Hệ Sinh Thái Dolphy
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/academy" className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#D4A373]" />
                  <span>Dolphy Academy 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/academy#syllabus" className="hover:text-[#D4A373] transition-colors">
                  Khóa Barista Thực Chiến (21h)
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5">
                  <Coffee size={14} className="text-[#D4A373]" />
                  <span>Cà Phê Túi Arabica & Robusta</span>
                </Link>
              </li>
              <li>
                <Link to="/shop?category=combo" className="hover:text-[#D4A373] transition-colors">
                  Combo Quà Tết Traditional
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#D4A373]" />
                  <span>Hệ Thống 10 Chi Nhánh</span>
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="hover:text-[#D4A373] transition-colors">
                  Cẩm Nang Pha Cold Brew & Phin
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#D4A373] transition-colors">
                  Cơ Hội Nghề Nghiệp Barista
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 10 Chi Nhánh Nổi Bật */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#D4A373] pl-2.5">
              10 Cửa Hàng TP.HCM
            </h3>
            <div className="space-y-2 text-xs text-[#B8ACA7]">
              <div>
                <strong className="text-[#FAEDCD] block">Quận 2 (TP. Thủ Đức):</strong>
                <p>• 28 Thảo Điền (Flagship)</p>
                <p>• 08 Thảo Điền</p>
                <p>• 03 Nguyễn Văn Hưởng</p>
                <p>• 113 Dương Văn An, An Phú</p>
                <p>• 28 Trần Lựu, An Phú</p>
              </div>
              <div className="pt-1">
                <strong className="text-[#FAEDCD] block">Quận 7 (Phú Mỹ Hưng):</strong>
                <p>• 1441 Nguyễn Văn Linh</p>
                <p>• 35 Đường Số 16, KDC Nam Viên</p>
                <p>• R3-21 Lý Long Tường</p>
                <p>• 8 Hoàng Văn Thái (VP Prudential)</p>
              </div>
              <div className="pt-1">
                <strong className="text-[#FAEDCD] block">Bình Thạnh:</strong>
                <p>• 79 Phạm Viết Chánh, P.19</p>
              </div>
              <div className="pt-2">
                <Link to="/branches" className="text-[#D4A373] font-semibold hover:underline inline-flex items-center gap-1">
                  Xem bản đồ & chỉ đường &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Bản Tin & Chính Sách */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-l-2 border-[#D4A373] pl-2.5">
              Đăng Ký Bản Tin
            </h3>
            <p className="text-xs text-[#B8ACA7]">
              Nhận thông tin ưu đãi cà phê mới nhất, lịch mở lớp Barista và các sự kiện workshop cuối tuần.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#D4A373]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4A373] text-[#1A0E07] rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center"
                  aria-label="Gửi"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>

            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-[#B8ACA7]">
              <div>
                <Link to="/policies" className="hover:text-[#D4A373]">Chính sách bảo mật thông tin</Link>
              </div>
              <div>
                <Link to="/policies#terms" className="hover:text-[#D4A373]">Điều khoản & Điều kiện sử dụng</Link>
              </div>
              <div>
                <Link to="/policies#guide" className="hover:text-[#D4A373]">Hướng dẫn đặt hàng & thanh toán</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B8ACA7] gap-4">
          <div>
            © 2013 - 2026 <strong>Dolphy Café</strong>. All rights reserved. Slogan "Happiness in a cup" is a registered trademark.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart size={12} className="text-[#E76F51] fill-current" /> for Coffee Lovers
            </span>
            <span>•</span>
            <Link to="/admin" className="text-[#D4A373] hover:underline">
              Cổng Quản Trị Hệ Thống (Admin Hub)
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
