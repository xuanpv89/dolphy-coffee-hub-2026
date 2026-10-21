import React from 'react';
import { Theme } from '../types/theme';

interface DolphyBrandLogoProps {
  theme: Theme;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Authentic Dolphin Wave Icon vector component.
 * Stylized dolphin leaping gracefully out of coffee ocean waves.
 */
export const DolphinWaveIcon: React.FC<{
  className?: string;
  size?: number;
  waveColor?: string;
  dolphinColor?: string;
}> = ({
  className = '',
  size = 32,
  waveColor = 'currentColor',
  dolphinColor = 'currentColor'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer circle */}
    <circle cx="50" cy="50" r="46" stroke={waveColor} strokeWidth="4" />
    
    {/* Ocean waves */}
    <path
      d="M14 62 C 24 54, 34 54, 44 62 C 54 70, 64 70, 74 62 C 80 58, 84 60, 86 63"
      stroke={waveColor}
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    <path
      d="M20 72 C 28 66, 36 66, 44 72 C 52 78, 60 78, 68 72 C 74 68, 78 70, 82 72"
      stroke={waveColor}
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Leaping Dolphin Silhouette */}
    <path
      d="M36 58 C 40 44, 48 34, 62 32 C 70 31, 76 36, 73 42 C 67 48, 57 50, 48 57 C 54 53, 64 51, 68 46 C 69 43, 67 39, 62 39 C 52 39, 44 48, 36 58 Z"
      fill={dolphinColor}
    />
    {/* Dorsal Fin */}
    <path
      d="M54 34 C 56 27, 60 23, 66 22 C 64 26, 62 30, 61 33 Z"
      fill={dolphinColor}
    />
    {/* Pectoral Fin */}
    <path
      d="M48 46 C 43 42, 39 42, 35 45 C 39 45, 43 46, 46 48 Z"
      fill={dolphinColor}
    />
    {/* Dolphin Eye */}
    <circle cx="68" cy="36" r="1.5" fill={waveColor === dolphinColor ? '#ffffff' : waveColor} />
  </svg>
);

/**
 * Theme-Harmonized Brand Signature Lockup.
 * Perfectly calibrated typography, colors, and badge ratios per theme.
 */
export const DolphyBrandLogo: React.FC<DolphyBrandLogoProps> = ({
  theme,
  className = '',
  size = 'md'
}) => {
  // 1. THEME: VINTAGE (Thảo Điền Botanical Courtyard Bistro)
  if (theme === 'vintage') {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 group shrink-0 ${className}`}>
        {/* Emerald & Antique Gilded Brass Medallion */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b4d3e] text-[#faf6f0] flex items-center justify-center p-1 border-2 border-[#c59b27] shadow-[0_2px_8px_rgba(27,77,62,0.25)] group-hover:scale-105 transition-transform shrink-0">
          <DolphinWaveIcon size={24} waveColor="#c59b27" dolphinColor="#faf6f0" />
        </div>

        {/* Crisp Indochine Bistro Serif Typography */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.16em] text-[#1b4d3e] uppercase leading-none group-hover:text-[#c59b27] transition-colors">
              DOLPHY
            </span>
            <span className="font-serif text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded border border-[#c59b27] bg-[#c59b27]/10 text-[#c59b27] tracking-wider uppercase leading-none">
              CAFÉ
            </span>
          </div>
          <span className="font-serif italic text-[10px] text-[#6e655c] tracking-widest mt-1 flex items-center gap-1.5 leading-none">
            <span>THẢO ĐIỀN</span>
            <span className="text-[#c59b27] font-bold">•</span>
            <span>EST. 2013</span>
          </span>
        </div>
      </div>
    );
  }

  // 2. THEME: NORDIC (Scandinavian Brutalist Minimalist Studio)
  if (theme === 'nordic') {
    return (
      <div className={`flex items-center gap-2.5 group shrink-0 ${className}`}>
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-oswald font-bold text-sm tracking-wider shrink-0 border border-black">
          D
        </div>
        <div className="flex items-center gap-2">
          <span className="font-oswald text-xl font-bold tracking-[0.15em] uppercase text-black leading-none">
            DOLPHY
          </span>
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-black text-white leading-none">
            / 2013
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" title="Swiss Signal Red" />
        </div>
      </div>
    );
  }

  // 3. THEME: ROASTERY (Cyber Lounge / Night)
  if (theme === 'roastery') {
    return (
      <div className={`flex items-center gap-2.5 group shrink-0 ${className}`}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.35)] flex items-center justify-center p-1 text-cyan-400 shrink-0">
          <DolphinWaveIcon size={22} waveColor="#06b6d4" dolphinColor="#ec4899" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-base sm:text-lg font-black tracking-widest text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] leading-none">
            DOLPHY
          </span>
          <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 border border-pink-500/40 shadow-[0_0_8px_rgba(236,72,153,0.3)] leading-none">
            CYBER
          </span>
        </div>
      </div>
    );
  }

  // 4. THEME: SUNSET (Saigon Sunset Horizon)
  if (theme === 'sunset') {
    return (
      <div className={`flex items-center gap-2.5 group shrink-0 ${className}`}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-rose-500 to-[#ff7a00] p-1 text-white shadow-md shadow-rose-500/25 flex items-center justify-center shrink-0">
          <DolphinWaveIcon size={22} waveColor="#ffffff" dolphinColor="#ffffff" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-oswald text-lg sm:text-xl font-bold tracking-wider text-rose-600 leading-none">
            DOLPHY
          </span>
          <span className="font-oswald text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] text-white shadow-2xs leading-none">
            CAFÉ
          </span>
        </div>
      </div>
    );
  }

  // 5. THEME: DARK (Classic Midnight Slate)
  if (theme === 'dark') {
    return (
      <div className={`flex items-center shrink-0 ${className}`}>
        <img
          src="/images/dolphy-logo-dark.png"
          alt="Dolphy Café Classic Dark"
          className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain"
        />
      </div>
    );
  }

  // 6. THEME: OCEAN (Coastal Heritage 2013 - Default)
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <img
        src="/images/dolphy-logo.png"
        alt="Dolphy Café Ocean Heritage"
        className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain"
      />
    </div>
  );
};
