import React, { useState } from 'react';
import { Shield, FileText, HelpCircle, CheckCircle2, ChevronRight, Terminal, BookOpen, Sparkles } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const Policies: React.FC = () => {
  const { t, language, theme } = useDolphy();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'guide'>('guide');

  return (
    <div className={`space-y-12 pb-20 transition-colors ${
      theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a]' :
      theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white' :
      theme === 'sunset' ? 'bg-[#fff8f5] text-[#271a17]' :
      theme === 'roastery' ? 'bg-[#070a12] text-slate-100' :
      'bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9]'
    }`}>
      
      {/* 1. Header Banner */}
      <section className={`reveal-on-scroll border-b text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden ${
        theme === 'vintage' ? 'bg-[#1b4d3e] border-[#2d6a4f]' :
        theme === 'nordic' ? 'bg-zinc-950 border-zinc-800' :
        theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 border-rose-300' :
        theme === 'roastery' ? 'bg-[#070a12] border-cyan-500/30' :
        theme === 'dark' ? 'bg-[#0f172a] border-slate-800' :
        'bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-transparent dark:border-slate-800'
      }`}>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs uppercase tracking-widest font-extrabold shadow ${
            theme === 'nordic' ? 'rounded-none bg-white text-black font-mono border border-black' :
            theme === 'sunset' ? 'rounded-full bg-white text-rose-600 font-oswald shadow-md' :
            theme === 'vintage' ? 'rounded-md bg-[#c05621] text-white font-serif' :
            theme === 'roastery' ? 'rounded-md bg-cyan-950 text-cyan-400 font-mono border border-cyan-500/40' :
            'rounded bg-[#FAEA28] text-slate-950 font-oswald'
          }`}>
            <Shield size={13} />
            <span>{t('policies.tag')}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white leading-tight ${
            theme === 'vintage' ? 'font-serif' :
            theme === 'nordic' ? 'font-mono' :
            'font-oswald'
          }`}>
            {t('policies.title')}
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('policies.desc')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Navigation Tabs */}
        <div className="flex justify-center reveal-on-scroll">
          <div className={`flex flex-wrap justify-center gap-2 p-1.5 transition-all ${
            theme === 'nordic' ? 'rounded-none bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
            theme === 'sunset' ? 'rounded-full bg-white border border-rose-200 shadow-lg shadow-rose-500/10 p-2' :
            theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border-2 border-[#e6ded1] font-serif' :
            theme === 'roastery' ? 'rounded-xl bg-[#0b1324] border border-cyan-500/40 font-mono shadow-[0_0_20px_rgba(2,132,199,0.2)]' :
            'bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700'
          }`}>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                theme === 'nordic' ? 'rounded-none font-mono uppercase tracking-wider' :
                theme === 'sunset' ? 'rounded-full font-oswald uppercase tracking-wider' :
                theme === 'vintage' ? 'rounded font-serif' :
                theme === 'roastery' ? 'rounded-lg font-mono uppercase tracking-wider' :
                'rounded-xl font-oswald uppercase tracking-wider'
              } ${
                activeTab === 'guide'
                  ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                     theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                     theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                     theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                     theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                     'bg-[#2076bd] text-white shadow')
                  : (theme === 'vintage' ? 'text-[#6e655c] hover:text-[#1b4d3e]' :
                     theme === 'roastery' ? 'text-slate-400 hover:text-cyan-300' :
                     theme === 'sunset' ? 'text-[#7d6560] hover:text-rose-600' :
                     theme === 'nordic' ? 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white' :
                     'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white')
              }`}
            >
              <HelpCircle size={16} />
              <span>{language === 'vi' ? 'Hướng Dẫn Mua Hàng' : 'Shopping Guide'}</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                theme === 'nordic' ? 'rounded-none font-mono uppercase tracking-wider' :
                theme === 'sunset' ? 'rounded-full font-oswald uppercase tracking-wider' :
                theme === 'vintage' ? 'rounded font-serif' :
                theme === 'roastery' ? 'rounded-lg font-mono uppercase tracking-wider' :
                'rounded-xl font-oswald uppercase tracking-wider'
              } ${
                activeTab === 'privacy'
                  ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                     theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                     theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                     theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                     theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                     'bg-[#2076bd] text-white shadow')
                  : (theme === 'vintage' ? 'text-[#6e655c] hover:text-[#1b4d3e]' :
                     theme === 'roastery' ? 'text-slate-400 hover:text-cyan-300' :
                     theme === 'sunset' ? 'text-[#7d6560] hover:text-rose-600' :
                     theme === 'nordic' ? 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white' :
                     'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white')
              }`}
            >
              <Shield size={16} />
              <span>{language === 'vi' ? 'Chính Sách Bảo Mật' : 'Privacy Policy'}</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                theme === 'nordic' ? 'rounded-none font-mono uppercase tracking-wider' :
                theme === 'sunset' ? 'rounded-full font-oswald uppercase tracking-wider' :
                theme === 'vintage' ? 'rounded font-serif' :
                theme === 'roastery' ? 'rounded-lg font-mono uppercase tracking-wider' :
                'rounded-xl font-oswald uppercase tracking-wider'
              } ${
                activeTab === 'terms'
                  ? (theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black shadow' :
                     theme === 'sunset' ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md' :
                     theme === 'vintage' ? 'bg-[#1b4d3e] text-white shadow' :
                     theme === 'roastery' ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                     theme === 'dark' ? 'bg-[#FAEA28] text-slate-950 shadow' :
                     'bg-[#2076bd] text-white shadow')
                  : (theme === 'vintage' ? 'text-[#6e655c] hover:text-[#1b4d3e]' :
                     theme === 'roastery' ? 'text-slate-400 hover:text-cyan-300' :
                     theme === 'sunset' ? 'text-[#7d6560] hover:text-rose-600' :
                     theme === 'nordic' ? 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white' :
                     'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white')
              }`}
            >
              <FileText size={16} />
              <span>{language === 'vi' ? 'Điều Khoản Dịch Vụ' : 'Terms of Service'}</span>
            </button>
          </div>
        </div>

        {/* 3. Tab Content - Fully Adapted Architectural Structure */}
        <div className={`p-6 sm:p-10 shadow-sm leading-relaxed text-sm space-y-6 reveal-on-scroll ${
          theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 font-mono text-black dark:text-zinc-200' :
          theme === 'sunset' ? 'rounded-3xl border border-rose-100 bg-white shadow-xl shadow-rose-500/5 text-[#271a17]' :
          theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif text-[#221e1a]' :
          theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono text-slate-200 shadow-[0_0_30px_rgba(2,132,199,0.15)]' :
          'bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-200'
        }`}>
          
          {activeTab === 'guide' && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Hướng Dẫn Đặt Hàng & Thanh Toán Trực Tuyến' : 'Online Ordering & Payment Guide'}
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div className={`p-5 transition-all ${
                  theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900' :
                  theme === 'sunset' ? 'rounded-2xl bg-rose-50/60 border border-rose-100' :
                  theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-slate-900/80 border border-cyan-500/30' :
                  'rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700'
                }`}>
                  <strong className={`block mb-1 text-sm ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Bước 1: Chọn sản phẩm cần mua' : 'Step 1: Choose Products'}
                  </strong>
                  <p>{language === 'vi' ? 'Truy cập mục "Cửa Hàng", chọn dòng sản phẩm yêu thích (Arabica, Robusta, Espresso hoặc Combo Hộp Quà Tết).' : 'Visit the Shop section, browse your desired coffee beans (Arabica, Robusta, Espresso) or gift sets.'}</p>
                </div>

                <div className={`p-5 transition-all ${
                  theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900' :
                  theme === 'sunset' ? 'rounded-2xl bg-rose-50/60 border border-rose-100' :
                  theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-slate-900/80 border border-cyan-500/30' :
                  'rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700'
                }`}>
                  <strong className={`block mb-1 text-sm ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Bước 2: Chọn mức độ xay & thêm vào giỏ' : 'Step 2: Select Grind Profile & Add to Cart'}
                  </strong>
                  <p>{language === 'vi' ? 'Nếu mua cà phê túi, hãy chọn độ mịn mong muốn: Hạt nguyên chất, Xay pha phin, Xay Cold Brew hoặc Xay máy Espresso. Nhấn "Chọn Mua".' : 'Select grind specification: Whole bean, traditional phin grind, cold brew coarse, or espresso machine fine. Click Add to Cart.'}</p>
                </div>

                <div className={`p-5 transition-all ${
                  theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900' :
                  theme === 'sunset' ? 'rounded-2xl bg-rose-50/60 border border-rose-100' :
                  theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-slate-900/80 border border-cyan-500/30' :
                  'rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700'
                }`}>
                  <strong className={`block mb-1 text-sm ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Bước 3: Nhập thông tin & chọn phương thức thanh toán' : 'Step 3: Enter Delivery Details & Payment'}
                  </strong>
                  <p>{language === 'vi' ? 'Mở giỏ hàng, điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng. Lựa chọn Chuyển khoản quét mã VietQR tự động hoặc Thanh toán khi nhận hàng (COD).' : 'Open your cart drawer, complete recipient info and choose instant VietQR bank transfer or Cash on Delivery (COD).'}</p>
                </div>

                <div className={`p-5 transition-all ${
                  theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900' :
                  theme === 'sunset' ? 'rounded-2xl bg-rose-50/60 border border-rose-100' :
                  theme === 'vintage' ? 'rounded-lg bg-[#f2ebe0] border border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-slate-900/80 border border-cyan-500/30' :
                  'rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700'
                }`}>
                  <strong className={`block mb-1 text-sm ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? 'Bước 4: Nhận hàng & thưởng thức' : 'Step 4: Receive & Enjoy Fresh Coffee'}
                  </strong>
                  <p>{language === 'vi' ? 'Đơn hàng sẽ được nhân viên Dolphy xác nhận và giao tận tay bạn trong vòng 24 - 48 giờ làm việc.' : 'Orders are verified and delivered safely to your doorstep within 24 to 48 business hours.'}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-5">
              <h2 className={`text-2xl font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Chính Sách Bảo Mật Thông Tin Khách Hàng' : 'Customer Privacy & Data Protection Policy'}
              </h2>
              <p>
                {language === 'vi' 
                  ? 'Cám ơn quý khách đã quan tâm và truy cập vào website Dolphycafe.com. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của Quý khách theo đúng quy định pháp luật.'
                  : 'Thank you for visiting Dolphycafe.com. We strictly protect customer personal privacy and data in compliance with Vietnamese consumer protection laws.'}
              </p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '1. Mục đích thu thập thông tin cá nhân' : '1. Purposes of Personal Data Processing'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Thông tin cá nhân (Họ tên, Số điện thoại, Email, Địa chỉ) chỉ được sử dụng cho mục đích: xử lý đơn đặt hàng, xác nhận đăng ký khóa học tại Dolphy Academy, liên hệ phỏng vấn tuyển dụng và gửi thông báo ưu đãi dành riêng cho quý khách.'
                      : 'Personal data is strictly used for order processing, Dolphy Academy enrollment confirmations, employment interviews, and customer service.'}
                  </p>
                </div>

                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '2. Cam kết không chia sẻ dữ liệu cho bên thứ ba' : '2. Zero Third-Party Commercial Data Sharing'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Chúng tôi tuyệt đối không bán, chia sẻ hoặc trao đổi thông tin cá nhân của khách hàng thu thập trên website cho một bên thứ ba nào khác vì mục đích thương mại.'
                      : 'We never sell, rent, or trade customer contact information to any third parties for commercial solicitation.'}
                  </p>
                </div>

                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '3. Bảo mật thanh toán' : '3. Payment Data Security'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Mọi giao dịch chuyển khoản đều được thực hiện trực tiếp qua cổng bảo mật ngân hàng thông qua chuẩn VietQR mã hóa, không lưu trữ thông tin thẻ tài chính của khách hàng trên hệ thống máy chủ.'
                      : 'All transfers occur securely via standard encrypted VietQR protocols through domestic banks without storing private payment card details.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-5">
              <h2 className={`text-2xl font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#3ba0e6]'
              }`}>
                {language === 'vi' ? 'Điều Khoản & Điều Kiện Sử Dụng Website' : 'Terms & Conditions of Service'}
              </h2>
              <p>
                {language === 'vi'
                  ? 'Khi quý khách truy cập vào trang web Dolphycafe.com có nghĩa là quý khách đồng ý với các điều khoản được quy định dưới đây.'
                  : 'By browsing and using Dolphycafe.com, you agree to comply with our published terms.'}
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '1. Bản quyền thương hiệu và nội dung' : '1. Intellectual Property & Brand Assets'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Mọi nội dung, hình ảnh, video, logo "DOLPHY CAFÉ", slogan "Happiness in a cup" và giáo trình khóa học Dolphy Academy đều thuộc quyền sở hữu trí tuệ của Công ty TNHH Cá Heo Xanh (Dolphy Café). Nghiêm cấm sao chép vì mục đích thương mại trái phép.'
                      : 'All imagery, media, recipes, curriculum, "DOLPHY CAFÉ" trademarks, and "Happiness in a cup" slogans are proprietary intellectual property of Blue Dolphin Company Limited.'}
                  </p>
                </div>

                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '2. Chính sách đổi trả sản phẩm cà phê' : '2. Product Return & Refund Policy'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Quý khách được quyền đổi trả miễn phí trong vòng 03 ngày kể từ ngày nhận hàng nếu sản phẩm bị rách bao bì, giao sai phân loại xay hoặc phát hiện lỗi chất lượng do nhà sản xuất.'
                      : 'Eligible for return and replacement within 3 days of delivery if package seals are compromised or incorrect grind specifications were fulfilled.'}
                  </p>
                </div>

                <div>
                  <h3 className={`font-bold text-base mb-1 ${
                    theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                    theme === 'sunset' ? 'font-oswald text-rose-600' :
                    theme === 'roastery' ? 'font-mono text-cyan-300' :
                    theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                    theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#3ba0e6]'
                  }`}>
                    {language === 'vi' ? '3. Chính sách bảo lưu khóa học Academy' : '3. Academy Course Rescheduling Policy'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Học viên đã đăng ký và nộp học phí hoặc tiền cọc tại Dolphy Academy nếu có lý do chính đáng được quyền bảo lưu khóa học hoặc đổi sang ca học khác trong vòng tối đa 03 tháng hoàn toàn miễn phí.'
                      : 'Enrolled students can reschedule or defer cohort attendance for up to 3 months free of charge with advance notice.'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
