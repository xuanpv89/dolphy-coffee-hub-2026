import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Calendar,
  Sparkles,
  Heart,
  Camera,
  X
} from 'lucide-react';
import { coursesData, productsData, articlesData, communityGalleryData, CommunityPhoto } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Home: React.FC = () => {
  const { setEnrollingCourse, addToCart, showToast, t, language } = useDolphy();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<CommunityPhoto | null>(null);

  const slides = [
    {
      image: '/images/hero_slide_store.webp',
      badge: t('home.hero2_tag'),
      title: t('home.hero2_title'),
      subtitle: t('home.hero2_subtitle'),
      ctaText: t('home.hero2_cta1'),
      ctaLink: '/branches',
      secondaryText: t('home.hero2_cta2'),
      secondaryLink: 'https://dolphycoffee.cukcuk.vn/order-online/'
    },
    {
      image: '/images/hero_slide_academy.webp',
      badge: t('home.hero3_tag'),
      title: t('home.hero3_title'),
      subtitle: t('home.hero3_subtitle'),
      ctaText: t('home.hero3_cta'),
      ctaLink: '/academy',
      secondaryText: t('home.view_curriculum'),
      secondaryLink: '/academy'
    },
    {
      image: '/images/hero_slide_beans.webp',
      badge: t('home.hero1_tag'),
      title: t('home.hero1_title'),
      subtitle: t('home.hero1_subtitle'),
      ctaText: t('home.hero1_cta'),
      ctaLink: '/shop',
      secondaryText: t('shop.promo_link'),
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

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Best seller products from dolphycafe.com
  const bestSellers = productsData.filter(p => p.isBestSeller || p.category === 'beans').slice(0, 4);

  // Testimonials
  const testimonials = [
    {
      name: 'Katie Beck',
      role: language === 'vi' ? 'Khách hàng thân thiết tại Thảo Điền' : 'Loyal Resident in Thao Dien',
      quote: 'This is one of my favorite coffee places in Saigon. I buy their bags of coffee beans often as well as sit on the corner sipping coffee while bikes whiz by. The staff is extremely friendly.',
      translation: language === 'vi' ? 'Đây là một trong những quán cà phê yêu thích của tôi ở Sài Gòn. Tôi thường mua cà phê hạt đóng gói của họ và ngồi nhâm nhi cà phê ở góc phố trong khi xe đạp chạy vù vù qua. Nhân viên cực kỳ thân thiện.' : '',
      stars: 5
    },
    {
      name: '권유림 (Kwon Yu-rim)',
      role: language === 'vi' ? 'Khách hàng quốc tế' : 'International Guest',
      quote: '빡시유는 여기가 제일 맛있어요 직원분들도 친절하고 만족스러워 자주 이용 합니다.',
      translation: language === 'vi' ? 'Bạc sỉu ở đây là ngon nhất. Nhân viên thân thiện và tôi rất hài lòng nên tôi thường xuyên ghé qua thưởng thức mỗi sáng.' : 'Their Bac Xiu is the most delicious in town. The staff are welcoming and attentive.',
      stars: 5
    },
    {
      name: 'Hoàng Minh',
      role: language === 'vi' ? 'Học viên Barista K01 - Dolphy Academy' : 'Alumni Barista K01 - Dolphy Academy',
      quote: language === 'vi' 
        ? 'Khóa học Barista Thực Chiến 21 giờ tại Dolphy rất khác biệt. Mình được đứng máy pha Espresso thật tại quầy bar cửa hàng từ buổi thứ 2, ra nghề tự tin nhận ca ngay!'
        : 'The 21-hour on-store Barista Masterclass was truly game-changing. I practiced on real commercial espresso machines from session 2, graduating with full confidence to run shifts!',
      translation: '',
      stars: 5
    }
  ];

  return (
    <div className="bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* 1. TOP SLIDER CAROUSEL */}
      <section
        className="relative w-full h-[460px] sm:h-[550px] lg:h-[650px] overflow-hidden bg-black select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-5 sm:px-12 lg:px-16">
              <div className="max-w-3xl space-y-3 sm:space-y-6">
                <span className="inline-block bg-[#FAEA28] text-slate-950 font-bold text-[11px] sm:text-sm font-oswald uppercase tracking-widest px-3 py-1 rounded shadow">
                  {slide.badge}
                </span>

                <h1 className="font-oswald text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wider leading-tight drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-white/90 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto drop-shadow px-2">
                  {slide.subtitle}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  <Link
                    to={slide.ctaLink}
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all shadow-lg"
                  >
                    {slide.ctaText}
                  </Link>
                  {slide.secondaryLink.startsWith('http') ? (
                    <a
                      href={slide.secondaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#222222] font-oswald text-xs sm:text-sm uppercase tracking-wider font-medium backdrop-blur transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{slide.secondaryText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      to={slide.secondaryLink}
                      className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#222222] font-oswald text-xs sm:text-sm uppercase tracking-wider font-medium backdrop-blur transition-all"
                    >
                      {slide.secondaryText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Prev/Next Buttons (Hidden on mobile to never overlap centered hero text) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#2076bd] text-white items-center justify-center transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#2076bd] text-white items-center justify-center transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 sm:h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-[#FAEA28] w-7 sm:w-8 shadow' : 'bg-white/60 hover:bg-white w-2.5 sm:w-3'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. BRAND MISSION & INTRO BANNER */}
      <section className="bg-[#f0f8ff] dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center transition-colors">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#FAEA28]">
            <Star size={16} fill="#FAEA28" />
            <span className="font-oswald text-xs uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6] font-bold">
              DOLPHY CAFÉ • EST. 2013
            </span>
            <Star size={16} fill="#FAEA28" />
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-normal italic max-w-3xl mx-auto">
            {t('home.slogan_quote')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-blue-100 dark:border-slate-700 max-w-3xl mx-auto">
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd] dark:text-[#3ba0e6]">13+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{t('home.stat_years')}</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd] dark:text-[#3ba0e6]">10</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{t('home.stat_branches')}</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#2076bd] dark:text-[#3ba0e6]">100%</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{t('home.stat_pure')}</span>
            </div>
            <div className="p-2">
              <span className="block font-oswald text-2xl font-bold text-[#b09600] dark:text-[#FAEA28]">TOP 10</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{t('home.stat_top10')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('home.bestsellers_title')}</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t('home.bestsellers_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col group"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-slate-900">
                <img
                  src={product.image || product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-[#FAEA28] text-slate-950 text-[10px] font-oswald uppercase tracking-wider font-extrabold px-2 py-0.5 rounded shadow">
                    {t('shop.badge_bestseller')}
                  </span>
                )}
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#b59b00] dark:text-[#FAEA28] text-xs mb-1">
                    {'★'.repeat(5)}
                    <span className="text-gray-400 text-[11px] ml-1">({product.rating || 5.0})</span>
                  </div>
                  <h3 className="font-oswald text-base font-semibold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors leading-snug line-clamp-2">
                    {language === 'en' && product.nameEn ? product.nameEn : product.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {language === 'en' && product.descriptionEn ? product.descriptionEn : product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 block">{t('shop.unit_price')}</span>
                    <span className="font-oswald text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, 1, language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)');
                      const pName = language === 'en' && product.nameEn ? product.nameEn : product.name;
                      showToast(language === 'vi' ? `Đã thêm "${pName}" vào giỏ hàng!` : `Added "${pName}" to cart!`);
                    }}
                    className="p-2 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white transition-colors"
                    title={t('shop.add_to_cart')}
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
            className="dolphy-btn dolphy-btn-outline px-8 py-3 rounded text-sm font-semibold inline-flex items-center gap-2 dark:border-[#3ba0e6] dark:text-[#3ba0e6] dark:hover:bg-[#3ba0e6] dark:hover:text-white"
          >
            <span>{t('home.view_all_products')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 4. MIDDLE BANNER */}
      <section 
        className="relative py-20 sm:py-24 px-4 sm:px-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero_slide_beans.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66]/95 via-[#165b94]/90 to-black/85" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="bg-[#FAEA28] text-slate-950 font-extrabold text-xs font-oswald uppercase tracking-widest px-3 py-1 rounded inline-block shadow">
              {t('home.delivery_tag')}
            </span>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wider">
              {t('home.delivery_title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {t('home.delivery_desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="dolphy-btn dolphy-btn-amber px-8 py-3.5 rounded text-sm font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <span>{t('home.order_cukcuk')}</span>
              <ExternalLink size={16} />
            </a>
            <Link
              to="/branches"
              className="dolphy-btn px-8 py-3.5 rounded bg-white hover:bg-gray-100 text-[#222222] text-sm font-semibold shadow-lg"
            >
              {t('home.find_nearby')}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PILLAR: DOLPHY ACADEMY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#165b94] via-[#2076bd] to-[#165b94] rounded-2xl text-white p-8 sm:p-12 overflow-hidden relative shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5">
              <span className="bg-[#FAEA28] text-slate-950 font-extrabold text-xs font-oswald uppercase tracking-wider px-3 py-1 rounded inline-block shadow">
                {t('home.academy_badge')}
              </span>

              <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wide leading-tight">
                {t('home.academy_title')}
              </h2>

              <p className="text-sm text-blue-100 leading-relaxed">
                {t('home.academy_desc')}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#FAEA28] shrink-0" />
                  <span>{t('home.academy_feature1')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#FAEA28] shrink-0" />
                  <span>{t('home.academy_feature2')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#FAEA28] shrink-0" />
                  <span>{t('home.academy_feature3')}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setEnrollingCourse(coursesData[0])}
                  className="dolphy-btn dolphy-btn-amber px-6 py-3 rounded text-sm font-semibold"
                >
                  {t('home.reserve_seat')}
                </button>
                <Link
                  to="/academy"
                  className="dolphy-btn px-6 py-3 rounded bg-white/20 hover:bg-white text-white hover:text-[#2076bd] text-sm font-semibold transition-colors"
                >
                  {t('home.view_curriculum')}
                </Link>
              </div>
            </div>

            {/* Course card preview */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 text-[#222222] dark:text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-3">
                <span className="font-oswald text-xs uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6] font-bold">
                  {t('home.hero3_tag')}
                </span>
                <span className="bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-oswald text-xs font-bold px-2 py-0.5 rounded">
                  {t('home.academy_seats')}
                </span>
              </div>

              <h3 className="font-oswald text-xl font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">
                {t('home.academy_card_title')}
              </h3>

              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-800">
                  <span>{t('home.academy_tuition')}</span>
                  <strong className="text-base text-[#2076bd] dark:text-[#3ba0e6] font-oswald">7.000.000₫</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-800">
                  <span>{t('home.academy_deposit')}</span>
                  <strong className="text-base text-[#857200] dark:text-[#FAEA28] font-oswald font-bold">2.000.000₫</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-800">
                  <span>{t('home.academy_location_lbl')}</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{t('home.academy_location_val')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>{t('home.academy_cert_lbl')}</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">{t('home.academy_cert_val')}</span>
                </div>
              </div>

              <div className="p-3 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 flex items-center gap-2">
                <Sparkles size={16} className="text-[#857200] dark:text-[#FAEA28] shrink-0" />
                <span>{t('home.academy_gift')}</span>
              </div>

              <button
                onClick={() => setEnrollingCourse(coursesData[0])}
                className="w-full py-3 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-sm font-semibold uppercase tracking-wider transition-colors shadow"
              >
                {t('home.academy_btn')}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. KHÁCH HÀNG NÓI VỀ CHÚNG TÔI */}
      <section className="bg-[#f8f9fa] dark:bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">{t('home.testimonials_title')}</h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {t('home.testimonials_sub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1e293b] p-6 rounded-lg border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#FAEA28] text-xs mb-1">
                    {'★'.repeat(item.stars)}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                  {item.translation && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-slate-800 pt-2">
                      [{item.translation}]
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-oswald text-sm font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                      — {item.name}
                    </h4>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">{item.role}</span>
                  </div>
                  <span className="text-lg">☕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KHOẢNH KHẮC DOLPHY / FANPAGE LIVE FEED */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] text-xs font-oswald uppercase tracking-widest font-bold">
              <Camera size={14} />
              <span>{t('home.community_badge')}</span>
            </span>
          </div>
          <div>
            <h2 className="section-title">{t('home.community_title')}</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('home.community_sub')}
          </p>
        </div>

        {/* 8-Photo Interactive Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {communityGalleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/60 cursor-pointer bg-gray-100 dark:bg-slate-800 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={language === 'vi' ? item.title : item.titleEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Tag Category top-left */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">
                  {language === 'vi' ? item.category : item.categoryEn}
                </span>
              </div>

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                <span className="text-[11px] text-[#FAEA28] font-oswald flex items-center gap-1 mb-1 font-semibold">
                  <MapPin size={12} className="text-[#FAEA28]" />
                  <span>{language === 'vi' ? item.location : item.locationEn}</span>
                </span>

                <h4 className="font-oswald text-xs sm:text-sm font-semibold uppercase leading-tight line-clamp-2">
                  {language === 'vi' ? item.title : item.titleEn}
                </h4>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 mt-2 text-[11px] text-white/80">
                  <span className="flex items-center gap-1 text-red-400">
                    <Heart size={12} className="fill-red-400 text-red-400" />
                    <span>{item.likes} {t('home.community_like')}</span>
                  </span>
                  <span className="text-[10px] uppercase font-oswald text-[#3ba0e6]">
                    {language === 'vi' ? 'Xem ảnh' : 'View'} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Channels CTA Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/60 border border-blue-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <p className="font-oswald text-base font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">
                {language === 'vi' ? 'KẾT NỐI VỚI DOLPHY TRÊN MẠNG XÃ HỘI' : 'CONNECT WITH DOLPHY ON SOCIAL MEDIA'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                #DolphyCafe #HappinessInACup #DolphyThaoDien #BlueDolphins #DolphyTikTok
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://www.facebook.com/dolphycafe"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#1877F2] hover:bg-[#1464cc] text-white font-oswald text-xs uppercase tracking-wider font-semibold transition-all shadow flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/dolphycafe/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-oswald text-xs uppercase tracking-wider font-semibold transition-all shadow flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@_.dolphycafe._"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-black hover:bg-gray-900 text-white font-oswald text-xs uppercase tracking-wider font-semibold transition-all shadow flex items-center gap-1.5 border border-gray-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.68c-.01 2.27-.85 4.54-2.42 6.18-1.57 1.64-3.8 2.59-6.07 2.61-2.27.02-4.52-.89-6.12-2.49-1.61-1.6-2.52-3.85-2.5-6.12.02-2.27.93-4.52 2.53-6.12 1.6-1.6 3.86-2.5 6.13-2.48.42.01.84.05 1.25.13v4.18c-.42-.14-.87-.22-1.32-.22-1.15-.01-2.29.44-3.11 1.25-.82.81-1.28 1.95-1.27 3.1.01 1.15.47 2.29 1.29 3.1.82.81 1.96 1.26 3.11 1.25 1.15-.01 2.29-.46 3.1-1.27.81-.82 1.26-1.96 1.25-3.11V.02z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC MỚI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('home.news_title')}</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t('home.news_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.slice(0, 4).map((article) => {
            const artTitle = language === 'en' ? (article.titleEn || article.title) : article.title;
            const artCat = language === 'en' ? (article.categoryEn || article.category) : article.category;
            const artExcerpt = language === 'en' ? (article.excerptEn || article.excerpt) : article.excerpt;

            return (
              <article
                key={article.id}
                className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-900">
                  <img
                    src={article.image}
                    alt={artTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date || '2026-10-15'}
                      </span>
                      <span className="text-[#2076bd] dark:text-[#3ba0e6] font-medium font-oswald">
                        {artCat}
                      </span>
                    </div>

                    <h3 className="font-oswald text-sm font-semibold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors line-clamp-2 leading-snug">
                      <Link to="/knowledge">{artTitle}</Link>
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {artExcerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-slate-800 mt-3 text-[11px] text-gray-400 dark:text-gray-500 flex items-center justify-between">
                    <span>{language === 'vi' ? 'Đăng bởi Cá Heo Xanh' : 'By Blue Dolphin'}</span>
                    <Link to="/knowledge" className="text-[#2076bd] dark:text-[#3ba0e6] hover:underline font-semibold font-oswald">
                      {t('knowledge.read_more')}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/knowledge"
            className="dolphy-btn dolphy-btn-outline px-8 py-3 rounded text-sm font-semibold dark:border-[#3ba0e6] dark:text-[#3ba0e6] dark:hover:bg-[#3ba0e6] dark:hover:text-white"
          >
            {t('home.view_all_news')}
          </Link>
        </div>
      </section>

      {/* 8. 10 CHI NHÁNH CỬA HÀNG */}
      <section className="bg-[#f0f8ff] dark:bg-slate-800/50 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6]">
              {t('home.finder_tag')}
            </span>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#222222] dark:text-white">
              {t('home.finder_title')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.finder_desc')}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/branches"
              className="dolphy-btn dolphy-btn-primary px-6 py-3 rounded text-sm font-semibold shadow flex items-center gap-2"
            >
              <MapPin size={16} />
              <span>{t('home.map_button')}</span>
            </Link>
            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="dolphy-btn dolphy-btn-amber px-6 py-3 rounded text-sm font-semibold shadow flex items-center gap-2"
            >
              <span>{t('home.delivery_button')}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Community Photo */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white dark:bg-[#1e293b] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 text-white bg-black/60 hover:bg-black/80 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-[4/3] bg-black">
              <img
                src={selectedPhoto.image}
                alt={language === 'vi' ? selectedPhoto.title : selectedPhoto.titleEn}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? selectedPhoto.category : selectedPhoto.categoryEn}
                </span>
                <span className="flex items-center gap-1 text-red-500 font-semibold text-xs">
                  <Heart size={14} className="fill-red-500" />
                  <span>{selectedPhoto.likes} {t('home.community_like')}</span>
                </span>
              </div>

              <h3 className="font-oswald text-lg font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? selectedPhoto.title : selectedPhoto.titleEn}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <MapPin size={13} className="text-[#857200] dark:text-[#FAEA28]" />
                <span>{language === 'vi' ? selectedPhoto.location : selectedPhoto.locationEn}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
