import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Wifi, Coffee, Sparkles } from 'lucide-react';
import { branchesData, brandInfo } from '../data/dolphyData';

export const Branches: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const areas = [
    { id: 'all', name: 'Tất Cả (10 Cửa Hàng)' },
    { id: 'Quận 2 (TP. Thủ Đức)', name: 'Quận 2 (5 Cửa Hàng)' },
    { id: 'Quận 7 (Phú Mỹ Hưng)', name: 'Quận 7 (4 Cửa Hàng)' },
    { id: 'Quận Bình Thạnh', name: 'Bình Thạnh (1 Cửa Hàng)' }
  ];

  const filteredBranches = branchesData.filter(b => 
    selectedArea === 'all' || b.area === selectedArea
  );

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAEDCD]">
            Hệ Thống Chuỗi Quán Cà Phê
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
            10 Cửa Hàng Dolphy Café Tại TP.HCM
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-2xl mx-auto">
            Khám phá những góc quán cà phê thân thiện của Dolphy tại Thảo Điền, Phú Mỹ Hưng và Bình Thạnh. Luôn sẵn sàng phục vụ bạn những tách cà phê thơm lành.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Interactive Google Map Embed */}
        <div className="rounded-3xl overflow-hidden border border-[#E8E0D5] shadow-lg bg-white">
          <div className="p-4 bg-[#24140A] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#D4A373]" />
              <span className="font-display text-sm font-bold">Bản Đồ Số 10 Chi Nhánh Dolphy Café</span>
            </div>
            <a
              href={brandInfo.mapEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FAEDCD] hover:underline flex items-center gap-1"
            >
              <span>Xem toàn màn hình</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <iframe
            src={brandInfo.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            title="Bản đồ hệ thống Dolphy Cafe"
          />
        </div>

        {/* Filter Area Tabs */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E8E0D5]">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedArea === area.id
                    ? 'bg-[#4A2C11] text-[#FAEDCD] shadow-md'
                    : 'text-[#7A6E68] hover:text-[#24140A]'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#24140A]/80 text-[#FAEDCD]">
                  {branch.area}
                </span>
                {branch.isFlagship && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E76F51] text-white">
                    Flagship Store
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-display text-lg font-bold text-[#24140A] group-hover:text-[#8C5329] transition-colors">
                    {branch.name}
                  </h3>
                  <div className="text-xs text-gray-700 flex items-start gap-2 leading-relaxed">
                    <MapPin size={16} className="text-[#E76F51] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-2">
                    <Clock size={15} className="text-[#8C5329] shrink-0" />
                    <span>{branch.openingHours}</span>
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-2">
                    <Phone size={15} className="text-[#8C5329] shrink-0" />
                    <span>Hotline: <strong>{branch.phone}</strong></span>
                  </div>

                  {/* Features */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {branch.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E8E0D5] text-[#7A6E68]"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-2">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4DC] border border-[#E8E0D5] text-[#4A2C11] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation size={14} />
                    <span>Chỉ Đường</span>
                  </a>
                  <a
                    href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                    className="px-4 py-2.5 rounded-xl bg-[#4A2C11] hover:bg-[#8C5329] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone size={14} />
                    <span>Gọi Quán</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
