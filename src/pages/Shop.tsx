import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Search, ShoppingBag, Gift, Eye, X, Check, ExternalLink, ChevronLeft, ChevronRight, SlidersHorizontal, Coffee } from 'lucide-react';
import { productsData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { CartItem, Product } from '../types';

export const Shop: React.FC = () => {
  const { addToCart, showToast, t, language, theme } = useDolphy();
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
      <section className={`reveal-on-scroll border-b text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden ${
        theme === 'vintage' ? 'bg-[#1b4d3e] border-[#2d6a4f]' :
        theme === 'nordic' ? 'bg-zinc-950 border-zinc-800' :
        theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 border-rose-300' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/30' :
        theme === 'dark' ? 'bg-[#0f172a] border-slate-800' :
        'bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800'
      }`}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero_slide_beans.webp')" }} />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow ${
            theme === 'nordic' ? 'rounded-none bg-white text-black font-mono border border-black' :
            theme === 'sunset' ? 'rounded-full bg-white text-rose-600 font-oswald shadow-md' :
            theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white font-serif' :
            theme === 'roastery' ? 'rounded-md bg-cyan-950 text-cyan-400 font-mono border border-cyan-500/40' :
            'rounded bg-[#FAEA28] text-slate-950 font-oswald'
          }`}>
            <Coffee size={14} />
            <span>{t('shop.hero_tag')}</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight ${
            theme === 'vintage' ? 'font-serif' :
            theme === 'nordic' ? 'font-mono' :
            'font-oswald'
          }`}>
            {t('shop.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('shop.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Filter & Search Control Panel */}
        <div className={`reveal-on-scroll p-4 sm:p-5 shadow-sm space-y-4 ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
          theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-white shadow-md' :
          theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
          'bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-slate-800'
        }`}>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 text-xs tracking-wider font-semibold transition-all uppercase flex items-center gap-1.5 cursor-pointer ${
                  theme === 'nordic' ? 'rounded-none font-mono' :
                  theme === 'sunset' ? 'rounded-full font-oswald' :
                  theme === 'vintage' ? 'rounded font-sans' :
                  theme === 'roastery' ? 'rounded-lg font-mono' :
                  'rounded-lg font-oswald'
                } ${
                  selectedCategory === cat.id
                    ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                       theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                       theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                       theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                       theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                       'bg-[#2076bd] text-white shadow-md')
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
                className={`w-full pl-9 pr-3.5 py-2.5 text-xs focus:outline-none ${
                  theme === 'nordic' ? 'rounded-none border border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 text-black dark:text-white font-mono focus:border-[#ff3b00]' :
                  theme === 'sunset' ? 'rounded-full border border-rose-200 bg-white text-gray-800 focus:border-rose-400' :
                  theme === 'vintage' ? 'rounded border border-[#e6ded1] bg-[#faf6f0] text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                  theme === 'roastery' ? 'rounded-lg border border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                  'rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:border-[#2076bd]'
                }`}
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
                className={`w-full px-3 py-2.5 text-xs focus:outline-none ${
                  theme === 'nordic' ? 'rounded-none border border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 text-black dark:text-white font-mono' :
                  theme === 'sunset' ? 'rounded-full border border-rose-200 bg-white text-gray-800 font-oswald' :
                  theme === 'vintage' ? 'rounded border border-[#e6ded1] bg-[#faf6f0] text-[#221e1a] font-serif' :
                  theme === 'roastery' ? 'rounded-lg border border-cyan-500/40 bg-slate-900 text-white font-mono' :
                  'rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:border-[#2076bd] font-oswald'
                }`}
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
                className={`w-full px-3 py-2.5 text-xs focus:outline-none ${
                  theme === 'nordic' ? 'rounded-none border border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 text-black dark:text-white font-mono' :
                  theme === 'sunset' ? 'rounded-full border border-rose-200 bg-white text-gray-800 font-oswald' :
                  theme === 'vintage' ? 'rounded border border-[#e6ded1] bg-[#faf6f0] text-[#221e1a] font-serif' :
                  theme === 'roastery' ? 'rounded-lg border border-cyan-500/40 bg-slate-900 text-white font-mono' :
                  'rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:border-[#2076bd] font-oswald'
                }`}
              >
                <option value="default">{t('shop.sort_default')}</option>
                <option value="bestseller">{t('shop.sort_bestseller')}</option>
                <option value="price-asc">{t('shop.sort_price_asc')}</option>
                <option value="price-desc">{t('shop.sort_price_desc')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Promo Gift Banner (Theme-Adaptive) */}
        <div className={`reveal-scale p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm shadow-sm transition-all ${
          theme === 'nordic'
            ? 'rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-900 dark:border-zinc-300 text-black dark:text-white font-mono'
            : theme === 'vintage'
            ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1] text-[#221e1a] font-serif'
            : theme === 'sunset'
            ? 'rounded-3xl bg-rose-50/80 border border-rose-200 text-[#271a17]'
            : theme === 'roastery'
            ? 'rounded-xl bg-slate-900/90 border border-cyan-500/30 text-slate-200 font-mono'
            : 'rounded-xl bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white dark:from-slate-800/90 dark:via-slate-800/60 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/50 text-slate-800 dark:text-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 flex items-center justify-center shrink-0 shadow-xs ${
              theme === 'nordic'
                ? 'rounded-none bg-black text-white dark:bg-white dark:text-black'
                : theme === 'vintage'
                ? 'rounded bg-[#1b4d3e] text-white'
                : theme === 'sunset'
                ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white'
                : theme === 'roastery'
                ? 'rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300'
                : 'rounded-full bg-[#2076bd] text-white'
            }`}>
              <Gift size={18} />
            </div>
            <span>
              <strong className={
                theme === 'nordic' ? 'font-bold uppercase tracking-wider' :
                theme === 'vintage' ? 'text-[#1b4d3e] font-bold font-sans' :
                theme === 'sunset' ? 'text-rose-600 font-bold' :
                theme === 'roastery' ? 'text-cyan-300 font-bold' :
                'text-[#2076bd] dark:text-[#3ba0e6] font-semibold'
              }>
                {language === 'vi' ? 'Ưu đãi độc quyền Dolphy:' : 'Dolphy Exclusive Privilege:'}
              </strong> {t('shop.promo_text')}
            </span>
          </div>
          <button 
            onClick={() => setSelectedCategory('combo')}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-wider shrink-0 transition-all ${
              theme === 'nordic'
                ? 'rounded-none bg-black dark:bg-white text-white dark:text-black font-mono font-bold hover:bg-[#ff3b00] hover:text-white'
                : theme === 'vintage'
                ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-sans font-semibold'
                : theme === 'sunset'
                ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white font-oswald font-bold shadow-md shadow-rose-500/20'
                : theme === 'roastery'
                ? 'rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono font-bold shadow'
                : 'rounded dolphy-btn dolphy-btn-primary font-oswald hover-lift'
            }`}
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
        ) : theme === 'vintage' ? (
          /* THEME: VINTAGE - 3-Column French Botanical Boutique Spread */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {paginatedProducts.map((product) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;
              const pName = language === 'en' ? (product.nameEn || product.name) : product.name;
              const pDesc = language === 'en' ? (product.descriptionEn || product.description) : product.description;
              const pCatName = language === 'en' ? (product.categoryNameEn || product.categoryName) : product.categoryName;

              return (
                <div
                  key={product.id}
                  className="bg-[#faf6f0] border-2 border-[#e6ded1] rounded-lg p-5 flex flex-col justify-between hover:border-[#1b4d3e] transition-all shadow-xs group font-serif"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded overflow-hidden bg-white border border-[#e6ded1] mb-4 cursor-pointer" onClick={() => openQuickView(product)}>
                      <img
                        src={product.image || product.images?.[0]}
                        alt={pName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[#1b4d3e] text-white font-sans text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded">
                        {pCatName}
                      </span>
                      {product.isBestSeller && (
                        <span className="absolute top-2.5 right-2.5 bg-[#c05621] text-white font-sans text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow">
                          {t('shop.badge_bestseller')}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3
                        onClick={() => openQuickView(product)}
                        className="font-serif font-bold text-base text-[#221e1a] group-hover:text-[#1b4d3e] transition-colors leading-snug cursor-pointer"
                      >
                        {pName}
                      </h3>
                      <p className="text-xs text-[#6e655c] italic line-clamp-2 leading-relaxed">
                        "{pDesc}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#e6ded1] flex items-center justify-between font-sans">
                    <div>
                      <span className="font-serif text-lg font-bold text-[#1b4d3e]">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${pName}" vào giỏ!` : `Added "${pName}" to cart!`);
                      }}
                      className="px-3.5 py-1.5 rounded border border-[#1b4d3e] bg-[#1b4d3e] text-white hover:bg-[#c05621] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag size={13} />
                      <span>{t('shop.add_to_cart')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'nordic' ? (
          /* THEME: NORDIC - Brutalist Architectural 4-Box Directory Grid */
          <div className="border-2 border-zinc-900 dark:border-zinc-200 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900 dark:divide-zinc-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-none reveal-stagger font-mono">
            {paginatedProducts.map((product, idx) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;
              const pName = language === 'en' ? (product.nameEn || product.name) : product.name;
              const pDesc = language === 'en' ? (product.descriptionEn || product.description) : product.description;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between group hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-500 pb-2 border-b border-zinc-200 dark:border-zinc-800 mb-3">
                      <span>[0{idx + 1} // ITEM]</span>
                      <span className="uppercase text-black dark:text-white font-bold">{product.category}</span>
                    </div>

                    <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800 cursor-pointer" onClick={() => openQuickView(product)}>
                      <img
                        src={product.image || product.images?.[0]}
                        alt={pName}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <h3
                      onClick={() => openQuickView(product)}
                      className="font-oswald text-base font-bold uppercase tracking-wider text-black dark:text-white leading-tight cursor-pointer"
                    >
                      {pName}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2 font-mono">
                      {pDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3 font-mono">
                    <div className="flex items-baseline justify-between">
                      <span className="text-base font-bold text-black dark:text-white">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${pName}" vào giỏ!` : `Added "${pName}" to cart!`);
                      }}
                      className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-[0.12em] font-bold hover:bg-[#ff3b00] hover:text-white dark:hover:bg-[#ff3b00] dark:hover:text-white transition-colors rounded-none cursor-pointer"
                    >
                      + {t('shop.add_to_cart')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'roastery' ? (
          /* THEME: ROASTERY - Cyber Station Node HUD Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono reveal-stagger">
            {paginatedProducts.map((product, idx) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;
              const pName = language === 'en' ? (product.nameEn || product.name) : product.name;
              const pDesc = language === 'en' ? (product.descriptionEn || product.description) : product.description;
              const pCatName = language === 'en' ? (product.categoryNameEn || product.categoryName) : product.categoryName;

              return (
                <div
                  key={product.id}
                  className="bg-[#0b1324] border border-cyan-500/40 rounded-xl p-5 flex flex-col justify-between hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(2,132,199,0.15)] group"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 border border-cyan-500/20 mb-4 cursor-pointer" onClick={() => openQuickView(product)}>
                      <img
                        src={product.image || product.images?.[0]}
                        alt={pName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-cyan-950 text-cyan-400 border border-cyan-500/40 text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded">
                        {pCatName}
                      </span>
                      {product.isBestSeller && (
                        <span className="absolute top-2.5 right-2.5 bg-amber-500 text-black text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded shadow">
                          {t('shop.badge_bestseller')}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h3
                        onClick={() => openQuickView(product)}
                        className="font-oswald text-base font-bold uppercase text-white group-hover:text-cyan-400 transition-colors leading-snug cursor-pointer"
                      >
                        {pName}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-sans">
                        {pDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-cyan-500/20 flex items-center justify-between">
                    <span className="font-oswald text-lg font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${pName}" vào giỏ!` : `Added "${pName}" to cart!`);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs uppercase font-oswald tracking-wider font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag size={13} />
                      <span>{t('shop.add_to_cart')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'sunset' ? (
          /* THEME: SUNSET - 3-Column Organic Pebble Curves */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {paginatedProducts.map((product) => {
              const defaultGrind = language === 'vi' ? 'Nguyên hạt (Espresso)' : 'Whole Bean (Espresso)';
              const selectedGrind = grindOptions[product.id] || defaultGrind;
              const pName = language === 'en' ? (product.nameEn || product.name) : product.name;
              const pDesc = language === 'en' ? (product.descriptionEn || product.description) : product.description;
              const pCatName = language === 'en' ? (product.categoryNameEn || product.categoryName) : product.categoryName;

              return (
                <div
                  key={product.id}
                  className="rounded-3xl p-6 bg-white border border-rose-100 shadow-xl shadow-rose-500/5 hover-lift transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-rose-50/50 mb-4 cursor-pointer" onClick={() => openQuickView(product)}>
                      <img
                        src={product.image || product.images?.[0]}
                        alt={pName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {product.isBestSeller ? t('shop.badge_bestseller') : pCatName}
                      </span>
                    </div>

                    <h3
                      onClick={() => openQuickView(product)}
                      className="font-oswald text-lg font-bold text-[#271a17] group-hover:text-rose-600 transition-colors leading-snug cursor-pointer"
                    >
                      {pName}
                    </h3>
                    <p className="text-xs text-[#7d6560] mt-1.5 line-clamp-2">
                      {pDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-rose-100 mt-5 flex items-center justify-between">
                    <div>
                      <span className="font-oswald text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(product, 1, selectedGrind);
                        showToast(language === 'vi' ? `Đã thêm "${pName}" vào giỏ!` : `Added "${pName}" to cart!`);
                      }}
                      className="p-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white shadow-lg shadow-rose-500/25 transition-transform hover:scale-105 cursor-pointer"
                      title={t('shop.add_to_cart')}
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* THEME: OCEAN & CLASSIC DARK - Classic 4-Column Balanced Grid */
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
              className={`p-2 border disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                theme === 'sunset' ? 'rounded-full border-rose-200 bg-white text-rose-600 hover:bg-rose-50 shadow-sm' :
                theme === 'vintage' ? 'rounded border-[#e6ded1] bg-[#faf6f0] text-[#1b4d3e] font-serif hover:border-[#1b4d3e]' :
                theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-cyan-300 font-mono hover:bg-slate-800' :
                'rounded-lg border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-9 h-9 text-xs font-bold transition-all cursor-pointer ${
                  theme === 'nordic' ? 'rounded-none font-mono' :
                  theme === 'sunset' ? 'rounded-full font-oswald' :
                  theme === 'vintage' ? 'rounded font-serif' :
                  theme === 'roastery' ? 'rounded-lg font-mono' :
                  'rounded-lg font-oswald'
                } ${
                  currentPage === idx + 1
                    ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                       theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                       theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                       theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                       theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                       'bg-[#2076bd] text-white shadow')
                    : (theme === 'nordic' ? 'bg-white dark:bg-zinc-900 border border-zinc-900 dark:border-zinc-700 text-black dark:text-white' :
                       theme === 'vintage' ? 'bg-[#faf6f0] border border-[#e6ded1] text-[#221e1a] hover:border-[#1b4d3e]' :
                       theme === 'roastery' ? 'bg-slate-900 border border-cyan-500/30 text-slate-300 hover:border-cyan-400' :
                       theme === 'sunset' ? 'bg-white border border-rose-200 text-[#271a17] hover:bg-rose-50' :
                       'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100')
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 border disabled:opacity-40 disabled:cursor-not-allowed transition-all ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                theme === 'sunset' ? 'rounded-full border-rose-200 bg-white text-rose-600 hover:bg-rose-50 shadow-sm' :
                theme === 'vintage' ? 'rounded border-[#e6ded1] bg-[#faf6f0] text-[#1b4d3e] font-serif hover:border-[#1b4d3e]' :
                theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-cyan-300 font-mono hover:bg-slate-800' :
                'rounded-lg border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* 4. Retail Experience & B2B Catering Showcase */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-800 space-y-10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <p className={`text-xs uppercase tracking-widest font-bold ${
              theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
              theme === 'sunset' ? 'font-oswald text-rose-600' :
              theme === 'roastery' ? 'font-mono text-cyan-400' :
              theme === 'nordic' ? 'font-mono text-black dark:text-white' :
              theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
              'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
            }`}>
              {language === 'vi' ? 'TRẢI NGHIỆM ĐỘC QUYỀN TẠI QUẦY DOLPHY' : 'EXCLUSIVE IN-STORE & CATERING'}
            </p>
            <h2 className={`text-2xl sm:text-3xl font-bold uppercase ${
              theme === 'vintage' ? 'font-serif' : 'font-oswald'
            }`}>
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
            <div className={`overflow-hidden transition-all flex flex-col group ${
              theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5 hover-lift' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif hover:border-[#1b4d3e]' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
              'rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg'
            }`}>
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/images/fanpage/retail-beans-bakery-display.jpg"
                  alt="Kệ cà phê hạt mộc và tủ bánh Dolphy Bakery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-400' :
                    theme === 'nordic' ? 'font-mono text-zinc-500' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Quầy Trưng Bày Thực Tế' : 'In-Store Retail Display'}
                  </span>
                  <h3 className={`text-xl font-bold uppercase ${
                    theme === 'vintage' ? 'font-serif text-[#221e1a]' :
                    theme === 'sunset' ? 'font-oswald text-[#271a17]' :
                    'font-oswald text-[#222222] dark:text-white'
                  }`}>
                    {language === 'vi' ? 'Kệ Cà Phê Hạt Mộc & Dolphy Bakery' : 'Pure Specialty Beans & Fresh Pastries'}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'vintage' ? 'text-[#6e655c]' :
                    theme === 'sunset' ? 'text-[#7d6560]' :
                    theme === 'roastery' ? 'text-slate-300' :
                    'text-gray-600 dark:text-gray-300'
                  }`}>
                    {language === 'vi'
                      ? '100% hạt Arabica Cầu Đất và Robusta Bảo Lộc mộc nguyên chất, đóng gói túi van 1 chiều đạt chuẩn. Đi kèm tủ bánh ngọt nướng tươi nóng giòn mỗi sáng tại các chi nhánh.'
                      : '100% pure Cau Dat Arabica and Bao Loc Robusta in degas-valve bags, paired with warm artisan French pastries baked daily.'}
                  </p>
                </div>
                <div className={`pt-2 border-t flex items-center justify-between text-xs ${
                  theme === 'vintage' ? 'border-[#e6ded1]' :
                  theme === 'roastery' ? 'border-cyan-500/20' :
                  theme === 'sunset' ? 'border-rose-100' :
                  'border-gray-100 dark:border-slate-800'
                }`}>
                  <span className="text-gray-500 dark:text-gray-400 font-oswald">
                    {language === 'vi' ? 'Có sẵn tại 10 chi nhánh' : 'Available across 10 stores'}
                  </span>
                  <a
                    href="https://dolphycoffee.cukcuk.vn/order-online/"
                    target="_blank"
                    rel="noreferrer"
                    className={`uppercase font-bold hover:underline flex items-center gap-1 ${
                      theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                      theme === 'sunset' ? 'font-oswald text-rose-600' :
                      theme === 'roastery' ? 'font-mono text-cyan-300' :
                      theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                      theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                      'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}
                  >
                    <span>{language === 'vi' ? 'Giao hàng tận nơi' : 'Online Delivery'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Teabreak & Event Catering */}
            <div className={`overflow-hidden transition-all flex flex-col group ${
              theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5 hover-lift' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif hover:border-[#1b4d3e]' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
              'rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg'
            }`}>
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/images/fanpage/retail-teabreak-catering.jpg"
                  alt="Dịch vụ tiệc Teabreak sự kiện Dolphy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-400' :
                    theme === 'nordic' ? 'font-mono text-zinc-500' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Dịch Vụ Doanh Nghiệp' : 'B2B Corporate Service'}
                  </span>
                  <h3 className={`text-xl font-bold uppercase ${
                    theme === 'vintage' ? 'font-serif text-[#221e1a]' :
                    theme === 'sunset' ? 'font-oswald text-[#271a17]' :
                    'font-oswald text-[#222222] dark:text-white'
                  }`}>
                    {language === 'vi' ? 'Setup Tiệc Teabreak & Cà Phê Sự Kiện' : 'Corporate Teabreak & Event Station'}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'vintage' ? 'text-[#6e655c]' :
                    theme === 'sunset' ? 'text-[#7d6560]' :
                    theme === 'roastery' ? 'text-slate-300' :
                    'text-gray-600 dark:text-gray-300'
                  }`}>
                    {language === 'vi'
                      ? 'Giải pháp đồ uống trọn gói cho hội nghị, sự kiện ra mắt, tiếp sức làm việc cho đối tác doanh nghiệp lớn (Prudential Tower, giải thể thao Spartan, các trường quốc tế).'
                      : 'End-to-end beverage setup for conferences, company town halls, and sports events with live barista stations.'}
                  </p>
                </div>
                <div className={`pt-2 border-t flex items-center justify-between text-xs ${
                  theme === 'vintage' ? 'border-[#e6ded1]' :
                  theme === 'roastery' ? 'border-cyan-500/20' :
                  theme === 'sunset' ? 'border-rose-100' :
                  'border-gray-100 dark:border-slate-800'
                }`}>
                  <span className="text-gray-500 dark:text-gray-400 font-oswald">
                    Hotline B2B: <strong>0938 084 985</strong>
                  </span>
                  <a
                    href="mailto:contact@dolphycafe.com"
                    className={`uppercase font-bold hover:underline ${
                      theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                      theme === 'sunset' ? 'font-oswald text-rose-600' :
                      theme === 'roastery' ? 'font-mono text-cyan-300' :
                      theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                      theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                      'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}
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
            className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto transition-colors ${
              theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
              theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-lg border-2 border-[#e6ded1] font-serif' :
              theme === 'roastery' ? 'bg-[#0b1324] text-white rounded-xl border border-cyan-500/40 font-mono shadow-[0_0_30px_rgba(2,132,199,0.3)]' :
              theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
              'bg-white dark:bg-[#1e293b] text-[#222222] dark:text-white rounded-2xl border border-gray-200 dark:border-slate-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 opacity-60 hover:opacity-100 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
              {/* Product Visuals */}
              <div className="space-y-3">
                <div className={`aspect-square overflow-hidden bg-gray-50 dark:bg-slate-900 border ${
                  theme === 'nordic' ? 'rounded-none border-zinc-300 dark:border-zinc-700' :
                  theme === 'vintage' ? 'rounded-lg border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-xl border-cyan-500/30' :
                  theme === 'sunset' ? 'rounded-2xl border-rose-100' :
                  'rounded-xl border-gray-100 dark:border-slate-800'
                }`}>
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
                        className={`w-16 h-16 overflow-hidden border-2 shrink-0 transition-all ${
                          theme === 'nordic' ? 'rounded-none' :
                          theme === 'vintage' ? 'rounded-md' :
                          theme === 'roastery' ? 'rounded-lg' :
                          theme === 'sunset' ? 'rounded-xl' : 'rounded-lg'
                        } ${
                          modalActiveImage === img
                            ? (theme === 'vintage' ? 'border-[#1b4d3e]' :
                               theme === 'roastery' ? 'border-cyan-400' :
                               theme === 'sunset' ? 'border-rose-500' :
                               theme === 'nordic' ? 'border-black dark:border-white' :
                               'border-[#2076bd] shadow')
                            : 'border-transparent opacity-70 hover:opacity-100'
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
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 ${
                      theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono' :
                      theme === 'vintage' ? 'rounded bg-[#1b4d3e] text-white font-sans' :
                      theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-mono' :
                      theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 font-oswald' :
                      'rounded bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] font-oswald'
                    }`}>
                      {language === 'en' ? (modalProduct.categoryNameEn || modalProduct.categoryName) : modalProduct.categoryName}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check size={12} />
                      <span>{language === 'vi' ? 'Còn hàng tại 10 quán' : 'In Stock Across 10 Stores'}</span>
                    </span>
                  </div>

                  <h2 className={`text-2xl font-bold uppercase leading-tight ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'roastery' ? 'font-oswald text-white' :
                    theme === 'sunset' ? 'font-oswald text-[#271a17]' :
                    'font-oswald text-[#222222] dark:text-white'
                  }`}>
                    {language === 'en' ? (modalProduct.nameEn || modalProduct.name) : modalProduct.name}
                  </h2>

                  <div className="flex items-baseline gap-3">
                    <span className={`text-2xl font-bold ${
                      theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                      theme === 'roastery' ? 'font-oswald text-cyan-400' :
                      theme === 'sunset' ? 'font-oswald text-rose-600' :
                      theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                      'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}>
                      {modalProduct.price.toLocaleString('vi-VN')}₫
                    </span>
                    {modalProduct.compareAtPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {modalProduct.compareAtPrice.toLocaleString('vi-VN')}₫
                      </span>
                    )}
                  </div>

                  <p className="text-xs opacity-80 leading-relaxed whitespace-pre-line">
                    {language === 'en' ? (modalProduct.descriptionEn || modalProduct.description) : modalProduct.description}
                  </p>

                  {(modalProduct.origin || modalProduct.originEn) && (
                    <div className={`p-3 text-xs space-y-1 border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900' :
                      theme === 'vintage' ? 'rounded-lg border-[#e6ded1] bg-[#f2ebe0] text-[#221e1a]' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/20 bg-slate-900/60' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-100 bg-rose-50/50' :
                      'rounded-lg bg-gray-50 dark:bg-slate-900/60 border-gray-100 dark:border-slate-800'
                    }`}>
                      <p><strong>{language === 'vi' ? 'Nguồn gốc:' : 'Origin:'}</strong> {language === 'en' ? (modalProduct.originEn || modalProduct.origin) : modalProduct.origin}</p>
                      {modalProduct.roastLevel && <p><strong>{language === 'vi' ? 'Cấp độ rang:' : 'Roast:'}</strong> {modalProduct.roastLevel}</p>}
                      {modalProduct.weight && <p><strong>{language === 'vi' ? 'Đóng gói:' : 'Net weight:'}</strong> {modalProduct.weight}</p>}
                      {modalProduct.brewingRecommendation && <p><strong>{language === 'vi' ? 'Gợi ý pha chế:' : 'Brewing:'}</strong> {modalProduct.brewingRecommendation}</p>}
                    </div>
                  )}

                  {modalProduct.tasteNotes && (
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase font-bold opacity-70">
                        {language === 'vi' ? 'Hương vị cảm nhận (Sensory Notes):' : 'Sensory Notes:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {modalProduct.tasteNotes.map((note, nIdx) => (
                          <span key={nIdx} className={`text-xs px-2.5 py-1 font-medium ${
                            theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' :
                            theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e]' :
                            theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                            theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600' :
                            'rounded bg-[#f0f8ff] dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
                          }`}>
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
                    className={`flex-1 py-3 text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                      theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono font-bold hover:bg-[#ff3b00] hover:text-white' :
                      theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                      theme === 'roastery' ? 'rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                      theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white font-oswald shadow-md' :
                      'rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald'
                    }`}
                  >
                    <ShoppingBag size={15} />
                    <span>{t('shop.add_to_cart')}</span>
                  </button>
                  <a
                    href="https://dolphycoffee.cukcuk.vn/order-online/"
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-3 text-xs uppercase tracking-wider font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-md ${
                      theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border border-current font-mono' :
                      theme === 'vintage' ? 'rounded border border-[#e6ded1] bg-white text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white font-serif' :
                      theme === 'roastery' ? 'rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-slate-800 font-mono' :
                      theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 font-oswald' :
                      'rounded-xl bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950 font-oswald'
                    }`}
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
