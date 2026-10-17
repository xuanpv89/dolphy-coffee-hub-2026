import React from 'react';
import { Award, Heart, ShieldCheck, Sparkles, MapPin, Coffee, CheckCircle2 } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAEDCD]">
            Hành Trình 13 Năm Đồng Hành
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Câu Chuyện Thương Hiệu Dolphy
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-xl mx-auto italic">
            "My name’s DOLPHY. I’m a dolphin. I only serve pure coffee."
          </p>
        </div>
      </section>

      {/* Main Story & Visuals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A]">
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
              alt="Dolphy Thao Dien Corner"
              className="rounded-2xl shadow-md h-56 w-full object-cover"
            />
            <img
              src="/images/image4.jpg"
              alt="Dolphy Barista Pouring Coffee"
              className="rounded-2xl shadow-md h-56 w-full object-cover mt-6"
            />
          </div>
        </div>

        {/* Magazine Award Highlight */}
        <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8E0D5] flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#D4A373] text-[#24140A] flex items-center justify-center shrink-0">
            <Award size={36} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-[#24140A]">
              Top 10 Quán Cà Phê Đáng Uống Nhất TP.HCM
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              DOLPHY thực sự tự hào khi là một trong những thương hiệu cafe nổi tiếng với cộng đồng người nước ngoài sống tại TP.HCM nhiều năm liền. Đã từng được vinh danh là <strong>Top 10 quán cafe đáng uống nhất TP.HCM do tạp chí ẩm thực – du lịch Words bình chọn các năm 2015, 2016, 2017</strong>.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#E8E0D5] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center text-2xl">
              🌟
            </div>
            <h3 className="font-display text-2xl font-bold text-[#24140A]">
              Sứ Mệnh (Mission)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Dựa trên lý tưởng về sứ mệnh <strong>“Happiness in a cup”</strong>, ở DOLPHY chúng tôi tin rằng <em>chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc</em>. 
            </p>
            <p className="text-xs text-gray-600">
              Vì vậy, DOLPHY tập trung vào sự chăm sóc và phát triển các Barista, xây dựng chính sách lương công bằng, minh bạch, có sự thăng tiến rõ ràng. Sứ mệnh của DOLPHIERs chúng ta là tạo ra những tách cafe hạnh phúc.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E0D5] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center text-2xl">
              🔭
            </div>
            <h3 className="font-display text-2xl font-bold text-[#24140A]">
              Tầm Nhìn (Vision)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-semibold text-[#8C5329]">
              “DOLPHY có thể không lớn nhất, nhiều cửa hàng nhất, nhưng luôn luôn là chuỗi cửa hàng café đáng uống nhất và trạm kết nối giáo dục Barista thực chiến hàng đầu Việt Nam.”
            </p>
            <p className="text-xs text-gray-600">
              Không ngừng đổi mới, nâng cấp chất lượng hạt cà phê nông trại Việt Nam và đưa hạt cà phê quê hương vươn tầm quốc tế.
            </p>
          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="space-y-8 pt-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A] text-center">
            Dấu Mốc Phát Triển Của Dolphy (2013 - 2026)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FAF0E6] text-[#8C5329]">2013</span>
              <h4 className="font-bold text-sm text-[#24140A]">Khởi Đầu Tại Thảo Điền</h4>
              <p className="text-xs text-gray-600">Mở cửa hàng đầu tiên vào ngày 20/10/2013, phục vụ cộng đồng expat quốc tế và người yêu cafe Ý.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FAF0E6] text-[#8C5329]">2015 - 2017</span>
              <h4 className="font-bold text-sm text-[#24140A]">Top 10 Quán Cafe Đáng Uống</h4>
              <p className="text-xs text-gray-600">Được tạp chí Words bình chọn liên tiếp 3 năm là một trong 10 quán cafe đáng thưởng thức nhất Sài Gòn.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FAF0E6] text-[#8C5329]">2020 - 2024</span>
              <h4 className="font-bold text-sm text-[#24140A]">Phát Triển Hệ Thống 10 Quán</h4>
              <p className="text-xs text-gray-600">Mở rộng chi nhánh sang Phú Mỹ Hưng (Quận 7) và Bình Thạnh, phát triển dòng Cà Phê Túi Coffee Bag.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#24140A] text-white space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#D4A373] text-[#24140A]">2026</span>
              <h4 className="font-bold text-sm text-[#FAEDCD]">Dolphy Coffee Hub & Academy</h4>
              <p className="text-xs text-white/80">Xây dựng hệ sinh thái tự chủ, ra mắt học viện đào tạo Barista thực chiến và nền tảng số toàn diện.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
