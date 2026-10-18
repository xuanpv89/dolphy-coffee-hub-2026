import React from 'react';
import { Sparkles, Heart, Coffee, Leaf, Users, MapPin, Award, CheckCircle } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';
import { brandInfo } from '../../data/dolphyData';

export const StoryV2: React.FC = () => {
  const { language } = useDolphy();

  return (
    <div className="bg-[#FAF6F0] dark:bg-[#120E0B] text-[#2A1E17] dark:text-[#EFE7DE] min-h-screen py-14 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Editorial Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1410] text-[#D8C7B5] text-xs font-serif-cormorant tracking-widest uppercase border border-[#3A2D23]">
            <Sparkles size={13} className="text-amber-400" />
            <span>Ký Sự 13 Năm Cà Phê Mộc Sài Gòn (2013 - 2026)</span>
          </div>

          <h1 className="font-serif-cormorant text-4xl sm:text-6xl font-bold text-[#1A1410] dark:text-[#FAF6F0] leading-tight">
            “Tên tôi là Dolphy. <br />
            Tôi là chú cá heo, và tôi chỉ phục vụ cà phê mộc.”
          </h1>

          <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#6B5A4D] dark:text-[#B5A595]">
            Năm 2013, giữa làn sóng cà phê đen quánh tẩm bơ bắp, tại một góc nhỏ số 31 Thảo Điền, một chiếc máy pha Espresso Ý sáng bóng đã bắt đầu khởi động...
          </p>
        </div>

        {/* Photo Story 1: 31 Thao Dien Beginnings */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#1C1612] p-6 sm:p-10 rounded-3xl border border-[#E8DFC8] dark:border-[#2B2018] shadow-sm">
          <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 shadow-md reveal-left">
            <img
              src="/images/fanpage/store-31-thao-dien-facade.jpg"
              alt="Cửa hàng đầu tiên tại 31 Thảo Điền"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-6 space-y-4 text-left reveal-right">
            <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest">
              CHƯƠNG I • NĂM 2013
            </span>
            <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
              Khởi Đầu Từ Góc Nhỏ Thảo Điền
            </h2>
            <p className="text-xs sm:text-sm text-[#705F52] dark:text-[#A8988B] leading-relaxed">
              Thời điểm đó, rất ít người tin rằng một quán cà phê vỉa hè Thảo Điền có thể bán cà phê Espresso Ý nguyên chất mà không cần bơ thơm. Nhưng cư dân quốc tế và những vị khách bản địa sành vị đã nhanh chóng nhận ra: vị đắng sạch thanh tao, lớp crema vàng óng và hậu vị ngọt sâu của Dolphy là điều khác biệt hoàn toàn.
            </p>
            <div className="pt-2 text-xs font-mono text-[#2076bd] dark:text-[#3ba0e6]">
              • Top 10 Quán Cà Phê Đáng Uống Nhất Sài Gòn (Words & The Guide 2015 - 2017)
            </div>
          </div>
        </div>

        {/* Photo Story 2: Pet-friendly & Koi Pond Living */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#1C1612] p-6 sm:p-10 rounded-3xl border border-[#E8DFC8] dark:border-[#2B2018] shadow-sm">
          <div className="md:col-span-6 space-y-4 text-left order-2 md:order-1 reveal-left">
            <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest">
              CHƯƠNG II • NẾP SỐNG XANH
            </span>
            <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
              Ngôi Nhà Chung Pet-Friendly & Hồ Cá Koi
            </h2>
            <p className="text-xs sm:text-sm text-[#705F52] dark:text-[#A8988B] leading-relaxed">
              Tại Dolphy, chúng tôi không phân chia ranh giới. Bàn ghế gỗ đặt dưới bóng cây sa-kê, đàn cá Koi tung tăng bơi lội, và dưới chân bàn là những chú cún cưng ngoan ngoãn đón gió sáng. Mọi người gặp nhau không vội vã, chào nhau bằng nụ cười thân quen và một tách cà phê ấm nóng.
            </p>
            <blockquote className="font-serif-cormorant italic text-base text-[#2076bd] border-l-2 border-[#2076bd] pl-4">
              “Hạnh phúc đôi khi chỉ đơn giản là ngồi yên, nghe tiếng nước róc rách và ngắm người bạn bốn chân của mình vui đùa.”
            </blockquote>
          </div>

          <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 shadow-md order-1 md:order-2 reveal-right">
            <img
              src="/images/fanpage/community-expat-family-pet.jpg"
              alt="Pet Friendly Community Thao Dien"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Photo Story 3: Dolphiers Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#1C1612] p-6 sm:p-10 rounded-3xl border border-[#E8DFC8] dark:border-[#2B2018] shadow-sm">
          <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 shadow-md reveal-left">
            <img
              src="/images/fanpage/career-dolphiers-striped-uniform.jpg"
              alt="Đội ngũ Barista Dolphy áo sọc xanh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-6 space-y-4 text-left reveal-right">
            <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest">
              CHƯƠNG III • TRIẾT LÝ CON NGƯỜI
            </span>
            <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
              Nụ Cười Sau Chiếc Áo Sọc Xanh
            </h2>
            <p className="text-xs sm:text-sm text-[#705F52] dark:text-[#A8988B] leading-relaxed">
              Mỗi bạn Barista tại Dolphy (thân thương gọi là Dolphier) đều được đào tạo kỹ lưỡng từ kiến thức nông trại, độ ẩm hạt, cỡ xay micron đến kỹ thuật bọt sữa vi mô. Nhưng điều quan trọng nhất mà Dolphy dạy cho mỗi bạn trẻ: hãy pha cà phê với sự chân thành và nụ cười hạnh phúc nhất.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF6F0] dark:bg-[#150F0C] border border-[#E8DFC8] dark:border-[#2B2018] text-xs font-mono text-[#8C7A6B]">
              “Chỉ những Barista hạnh phúc mới tạo nên những tách cà phê hạnh phúc.”
            </div>
          </div>
        </div>

        {/* Official legal badge */}
        <div className="p-8 rounded-3xl bg-[#F5EFEB] dark:bg-[#18120D] border border-[#E8DFC8] dark:border-[#2B2018] text-xs text-[#705F52] dark:text-[#998777] space-y-2 text-center reveal-scale">
          <p className="font-bold uppercase tracking-wider text-[#1A1410] dark:text-white">CÔNG TY CỔ PHẦN CÀ PHÊ DOLPHY</p>
          <p>Mã số doanh nghiệp: 0313865203 do Sở KH&ĐT TP.HCM cấp ngày 16/06/2016</p>
          <p>Trụ sở chính: 28 Thảo Điền, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh</p>
        </div>

      </div>
    </div>
  );
};
