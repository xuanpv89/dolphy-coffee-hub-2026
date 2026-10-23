import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { GraduationCap, CheckCircle2, Clock, MapPin, Award, Users, Gift, ChevronDown, ChevronUp, QrCode, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { coursesData, brandInfo, trainersData } from '../data/dolphyData';
import { Trainer, Course } from '../types';
import { useDolphy } from '../context/DolphyContext';
import { TrainerProfileModal } from '../components/TrainerProfileModal';

export const Academy: React.FC = () => {
  const { setEnrollingCourse, t, language, theme } = useDolphy();
  const [searchParams, setSearchParams] = useSearchParams();
  const { trainerId } = useParams<{ trainerId?: string }>();
  const navigate = useNavigate();

  const [activeCourseId, setActiveCourseId] = useState<string>('barista-thuc-chien');
  const [openSyllabusSession, setOpenSyllabusSession] = useState<number | null>(1);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  // Sync selected trainer with URL params (?trainer=id or /academy/trainer/:trainerId)
  useEffect(() => {
    const queryTrainerId = searchParams.get('trainer') || trainerId;
    if (queryTrainerId) {
      const found = trainersData.find(t => t.id.toLowerCase() === queryTrainerId.toLowerCase());
      if (found) {
        setSelectedTrainer(found);
      }
    }
  }, [searchParams, trainerId]);

  const handleOpenTrainer = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setSearchParams({ trainer: trainer.id });
  };

  const handleCloseTrainer = () => {
    setSelectedTrainer(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('trainer');
    if (trainerId) {
      navigate('/academy', { replace: true });
    } else {
      setSearchParams(newParams);
    }
  };

  const handleEnrollWithTrainer = (trainer: Trainer, course?: Course) => {
    setSelectedTrainer(null);
    const targetCourse = course || coursesData.find(c => trainer.coursesTeaching.includes(c.id)) || currentCourse;
    setEnrollingCourse(targetCourse);
  };

  const currentCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];
  const courseTrainers = trainersData.filter(t => t.coursesTeaching.includes(currentCourse.id));

  const themeAccentText = 
    theme === 'vintage' ? 'text-[#1b4d3e]' :
    theme === 'sunset' ? 'text-rose-600' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'nordic' ? 'text-black dark:text-white' :
    theme === 'dark' ? 'text-[#38bdf8]' :
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
      
      {/* 1. HERO BANNER (Theme-Adaptive Architecture) */}
      {theme === 'nordic' ? (
        /* NORDIC: Swiss Minimalist Brutalist Architectural Training Facility */
        <section className="bg-white dark:bg-zinc-950 text-black dark:text-white border-b-2 border-zinc-900 dark:border-zinc-200 select-none">
          <div className="border-b-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900/80 px-4 sm:px-8 py-2 flex items-center justify-between text-[11px] font-mono tracking-wider">
            <span className="font-bold">// DOLPHY ACADEMY FACILITY • 28 TRẦN LỰU, THẢO ĐIỀN</span>
            <span className="text-zinc-500 dark:text-zinc-400">[COHORT: SMALL 4-6 SEATS // ON-BAR 100%]</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-black dark:bg-white text-white dark:text-black font-mono font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs px-3 py-1">
                  [CURRICULUM // {t('academy.hero_tag')}]
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
              </div>

              <div className="w-14 h-1 bg-[#ff3b00]" />

              <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[0.06em] text-black dark:text-white leading-[1.05]">
                {t('academy.hero_title')}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                {t('academy.hero_desc')}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setEnrollingCourse(currentCourse)}
                  className="px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black hover:bg-[#ff3b00] hover:text-white dark:hover:bg-[#ff3b00] dark:hover:text-white font-mono text-xs uppercase tracking-[0.15em] font-bold rounded-none transition-colors"
                >
                  + {t('academy.reserve_cta')}
                </button>
              </div>
            </div>

            <div className="md:col-span-5 relative p-6 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-200 font-mono space-y-3">
              <span className="absolute top-1.5 left-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute top-1.5 right-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute bottom-1.5 left-1.5 text-xs text-[#ff3b00] font-bold">+</span>
              <span className="absolute bottom-1.5 right-1.5 text-xs text-[#ff3b00] font-bold">+</span>

              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">// SYSTEM ADVANTAGES</span>
              <div className="space-y-2 text-xs text-zinc-800 dark:text-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff3b00] font-bold">■</span>
                  <span>{language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff3b00] font-bold">■</span>
                  <span>{language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff3b00] font-bold">■</span>
                  <span>{language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff3b00] font-bold">■</span>
                  <span>{language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : theme === 'vintage' ? (
        /* VINTAGE: French Salon L'Académie de Café */
        <section className="bg-[#faf6f0] text-[#221e1a] border-b-2 border-[#e6ded1] p-4 sm:p-8 select-none">
          <div className="max-w-6xl mx-auto bg-[#fffdfa] border-2 border-[#e6ded1] rounded-lg p-6 sm:p-10 shadow-xs text-center font-serif relative">
            <div className="text-[#c05621] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-3 border-b-2 border-[#e6ded1] pb-3 mb-6">
              <span className="text-sm">❦</span>
              <span>— L'ACADÉMIE DU CAFÉ DOLPHY • MAISON FONDÉE EN 2013 —</span>
              <span className="text-sm">❦</span>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-block bg-[#c05621] text-white font-serif italic text-xs sm:text-sm px-4 py-1 rounded shadow-xs border border-amber-950/20">
                ❦ {t('academy.hero_tag')} ❦
              </span>

              <h1 className="font-serif italic font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1b4d3e] leading-tight">
                {t('academy.hero_title')}
              </h1>

              <div className="w-16 h-0.5 bg-[#c05621]/40 mx-auto my-3" />

              <p className="text-sm sm:text-base text-[#5a5045] italic leading-relaxed">
                "{t('academy.hero_desc')}"
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#1b4d3e]">
                <span className="flex items-center gap-1.5">✓ {language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}</span>
                <span className="flex items-center gap-1.5">✓ {language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}</span>
                <span className="flex items-center gap-1.5">✓ {language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}</span>
                <span className="flex items-center gap-1.5">✓ {language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}</span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setEnrollingCourse(currentCourse)}
                  className="px-8 py-3.5 rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
                >
                  ❦ {t('academy.reserve_cta')}
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : theme === 'roastery' ? (
        /* ROASTERY: Cyber Holographic Training Console */
        <section className="bg-[#050811] text-white border-b border-cyan-500/40 select-none relative overflow-hidden">
          <div className="bg-[#080d1a] border-b border-cyan-500/30 px-4 sm:px-8 py-2 flex items-center justify-between text-[11px] font-mono text-cyan-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>ACADEMY_STATUS: ACTIVE // SENSORY_LAB: ONLINE // BATCH: 2026</span>
            </div>
            <span className="font-bold">// REAL-TIME_CURRICULUM</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 bg-slate-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-[11px] sm:text-xs px-3.5 py-1.5 rounded shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <GraduationCap size={15} className="text-cyan-400" />
                <span>// PROGRAM_INDEX: {t('academy.hero_tag')}</span>
              </span>

              <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] leading-tight tracking-wider">
                {t('academy.hero_title')}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl border-l-2 border-cyan-500/40 pl-4">
                {t('academy.hero_desc')}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setEnrollingCourse(currentCourse)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
                >
                  {t('academy.reserve_cta')}
                </button>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-cyan-500/40 font-mono text-slate-300 shadow-[0_0_25px_rgba(2,132,199,0.2)] space-y-2.5">
              <span className="text-[10px] text-pink-400 uppercase tracking-widest block mb-2">// BENCHMARKS</span>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                <span>{language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                <span>{language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                <span>{language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                <span>{language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}</span>
              </div>
            </div>
          </div>
        </section>
      ) : theme === 'sunset' ? (
        /* SUNSET: Floating Organic Pebble Academy Header */
        <section className="bg-gradient-to-br from-[#fff1f2] via-[#fff7ed] to-[#fed7aa]/30 border-b border-rose-200 py-10 sm:py-16 px-4 sm:px-8 select-none">
          <div className="max-w-5xl mx-auto rounded-[36px] sm:rounded-[48px] bg-white/90 backdrop-blur-xl border border-rose-200/90 shadow-xl shadow-rose-500/10 p-8 sm:p-14 text-center space-y-5">
            <div>
              <span className="inline-block bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white font-oswald uppercase tracking-widest text-xs px-4 py-1.5 rounded-full shadow-lg shadow-rose-500/30 font-bold">
                {t('academy.hero_tag')}
              </span>
            </div>

            <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-[#271a17] leading-tight">
              {t('academy.hero_title')}
            </h1>

            <p className="text-[#7d6560] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {t('academy.hero_desc')}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-oswald text-rose-600">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-orange-500" /> {language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-orange-500" /> {language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-orange-500" /> {language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-orange-500" /> {language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}</span>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white font-oswald text-xs uppercase tracking-wider font-bold shadow-xl shadow-rose-500/30 transition-all hover:scale-105"
              >
                {t('academy.reserve_cta')}
              </button>
            </div>
          </div>
        </section>
      ) : (
        /* OCEAN & DARK: Classic Cinematic Gradient Banner */
        <section className="reveal-on-scroll border-b text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center relative bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-5 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow rounded bg-[#FAEA28] text-slate-950 font-oswald">
              <GraduationCap size={15} />
              <span>{t('academy.hero_tag')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight font-oswald">
              {t('academy.hero_title')}
            </h1>

            <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
              {t('academy.hero_desc')}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100 dark:text-blue-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className={theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]'} /> {language === 'vi' ? 'Thực hành 100% tại quầy bar' : '100% on-bar practice'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className={theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]'} /> {language === 'vi' ? 'Ưu tiên tuyển dụng 10 quán' : '10-branch hiring priority'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className={theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]'} /> {language === 'vi' ? 'Không ràng buộc độc quyền' : 'Zero exclusivity bond'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className={theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]'} /> {language === 'vi' ? 'Lớp nhỏ 4-6 học viên' : 'Intimate 4-6 cohorts'}
              </span>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className="dolphy-btn dolphy-btn-amber px-8 py-3.5 text-sm font-semibold shadow-xl hover-lift rounded"
              >
                <GraduationCap size={18} className="mr-2" />
                <span>{t('academy.reserve_cta')}</span>
              </button>
              <a
                href="#courses-section"
                className="px-6 py-3.5 rounded bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 text-xs font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-1.5"
              >
                <span>{language === 'vi' ? 'Xem Chương Trình & Giáo Trình ↓' : 'Curriculum & Courses ↓'}</span>
              </a>
            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          2. COURSE PROGRAMS & FULL CURRICULUM (COURSES FIRST)
          ========================================================================= */}
      <section id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider px-1">
            <span className={`font-bold flex items-center gap-1.5 ${
              theme === 'vintage' ? 'text-[#1b4d3e]' :
              theme === 'sunset' ? 'text-rose-600' :
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'nordic' ? 'text-black dark:text-white font-mono' :
              theme === 'dark' ? 'text-[#38bdf8]' :
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
                        <span className={`text-xs sm:text-sm font-oswald font-bold ${active ? (theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]') : 'text-[#2076bd] dark:text-[#3ba0e6]'}`}>
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
                      <span className={`font-bold uppercase tracking-wider text-[10px] sm:text-[11px] ${active ? (theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#FAEA28]') : 'text-[#2076bd] dark:text-[#3ba0e6]'}`}>
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

      {/* 2B. ACTIVE COURSE EXECUTIVE DETAILS & PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Block: Balanced 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Course Intro, Benefits & Target Students (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 reveal-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 shadow-sm ${
                  theme === 'nordic' ? 'rounded-none bg-black text-white font-mono' :
                  theme === 'sunset' ? 'rounded-full bg-rose-500 text-white font-oswald' :
                  theme === 'vintage' ? 'rounded-md bg-[#1b4d3e] text-white font-serif' :
                  theme === 'dark' ? 'rounded bg-blue-950/80 text-[#38bdf8] border border-blue-500/30 font-oswald' :
                  'rounded bg-[#FAEA28] text-slate-950 font-oswald'
                }`}>
                  {language === 'en' && currentCourse.badgeEn ? currentCourse.badgeEn : currentCourse.badge}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-oswald">
                  {t('academy.duration')}: {language === 'en' && currentCourse.durationEn ? currentCourse.durationEn : currentCourse.duration}
                </span>
              </div>

              <h2 className={`text-2xl sm:text-3xl font-bold uppercase tracking-tight ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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

            {/* Highlights / Benefits */}
            <div className={`p-6 space-y-3.5 ${
              theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#f2ebe0] font-serif' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] shadow-[0_0_20px_rgba(2,132,199,0.2)] font-mono' :
              'bg-blue-50/80 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 rounded-xl'
            }`}>
              <h3 className={`text-sm sm:text-base font-bold uppercase ${themeAccentText}`}>
                {t('academy.benefits_title')}
              </h3>
              <div className="space-y-2 text-xs text-gray-700 dark:text-gray-200">
                {((language === 'en' && currentCourse.uspsEn) ? currentCourse.uspsEn : (currentCourse.usps || currentCourse.outcomes || [])).map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${themeAccentText}`} />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience / Đối Tượng Phù Hợp */}
            <div className={`p-5 rounded-xl border space-y-3 ${
              theme === 'nordic' ? 'rounded-none border-zinc-900 bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-700 font-mono' :
              theme === 'vintage' ? 'bg-[#faf6f0] border-[#e6ded1] font-serif' :
              theme === 'roastery' ? 'bg-[#091122] border-cyan-500/30 font-mono' :
              'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">
                {language === 'vi' ? 'Đối tượng học viên phù hợp:' : 'Target Audience:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                {((language === 'en' && currentCourse.targetAudienceEn) ? currentCourse.targetAudienceEn : (currentCourse.targetAudience || [])).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className={`font-bold ${themeAccentText}`}>•</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Tuition Card (lg:col-span-5) */}
          <div className="lg:col-span-5 reveal-right">
            <div className={`p-6 shadow-xl space-y-6 ${
              theme === 'nordic' ? 'rounded-none border-2 border-black dark:border-white bg-white dark:bg-zinc-950 font-mono' :
              theme === 'sunset' ? 'rounded-3xl border border-rose-200 bg-white shadow-rose-500/10' :
              theme === 'vintage' ? 'rounded-lg border-2 border-[#1b4d3e] bg-[#faf6f0] font-serif' :
              theme === 'roastery' ? 'rounded-xl border border-cyan-500/50 bg-[#0b1324] shadow-[0_0_30px_rgba(2,132,199,0.25)] font-mono' :
              'bg-white dark:bg-[#1e293b] border-2 border-[#2076bd] dark:border-[#3ba0e6] rounded-2xl'
            }`}>
              
              <div className="text-center border-b border-gray-100 dark:border-slate-800 pb-4">
                <span className="text-xs text-gray-400 dark:text-gray-500 uppercase font-oswald">{t('academy.tuition_full')}</span>
                <div className={`text-3xl sm:text-4xl font-bold my-1 ${
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
                'rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-900 dark:text-blue-200'
              }`}>
                <p className={`font-bold flex items-center gap-1.5 ${themeAccentText}`}>
                  <Gift size={14} className={themeAccentText} />
                  {language === 'vi' ? 'Ưu đãi đăng ký sớm:' : 'Early Bird Privilege:'}
                </p>
                <p>{language === 'vi' ? 'Tặng kèm 1 áo Barista Dolphy + 1kg hạt Specialty tự luyện tập.' : 'Includes 1 Barista apron + 1kg specialty coffee for home training.'}</p>
              </div>

              {/* Training Guarantees & Quality Commitment */}
              <div className={`p-3.5 text-xs space-y-2 border ${
                theme === 'nordic' ? 'rounded-none bg-zinc-50 dark:bg-zinc-900 border-zinc-900' :
                theme === 'sunset' ? 'rounded-2xl bg-orange-50/60 border-orange-200' :
                theme === 'vintage' ? 'rounded-lg bg-[#f7f2ea] border-[#e6ded1]' :
                theme === 'roastery' ? 'rounded-lg bg-cyan-950/40 border-cyan-500/20 text-slate-300' :
                'rounded-xl bg-gray-50 dark:bg-slate-800/80 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
              }`}>
                <p className={`font-bold flex items-center gap-1.5 ${themeAccentText}`}>
                  <ShieldCheck size={14} className={themeAccentText} />
                  <span>{language === 'vi' ? 'Cam kết chất lượng đào tạo Dolphy:' : 'Dolphy Training Commitment:'}</span>
                </p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{language === 'vi' ? 'Thực hành 100% trên máy pha đa group' : '100% hands-on multi-group machine practice'}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{language === 'vi' ? 'Ưu tiên tuyển dụng ngay vào 10 chi nhánh' : 'Direct hiring priority across 10 chain stores'}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{language === 'vi' ? 'Hỗ trợ học bù & bảo lưu lịch học miễn phí' : 'Free schedule rescheduling & cohort pausing'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className={`w-full py-3.5 font-oswald text-sm uppercase tracking-wider font-extrabold transition-colors shadow-md flex items-center justify-center gap-2 hover-lift cursor-pointer ${
                  theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-[#ff3b00]' :
                  theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white shadow-rose-500/25' :
                  theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white hover:bg-[#a04618]' :
                  theme === 'roastery' ? 'rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' :
                  'rounded-xl bg-[#FAEA28] hover:bg-[#D4C618] text-slate-950'
                }`}
              >
                <QrCode size={16} />
                <span>{language === 'vi' ? 'ĐĂNG KÝ & TẠO MÃ VIETQR CỌC' : 'RESERVE & GENERATE VIETQR'}</span>
              </button>

              <div className="text-center text-[11px] text-gray-400 dark:text-gray-500">
                {language === 'vi' ? 'Hỗ trợ tư vấn trực tiếp:' : 'Direct Consultation Hotline:'} <a href={`tel:${brandInfo.hotline.replace(/\s+/g, '')}`} className={`font-semibold ${themeAccentText}`}>{brandInfo.hotline}</a>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            DEDICATED FULL-WIDTH SYLLABUS SECTION: 2-COLUMN BALANCED GRID
            (Completely eliminates the empty blank space on the right!)
            ========================================================================= */}
        <div className="pt-8 border-t border-gray-100 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className={`text-[11px] font-bold uppercase tracking-widest ${themeAccentText}`}>
                {language === 'vi' ? 'LỘ TRÌNH ĐÀO TẠO TẠI QUẦY BAR THỰC TẾ' : 'LIVE ON-BAR TRAINING CURRICULUM'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase font-oswald text-gray-900 dark:text-white mt-1">
                {language === 'vi' 
                  ? `GIÁO TRÌNH ${currentCourse.syllabus.length} BUỔI THỰC CHIẾN CHUYÊN SÂU` 
                  : `${currentCourse.syllabus.length}-SESSION HANDS-ON MASTER CURRICULUM`}
              </h3>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span>{currentCourse.hoursPerSession}h / {language === 'vi' ? 'buổi' : 'session'} • {language === 'vi' ? 'Thực hành 100% tại quầy' : '100% On-bar practice'}</span>
            </div>
          </div>

          {/* 2-Column Balanced Syllabus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {currentCourse.syllabus.map((session, sIndex) => {
              const sessionEn = (currentCourse.syllabusEn && currentCourse.syllabusEn[sIndex]) ? currentCourse.syllabusEn[sIndex] : null;
              const title = (language === 'en' && sessionEn) ? sessionEn.title : (language === 'en' && session.titleEn ? session.titleEn : session.title);
              const description = (language === 'en' && sessionEn) ? sessionEn.description : (language === 'en' && session.descriptionEn ? session.descriptionEn : session.description);
              const skills = (language === 'en' && sessionEn && sessionEn.practicalSkills) ? sessionEn.practicalSkills : ((language === 'en' && session.practicalSkillsEn) ? session.practicalSkillsEn : (session.practicalSkills || []));

              return (
                <div
                  key={session.session}
                  className={`p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                    theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
                    theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-md hover:border-rose-300' :
                    theme === 'vintage' ? 'rounded-xl border-2 border-[#e6ded1] bg-[#faf6f0] font-serif shadow-xs hover:border-[#1b4d3e]/50' :
                    theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)] hover:border-cyan-400' :
                    theme === 'dark' ? 'rounded-2xl border border-slate-800 bg-[#0b1329] shadow-md hover:border-[#38bdf8]/50' :
                    'rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:border-blue-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 text-xs font-bold font-oswald uppercase tracking-wider rounded ${
                        theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black font-mono rounded-none' :
                        theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full' :
                        theme === 'vintage' ? 'bg-[#1b4d3e] text-white font-serif rounded-md' :
                        theme === 'roastery' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded-lg' :
                        theme === 'dark' ? 'bg-blue-950/80 text-[#38bdf8] border border-blue-500/30 font-oswald' :
                        'bg-[#2076bd] text-white font-oswald'
                      }`}>
                        {language === 'vi' ? `Buổi ${session.session}` : `Session ${session.session}`}
                      </span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 font-oswald font-medium">
                        {currentCourse.hoursPerSession}h / {language === 'vi' ? 'buổi' : 'session'}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold uppercase text-[#222222] dark:text-white leading-snug ${
                      theme === 'vintage' ? 'font-serif' : 'font-oswald'
                    }`}>
                      {title}
                    </h4>

                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-gray-100 dark:border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">
                      {language === 'vi' ? 'Kỹ năng thực hành trọng tâm:' : 'Key Practical Focus:'}
                    </span>
                    <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                      {skills.map((skill, si) => (
                        <div key={si} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${themeAccentText}`} />
                          <span className="leading-snug">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MASTER TRAINERS & GRAND FINAL JUDGES (PLACED AFTER COURSES & CURRICULUM)
          ========================================================================= */}
      <section id="trainers-section" className={`py-12 sm:py-16 border-y transition-colors select-none ${
        theme === 'nordic' ? 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800' :
        theme === 'vintage' ? 'bg-[#f7f2ea] border-[#e6ded1]' :
        theme === 'roastery' ? 'bg-[#060a14] border-cyan-500/20' :
        theme === 'sunset' ? 'bg-gradient-to-b from-[#fff1f2]/50 via-white to-transparent border-rose-100' :
        theme === 'dark' ? 'bg-[#0b1329]/70 border-slate-800' :
        'bg-slate-50/80 dark:bg-slate-900/50 border-gray-100 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 reveal-on-scroll">
            <div>
              <span className={`inline-block text-xs uppercase tracking-widest font-bold ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-mono text-cyan-400' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {t('academy.trainers_tag')}
              </span>
            </div>
            <div>
              <h2 className="section-title">
                {t('academy.trainers_title')}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('academy.trainers_sub')}
            </p>
          </div>

          {/* 4 Trainers Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {trainersData.map((trainer) => {
              const name = language === 'en' && trainer.nameEn ? trainer.nameEn : trainer.name;
              const role = language === 'en' && trainer.roleEn ? trainer.roleEn : trainer.role;
              const badge = language === 'en' && trainer.badgeEn ? trainer.badgeEn : trainer.badge;
              const experience = language === 'en' && trainer.experienceEn ? trainer.experienceEn : trainer.experience;

              return (
                <div
                  key={trainer.id}
                  onClick={() => handleOpenTrainer(trainer)}
                  className={`group cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between hover-lift ${
                    theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono' :
                    theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5' :
                    theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
                    theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono shadow-[0_0_20px_rgba(2,132,199,0.15)]' :
                    theme === 'dark' ? 'rounded-2xl border border-slate-800 bg-[#0b1329] shadow-lg hover:border-[#38bdf8]/50' :
                    'rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-xl hover:border-blue-400'
                  }`}
                >
                  <div>
                    {/* Poster Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                      <img
                        src={trainer.image}
                        alt={`${name} - ${role}`}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    {/* Body Content */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`font-bold uppercase tracking-wider ${
                          theme === 'dark' ? 'text-[#38bdf8]' :
                          theme === 'roastery' ? 'text-cyan-400' :
                          theme === 'vintage' ? 'text-[#1b4d3e]' :
                          theme === 'sunset' ? 'text-rose-600' :
                          'text-[#2076bd] dark:text-[#3ba0e6]'
                        }`}>
                          {badge}
                        </span>
                        <span className="text-gray-400 text-[11px] font-medium">
                          {experience}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold uppercase tracking-wide leading-tight ${
                        theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                        theme === 'sunset' ? 'font-oswald text-rose-600' :
                        theme === 'roastery' ? 'font-mono text-cyan-300' :
                        theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                        theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
                        'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
                      }`}>
                        {name}
                      </h3>

                      <p className="text-xs text-gray-600 dark:text-gray-300 font-medium line-clamp-1">
                        {role}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Button */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenTrainer(trainer);
                      }}
                      className={`w-full py-2 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all rounded-lg cursor-pointer ${
                        theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-[#ff3b00]' :
                        theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100' :
                        theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white' :
                        theme === 'roastery' ? 'rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black' :
                        theme === 'dark' ? 'bg-blue-950/60 text-[#38bdf8] border border-blue-500/30 hover:bg-[#38bdf8] hover:text-slate-950' :
                        'bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] hover:bg-[#2076bd] hover:text-white'
                      }`}
                    >
                      <span>{t('academy.view_profile')}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
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
              theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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
                  theme === 'dark' ? 'font-oswald text-[#38bdf8]' :
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

      {/* Trainer Profile Dedicated Modal */}
      <TrainerProfileModal
        trainer={selectedTrainer}
        allTrainers={trainersData}
        onClose={handleCloseTrainer}
        onSelectTrainer={handleOpenTrainer}
        onEnrollWithTrainer={handleEnrollWithTrainer}
      />

    </div>
  );
};
