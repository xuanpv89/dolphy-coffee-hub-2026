import React, { useState } from 'react';
import { Shield, FileText, HelpCircle } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const Policies: React.FC = () => {
  const { t, language } = useDolphy();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'guide'>('guide');

  return (
    <div className="space-y-12 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold shadow">
            <Shield size={13} />
            <span>{t('policies.tag')}</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white leading-tight">
            {t('policies.title')}
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            {t('policies.desc')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-gray-200 dark:border-slate-800">
          <div className="flex gap-2 p-1.5 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'bg-[#2076bd] text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white'
              }`}
            >
              <HelpCircle size={16} />
              <span>{language === 'vi' ? 'Hướng Dẫn Mua Hàng' : 'Shopping Guide'}</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'privacy'
                  ? 'bg-[#2076bd] text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white'
              }`}
            >
              <Shield size={16} />
              <span>{language === 'vi' ? 'Chính Sách Bảo Mật' : 'Privacy Policy'}</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'terms'
                  ? 'bg-[#2076bd] text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#2076bd] dark:hover:text-white'
              }`}
            >
              <FileText size={16} />
              <span>{language === 'vi' ? 'Điều Khoản Dịch Vụ' : 'Terms of Service'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm leading-relaxed text-sm text-gray-700 dark:text-gray-200 space-y-6">
          
          {activeTab === 'guide' && (
            <div className="space-y-4">
              <h2 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Hướng Dẫn Đặt Hàng & Thanh Toán Trực Tuyến' : 'Online Ordering & Payment Guide'}
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <strong className="text-[#2076bd] dark:text-[#3ba0e6] block mb-1">
                    {language === 'vi' ? 'Bước 1: Chọn sản phẩm cần mua' : 'Step 1: Choose Products'}
                  </strong>
                  <p>{language === 'vi' ? 'Truy cập mục "Cửa Hàng", chọn dòng sản phẩm yêu thích (Arabica, Robusta, Espresso hoặc Combo Hộp Quà Tết).' : 'Visit the Shop section, browse your desired coffee beans (Arabica, Robusta, Espresso) or gift sets.'}</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <strong className="text-[#2076bd] dark:text-[#3ba0e6] block mb-1">
                    {language === 'vi' ? 'Bước 2: Chọn mức độ xay & thêm vào giỏ' : 'Step 2: Select Grind Profile & Add to Cart'}
                  </strong>
                  <p>{language === 'vi' ? 'Nếu mua cà phê túi, hãy chọn độ mịn mong muốn: Hạt nguyên chất, Xay pha phin, Xay Cold Brew hoặc Xay máy Espresso. Nhấn "Chọn Mua".' : 'Select grind specification: Whole bean, traditional phin grind, cold brew coarse, or espresso machine fine. Click Add to Cart.'}</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <strong className="text-[#2076bd] dark:text-[#3ba0e6] block mb-1">
                    {language === 'vi' ? 'Bước 3: Nhập thông tin & chọn phương thức thanh toán' : 'Step 3: Enter Delivery Details & Payment'}
                  </strong>
                  <p>{language === 'vi' ? 'Mở giỏ hàng, điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng. Lựa chọn Chuyển khoản quét mã VietQR tự động hoặc Thanh toán khi nhận hàng (COD).' : 'Open your cart drawer, complete recipient info and choose instant VietQR bank transfer or Cash on Delivery (COD).'}</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <strong className="text-[#2076bd] dark:text-[#3ba0e6] block mb-1">
                    {language === 'vi' ? 'Bước 4: Nhận hàng & thưởng thức' : 'Step 4: Receive & Enjoy Fresh Coffee'}
                  </strong>
                  <p>{language === 'vi' ? 'Đơn hàng sẽ được nhân viên Dolphy xác nhận và giao tận tay bạn trong vòng 24 - 48 giờ làm việc.' : 'Orders are verified and delivered safely to your doorstep within 24 to 48 business hours.'}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Chính Sách Bảo Mật Thông Tin Khách Hàng' : 'Customer Privacy & Data Protection Policy'}
              </h2>
              <p>
                {language === 'vi' 
                  ? 'Cám ơn quý khách đã quan tâm và truy cập vào website Dolphycafe.com. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của Quý khách theo đúng quy định pháp luật.'
                  : 'Thank you for visiting Dolphycafe.com. We strictly protect customer personal privacy and data in compliance with Vietnamese consumer protection laws.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '1. Mục đích thu thập thông tin cá nhân' : '1. Purposes of Personal Data Processing'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Thông tin cá nhân (Họ tên, Số điện thoại, Email, Địa chỉ) chỉ được sử dụng cho mục đích: xử lý đơn đặt hàng, xác nhận đăng ký khóa học tại Dolphy Academy, liên hệ phỏng vấn tuyển dụng và gửi thông báo ưu đãi dành riêng cho quý khách.'
                  : 'Personal data is strictly used for order processing, Dolphy Academy enrollment confirmations, employment interviews, and customer service.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '2. Cam kết không chia sẻ dữ liệu cho bên thứ ba' : '2. Zero Third-Party Commercial Data Sharing'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Chúng tôi tuyệt đối không bán, chia sẻ hoặc trao đổi thông tin cá nhân của khách hàng thu thập trên website cho một bên thứ ba nào khác vì mục đích thương mại.'
                  : 'We never sell, rent, or trade customer contact information to any third parties for commercial solicitation.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '3. Bảo mật thanh toán' : '3. Payment Data Security'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Mọi giao dịch chuyển khoản đều được thực hiện trực tiếp qua cổng bảo mật ngân hàng thông qua chuẩn VietQR mã hóa, không lưu trữ thông tin thẻ tài chính của khách hàng trên hệ thống máy chủ.'
                  : 'All transfers occur securely via standard encrypted VietQR protocols through domestic banks without storing private payment card details.'}
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Điều Khoản & Điều Kiện Sử Dụng Website' : 'Terms & Conditions of Service'}
              </h2>
              <p>
                {language === 'vi'
                  ? 'Khi quý khách truy cập vào trang web Dolphycafe.com có nghĩa là quý khách đồng ý với các điều khoản được quy định dưới đây.'
                  : 'By browsing and using Dolphycafe.com, you agree to comply with our published terms.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '1. Bản quyền thương hiệu và nội dung' : '1. Intellectual Property & Brand Assets'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Mọi nội dung, hình ảnh, video, logo "DOLPHY CAFÉ", slogan "Happiness in a cup" và giáo trình khóa học Dolphy Academy đều thuộc quyền sở hữu trí tuệ của Công ty TNHH Cá Heo Xanh (Dolphy Café). Nghiêm cấm sao chép vì mục đích thương mại trái phép.'
                  : 'All imagery, media, recipes, curriculum, "DOLPHY CAFÉ" trademarks, and "Happiness in a cup" slogans are proprietary intellectual property of Blue Dolphin Company Limited.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '2. Chính sách đổi trả sản phẩm cà phê' : '2. Product Return & Refund Policy'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Quý khách được quyền đổi trả miễn phí trong vòng 03 ngày kể từ ngày nhận hàng nếu sản phẩm bị rách bao bì, giao sai phân loại xay hoặc phát hiện lỗi chất lượng do nhà sản xuất.'
                  : 'Eligible for return and replacement within 3 days of delivery if package seals are compromised or incorrect grind specifications were fulfilled.'}
              </p>
              <h3 className="font-bold text-base text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? '3. Chính sách bảo lưu khóa học Academy' : '3. Academy Course Rescheduling Policy'}
              </h3>
              <p>
                {language === 'vi'
                  ? 'Học viên đã đăng ký và nộp học phí hoặc tiền cọc tại Dolphy Academy nếu có lý do chính đáng được quyền bảo lưu khóa học hoặc đổi sang ca học khác trong vòng tối đa 03 tháng hoàn toàn miễn phí.'
                  : 'Enrolled students can reschedule or defer cohort attendance for up to 3 months free of charge with advance notice.'}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
