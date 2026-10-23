import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, PhoneCall, Award } from 'lucide-react';
import { Trainer, Course } from '../types';
import { coursesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

interface TrainerProfileModalProps {
  trainer: Trainer | null;
  allTrainers: Trainer[];
  onClose: () => void;
  onSelectTrainer: (trainer: Trainer) => void;
  onEnrollWithTrainer: (trainer: Trainer, course?: Course) => void;
}

export const TrainerProfileModal: React.FC<TrainerProfileModalProps> = ({
  trainer,
  allTrainers,
  onClose,
  onSelectTrainer,
  onEnrollWithTrainer
}) => {
  const { language, theme, t } = useDolphy();

  // Lock body scroll & handle keyboard shortcuts (Escape, Arrows)
  useEffect(() => {
    if (!trainer) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const idx = allTrainers.findIndex(t => t.id === trainer.id);
        const prev = allTrainers[(idx - 1 + allTrainers.length) % allTrainers.length];
        onSelectTrainer(prev);
      }
      if (e.key === 'ArrowRight') {
        const idx = allTrainers.findIndex(t => t.id === trainer.id);
        const next = allTrainers[(idx + 1) % allTrainers.length];
        onSelectTrainer(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trainer, allTrainers, onClose, onSelectTrainer]);

  if (!trainer) return null;

  const currentIndex = allTrainers.findIndex(t => t.id === trainer.id);
  const prevTrainer = allTrainers[(currentIndex - 1 + allTrainers.length) % allTrainers.length];
  const nextTrainer = allTrainers[(currentIndex + 1) % allTrainers.length];

  const name = language === 'en' && trainer.nameEn ? trainer.nameEn : trainer.name;
  const role = language === 'en' && trainer.roleEn ? trainer.roleEn : trainer.role;
  const badge = language === 'en' && trainer.badgeEn ? trainer.badgeEn : trainer.badge;
  const experience = language === 'en' && trainer.experienceEn ? trainer.experienceEn : trainer.experience;
  const philosophy = language === 'en' && trainer.philosophyEn ? trainer.philosophyEn : trainer.philosophy;
  const achievements = (language === 'en' && trainer.achievementsEn) ? trainer.achievementsEn : trainer.achievements;

  // Resolve course taught by this trainer
  const taughtCourse = coursesData.find(c => trainer.coursesTeaching.includes(c.id)) || coursesData[0];
  const courseTitle = language === 'en' && taughtCourse.titleEn ? taughtCourse.titleEn : taughtCourse.title;

  // Theme-adaptive styling
  const modalBoxClass =
    theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-black dark:border-white font-mono' :
    theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-xl border-2 border-[#e6ded1] font-serif shadow-2xl' :
    theme === 'roastery' ? 'bg-[#070d1c] text-white rounded-2xl border border-cyan-500/50 font-mono shadow-[0_0_40px_rgba(6,182,212,0.35)]' :
    theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
    theme === 'dark' ? 'bg-[#0b1329] text-white rounded-2xl border border-slate-700/80 shadow-2xl' :
    'bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white rounded-3xl border border-gray-200 dark:border-slate-700 shadow-2xl';

  const accentTextClass =
    theme === 'nordic' ? 'text-black dark:text-white' :
    theme === 'vintage' ? 'text-[#1b4d3e]' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'sunset' ? 'text-rose-600' :
    theme === 'dark' ? 'text-[#38bdf8]' :
    'text-[#2076bd] dark:text-[#3ba0e6]';

  const ctaBtnClass =
    theme === 'nordic' ? 'bg-black text-white hover:bg-[#ff3b00] rounded-none' :
    theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white shadow-lg shadow-rose-500/25 rounded-full' :
    theme === 'vintage' ? 'bg-[#1b4d3e] hover:bg-[#c05621] text-white rounded-lg shadow' :
    theme === 'roastery' ? 'bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
    theme === 'dark' ? 'bg-[#2076bd] hover:bg-[#165b94] text-white rounded-xl shadow-lg' :
    'bg-[#2076bd] hover:bg-[#165b94] text-white rounded-xl shadow-lg';

  // Mount to document.body via Portal to guarantee escape from any parent stacking contexts
  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      style={{ isolation: 'isolate' }}
    >
      <div
        className={`relative w-full max-w-3xl overflow-hidden transition-all my-auto shadow-2xl ${modalBoxClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean, Non-intrusive Top Bar - 100% visible & unclipped */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-slate-800/80 bg-gray-50/70 dark:bg-slate-900/60 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <span>{language === 'vi' ? 'Hồ sơ Giảng viên' : 'Trainer Profile'}</span>
            <span>•</span>
            <span className={accentTextClass}>{currentIndex + 1} / {allTrainers.length}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next buttons */}
            <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
              <button
                onClick={() => onSelectTrainer(prevTrainer)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition-colors"
                title={`${language === 'vi' ? 'Trước' : 'Previous'}: ${prevTrainer.name}`}
              >
                <ChevronLeft size={16} />
              </button>
              <div className="w-[1px] h-4 bg-gray-200 dark:bg-slate-700" />
              <button
                onClick={() => onSelectTrainer(nextTrainer)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition-colors"
                title={`${language === 'vi' ? 'Kế tiếp' : 'Next'}: ${nextTrainer.name}`}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors ml-1"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Main Body: 2 Clean Columns */}
        <div className="p-5 sm:p-7 max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Pure Poster Artwork (NO floating badges covering it!) */}
            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 bg-slate-950">
                <img
                  src={trainer.image}
                  alt={name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Clean, Breathable, High-Impact Highlights */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Name & Title */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    theme === 'dark' ? 'bg-blue-950 text-[#38bdf8] border border-blue-500/30' :
                    theme === 'vintage' ? 'bg-[#f2ebe0] text-[#1b4d3e]' :
                    theme === 'roastery' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' :
                    'bg-blue-50 text-[#2076bd] border border-blue-200'
                  }`}>
                    {badge}
                  </span>
                  <span className="text-[11px] text-gray-400">•</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                    {experience}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight">
                  {name}
                </h2>

                <p className={`text-xs sm:text-sm font-semibold ${accentTextClass}`}>
                  {role}
                </p>
              </div>

              {/* Inspiring Philosophy Quote */}
              <div className={`p-3 rounded-lg text-xs leading-relaxed italic border-l-3 ${
                theme === 'dark' ? 'bg-slate-900/60 border-[#38bdf8] text-slate-300' :
                theme === 'vintage' ? 'bg-[#f7f2ea] border-[#1b4d3e] text-[#5a5045]' :
                theme === 'roastery' ? 'bg-cyan-950/30 border-cyan-400 text-cyan-200' :
                'bg-blue-50/60 dark:bg-slate-800/60 border-[#2076bd] text-gray-700 dark:text-gray-300'
              }`}>
                "{philosophy}"
              </div>

              {/* 3 Key Credentials / Achievements */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <Award size={13} className={accentTextClass} />
                  <span>{language === 'vi' ? 'Dấu ấn chuyên môn' : 'Credentials'}</span>
                </div>

                <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                  {achievements.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${accentTextClass}`} />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teaching Course Link */}
              <div className="pt-2 border-t border-gray-100 dark:border-slate-800 text-xs">
                <span className="text-gray-400 dark:text-gray-500 block mb-1">
                  {language === 'vi' ? 'Khóa học trực tiếp phụ trách:' : 'Primary Course:'}
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {courseTitle}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={() => onEnrollWithTrainer(trainer, taughtCourse)}
                  className={`py-2.5 px-5 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${ctaBtnClass}`}
                >
                  <GraduationCap size={15} />
                  <span>{language === 'vi' ? `Đăng ký học cùng ${name}` : `Enroll with ${name}`}</span>
                </button>

                <a
                  href={`tel:${brandInfo.hotline.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-gray-400 dark:hover:border-slate-500 text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall size={13} />
                  <span>{brandInfo.hotline}</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};
