import React, { useState } from 'react';
import { Shield, FileText, HelpCircle, Truck, CheckCircle2 } from 'lucide-react';

export const Policies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'guide'>('guide');

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAEDCD]">
            Thông Tin Minh Bạch
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Chính Sách & Điều Khoản Sử Dụng
          </h1>
          <p className="text-xs sm:text-sm text-[#D8CFCE]">
            Cam kết bảo vệ quyền lợi người tiêu dùng và bảo mật thông tin tuyệt đối tại Dolphy Café.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-[#E8E0D5]">
          <div className="flex gap-2 p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E8E0D5]">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'bg-[#4A2C11] text-[#FAEDCD] shadow'
                  : 'text-[#7A6E68] hover:text-[#24140A]'
              }`}
            >
              <HelpCircle size={16} />
              <span>Hướng Dẫn Mua Hàng</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'privacy'
                  ? 'bg-[#4A2C11] text-[#FAEDCD] shadow'
                  : 'text-[#7A6E68] hover:text-[#24140A]'
              }`}
            >
              <Shield size={16} />
              <span>Chính Sách Bảo Mật</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'terms'
                  ? 'bg-[#4A2C11] text-[#FAEDCD] shadow'
                  : 'text-[#7A6E68] hover:text-[#24140A]'
              }`}
            >
              <FileText size={16} />
              <span>Điều Khoản Dịch Vụ</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl border border-[#E8E0D5] p-6 sm:p-10 shadow-sm leading-relaxed text-sm text-gray-700 space-y-6">
          
          {activeTab === 'guide' && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#24140A]">
                Hướng Dẫn Đặt Hàng & Thanh Toán Trực Tuyến
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5]">
                  <strong className="text-[#4A2C11] block mb-1">Bước 1: Chọn sản phẩm cần mua</strong>
                  <p>Truy cập mục "Cà Phê & Quà Tặng", chọn dòng sản phẩm yêu thích (Arabica, Robusta, Espresso hoặc Combo Hộp Quà Tết).</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5]">
                  <strong className="text-[#4A2C11] block mb-1">Bước 2: Chọn mức độ xay & thêm vào giỏ</strong>
                  <p>Nếu mua cà phê túi, hãy chọn độ mịn mong muốn: Hạt nguyên chất, Xay pha phin, Xay Cold Brew hoặc Xay máy Espresso. Nhấn "Thêm Vào Giỏ".</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5]">
                  <strong className="text-[#4A2C11] block mb-1">Bước 3: Nhập thông tin & chọn phương thức thanh toán</strong>
                  <p>Mở giỏ hàng, điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng. Lựa chọn Chuyển khoản quét mã VietQR tự động hoặc Thanh toán khi nhận hàng (COD).</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5]">
                  <strong className="text-[#4A2C11] block mb-1">Bước 4: Nhận hàng & thưởng thức</strong>
                  <p>Đơn hàng sẽ được nhân viên Dolphy xác nhận và giao tận tay bạn trong vòng 24 - 48 giờ làm việc.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#24140A]">
                Chính Sách Bảo Mật Thông Tin Khách Hàng
              </h2>
              <p>
                Cám ơn quý khách đã quan tâm và truy cập vào website Dolphycafe.com. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của Quý khách theo đúng quy định pháp luật.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">1. Mục đích thu thập thông tin cá nhân</h3>
              <p>
                Thông tin cá nhân (Họ tên, Số điện thoại, Email, Địa chỉ) chỉ được sử dụng cho mục đích: xử lý đơn đặt hàng, xác nhận đăng ký khóa học tại Dolphy Academy, liên hệ phỏng vấn tuyển dụng và gửi thông báo ưu đãi dành riêng cho quý khách.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">2. Cam kết không chia sẻ dữ liệu cho bên thứ ba</h3>
              <p>
                Chúng tôi tuyệt đối không bán, chia sẻ hoặc trao đổi thông tin cá nhân của khách hàng thu thập trên website cho một bên thứ ba nào khác vì mục đích thương mại.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">3. Bảo mật thanh toán</h3>
              <p>
                Mọi giao dịch chuyển khoản đều được thực hiện trực tiếp qua cổng bảo mật ngân hàng thông qua chuẩn VietQR mã hóa, không lưu trữ thông tin thẻ tài chính của khách hàng trên hệ thống máy chủ.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#24140A]">
                Điều Khoản & Điều Kiện Sử Dụng Website
              </h2>
              <p>
                Khi quý khách truy cập vào trang web Dolphycafe.com có nghĩa là quý khách đồng ý với các điều khoản được quy định dưới đây.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">1. Bản quyền thương hiệu và nội dung</h3>
              <p>
                Mọi nội dung, hình ảnh, video, logo "DOLPHY CAFÉ", slogan "Happiness in a cup" và giáo trình khóa học Dolphy Academy đều thuộc quyền sở hữu trí tuệ của Công ty TNHH Cá Heo Xanh (Dolphy Café). Nghiêm cấm sao chép vì mục đích thương mại trái phép.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">2. Chính sách đổi trả sản phẩm cà phê</h3>
              <p>
                Quý khách được quyền đổi trả miễn phí trong vòng 03 ngày kể từ ngày nhận hàng nếu sản phẩm bị rách bao bì, giao sai phân loại xay hoặc phát hiện lỗi chất lượng do nhà sản xuất.
              </p>
              <h3 className="font-bold text-base text-[#4A2C11]">3. Chính sách bảo lưu khóa học Academy</h3>
              <p>
                Học viên đã đăng ký và nộp học phí hoặc tiền cọc tại Dolphy Academy nếu có lý do chính đáng được quyền bảo lưu khóa học hoặc đổi sang ca học khác trong vòng tối đa 03 tháng hoàn toàn miễn phí.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
