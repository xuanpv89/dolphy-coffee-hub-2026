import React from 'react';
import { Send, Briefcase, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { jobsData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Careers: React.FC = () => {
  const { setApplyingJob, t, language, theme } = useDolphy();
  const [selectedDept, setSelectedDept] = React.useState<string>('all');
  const [searchJob, setSearchJob] = React.useState<string>('');

  const themeAccentText = 
    theme === 'vintage' ? 'text-[#1b4d3e]' :
    theme === 'sunset' ? 'text-rose-600' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'nordic' ? 'text-black dark:text-white' :
    theme === 'dark' ? 'text-[#FAEA28]' :
    'text-[#2076bd] dark:text-[#3ba0e6]';

  const departments = [
    { id: 'all', name: language === 'vi' ? 'Tất cả vị trí' : 'All Roles', count: jobsData.length },
    { id: 'Khối Cửa Hàng', name: language === 'vi' ? 'Khối Cửa Hàng' : 'Store Ops', count: jobsData.filter(j => j.department.includes('Cửa Hàng')).length },
    { id: 'Khối Vận Hành', name: language === 'vi' ? 'Khối Vận Hành' : 'Operations', count: jobsData.filter(j => j.department.includes('Vận Hành')).length },
    { id: 'Khối Doanh Nghiệp', name: language === 'vi' ? 'B2B & Catering' : 'B2B & Catering', count: jobsData.filter(j => j.department.includes('Doanh Nghiệp')).length },
    { id: 'Khối Học Viện', name: language === 'vi' ? 'Học Viện Barista' : 'Academy', count: jobsData.filter(j => j.department.includes('Học Viện')).length },
    { id: 'Khối Marketing', name: language === 'vi' ? 'Marketing & Media' : 'Marketing', count: jobsData.filter(j => j.department.includes('Marketing')).length },
    { id: 'Khối Bếp Bánh', name: language === 'vi' ? 'Bếp Bánh Bakery' : 'Bakery Chef', count: jobsData.filter(j => j.department.includes('Bánh')).length }
  ];

  const filteredJobs = jobsData.filter(j => {
    const matchDept = selectedDept === 'all' || j.department.includes(selectedDept);
    const matchSearch = j.title.toLowerCase().includes(searchJob.toLowerCase()) ||
                        j.description.toLowerCase().includes(searchJob.toLowerCase());
    return matchDept && matchSearch;
  });

  const perks = [
    {
      icon: '★',
      nodeId: '01',
      title: language === 'vi' ? 'Đào Tạo Barista Miễn Phí' : 'Free Barista Training',
      desc: language === 'vi' 
        ? 'Chưa có kinh nghiệm? Đừng lo, bạn sẽ được các Master Trainer đào tạo toàn bộ kỹ năng cà phê Ý, pha phin và đánh sữa chuẩn quốc tế.'
        : 'No prior experience? Our Master Trainers coach you in Italian espresso, Vietnamese phin, and latte art milk steaming.'
    },
    {
      icon: '⏰',
      nodeId: '02',
      title: language === 'vi' ? 'Ca Làm Việc Siêu Linh Hoạt' : 'Flexible Shifts',
      desc: language === 'vi'
        ? 'Dễ dàng đăng ký ca theo tuần, cực kỳ thuận tiện cho các bạn sinh viên vừa học vừa làm mà không lo trùng lịch thi cử.'
        : 'Easily register weekly shifts, ideal for university students balancing studies and exams.'
    },
    {
      icon: '🌍',
      nodeId: '03',
      title: language === 'vi' ? 'Môi Trường Quốc Tế' : 'Expat Environment',
      desc: language === 'vi'
        ? 'Lượng khách expat người nước ngoài tại Thảo Điền và Phú Mỹ Hưng rất đông, là cơ hội tuyệt vời để bạn rèn luyện tiếng Anh mỗi ngày.'
        : 'Vibrant expat customer base in Thao Dien and Phu My Hung, providing daily English practice opportunities.'
    },
    {
      icon: '🚀',
      nodeId: '04',
      title: language === 'vi' ? 'Lộ Trình Thăng Tiến Rõ Ràng' : 'Clear Career Path',
      desc: language === 'vi'
        ? 'Từ Barista ➔ Trưởng ca (Shift Leader) ➔ Quản lý Cửa Hàng (Store Manager) ➔ Chuyên viên Đào tạo (Trainer).'
        : 'From Barista ➔ Shift Leader ➔ Store Manager ➔ Master Trainer with competitive performance perks.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header (Theme-Adaptive Architecture) */}
      {theme === 'nordic' ? (
        /* NORDIC: Swiss Minimalist Brutalist Architectural Placard */
        <section className="bg-white dark:bg-zinc-950 text-black dark:text-white border-b-2 border-zinc-900 dark:border-zinc-200 select-none">
          <div className="border-b-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900/80 px-4 sm:px-8 py-2 flex items-center justify-between text-[11px] font-mono tracking-wider">
            <span className="font-bold">// DOLPHY TALENT & CAREERS PORTAL • 10 CHI NHÁNH</span>
            <span className="text-zinc-500 dark:text-zinc-400">[SYSTEM: OPEN POSITIONS // DOLPHIERS]</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-black dark:bg-white text-white dark:text-black font-mono font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs px-3 py-1">
                  [RECRUITMENT // {t('careers.hero_tag')}]
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
              </div>

              <div className="w-14 h-1 bg-[#ff3b00]" />

              <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[0.06em] text-black dark:text-white leading-[1.05]">
                {t('careers.hero_title')}
              </h1>
            </div>

            <div className="md:col-span-5 relative p-6 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-200 font-mono">
              <span className="absolute top-1.5 left-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute top-1.5 right-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute bottom-1.5 left-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute bottom-1.5 right-1.5 text-xs text-[#ff3b00] font-bold">+</span>

              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">// CULTURE & WORKSPACE</span>
              <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans">
                {t('careers.hero_desc')}
              </p>
            </div>
          </div>
        </section>
      ) : theme === 'vintage' ? (
        /* VINTAGE: French Salon L'Atelier Dolphier Header */
        <section className="bg-[#faf6f0] text-[#221e1a] border-b-2 border-[#e6ded1] p-4 sm:p-8 select-none">
          <div className="max-w-6xl mx-auto bg-[#fffdfa] border-2 border-[#e6ded1] rounded-lg p-6 sm:p-10 shadow-xs text-center font-serif relative">
            <div className="text-[#c05621] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-3 border-b-2 border-[#e6ded1] pb-3 mb-6">
              <span className="text-sm">❦</span>
              <span>— L'ATELIER DES DOLPHIERS • RECRUTEMENT 2026 —</span>
              <span className="text-sm">❦</span>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-block bg-[#c05621] text-white font-serif italic text-xs sm:text-sm px-4 py-1 rounded shadow-xs border border-amber-950/20">
                ❦ {t('careers.hero_tag')} ❦
              </span>

              <h1 className="font-serif italic font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1b4d3e] leading-tight">
                {t('careers.hero_title')}
              </h1>

              <div className="w-16 h-0.5 bg-[#c05621]/40 mx-auto my-3" />

              <p className="text-sm sm:text-base text-[#5a5045] italic leading-relaxed">
                "{t('careers.hero_desc')}"
              </p>
            </div>
          </div>
        </section>
      ) : theme === 'roastery' ? (
        /* ROASTERY: Cyber Talent Dispatch Hub */
        <section className="bg-[#050811] text-white border-b border-cyan-500/40 select-none relative overflow-hidden">
          <div className="bg-[#080d1a] border-b border-cyan-500/30 px-4 sm:px-8 py-2 flex items-center justify-between text-[11px] font-mono text-cyan-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SYS.TALENT // CREW_RECRUITMENT // APPLICANT_TRACKER</span>
            </div>
            <span className="font-bold">// STATUS: OPEN</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 bg-slate-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-[11px] sm:text-xs px-3.5 py-1.5 rounded shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Briefcase size={14} className="text-cyan-400" />
                <span>// PORTAL: {t('careers.hero_tag')}</span>
              </span>

              <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] leading-tight tracking-wider">
                {t('careers.hero_title')}
              </h1>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-cyan-500/40 font-mono text-slate-300 shadow-[0_0_25px_rgba(2,132,199,0.2)]">
              <span className="text-[10px] text-pink-400 uppercase tracking-widest block mb-2">// CREW_MISSION</span>
              <p className="text-xs sm:text-sm leading-relaxed font-sans text-slate-200">
                {t('careers.hero_desc')}
              </p>
            </div>
          </div>
        </section>
      ) : theme === 'sunset' ? (
        /* SUNSET: Floating Organic Pebble Talent Header */
        <section className="bg-gradient-to-br from-[#fff1f2] via-[#fff7ed] to-[#fed7aa]/30 border-b border-rose-200 py-10 sm:py-16 px-4 sm:px-8 select-none">
          <div className="max-w-5xl mx-auto rounded-[36px] sm:rounded-[48px] bg-white/90 backdrop-blur-xl border border-rose-200/90 shadow-xl shadow-rose-500/10 p-8 sm:p-14 text-center space-y-5">
            <div>
              <span className="inline-block bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white font-oswald uppercase tracking-widest text-xs px-4 py-1.5 rounded-full shadow-lg shadow-rose-500/30 font-bold">
                {t('careers.hero_tag')}
              </span>
            </div>

            <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-[#271a17] leading-tight">
              {t('careers.hero_title')}
            </h1>

            <p className="text-[#7d6560] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {t('careers.hero_desc')}
            </p>
          </div>
        </section>
      ) : (
        /* OCEAN & DARK: Classic Gradient Banner */
        <section className="reveal-on-scroll border-b text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow rounded bg-[#FAEA28] text-slate-950 font-oswald">
              <Briefcase size={14} />
              <span>{t('careers.hero_tag')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white font-oswald">
              {t('careers.hero_title')}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
              {t('careers.hero_desc')}
            </p>
          </div>
        </section>
      )}

      {/* Banner Image & Intro */}
      <section className="reveal-scale max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200' :
          theme === 'sunset' ? 'rounded-3xl border border-rose-200 shadow-xl shadow-rose-500/10' :
          theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1]' :
          theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(2,132,199,0.25)]' :
          'rounded-2xl'
        }`}>
          <img
            src="/images/fanpage/barista-championship-ceremony.jpg"
            alt="Đội ngũ Barista Dolphy Café"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className={`font-oswald text-xs sm:text-sm uppercase tracking-widest font-bold ${
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'sunset' ? 'text-rose-400' :
              theme === 'vintage' ? 'text-[#e7dec8]' :
              'text-[#FAEA28]'
            }`}>
              {t('careers.banner_tag')}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-bold uppercase mt-1 ${
              theme === 'vintage' ? 'font-serif' : 'font-oswald'
            }`}>
              {t('careers.banner_title')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mt-2 line-clamp-2 sm:line-clamp-none">
              {t('careers.banner_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us - Layout Shifts per Theme */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10 reveal-on-scroll">
          <h2 className="section-title">{t('careers.why_title')}</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t('careers.why_sub')}
          </p>
        </div>

        {theme === 'nordic' ? (
          /* NORDIC: Horizontal Brutalist Strip */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-zinc-900 dark:border-zinc-200 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900 dark:divide-zinc-200 font-mono reveal-stagger">
            {perks.map((p, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-zinc-950 space-y-3">
                <div className="text-xs text-zinc-400">[0{idx + 1} // BENEFIT]</div>
                <h3 className="font-oswald text-base font-bold uppercase text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        ) : theme === 'vintage' ? (
          /* VINTAGE: 2-Column French Bistro Perks */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif reveal-stagger">
            {perks.map((p, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-[#faf6f0] border-2 border-[#e6ded1] space-y-3">
                <div className="flex items-center justify-between border-b border-[#e6ded1] pb-2">
                  <span className="font-serif text-xl font-bold text-[#c05621]">0{idx + 1}.</span>
                  <span className="text-lg">{p.icon}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1b4d3e]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6e655c] leading-relaxed italic">
                  "{p.desc}"
                </p>
              </div>
            ))}
          </div>
        ) : theme === 'roastery' ? (
          /* ROASTERY: 4 Cyber Telemetry Blocks */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono reveal-stagger">
            {perks.map((p, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0b1324] border border-cyan-500/40 shadow-[0_0_20px_rgba(2,132,199,0.15)] space-y-3 hover:border-cyan-400 transition-colors">
                <div className="flex items-center justify-between text-[10px] text-cyan-400 border-b border-cyan-500/20 pb-2">
                  <span>[PERK_{p.nodeId}]</span>
                  <span className="text-sm">{p.icon}</span>
                </div>
                <h3 className="font-oswald text-base font-bold uppercase text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        ) : theme === 'sunset' ? (
          /* SUNSET: 4 Pebble Perks */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {perks.map((p, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-rose-100 shadow-xl shadow-rose-500/5 hover-lift transition-all space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center mx-auto text-xl shadow-md">
                  {p.icon}
                </div>
                <h3 className="font-oswald text-base font-bold uppercase text-[#271a17]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#7d6560] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* OCEAN & CLASSIC DARK: Original 4-Col Grid */
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal-stagger">
            {perks.map((p, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm text-center space-y-3 hover-lift">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto text-2xl font-bold ${
                  theme === 'dark' ? 'bg-slate-800 text-[#FAEA28]' : 'bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {p.icon}
                </div>
                <h3 className={`font-oswald text-base font-bold uppercase ${
                  theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {p.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DOLPHIERS CULTURE & SPORTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 reveal-on-scroll">
          <div>
            <span className={`inline-block text-xs uppercase tracking-widest font-bold ${themeAccentText} ${
              theme === 'vintage' ? 'font-serif' :
              theme === 'nordic' ? 'font-mono' :
              'font-oswald'
            }`}>
              {language === 'vi' ? 'CON NGƯỜI & VĂN HÓA DOANH NGHIỆP' : 'PEOPLE & CULTURE'}
            </span>
          </div>
          <div>
            <h2 className="section-title">{t('careers.culture_title')}</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('careers.culture_sub')}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger ${
          theme === 'nordic' ? 'font-mono' : ''
        }`}>
          {[
            {
              img: '/images/fanpage/career-dolphiers-striped-uniform.jpg',
              tag: language === 'vi' ? 'Đại Gia Đình Dolphiers' : 'Dolphiers Family',
              title: language === 'vi' ? 'Nụ Cười & Tinh Thần Đồng Đội' : 'Smiles & Team Camaraderie',
              desc: language === 'vi' ? 'Môi trường làm việc trẻ trung, tích cực và đoàn kết như những chú cá heo luôn yêu thương giúp đỡ nhau.' : 'A youthful, supportive and vibrant workspace where teammates support each other like a dolphin pod.'
            },
            {
              img: '/images/fanpage/career-handmade-craft-team.jpg',
              tag: language === 'vi' ? 'Sáng Tạo & Gắn Kết' : 'Craft & Bonding',
              title: language === 'vi' ? 'Tự Tay Làm Đồ Handmade Trang Trí' : 'Handmade Decor Crafting Sessions',
              desc: language === 'vi' ? 'Các buổi workshop nội bộ tự tay làm phụ kiện trang trí chi nhánh cho mùa Giáng Sinh và lễ Tết sum vầy.' : 'Creative internal crafting workshops making festive handcrafted decorations for our coffee shops.'
            },
            {
              img: '/images/fanpage/career-barista-champion-winner.jpg',
              tag: language === 'vi' ? 'Phát Triển Chuyên Môn' : 'Skill Development',
              title: language === 'vi' ? 'Đấu Trường Nâng Cao Tay Nghề' : 'Internal Championship Arena',
              desc: language === 'vi' ? 'Cơ hội cọ xát tay nghề qua các giải đấu thường niên, nhận thưởng thành tích và thăng chức quản lý ca.' : 'Elevate barista skills through annual championships with attractive cash prizes and career promotions.'
            },
            {
              img: '/images/fanpage/career-customer-warm-greeting.jpg',
              tag: language === 'vi' ? 'Văn Hóa Chân Thành' : 'Warm Hospitality',
              title: language === 'vi' ? 'Happiness In A Cup: Lan Tỏa Niềm Vui' : 'Happiness In A Cup Service',
              desc: language === 'vi' ? 'Giao tiếp chân thành, ấm áp với khách hàng bản địa lẫn cộng đồng Expat quốc tế tại Thảo Điền & Phú Mỹ Hưng.' : 'Delivering warm, sincere interactions to both local neighbors and the international expat community.'
            },
            {
              img: '/images/fanpage/career-tet-celebration-aodai.jpg',
              tag: language === 'vi' ? 'Văn Hóa Lễ Hội' : 'Festive Celebrations',
              title: language === 'vi' ? 'Duyên Dáng Áo Dài Đón Xuân' : 'Traditional Ao Dai Tet Celebrations',
              desc: language === 'vi' ? 'Tôn vinh nét đẹp văn hóa truyền thống Việt Nam trong không gian kiến trúc hiện đại, rộn rã tiếng cười.' : 'Embracing Vietnamese traditional beauty within contemporary coffee architectural spaces.'
            },
            {
              img: '/images/fanpage/career-red-envelopes-tet.jpg',
              tag: language === 'vi' ? 'Phúc Lợi & Đãi Ngộ' : 'Benefits & Perks',
              title: language === 'vi' ? 'Thưởng Lễ Tết & Quà Tặng Độc Quyền' : 'Holiday Rewards & Exclusive Gifts',
              desc: language === 'vi' ? 'Chế độ thưởng doanh số, tiền tip chia đều, thưởng tháng 13 và những món quà thương hiệu Dolphy ý nghĩa.' : 'Performance bonuses, evenly shared tips, 13th-month salary and branded gifts for every staff member.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`overflow-hidden transition-all duration-300 flex flex-col group ${
                theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950' :
                theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5 hover-lift' :
                theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif hover:border-[#1b4d3e]' :
                theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
                'rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover-lift'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                  theme === 'sunset' ? 'text-rose-600 font-oswald' :
                  theme === 'roastery' ? 'text-cyan-400 font-mono' :
                  'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                }`}>
                  {item.tag}
                </span>
                <h4 className={`text-base font-bold uppercase ${
                  theme === 'vintage' ? 'font-serif text-[#221e1a]' :
                  theme === 'sunset' ? 'font-oswald text-[#271a17]' :
                  'font-oswald text-[#222222] dark:text-white'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'vintage' ? 'text-[#6e655c]' :
                  theme === 'sunset' ? 'text-[#7d6560]' :
                  'text-gray-500 dark:text-gray-400'
                }`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions - Layout Shifts per Theme */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 reveal-on-scroll">
          <h2 className={`text-2xl sm:text-3xl font-bold uppercase ${themeAccentText} ${
            theme === 'vintage' ? 'font-serif' : 'font-oswald'
          }`}>
            {t('careers.open_positions')}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {language === 'vi' 
              ? `Ứng tuyển trực tuyến hoặc gửi CV về email tuyển dụng: ${brandInfo.recruitmentEmail}`
              : `Apply online or email your CV to: ${brandInfo.recruitmentEmail}`}
          </p>
        </div>

        {/* Department Filters & Search */}
        <div className={`p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
          theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-white shadow-md' :
          theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
          'bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-slate-800'
        }`}>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  theme === 'nordic' ? 'rounded-none font-mono border border-current' :
                  theme === 'sunset' ? 'rounded-full font-oswald' :
                  theme === 'vintage' ? 'rounded font-serif' :
                  theme === 'roastery' ? 'rounded-lg font-mono border border-cyan-500/30' :
                  'rounded-lg font-oswald'
                } ${
                  selectedDept === dept.id
                    ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                       theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                       theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                       theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                       'bg-[#2076bd] text-white shadow-md')
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{dept.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedDept === dept.id ? 'bg-white/30 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-500'
                }`}>
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder={language === 'vi' ? 'Tìm theo tên vị trí...' : 'Search roles...'}
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className={`w-full pl-3 pr-3 py-2 text-xs border focus:outline-none ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 text-black dark:text-white font-mono' :
                theme === 'sunset' ? 'rounded-full border-rose-200 bg-white text-gray-800' :
                theme === 'vintage' ? 'rounded border-[#e6ded1] bg-[#faf6f0] text-[#221e1a] font-serif' :
                theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                'rounded-lg border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:border-[#2076bd]'
              }`}
            />
          </div>
        </div>

        {/* Dynamic Theme-Adaptive Job Listings */}
        {theme === 'nordic' ? (
          /* THEME: NORDIC - Tabular Brutalist Employment Directory */
          <div className="border-2 border-zinc-900 dark:border-zinc-200 divide-y-2 divide-zinc-900 dark:divide-zinc-200 font-mono reveal-stagger">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 p-6 bg-white dark:bg-zinc-950 text-zinc-500">
                {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
              </div>
            ) : (
              filteredJobs.map((job) => {
                const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
                const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
                const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
                const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
                const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;

                return (
                  <div key={job.id} className="p-6 bg-white dark:bg-zinc-950 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] uppercase text-zinc-500">
                        <span>[{jType}]</span>
                        <span>// {jDept}</span>
                      </div>
                      <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-black dark:text-white">
                        {jTitle}
                      </h3>
                    </div>

                    <div className="md:col-span-5 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed line-clamp-2">
                      {jDesc}
                    </div>

                    <div className="md:col-span-2 text-sm font-bold text-black dark:text-white font-mono">
                      {jSalary}
                    </div>

                    <div className="md:col-span-2 flex justify-start md:justify-end">
                      <button
                        onClick={() => setApplyingJob(job)}
                        className="px-5 py-2.5 rounded-none bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#ff3b00] hover:text-white dark:hover:bg-[#ff3b00] dark:hover:text-white transition-colors cursor-pointer w-full md:w-auto text-center"
                      >
                        {t('careers.apply_now')}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : theme === 'vintage' ? (
          /* THEME: VINTAGE - Gazette Noticeboard French Salon */
          <div className="space-y-6 font-serif reveal-stagger">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-[#faf6f0] border-2 border-[#e6ded1] rounded-lg text-[#6e655c]">
                {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
              </div>
            ) : (
              filteredJobs.map((job) => {
                const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
                const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
                const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
                const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
                const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;
                const jBenefits = language === 'en' ? (job.benefitsEn || job.benefits) : job.benefits;
                const jReqs = language === 'en' ? (job.requirementsEn || job.requirements) : job.requirements;

                return (
                  <div
                    key={job.id}
                    className="bg-[#faf6f0] rounded-lg border-2 border-[#e6ded1] p-6 sm:p-8 shadow-xs hover:border-[#1b4d3e] transition-all space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#e6ded1]">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1b4d3e] text-white">
                            {jType}
                          </span>
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c05621] text-white">
                            {jDept}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1b4d3e]">
                          {jTitle}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-[#6e655c] block italic">{t('careers.income')}</span>
                        <span className="font-serif text-lg font-bold text-[#c05621]">
                          {jSalary}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#6e655c]">
                      <div className="space-y-2">
                        <h4 className="font-serif text-xs font-bold uppercase text-[#1b4d3e]">{t('careers.job_desc')}</h4>
                        <p className="leading-relaxed text-[#221e1a]">{jDesc}</p>
                        
                        {jBenefits && jBenefits.length > 0 && (
                          <div className="pt-2">
                            <h5 className="font-serif text-xs font-bold uppercase text-[#1b4d3e] mb-1">{t('careers.job_benefits')}</h5>
                            <ul className="list-disc list-inside space-y-1 pl-1">
                              {jBenefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-serif text-xs font-bold uppercase text-[#1b4d3e]">{t('careers.job_req')}</h4>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {(jReqs || []).map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#e6ded1] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                      <span className="text-xs text-[#6e655c]">
                        {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong>{language === 'vi' ? '10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)' : '10 Dolphy branches (D.2, D.7, Binh Thanh)'}</strong>
                      </span>

                      <button
                        onClick={() => setApplyingJob(job)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={14} />
                        <span>{t('careers.apply_now')}</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : theme === 'roastery' ? (
          /* THEME: ROASTERY - Cyber Recruit Terminal */
          <div className="space-y-6 font-mono reveal-stagger">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-[#0b1324] border border-cyan-500/30 rounded-xl text-slate-400">
                {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
              </div>
            ) : (
              filteredJobs.map((job) => {
                const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
                const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
                const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
                const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
                const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;
                const jBenefits = language === 'en' ? (job.benefitsEn || job.benefits) : job.benefits;
                const jReqs = language === 'en' ? (job.requirementsEn || job.requirements) : job.requirements;

                return (
                  <div
                    key={job.id}
                    className="bg-[#0b1324] rounded-xl border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_20px_rgba(2,132,199,0.15)] hover:border-cyan-400 transition-all space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-cyan-500/20">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40">
                            [{jType}]
                          </span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-pink-950/80 text-pink-400 border border-pink-500/40">
                            {jDept}
                          </span>
                        </div>
                        <h3 className="font-oswald text-xl sm:text-2xl font-bold text-white uppercase">
                          {jTitle}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-slate-400 block font-oswald">{t('careers.income')}</span>
                        <span className="font-oswald text-lg font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                          {jSalary}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-white">{t('careers.job_desc')}</h4>
                        <p className="leading-relaxed font-sans">{jDesc}</p>
                        
                        {jBenefits && jBenefits.length > 0 && (
                          <div className="pt-2">
                            <h5 className="font-oswald text-xs font-bold uppercase text-cyan-400 mb-1">{t('careers.job_benefits')}</h5>
                            <ul className="list-disc list-inside space-y-1 pl-1 font-sans">
                              {jBenefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-white">{t('careers.job_req')}</h4>
                        <ul className="list-disc list-inside space-y-1 pl-1 font-sans">
                          {(jReqs || []).map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-slate-400">
                        {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong className="text-slate-200">{language === 'vi' ? '10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)' : '10 Dolphy branches (D.2, D.7, Binh Thanh)'}</strong>
                      </span>

                      <button
                        onClick={() => setApplyingJob(job)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-oswald text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={14} />
                        <span>{t('careers.apply_now')}</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : theme === 'sunset' ? (
          /* THEME: SUNSET - 3-Curve Rounded Pebble Job Cards */
          <div className="space-y-6 reveal-stagger">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-white border border-rose-100 rounded-3xl text-[#7d6560]">
                {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
              </div>
            ) : (
              filteredJobs.map((job) => {
                const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
                const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
                const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
                const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
                const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;
                const jBenefits = language === 'en' ? (job.benefitsEn || job.benefits) : job.benefits;
                const jReqs = language === 'en' ? (job.requirementsEn || job.requirements) : job.requirements;

                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xl shadow-rose-500/5 hover-lift transition-all space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-rose-50 text-rose-600">
                            {jType}
                          </span>
                          <span className="text-[10px] font-oswald font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-xs">
                            {jDept}
                          </span>
                        </div>
                        <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[#271a17] uppercase">
                          {jTitle}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-[#7d6560] block font-oswald">{t('careers.income')}</span>
                        <span className="font-oswald text-lg font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                          {jSalary}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#7d6560]">
                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-[#271a17]">{t('careers.job_desc')}</h4>
                        <p className="leading-relaxed">{jDesc}</p>
                        
                        {jBenefits && jBenefits.length > 0 && (
                          <div className="pt-2">
                            <h5 className="font-oswald text-xs font-bold uppercase text-rose-600 mb-1">{t('careers.job_benefits')}</h5>
                            <ul className="list-disc list-inside space-y-1 pl-1">
                              {jBenefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-[#271a17]">{t('careers.job_req')}</h4>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {(jReqs || []).map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-[#7d6560]">
                        {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong>{language === 'vi' ? '10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)' : '10 Dolphy branches (D.2, D.7, Binh Thanh)'}</strong>
                      </span>

                      <button
                        onClick={() => setApplyingJob(job)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-oswald text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-rose-500/25 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={14} />
                        <span>{t('careers.apply_now')}</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          /* THEME: OCEAN & CLASSIC DARK - Original Balanced Card List */
          <div className="space-y-6 reveal-stagger">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/40 rounded-xl text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
              </div>
            ) : (
              filteredJobs.map((job) => {
                const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
                const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
                const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
                const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
                const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;
                const jBenefits = language === 'en' ? (job.benefitsEn || job.benefits) : job.benefits;
                const jReqs = language === 'en' ? (job.requirementsEn || job.requirements) : job.requirements;

                return (
                  <div
                    key={job.id}
                    className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover-lift hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            theme === 'dark' ? 'bg-slate-800 text-[#FAEA28]' : 'bg-blue-50 dark:bg-blue-950/40 text-[#2076bd] dark:text-[#3ba0e6]'
                          }`}>
                            {jType}
                          </span>
                          <span className="text-[10px] font-oswald font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAEA28] text-slate-950 shadow-xs">
                            {jDept}
                          </span>
                        </div>
                        <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[#222222] dark:text-white uppercase">
                          {jTitle}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-400 dark:text-gray-500 block font-oswald">{t('careers.income')}</span>
                        <span className={`font-oswald text-lg font-bold ${
                          theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                        }`}>
                          {jSalary}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 dark:text-gray-300">
                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_desc')}</h4>
                        <p className="leading-relaxed text-gray-700 dark:text-gray-200">{jDesc}</p>
                        
                        {jBenefits && jBenefits.length > 0 && (
                          <div className="pt-2">
                            <h5 className={`font-oswald text-xs font-bold uppercase mb-1 ${
                              theme === 'dark' ? 'text-[#FAEA28]' : 'text-[#2076bd] dark:text-[#3ba0e6]'
                            }`}>{t('careers.job_benefits')}</h5>
                            <ul className="list-disc list-inside space-y-1 pl-1">
                              {jBenefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_req')}</h4>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {(jReqs || []).map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong>{language === 'vi' ? '10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)' : '10 Dolphy branches (D.2, D.7, Binh Thanh)'}</strong>
                      </span>

                      <button
                        onClick={() => setApplyingJob(job)}
                        className={`w-full sm:w-auto px-6 py-2.5 rounded font-oswald text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer ${
                          theme === 'dark'
                            ? 'bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950 font-bold'
                            : 'bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white'
                        }`}
                      >
                        <Send size={14} />
                        <span>{t('careers.apply_now')}</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </section>

    </div>
  );
};
