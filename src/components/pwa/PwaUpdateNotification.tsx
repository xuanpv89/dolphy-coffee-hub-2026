import React from 'react';
import { RefreshCw } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';

export const PwaUpdateNotification: React.FC = () => {
  const { hasPwaUpdate, applyPwaUpdate, language } = useDolphy();

  if (!hasPwaUpdate) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-4 duration-300">
      <div className="bg-[#0b1626] border border-[#2076bd] text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-[#2076bd] flex items-center justify-center shrink-0">
          <RefreshCw size={15} className="animate-spin text-[#FAEA28]" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-[#FAEA28] font-oswald uppercase">
            {language === 'vi' ? 'Có Bản Cập Nhật Mới!' : 'New Update Available!'}
          </div>
          <div className="text-[11px] text-gray-300">
            {language === 'vi' ? 'Nhấp để áp dụng phiên bản Dolphy mới nhất.' : 'Click to refresh and get the latest version.'}
          </div>
        </div>
        <button
          onClick={applyPwaUpdate}
          className="px-3 py-1.5 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 font-oswald uppercase font-bold text-xs transition-colors shrink-0 shadow-sm"
        >
          {language === 'vi' ? 'Cập Nhật' : 'Update'}
        </button>
      </div>
    </div>
  );
};
