import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const BackToTop: React.FC = () => {
  const { language, theme } = useDolphy();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show after scrolling 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalScrollableHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollableHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Circular progress calculations (Radius = 22, Circumference = 2 * PI * 22 ~= 138.23)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const progressStrokeColor = 
    theme === 'vintage' ? 'text-[#c05621]' :
    theme === 'roastery' ? 'text-cyan-400' :
    theme === 'sunset' ? 'text-rose-500' :
    theme === 'nordic' ? 'text-black dark:text-white' :
    'text-[#FAEA28]';

  return (
    <div
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label={language === 'vi' ? 'Trở về đầu trang' : 'Scroll to top'}
        title={language === 'vi' ? 'Trở về đầu trang' : 'Scroll to top'}
        className={`relative group w-12 h-12 flex items-center justify-center transition-transform duration-200 hover:-translate-y-1 focus:outline-none ${
          theme === 'nordic' ? 'rounded-none bg-white dark:bg-zinc-950 border-2 border-black dark:border-white shadow-lg' :
          theme === 'vintage' ? 'rounded-full bg-[#faf6f0] border border-[#e6ded1] shadow-xl' :
          theme === 'roastery' ? 'rounded-xl bg-[#0b1324] border border-cyan-500/40 shadow-[0_0_20px_rgba(2,132,199,0.3)]' :
          theme === 'sunset' ? 'rounded-full bg-white border border-rose-200 shadow-xl shadow-rose-500/10' :
          'rounded-full bg-white dark:bg-[#1e293b] shadow-xl hover:shadow-2xl border border-gray-100 dark:border-slate-800'
        }`}
      >
        {/* SVG Circular Progress Track and Fill */}
        <svg
          className="absolute inset-0 w-12 h-12 -rotate-90 transform pointer-events-none"
          viewBox="0 0 48 48"
        >
          {/* Background circle track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-gray-200 dark:text-slate-700 stroke-current"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className={`${progressStrokeColor} stroke-current transition-all duration-150 ease-out`}
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center Button Icon */}
        <div className={`w-9 h-9 flex items-center justify-center transition-colors duration-200 shadow-sm ${
          theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black font-mono' :
          theme === 'vintage' ? 'rounded-full bg-[#1b4d3e] hover:bg-[#c05621] text-white' :
          theme === 'roastery' ? 'rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' :
          theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
          theme === 'dark' ? 'rounded-full bg-[#FAEA28] text-slate-950 hover:bg-amber-300' :
          'rounded-full bg-[#2076bd] group-hover:bg-[#FAEA28] text-white group-hover:text-slate-950'
        }`}>
          <ArrowUp
            size={18}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </div>
      </button>
    </div>
  );
};
