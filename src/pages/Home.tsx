import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Coffee, MapPin, Sparkles, Award, ShieldCheck, Heart, Star, CheckCircle, ChevronRight, PhoneCall, QrCode } from 'lucide-react';
import { brandInfo, coursesData, productsData, branchesData, testimonialsData, articlesData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Home: React.FC = () => {
  const { setEnrollingCourse, addToCart } = useDolphy();
  const featuredCourse = coursesData[0];
  const bestSellers = productsData.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-[#1A0E07] text-white overflow-hidden">
        {/* Background Overlay with Coffee Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image5.jpg"
            alt="Dolphy Cafe Corner"
            className="w-full h-full object-cover object-center opacity-30 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E07] via-[#24140A]/85 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1A0E07]/60 to-[#1A0E07]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4A373]/30 text-xs sm:text-sm text-[#FAEDCD] shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E76F51]"></span>
            <span>🐬 Hệ Sinh Thái Cà Phê & Đào Tạo Barista Thực Chiến 2026</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Happiness in a cup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] via-[#FAEDCD] to-[#D4A373]">
              Khởi Đầu Ngày Mới Với Dolphy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#D8CFCE] max-w-2xl mx-auto leading-relaxed">
            Hơn 13 năm đồng hành cùng người yêu cà phê Sài Gòn. Hệ sinh thái 10 chi nhánh cà phê Ý & Phin di sản kết hợp cùng <strong>Dolphy Academy</strong> – đào tạo Barista thực chiến cam kết đầu ra việc làm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/academy"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] via-[#E9C496] to-[#C48B55] text-[#24140A] font-bold text-base shadow-xl hover:shadow-[#D4A373]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap size={20} />
              <span>Khám Phá Dolphy Academy</span>
            </Link>

            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Coffee size={20} />
              <span>Mua Cà Phê Hạt & Phin</span>
            </Link>

            <Link
              to="/branches"
              className="w-full sm:w-auto px-6 py-4 rounded-full text-[#FAEDCD] hover:text-white text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <MapPin size={18} />
              <span>10 Cửa Hàng TP.HCM</span>
            </Link>
          </div>

          {/* Key Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10">
            {brandInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-3 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#D4A373]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#B8ACA7] mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FOUR PILLARS OF DOLPHY HUB 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
            Hệ Sinh Thái Toàn Diện
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A]">
            Bốn Trụ Cột Phát Triển Dolphy Coffee Hub 2026
          </h2>
          <p className="text-sm sm:text-base text-[#7A6E68] max-w-xl mx-auto">
            Không chỉ là chuỗi cà phê thưởng thức, Dolphy mở rộng thành trạm kết nối giáo dục, nguyên liệu và văn hóa cà phê bền vững.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] hover:border-[#D4A373] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              ☕
            </div>
            <h3 className="font-display text-lg font-bold text-[#24140A] mb-2">
              Dolphy Café Chain
            </h3>
            <p className="text-xs text-[#7A6E68] leading-relaxed mb-4">
              Hệ thống 10 quán cà phê tọa lạc tại các vị trí đắc địa ở Thảo Điền, Phú Mỹ Hưng và Bình Thạnh. Không gian mở thoáng mát ngắm phố Sài Gòn.
            </p>
            <Link to="/branches" className="text-xs font-bold text-[#8C5329] flex items-center gap-1 hover:underline">
              <span>Khám phá 10 quán</span> &rarr;
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#24140A] to-[#4A2C11] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E76F51] text-white">
              Trọng Tâm
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#D4A373] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🎓
            </div>
            <h3 className="font-display text-lg font-bold text-[#FAEDCD] mb-2">
              Dolphy Academy
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Học viện đào tạo Barista thực chiến 100% tại quầy bar cửa hàng. Cam kết ưu tiên nhận việc ngay sau khóa học với mức thu nhập 25k-35k/giờ.
            </p>
            <Link to="/academy" className="text-xs font-bold text-[#D4A373] flex items-center gap-1 hover:underline">
              <span>Xem khóa học Barista</span> &rarr;
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] hover:border-[#D4A373] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📦
            </div>
            <h3 className="font-display text-lg font-bold text-[#24140A] mb-2">
              Coffee Bag & Gift Sets
            </h3>
            <p className="text-xs text-[#7A6E68] leading-relaxed mb-4">
              Cà phê hạt/bột nguyên chất Arabica Cầu Đất, Robusta Lâm Đồng, Espresso Blend và các bộ Combo Hộp Quà Tết Traditional sang trọng.
            </p>
            <Link to="/shop" className="text-xs font-bold text-[#8C5329] flex items-center gap-1 hover:underline">
              <span>Đặt mua cà phê</span> &rarr;
            </Link>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] hover:border-[#D4A373] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🌱
            </div>
            <h3 className="font-display text-lg font-bold text-[#24140A] mb-2">
              Green & Community
            </h3>
            <p className="text-xs text-[#7A6E68] leading-relaxed mb-4">
              Chương trình Green Stamp mang bình cá nhân giảm rác thải nhựa, Thẻ tích điểm Mua 10 Tặng 1 và các sự kiện workshop cộng đồng cuối tuần.
            </p>
            <Link to="/knowledge" className="text-xs font-bold text-[#8C5329] flex items-center gap-1 hover:underline">
              <span>Đọc cẩm nang sống xanh</span> &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ACADEMY COURSE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#24140A] via-[#3A1F0D] to-[#4A2C11] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D4A373]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E76F51] text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Khóa Tuyển Sinh Trọng Điểm 2026</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Khóa Học Barista Thực Chiến Dolphy
              </h2>

              <p className="text-sm sm:text-base text-[#D8CFCE] leading-relaxed">
                Được thiết kế dựa trên nhu cầu thực tế của thị trường F&B Sài Gòn: Học trực tiếp trên máy pha Ý công nghiệp, kèm cặp 1:1 bởi Master Trainer, và <strong>cam kết ưu tiên tuyển dụng ngay tại 10 chi nhánh Dolphy</strong> hoặc giới thiệu việc làm tại các chuỗi đối tác.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-[#FAEDCD]">Thời lượng</div>
                  <div className="text-lg font-bold text-white mt-0.5">21 Giờ</div>
                  <div className="text-[11px] text-white/60">6 buổi x 3.5h</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-xs text-[#FAEDCD]">Môi trường</div>
                  <div className="text-lg font-bold text-white mt-0.5">100% Quầy Bar</div>
                  <div className="text-[11px] text-white/60">Thực hành tại quán</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#FAEDCD]">Cam kết</div>
                  <div className="text-lg font-bold text-[#E76F51] mt-0.5">Có Việc Ngay</div>
                  <div className="text-[11px] text-white/60">25.000 - 35.000đ/h</div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="text-xs text-white/60 line-through">
                    Học phí gốc: {featuredCourse.price.toLocaleString('vi-VN')} ₫
                  </div>
                  <div className="text-3xl font-extrabold text-[#FAEDCD] flex items-baseline gap-2">
                    {featuredCourse.discountPrice.toLocaleString('vi-VN')} ₫
                    <span className="text-xs font-normal text-white/70">(Chỉ cọc 2.000.000₫)</span>
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setEnrollingCourse(featuredCourse)}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#8C5329] text-[#24140A] font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <GraduationCap size={18} />
                    <span>Đăng Ký Giữ Chỗ Ngay</span>
                  </button>

                  <Link
                    to="/academy"
                    className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center"
                  >
                    Xem Giáo Trình Chi Tiết
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4A373]/40 aspect-[4/3] sm:aspect-square relative group">
                <img
                  src="/images/image4.jpg"
                  alt="Học viên Barista thực hành"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider">
                    Lớp Khai Giảng Hàng Tuần
                  </span>
                  <div className="text-white font-bold text-lg">
                    Tối đa 4 - 6 học viên/lớp để đảm bảo chất lượng cầm tay chỉ việc
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BEST SELLER PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
              Cà Phê Đóng Gói Cao Cấp
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A] mt-1">
              Sản Phẩm Bán Chạy Tại Quầy
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-bold text-[#8C5329] hover:text-[#4A2C11] flex items-center gap-1 group"
          >
            <span>Xem toàn bộ menu cà phê & hộp quà</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image */}
              <Link to={`/shop#${product.id}`} className="relative block h-56 overflow-hidden bg-[#F5EFE6]">
                <img
                  src={product.images[0] || '/images/image10.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#24140A]/80 text-[#FAEDCD]">
                  {product.categoryName}
                </span>
                {product.weight && (
                  <span className="absolute bottom-3 right-3 text-[11px] font-semibold px-2 py-0.5 rounded bg-white/90 text-gray-800 shadow-sm">
                    {product.weight}
                  </span>
                )}
              </Link>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-base font-bold text-[#24140A] group-hover:text-[#8C5329] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#7A6E68] mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">Đơn giá</div>
                    <div className="text-base font-extrabold text-[#C0392B]">
                      {product.price.toLocaleString('vi-VN')} ₫
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    className="p-2.5 rounded-xl bg-[#4A2C11] text-white hover:bg-[#8C5329] active:scale-95 transition-all shadow-sm flex items-center gap-1.5 text-xs font-semibold"
                    title="Thêm vào giỏ hàng"
                  >
                    <span>Thêm</span>
                    <Coffee size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 10 BRANCHES SPOTLIGHT */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
              Không Gian Thưởng Thức
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A]">
              10 Cửa Hàng Dolphy Café Tại TP. Hồ Chí Minh
            </h2>
            <p className="text-sm sm:text-base text-[#7A6E68] max-w-xl mx-auto">
              Nằm tại những góc phố đẹp nhất Thảo Điền, Phú Mỹ Hưng và Bình Thạnh. Dừng chân ngắm phố xá chuyển động và tận hưởng ly cà phê thuần túy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Area 1: Thảo Điền */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E0D5] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-display text-lg font-bold text-[#4A2C11] flex items-center gap-2">
                  <MapPin size={18} className="text-[#E76F51]" />
                  <span>Quận 2 (TP. Thủ Đức)</span>
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF0E6] text-[#8C5329] font-bold">
                  5 Cửa Hàng
                </span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 28 Thảo Điền:</strong>
                  <span>Góc phố biểu tượng Thảo Điền & Dolphy Training Hub</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 08 Thảo Điền:</strong>
                  <span>Không gian mở thoáng đãng, máy lạnh tầng lửng</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 03 Nguyễn Văn Hưởng:</strong>
                  <span>Lộng gió sông Sài Gòn, yên tĩnh đọc sách</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 113 Dương Văn An:</strong>
                  <span>Khu An Phú văn minh, bàn làm việc nhóm</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 28 Trần Lựu:</strong>
                  <span>Khu biệt thự yên ả, cà phê sáng thảnh thơi</span>
                </li>
              </ul>
            </div>

            {/* Area 2: Phú Mỹ Hưng */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E0D5] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-display text-lg font-bold text-[#4A2C11] flex items-center gap-2">
                  <MapPin size={18} className="text-[#E76F51]" />
                  <span>Quận 7 (Phú Mỹ Hưng)</span>
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF0E6] text-[#8C5329] font-bold">
                  4 Cửa Hàng
                </span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 1441 Nguyễn Văn Linh:</strong>
                  <span>Trục đại lộ sầm uất, Dolphy Academy Q7</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 35 Đường Số 16 (Nam Viên):</strong>
                  <span>Liền kề công viên xanh, không khí trong lành</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• R3-21 Lý Long Tường:</strong>
                  <span>Khu phố đi bộ, gần các nhà hàng quốc tế</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#24140A] shrink-0">• 8 Hoàng Văn Thái:</strong>
                  <span>Tòa nhà Prudential, phục vụ take-away nhanh</span>
                </li>
              </ul>
            </div>

            {/* Area 3: Bình Thạnh & Map Link */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E0D5] shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="font-display text-lg font-bold text-[#4A2C11] flex items-center gap-2">
                    <MapPin size={18} className="text-[#E76F51]" />
                    <span>Quận Bình Thạnh</span>
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF0E6] text-[#8C5329] font-bold">
                    1 Cửa Hàng
                  </span>
                </div>
                <div className="pt-3 text-xs text-gray-700 space-y-1">
                  <strong className="text-[#24140A] block">• 79 Phạm Viết Chánh, Phường 19:</strong>
                  <p>Khu phố ẩm thực sành điệu, kết hợp gu cà phê Ý và cà phê phin đậm chất Sài Gòn.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#24140A] text-white space-y-3 text-center">
                <div className="text-xs text-[#FAEDCD]">
                  Tìm cửa hàng Dolphy gần bạn nhất
                </div>
                <Link
                  to="/branches"
                  className="w-full py-2.5 rounded-lg bg-[#D4A373] text-[#24140A] font-bold text-xs hover:brightness-110 flex items-center justify-center gap-1.5"
                >
                  <span>Mở Bản Đồ & Chỉ Đường</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
            Khách Hàng Nói Về Chúng Tôi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A]">
            Tình Yêu Của Khách Hàng Quốc Tế & Trong Nước
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#F39C12]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{test.comment}"
                </p>
                {test.translation && (
                  <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                    👉 <em>{test.translation}</em>
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF0E6] text-[#8C5329] font-bold text-sm flex items-center justify-center">
                  {test.author[0]}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#24140A]">{test.author}</div>
                  <div className="text-[11px] text-[#8C5329]">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COFFEE ARTICLES & GUIDES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
              Cẩm Nang & Văn Hóa
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A] mt-1">
              Bí Quyết Pha Chế & Chuyện Cà Phê
            </h2>
          </div>
          <Link
            to="/knowledge"
            className="text-sm font-bold text-[#8C5329] hover:text-[#4A2C11] flex items-center gap-1 group"
          >
            <span>Đọc tất cả bài viết</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.slice(0, 3).map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="h-48 overflow-hidden bg-[#F0EBE4] relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 text-white">
                  {art.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-gray-400 mb-1">{art.readTime} • {art.author}</div>
                  <h3 className="font-display text-base font-bold text-[#24140A] group-hover:text-[#8C5329] transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#7A6E68] mt-2 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <Link
                  to={`/knowledge#${art.id}`}
                  className="text-xs font-bold text-[#4A2C11] hover:text-[#8C5329] flex items-center gap-1 pt-2 border-t border-gray-100"
                >
                  <span>Đọc tiếp bài viết</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. CAREERS & BARISTA HIRING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#8C5329] via-[#4A2C11] to-[#24140A] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#FAEDCD] text-xs font-bold uppercase tracking-wider">
              Gia Nhập Đội Ngũ Dolphy
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Bạn Muốn Trở Thành Một Chú Cá Heo Barista?
            </h2>
            <p className="text-sm text-[#E5DED7] leading-relaxed">
              Dolphy liên tục tuyển dụng Barista Full-time & Part-time (25k - 35k/giờ) tại Quận 2, Quận 7 và Bình Thạnh. Không cần kinh nghiệm, bạn sẽ được đào tạo bài bản và làm việc trong môi trường thân thiện, văn minh.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/careers"
              className="px-6 py-3.5 rounded-full bg-[#FAEDCD] text-[#24140A] font-bold text-sm shadow-md hover:bg-white active:scale-95 transition-all text-center"
            >
              Ứng Tuyển Barista Ngay
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
