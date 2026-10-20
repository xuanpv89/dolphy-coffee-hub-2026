import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, RefreshCw } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';

export const OfflineIndicator: React.FC = () => {
  const { isOnline, language } = useDolphy();
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    if (isOnline) {
      // Trigger temporary green banner when reconnecting
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [isOnline]);

  if (isOnline && !showReconnected) {
    return null;
  }

  return (
    <aside
      aria-label="Network status banner"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100vw-2rem)] px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-top-3 flex items-center justify-between text-xs font-medium"
      style={{
        backgroundColor: isOnline ? 'rgba(16, 185, 129, 0.95)' : 'rgba(234, 88, 12, 0.95)',
        color: '#ffffff'
      }}
    >
      <div className="flex items-center gap-2">
        {isOnline ? (
          <Wifi size={14} className="shrink-0" />
        ) : (
          <WifiOff size={14} className="shrink-0 animate-pulse" />
        )}
        <span>
          {isOnline
            ? (language === 'vi' ? 'Đã kết nối Internet trở lại!' : 'Internet connection restored!')
            : (language === 'vi' ? 'Chế độ ngoại tuyến (Offline) • Đã lưu sẵn menu & chi nhánh' : 'Offline mode • Cached menu & branches available')}
        </span>
      </div>

      {!isOnline && (
        <button
          onClick={() => window.location.reload()}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          title="Thử kết nối lại"
        >
          <RefreshCw size={12} />
        </button>
      )}
    </aside>
  );
};
