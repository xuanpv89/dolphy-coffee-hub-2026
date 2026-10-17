import React, { useState } from 'react';
import { Coffee, ShoppingBag, Sparkles, Filter, ExternalLink, Flame, Info } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';
import { cafeMenuItems, cafeCategories, CafeMenuItem } from '../data/v2Data';

export const MenuV2: React.FC = () => {
  const { addToCart, showToast, language } = useDolphy();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedTemp, setSelectedTemp] = useState<'all' | 'hot' | 'iced'>('all');

  const filteredItems = cafeMenuItems.filter(item => {
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    const matchTemp = selectedTemp === 'all' || item.temp === 'both' || item.temp === selectedTemp;
    return matchCat && matchTemp;
  });

  const handleAdd = (item: CafeMenuItem) => {
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
    <div className="bg-[#FAF6F0] dark:bg-[#120E0B] text-[#2A1E17] dark:text-[#EFE7DE] min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Editorial Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] text-amber-300 font-serif-cormorant text-xs uppercase tracking-widest font-bold">
            <Sparkles size={13} />
            <span>{language === 'vi' ? 'Thực Đơn Quầy Bar Thảo Điền' : 'Live Counter Blackboard Menu'}</span>
          </div>

          <h1 className="font-serif-cormorant text-4xl sm:text-6xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
            {language === 'vi' ? 'Hương Vị Sài Gòn & Cà Phê Mộc' : 'Saigon Flavors & Specialty Coffee'}
          </h1>

          <p className="font-serif-cormorant italic text-base sm:text-lg text-[#6B5A4D] dark:text-[#B5A595]">
            “{language === 'vi'
              ? 'Tất cả thức uống đều được chiết xuất từ hạt mộc nguyên chất, phối trộn theo công thức độc quyền Dolphy 13 năm qua.'
              : 'Every single cup is extracted from 100% pure roasted beans with zero artificial flavorings.'}”
          </p>
        </div>

        {/* Filter Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1612] border border-[#E8DFC8] dark:border-[#2B2018] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {cafeCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                  selectedCat === c.id
                    ? 'bg-[#2076bd] text-white shadow-xs'
                    : 'bg-[#F5EFEB] dark:bg-[#251C16] text-[#4A3B30] dark:text-[#C5B7A9] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{c.icon} </span>
                <span>{language === 'vi' ? c.name : c.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Hot / Iced Filter */}
          <div className="flex items-center gap-1.5 bg-[#F5EFEB] dark:bg-[#251C16] p-1 rounded-full text-xs font-oswald uppercase font-bold shrink-0">
            <button
              onClick={() => setSelectedTemp('all')}
              className={`px-3 py-1 rounded-full transition-all ${selectedTemp === 'all' ? 'bg-[#1A1410] text-white' : 'text-[#7D6B5E]'}`}
            >
              {language === 'vi' ? 'Tất cả' : 'All'}
            </button>
            <button
              onClick={() => setSelectedTemp('hot')}
              className={`px-3 py-1 rounded-full transition-all ${selectedTemp === 'hot' ? 'bg-[#1A1410] text-amber-300' : 'text-[#7D6B5E]'}`}
            >
              🔥 Hot
            </button>
            <button
              onClick={() => setSelectedTemp('iced')}
              className={`px-3 py-1 rounded-full transition-all ${selectedTemp === 'iced' ? 'bg-[#1A1410] text-cyan-300' : 'text-[#7D6B5E]'}`}
            >
              🧊 Iced
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
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
                  onClick={() => handleAdd(item)}
                  className="px-4 py-2 rounded-full bg-[#2076bd] hover:bg-[#165b94] text-white font-oswald text-xs uppercase tracking-wider font-bold transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <ShoppingBag size={13} />
                  <span>{language === 'vi' ? 'Gọi món' : 'Order'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cukcuk order callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1A1410] to-[#2B1D15] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2">
            <span className="font-oswald text-xs uppercase tracking-widest text-amber-300 font-bold">
              Giao Hàng Tận Nơi Toàn TP.HCM
            </span>
            <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold">
              Thưởng thức cà phê mộc Dolphy ngay tại nhà hoặc văn phòng
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C7B5]">
              Đóng gói túi đá riêng, giữ trọn vẹn hương vị espresso và kem béo nguyên bản trong 45 phút.
            </p>
          </div>

          <a
            href="https://dolphycoffee.cukcuk.vn/order-online/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-[#1A1410] font-oswald text-xs uppercase tracking-wider font-bold shadow-lg transition-all shrink-0"
          >
            Mở CukCuk Delivery ↗
          </a>
        </div>

      </div>
    </div>
  );
};
