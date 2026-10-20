import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare, CheckCircle2 } from 'lucide-react';
import { useDolphy } from '../../context/DolphyContext';

export const PwaInstallPrompt: React.FC = () => {
  const { isInstallable, isStandalone, isIOS, installPwa, language } = useDolphy();
  const [isDismissed, setIsDismissed] = useState<boolean>(true);
  const [showIosGuide, setShowIosGuide] = useState<boolean>(false);

  useEffect(() => {
    // Check if dismissed in the last 3 days
    try {
      const dismissedAt = localStorage.getItem('dolphy_pwa_dismissed_at');
      if (dismissedAt) {
        const diff = Date.now() - parseInt(dismissedAt, 10);
        if (diff < 3 * 24 * 60 * 60 * 1000) {
          setIsDismissed(true);
          return;
        }
      }
    } catch {}

    // Show prompt if installable or if iOS user on non-standalone browser
    if (!isStandalone) {
      if (isInstallable) {
        const timer = setTimeout(() => setIsDismissed(false), 2500);
        return () => clearTimeout(timer);
      } else if (isIOS) {
        // Show after 4s for iOS Safari users
        const timer = setTimeout(() => setIsDismissed(false), 4000);
        return () => clearTimeout(timer);
      }
    }
  }, [isInstallable, isStandalone, isIOS]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setShowIosGuide(false);
    try {
      localStorage.setItem('dolphy_pwa_dismissed_at', Date.now().toString());
    } catch {}
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const installed = await installPwa();
      if (installed) {
        setIsDismissed(true);
      }
    } else if (isIOS) {
      setShowIosGuide(true);
    }
  };

  if (isStandalone || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-96 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 dark:bg-[#131d36]/95 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl p-4 text-gray-900 dark:text-white space-y-3">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white p-1 border-2 border-[#FAEA28] shadow-md flex items-center justify-center shrink-0">
              <img src="/favicon.png" alt="Dolphy Café" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-oswald text-base font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6] leading-none">
                  DOLPHY CAFÉ APP
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-[#FAEA28] text-slate-950 font-oswald">
                  PWA
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                {language === 'vi'
                  ? 'Cài đặt lên màn hình chính để dùng ngoại tuyến (Offline) & đặt nhanh'
                  : 'Add to Home Screen for offline access and faster ordering'}
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-lg transition-colors"
            title="Đóng"
          >
            <X size={16} />
          </button>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 dark:text-gray-300 py-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>{language === 'vi' ? 'Mở siêu nhanh 0.1s' : 'Instant startup'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>{language === 'vi' ? 'Xem menu khi mất mạng' : 'Works offline'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>{language === 'vi' ? 'Không tốn dung lượng' : 'Ultra lightweight'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>{language === 'vi' ? 'Tự động cập nhật' : 'Auto updates'}</span>
          </div>
        </div>

        {/* iOS Instruction Panel */}
        {showIosGuide && (
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-900/60 text-xs space-y-2 text-gray-800 dark:text-gray-200">
            <div className="font-bold text-[#2076bd] dark:text-[#3ba0e6] flex items-center gap-1.5">
              <Smartphone size={14} />
              <span>{language === 'vi' ? 'Cách cài đặt trên iOS (iPhone / iPad):' : 'How to install on iOS:'}</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-gray-600 dark:text-gray-300">
              <li>
                {language === 'vi' ? 'Nhấn nút ' : 'Tap the '}
                <strong className="inline-flex items-center gap-0.5 px-1 rounded bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-white">
                  <Share2 size={10} /> {language === 'vi' ? 'Chia sẻ (Share)' : 'Share'}
                </strong>
                {language === 'vi' ? ' ở thanh dưới Safari' : ' button in Safari'}
              </li>
              <li>
                {language === 'vi' ? 'Cuộn xuống và chọn ' : 'Scroll and select '}
                <strong className="inline-flex items-center gap-0.5 px-1 rounded bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-white">
                  <PlusSquare size={10} /> {language === 'vi' ? 'Thêm vào MH chính' : 'Add to Home Screen'}
                </strong>
              </li>
              <li>
                {language === 'vi' ? 'Nhấn ' : 'Tap '}
                <strong className="text-[#2076bd]">{language === 'vi' ? 'Thêm (Add)' : 'Add'}</strong>
                {language === 'vi' ? ' ở góc phải trên cùng' : ' at the top right'}
              </li>
            </ol>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleInstallClick}
            className="flex-1 py-2 px-3 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs uppercase font-bold tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Download size={14} />
            <span>
              {isIOS && !isInstallable
                ? (language === 'vi' ? 'Xem Hướng Dẫn Cài Đặt' : 'How To Install')
                : (language === 'vi' ? 'Cài Đặt Ngay' : 'Install App')}
            </span>
          </button>

          <button
            onClick={handleDismiss}
            className="py-2 px-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs font-semibold transition-colors"
          >
            {language === 'vi' ? 'Để sau' : 'Later'}
          </button>
        </div>

      </div>
    </div>
  );
};
