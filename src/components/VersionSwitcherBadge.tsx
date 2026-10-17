import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowLeft, Coffee } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const VersionSwitcherBadge: React.FC = () => {
  const location = useLocation();
  const { language } = useDolphy();
  const isV2 = location.pathname.startsWith('/v2');
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 animate-bounce-subtle select-none">
      {isV2 ? (
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1410] text-[#D8C7B5] hover:text-white hover:bg-black border border-[#3A2D23] shadow-2xl text-xs font-oswald uppercase tracking-wider font-semibold transition-all hover:scale-105"
          title="Quay lại giao diện gốc tiêu chuẩn (V1)"
        >
          <ArrowLeft size={13} className="text-amber-400" />
          <span>{language === 'vi' ? 'Về Bản Tiêu Chuẩn (V1)' : 'Back to Classic (V1)'}</span>
        </Link>
      ) : (
        <Link
          to="/v2"
          className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#1A1410] via-[#2A1E17] to-[#1A1410] text-amber-300 hover:text-white border border-amber-400/40 shadow-2xl text-xs font-oswald uppercase tracking-wider font-bold transition-all hover:scale-105 ring-4 ring-black/10 group"
          title="Khám phá concept giao diện Cà Phê Nghệ Thuật (Bản V2)"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <Coffee size={14} className="text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>{language === 'vi' ? 'Giao Diện Cafe Mới (Bản V2)' : 'New Cafe Experience (V2)'}</span>
          <ArrowRight size={13} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
};
