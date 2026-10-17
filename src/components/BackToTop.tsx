import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const BackToTop: React.FC = () => {
  const { language } = useDolphy();
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

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label={language === 'vi' ? 'Trở về đầu trang' : 'Scroll to top'}
        title={language === 'vi' ? 'Trở về đầu trang' : 'Scroll to top'}
        className="relative group w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-[#1e293b] shadow-xl hover:shadow-2xl border border-gray-100 dark:border-slate-800 transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#2076bd]/40"
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
            className="text-[#c88232] stroke-current transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center Button Icon */}
        <div className="w-9 h-9 rounded-full bg-[#2076bd] group-hover:bg-[#c88232] text-white flex items-center justify-center transition-colors duration-200 shadow-sm">
          <ArrowUp
            size={18}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </div>
      </button>
    </div>
  );
};
