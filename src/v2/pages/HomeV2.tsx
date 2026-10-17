import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Coffee, Heart, ArrowRight, CheckCircle2, Clock, MapPin, 
  ShoppingBag, Flame, Droplets, Sun, Star, Award, Compass, ExternalLink, Eye
} from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';
import { brandInfo, branchesData, coursesData } from '../../data/dolphyData';
import { cafeMenuItems, cafeCategories, flavorMoods, atmosphereStories, CafeMenuItem } from '../data/v2Data';

export const HomeV2: React.FC = () => {
  const { addToCart, showToast, language } = useDolphy();
  const [selectedMoodId, setSelectedMoodId] = useState<string>('rich');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStoryId, setActiveStoryId] = useState<string>('pet-friendly');

  const selectedMood = flavorMoods.find(m => m.id === selectedMoodId) || flavorMoods[0];
  const activeStory = atmosphereStories.find(s => s.id === activeStoryId) || atmosphereStories[0];

  const filteredMenu = activeCategory === 'all' 
    ? cafeMenuItems 
    : cafeMenuItems.filter(item => item.category === activeCategory);

  const handleAddMenuItem = (item: CafeMenuItem) => {
    // Map to CartItem
    addToCart({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      category: 'bottled-drinks',
      price: item.price,
      image: item.image,
      description: item.description,
      descriptionEn: item.descriptionEn,
    }, 1, item.temp === 'iced' ? 'Đá (Iced)' : 'Nóng (Hot)');

    showToast(
      language === 'vi' 
        ? `Đã thêm "${item.name}" vào giỏ hàng!` 
        : `Added "${item.nameEn}" to your cart!`
    );
  };

  return (
    <div className="bg-[#FAF6F0] dark:bg-[#120E0B] text-[#2A1E17] dark:text-[#EFE7DE] transition-colors duration-300">
      
      {/* 1. ARTISANAL EDITORIAL HERO */}
      <section className="relative pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E8DFC8] dark:border-[#261C14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Inspiring Coffee Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Hand-stamped heritage badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1410] text-[#D8C7B5] dark:bg-[#2A1F18] text-xs font-serif-cormorant tracking-widest uppercase border border-[#3A2D23] shadow-xs">
              <Sparkles size={13} className="text-amber-400" />
              <span>{language === 'vi' ? 'Sài Gòn • Rang Mộc Từ 2013' : 'Saigon Specialty Roasters • Est. 2013'}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif-cormorant text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1410] dark:text-[#FAF6F0] leading-[1.12] sm:leading-[1.08] break-words">
              {language === 'vi' ? (
                <>
                  Nơi giọt cà phê mộc <br />
                  <span className="italic font-normal text-[#2076bd] dark:text-[#3ba0e6]">đánh thức nhịp sống</span> <br />
                  bên hiên nhà Thảo Điền.
                </>
              ) : (
                <>
                  Where pure specialty beans <br />
                  <span className="italic font-normal text-[#2076bd] dark:text-[#3ba0e6]">awaken the gentle pulse</span> <br />
                  of Thao Dien mornings.
                </>
              )}
            </h1>

            {/* Coffee manifesto quote */}
            <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#6B5A4D] dark:text-[#B5A595] leading-relaxed max-w-2xl border-l-2 border-[#2076bd] pl-4">
              “{language === 'vi'
                ? 'Không bơ, không bắp, không hương liệu tổng hợp. Mỗi sớm mai tại Dolphy bắt đầu bằng ngọn lửa rang mộc thơm nức, tiếng máy pha Espresso 9-bar rộn rã và nụ cười chân thành của người Barista.'
                : 'Zero butter, zero artificial fillers. Every sunrise begins with fresh small-batch roasting, 9-bar Italian espresso hiss, and heartfelt smiles from passionate local baristas.'}”
            </p>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#menu-section"
                className="px-6 py-3.5 rounded-full bg-[#2076bd] hover:bg-[#165b94] text-white font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center gap-2"
              >
                <Coffee size={15} />
                <span>{language === 'vi' ? 'Xem Thực Đơn Bảng Đen' : 'Explore Cafe Menu'}</span>
              </a>

              <a
                href="#flavor-matcher"
                className="px-6 py-3.5 rounded-full bg-[#1A1410] dark:bg-[#281F18] hover:bg-black text-amber-300 font-oswald text-xs uppercase tracking-wider font-bold transition-all border border-[#3A2D23] flex items-center gap-2"
              >
                <Flame size={15} className="text-amber-400" />
                <span>{language === 'vi' ? 'Chọn Vị Gu Của Bạn' : 'Taste Matcher'}</span>
              </a>

              <Link
                to="/v2/story"
                className="px-4 py-3.5 rounded-full text-[#4A3B30] dark:text-[#C5B7A9] hover:text-[#1A1410] dark:hover:text-white font-oswald text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'vi' ? 'Câu chuyện 13 năm' : 'Heritage Story'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Quick badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#705F52] dark:text-[#9E8E80] font-mono border-t border-[#E8DFC8]/60 dark:border-[#261C14]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#2076bd]" /> 100% Cà phê mộc nguyên bản
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#2076bd]" /> 10 Chi nhánh xanh & Hồ Koi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#2076bd]" /> Thân thiện thú cưng (Pet-friendly)
              </span>
            </div>

          </div>

          {/* Right Column: Multi-layer Authentic Photo Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo: 28 Thao Dien Live Patio & Lush Greenery */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#241A14] aspect-[4/5] bg-stone-900">
                <img
                  src="/images/fanpage/branch-28-thao-dien-clean.jpg"
                  alt="Dolphy Thảo Điền Patio"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="font-oswald text-xs uppercase tracking-widest text-amber-300 font-bold">
                    28 Thảo Điền Flagship
                  </span>
                  <p className="font-serif-cormorant text-xl font-bold">
                    Không gian mở ngập bóng cây xanh & hồ cá Koi
                  </p>
                </div>
              </div>

              {/* Floating Layer 1: Hand-poured Swan Latte Art */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#241A14] bg-white dark:bg-[#1E1712] p-2.5 transition-transform hover:scale-105 duration-300">
                <div className="aspect-square rounded-xl overflow-hidden bg-stone-800 mb-2">
                  <img
                    src="/images/fanpage/academy-signature-rose-latte.jpg"
                    alt="Signature Rose Latte"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-1 text-left">
                  <span className="text-[10px] font-oswald uppercase text-[#2076bd] font-bold block">Espresso Art</span>
                  <p className="font-serif-cormorant font-bold text-xs sm:text-sm text-[#1A1410] dark:text-[#EFE7DE] leading-tight">
                    Nghệ thuật rót bọt sữa Micro-foam
                  </p>
                </div>
              </div>

              {/* Floating Layer 2: Pet-friendly Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 rounded-2xl bg-[#1A1410] text-white p-3 sm:p-4 shadow-xl border border-[#3A2D23] max-w-[170px] text-left">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Heart size={14} fill="currentColor" />
                  <span className="font-oswald text-[10px] uppercase font-bold tracking-wider">Pet-Friendly</span>
                </div>
                <p className="font-serif-cormorant text-xs text-[#D8C7B5] leading-snug">
                  Góc hiên chào đón chú cún & mèo cưng mỗi ngày.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE TASTE & FLAVOR MATCHER */}
      <section id="flavor-matcher" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-serif-cormorant italic tracking-widest text-[#2076bd] uppercase font-bold">
            {language === 'vi' ? 'Trải Nghiệm Hương Vị Độc Bản' : 'Curated Tasting Experience'}
          </span>
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
            {language === 'vi' ? 'Hôm Nay Bạn Muốn Thưởng Thức Vị Nào?' : 'What Flavor Inspires Your Mood Today?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5A4D] dark:text-[#A8988B]">
            {language === 'vi' 
              ? 'Chọn cảm xúc và hương vị bạn yêu thích để Barista Dolphy gợi ý món uống chuẩn xác nhất cho bạn.'
              : 'Select your preferred mood to let our Baristas match the exact handcrafted cup for you.'}
          </p>
        </div>

        {/* 4 Mood Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {flavorMoods.map((mood) => {
            const active = selectedMoodId === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMoodId(mood.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[140px] relative group ${
                  active
                    ? 'bg-[#1A1410] text-white border-[#1A1410] dark:bg-[#261C14] dark:border-amber-500/50 shadow-xl ring-2 ring-amber-400/30'
                    : 'bg-white dark:bg-[#1A1410] text-[#3A2D23] dark:text-[#D5C7B5] border-[#E8DFC8] dark:border-[#2C2219] hover:border-[#2076bd]/60 shadow-xs'
                }`}
              >
                <div>
                  <span className="text-2xl mb-2 block">{mood.icon}</span>
                  <h4 className={`font-serif-cormorant text-base sm:text-lg font-bold leading-tight ${active ? 'text-amber-300' : 'text-[#1A1410] dark:text-white'}`}>
                    {language === 'vi' ? mood.title : mood.titleEn}
                  </h4>
                  <p className={`text-[11px] mt-1.5 leading-relaxed line-clamp-2 ${active ? 'text-[#C9BAA9]' : 'text-[#7D6B5E] dark:text-[#998777]'}`}>
                    {language === 'vi' ? mood.desc : mood.descEn}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono">
                  <span className={active ? 'text-amber-400 font-bold' : 'text-[#2076bd]'}>{mood.roast}</span>
                  <span className="opacity-60">{active ? '● Đang chọn' : '○ Chạm xem'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Drink Spotlight Showcase */}
        {selectedMood && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1612] border border-[#E8DFC8] dark:border-[#2B2018] shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden bg-stone-900 shadow-md">
              <img
                src={selectedMood.matchImage}
                alt={selectedMood.matchName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2076bd]/15 text-[#2076bd] dark:text-[#3ba0e6] font-oswald text-[10px] uppercase font-bold tracking-wider">
                  Món Gợi Ý Hoàn Hảo Cho Bạn
                </span>
                <span className="text-xs font-mono text-[#8C7A6B]">Nguồn hạt: {selectedMood.bean}</span>
              </div>

              <h3 className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                {selectedMood.matchName}
              </h3>

              <p className="font-serif-cormorant italic text-base text-[#6B5A4D] dark:text-[#B5A595]">
                {selectedMood.desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const matchItem = cafeMenuItems.find(i => i.id === selectedMood.matchId) || cafeMenuItems[0];
                    handleAddMenuItem(matchItem);
                  }}
                  className="px-6 py-3 rounded-full bg-[#2076bd] hover:bg-[#165b94] text-white font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <ShoppingBag size={14} />
                  <span>{language === 'vi' ? 'Thưởng Thức Món Này Ngay' : 'Order This Drink'}</span>
                </button>

                <a
                  href="#menu-section"
                  className="px-5 py-3 rounded-full border border-[#D5C7B5] dark:border-[#3A2D23] text-xs font-oswald uppercase tracking-wider font-semibold hover:border-[#2076bd] transition-colors"
                >
                  {language === 'vi' ? 'Xem Toàn Bộ Menu' : 'View Full Menu'}
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. THE CHALKBOARD CAFE MENU */}
      <section id="menu-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-[#E8DFC8] dark:border-[#261C14] bg-[#F4EDE2] dark:bg-[#16110D]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 text-left">
              <span className="text-xs font-serif-cormorant italic tracking-widest text-[#2076bd] uppercase font-bold">
                {language === 'vi' ? 'Thực Đơn Quầy Bar' : 'Live Counter Menu'}
              </span>
              <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                {language === 'vi' ? 'Bảng Menu Quán Thảo Điền' : 'The Artisanal Chalkboard Menu'}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5A4D] dark:text-[#A8988B] max-w-xl">
                {language === 'vi'
                  ? 'Chiết xuất từ hạt mộc nguyên chất, rang mới hàng tuần và sữa tươi thanh trùng đánh nóng đạt chuẩn.'
                  : 'Handcrafted drinks poured with fresh-roasted single origins and velvety farm milk.'}
              </p>
            </div>

            <a
              href="https://dolphycoffee.cukcuk.vn/order-online/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1410] text-amber-300 font-oswald text-xs uppercase tracking-wider font-bold shadow-md hover:bg-black transition-colors shrink-0"
            >
              <span>{language === 'vi' ? 'Giao Hàng Tận Nơi (CukCuk) ↗' : 'Online Delivery ↗'}</span>
            </a>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            {cafeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow-md'
                    : 'bg-white dark:bg-[#201813] text-[#4A3B30] dark:text-[#C5B7A9] border border-[#E8DFC8] dark:border-[#2C2219] hover:border-[#2076bd]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{language === 'vi' ? cat.name : cat.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#1C1612] border border-[#E8DFC8] dark:border-[#2B2018] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1A1410]/80 backdrop-blur-sm text-amber-300 font-oswald text-[10px] uppercase font-bold tracking-wider">
                        {language === 'vi' ? item.badge : item.badgeEn}
                      </span>
                    )}
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 text-white font-mono text-[10px]">
                      {item.temp === 'both' ? 'Hot & Iced' : item.temp === 'iced' ? 'Iced only' : 'Hot only'}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-cormorant text-xl font-bold text-[#1A1410] dark:text-[#FAF6F0] leading-snug group-hover:text-[#2076bd] transition-colors">
                        {language === 'vi' ? item.name : item.nameEn}
                      </h3>
                      <span className="font-serif-cormorant text-xl font-bold text-[#2076bd] dark:text-[#3ba0e6] shrink-0">
                        {item.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>

                    <p className="text-xs text-[#705F52] dark:text-[#A8988B] leading-relaxed line-clamp-2">
                      {language === 'vi' ? item.description : item.descriptionEn}
                    </p>

                    <div className="p-2.5 rounded-lg bg-[#FAF6F0] dark:bg-[#150F0C] text-[11px] font-mono text-[#8C7A6B] dark:text-[#9A8979] border border-[#E8DFC8]/60 dark:border-[#261C14]">
                      <strong>{language === 'vi' ? 'Hương vị:' : 'Notes:'}</strong> {language === 'vi' ? item.flavorNotes : item.flavorNotesEn}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8DFC8]/60 dark:border-[#2B2018] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8C7A6B]">
                    {item.sizes ? item.sizes.join(' • ') : 'Standard Cup'}
                  </span>

                  <button
                    onClick={() => handleAddMenuItem(item)}
                    className="px-4 py-2 rounded-full bg-[#2076bd] hover:bg-[#165b94] text-white font-oswald text-xs uppercase tracking-wider font-bold transition-colors shadow-xs flex items-center gap-1.5"
                  >
                    <ShoppingBag size={13} />
                    <span>{language === 'vi' ? 'Gọi món' : 'Order'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE THAO DIEN LIVING ROOM & PET-FRIENDLY CULTURE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-serif-cormorant italic tracking-widest text-[#2076bd] uppercase font-bold">
            {language === 'vi' ? 'Nếp Sống Cộng Đồng' : 'Community & Soul'}
          </span>
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
            {language === 'vi' ? 'Không Gian Mở Bên Hiên Nhà Sài Gòn' : 'The Living Room of Thao Dien'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5A4D] dark:text-[#A8988B]">
            {language === 'vi'
              ? 'Hơn 13 năm qua, Dolphy là nơi cư dân Thảo Điền đưa thú cưng đi dạo, gia đình ngắm đàn cá Koi và bạn bè quốc tế cùng sẻ chia những câu chuyện chân thành.'
              : 'For over 13 years, Dolphy has been the sanctuary where furry friends relax, families admire tranquil Koi ponds, and locals connect over fresh morning drip.'}
          </p>
        </div>

        {/* Story Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {atmosphereStories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                activeStoryId === story.id
                  ? 'bg-[#1A1410] text-amber-300 dark:bg-[#FAF6F0] dark:text-[#1A1410] shadow-md'
                  : 'bg-white dark:bg-[#1C1612] text-[#4A3B30] dark:text-[#C5B7A9] border border-[#E8DFC8] dark:border-[#2C2219] hover:border-[#2076bd]'
              }`}
            >
              {language === 'vi' ? story.title : story.titleEn}
            </button>
          ))}
        </div>

        {/* Active Story Feature Card */}
        {activeStory && (
          <div className="rounded-3xl bg-white dark:bg-[#1A1410] border border-[#E8DFC8] dark:border-[#2B2018] p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md bg-stone-900">
                <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md bg-stone-900 mt-6">
                <img src={activeStory.secondaryImage} alt={activeStory.subtitle} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-[#c88232] font-mono text-xs font-bold uppercase tracking-wider">
                {activeStory.stat}
              </span>

              <h3 className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#1A1410] dark:text-[#FAF6F0] leading-tight">
                {language === 'vi' ? activeStory.title : activeStory.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-[#705F52] dark:text-[#B5A595] leading-relaxed">
                {language === 'vi' ? activeStory.desc : activeStory.descEn}
              </p>

              <blockquote className="font-serif-cormorant italic text-base sm:text-lg text-[#2076bd] dark:text-[#3ba0e6] border-l-2 border-[#2076bd] pl-4">
                {activeStory.quote}
              </blockquote>

              <div className="pt-2">
                <Link
                  to="/v2/story"
                  className="inline-flex items-center gap-2 font-oswald text-xs uppercase tracking-wider font-bold text-[#1A1410] dark:text-amber-400 hover:text-[#2076bd] transition-colors"
                >
                  <span>{language === 'vi' ? 'Đọc Toàn Bộ Ký Sự Thảo Điền' : 'Read Full Heritage Journal'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5. THE 10 NEIGHBORHOOD OASES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E8DFC8] dark:border-[#261C14] bg-[#F7F1E6] dark:bg-[#140F0C]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 text-left">
              <span className="text-xs font-serif-cormorant italic tracking-widest text-[#2076bd] uppercase font-bold">
                {language === 'vi' ? 'Bản Đồ 10 Quán Sài Gòn' : '10 Green Neighborhood Hubs'}
              </span>
              <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                {language === 'vi' ? 'Ghé Thăm Không Gian Gần Bạn' : 'Find Your Favorite Corner'}
              </h2>
            </div>

            <a
              href={brandInfo.mapEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-oswald uppercase tracking-wider font-bold text-[#2076bd] dark:text-[#3ba0e6] hover:underline flex items-center gap-1.5"
            >
              <span>{language === 'vi' ? 'Xem Google Maps Toàn Hệ Thống ↗' : 'View Full Google Maps ↗'}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchesData.slice(0, 6).map((branch) => (
              <div
                key={branch.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-[#1C1612] border border-[#E8DFC8] dark:border-[#2B2018] shadow-xs hover:shadow-lg transition-all group text-left"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-900 relative">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1A1410]/80 backdrop-blur-sm text-white font-oswald text-[10px] uppercase font-bold tracking-wider">
                    {branch.area.includes('Quận 2') ? 'Thảo Điền' : branch.area.includes('Quận 7') ? 'Phú Mỹ Hưng' : 'Bình Thạnh'}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-serif-cormorant text-xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                    {branch.name}
                  </h3>

                  <p className="text-xs text-[#705F52] dark:text-[#A8988B] flex items-start gap-1.5 leading-relaxed">
                    <MapPin size={14} className="text-[#2076bd] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </p>

                  <p className="text-xs text-[#705F52] dark:text-[#A8988B] flex items-center gap-1.5">
                    <Clock size={14} className="text-[#2076bd] shrink-0" />
                    <span>06:30 - 22:30 mỗi ngày</span>
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E8DFC8]/60 dark:border-[#2B2018] text-xs">
                    <a
                      href={`tel:${branch.phone}`}
                      className="font-mono text-amber-500 hover:underline font-bold"
                    >
                      {branch.phone}
                    </a>

                    <a
                      href={brandInfo.mapEmbedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-oswald uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Chỉ đường</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE BARISTA ATELIER & JUNIOR CHAMPIONSHIP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#1A1410] via-[#241A14] to-[#140F0C] text-white p-8 sm:p-14 border border-[#3A2D23] shadow-2xl relative overflow-hidden text-left">
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-serif-cormorant text-xs uppercase tracking-widest font-bold border border-amber-400/30">
              <Award size={14} />
              <span>Dolphy Barista Academy • Junior Championship 2024</span>
            </span>

            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold leading-tight text-[#FAF6F0]">
              Ươm mầm tài năng pha chế <br />
              <span className="italic font-normal text-amber-400">thực chiến 100% tại quầy bar</span>.
            </h2>

            <p className="font-serif-cormorant italic text-base sm:text-xl text-[#D8C7B5] leading-relaxed max-w-2xl">
              “Chúng tôi tin rằng lý thuyết hay nhất nằm ngay sau chiếc máy pha 2-group rít hơi nóng và nụ cười hài lòng của khách hàng vào giờ cao điểm.”
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="font-serif-cormorant text-2xl font-bold text-amber-300 block">100%</span>
                <span className="text-gray-300 font-mono">Đứng quầy thật</span>
              </div>
              <div>
                <span className="font-serif-cormorant text-2xl font-bold text-amber-300 block">4 - 6</span>
                <span className="text-gray-300 font-mono">Học viên/lớp</span>
              </div>
              <div>
                <span className="font-serif-cormorant text-2xl font-bold text-amber-300 block">10 Quán</span>
                <span className="text-gray-300 font-mono">Ưu tiên việc làm</span>
              </div>
              <div>
                <span className="font-serif-cormorant text-2xl font-bold text-amber-300 block">0 Đồng</span>
                <span className="text-gray-300 font-mono">Ràng buộc độc quyền</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/v2/academy"
                className="px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-[#1A1410] font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-lg"
              >
                Khám Phá 4 Khóa Đào Tạo ➜
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
