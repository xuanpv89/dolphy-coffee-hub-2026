import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Search, ShoppingBag, Gift, Eye, X, Check, ExternalLink, ChevronLeft, ChevronRight, SlidersHorizontal, Coffee } from 'lucide-react';
import { productsData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { CartItem, Product } from '../types';

export const Shop: React.FC = () => {
  const { addToCart, showToast, t, language } = useDolphy();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'bestseller'>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  // Quick View Modal
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalActiveImage, setModalActiveImage] = useState<string>('');

  // Local grind selections per product
  const [grindOptions, setGrindOptions] = useState<{ [productId: string]: CartItem['grindOption'] }>({});

  const handleGrindChange = (productId: string | number, option: CartItem['grindOption']) => {
    setGrindOptions(prev => ({ ...prev, [productId]: option }));
  };

  // Dynamic Category counts
  const counts = useMemo(() => {
    return {
      all: productsData.length,
      'coffee-bag': productsData.filter(p => p.category === 'coffee-bag').length,
      'bottled-drinks': productsData.filter(p => p.category === 'bottled-drinks').length,
      bakery: productsData.filter(p => p.category === 'bakery').length,
      equipment: productsData.filter(p => p.category === 'equipment').length,
      combo: productsData.filter(p => p.category === 'combo').length,
    };
  }, []);

  const categories = [
    { id: 'all', name: t('shop.filter_all'), count: counts.all },
    { id: 'coffee-bag', name: t('shop.filter_beans'), count: counts['coffee-bag'] },
    { id: 'bottled-drinks', name: t('shop.filter_drinks'), count: counts['bottled-drinks'] },
    { id: 'bakery', name: t('shop.filter_bakery'), count: counts.bakery },
    { id: 'equipment', name: t('shop.filter_equipment'), count: counts.equipment },
    { id: 'combo', name: t('shop.filter_combos'), count: counts.combo }
  ];

  // Filtered & sorted products
  const filtered = useMemo(() => {
    return productsData.filter(p => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.origin && p.origin.toLowerCase().includes(searchQuery.toLowerCase()));
      
      let matchPrice = true;
      if (priceRange === 'under-100k') matchPrice = p.price < 100000;
      else if (priceRange === '100k-300k') matchPrice = p.price >= 100000 && p.price <= 300000;
      else if (priceRange === '300k-700k') matchPrice = p.price > 300000 && p.price <= 700000;
      else if (priceRange === 'above-700k') matchPrice = p.price > 700000;

      return matchCategory && matchSearch && matchPrice;
    });
  }, [selectedCategory, searchQuery, priceRange]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (sortBy === 'price-asc') return list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') return list.sort((a, b) => b.price - a.price);
    if (sortBy === 'bestseller') return list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    return list;
  }, [filtered, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sorted.slice(start, start + itemsPerPage);
  }, [sorted, currentPage]);

  const openQuickView = (prod: Product) => {
    setModalProduct(prod);
    setModalActiveImage(prod.image || prod.images?.[0] || '');
  };

  return (
    <div className="space-y-12 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* 1. Header Banner */}
      <section className="reveal-on-scroll bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero_slide_beans.webp')" }} />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold shadow">
            <Coffee size={14} />
            <span>{t('shop.hero_tag')}</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            {t('shop.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('shop.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Filter & Search Control Panel */}
        <div className="reveal-on-scroll bg-white dark:bg-[#1e293b] p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm space-y-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-oswald tracking-wider font-semibold transition-all uppercase flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow-md'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/30 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search, Price Range & Sorting */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-gray-100 dark:border-slate-800 text-xs">
            {/* Search */}
            <div className="sm:col-span-5 relative">
              <input
                type="text"
                placeholder={t('shop.search_placeholder')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-800 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
              <Search size={15} className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Price Filter */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-gray-400 shrink-0 hidden sm:block" />
              <select
                value={priceRange}
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#2076bd] font-oswald"
              >
                <option value="all">{language === 'vi' ? 'Mức giá: Tất cả mức giá' : 'Price: All Ranges'}</option>
                <option value="under-100k">{language === 'vi' ? 'Dưới 100.000đ (Bánh & Đồ uống)' : 'Under 100k (Drinks & Bakery)'}</option>
                <option value="100k-300k">{language === 'vi' ? '100.000đ – 300.000đ (Cà phê gói 250g & Dụng cụ)' : '100k – 300k (250g Beans & Merch)'}</option>
                <option value="300k-700k">{language === 'vi' ? '300.000đ – 700.000đ (Gói 500g & Combo)' : '300k – 700k (500g Bags & Combos)'}</option>
                <option value="above-700k">{language === 'vi' ? 'Trên 700.000đ (Quà Tết & Tiệc B2B)' : 'Above 700k (Gifts & B2B Catering)'}</option>
              </select>
            </div>

            {/* Sort */}
            <div className="sm:col-span-3">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#2076bd] font-oswald"
              >
                <option value="default">{t('shop.sort_default')}</option>
                <option value="bestseller">{t('shop.sort_bestseller')}</option>
                <option value="price-asc">{t('shop.sort_price_asc')}</option>
                <option value="price-desc">{t('shop.sort_price_desc')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Promo Gift Banner */}
        <div className="reveal-scale p-4 rounded-xl bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-800/60 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2076bd] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Gift size={18} />
            </div>
            <span>
              <strong className="text-[#2076bd] dark:text-[#3ba0e6] font-semibold">{language === 'vi' ? 'Ưu đãi độc quyền Dolphy:' : 'Dolphy Exclusive Privilege:'}</strong> {t('shop.promo_text')}
            </span>
          </div>
          <button 
            onClick={() => setSelectedCategory('combo')}
            className="dolphy-btn dolphy-btn-primary px-3.5 py-1.5 rounded text-xs font-oswald uppercase tracking-wider shrink-0 hover-lift"
          >
            {t('shop.promo_link')}
          </button>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>
            {language === 'vi' 
              ? `Hiển thị ${Math.min((currentPage - 1) * itemsPerPage + 1, sorted.length)} - ${Math.min(currentPage * itemsPerPage, sorted.length)} trong tổng số ${sorted.length} sản phẩm`
              : `Showing ${Math.min((currentPage - 1) * itemsPerPage + 1, sorted.length)} - ${Math.min(currentPage * itemsPerPage, sorted.length)} of ${sorted.length} products`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#2076bd] hover:underline"
            >
              {language === 'vi' ? 'Xóa tìm kiếm' : 'Clear search'}
            </button>
          )}
        </div>

        {/* Products Grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-slate-800/40 rounded-xl space-y-3 text-gray-500 dark:text-gray-400">
            <p className="text-base font-semibold">{t('shop.empty_result')}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPriceRange('all');
              }}
              className="dolphy-btn dolphy-btn-primary px-5 py-2 rounded text-xs uppercase font-oswald"
            >
              {language === 'vi' ? 'Xem lại tất cả' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {paginatedProducts.map((product) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;
              const pName = language === 'en' ? (product.nameEn || product.name) : product.name;
              const pDesc = language === 'en' ? (product.descriptionEn || product.description) : product.description;
              const pCatName = language === 'en' ? (product.categoryNameEn || product.categoryName) : product.categoryName;
              const pOrigin = language === 'en' ? (product.originEn || product.origin) : product.origin;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden hover-lift hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image with quick view button */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-slate-900 cursor-pointer" onClick={() => openQuickView(product)}>
                      <img
                        src={product.image || product.images?.[0]}
                        alt={pName}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Best Seller Badge */}
                      {product.isBestSeller && (
                        <span className="absolute top-2.5 right-2.5 bg-[#FAEA28] text-slate-950 text-[10px] font-oswald uppercase tracking-wider font-extrabold px-2 py-0.5 rounded shadow">
                          {t('shop.badge_bestseller')}
                        </span>
                      )}

                      {/* Category Badge top-left */}
                      <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-oswald uppercase tracking-wider font-semibold px-2 py-0.5 rounded">
                        {pCatName}
                      </span>

                      {/* Quick View Overlay Button */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white text-[#222222] text-xs font-oswald uppercase tracking-wider font-bold shadow-lg flex items-center gap-1 hover:bg-[#2076bd] hover:text-white transition-colors">
                          <Eye size={13} />
                          <span>{language === 'vi' ? 'Xem chi tiết' : 'Quick View'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#FAEA28] font-bold">
                          {'★'.repeat(5)}
                        </span>
                        <span className="text-gray-400 dark:text-gray-500 text-[11px] font-oswald">{pOrigin || 'Dolphy Specialty'}</span>
                      </div>

                      <h3 
                        onClick={() => openQuickView(product)}
                        className="font-oswald text-base font-semibold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors leading-snug line-clamp-2 cursor-pointer"
                      >
                        {pName}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {pDesc}
                      </p>

                      {/* Taste notes badges if any */}
                      {product.tasteNotes && product.tasteNotes.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {product.tasteNotes.slice(0, 2).map((note, nIdx) => (
                            <span key={nIdx} className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] font-medium">
                              {note}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Grind Selector if beans */}
                      {product.category === 'coffee-bag' ? (
                        <div className="pt-2">
                          <label className="block text-[10px] font-medium text-gray-600 dark:text-gray-300 mb-1 font-oswald uppercase">
                            {t('shop.grind_label')}
                          </label>
                          <select
                            value={selectedGrind}
                            onChange={(e: any) => handleGrindChange(product.id, e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                          >
                            <option value={language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)'}>
                              {language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)'}
                            </option>
                            <option value={language === 'vi' ? 'Xay Pha Phin' : 'Ground for Phin'}>
                              {language === 'vi' ? 'Xay Pha Phin' : 'Ground for Phin'}
                            </option>
                            <option value={language === 'vi' ? 'Xay Cold Brew' : 'Ground for Cold Brew'}>
                              {language === 'vi' ? 'Xay Cold Brew' : 'Ground for Cold Brew'}
                            </option>
                            <option value={language === 'vi' ? 'Xay V60 / Pour Over' : 'Ground for Pour Over'}>
                              {language === 'vi' ? 'Xay V60 / Pour Over' : 'Ground for Pour Over'}
                            </option>
                          </select>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Footer / Buy Action */}
                  <div className="p-4 pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 block font-oswald uppercase">{t('shop.unit_price')}</span>
                      <span className="font-oswald text-base sm:text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${product.name}" vào giỏ!` : `Added "${product.name}" to cart!`);
                      }}
                      className="px-3.5 py-2 rounded-lg bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <ShoppingBag size={13} />
                      <span>{t('shop.select_btn')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 3. Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <ChevronLeft size={16} />
            </button>
            
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-9 h-9 rounded-lg font-oswald text-xs font-bold transition-all ${
                  currentPage === idx + 1
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* 4. Retail Experience & B2B Catering Showcase */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-800 space-y-10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <p className="text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'TRẢI NGHIỆM ĐỘC QUYỀN TẠI QUẦY DOLPHY' : 'EXCLUSIVE IN-STORE & CATERING'}
            </p>
            <h2 className="section-title block mx-auto">
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
                  <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
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
                    className="font-oswald uppercase text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'vi' ? 'Giao hàng tận nơi' : 'Online Delivery'}</span>
                    <ExternalLink size={13} />
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

      {/* 5. Quick View Product Modal */}
      {modalProduct && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={() => setModalProduct(null)}
        >
          <div 
            className="bg-white dark:bg-[#1e293b] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-200 dark:border-slate-800 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
              {/* Product Visuals */}
              <div className="space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800">
                  <img
                    src={modalActiveImage || modalProduct.image}
                    alt={modalProduct.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {modalProduct.images && modalProduct.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {modalProduct.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setModalActiveImage(img)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                          modalActiveImage === img ? 'border-[#2076bd] shadow' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]">
                      {language === 'en' ? (modalProduct.categoryNameEn || modalProduct.categoryName) : modalProduct.categoryName}
                    </span>
                    <span className="text-[10px] font-oswald uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check size={12} />
                      <span>{language === 'vi' ? 'Còn hàng tại 10 quán' : 'In Stock Across 10 Stores'}</span>
                    </span>
                  </div>

                  <h2 className="font-oswald text-2xl font-bold uppercase text-[#222222] dark:text-white leading-tight">
                    {language === 'en' ? (modalProduct.nameEn || modalProduct.name) : modalProduct.name}
                  </h2>

                  <div className="flex items-baseline gap-3">
                    <span className="font-oswald text-2xl font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                      {modalProduct.price.toLocaleString('vi-VN')}₫
                    </span>
                    {modalProduct.compareAtPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {modalProduct.compareAtPrice.toLocaleString('vi-VN')}₫
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {language === 'en' ? (modalProduct.descriptionEn || modalProduct.description) : modalProduct.description}
                  </p>

                  {(modalProduct.origin || modalProduct.originEn) && (
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800 text-xs space-y-1">
                      <p><strong>{language === 'vi' ? 'Nguồn gốc:' : 'Origin:'}</strong> {language === 'en' ? (modalProduct.originEn || modalProduct.origin) : modalProduct.origin}</p>
                      {modalProduct.roastLevel && <p><strong>{language === 'vi' ? 'Cấp độ rang:' : 'Roast:'}</strong> {modalProduct.roastLevel}</p>}
                      {modalProduct.weight && <p><strong>{language === 'vi' ? 'Đóng gói:' : 'Net weight:'}</strong> {modalProduct.weight}</p>}
                      {modalProduct.brewingRecommendation && <p><strong>{language === 'vi' ? 'Gợi ý pha chế:' : 'Brewing:'}</strong> {modalProduct.brewingRecommendation}</p>}
                    </div>
                  )}

                  {modalProduct.tasteNotes && (
                    <div className="space-y-1">
                      <span className="text-[11px] font-oswald uppercase font-bold text-gray-500">
                        {language === 'vi' ? 'Hương vị cảm nhận (Sensory Notes):' : 'Sensory Notes:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {modalProduct.tasteNotes.map((note, nIdx) => (
                          <span key={nIdx} className="text-xs px-2.5 py-1 rounded bg-[#f0f8ff] dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] font-medium">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(modalProduct, 1, grindOptions[modalProduct.id]);
                      showToast(language === 'vi' ? `Đã thêm "${modalProduct.name}" vào giỏ hàng!` : `Added "${modalProduct.name}" to cart!`);
                      setModalProduct(null);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag size={15} />
                    <span>{t('shop.add_to_cart')}</span>
                  </button>
                  <a
                    href="https://dolphycoffee.cukcuk.vn/order-online/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950 font-oswald text-xs uppercase tracking-wider font-extrabold transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    title={language === 'vi' ? 'Đặt giao hàng tận nơi' : 'Online Delivery'}
                  >
                    <span>{language === 'vi' ? 'Giao Hàng Tận Nơi' : 'Delivery'}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
