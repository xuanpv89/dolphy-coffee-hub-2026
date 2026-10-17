import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp, Instagram, Facebook, ArrowLeft } from 'lucide-react';
import { brandInfo, branchesData } from '../../data/dolphyData';
import { useDolphy } from '../../context/DolphyContext';

export const FooterV2: React.FC = () => {
  const { language } = useDolphy();

  return (
    <footer className="bg-[#140F0C] text-[#C9BAA9] border-t border-[#2B2018] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Brand Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[#2B2018]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="Dolphy" className="w-10 h-10 object-contain" />
              <h3 className="font-serif-cormorant text-3xl font-bold tracking-wider text-[#F2EAE0]">
                DOLPHY CAFÉ
              </h3>
            </div>
            <p className="font-serif-cormorant italic text-base text-[#9A8979] max-w-xl">
              “{language === 'vi' 
                ? 'Chỉ những Barista hạnh phúc mới tạo nên những tách cà phê hạnh phúc. Cà phê rang mộc chuẩn vị bên hiên nhà Thảo Điền từ 2013.' 
                : 'Only happy baristas can brew happy cups. Pure specialty coffee cherished in Thao Dien since 2013.'}”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#2076bd] hover:bg-[#165b94] text-white font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-md"
            >
              {language === 'vi' ? 'Giao Hàng Tận Nơi ↗' : 'Order Online ↗'}
            </a>

            <Link
              to="/"
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#EAE2D5] font-oswald text-xs uppercase tracking-wider font-semibold transition-all border border-white/15 flex items-center gap-1.5"
            >
              <ArrowLeft size={13} />
              <span>{language === 'vi' ? 'Xem Bản Tiêu Chuẩn (V1)' : 'Switch to Classic (V1)'}</span>
            </Link>
          </div>
        </div>

        {/* 10 Branches by Neighborhood */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#c88232]" />
            <h4 className="font-oswald text-xs uppercase tracking-widest text-amber-400 font-bold">
              {language === 'vi' ? 'HỆ THỐNG 10 KHÔNG GIAN XANH DOLPHY CAFÉ TẠI TP.HCM' : '10 GREEN DOLPHY CAFÉ SPACES IN SAIGON'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1C1612] border border-[#2B2018] space-y-2">
              <span className="font-oswald font-bold uppercase text-[#2076bd] text-sm block">Cụm Thảo Điền (TP. Thủ Đức)</span>
              <p className="text-[#A59585]">• 28 Thảo Điền (Quán Flagship & Hồ Koi)</p>
              <p className="text-[#A59585]">• 08 Thảo Điền (Góc phố xanh Pet-friendly)</p>
              <p className="text-[#A59585]">• 03 Nguyễn Văn Hưởng (View sông Sài Gòn)</p>
              <p className="text-[#A59585]">• 113 Dương Văn An (Không gian gia đình)</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1612] border border-[#2B2018] space-y-2">
              <span className="font-oswald font-bold uppercase text-amber-400 text-sm block">Cụm An Phú & Trần Lựu</span>
              <p className="text-[#A59585]">• 28 Trần Lựu (Học Viện Barista Atelier)</p>
              <p className="text-[#A59585]">• Quầy bar thực chiến Nuova Simonelli</p>
              <p className="text-[#A59585]">• Sân đấu Junior Barista Championship</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1612] border border-[#2B2018] space-y-2">
              <span className="font-oswald font-bold uppercase text-[#3ba0e6] text-sm block">Cụm Phú Mỹ Hưng (Quận 7)</span>
              <p className="text-[#A59585]">• 1441 Nguyễn Văn Linh</p>
              <p className="text-[#A59585]">• 08 Hoàng Văn Thái (Prudential Building)</p>
              <p className="text-[#A59585]">• Lô S50-1 Nam Viên, Đặng Đức Thuật</p>
              <p className="text-[#A59585]">• R4-41 Lý Long Tường, Nam Quang 1</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1612] border border-[#2B2018] space-y-2">
              <span className="font-oswald font-bold uppercase text-emerald-400 text-sm block">Cụm Bình Thạnh & Trung Tâm</span>
              <p className="text-[#A59585]">• 79 Phạm Viết Chánh, P.19, Bình Thạnh</p>
              <p className="text-[#A59585]">• Phố ẩm thực Nhật Bản & Quốc Tế</p>
              <p className="text-[#A59585]">• Giờ mở cửa: 06:30 - 22:30 mỗi ngày</p>
            </div>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="pt-8 border-t border-[#2B2018] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2013 - 2026 Dolphy Café. MST: 0313865203</span>
            <span>•</span>
            <span>Hotline: <a href="tel:0938084985" className="text-amber-400 hover:underline">{brandInfo.hotline}</a></span>
            <span>•</span>
            <span>Email: <a href={`mailto:${brandInfo.email}`} className="text-amber-400 hover:underline">{brandInfo.email}</a></span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Facebook">
              <Facebook size={16} />
            </a>
            <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
