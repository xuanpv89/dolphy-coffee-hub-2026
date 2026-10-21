import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Clock, MapPin, Award, Users, Gift, ChevronDown, ChevronUp, QrCode } from 'lucide-react';
import { coursesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Academy: React.FC = () => {
  const { setEnrollingCourse, t, language, theme } = useDolphy();
  const [activeCourseId, setActiveCourseId] = useState<string>('barista-thuc-chien');
  const [openSyllabusSession, setOpenSyllabusSession] = useState<number | null>(1);

  const currentCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

  const themeAccentText = 
    theme === 'vintage' ? 'text-[#1b4d3e]' :
    theme === 'sunset' ? 'text-rose-600' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'nordic' ? 'text-black dark:text-white' :
    theme === 'dark' ? 'text-[#FAEA28]' :
    'text-[#2076bd] dark:text-[#3ba0e6]';

  const faqs = [
    {
      q: language === 'vi' ? 'Tôi chưa biết gì về cà phê hay pha chế thì có học được không?' : 'Can I take the course if I have zero prior coffee or barista knowledge?',
      a: language === 'vi' 
        ? 'Hoàn toàn được! Khóa Barista Thực Chiến tại Dolphy Academy được thiết kế từ con số 0. Giảng viên sẽ hướng dẫn từ cách phân biệt hạt, nén cà phê, đến vận hành máy pha công nghiệp và đánh sữa theo phương pháp "cầm tay chỉ việc".'
        : 'Absolutely yes! The Dolphy Barista Masterclass is designed from ground zero. Master Trainers guide you hand-in-hand from coffee bean evaluation, tamping, commercial espresso machine operations to latte art milk steaming.'
    },
    {
      q: language === 'vi' ? 'Cam kết việc làm sau khóa học của Dolphy hoạt động như thế nào?' : 'How does Dolphy’s post-graduation employment priority work?',
      a: language === 'vi'
        ? 'Sau khi hoàn thành 7 buổi học và vượt qua bài thi thực hành cuối khóa, bạn sẽ được ưu tiên tuyển dụng ngay vào hệ thống 10 chi nhánh Dolphy Café tại Quận 2, Quận 7 hoặc Bình Thạnh với mức lương 25.000 – 35.000 đ/giờ. Nếu bạn muốn làm việc tại các chuỗi khác hoặc đi du học, Dolphy sẽ cấp chứng chỉ và thư giới thiệu (Letter of Recommendation).'
        : 'Upon graduating and passing the practical on-bar examination, students are immediately prioritized for hiring across our 10 Dolphy branches in D2, D7, and Binh Thanh. If relocating or applying abroad, Dolphy provides an official Certificate and Letter of Recommendation.'
    },
    {
      q: language === 'vi' ? 'Dolphy có ràng buộc độc quyền học viên sau khi tốt nghiệp không?' : 'Does Dolphy require exclusive employment post-graduation?',
      a: language === 'vi'
        ? 'Tuyệt đối KHÔNG. Bạn hoàn toàn tự do lựa chọn nơi làm việc, mở quán riêng hoặc làm việc tại bất kỳ thương hiệu nào. Dolphy không có bất kỳ điều khoản ràng buộc độc quyền nào.'
        : 'Strictly NO. You are completely free to work anywhere, start your own cafe, or travel abroad. Dolphy imposes zero restrictive exclusivity clauses.'
    },
    {
      q: language === 'vi' ? 'Một lớp học có bao nhiêu học viên?' : 'What is the class size per session?',
      a: language === 'vi'
        ? 'Dolphy Academy cam kết duy trì quy mô lớp nhỏ tối đa chỉ từ 4 đến 6 học viên để đảm bảo mỗi học viên đều có tối đa thời gian đứng máy pha trực tiếp trong suốt buổi học.'
        : 'Dolphy Academy strictly caps cohorts at 4 to 6 students to ensure maximum hands-on machine practice time for every participant.'
    },
    {
      q: language === 'vi' ? 'Chính sách đặt cọc và hoàn phí như thế nào?' : 'What is the deposit and reservation policy?',
      a: language === 'vi'
        ? 'Bạn chỉ cần đặt cọc 2.000.000đ để giữ chỗ lớp học qua hệ thống VietQR tự động. Số học phí còn lại có thể thanh toán vào buổi học đầu tiên. Nếu có việc bận đột xuất, bạn được dời lịch sang khóa tiếp theo hoàn toàn miễn phí.'
        : 'A 2,000,000 VND reservation deposit is transferred via instant VietQR. Remaining tuition is paid on day one. Schedule rescheduling to upcoming cohorts is completely free of charge.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* 1. HERO BANNER */}
      <section className={`reveal-on-scroll border-b text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center relative ${
        theme === 'vintage' ? 'bg-[#1b4d3e] border-[#2d6a4f]' :
        theme === 'nordic' ? 'bg-zinc-950 border-zinc-800' :
        theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 border-rose-300' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/30' :
        'bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800'
      }`}>
        <div className="max-w-5xl mx-auto space-y-5 relative z-10">
          
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow ${
            theme === 'nordic' ? 'rounded-none bg-white text-black font-mono border border-black' :
            theme === 'sunset' ? 'rounded-full bg-white text-rose-600 font-oswald shadow-md' :
            theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white font-serif' :
            theme === 'roastery' ? 'rounded-md bg-cyan-950 text-cyan-400 font-mono border border-cyan-500/40' :
            'rounded bg-[#FAEA28] text-slate-950 font-oswald'
          }`}>
            <GraduationCap size={15} />
            <span>{t('academy.hero_tag')}</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight ${
            theme === 'vintage' ? 'font-serif' :
            theme === 'nordic' ? 'font-oswald tracking-widest' :
            'font-oswald'
          }`}>
            {t('academy.hero_title')}
          </h1>

          <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {t('academy.hero_desc')}
          </p>

          {/* Quick Perks */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100 dark:text-blue-200 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#FAEA28]" /> {language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#FAEA28]" /> {language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#FAEA28]" /> {language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#FAEA28]" /> {language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className={`dolphy-btn dolphy-btn-amber px-8 py-3.5 text-sm font-semibold shadow-xl hover-lift ${
                theme === 'nordic' ? 'rounded-none font-mono border-2 border-black' :
                theme === 'sunset' ? 'rounded-full font-oswald' :
                theme === 'vintage' ? 'rounded-md font-serif' :
                'rounded'
              }`}
            >
              <GraduationCap size={18} className="mr-2" />
              <span>{t('academy.reserve_cta')}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. COURSE SELECTOR TABS & CARDS - Dynamic Layout Transformation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider px-1">
            <span className={`font-bold flex items-center gap-1.5 ${
              theme === 'vintage' ? 'text-[#1b4d3e]' :
              theme === 'sunset' ? 'text-rose-600' :
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'nordic' ? 'text-black dark:text-white font-mono' :
              theme === 'dark' ? 'text-[#FAEA28]' :
              'text-[#2076bd] dark:text-[#3ba0e6]'
            }`}>
              <GraduationCap size={16} />
              <span>{language === 'vi' ? '4 CHƯƠNG TRÌNH ĐÀO TẠO THỰC CHIẾN' : '4 DOLPHY TRAINING PROGRAMS'}</span>
            </span>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {language === 'vi' ? 'Chọn khóa học để xem lộ trình chi tiết' : 'Select a course to view details'}
            </span>
          </div>

          {theme === 'nordic' ? (
            /* NORDIC: Architectural Tabular Curriculum Matrix */
            <div className="border-2 border-zinc-900 dark:border-zinc-200 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900 dark:divide-zinc-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-mono reveal-stagger">
              {coursesData.map((c, idx) => {
                const active = activeCourseId === c.id;
                const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
                const duration = language === 'en' && c.durationEn ? c.durationEn : c.duration;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseId(c.id)}
                    className={`p-5 text-left transition-colors flex flex-col justify-between min-h-[140px] cursor-pointer ${
                      active
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-white dark:bg-zinc-950 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] border-b pb-2 mb-3 border-current/20">
                        <span>[0{idx + 1} // PROGRAM]</span>
                        <span className="font-bold">{price}₫</span>
                      </div>
                      <h3 className="font-oswald text-base font-bold uppercase tracking-wider leading-snug">
                        {title}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-current/20 flex items-center justify-between text-[10px] tracking-wider uppercase mt-4">
                      <span>{duration}</span>
                      <span className="font-bold">{active ? (language === 'vi' ? '● Đang chọn' : '● Selected') : (language === 'vi' ? 'Xem chi tiết →' : 'View →')}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : theme === 'vintage' ? (
            /* VINTAGE: French Culinary Atelier Curriculum Board */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-serif reveal-stagger">
              {coursesData.map((c, idx) => {
                const active = activeCourseId === c.id;
                const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
                const duration = language === 'en' && c.durationEn ? c.durationEn : c.duration;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseId(c.id)}
                    className={`p-5 rounded-lg text-left transition-all flex flex-col justify-between min-h-[140px] border-2 cursor-pointer shadow-xs ${
                      active
                        ? 'bg-[#1b4d3e] text-white border-[#1b4d3e] shadow-lg scale-[1.02]'
                        : 'bg-[#faf6f0] text-[#221e1a] border-[#e6ded1] hover:border-[#1b4d3e]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-current/20 mb-2">
                        <span className="italic">Lớp số {idx + 1}</span>
                        <span className="font-bold">{price}₫</span>
                      </div>
                      <h3 className="font-serif text-base font-bold leading-snug">
                        {title}
                      </h3>
                    </div>
                    <div className="pt-2 border-t border-current/20 flex items-center justify-between text-xs mt-3">
                      <span className="italic">{duration}</span>
                      <span className="font-sans font-bold text-[10px] uppercase tracking-wider">{active ? (language === 'vi' ? '● Đang chọn' : '● Selected') : (language === 'vi' ? 'Xem chi tiết →' : 'View →')}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : theme === 'roastery' ? (
            /* ROASTERY: Cyber Holo Console Program Pods */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono reveal-stagger">
              {coursesData.map((c, idx) => {
                const active = activeCourseId === c.id;
                const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
                const duration = language === 'en' && c.durationEn ? c.durationEn : c.duration;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseId(c.id)}
                    className={`p-5 rounded-xl text-left transition-all flex flex-col justify-between min-h-[140px] border cursor-pointer ${
                      active
                        ? 'bg-[#0f172a] text-cyan-400 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.35)] scale-[1.02]'
                        : 'bg-[#0b1324] text-slate-300 border-cyan-500/20 hover:border-cyan-500/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-cyan-400 pb-2 border-b border-cyan-500/20 mb-2">
                        <span>[TRACK_0{idx + 1}]</span>
                        <span className="font-bold text-pink-400">{price}₫</span>
                      </div>
                      <h3 className="font-oswald text-sm font-bold uppercase tracking-wider leading-snug text-white">
                        {title}
                      </h3>
                    </div>
                    <div className="pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[11px] mt-3">
                      <span>{duration}</span>
                      <span className="font-bold uppercase tracking-wider text-cyan-400">{active ? (language === 'vi' ? '● Đang chọn' : '● Selected') : (language === 'vi' ? 'Xem chi tiết →' : 'View →')}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : theme === 'sunset' ? (
            /* SUNSET: Organic 4-Pebble Program Buttons */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-stagger">
              {coursesData.map((c, idx) => {
                const active = activeCourseId === c.id;
                const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
                const duration = language === 'en' && c.durationEn ? c.durationEn : c.duration;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseId(c.id)}
                    className={`p-5 rounded-3xl text-left transition-all flex flex-col justify-between min-h-[140px] border cursor-pointer ${
                      active
                        ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white border-transparent shadow-xl shadow-rose-500/25 scale-[1.02]'
                        : 'bg-white text-[#271a17] border-rose-100 hover:border-rose-300 shadow-md shadow-rose-500/5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-current/20 mb-2">
                        <span className="font-oswald uppercase text-[10px] tracking-wider font-bold">Khóa 0{idx + 1}</span>
                        <span className="font-oswald font-bold">{price}₫</span>
                      </div>
                      <h3 className="font-oswald text-base font-bold uppercase leading-snug">
                        {title}
                      </h3>
                    </div>
                    <div className="pt-2 border-t border-current/20 flex items-center justify-between text-xs mt-3">
                      <span className="text-[11px]">{duration}</span>
                      <span className="font-oswald font-bold uppercase text-[10px] tracking-wider">{active ? (language === 'vi' ? '● Đang chọn' : '● Selected') : (language === 'vi' ? 'Xem chi tiết →' : 'View →')}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* OCEAN & CLASSIC DARK: Original Balanced 4-Col Grid */
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 reveal-stagger">
              {coursesData.map((c, idx) => {
                const active = activeCourseId === c.id;
                const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const price = (c.discountPrice || c.price).toLocaleString('vi-VN');
                const duration = language === 'en' && c.durationEn ? c.durationEn : c.duration;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourseId(c.id)}
                    className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] sm:min-h-[125px] border-2 relative cursor-pointer group ${
                      active
                        ? 'bg-[#2076bd] text-white border-[#2076bd] shadow-xl ring-4 ring-[#2076bd]/25 scale-[1.01]'
                        : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-slate-800 hover:border-[#2076bd]/60 hover:shadow-md'
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className={`text-[10px] font-oswald font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                          active 
                            ? 'bg-white/20 text-white' 
                            : 'bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
                        }`}>
                          #{idx + 1} • {c.badge || 'Khoá'}
                        </span>
                        <span className={`text-xs sm:text-sm font-oswald font-bold ${active ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'}`}>
                          {price}₫
                        </span>
                      </div>

                      <h3 className={`font-oswald text-xs sm:text-sm font-bold uppercase tracking-wide leading-snug line-clamp-2 ${
                        active ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6]'
                      }`}>
                        {title}
                      </h3>
                    </div>

                    <div className={`pt-2 sm:pt-2.5 mt-2 border-t flex items-center justify-between text-[11px] font-oswald w-full ${
                      active ? 'border-white/20 text-blue-100' : 'border-gray-100 dark:border-slate-800 text-gray-500 dark:text-gray-400'
                    }`}>
                      <span>{duration}</span>
                      <span className={`font-bold uppercase tracking-wider text-[10px] sm:text-[11px] ${active ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'}`}>
                        {active ? (language === 'vi' ? '● Đang chọn' : '● Selected') : (language === 'vi' ? 'Xem chi tiết →' : 'View →')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. ACTIVE COURSE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 reveal-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 shadow ${
                  theme === 'nordic' ? 'rounded-none bg-black text-white font-mono' :
                  theme === 'sunset' ? 'rounded-full bg-rose-500 text-white font-oswald' :
                  theme === 'vintage' ? 'rounded-md bg-[#1b4d3e] text-white font-serif' :
                  'rounded bg-[#FAEA28] text-slate-950 font-oswald'
                }`}>
                  {language === 'en' && currentCourse.badgeEn ? currentCourse.badgeEn : currentCourse.badge}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-oswald">
                  {t('academy.duration')}: {language === 'en' && currentCourse.durationEn ? currentCourse.durationEn : currentCourse.duration}
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'en' && currentCourse.titleEn ? currentCourse.titleEn : currentCourse.title}
              </h2>
              <p className={`text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed ${
                theme === 'vintage' ? 'font-serif italic' : ''
              }`}>
                {language === 'en' && currentCourse.subtitleEn ? currentCourse.subtitleEn : currentCourse.subtitle}
              </p>
            </div>

            {/* Highlights */}
            <div className={`p-6 space-y-3 ${
              theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#f2ebe0] font-serif' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] shadow-[0_0_20px_rgba(2,132,199,0.2)] font-mono' :
              'bg-blue-50 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 rounded-lg'
            }`}>
              <h3 className={`text-base font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {t('academy.benefits_title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700 dark:text-gray-200">
                {((language === 'en' && currentCourse.uspsEn) ? currentCourse.uspsEn : (currentCourse.usps || currentCourse.outcomes || [])).map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className={`shrink-0 ${
                      theme === 'vintage' ? 'text-[#1b4d3e]' :
                      theme === 'sunset' ? 'text-rose-600' :
                      theme === 'roastery' ? 'text-cyan-400' :
                      theme === 'nordic' ? 'text-black dark:text-white' :
                      theme === 'dark' ? 'text-[#FAEA28]' :
                      'text-[#2076bd] dark:text-[#3ba0e6]'
                    }`} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus breakdown */}
            <div className="space-y-4">
              <h3 className={`text-xl font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {t('academy.curriculum')}
              </h3>
              
              <div className="space-y-3">
                {currentCourse.syllabus.map((session, sIndex) => {
                  const isOpen = openSyllabusSession === session.session;
                  const sessionEn = (currentCourse.syllabusEn && currentCourse.syllabusEn[sIndex]) ? currentCourse.syllabusEn[sIndex] : null;
                  const title = (language === 'en' && sessionEn) ? sessionEn.title : (language === 'en' && session.titleEn ? session.titleEn : session.title);
                  const description = (language === 'en' && sessionEn) ? sessionEn.description : (language === 'en' && session.descriptionEn ? session.descriptionEn : session.description);
                  const skills = (language === 'en' && sessionEn && sessionEn.practicalSkills) ? sessionEn.practicalSkills : ((language === 'en' && session.practicalSkillsEn) ? session.practicalSkillsEn : (session.practicalSkills || []));

                  return (
                    <div
                      key={session.session}
                      className={`overflow-hidden shadow-sm transition-all ${
                        theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
                        theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white shadow-md' :
                        theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
                        theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono' :
                        'border border-gray-200 dark:border-slate-800 rounded-lg bg-white dark:bg-[#1e293b]'
                      }`}
                    >
                      <button
                        onClick={() => setOpenSyllabusSession(isOpen ? null : session.session)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 text-xs font-bold flex items-center justify-center ${
                            theme === 'nordic' ? 'rounded-none bg-black text-white font-mono' :
                            theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white' :
                            theme === 'vintage' ? 'rounded bg-[#1b4d3e] text-white font-serif' :
                            theme === 'roastery' ? 'rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/40' :
                            'rounded bg-[#2076bd] text-white font-oswald'
                          }`}>
                            #{session.session}
                          </span>
                          <div>
                            <h4 className={`text-sm font-bold uppercase text-[#222222] dark:text-white ${
                              theme === 'vintage' ? 'font-serif' : 'font-oswald'
                            }`}>
                              {title}
                            </h4>
                            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-oswald">{currentCourse.hoursPerSession}h / {language === 'vi' ? 'buổi' : 'session'}</span>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                          <p className="font-medium text-gray-700 dark:text-gray-200">{description}</p>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 pl-2">
                            {skills.map((skill, si) => (
                              <li key={si}>{skill}</li>
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

          {/* Pricing & Deposit Card (Sidebar) */}
          <div className="lg:col-span-4 reveal-right">
            <div className={`p-6 shadow-xl sticky top-24 space-y-6 ${
              theme === 'nordic' ? 'rounded-none border-2 border-black dark:border-white bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-white shadow-rose-500/10' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#1b4d3e] bg-[#faf6f0] font-serif' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/50 bg-[#0b1324] shadow-[0_0_30px_rgba(2,132,199,0.25)] font-mono' :
              'bg-white dark:bg-[#1e293b] border-2 border-[#2076bd] dark:border-[#3ba0e6] rounded-xl'
            }`}>
              
              <div className="text-center border-b border-gray-100 dark:border-slate-800 pb-4">
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase font-oswald">{t('academy.tuition_full')}</span>
                <div className={`text-3xl font-bold my-1 ${
                  theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                  theme === 'sunset' ? 'font-oswald bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent' :
                  theme === 'roastery' ? 'font-oswald text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]' :
                  'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {(currentCourse.discountPrice || currentCourse.price).toLocaleString('vi-VN')}₫
                </div>
                <div className={`text-xs font-bold font-oswald uppercase ${themeAccentText}`}>
                  {t('academy.deposit_amount')}: {(currentCourse.depositAmount || 2000000).toLocaleString('vi-VN')}₫
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock size={15} className={themeAccentText} />
                  <span>{t('academy.duration')}: <strong>{language === 'en' && currentCourse.durationEn ? currentCourse.durationEn : currentCourse.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={15} className={themeAccentText} />
                  <span>{language === 'vi' ? 'Quy mô:' : 'Cohort size:'} <strong>{language === 'vi' ? 'Tối đa 4 - 6 học viên/lớp' : 'Max 4 - 6 students/class'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className={themeAccentText} />
                  <span>{language === 'vi' ? 'Địa điểm:' : 'Location:'} <strong>{language === 'vi' ? 'Quầy bar Dolphy Thảo Điền' : 'Dolphy Thao Dien Live Bar'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} className={themeAccentText} />
                  <span>{language === 'vi' ? 'Chứng chỉ:' : 'Certificate:'} <strong>Dolphy Academy Barista Certificate</strong></span>
                </div>
              </div>

              <div className={`p-3 text-xs space-y-1 ${
                theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-900' :
                theme === 'sunset' ? 'rounded-2xl bg-rose-50 border border-rose-200' :
                theme === 'vintage' ? 'rounded bg-[#f2ebe0] border border-[#e6ded1]' :
                theme === 'roastery' ? 'rounded-lg bg-cyan-950/60 border border-cyan-500/30' :
                'rounded bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-900 dark:text-blue-200'
              }`}>
                <p className={`font-bold flex items-center gap-1.5 ${themeAccentText}`}>
                  <Gift size={14} className={themeAccentText} />
                  {language === 'vi' ? 'Ưu đãi đăng ký sớm:' : 'Early Bird Privilege:'}
                </p>
                <p>{language === 'vi' ? 'Tặng kèm 1 áo Barista Dolphy + 1kg hạt Specialty tự luyện tập.' : 'Includes 1 Barista apron + 1kg specialty coffee for home training.'}</p>
              </div>

              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className={`w-full py-3.5 font-oswald text-sm uppercase tracking-wider font-extrabold transition-colors shadow flex items-center justify-center gap-2 hover-lift ${
                  theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-[#ff3b00]' :
                  theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white shadow-rose-500/25' :
                  theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white hover:bg-[#a04618]' :
                  theme === 'roastery' ? 'rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' :
                  'rounded bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950'
                }`}
              >
                <QrCode size={16} />
                <span>{language === 'vi' ? 'ĐĂNG KÝ & TẠO MÃ VIETQR CỌC' : 'RESERVE & GENERATE VIETQR'}</span>
              </button>

              <div className="text-center text-[11px] text-gray-400 dark:text-gray-500">
                {language === 'vi' ? 'Hỗ trợ tư vấn trực tiếp:' : 'Direct Consultation Hotline:'} <a href="tel:0938084985" className={`font-semibold ${themeAccentText}`}>{brandInfo.hotline}</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REAL PHOTO SHOWCASE - BLUE DOLPHINS CHAMPIONSHIP & TRAINING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 reveal-on-scroll">
          <div>
            <span className={`inline-block text-xs uppercase tracking-widest font-bold ${
              theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
              theme === 'sunset' ? 'font-oswald text-rose-600' :
              theme === 'roastery' ? 'font-mono text-cyan-400' :
              theme === 'nordic' ? 'font-mono text-black dark:text-white' :
              theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
              'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
            }`}>
              {language === 'vi' ? 'HỌC VIỆN & SÂN CHƠI CHUYÊN NGHIỆP' : 'ACADEMY & CHAMPIONSHIP'}
            </span>
          </div>
          <div>
            <h2 className="section-title">
              {t('academy.gallery_title')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('academy.gallery_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-championship-backdrop.jpg"
                alt="Dolphy Junior Barista Championship 2024"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Sân Chơi Thường Niên' : 'Annual Championship'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Junior Barista Championship 2024' : 'Junior Barista Championship 2024'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Đấu trường chuyên môn thực chiến tổ chức tại Dolphy 28 Trần Lựu, nơi ươm mầm thế hệ tài năng trẻ.'
                  : 'Practical competition held at Dolphy 28 Tran Luu, nurturing passionate young coffee talents.'}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-latte-art-pouring.jpg"
                alt="Kỹ thuật rót bọt sữa Latte Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Kỹ Năng Đỉnh Cao' : 'Masterful Skills'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Nghệ Thuật Đánh Sữa & Latte Art' : 'Milk Steaming & Silky Pouring'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Thực hành tạo bọt sữa vi mô (Micro-foam) sánh mịn và kỹ thuật đổ hoa Rosetta, Tulip, Thiên nga.'
                  : 'Hands-on glossy micro-foam steaming and free pour patterns from Rosetta to Winged Tulip.'}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-championship-trophy.jpg"
                alt="Lễ trao giải cúp vô địch Junior Barista Championship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Vinh Danh Tài Năng' : 'Trophy Ceremony'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Trao Cúp Vô Địch & Chứng Chỉ' : 'Championship Trophy & Certs'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Chứng nhận tốt nghiệp nghề Barista và cơ hội thăng tiến lên Shift Leader, Store Manager tại chuỗi.'
                  : 'Certified graduation credential opening fast-track promotion to Shift Leader and Store Manager.'}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-bracket-board.jpg"
                alt="Bảng thi đấu Basic Legacy Barista"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Quy Trình Chuẩn Hóa' : 'Standardized Bracket'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Bảng Đấu Trực Tiếp & Đánh Giá' : 'Direct Tournament Bracket'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Quy trình thi đấu phân hạng Tứ kết - Bán kết - Chung kết minh bạch, tạo động lực phát triển chuyên môn.'
                  : 'Transparent bracket stages from quarter-finals to grand finals driving continuous excellence.'}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-sensory-judging.jpg"
                alt="Ban giám khảo chấm điểm cảm quan sensory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Cảm Quan Hương Vị' : 'Sensory Evaluation'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Hội Đồng Giám Khảo Chấm Điểm' : 'Professional SCA Judging'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Đánh giá chi tiết các chỉ số Flavor, Aftertaste, Acidity, Body và Balance theo tiêu chuẩn quốc tế.'
                  : 'Comprehensive evaluation of flavor, aftertaste, acidity, body and balance by seasoned judges.'}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden shadow-sm hover-lift hover:shadow-lg transition-all group ${
            theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
            theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
            theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
            theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
            'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b]'
          }`}>
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-espresso-machine.jpg"
                alt="Hiệu chỉnh máy pha công nghiệp quầy bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className={`text-[10px] uppercase tracking-wider font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-zinc-500' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Thực Hành Trực Tiếp' : 'Live Station Practice'}
              </span>
              <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white ${
                theme === 'vintage' ? 'font-serif' : 'font-oswald'
              }`}>
                {language === 'vi' ? 'Hiệu Chỉnh Máy Pha Espresso' : 'Commercial Espresso Station'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Đứng quầy bar thực tế tại 10 cửa hàng, làm chủ máy pha công nghiệp đa group và áp suất 9-bar.'
                  : 'Train on multi-group commercial espresso machines with 9-bar precision across 10 store locations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className={`py-14 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        theme === 'nordic' ? 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 font-mono' :
        theme === 'sunset' ? 'bg-rose-50/50 border-rose-200' :
        theme === 'vintage' ? 'bg-[#faf6f0] border-[#e6ded1] font-serif' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/20 font-mono' :
        'bg-[#f8f9fa] dark:bg-slate-900/60 border-gray-200 dark:border-slate-800'
      }`}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center reveal-on-scroll">
            <h2 className="section-title">
              {language === 'vi' ? 'CÂU HỎI THƯỜNG GẶP (FAQ)' : 'FREQUENTLY ASKED QUESTIONS (FAQ)'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {language === 'vi' ? 'Giải đáp thắc mắc về khóa học Barista Thực Chiến tại Dolphy Academy.' : 'Common questions regarding the hands-on Barista course at Dolphy Academy.'}
            </p>
          </div>

          <div className="space-y-4 reveal-stagger">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`p-5 space-y-2 ${
                theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 font-mono' :
                theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white shadow-sm' :
                theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
                theme === 'roastery' ? 'rounded-xl border border-cyan-500/30 bg-[#0b1324] font-mono' :
                'bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 shadow-sm'
              }`}>
                <h4 className={`text-base font-bold flex items-center gap-2 ${
                  theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                  theme === 'sunset' ? 'font-oswald text-rose-600' :
                  theme === 'roastery' ? 'font-mono text-cyan-300' :
                  theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                  theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                  'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  <span>Q{idx + 1}:</span> {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
