import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Coffee, Gift, Check, ArrowRight, Star } from 'lucide-react';
import { productsData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { Product, CartItem } from '../types';

export const Shop: React.FC = () => {
  const { addToCart, setIsCartOpen, showToast } = useDolphy();
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
    { id: 'all', name: 'TẤT CẢ SẢN PHẨM' },
    { id: 'coffee-bag', name: 'CÀ PHÊ HẠT / BỘT' },
    { id: 'combo', name: 'COMBO QUÀ TẶNG' },
    { id: 'equipment', name: 'PHIN NHÔM CAO CẤP' }
  ];

  return (
    <div className="space-y-12 pb-20 bg-white text-[#222222]">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            DOLPHY COFFEE BAG • FIND YOUR MATCH
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            CỬA HÀNG CÀ PHÊ HẠT NGUYÊN CHẤT & QUÀ TẶNG
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Hạt cà phê thu hoạch chín 100%, rang mới mỗi tuần theo kỹ thuật độc quyền của Dolphy Cafe. Đóng gói van 1 chiều bảo toàn trọn vẹn hương vị.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-oswald tracking-wider font-semibold transition-all uppercase ${
                  selectedCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
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
                placeholder="Tìm tên sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded border border-gray-200 text-xs focus:outline-none focus:border-[#2076bd]"
              />
              <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded border border-gray-200 text-xs focus:outline-none focus:border-[#2076bd] bg-white text-gray-700 font-oswald"
            >
              <option value="default">SẮP XẾP MẶC ĐỊNH</option>
              <option value="price-asc">GIÁ: THẤP ĐẾN CAO</option>
              <option value="price-desc">GIÁ: CAO ĐẾN THẤP</option>
            </select>
          </div>
        </div>

        {/* Promo Gift Banner */}
        <div className="p-4 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between gap-4 text-xs sm:text-sm text-orange-950">
          <div className="flex items-center gap-2">
            <Gift className="text-[#f09c05] shrink-0" size={20} />
            <span>
              <strong>Ưu đãi độc quyền Dolphy:</strong> Tặng ngay 01 Phin nhôm truyền thống cao cấp khi mua combo từ 2 gói cà phê 500g bất kỳ.
            </span>
          </div>
          <button 
            onClick={() => setSelectedCategory('combo')}
            className="hidden sm:inline-block font-oswald uppercase text-xs font-bold text-[#2076bd] hover:underline shrink-0"
          >
            Xem combo quà tặng →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sorted.map((product) => {
            const selectedGrind = grindOptions[product.id] || 'Nguyên hạt (Espresso)';

            return (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.image || product.images?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-[#f09c05] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                        {product.badge}
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="absolute top-2 right-2 bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                        BÁN CHẠY
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#f09c05] font-bold">
                        {'★'.repeat(5)}
                      </span>
                      <span className="text-gray-400 text-[11px] font-oswald">{product.origin || 'Việt Nam'}</span>
                    </div>

                    <h3 className="font-oswald text-base font-semibold text-[#222222] group-hover:text-[#2076bd] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Grind Selector if beans */}
                    {product.category === 'beans' || product.category === 'coffee-bag' ? (
                      <div className="pt-2">
                        <label className="block text-[11px] font-medium text-gray-600 mb-1 font-oswald uppercase">
                          Tùy chọn xay cà phê:
                        </label>
                        <select
                          value={selectedGrind}
                          onChange={(e: any) => handleGrindChange(product.id, e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-[#2076bd]"
                        >
                          <option value="Nguyên hạt (Espresso)">Nguyên hạt (Cho máy Espresso)</option>
                          <option value="Xay Pha Phin">Xay vừa (Pha Phin truyền thống)</option>
                          <option value="Xay Cold Brew">Xay thô (Pha Cold Brew / Ủ lạnh)</option>
                          <option value="Xay V60 / Pour Over">Xay mịn vừa (Pha Pour Over / V60)</option>
                        </select>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Footer / Buy Action */}
                <div className="p-4 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-oswald">Đơn giá</span>
                    <span className="font-oswald text-lg font-bold text-[#2076bd]">
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, 1, selectedGrind);
                      showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
                    }}
                    className="px-4 py-2 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <ShoppingBag size={14} />
                    <span>CHỌN MUA</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
