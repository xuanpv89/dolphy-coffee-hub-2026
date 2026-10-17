import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Coffee, Gift, Check, ArrowRight, Star } from 'lucide-react';
import { productsData } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { Product, CartItem } from '../types';

export const Shop: React.FC = () => {
  const { addToCart, setIsCartOpen } = useDolphy();
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
    { id: 'all', name: 'Tất Cả Sản Phẩm' },
    { id: 'coffee-bag', name: 'Cà Phê Túi (Arabica & Robusta)' },
    { id: 'combo', name: 'Combo Hộp Quà Tết 2026' },
    { id: 'equipment', name: 'Phin Nhôm Truyền Thống' }
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAEDCD]">
            Dolphy Roastery & Gift Collection
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Cà Phê Hạt Nguyên Chất & Bộ Quà Tặng
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-2xl mx-auto">
            Hạt cà phê được thu hoạch chín 100%, rang xay mới mỗi tuần theo kỹ thuật độc quyền của Dolphy. Đóng gói van 1 chiều bảo toàn trọn vẹn hương vị.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E0D5] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#4A2C11] text-white shadow-md'
                    : 'bg-[#FAF7F2] text-[#7A6E68] hover:bg-[#EAE4DC] hover:text-[#24140A]'
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
                placeholder="Tìm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#4A2C11]"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#4A2C11] bg-white text-gray-700"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((product) => {
            const currentGrind = grindOptions[product.id] || 'Hạt nguyên chất (Whole Bean)';

            return (
              <div
                key={product.id}
                id={String(product.id)}
                className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                {/* Image Gallery Showcase */}
                <div className="relative h-64 overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={product.images[0] || '/images/image10.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#24140A]/85 text-[#FAEDCD]">
                      {product.categoryName}
                    </span>
                    {product.isBestSeller && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E76F51] text-white">
                        Bán Chạy Nhất
                      </span>
                    )}
                  </div>
                  {product.weight && (
                    <span className="absolute bottom-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg bg-white/95 text-gray-800 shadow">
                      {product.weight}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-[#24140A] group-hover:text-[#8C5329] transition-colors">
                      {product.name}
                    </h3>
                    
                    {product.origin && (
                      <div className="text-xs text-[#8C5329] font-medium">
                        📍 Xuất xứ: {product.origin}
                      </div>
                    )}

                    <p className="text-xs text-[#7A6E68] line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Taste Notes */}
                    {product.tasteNotes && product.tasteNotes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.tasteNotes.map((note, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF0E6] text-[#8C5329] font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Grind Option Selector (if coffee-bag) */}
                  {product.category === 'coffee-bag' && (
                    <div className="pt-2 border-t border-gray-100 space-y-1.5">
                      <label className="block text-[11px] font-bold text-gray-600">
                        Lựa chọn mức độ xay:
                      </label>
                      <select
                        value={currentGrind}
                        onChange={(e: any) => handleGrindChange(product.id, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-700 bg-[#FAF7F2] focus:outline-none focus:border-[#4A2C11]"
                      >
                        <option value="Hạt nguyên chất (Whole Bean)">Hạt nguyên chất (Whole Bean)</option>
                        <option value="Xay pha Phin (Medium)">Xay pha Phin (Medium)</option>
                        <option value="Xay Cold Brew (Coarse)">Xay Cold Brew (Coarse)</option>
                        <option value="Xay máy Espresso (Fine)">Xay máy Espresso (Fine)</option>
                      </select>
                    </div>
                  )}

                  {/* Price & Add to Cart */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {product.compareAtPrice && (
                        <span className="text-xs text-gray-400 line-through block">
                          {product.compareAtPrice.toLocaleString('vi-VN')} ₫
                        </span>
                      )}
                      <div className="text-xl font-extrabold text-[#C0392B]">
                        {product.price.toLocaleString('vi-VN')} ₫
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1, currentGrind)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#4A2C11] to-[#8C5329] text-white font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <ShoppingBag size={15} />
                      <span>Thêm Vào Giỏ</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Shipping & Support Notice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8E0D5] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#4A2C11]">🚚 Giao Hàng Siêu Tốc TP.HCM</h4>
            <p className="text-xs text-gray-600">Miễn phí ship đơn hàng từ 300.000đ tại nội thành TP.HCM.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#4A2C11]">☕ Đảm Bảo Cà Phê Mới Rang</h4>
            <p className="text-xs text-gray-600">Mọi mẻ hạt đều được rang mới không quá 7 ngày, thơm ngon chuẩn vị.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#4A2C11]">🎁 Chiết Khấu Doanh Nghiệp</h4>
            <p className="text-xs text-gray-600">Chiết khấu từ 5% – 20% cho đơn hàng cà phê từ 3kg hoặc quà Tết số lượng lớn.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
