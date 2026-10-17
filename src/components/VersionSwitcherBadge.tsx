import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowLeft, Coffee } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const VersionSwitcherBadge: React.FC = () => {
  const location = useLocation();
  const { language } = useDolphy();
  const isV2 = location.pathname.startsWith('/v2');
  const isAdmin = location.pathname.startsWith('/admin');

  // Hide the V2 button on homepage and V1 pages per user request ("ẩn cái nút v2 ở trang chủ đi, tao sẽ mở khi cần")
  if (isAdmin || !isV2) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 animate-bounce-subtle select-none">
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1410] text-[#D8C7B5] hover:text-white hover:bg-black border border-[#3A2D23] shadow-2xl text-xs font-oswald uppercase tracking-wider font-semibold transition-all hover:scale-105"
        title="Quay lại giao diện gốc tiêu chuẩn (V1)"
      >
        <ArrowLeft size={13} className="text-[#FAEA28]" />
        <span>{language === 'vi' ? 'Về Bản Tiêu Chuẩn (V1)' : 'Back to Classic (V1)'}</span>
      </Link>
    </div>
  );
};
