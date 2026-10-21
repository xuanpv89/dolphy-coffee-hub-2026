import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { branchesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Branches: React.FC = () => {
  const { t, language, theme } = useDolphy();
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const areas = [
    { id: 'all', name: t('branches.tab_all') },
    { id: 'Quận 2 (TP. Thủ Đức)', name: t('branches.tab_d2') },
    { id: 'Quận 7 (Phú Mỹ Hưng)', name: t('branches.tab_d7') },
    { id: 'Quận Bình Thạnh', name: t('branches.tab_bt') },
    { id: 'Quận 3 (Trung Tâm)', name: t('branches.tab_d3') }
  ];

  const filteredBranches = branchesData.filter(b => 
    selectedArea === 'all' || b.area === selectedArea
  );

  return (
    <div className="space-y-12 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header */}
      <section className={`reveal-on-scroll border-b text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden ${
        theme === 'vintage' ? 'bg-[#1b4d3e] border-[#2d6a4f]' :
        theme === 'nordic' ? 'bg-zinc-950 border-zinc-800' :
        theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 border-rose-300' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/30' :
        theme === 'dark' ? 'bg-[#0f172a] border-slate-800' :
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
            <MapPin size={13} />
            <span>{language === 'vi' ? 'HỆ THỐNG CHUỖI CỬA HÀNG DOLPHY CAFÉ' : 'DOLPHY CAFÉ STORE NETWORK'}</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight ${
            theme === 'vintage' ? 'font-serif' :
            theme === 'nordic' ? 'font-oswald tracking-widest' :
            'font-oswald'
          }`}>
            {t('branches.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('branches.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Interactive Google Map Embed */}
        <div className={`reveal-scale overflow-hidden shadow-md bg-white dark:bg-[#1e293b] border ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-300' :
          theme === 'sunset' ? 'rounded-3xl border-rose-200 shadow-xl shadow-rose-500/10' :
          theme === 'vintage' ? 'rounded-lg border-[#e6ded1]' :
          theme === 'roastery' ? 'rounded-xl border-cyan-500/40 shadow-[0_0_25px_rgba(2,132,199,0.2)]' :
          'rounded-lg border-gray-200 dark:border-slate-800'
        }`}>
          <div className={`p-4 text-white flex items-center justify-between ${
            theme === 'vintage' ? 'bg-[#1b4d3e]' :
            theme === 'roastery' ? 'bg-[#0b1324] border-b border-cyan-500/30 text-cyan-300' :
            theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500' :
            theme === 'nordic' ? 'bg-black text-white font-mono' :
            theme === 'dark' ? 'bg-[#0f172a] text-amber-400 border-b border-slate-800' :
            'bg-[#2076bd]'
          }`}>
            <div className="flex items-center gap-2">
              <MapPin size={18} className={
                theme === 'vintage' ? 'text-[#c05621]' :
                theme === 'roastery' ? 'text-cyan-400' :
                theme === 'sunset' ? 'text-white' :
                theme === 'nordic' ? 'text-amber-500' :
                'text-[#FAEA28]'
              } />
              <span className="font-oswald text-sm font-bold uppercase tracking-wide">
                {t('branches.map_box_title')}
              </span>
            </div>
            <a
              href={brandInfo.mapEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white hover:underline flex items-center gap-1 font-oswald"
            >
              <span>{t('branches.view_fullscreen_map')}</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <iframe
            src={brandInfo.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            title="Bản đồ hệ thống Dolphy Café"
          />
        </div>

        {/* Filter Area Tabs */}
        <div className="flex justify-center reveal-on-scroll">
          <div className={`flex flex-wrap gap-2 p-1.5 ${
            theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-900' :
            theme === 'sunset' ? 'rounded-full bg-rose-50 border border-rose-200 p-2' :
            theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1]' :
            theme === 'roastery' ? 'rounded-xl bg-slate-900 border border-cyan-500/30' :
            'rounded-lg bg-gray-100 dark:bg-slate-800'
          }`}>
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all ${
                  theme === 'nordic' ? 'rounded-none font-mono' :
                  theme === 'sunset' ? 'rounded-full font-oswald' :
                  theme === 'vintage' ? 'rounded font-sans' :
                  theme === 'roastery' ? 'rounded-lg font-mono' :
                  'rounded font-oswald'
                } ${
                  selectedArea === area.id
                    ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                       theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                       theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                       theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                       theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                       'bg-[#2076bd] text-white shadow')
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Theme-Adaptive Branches Grid Layout */}
        {theme === 'vintage' ? (
          /* THEME: VINTAGE - 2-Column French Colonial Villa Broadside */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger font-serif">
            {filteredBranches.map((branch) => {
              const areaLabel = language === 'en' ? (
                branch.area.includes('Quận 2') ? 'District 2 (Thu Duc City)' :
                branch.area.includes('Quận 7') ? 'District 7 (Phu My Hung)' :
                branch.area.includes('Bình Thạnh') ? 'Binh Thanh District' :
                branch.area.includes('Quận 3') ? 'District 3 (City Center)' : branch.area
              ) : branch.area;

              const hoursLabel = branch.openingHours 
                ? (language === 'en' ? branch.openingHours.replace('Mở cửa mỗi ngày', 'Open Daily').replace('hàng ngày', 'daily') : branch.openingHours)
                : (language === 'en' ? '07:00 - 22:30 Daily' : '07:00 - 22:30 hàng ngày');

              return (
                <div
                  key={branch.id}
                  className="bg-[#faf6f0] border-2 border-[#e6ded1] rounded-lg p-6 flex flex-col sm:flex-row gap-5 hover:border-[#1b4d3e] transition-all shadow-xs group"
                >
                  <div className="w-full sm:w-48 aspect-square sm:aspect-auto rounded overflow-hidden shrink-0 bg-white border border-[#e6ded1]">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-sans tracking-[0.2em] text-[#1b4d3e] uppercase font-bold block mb-1">
                        {areaLabel}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-[#221e1a] group-hover:text-[#1b4d3e] transition-colors leading-snug">
                        {branch.name}
                      </h3>
                      <div className="space-y-1.5 text-xs text-[#6e655c] font-sans mt-3">
                        <div className="flex items-start gap-1.5">
                          <MapPin size={13} className="text-[#1b4d3e] shrink-0 mt-0.5" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#1b4d3e] shrink-0" />
                          <span>{hoursLabel}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#e6ded1]">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ', TP. Hồ Chí Minh')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#1b4d3e] bg-[#1b4d3e] text-white hover:bg-[#c05621] text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer"
                      >
                        <Navigation size={12} />
                        <span>{t('branches.get_directions')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'nordic' ? (
          /* THEME: NORDIC - Brutalist Architectural 3-Column Studio Grid */
          <div className="border-2 border-zinc-900 dark:border-zinc-200 divide-y md:divide-y-0 md:divide-x divide-zinc-900 dark:divide-zinc-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-none reveal-stagger font-mono">
            {filteredBranches.map((branch, idx) => {
              const areaLabel = language === 'en' ? (
                branch.area.includes('Quận 2') ? 'District 2 (Thu Duc City)' :
                branch.area.includes('Quận 7') ? 'District 7 (Phu My Hung)' :
                branch.area.includes('Bình Thạnh') ? 'Binh Thanh District' :
                branch.area.includes('Quận 3') ? 'District 3 (City Center)' : branch.area
              ) : branch.area;

              return (
                <div
                  key={branch.id}
                  className="bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between group hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-500 pb-2 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                      <span>[0{idx + 1} // BRANCH]</span>
                      <span className="uppercase text-black dark:text-white font-bold">{areaLabel}</span>
                    </div>

                    <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="font-oswald text-base font-bold uppercase tracking-wider text-black dark:text-white leading-tight">
                      {branch.name}
                    </h3>
                    <div className="mt-3 space-y-1 text-xs font-mono text-zinc-500">
                      <p className="line-clamp-2">{branch.address}</p>
                      <p>{branch.phone}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ', TP. Hồ Chí Minh')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-[0.12em] font-bold hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-black transition-colors rounded-none flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Navigation size={12} />
                      <span>+ {t('branches.get_directions')}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'roastery' ? (
          /* THEME: ROASTERY - Cyber Station Node HUD Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger font-mono">
            {filteredBranches.map((branch, idx) => {
              const areaLabel = language === 'en' ? (
                branch.area.includes('Quận 2') ? 'District 2 (Thu Duc City)' :
                branch.area.includes('Quận 7') ? 'District 7 (Phu My Hung)' :
                branch.area.includes('Bình Thạnh') ? 'Binh Thanh District' :
                branch.area.includes('Quận 3') ? 'District 3 (City Center)' : branch.area
              ) : branch.area;

              return (
                <div
                  key={branch.id}
                  className="bg-[#0b1324] border border-cyan-500/40 rounded-xl p-5 flex flex-col justify-between hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(2,132,199,0.15)] group"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-cyan-500/20 mb-4">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/90 border border-cyan-500/40 text-[9px] text-cyan-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>[NODE_0{idx + 1}]</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors uppercase leading-snug font-oswald">
                      {branch.name}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-start gap-1.5">
                        <MapPin size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone size={13} className="text-amber-400 shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-cyan-500/20">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ', TP. Hồ Chí Minh')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <Navigation size={12} />
                      <span>{t('branches.get_directions')}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : theme === 'sunset' ? (
          /* THEME: SUNSET - Organic Staggered Pebble Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {filteredBranches.map((branch) => {
              const areaLabel = language === 'en' ? (
                branch.area.includes('Quận 2') ? 'District 2 (Thu Duc City)' :
                branch.area.includes('Quận 7') ? 'District 7 (Phu My Hung)' :
                branch.area.includes('Bình Thạnh') ? 'Binh Thanh District' :
                branch.area.includes('Quận 3') ? 'District 3 (City Center)' : branch.area
              ) : branch.area;

              return (
                <div
                  key={branch.id}
                  className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xl shadow-rose-500/5 hover-lift transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-rose-50 mb-4">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {areaLabel}
                      </span>
                    </div>

                    <h3 className="font-oswald text-lg font-bold text-[#271a17] group-hover:text-rose-600 transition-colors uppercase leading-snug">
                      {branch.name}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-xs text-[#7d6560]">
                      <div className="flex items-start gap-1.5">
                        <MapPin size={13} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone size={13} className="text-orange-500 shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-rose-100">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ', TP. Hồ Chí Minh')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-rose-500/25 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Navigation size={12} />
                      <span>{t('branches.get_directions')}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* THEME: OCEAN & CLASSIC DARK - Classic 3-Column Balanced Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {filteredBranches.map((branch) => {
              const areaLabel = language === 'en' ? (
                branch.area.includes('Quận 2') ? 'District 2 (Thu Duc City)' :
                branch.area.includes('Quận 7') ? 'District 7 (Phu My Hung)' :
                branch.area.includes('Bình Thạnh') ? 'Binh Thanh District' :
                branch.area.includes('Quận 3') ? 'District 3 (City Center)' : branch.area
              ) : branch.area;

              const hoursLabel = branch.openingHours 
                ? (language === 'en' ? branch.openingHours.replace('Mở cửa mỗi ngày', 'Open Daily').replace('hàng ngày', 'daily') : branch.openingHours)
                : (language === 'en' ? '07:00 - 22:30 Daily' : '07:00 - 22:30 hàng ngày');

              const feats = language === 'en' ? (branch.featuresEn || branch.features) : branch.features;

              return (
                <div
                  key={branch.id}
                  className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm hover-lift hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-900">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow ${
                        theme === 'dark' ? 'bg-[#FAEA28] text-slate-950' : 'bg-[#2076bd] text-white'
                      }`}>
                        {areaLabel}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className={`font-oswald text-lg font-bold uppercase leading-snug transition-colors ${
                        theme === 'dark' 
                          ? 'text-white group-hover:text-[#FAEA28]' 
                          : 'text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6]'
                      }`}>
                        {branch.name}
                      </h3>

                      <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                        <div className="flex items-start gap-2">
                          <MapPin size={15} className={`shrink-0 mt-0.5 ${
                            theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                          }`} />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={15} className={`shrink-0 ${
                            theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                          }`} />
                          <span>{hoursLabel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={15} className={`shrink-0 ${
                            theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                          }`} />
                          <span>{branch.phone}</span>
                        </div>
                      </div>

                      {/* Amenities / Features */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {(feats || []).map((feature, ai) => (
                          <span
                            key={ai}
                            className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address + ', TP. Hồ Chí Minh')}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-2.5 rounded border text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                        theme === 'dark'
                          ? 'bg-slate-800 hover:bg-[#FAEA28] text-amber-400 hover:text-slate-950 border-slate-700'
                          : 'bg-gray-50 dark:bg-slate-800 hover:bg-[#2076bd] dark:hover:bg-[#2076bd] text-[#2076bd] dark:text-[#3ba0e6] hover:text-white dark:hover:text-white border-gray-200 dark:border-slate-700'
                      }`}
                    >
                      <Navigation size={13} />
                      <span>{t('branches.get_directions')}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
