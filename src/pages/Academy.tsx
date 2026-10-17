import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Clock, MapPin, Award, Users, Sparkles, ChevronDown, ChevronUp, QrCode } from 'lucide-react';
import { coursesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Academy: React.FC = () => {
  const { setEnrollingCourse, t, language } = useDolphy();
  const [activeCourseId, setActiveCourseId] = useState<string>('barista-thuc-chien');
  const [openSyllabusSession, setOpenSyllabusSession] = useState<number | null>(1);

  const currentCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

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
      <section className="relative bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto space-y-5 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold shadow">
            <Sparkles size={14} />
            <span>{t('academy.hero_tag')}</span>
          </div>

          <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight">
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
              className="dolphy-btn dolphy-btn-amber px-8 py-3.5 rounded text-sm font-semibold shadow-xl"
            >
              <GraduationCap size={18} className="mr-2" />
              <span>{t('academy.reserve_cta')}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. COURSE SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet View: 2x2 Clean Grid - All 4 courses visible at a glance without side scrolling */}
        <div className="lg:hidden space-y-2.5">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-oswald uppercase tracking-wider px-0.5">
            <span className="font-bold text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'DANH SÁCH 4 KHÓA ĐÀO TẠO DOLPHY' : '4 DOLPHY TRAINING PROGRAMS'}
            </span>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {language === 'vi' ? 'Chạm để xem chi tiết' : 'Tap to switch'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 p-1.5 bg-gray-100 dark:bg-slate-800/80 rounded-xl">
            {coursesData.map((c, idx) => {
              const active = activeCourseId === c.id;
              const title = language === 'en' && c.titleEn ? c.titleEn : c.title;
              const price = (c.discountPrice || c.price).toLocaleString('vi-VN');

              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCourseId(c.id)}
                  className={`p-3 rounded-lg text-left transition-all flex flex-col justify-between min-h-[98px] border ${
                    active
                      ? 'bg-[#2076bd] text-white border-[#2076bd] shadow-md ring-2 ring-[#2076bd]/30'
                      : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-[#2076bd]/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className={`text-[10px] font-oswald font-bold px-1.5 py-0.5 rounded ${
                      active ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}>
                      #{idx + 1}
                    </span>
                    <span className={`text-[11px] font-oswald font-bold ${active ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'}`}>
                      {price}₫
                    </span>
                  </div>

                  <span className="font-oswald text-xs uppercase font-bold tracking-wide leading-tight line-clamp-3">
                    {title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Horizontal single row */}
        <div className="hidden lg:block border-b border-gray-200 dark:border-slate-800 pb-2">
          <div className="flex justify-center gap-2 p-1.5 bg-gray-100 dark:bg-slate-800 rounded-lg w-auto">
            {coursesData.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`whitespace-nowrap shrink-0 px-6 py-2.5 rounded text-sm font-oswald uppercase tracking-wider font-bold transition-all ${
                  activeCourseId === c.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#222222] dark:hover:text-white'
                }`}
              >
                {language === 'en' && c.titleEn ? c.titleEn : c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE COURSE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#FAEA28] text-slate-950 font-extrabold text-[10px] font-oswald uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {language === 'en' && currentCourse.badgeEn ? currentCourse.badgeEn : currentCourse.badge}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-oswald">
                  {t('academy.duration')}: {language === 'en' && currentCourse.durationEn ? currentCourse.durationEn : currentCourse.duration}
                </span>
              </div>
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'en' && currentCourse.titleEn ? currentCourse.titleEn : currentCourse.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {language === 'en' && currentCourse.subtitleEn ? currentCourse.subtitleEn : currentCourse.subtitle}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-blue-50 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 p-6 rounded-lg space-y-3">
              <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {t('academy.benefits_title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700 dark:text-gray-200">
                {((language === 'en' && currentCourse.uspsEn) ? currentCourse.uspsEn : (currentCourse.usps || currentCourse.outcomes || [])).map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#2076bd] dark:text-[#3ba0e6] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus breakdown */}
            <div className="space-y-4">
              <h3 className="font-oswald text-xl font-bold uppercase text-[#222222] dark:text-white">
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
                      className="border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-[#1e293b] shadow-sm"
                    >
                      <button
                        onClick={() => setOpenSyllabusSession(isOpen ? null : session.session)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded bg-[#2076bd] text-white text-xs font-oswald font-bold flex items-center justify-center">
                            #{session.session}
                          </span>
                          <div>
                            <h4 className="font-oswald text-sm font-bold text-[#222222] dark:text-white uppercase">
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
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-[#1e293b] border-2 border-[#2076bd] dark:border-[#3ba0e6] rounded-xl p-6 shadow-xl sticky top-24 space-y-6">
              
              <div className="text-center border-b border-gray-100 dark:border-slate-800 pb-4">
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase font-oswald">{t('academy.tuition_full')}</span>
                <div className="font-oswald text-3xl font-bold text-[#2076bd] dark:text-[#3ba0e6] my-1">
                  {(currentCourse.discountPrice || currentCourse.price).toLocaleString('vi-VN')}₫
                </div>
                <div className="text-xs text-[#2076bd] dark:text-[#3ba0e6] font-bold font-oswald uppercase">
                  {t('academy.deposit_amount')}: {(currentCourse.depositAmount || 2000000).toLocaleString('vi-VN')}₫
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                  <span>{t('academy.duration')}: <strong>{language === 'en' && currentCourse.durationEn ? currentCourse.durationEn : currentCourse.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={15} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                  <span>{language === 'vi' ? 'Quy mô:' : 'Cohort size:'} <strong>{language === 'vi' ? 'Tối đa 4 - 6 học viên/lớp' : 'Max 4 - 6 students/class'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                  <span>{language === 'vi' ? 'Địa điểm:' : 'Location:'} <strong>{language === 'vi' ? 'Quầy bar Dolphy Thảo Điền' : 'Dolphy Thao Dien Live Bar'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-[#2076bd] dark:text-[#3ba0e6]" />
                  <span>{language === 'vi' ? 'Chứng chỉ:' : 'Certificate:'} <strong>Dolphy Academy Barista Certificate</strong></span>
                </div>
              </div>

              <div className="p-3 rounded bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                <p className="font-bold flex items-center gap-1 text-[#2076bd] dark:text-[#3ba0e6]">
                  <Sparkles size={14} className="text-[#FAEA28]" />
                  {language === 'vi' ? 'Ưu đãi đăng ký sớm:' : 'Early Bird Privilege:'}
                </p>
                <p>{language === 'vi' ? 'Tặng kèm 1 áo Barista Dolphy + 1kg hạt Specialty tự luyện tập.' : 'Includes 1 Barista apron + 1kg specialty coffee for home training.'}</p>
              </div>

              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className="w-full py-3.5 rounded bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950 font-oswald text-sm uppercase tracking-wider font-extrabold transition-colors shadow flex items-center justify-center gap-2"
              >
                <QrCode size={16} />
                <span>{language === 'vi' ? 'ĐĂNG KÝ & TẠO MÃ VIETQR CỌC' : 'RESERVE & GENERATE VIETQR'}</span>
              </button>

              <div className="text-center text-[11px] text-gray-400 dark:text-gray-500">
                {language === 'vi' ? 'Hỗ trợ tư vấn trực tiếp:' : 'Direct Consultation Hotline:'} <a href="tel:0938084985" className="text-[#2076bd] dark:text-[#3ba0e6] font-semibold">{brandInfo.hotline}</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REAL PHOTO SHOWCASE - BLUE DOLPHINS CHAMPIONSHIP & TRAINING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div>
            <span className="inline-block text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-championship-backdrop.jpg"
                alt="Dolphy Junior Barista Championship 2024"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Sân Chơi Thường Niên' : 'Annual Championship'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Junior Barista Championship 2024' : 'Junior Barista Championship 2024'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Đấu trường chuyên môn thực chiến tổ chức tại Dolphy 28 Trần Lựu, nơi ươm mầm thế hệ tài năng trẻ.'
                  : 'Practical competition held at Dolphy 28 Tran Luu, nurturing passionate young coffee talents.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-latte-art-pouring.jpg"
                alt="Kỹ thuật rót bọt sữa Latte Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Kỹ Năng Đỉnh Cao' : 'Masterful Skills'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Nghệ Thuật Đánh Sữa & Latte Art' : 'Milk Steaming & Silky Pouring'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Thực hành tạo bọt sữa vi mô (Micro-foam) sánh mịn và kỹ thuật đổ hoa Rosetta, Tulip, Thiên nga.'
                  : 'Hands-on glossy micro-foam steaming and free pour patterns from Rosetta to Winged Tulip.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-championship-trophy.jpg"
                alt="Lễ trao giải cúp vô địch Junior Barista Championship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Vinh Danh Tài Năng' : 'Trophy Ceremony'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Trao Cúp Vô Địch & Chứng Chỉ' : 'Championship Trophy & Certs'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Chứng nhận tốt nghiệp nghề Barista và cơ hội thăng tiến lên Shift Leader, Store Manager tại chuỗi.'
                  : 'Certified graduation credential opening fast-track promotion to Shift Leader and Store Manager.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-bracket-board.jpg"
                alt="Bảng thi đấu Basic Legacy Barista"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Quy Trình Chuẩn Hóa' : 'Standardized Bracket'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Bảng Đấu Trực Tiếp & Đánh Giá' : 'Direct Tournament Bracket'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Quy trình thi đấu phân hạng Tứ kết - Bán kết - Chung kết minh bạch, tạo động lực phát triển chuyên môn.'
                  : 'Transparent bracket stages from quarter-finals to grand finals driving continuous excellence.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-sensory-judging.jpg"
                alt="Ban giám khảo chấm điểm cảm quan sensory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Cảm Quan Hương Vị' : 'Sensory Evaluation'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Hội Đồng Giám Khảo Chấm Điểm' : 'Professional SCA Judging'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Đánh giá chi tiết các chỉ số Flavor, Aftertaste, Acidity, Body và Balance theo tiêu chuẩn quốc tế.'
                  : 'Comprehensive evaluation of flavor, aftertaste, acidity, body and balance by seasoned judges.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/academy-espresso-machine.jpg"
                alt="Hiệu chỉnh máy pha công nghiệp quầy bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Thực Hành Trực Tiếp' : 'Live Station Practice'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
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
      <section className="bg-[#f8f9fa] dark:bg-slate-900/60 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="section-title">
              {language === 'vi' ? 'CÂU HỎI THƯỜNG GẶP (FAQ)' : 'FREQUENTLY ASKED QUESTIONS (FAQ)'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {language === 'vi' ? 'Giải đáp thắc mắc về khóa học Barista Thực Chiến tại Dolphy Academy.' : 'Common questions regarding the hands-on Barista course at Dolphy Academy.'}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1e293b] p-5 rounded-lg border border-gray-200 dark:border-slate-800 shadow-sm space-y-2">
                <h4 className="font-oswald text-base font-bold text-[#2076bd] dark:text-[#3ba0e6] flex items-center gap-2">
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
