import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Coffee, 
  GraduationCap, 
  MapPin, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';
import { brandInfo, coursesData, productsData, branchesData, articlesData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Home: React.FC = () => {
  const { setEnrollingCourse, addToCart, showToast } = useDolphy();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/slideshow_1.jpg',
      badge: 'DOLPHY CAFÉ • EST. 2013',
      title: 'HƯƠNG VỊ CÀ PHÊ SÀI GÒN',
      subtitle: 'Tự hào hơn 13 năm đồng hành cùng người yêu cà phê Thảo Điền & TP.HCM.',
      ctaText: 'XEM 10 CHI NHÁNH',
      ctaLink: '/branches',
      secondaryText: 'ĐẶT HÀNG GIAO TẬN NƠI',
      secondaryLink: 'https://dolphycoffee.cukcuk.vn/order-online/'
    },
    {
      image: '/images/slideshow_2.jpg',
      badge: 'DOLPHY ACADEMY 2026',
      title: 'HỌC VIỆN ĐÀO TẠO BARISTA THỰC CHIẾN',
      subtitle: 'Khóa học 21 giờ - 100% tại quầy bar cửa hàng thật - Ưu tiên tuyển dụng ngay vào chuỗi.',
      ctaText: 'ĐĂNG KÝ HỌC VIỆN (ƯU ĐÃI)',
      ctaLink: '/academy',
      secondaryText: 'XEM GIÁO TRÌNH 7 BUỔI',
      secondaryLink: '/academy'
    },
    {
      image: '/images/slideshow_3.jpg',
      badge: 'SPECIALTY COFFEE BAG',
      title: 'DOLPHY COFFEE BAG - FIND YOUR MATCH',
      subtitle: 'Arabica Cầu Đất, Robusta Honey Bảo Lộc & Signature Blend rang mới mỗi tuần.',
      ctaText: 'MUA CÀ PHÊ HẠT & PHIN',
      ctaLink: '/shop',
      secondaryText: 'TẶNG PHIN NHÔM CAO CẤP',
      secondaryLink: '/shop'
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Best seller products from dolphycafe.com
  const bestSellers = productsData.filter(p => p.isBestSeller || p.category === 'beans').slice(0, 4);

  // Testimonials from dolphycafe.com
  const testimonials = [
    {
      name: 'Katie Beck',
      role: 'Khách hàng thân thiết tại Thảo Điền',
      quote: 'This is one of my favorite coffee places in Saigon. I buy their bags of coffee beans often as well as sit on the corner sipping coffee while bikes whiz by. The staff is extremely friendly.',
      translation: 'Đây là một trong những quán cà phê yêu thích của tôi ở Sài Gòn. Tôi thường mua cà phê hạt đóng gói của họ và ngồi nhâm nhi cà phê ở góc phố trong khi xe đạp chạy vù vù qua. Nhân viên cực kỳ thân thiện.',
      stars: 5
    },
    {
      name: '권유림 (Kwon Yu-rim)',
      role: 'Khách hàng quốc tế',
      quote: '빡시유는 여기가 제일 맛있어요 직원분들도 친절하고 만족스러워 자주 이용 합니다.',
      translation: 'Bạc sỉu ở đây là ngon nhất. Nhân viên thân thiện và tôi rất hài lòng nên tôi thường xuyên ghé qua thưởng thức mỗi sáng.',
      stars: 5
    },
    {
      name: 'Hoàng Minh',
      role: 'Học viên Barista K01 - Dolphy Academy',
      quote: 'Khóa học Barista Thực Chiến 21 giờ tại Dolphy rất khác biệt. Mình được đứng máy pha Espresso thật tại quầy bar cửa hàng từ buổi thứ 2, ra nghề tự tin nhận ca ngay!',
      translation: '',
      stars: 5
    }
  ];

  return (
    <div className="bg-white text-[#222222]">
      
      {/* 1. TOP SLIDER CAROUSEL (taberna-top-slider matching dolphycafe.com) */}
      <section className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl space-y-4 sm:space-y-6">
                <span className="inline-block bg-[#f09c05] text-white text-xs sm:text-sm font-oswald uppercase tracking-widest px-3 py-1 rounded">
                  {slide.badge}
                </span>

                <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wider leading-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto drop-shadow">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to={slide.ctaLink}
                    className="w-full sm:w-auto px-6 py-3 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-sm uppercase tracking-wider font-medium transition-colors shadow-lg"
                  >
                    {slide.ctaText}
                  </Link>
                  {slide.secondaryLink.startsWith('http') ? (
                    <a
                      href={slide.secondaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#222222] font-oswald text-sm uppercase tracking-wider font-medium backdrop-blur transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{slide.secondaryText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      to={slide.secondaryLink}
                      className="w-full sm:w-auto px-6 py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#222222] font-oswald text-sm uppercase tracking-wider font-medium backdrop-blur transition-all"
                    >
                      {slide.secondaryText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#2076bd] text-white flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#2076bd] text-white flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-[#f09c05] w-8' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. BRAND MISSION & INTRO BANNER (Matching dolphycafe.com intro) */}
      <section className="bg-[#f0f8ff] border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#f09c05]">
            <Star size={16} fill="#f09c05" />
            <span className="font-oswald text-xs uppercase tracking-widest text-[#2076bd] font-bold">
              DOLPHY CAFE • DI SẢN CÀ PHÊ TỪ NĂM 2013
            </span>
            <Star size={16} fill="#f09c05" />
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal italic max-w-3xl mx-auto">
            "Dolphy Cafe tự hào vì luôn nỗ lực cải tiến chất lượng từng ngày thông qua sự học hỏi và ứng dụng kiến thức cafe mới với mong muốn khách hàng có thể tận hưởng những hạt cafe chất lượng hàng đầu, đến từ những nông trại chất lượng cao của Việt Nam."
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-blue-100 max-w-3xl mx-auto">
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd]">13+</span>
              <span className="text-xs text-gray-600">Năm Di Sản (2013-2026)</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd]">10</span>
              <span className="text-xs text-gray-600">Chi Nhánh TP.HCM</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd]">100%</span>
              <span className="text-xs text-gray-600">Hạt Cà Phê Mộc Chuẩn</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#f09c05]">TOP 10</span>
              <span className="text-xs text-gray-600">Saigon Coffee Đáng Thử</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY (Section matching dolphycafe.com layout) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Những dòng hạt cà phê nguyên chất được ưa chuộng nhất tại hệ thống chuỗi Dolphy Cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image || product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-[#f09c05] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    BÁN CHẠY
                  </span>
                )}
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#f09c05] text-xs mb-1">
                    {'★'.repeat(5)}
                    <span className="text-gray-400 text-[11px] ml-1">({product.rating || 5.0})</span>
                  </div>
                  <h3 className="font-oswald text-base font-semibold text-[#222222] group-hover:text-[#2076bd] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Giá từ</span>
                    <span className="font-oswald text-lg font-bold text-[#2076bd]">
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, 1, 'Nguyên hạt (Espresso)');
                      showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
                    }}
                    className="p-2 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white transition-colors"
                    title="Thêm vào giỏ hàng"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="dolphy-btn dolphy-btn-outline px-8 py-3 rounded text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>XEM TẤT CẢ SẢN PHẨM & CÀ PHÊ GÓI</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 4. MIDDLE BANNER (middle_banner.jpg matching dolphycafe.com) */}
      <section 
        className="relative py-24 px-4 sm:px-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/middle_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="bg-[#f09c05] text-white text-xs font-oswald uppercase tracking-widest px-3 py-1 rounded inline-block">
              DOLPHY ONLINE DELIVERY
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wider">
              GIAO CÀ PHÊ TẬN NƠI - ĐẶT HÀNG NHANH CHÓNG
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Thưởng thức hương vị cà phê Dolphy quen thuộc ngay tại nhà hoặc văn phòng làm việc qua ứng dụng CukCuk và giao hàng nhanh nội thành TP.HCM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="dolphy-btn dolphy-btn-amber px-8 py-3.5 rounded text-sm font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <span>ĐẶT MÓN CUKCUK NGAY</span>
              <ExternalLink size={16} />
            </a>
            <Link
              to="/branches"
              className="dolphy-btn px-8 py-3.5 rounded bg-white hover:bg-gray-100 text-[#222222] text-sm font-semibold shadow-lg"
            >
              TÌM QUÁN GẦN BẠN
            </Link>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PILLAR: DOLPHY ACADEMY 2026 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#165b94] via-[#2076bd] to-[#165b94] rounded-2xl text-white p-8 sm:p-12 overflow-hidden relative shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5">
              <span className="bg-[#f09c05] text-white text-xs font-oswald uppercase tracking-wider px-3 py-1 rounded inline-block">
                CHIẾN LƯỢC MỞ RỘNG 2026
              </span>

              <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wide leading-tight">
                HỌC VIỆN ĐÀO TẠO BARISTA THỰC CHIẾN DOLPHY ACADEMY
              </h2>

              <p className="text-sm text-blue-100 leading-relaxed">
                Không dạy lý thuyết suông! Dolphy Academy đưa học viên vào <strong>thực hành trực tiếp 100% tại quầy bar cửa hàng thật</strong> thuộc chuỗi Dolphy Cafe. Giáo trình chuẩn quốc tế SCA kết hợp tư duy vận hành chuỗi thực tế.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#f09c05] shrink-0" />
                  <span><strong>Thời lượng:</strong> 21 giờ thực chiến (7 buổi chuyên sâu)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#f09c05] shrink-0" />
                  <span><strong>Học phí:</strong> 7.000.000đ (Đặt cọc giữ chỗ 2.000.000đ qua VietQR)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#f09c05] shrink-0" />
                  <span><strong>Đặc quyền:</strong> Cam kết ưu tiên tuyển dụng ngay vào 10 chi nhánh Dolphy</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setEnrollingCourse(coursesData[0])}
                  className="dolphy-btn dolphy-btn-amber px-6 py-3 rounded text-sm font-semibold"
                >
                  ĐĂNG KÝ GIỮ CHỖ (CỌC 2 TRIỆU)
                </button>
                <Link
                  to="/academy"
                  className="dolphy-btn px-6 py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#2076bd] text-sm font-semibold transition-colors"
                >
                  XEM CHI TIẾT KHÓA HỌC
                </Link>
              </div>
            </div>

            {/* Course card preview */}
            <div className="bg-white rounded-xl p-6 text-[#222222] shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="font-oswald text-xs uppercase tracking-wider text-[#2076bd] font-bold">
                  KHÓA TRỌNG TÂM 2026
                </span>
                <span className="bg-red-50 text-red-600 font-oswald text-xs font-bold px-2 py-0.5 rounded">
                  CÒN 4 CHỖ THÁNG NÀY
                </span>
              </div>

              <h3 className="font-oswald text-xl font-bold text-[#2076bd] uppercase">
                BARISTA THỰC CHIẾN - 21H ON-STORE
              </h3>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span>Học phí trọn gói:</span>
                  <strong className="text-base text-[#2076bd] font-oswald">7.000.000 VNĐ</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span>Số tiền đặt cọc:</span>
                  <strong className="text-base text-[#f09c05] font-oswald">2.000.000 VNĐ</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span>Địa điểm học:</span>
                  <span className="font-medium">Quầy Bar Dolphy Thảo Điền</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Chứng chỉ & Việc làm:</span>
                  <span className="text-green-600 font-semibold">Ưu tiên tuyển dụng 100%</span>
                </div>
              </div>

              <div className="p-3 rounded bg-blue-50 border border-blue-100 text-xs text-blue-900 flex items-center gap-2">
                <Sparkles size={16} className="text-[#f09c05] shrink-0" />
                <span>Tặng kèm 1 áo Barista Dolphy + 1kg hạt Specialty tự luyện tập.</span>
              </div>

              <button
                onClick={() => setEnrollingCourse(coursesData[0])}
                className="w-full py-3 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-sm font-semibold uppercase tracking-wider transition-colors shadow"
              >
                ĐĂNG KÝ HỌC VIÊN NGAY
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. KHÁCH HÀNG NÓI VỀ CHÚNG TÔI (Section matching dolphycafe.com) */}
      <section className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
              Cảm nhận chân thực từ cộng đồng khách hàng quen thuộc và đối tác gắn bó với Dolphy Cafe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#f09c05]">
                    {'★'.repeat(t.stars)}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  {t.translation && (
                    <p className="text-xs text-gray-500 border-t border-gray-100 pt-2">
                      [{t.translation}]
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-oswald text-sm font-bold text-[#2076bd]">
                      — {t.name}
                    </h4>
                    <span className="text-[11px] text-gray-400">{t.role}</span>
                  </div>
                  <span className="text-lg">☕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIN TỨC MỚI (Section matching dolphycafe.com) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">TIN TỨC MỚI</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Cập nhật hoạt động mới, cẩm nang pha chế và các câu chuyện văn hóa cà phê từ Dolphy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.slice(0, 4).map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date || '2026-10-15'}
                    </span>
                    <span className="text-[#2076bd] font-medium font-oswald">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-oswald text-sm font-semibold text-[#222222] group-hover:text-[#2076bd] transition-colors line-clamp-2 leading-snug">
                    <Link to="/knowledge">{article.title}</Link>
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 mt-3 text-[11px] text-gray-400 flex items-center justify-between">
                  <span>Đăng bởi Cá Heo Xanh</span>
                  <Link to="/knowledge" className="text-[#2076bd] hover:underline font-semibold font-oswald">
                    ĐỌC TIẾP →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/knowledge"
            className="dolphy-btn dolphy-btn-outline px-8 py-3 rounded text-sm font-semibold"
          >
            XEM TẤT CẢ TIN TỨC & BÀI VIẾT
          </Link>
        </div>
      </section>

      {/* 8. 10 CHI NHÁNH CỬA HÀNG (Quick Locator matching dolphycafe.com) */}
      <section className="bg-[#f0f8ff] py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd]">
              HỆ THỐNG 10 ĐIỂM BÁN TẠI TP.HCM
            </span>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#222222]">
              TÌM CỬA HÀNG DOLPHY CAFE GẦN BẠN NHẤT
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Tọa lạc tại các vị trí đắc địa ở Thảo Điền (Quốc Hương, Xuân Thủy, Nguyễn Bá Huân,...), Bình Thạnh và Phú Mỹ Hưng Quận 7. Không gian thoáng mát, máy lạnh, wifi mạnh mẽ và thân thiện với thú cưng.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/branches"
              className="dolphy-btn dolphy-btn-primary px-6 py-3 rounded text-sm font-semibold shadow flex items-center gap-2"
            >
              <MapPin size={16} />
              <span>XEM BẢN ĐỒ & TIỆN ÍCH 10 CHI NHÁNH</span>
            </Link>
            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="dolphy-btn dolphy-btn-amber px-6 py-3 rounded text-sm font-semibold shadow flex items-center gap-2"
            >
              <span>GIAO HÀNG TẬN NƠI</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
