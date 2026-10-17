import React, { useState } from 'react';
import { BookOpen, Clock, User, Tag, Search, ArrowRight, Share2, Sparkles, Calendar, X } from 'lucide-react';
import { articlesData } from '../data/dolphyData';
import { Article } from '../types';

export const KnowledgeHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    { id: 'all', name: 'TẤT CẢ BÀI VIẾT' },
    { id: 'Cẩm Nang Pha Chế', name: 'CẨM NANG PHA CHẾ' },
    { id: 'Văn Hóa Cà Phê', name: 'VĂN HÓA & PHONG CÁCH' },
    { id: 'Chương Trình Khách Hàng', name: 'ƯU ĐÃI & SỰ KIỆN' }
  ];

  const filtered = articlesData.filter(art => {
    const matchCat = selectedCategory === 'all' || art.category.includes(selectedCategory);
    const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20 bg-white text-[#222222]">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            TIN TỨC & CẨM NANG DOLPHY CAFE
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            TRI THỨC CÀ PHÊ & BÍ QUYẾT PHA CHẾ
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Khám phá kiến thức Latte Art, lịch sử chiếc phin nhôm truyền thống, cách nhận biết cà phê hạt sạch và hành trình xanh cùng Dolphy Cafe.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-oswald uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded border border-gray-200 text-xs focus:outline-none focus:border-[#2076bd]"
            />
            <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <div
              key={art.id}
              id={art.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(art)}
            >
              <div>
                <div className="h-52 overflow-hidden bg-gray-100 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2076bd] text-white">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 font-oswald"><Calendar size={12} /> {art.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {art.readTime}</span>
                  </div>

                  <h3 className="font-oswald text-lg font-bold text-[#222222] group-hover:text-[#2076bd] transition-colors leading-snug line-clamp-2 uppercase">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between text-xs text-gray-400">
                <span>{art.author}</span>
                <span className="font-oswald text-[#2076bd] font-semibold group-hover:underline flex items-center gap-1">
                  <span>ĐỌC TIẾP</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#222222] rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="space-y-3">
              <span className="bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                {selectedArticle.category}
              </span>
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd]">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-3">
                <span>{selectedArticle.publishedDate}</span>
                <span>•</span>
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="prose text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {selectedArticle.content}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="dolphy-btn dolphy-btn-primary px-6 py-2 rounded text-xs font-semibold"
              >
                ĐÓNG BÀI VIẾT
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
