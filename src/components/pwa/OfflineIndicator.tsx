import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';

export const OfflineIndicator: React.FC = () => {
  const { isOnline, language } = useDolphy();

  // Khi có mạng bình thường, không hiển thị bất kỳ thông báo nào
  if (isOnline) {
    return null;
  }

  return (
    <aside
      aria-label="Network status banner"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100vw-2rem)] px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-top-3 flex items-center justify-between text-xs font-medium bg-amber-600/95 text-white"
    >
      <div className="flex items-center gap-2">
        <WifiOff size={14} className="shrink-0 animate-pulse" />
        <span>
          {language === 'vi'
            ? 'Chế độ ngoại tuyến (Offline) • Đã lưu sẵn menu & chi nhánh'
            : 'Offline mode • Cached menu & branches available'}
        </span>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="p-1 rounded-full hover:bg-white/20 transition-colors"
        title={language === 'vi' ? 'Thử kết nối lại' : 'Retry connection'}
      >
        <RefreshCw size={12} />
      </button>
    </aside>
  );
};
