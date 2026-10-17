import React from 'react';
import { Award, Heart, ShieldCheck, Sparkles, MapPin, Coffee, CheckCircle2, Phone, Mail } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 pb-20 bg-white text-[#222222]">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            HÀNH TRÌNH HƠN 13 NĂM ĐỒNG HÀNH (2013 - 2026)
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            DOLPHY’S STORY - CÂU CHUYỆN THƯƠNG HIỆU
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto italic">
            "My name’s DOLPHY. I’m a dolphin. I only serve pure coffee."
          </p>
        </div>
      </section>

      {/* 2. Main Story & Authentic Images */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd]">
              Khởi Đầu Từ Niềm Đam Mê Cà Phê Thuần Túy
            </h2>
            <p>
              Được thành lập từ <strong>20/10/2013</strong>, DOLPHY không chỉ là một cửa hàng cafe luôn hướng tới chất lượng cafe thơm ngon mà DOLPHY còn được tạo ra với mong muốn đem lại trải nghiệm thoải mái, những khoảnh khắc <em>“happiness in a cup”</em> cho mọi người khi bắt đầu ngày mới.
            </p>
            <p>
              DOLPHY được đặt tên dựa trên ý tưởng “danh từ hóa” từ tiếng Anh <strong>Dolphin (Cá heo)</strong>. Với tên gọi này, chúng tôi mong muốn đội ngũ Barista sẽ luôn là những người bạn gần gũi, thân thiện, thông minh, nhanh nhẹn và đoàn kết như những chú cá heo vốn luôn được mọi người yêu mến.
            </p>
            <p>
              Thế mạnh của DOLPHY là làm nên những tách cafe Ý thơm ngon, đưa chúng về với đúng giá trị nguyên bản, dựa trên nguồn nguyên liệu là các hạt cafe chất lượng cao nhất từ các cao nguyên của Việt Nam.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="/images/image5.jpg"
              alt="Dolphy Thảo Điền Corner"
              className="rounded-lg shadow border border-gray-200 h-60 w-full object-cover"
            />
            <img
              src="/images/image4.jpg"
              alt="Dolphy Barista Pouring Coffee"
              className="rounded-lg shadow border border-gray-200 h-60 w-full object-cover mt-6"
            />
          </div>
        </div>

        {/* Magazine Award Highlight */}
        <div className="p-8 rounded-xl bg-[#f0f8ff] border border-blue-200 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-[#f09c05] text-white flex items-center justify-center shrink-0 shadow">
            <Award size={36} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-oswald text-xl font-bold uppercase text-[#2076bd]">
              Top 10 Quán Cà Phê Đáng Uống Nhất TP.HCM
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              DOLPHY thực sự tự hào khi là một trong những thương hiệu cafe nổi tiếng với cộng đồng người nước ngoài sống tại TP.HCM nhiều năm liền. Đã từng được vinh danh là <strong>Top 10 quán cafe đáng uống nhất TP.HCM do tạp chí ẩm thực – du lịch Words bình chọn các năm 2015, 2016, 2017</strong>.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2076bd] flex items-center justify-center text-2xl font-bold">
              ★
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd]">
              Sứ Mệnh (Mission)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Dựa trên lý tưởng về sứ mệnh <strong>“Happiness in a cup”</strong>, ở DOLPHY chúng tôi tin rằng <em>chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc</em>. 
            </p>
            <p className="text-xs text-gray-500">
              Vì vậy, DOLPHY tập trung vào sự chăm sóc và phát triển các Barista, xây dựng chính sách lương công bằng, minh bạch, có sự thăng tiến rõ ràng. Sứ mệnh của DOLPHIERs chúng ta là tạo ra những tách cafe hạnh phúc.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#f09c05] flex items-center justify-center text-2xl font-bold">
              ☀
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd]">
              Tầm Nhìn (Vision)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-semibold text-[#f09c05]">
              “DOLPHY có thể không lớn nhất, nhiều cửa hàng nhất, nhưng luôn luôn là chuỗi cửa hàng café đáng uống nhất và trạm kết nối giáo dục Barista thực chiến hàng đầu Việt Nam.”
            </p>
            <p className="text-xs text-gray-500">
              Không ngừng đổi mới, nâng cấp chất lượng hạt cà phê nông trại Việt Nam và đưa hạt cà phê quê hương vươn tầm quốc tế.
            </p>
          </div>
        </div>

        {/* Contact info box */}
        <div id="contact" className="p-8 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="font-oswald text-xl font-bold uppercase text-[#2076bd] mb-4">
            THÔNG TIN LIÊN HỆ & PHÁP LÝ DOANH NGHIỆP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-700">
            <div className="space-y-2">
              <p><strong>Đơn vị chủ quản:</strong> CÔNG TY TNHH CÁ HEO XANH</p>
              <p><strong>Mã số doanh nghiệp:</strong> 0313865203</p>
              <p><strong>Hotline:</strong> <a href="tel:0938084985" className="text-[#2076bd] font-bold">{brandInfo.hotline}</a></p>
              <p><strong>Email chính:</strong> {brandInfo.email}</p>
            </div>
            <div className="space-y-2">
              <p><strong>Trụ sở chính:</strong> 31 Thảo Điền, Phường Thảo Điền, TP. Thủ Đức, TP.HCM</p>
              <p><strong>Học viện Dolphy Academy:</strong> Trực tiếp tại quầy bar các chi nhánh Thảo Điền</p>
              <p><strong>Email tuyển dụng:</strong> {brandInfo.recruitmentEmail}</p>
              <p><strong>Đặt hàng online:</strong> dolphycoffee.cukcuk.vn</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
