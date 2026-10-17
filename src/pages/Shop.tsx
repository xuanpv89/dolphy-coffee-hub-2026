import React, { useState } from 'react';
import { Search, ShoppingBag, Gift } from 'lucide-react';
import { productsData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { CartItem } from '../types';

export const Shop: React.FC = () => {
  const { addToCart, showToast, t, language } = useDolphy();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Local grind selections per product
  const [grindOptions, setGrindOptions] = useState<{ [productId: string]: CartItem['grindOption'] }>({});

  const handleGrindChange = (productId: string | number, option: CartItem['grindOption']) => {
    setGrindOptions(prev => ({ ...prev, [productId]: option }));
  };

  // Filtered & sorted products
  const filtered = productsData.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const categories = [
    { id: 'all', name: t('shop.filter_all') },
    { id: 'coffee-bag', name: t('shop.filter_beans') },
    { id: 'combo', name: t('shop.filter_combos') },
    { id: 'equipment', name: t('shop.filter_phin') }
  ];

  return (
    <div className="space-y-12 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            {t('shop.hero_tag')}
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            {t('shop.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            {t('shop.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-[#1e293b] p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-oswald tracking-wider font-semibold transition-all uppercase ${
                  selectedCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-60">
              <input
                type="text"
                placeholder={t('shop.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-800 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
              <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded border border-gray-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 font-oswald"
            >
              <option value="default">{t('shop.sort_default')}</option>
              <option value="price-asc">{t('shop.sort_price_asc')}</option>
              <option value="price-desc">{t('shop.sort_price_desc')}</option>
            </select>
          </div>
        </div>

        {/* Promo Gift Banner */}
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/40 flex items-center justify-between gap-4 text-xs sm:text-sm text-orange-950 dark:text-orange-200">
          <div className="flex items-center gap-2">
            <Gift className="text-[#f09c05] shrink-0" size={20} />
            <span>
              <strong>{language === 'vi' ? 'Ưu đãi độc quyền Dolphy:' : 'Dolphy Exclusive Offer:'}</strong> {t('shop.promo_text')}
            </span>
          </div>
          <button 
            onClick={() => setSelectedCategory('combo')}
            className="hidden sm:inline-block font-oswald uppercase text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6] hover:underline shrink-0"
          >
            {t('shop.promo_link')}
          </button>
        </div>

        {/* Products Grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {t('shop.empty_result')}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sorted.map((product) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-slate-900">
                      <img
                        src={product.image || product.images?.[0]}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-[#f09c05] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                          {product.badge}
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="absolute top-2 right-2 bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                          {t('shop.badge_bestseller')}
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#f09c05] font-bold">
                          {'★'.repeat(5)}
                        </span>
                        <span className="text-gray-400 dark:text-gray-500 text-[11px] font-oswald">{product.origin || 'Việt Nam'}</span>
                      </div>

                      <h3 className="font-oswald text-base font-semibold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors leading-snug line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Grind Selector if beans */}
                      {product.category === 'beans' || product.category === 'coffee-bag' ? (
                        <div className="pt-2">
                          <label className="block text-[11px] font-medium text-gray-600 dark:text-gray-300 mb-1 font-oswald uppercase">
                            {t('shop.grind_label')}
                          </label>
                          <select
                            value={selectedGrind}
                            onChange={(e: any) => handleGrindChange(product.id, e.target.value)}
                            className="w-full px-2.5 py-1.5 text-xs rounded border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                          >
                            <option value={language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)'}>
                              {language === 'vi' ? 'Nguyên hạt (Cho máy Espresso)' : 'Whole Bean (For Espresso Machine)'}
                            </option>
                            <option value={language === 'vi' ? 'Xay Pha Phin' : 'Ground for Phin'}>
                              {language === 'vi' ? 'Xay vừa (Pha Phin truyền thống)' : 'Medium (Traditional Phin Drip)'}
                            </option>
                            <option value={language === 'vi' ? 'Xay Cold Brew' : 'Ground for Cold Brew'}>
                              {language === 'vi' ? 'Xay thô (Pha Cold Brew / Ủ lạnh)' : 'Coarse (Cold Brew Steep)'}
                            </option>
                            <option value={language === 'vi' ? 'Xay V60 / Pour Over' : 'Ground for Pour Over'}>
                              {language === 'vi' ? 'Xay mịn vừa (Pha Pour Over / V60)' : 'Medium-Fine (Pour Over / V60)'}
                            </option>
                          </select>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Footer / Buy Action */}
                  <div className="p-4 pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 dark:text-gray-500 block font-oswald">{t('shop.unit_price')}</span>
                      <span className="font-oswald text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${product.name}" vào giỏ hàng!` : `Added "${product.name}" to cart!`);
                      }}
                      className="px-4 py-2 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <ShoppingBag size={14} />
                      <span>{t('shop.select_btn')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Retail Experience & B2B Catering Showcase */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-800 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'TRẢI NGHIỆM ĐỘC QUYỀN TẠI QUẦN DOLPHY' : 'EXCLUSIVE IN-STORE & CATERING'}
            </span>
            <h2 className="section-title">
              {language === 'vi' ? 'CÀ PHÊ HẠT MỘC & DỊCH VỤ DOANH NGHIỆP B2B' : 'SPECIALTY COFFEE & CORPORATE CATERING'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'vi'
                ? 'Không chỉ thưởng thức tại chỗ, bạn có thể mua cà phê hạt mộc nguyên chất và đặt tiệc Teabreak trọn gói cho công ty.'
                : 'Experience fresh pure beans in-store or elevate your office events with full-service coffee and pastry catering.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Retail Shelf & Bakery */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/images/fanpage/retail-beans-bakery-display.jpg"
                  alt="Kệ cà phê hạt mộc và tủ bánh Dolphy Bakery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#f09c05]">
                    {language === 'vi' ? 'Quầy Trưng Bày Thực Tế' : 'In-Store Retail Display'}
                  </span>
                  <h3 className="font-oswald text-xl font-bold uppercase text-[#222222] dark:text-white">
                    {language === 'vi' ? 'Kệ Cà Phê Hạt Mộc & Dolphy Bakery' : 'Pure Specialty Beans & Fresh Pastries'}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {language === 'vi'
                      ? '100% hạt Arabica Cầu Đất và Robusta Bảo Lộc mộc nguyên chất, đóng gói túi van 1 chiều đạt chuẩn. Đi kèm tủ bánh ngọt nướng tươi nóng giòn mỗi sáng tại các chi nhánh.'
                      : '100% pure Cau Dat Arabica and Bao Loc Robusta in degas-valve bags, paired with warm artisan French pastries baked daily.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-oswald">
                    {language === 'vi' ? 'Có sẵn tại 10 chi nhánh' : 'Available across 10 stores'}
                  </span>
                  <a
                    href="https://dolphycoffee.cukcuk.vn/order-online/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-oswald uppercase text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline"
                  >
                    {language === 'vi' ? 'Đặt giao tận nơi CukCuk →' : 'Order Delivery →'}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Teabreak & Event Catering */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/images/fanpage/retail-teabreak-catering.jpg"
                  alt="Dịch vụ tiệc Teabreak sự kiện Dolphy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                    {language === 'vi' ? 'Dịch Vụ Doanh Nghiệp' : 'B2B Corporate Service'}
                  </span>
                  <h3 className="font-oswald text-xl font-bold uppercase text-[#222222] dark:text-white">
                    {language === 'vi' ? 'Setup Tiệc Teabreak & Cà Phê Sự Kiện' : 'Corporate Teabreak & Event Station'}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {language === 'vi'
                      ? 'Giải pháp đồ uống trọn gói cho hội nghị, sự kiện ra mắt, tiếp sức làm việc cho đối tác doanh nghiệp lớn (Prudential Tower, giải thể thao Spartan, các trường quốc tế).'
                      : 'End-to-end beverage setup for conferences, company town halls, and sports events with live barista stations.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400 font-oswald">
                    Hotline B2B: <strong>0938 084 985</strong>
                  </span>
                  <a
                    href="mailto:contact@dolphycafe.com"
                    className="font-oswald uppercase text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline"
                  >
                    {language === 'vi' ? 'Nhận báo giá sự kiện →' : 'Request Event Quote →'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
