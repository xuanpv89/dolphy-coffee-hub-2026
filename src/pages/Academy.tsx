import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Clock, MapPin, Award, Users, Sparkles, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, PhoneCall, QrCode } from 'lucide-react';
import { coursesData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { Course } from '../types';

export const Academy: React.FC = () => {
  const { setEnrollingCourse } = useDolphy();
  const [activeCourseId, setActiveCourseId] = useState<string>('barista-thuc-chien');
  const [openSyllabusSession, setOpenSyllabusSession] = useState<number | null>(1);

  const currentCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

  const faqs = [
    {
      q: 'Tôi chưa biết gì về cà phê hay pha chế thì có học được không?',
      a: 'Hoàn toàn được! Khóa Barista Thực Chiến tại Dolphy Academy được thiết kế từ con số 0. Giảng viên sẽ hướng dẫn từ cách phân biệt hạt, nén cà phê, đến vận hành máy pha công nghiệp và đánh sữa theo phương pháp "cầm tay chỉ việc".'
    },
    {
      q: 'Cam kết việc làm sau khóa học của Dolphy hoạt động như thế nào?',
      a: 'Sau khi hoàn thành 7 buổi học và vượt qua bài thi thực hành cuối khóa, bạn sẽ được ưu tiên tuyển dụng ngay vào hệ thống 10 chi nhánh Dolphy Café tại Quận 2, Quận 7 hoặc Bình Thạnh với mức lương 25.000 – 35.000 đ/giờ. Nếu bạn muốn làm việc tại các chuỗi khác hoặc đi du học, Dolphy sẽ cấp chứng chỉ và thư giới thiệu (Letter of Recommendation).'
    },
    {
      q: 'Dolphy có ràng buộc độc quyền học viên sau khi tốt nghiệp không?',
      a: 'Tuyệt đối KHÔNG. Bạn hoàn toàn tự do lựa chọn nơi làm việc, mở quán riêng hoặc làm việc tại bất kỳ thương hiệu nào. Dolphy không có bất kỳ điều khoản ràng buộc độc quyền nào.'
    },
    {
      q: 'Một lớp học có bao nhiêu học viên?',
      a: 'Dolphy Academy cam kết duy trì quy mô lớp nhỏ tối đa chỉ từ 4 đến 6 học viên để đảm bảo mỗi học viên đều có tối đa thời gian đứng máy pha trực tiếp trong suốt buổi học.'
    },
    {
      q: 'Chính sách đặt cọc và hoàn phí như thế nào?',
      a: 'Bạn chỉ cần đặt cọc 2.000.000đ để giữ chỗ lớp học qua hệ thống VietQR tự động. Số học phí còn lại có thể thanh toán vào buổi học đầu tiên. Nếu có việc bận đột xuất, bạn được dời lịch sang khóa tiếp theo hoàn toàn miễn phí.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-white text-[#222222]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="max-w-5xl mx-auto space-y-5 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#f09c05] text-white text-xs font-oswald uppercase tracking-widest font-bold">
            <Sparkles size={14} />
            <span>CHIẾN LƯỢC MỞ RỘNG 2026 • DOLPHY ACADEMY</span>
          </div>

          <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight">
            HỌC VIỆN ĐÀO TẠO BARISTA THỰC CHIẾN DOLPHY
          </h1>

          <p className="text-sm sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Học nghề pha chế chuẩn quốc tế ngay tại quầy bar chuỗi cửa hàng thực tế. Cam kết cơ hội việc làm ngay sau khóa học với mức thu nhập từ 25.000 – 35.000 đ/giờ.
          </p>

          {/* Quick Perks */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f09c05]" /> Thực hành 100% tại quầy bar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f09c05]" /> Ưu tiên tuyển dụng chuỗi 10 quán
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f09c05]" /> Không ràng buộc độc quyền
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f09c05]" /> Lớp nhỏ 4-6 học viên
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className="dolphy-btn dolphy-btn-amber px-8 py-3.5 rounded text-sm font-semibold shadow-xl"
            >
              <GraduationCap size={18} className="mr-2" />
              <span>ĐĂNG KÝ KHÓA HỌC NGAY (CỌC 2.000.000Đ)</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. COURSE SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-gray-200">
          <div className="flex gap-2 p-1.5 bg-gray-100 rounded-lg">
            {coursesData.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`px-4 sm:px-6 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all ${
                  activeCourseId === c.id
                    ? 'bg-[#2076bd] text-white shadow'
                    : 'text-gray-600 hover:text-[#222222]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE COURSE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#f09c05] text-white text-[10px] font-oswald uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                  {currentCourse.badge}
                </span>
                <span className="text-xs text-gray-500 font-oswald">Thời lượng: {currentCourse.duration}</span>
              </div>
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd]">
                {currentCourse.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {currentCourse.subtitle}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg space-y-3">
              <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd]">
                ĐIỂM NỔI BẬT CỦA KHÓA HỌC
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                {(currentCourse.usps || currentCourse.outcomes || []).map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#2076bd] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus breakdown */}
            <div className="space-y-4">
              <h3 className="font-oswald text-xl font-bold uppercase text-[#222222]">
                GIÁO TRÌNH CHI TIẾT CÁC BUỔI HỌC
              </h3>
              
              <div className="space-y-3">
                {currentCourse.syllabus.map((session) => {
                  const isOpen = openSyllabusSession === session.session;
                  return (
                    <div
                      key={session.session}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setOpenSyllabusSession(isOpen ? null : session.session)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded bg-[#2076bd] text-white text-xs font-oswald font-bold flex items-center justify-center">
                            #{session.session}
                          </span>
                          <div>
                            <h4 className="font-oswald text-sm font-bold text-[#222222] uppercase">
                              {session.title}
                            </h4>
                            <span className="text-[11px] text-gray-400 font-oswald">{currentCourse.hoursPerSession}h / buổi</span>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 border-t border-gray-100 bg-gray-50/50 space-y-2 text-xs text-gray-600">
                          <p className="font-medium text-gray-700">{session.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2">
                            {(session.practicalSkills || []).map((skill, si) => (
                              <li key={si}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing & Deposit Card (Sidebar) */}
          <div className="lg:col-span-4">
            <div className="bg-white border-2 border-[#2076bd] rounded-xl p-6 shadow-xl sticky top-24 space-y-6">
              
              <div className="text-center border-b border-gray-100 pb-4">
                <span className="text-xs text-gray-400 uppercase font-oswald">Học phí trọn gói</span>
                <div className="font-oswald text-3xl font-bold text-[#2076bd] my-1">
                  {(currentCourse.discountPrice || currentCourse.price).toLocaleString('vi-VN')} VNĐ
                </div>
                <div className="text-xs text-[#f09c05] font-semibold font-oswald">
                  TIỀN ĐẶT CỌC GIỮ CHỖ: {(currentCourse.depositAmount || 2000000).toLocaleString('vi-VN')} VNĐ
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#2076bd]" />
                  <span>Thời lượng: <strong>{currentCourse.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={15} className="text-[#2076bd]" />
                  <span>Quy mô: <strong>Tối đa 4 - 6 học viên/lớp</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-[#2076bd]" />
                  <span>Địa điểm: <strong>Chuỗi Dolphy Thảo Điền (Quận 2)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-[#2076bd]" />
                  <span>Chứng chỉ: <strong>Dolphy Academy Barista Certificate</strong></span>
                </div>
              </div>

              <div className="p-3 rounded bg-blue-50 border border-blue-100 text-xs text-blue-900 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <Sparkles size={14} className="text-[#f09c05]" />
                  Ưu đãi đăng ký sớm:
                </p>
                <p>Giảm ngay 1.000.000đ cho 10 học viên đầu tiên trong tháng.</p>
              </div>

              <button
                onClick={() => setEnrollingCourse(currentCourse)}
                className="w-full py-3.5 rounded bg-[#f09c05] hover:bg-[#2076bd] text-white font-oswald text-sm uppercase tracking-wider font-semibold transition-colors shadow flex items-center justify-center gap-2"
              >
                <QrCode size={16} />
                <span>ĐĂNG KÝ & TẠO MÃ VIETQR CỌC</span>
              </button>

              <div className="text-center text-[11px] text-gray-400">
                Hỗ trợ tư vấn trực tiếp: <a href="tel:0938084985" className="text-[#2076bd] font-semibold">{brandInfo.hotline}</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQS */}
      <section className="bg-[#f8f9fa] py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="section-title">CÂU HỎI THƯỜNG GẶP (FAQ)</h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Giải đáp thắc mắc về khóa học Barista Thực Chiến tại Dolphy Academy.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm space-y-2">
                <h4 className="font-oswald text-base font-bold text-[#2076bd] flex items-center gap-2">
                  <span>Q{idx + 1}:</span> {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
