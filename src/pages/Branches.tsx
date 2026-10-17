import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { branchesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Branches: React.FC = () => {
  const { t, language } = useDolphy();
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
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold shadow">
            <MapPin size={13} />
            <span>{language === 'vi' ? 'HỆ THỐNG CHUỖI CỬA HÀNG DOLPHY CAFÉ' : 'DOLPHY CAFÉ STORE NETWORK'}</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            {t('branches.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('branches.hero_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Interactive Google Map Embed */}
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800 shadow-md bg-white dark:bg-[#1e293b]">
          <div className="p-4 bg-[#2076bd] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#FAEA28]" />
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
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 dark:bg-slate-800 rounded-lg">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 sm:px-6 py-2 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all ${
                  selectedArea === area.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-900">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2076bd] text-white shadow">
                    {areaLabel}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-oswald text-lg font-bold text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors uppercase leading-snug">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <MapPin size={15} className="text-[#2076bd] dark:text-[#3ba0e6] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-[#2076bd] dark:text-[#3ba0e6] shrink-0" />
                      <span>{hoursLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-[#2076bd] dark:text-[#3ba0e6] shrink-0" />
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
                  className="w-full py-2.5 rounded bg-gray-50 dark:bg-slate-800 hover:bg-[#2076bd] dark:hover:bg-[#2076bd] text-[#2076bd] dark:text-[#3ba0e6] hover:text-white dark:hover:text-white border border-gray-200 dark:border-slate-700 text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation size={13} />
                  <span>{t('branches.get_directions')}</span>
                </a>
              </div>
            </div>
          )})}
        </div>

      </div>
    </div>
  );
};
