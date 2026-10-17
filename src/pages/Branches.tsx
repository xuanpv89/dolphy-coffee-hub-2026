import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Wifi, Coffee, Sparkles } from 'lucide-react';
import { branchesData, brandInfo } from '../data/dolphyData';

export const Branches: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const areas = [
    { id: 'all', name: 'TẤT CẢ (10 CỬA HÀNG)' },
    { id: 'Quận 2 (TP. Thủ Đức)', name: 'QUẬN 2 (5 CỬA HÀNG)' },
    { id: 'Quận 7 (Phú Mỹ Hưng)', name: 'QUẬN 7 (4 CỬA HÀNG)' },
    { id: 'Quận Bình Thạnh', name: 'BÌNH THẠNH (1 CỬA HÀNG)' }
  ];

  const filteredBranches = branchesData.filter(b => 
    selectedArea === 'all' || b.area === selectedArea
  );

  return (
    <div className="space-y-12 pb-20 bg-white text-[#222222]">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
            HỆ THỐNG CHUỖI CỬA HÀNG DOLPHY CAFE
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            10 CHI NHÁNH DOLPHY CAFÉ TẠI TP.HCM
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Khám phá những góc quán cà phê thân thiện của Dolphy tại Thảo Điền, Phú Mỹ Hưng và Bình Thạnh. Luôn sẵn sàng phục vụ bạn những tách cà phê thơm lành.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Interactive Google Map Embed */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md bg-white">
          <div className="p-4 bg-[#2076bd] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#f09c05]" />
              <span className="font-oswald text-sm font-bold uppercase tracking-wide">
                BẢN ĐỒ SỐ 10 CHI NHÁNH DOLPHY CAFÉ
              </span>
            </div>
            <a
              href={brandInfo.mapEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white hover:underline flex items-center gap-1 font-oswald"
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
          <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 rounded-lg">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 sm:px-6 py-2 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all ${
                  selectedArea === area.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'text-gray-600 hover:text-[#222222]'
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
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2076bd] text-white">
                    {branch.area}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-oswald text-lg font-bold text-[#222222] group-hover:text-[#2076bd] transition-colors uppercase leading-snug">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={15} className="text-[#2076bd] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-[#2076bd] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-[#2076bd] shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {branch.amenities.map((amenity, ai) => (
                      <span
                        key={ai}
                        className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium"
                      >
                        {amenity}
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
                  className="w-full py-2.5 rounded bg-gray-50 hover:bg-[#2076bd] text-[#2076bd] hover:text-white border border-gray-200 text-xs font-oswald font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation size={13} />
                  <span>CHỈ ĐƯỜNG GOOGLE MAPS</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
