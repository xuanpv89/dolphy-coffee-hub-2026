import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Search, ArrowRight, Calendar, X, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { articlesData } from '../data/dolphyData';
import { Article } from '../types';
import { useDolphy } from '../context/DolphyContext';

export const KnowledgeHub: React.FC = () => {
  const { t, language, theme } = useDolphy();
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
      <section className={`reveal-on-scroll border-b text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden ${
        theme === 'vintage' ? 'bg-[#1b4d3e] border-[#2d6a4f]' :
        theme === 'nordic' ? 'bg-zinc-950 border-zinc-800' :
        theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 border-rose-300' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/30' :
        'bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow ${
            theme === 'nordic' ? 'rounded-none bg-white text-black font-mono border border-black' :
            theme === 'sunset' ? 'rounded-full bg-white text-rose-600 font-oswald shadow-md' :
            theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white font-serif' :
            theme === 'roastery' ? 'rounded-md bg-cyan-950 text-cyan-400 font-mono border border-cyan-500/40' :
            'rounded bg-[#FAEA28] text-slate-950 font-oswald'
          }`}>
            <BookOpen size={14} />
            <span>{t('knowledge.hero_tag')}</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight ${
            theme === 'vintage' ? 'font-serif' :
            theme === 'nordic' ? 'font-oswald tracking-widest' :
            'font-oswald'
          }`}>
            {t('knowledge.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('knowledge.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Controls */}
        <div className={`reveal-on-scroll p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
          theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-md' :
          theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
          'bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800'
        }`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  theme === 'nordic' ? 'rounded-none font-mono border border-current' :
                  theme === 'sunset' ? 'rounded-full font-oswald' :
                  theme === 'vintage' ? 'rounded font-serif' :
                  theme === 'roastery' ? 'rounded-lg font-mono border border-cyan-500/30' :
                  'rounded font-oswald'
                } ${
                  selectedCategory === cat.id
                    ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                       theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                       theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                       theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                       theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 font-bold shadow' :
                       'bg-[#2076bd] text-white shadow')
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
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
              className={`w-full pl-9 pr-3.5 py-2 text-xs border focus:outline-none ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 text-black dark:text-white font-mono' :
                theme === 'sunset' ? 'rounded-full border-rose-200 bg-white text-gray-800' :
                theme === 'vintage' ? 'rounded border-[#e6ded1] bg-[#faf6f0] text-[#221e1a] font-serif' :
                theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                theme === 'dark' ? 'rounded border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                'rounded border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:border-[#2076bd]'
              }`}
            />
            <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Dynamic Theme-Adaptive Articles Layout */}
        {theme === 'nordic' ? (
          /* THEME: NORDIC - Tabular Brutalist Magazine Directory Index */
          <div className="border-2 border-zinc-900 dark:border-zinc-200 divide-y-2 divide-zinc-900 dark:divide-zinc-200 font-mono reveal-stagger">
            {filtered.map((art, idx) => {
              const articleTitle = language === 'en' ? (art.titleEn || art.title) : art.title;
              const articleCategory = language === 'en' ? (art.categoryEn || art.category) : art.category;
              const articleExcerpt = language === 'en' ? (art.excerptEn || art.excerpt) : art.excerpt;
              const articleReadTime = language === 'en' ? (art.readTimeEn || art.readTime) : art.readTime;

              return (
                <div
                  key={art.id}
                  id={art.id}
                  className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer group"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div className="md:col-span-2 text-xs text-zinc-500 space-y-1">
                    <span className="font-bold text-black dark:text-white block font-oswald text-sm">[{art.date || '2026-10-15'}]</span>
                    <span className="uppercase text-[10px] tracking-wider block text-amber-600">// {articleCategory}</span>
                  </div>

                  <div className="md:col-span-7 space-y-1">
                    <h3 className="font-oswald text-base font-bold uppercase tracking-wider text-black dark:text-white group-hover:text-amber-600 transition-colors leading-tight">
                      {articleTitle}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                      {articleExcerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4 text-xs font-mono">
                    <span className="text-zinc-400 text-[11px]">{articleReadTime}</span>
                    <span className="font-bold uppercase tracking-wider text-black dark:text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>{t('knowledge.read_more')}</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'vintage' ? (
          /* THEME: VINTAGE - 2-Column French Gazette Broadsheet */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif reveal-stagger">
            {filtered.map((art) => {
              const articleTitle = language === 'en' ? (art.titleEn || art.title) : art.title;
              const articleCategory = language === 'en' ? (art.categoryEn || art.category) : art.category;
              const articleExcerpt = language === 'en' ? (art.excerptEn || art.excerpt) : art.excerpt;
              const articleReadTime = language === 'en' ? (art.readTimeEn || art.readTime) : art.readTime;

              return (
                <div
                  key={art.id}
                  id={art.id}
                  className="bg-[#faf6f0] border-2 border-[#e6ded1] rounded-lg overflow-hidden shadow-xs hover:border-[#1b4d3e] transition-all flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div>
                    <div className="h-56 overflow-hidden bg-stone-100 relative border-b border-[#e6ded1]">
                      <img
                        src={art.image}
                        alt={articleTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#1b4d3e] text-white shadow-xs font-serif">
                        {articleCategory}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[#6e655c] italic border-b border-[#e6ded1] pb-2">
                        <span>{art.date || '2026-10-15'}</span>
                        <span>•</span>
                        <span>{articleReadTime}</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#221e1a] group-hover:text-[#1b4d3e] transition-colors leading-snug">
                        {articleTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#6e655c] line-clamp-3 leading-relaxed">
                        {articleExcerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#e6ded1] mt-2 flex items-center justify-between text-xs text-[#6e655c]">
                    <span className="italic">{art.author}</span>
                    <span className="font-sans font-bold text-[#1b4d3e] group-hover:underline flex items-center gap-1 text-[11px] uppercase tracking-wider">
                      <span>{t('knowledge.read_more')}</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'roastery' ? (
          /* THEME: ROASTERY - Cyber Knowledge Terminal (1 Hero Log + 2-Col Data Nodes) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono reveal-stagger">
            {filtered.map((art) => {
              const articleTitle = language === 'en' ? (art.titleEn || art.title) : art.title;
              const articleCategory = language === 'en' ? (art.categoryEn || art.category) : art.category;
              const articleExcerpt = language === 'en' ? (art.excerptEn || art.excerpt) : art.excerpt;
              const articleReadTime = language === 'en' ? (art.readTimeEn || art.readTime) : art.readTime;

              return (
                <div
                  key={art.id}
                  id={art.id}
                  className="bg-[#0b1324] border border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(2,132,199,0.15)] hover:border-cyan-400 transition-all flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div>
                    <div className="h-52 overflow-hidden bg-slate-950 relative border-b border-cyan-500/20">
                      <img
                        src={art.image}
                        alt={articleTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 shadow">
                        {articleCategory}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-cyan-500/80">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {art.date || '2026-10-15'}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {articleReadTime}</span>
                      </div>

                      <h3 className="font-oswald text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2 uppercase">
                        {articleTitle}
                      </h3>

                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                        {articleExcerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-cyan-500/20 mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] text-slate-400">{art.author}</span>
                    <span className="text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
                      <span>{t('knowledge.read_more')}</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'sunset' ? (
          /* THEME: SUNSET - 3-Column Organic Wave Pebble Cards */
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
                  className="bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-xl shadow-rose-500/5 hover-lift transition-all flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div>
                    <div className="h-56 overflow-hidden bg-rose-50 relative">
                      <img
                        src={art.image}
                        alt={articleTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md">
                        {articleCategory}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-[#7d6560]">
                        <span className="flex items-center gap-1 font-oswald"><Calendar size={12} /> {art.date || '2026-10-15'}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {articleReadTime}</span>
                      </div>

                      <h3 className="font-oswald text-lg font-bold text-[#271a17] group-hover:text-rose-600 transition-colors leading-snug line-clamp-2 uppercase">
                        {articleTitle}
                      </h3>

                      <p className="text-xs text-[#7d6560] line-clamp-3 leading-relaxed">
                        {articleExcerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-rose-100 mt-2 flex items-center justify-between text-xs text-[#7d6560]">
                    <span>{art.author}</span>
                    <span className="font-oswald text-rose-600 font-bold group-hover:underline flex items-center gap-1">
                      <span>{t('knowledge.read_more')}</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* THEME: OCEAN & CLASSIC DARK - Clean Balanced 3-Column Card Grid */
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
                        loading="lazy"
                      />
                      <span className={`absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow ${
                        theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 font-extrabold' : 'bg-[#2076bd] text-white'
                      }`}>
                        {articleCategory}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500">
                        <span className="flex items-center gap-1 font-oswald"><Calendar size={12} /> {art.date || '2026-10-15'}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {articleReadTime}</span>
                      </div>

                      <h3 className={`font-oswald text-lg font-bold text-[#222222] dark:text-white transition-colors leading-snug line-clamp-2 uppercase ${
                        theme === 'dark' ? 'group-hover:text-[#FAEA28]' : 'group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6]'
                      }`}>
                        {articleTitle}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {articleExcerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-slate-800 mt-2 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                    <span>{art.author}</span>
                    <span className={`font-oswald font-semibold group-hover:underline flex items-center gap-1 ${
                      theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}>
                      <span>{t('knowledge.read_more')}</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Article Detail Modal - Themed */}
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
                className={`max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative transition-all my-auto ${
                  theme === 'nordic' ? 'rounded-none border-2 border-black dark:border-white bg-white dark:bg-zinc-950 font-mono text-black dark:text-white' :
                  theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-white text-[#271a17]' :
                  theme === 'vintage' ? 'rounded-lg border-2 border-[#1b4d3e] bg-[#faf6f0] font-serif text-[#221e1a]' :
                  theme === 'roastery' ? 'rounded-xl border border-cyan-500/50 bg-[#0b1324] font-mono text-white shadow-[0_0_30px_rgba(2,132,199,0.3)]' :
                  theme === 'dark' ? 'rounded-2xl border border-slate-700 bg-[#0F172A] text-white shadow-2xl' :
                  'bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-slate-700/60 text-[#222222] dark:text-white'
                }`}
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#222222] dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close article modal"
                >
                  <X size={20} />
                </button>

                <div className="space-y-3">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono' :
                    theme === 'sunset' ? 'rounded-full bg-rose-500 text-white font-oswald' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] text-white font-serif' :
                    theme === 'roastery' ? 'rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40' :
                    theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 font-oswald rounded font-bold' :
                    'bg-[#2076bd] text-white font-oswald rounded'
                  }`}>
                    {modalCategory}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-bold uppercase ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-[#e11d48]' :
                    theme === 'roastery' ? 'font-oswald text-[#38bdf8]' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
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
                  className={`w-full h-64 sm:h-72 object-cover ${
                    theme === 'nordic' ? 'rounded-none' :
                    theme === 'sunset' ? 'rounded-2xl' :
                    'rounded-lg'
                  }`}
                />

                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line space-y-4">
                  {modalContent}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className={`px-6 py-2 text-xs font-semibold cursor-pointer ${
                      theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-zinc-800 font-mono' :
                      theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white' :
                      theme === 'vintage' ? 'rounded bg-[#1b4d3e] text-white hover:bg-[#13382d] font-serif' :
                      theme === 'roastery' ? 'rounded-lg bg-cyan-500 text-black font-bold font-mono' :
                      'dolphy-btn dolphy-btn-primary rounded'
                    }`}
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
