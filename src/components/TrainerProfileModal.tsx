import React, { useState } from 'react';
import { X, Award, CheckCircle2, GraduationCap, Quote, Share2, Sparkles, BookOpen, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  if (!trainer) return null;

  const currentIndex = allTrainers.findIndex(t => t.id === trainer.id);
  const prevTrainer = allTrainers[(currentIndex - 1 + allTrainers.length) % allTrainers.length];
  const nextTrainer = allTrainers[(currentIndex + 1) % allTrainers.length];

  const handleCopyLink = () => {
    const url = `${window.location.origin}/academy?trainer=${trainer.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const name = language === 'en' && trainer.nameEn ? trainer.nameEn : trainer.name;
  const role = language === 'en' && trainer.roleEn ? trainer.roleEn : trainer.role;
  const title = language === 'en' && trainer.titleEn ? trainer.titleEn : trainer.title;
  const badge = language === 'en' && trainer.badgeEn ? trainer.badgeEn : trainer.badge;
  const experience = language === 'en' && trainer.experienceEn ? trainer.experienceEn : trainer.experience;
  const bio = language === 'en' && trainer.bioEn ? trainer.bioEn : trainer.bio;
  const philosophy = language === 'en' && trainer.philosophyEn ? trainer.philosophyEn : trainer.philosophy;
  const specialties = (language === 'en' && trainer.specialtiesEn) ? trainer.specialtiesEn : trainer.specialties;
  const achievements = (language === 'en' && trainer.achievementsEn) ? trainer.achievementsEn : trainer.achievements;

  // Resolve courses taught by this trainer
  const taughtCourses = coursesData.filter(c => trainer.coursesTeaching.includes(c.id));

  // Theme-specific styles
  const modalContainerClass =
    theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
    theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-lg border-2 border-[#e6ded1] font-serif' :
    theme === 'roastery' ? 'bg-[#070a12] text-white rounded-xl border border-cyan-500/50 font-mono shadow-[0_0_35px_rgba(6,182,212,0.3)]' :
    theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
    theme === 'dark' ? 'bg-[#0b1329] rounded-2xl border border-slate-800 text-white shadow-2xl' :
    'bg-white dark:bg-[#1e293b] rounded-3xl border border-blue-100 dark:border-slate-700 shadow-2xl';

  const accentColorClass =
    theme === 'nordic' ? 'text-black dark:text-white' :
    theme === 'vintage' ? 'text-[#1b4d3e]' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'sunset' ? 'text-rose-600' :
    theme === 'dark' ? 'text-[#38bdf8]' :
    'text-[#2076bd] dark:text-[#3ba0e6]';

  const badgeClass =
    theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] uppercase tracking-widest px-2.5 py-1' :
    theme === 'vintage' ? 'bg-[#1b4d3e] text-white font-serif italic text-xs px-3 py-1 rounded shadow-xs' :
    theme === 'roastery' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50 font-mono text-[11px] px-3 py-1 rounded-md shadow-[0_0_12px_rgba(6,182,212,0.3)]' :
    theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white font-oswald text-xs uppercase px-3 py-1 rounded-full shadow-md' :
    theme === 'dark' ? 'bg-blue-950/80 text-[#38bdf8] border border-blue-500/40 font-oswald text-xs uppercase tracking-wider px-3 py-1 rounded-md' :
    'bg-[#2076bd] text-white font-oswald text-xs uppercase tracking-wider px-3 py-1 rounded-md shadow-xs';

  const quoteBoxClass =
    theme === 'nordic' ? 'border-l-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 p-4 font-mono text-xs' :
    theme === 'vintage' ? 'border-l-4 border-[#c05621] bg-[#f2ebe0] p-4 font-serif italic text-xs text-[#5a5045]' :
    theme === 'roastery' ? 'border-l-4 border-cyan-400 bg-cyan-950/30 p-4 font-mono text-xs text-cyan-200' :
    theme === 'sunset' ? 'border-l-4 border-rose-500 bg-gradient-to-r from-rose-50 to-orange-50 p-4 text-xs text-[#7d6560] rounded-r-2xl' :
    theme === 'dark' ? 'border-l-4 border-[#38bdf8] bg-blue-950/40 p-4 text-xs text-slate-200 rounded-r-xl' :
    'border-l-4 border-[#2076bd] bg-blue-50/70 dark:bg-slate-800/60 p-4 text-xs text-gray-700 dark:text-gray-200 rounded-r-xl';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-auto transition-all ${modalContainerClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-gray-200/80 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-900/80 shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold uppercase tracking-wider opacity-60">
              {t('academy.trainer_modal_title')}
            </span>
            <span className="opacity-40">•</span>
            <span className={accentColorClass}>
              {currentIndex + 1} / {allTrainers.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next trainer switcher */}
            <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
              <button
                onClick={() => onSelectTrainer(prevTrainer)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition-colors"
                title={`${language === 'vi' ? 'Xem giảng viên trước' : 'Previous trainer'}: ${prevTrainer.name}`}
              >
                <ChevronLeft size={16} />
              </button>
              <div className="w-[1px] h-4 bg-gray-200 dark:bg-slate-700" />
              <button
                onClick={() => onSelectTrainer(nextTrainer)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition-colors"
                title={`${language === 'vi' ? 'Xem giảng viên kế tiếp' : 'Next trainer'}: ${nextTrainer.name}`}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Share link button */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-blue-400 dark:hover:border-cyan-400 transition-colors"
              title={t('academy.trainer_share_link')}
            >
              <Share2 size={13} className={copied ? 'text-green-500' : ''} />
              <span className="hidden sm:inline">{copied ? (language === 'vi' ? 'Đã sao chép link!' : 'Copied!') : t('academy.trainer_share_link')}</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Main Grid: Left photo / Right info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: Portrait Poster */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-800 bg-slate-950 group">
                <img
                  src={trainer.image}
                  alt={`${name} - ${title}`}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3">
                  <span className={badgeClass}>
                    {badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                  {experience}
                </div>
              </div>

              {/* Personal Philosophy Quote */}
              <div className={quoteBoxClass}>
                <div className="flex items-start gap-2">
                  <Quote size={18} className="shrink-0 opacity-70 mt-0.5" />
                  <p className="leading-relaxed">
                    "{philosophy}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Credentials & Specialties */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Header Details */}
              <div className="space-y-2 border-b border-gray-200/80 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Dolphy Barista Academy
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${accentColorClass}`}>
                    {trainer.id.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold uppercase tracking-wide leading-tight">
                  {name}
                </h1>

                <p className={`text-sm sm:text-base font-semibold ${accentColorClass}`}>
                  {role}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {title}
                </p>
              </div>

              {/* Bio Story */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <BookOpen size={14} className={accentColorClass} />
                  <span>{language === 'vi' ? 'Tiểu Sử & Dấu Ấn Thực Chiến' : 'Biography & Practical Background'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {bio}
                </p>
              </div>

              {/* Achievements & Credentials */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <Award size={14} className={accentColorClass} />
                  <span>{t('academy.trainer_achievements')}</span>
                </h3>
                <div className="space-y-2">
                  {achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-200">
                      <Sparkles size={14} className={`shrink-0 mt-0.5 ${accentColorClass}`} />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Specialties Pills */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className={accentColorClass} />
                  <span>{t('academy.trainer_specialties')}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((spec, sidx) => (
                    <span
                      key={sidx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Courses Taught by this Trainer Section */}
          <div className="space-y-4 border-t border-gray-200/80 dark:border-slate-800 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={17} className={accentColorClass} />
                <span>{t('academy.trainer_courses')}</span>
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {taughtCourses.length} {language === 'vi' ? 'chương trình thực chiến' : 'courses'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {taughtCourses.map((c) => {
                const cTitle = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const cSubtitle = language === 'en' && c.subtitleEn ? c.subtitleEn : c.subtitle;
                const cDuration = language === 'en' && c.durationEn ? c.durationEn : c.duration;
                const cPrice = (c.discountPrice || c.price).toLocaleString('vi-VN');

                return (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/70 dark:bg-slate-900/60 flex flex-col justify-between hover:border-blue-400 dark:hover:border-slate-600 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-gray-500 dark:text-gray-400">{cDuration}</span>
                        <span className={`font-bold ${accentColorClass}`}>{cPrice}₫</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase leading-snug">
                        {cTitle}
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">
                        {cSubtitle}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-200/60 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">
                        {c.sessions} {language === 'vi' ? 'buổi thực hành' : 'sessions'}
                      </span>
                      <button
                        onClick={() => onEnrollWithTrainer(trainer, c)}
                        className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:underline ${accentColorClass}`}
                      >
                        <span>{language === 'vi' ? 'Chọn khóa này →' : 'Enroll this course →'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Trainer Thumbnail Navigator */}
          <div className="space-y-2 border-t border-gray-200/80 dark:border-slate-800 pt-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">
              {language === 'vi' ? 'Xem các Giảng Viên & Giám Khảo khác:' : 'Other Faculty & Judges:'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {allTrainers.map((tItem) => {
                const isActive = tItem.id === trainer.id;
                const tName = language === 'en' && tItem.nameEn ? tItem.nameEn : tItem.name;
                const tBadge = language === 'en' && tItem.badgeEn ? tItem.badgeEn : tItem.badge;

                return (
                  <button
                    key={tItem.id}
                    onClick={() => onSelectTrainer(tItem)}
                    className={`p-2 rounded-xl text-left flex items-center gap-2.5 transition-all cursor-pointer border ${
                      isActive
                        ? 'border-blue-500 dark:border-cyan-400 bg-blue-50 dark:bg-slate-800 shadow-sm'
                        : 'border-gray-200 dark:border-slate-800 hover:border-gray-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900/50'
                    }`}
                  >
                    <img
                      src={tItem.image}
                      alt={tName}
                      className="w-10 h-10 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold truncate">{tName}</div>
                      <div className="text-[10px] text-gray-400 truncate">{tBadge}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-gray-200/80 dark:border-slate-800 bg-gray-50/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <PhoneCall size={14} className={accentColorClass} />
            <span>{language === 'vi' ? 'Tư vấn trực tiếp:' : 'Hotline:'} <strong className="text-gray-800 dark:text-gray-200">{brandInfo.hotline}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {language === 'vi' ? 'Đóng' : 'Close'}
            </button>

            <button
              onClick={() => onEnrollWithTrainer(trainer)}
              className={`w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-102 ${
                theme === 'nordic' ? 'bg-black text-white hover:bg-[#ff3b00] rounded-none' :
                theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white shadow-rose-500/25 rounded-full' :
                theme === 'vintage' ? 'bg-[#1b4d3e] text-white hover:bg-[#c05621] rounded-md' :
                theme === 'roastery' ? 'bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                theme === 'dark' ? 'bg-[#2076bd] hover:bg-[#165b94] text-white rounded-xl' :
                'bg-[#2076bd] hover:bg-[#165b94] text-white rounded-xl'
              }`}
            >
              <GraduationCap size={15} />
              <span>{t('academy.trainer_enroll_cta')}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
