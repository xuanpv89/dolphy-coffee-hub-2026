import React, { useState } from 'react';
import { Award, CheckCircle2, Clock, MapPin, Users, Sparkles, ChevronDown, ChevronUp, QrCode } from 'lucide-react';
import { coursesData, brandInfo } from '../../data/dolphyData';
import { useDolphy } from '../../context/DolphyContext';

export const AcademyV2: React.FC = () => {
  const { setEnrollingCourse, language } = useDolphy();
  const [activeCourseId, setActiveCourseId] = useState<string>('barista-thuc-chien');
  const [openSession, setOpenSession] = useState<number | null>(1);

  const currentCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

  return (
    <div className="bg-[#FAF6F0] dark:bg-[#120E0B] text-[#2A1E17] dark:text-[#EFE7DE] min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Banner */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] text-amber-300 font-serif-cormorant text-xs uppercase tracking-widest font-bold">
            <Sparkles size={13} />
            <span>Học Viện Nghề & Xưởng Đào Tạo Barista Thực Chiến</span>
          </div>

          <h1 className="font-serif-cormorant text-4xl sm:text-6xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
            Dolphy Barista Atelier
          </h1>

          <p className="font-serif-cormorant italic text-base sm:text-lg text-[#6B5A4D] dark:text-[#B5A595]">
            Đào tạo kỹ năng pha chế toàn diện, thực hành 100% tại quầy bar chuỗi cửa hàng Dolphy và cam kết ưu tiên việc làm ngay sau khi tốt nghiệp.
          </p>
        </div>

        {/* 4 Course Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coursesData.map((c, idx) => {
            const active = activeCourseId === c.id;
            const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
            const title = language === 'en' && c.titleEn ? c.titleEn : c.title;

            return (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`p-5 rounded-2xl text-left transition-all flex flex-col justify-between min-h-[140px] border relative ${
                  active
                    ? 'bg-[#1A1410] text-white border-[#1A1410] dark:bg-[#251C15] dark:border-amber-400/50 shadow-xl ring-2 ring-amber-400/30'
                    : 'bg-white dark:bg-[#1A1410] text-[#3A2D23] dark:text-[#C5B7A9] border-[#E8DFC8] dark:border-[#2C2219] hover:border-[#2076bd]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      active ? 'bg-white/20 text-white' : 'bg-[#FAF6F0] dark:bg-[#2A1E17] text-[#2076bd]'
                    }`}>
                      KHOÁ #{idx + 1}
                    </span>
                    <span className={`font-serif-cormorant text-lg font-bold ${active ? 'text-[#FAEA28]' : 'text-[#857200] dark:text-[#FAEA28]'}`}>
                      {price}₫
                    </span>
                  </div>

                  <h3 className={`font-serif-cormorant text-base sm:text-lg font-bold leading-tight ${active ? 'text-white' : 'text-[#1A1410] dark:text-white'}`}>
                    {title}
                  </h3>
                </div>

                <div className="pt-3 text-[11px] font-mono text-[#8C7A6B] flex items-center justify-between">
                  <span>{c.duration}</span>
                  <span className={active ? 'text-amber-400 font-bold' : ''}>{active ? '● Đang chọn' : 'Chạm xem ➜'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Course Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info & Syllabus */}
          <div className="lg:col-span-8 space-y-8 bg-white dark:bg-[#1A1410] p-6 sm:p-10 rounded-3xl border border-[#E8DFC8] dark:border-[#2B2018] shadow-sm text-left">
            <div>
              <span className="text-xs font-mono font-bold text-amber-500 uppercase">
                {currentCourse.badge} • Thời lượng: {currentCourse.duration}
              </span>
              <h2 className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#1A1410] dark:text-[#FAF6F0] mt-1">
                {language === 'en' && currentCourse.titleEn ? currentCourse.titleEn : currentCourse.title}
              </h2>
              <p className="font-serif-cormorant italic text-base text-[#6B5A4D] dark:text-[#B5A595] mt-2">
                {language === 'en' && currentCourse.subtitleEn ? currentCourse.subtitleEn : currentCourse.subtitle}
              </p>
            </div>

            {/* USPs */}
            <div className="p-5 rounded-2xl bg-[#FAF6F0] dark:bg-[#150F0C] border border-[#E8DFC8] dark:border-[#261C14] space-y-2">
              <h4 className="font-oswald text-xs uppercase tracking-wider text-[#2076bd] font-bold">
                Đặc Quyền Học Viên
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A4A3E] dark:text-[#C5B7A9]">
                {(currentCourse.usps || currentCourse.outcomes || []).map((u, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#2076bd] shrink-0" />
                    <span>{u}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="space-y-3">
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                Giáo Trình Thực Chiến Từng Buổi
              </h3>

              <div className="space-y-2.5">
                {currentCourse.syllabus.map((s) => {
                  const isOpen = openSession === s.session;
                  return (
                    <div
                      key={s.session}
                      className="border border-[#E8DFC8] dark:border-[#2B2018] rounded-xl overflow-hidden bg-[#FBF8F3] dark:bg-[#1C1612]"
                    >
                      <button
                        onClick={() => setOpenSession(isOpen ? null : s.session)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-[#1A1410] text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                            #{s.session}
                          </span>
                          <span className="font-serif-cormorant text-base font-bold text-[#1A1410] dark:text-[#FAF6F0]">
                            {s.title}
                          </span>
                        </div>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 border-t border-[#E8DFC8] dark:border-[#2B2018] text-xs text-[#705F52] dark:text-[#A8988B] space-y-2">
                          <p>{s.description}</p>
                          <ul className="list-disc list-inside space-y-0.5 pl-2 font-mono text-[11px]">
                            {(s.practicalSkills || []).map((sk, si) => (
                              <li key={si}>{sk}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing & Deposit Card */}
          <div className="lg:col-span-4 bg-white dark:bg-[#1A1410] p-6 rounded-3xl border border-[#E8DFC8] dark:border-[#2B2018] shadow-lg sticky top-24 space-y-6 text-left">
            <div className="border-b border-[#E8DFC8] dark:border-[#2B2018] pb-4 text-center">
              <span className="text-[11px] font-mono text-[#8C7A6B] uppercase tracking-wider block">Học Phí Toàn Khóa</span>
              <div className="font-serif-cormorant text-4xl font-bold text-[#2076bd] my-1">
                {(currentCourse.discountPrice || currentCourse.price).toLocaleString('vi-VN')}₫
              </div>
              <span className="text-xs font-mono font-bold text-amber-500">
                Đặt cọc giữ chỗ: {(currentCourse.depositAmount || 2000000).toLocaleString('vi-VN')}₫
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#6B5A4D] dark:text-[#B5A595]">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-[#2076bd]" />
                <span>Thời lượng: <strong>{currentCourse.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-[#2076bd]" />
                <span>Quy mô: <strong>Tối đa 4 - 6 học viên/lớp</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#2076bd]" />
                <span>Địa điểm: <strong>Dolphy Thảo Điền & Trần Lựu</strong></span>
              </div>
            </div>

            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className="w-full py-3.5 rounded-full bg-[#1A1410] hover:bg-black text-amber-300 font-oswald text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <QrCode size={16} />
              <span>ĐĂNG KÝ & TẠO VIETQR CỌC</span>
            </button>

            <p className="text-[11px] text-center text-[#8C7A6B]">
              Tư vấn trực tiếp: <a href="tel:0938084985" className="text-amber-500 font-bold">{brandInfo.hotline}</a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
