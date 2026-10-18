import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Search, ArrowRight, Calendar, X, Sparkles } from 'lucide-react';
import { articlesData } from '../data/dolphyData';
import { Article } from '../types';
import { useDolphy } from '../context/DolphyContext';

export const KnowledgeHub: React.FC = () => {
  const { t, language } = useDolphy();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedArticle(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedArticle]);

  const categories = [
    { id: 'all', name: t('knowledge.tab_all') },
    { id: 'Cẩm Nang', name: t('knowledge.tab_brewing') },
    { id: 'Văn Hóa', name: t('knowledge.tab_culture') },
    { id: 'Học Viện', name: t('knowledge.tab_academy') },
    { id: 'Kiến Trúc', name: t('knowledge.tab_spaces') },
    { id: 'Thức Uống', name: t('knowledge.tab_drinks') },
    { id: 'Chương Trình', name: t('knowledge.tab_events') }
  ];

  const filtered = articlesData.filter(art => {
    const matchCat = selectedCategory === 'all' || 
                     art.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                     (selectedCategory === 'Văn Hóa' && (art.category.includes('Văn Hóa') || art.category.includes('Cộng Đồng'))) ||
                     (selectedCategory === 'Học Viện' && (art.category.includes('Học Viện') || art.category.includes('Barista') || art.category.includes('Cuộc Thi'))) ||
                     (selectedCategory === 'Chương Trình' && (art.category.includes('Chương Trình') || art.category.includes('Dịch Vụ') || art.category.includes('B2B'))) ||
                     (selectedCategory === 'Kiến Trúc' && (art.category.includes('Kiến Trúc') || art.category.includes('Chi Nhánh')));
    const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header */}
      <section className="reveal-on-scroll bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold shadow">
            <Sparkles size={13} />
            <span>{t('knowledge.hero_tag')}</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            {t('knowledge.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('knowledge.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Controls */}
        <div className="reveal-on-scroll bg-white dark:bg-[#1e293b] p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-oswald uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={t('knowledge.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-800 dark:text-white focus:outline-none focus:border-[#2076bd]"
            />
            <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {filtered.map((art) => {
            const articleTitle = language === 'en' ? (art.titleEn || art.title) : art.title;
            const articleCategory = language === 'en' ? (art.categoryEn || art.category) : art.category;
            const articleExcerpt = language === 'en' ? (art.excerptEn || art.excerpt) : art.excerpt;
            const articleReadTime = language === 'en' ? (art.readTimeEn || art.readTime) : art.readTime;

            return (
              <div
                key={art.id}
                id={art.id}
                className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm hover-lift hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedArticle(art)}
              >
                <div>
                  <div className="h-52 overflow-hidden bg-gray-100 dark:bg-slate-900 relative">
                    <img
                      src={art.image}
                      alt={articleTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2076bd] text-white shadow">
                      {articleCategory}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500">
                      <span className="flex items-center gap-1 font-oswald"><Calendar size={12} /> {art.date || '2026-10-15'}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {articleReadTime}</span>
                    </div>

                    <h3 className="font-oswald text-lg font-bold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors leading-snug line-clamp-2 uppercase">
                      {articleTitle}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {articleExcerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 dark:border-slate-800 mt-2 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span>{art.author}</span>
                  <span className="font-oswald text-[#2076bd] dark:text-[#3ba0e6] font-semibold group-hover:underline flex items-center gap-1">
                    <span>{language === 'vi' ? 'ĐỌC TIẾP' : 'READ MORE'}</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && createPortal(
        (() => {
          const modalTitle = language === 'en' ? (selectedArticle.titleEn || selectedArticle.title) : selectedArticle.title;
          const modalCategory = language === 'en' ? (selectedArticle.categoryEn || selectedArticle.category) : selectedArticle.category;
          const modalContent = language === 'en' ? (selectedArticle.contentEn || selectedArticle.content) : selectedArticle.content;
          const modalReadTime = language === 'en' ? (selectedArticle.readTimeEn || selectedArticle.readTime) : selectedArticle.readTime;

          return (
            <div 
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-[#1e293b] rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative text-[#222222] dark:text-white border border-gray-100 dark:border-slate-700/60 transition-all my-auto"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#222222] dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close article modal"
                >
                  <X size={20} />
                </button>

                <div className="space-y-3">
                  <span className="bg-[#2076bd] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    {modalCategory}
                  </span>
                  <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                    {modalTitle}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-slate-800 pb-3">
                    <span>{selectedArticle.date || '2026-10-15'}</span>
                    <span>•</span>
                    <span>{selectedArticle.author}</span>
                    <span>•</span>
                    <span>{modalReadTime}</span>
                  </div>
                </div>

                <img
                  src={selectedArticle.image}
                  alt={modalTitle}
                  className="w-full h-64 sm:h-72 object-cover rounded-lg"
                />

                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line space-y-4">
                  {modalContent}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="dolphy-btn dolphy-btn-primary px-6 py-2 rounded text-xs font-semibold cursor-pointer"
                  >
                    {language === 'vi' ? 'ĐÓNG BÀI VIẾT' : 'CLOSE ARTICLE'}
                  </button>
                </div>
              </div>
            </div>
          );
        })(),
        document.body
      )}

    </div>
  );
};
