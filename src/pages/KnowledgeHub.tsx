import React, { useState } from 'react';
import { BookOpen, Clock, User, Tag, Search, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { articlesData } from '../data/dolphyData';
import { Article } from '../types';

export const KnowledgeHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    { id: 'all', name: 'Tất Cả Bài Viết' },
    { id: 'Cẩm Nang Pha Chế', name: 'Cẩm Nang Pha Chế' },
    { id: 'Văn Hóa Cà Phê', name: 'Văn Hóa & Phong Cách' },
    { id: 'Chương Trình Khách Hàng', name: 'Ưu Đãi & Khách Hàng' }
  ];

  const filtered = articlesData.filter(art => {
    const matchCat = selectedCategory === 'all' || art.category.includes(selectedCategory);
    const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAEDCD]">
            Cẩm Nang & Chuyện Cà Phê Dolphy
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Tri Thức Cà Phê & Bí Quyết Pha Chế
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-2xl mx-auto">
            Khám phá công thức pha Cold Brew chuẩn tỉ lệ 1:10, lịch sử chiếc phin nhôm truyền thống, cách nhận biết cà phê sạch và hành trình xanh cùng Dolphy.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E0D5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
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

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#4A2C11]"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <div
              key={art.id}
              id={art.id}
              className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(art)}
            >
              <div className="h-52 overflow-hidden bg-gray-100 relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#24140A]/80 text-[#FAEDCD]">
                  {art.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={13} /> {art.readTime}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User size={13} /> {art.author}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#24140A] group-hover:text-[#8C5329] transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#7A6E68] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#4A2C11]">
                  <span>Đọc bài viết đầy đủ</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4A373]/30 my-8">
            
            {/* Modal Header Bar */}
            <div className="p-4 bg-[#24140A] text-white flex items-center justify-between">
              <span className="text-xs font-bold text-[#FAEDCD] uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              >
                Đóng ✕
              </button>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-6">
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A]">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-100">
                  <span>Tác giả: <strong>{selectedArticle.author}</strong></span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden max-h-80 bg-gray-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed space-y-4 whitespace-pre-line text-sm">
                {selectedArticle.content}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                {selectedArticle.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C5329] border border-[#E8E0D5]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
