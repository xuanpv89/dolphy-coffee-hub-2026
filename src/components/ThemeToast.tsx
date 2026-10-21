import React from 'react';
import { Waves, Moon, Leaf, Square, Sunrise, Sparkles } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Theme } from '../types/theme';

export const ThemeToast: React.FC = () => {
  const { themeToast, theme, themeConfig } = useDolphy();

  if (!themeToast) return null;

  const renderIcon = (id: Theme) => {
    switch (id) {
      case 'ocean':
        return <Waves size={16} className="text-[#2076bd]" />;
      case 'roastery':
        return <Moon size={16} className="text-amber-400" />;
      case 'vintage':
        return <Leaf size={16} className="text-emerald-600" />;
      case 'nordic':
        return <Square size={16} className="text-zinc-900 dark:text-zinc-100" />;
      case 'sunset':
        return <Sunrise size={16} className="text-rose-500" />;
      default:
        return <Sparkles size={16} className="text-amber-400" />;
    }
  };

  return (
    <aside
      aria-label="Theme change notification"
      className="fixed bottom-6 right-6 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20 bg-slate-900/90 text-white max-w-sm">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
          style={{ backgroundColor: `${themeConfig.primaryHex}25` }}
        >
          {renderIcon(theme)}
        </div>
        <div className="min-w-0 pr-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-oswald uppercase tracking-wider text-white">
              {themeToast.name}
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded font-oswald"
              style={{
                backgroundColor: themeConfig.accentHex,
                color: themeConfig.id === 'roastery' || themeConfig.id === 'ocean' ? '#0f172a' : '#ffffff'
              }}
            >
              Theme Active
            </span>
          </div>
          <p className="text-[11px] text-gray-300 truncate leading-tight mt-0.5">
            {themeToast.desc}
          </p>
        </div>
      </div>
    </aside>
  );
};
