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
      a: 'Sau khi hoàn thành 6 buổi học và vượt qua bài thi thực hành cuối khóa, bạn sẽ được ưu tiên tuyển dụng ngay vào hệ thống 10 chi nhánh Dolphy Café tại Quận 2, Quận 7 hoặc Bình Thạnh với mức lương 25.000 – 35.000 đ/giờ. Nếu bạn muốn làm việc tại các chuỗi khác hoặc đi du học, Dolphy sẽ cấp chứng chỉ và thư giới thiệu (Letter of Recommendation).'
    },
    {
      q: 'Dolphy có ràng buộc độc quyền học viên sau khi tốt nghiệp không?',
      a: 'Tuyệt đối KHÔNG. Bạn hoàn toàn tự do lựa chọn nơi làm việc, mở quán riêng hoặc làm việc tại bất kỳ thương hiệu nào. Dolphy không có bất kỳ điều khoản ràng buộc độc quyền nào.'
    },
    {
      q: 'Một lớp học có bao nhiêu học viên?',
      a: 'Dolphy Academy cam kết duy trì quy mô lớp nhỏ tối đa chỉ từ 4 đến 6 học viên để đảm bảo mỗi học viên đều có tối đa thời gian đứng máy pha trực tiếp trong suốt 3.5 giờ của mỗi buổi học.'
    },
    {
      q: 'Chính sách đặt cọc và hoàn phí như thế nào?',
      a: 'Bạn chỉ cần đặt cọc 2.000.000đ để giữ chỗ lớp học. Số học phí còn lại có thể thanh toán vào buổi học đầu tiên. Nếu có việc bận đột xuất, bạn được dời lịch sang khóa tiếp theo hoàn toàn miễn phí.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#1A0E07] via-[#24140A] to-[#4A2C11] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4A373]/30 text-xs sm:text-sm text-[#FAEDCD]">
            <Sparkles size={16} className="text-[#E76F51]" />
            <span>Chiến Lược Đào Tạo Mới 2026 • Dolphy Academy</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
            Học Viện Đào Tạo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] via-[#FAEDCD] to-[#D4A373]">
              Barista Thực Chiến Dolphy
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#D8CFCE] max-w-3xl mx-auto leading-relaxed">
            Học nghề pha chế chuẩn quốc tế ngay tại quầy bar chuỗi cửa hàng thực tế. Cam kết cơ hội việc làm ngay sau khóa học với mức thu nhập từ 25.000 – 35.000 đ/giờ.
          </p>

          {/* Quick Perks */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#FAEDCD]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#27AE60]" /> Thực hành 100% tại quầy bar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#27AE60]" /> Ưu tiên tuyển dụng chuỗi 10 quán
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#27AE60]" /> Không ràng buộc độc quyền
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#27AE60]" /> Lớp nhỏ 4-6 học viên
            </span>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] via-[#E9C496] to-[#C48B55] text-[#24140A] font-bold text-base shadow-xl hover:shadow-[#D4A373]/40 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <GraduationCap size={20} />
              <span>Đăng Ký Khóa Học Ngay (Ưu đãi 7.000.000₫)</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. COURSE SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-[#E8E0D5]">
          <div className="flex gap-2 p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E8E0D5]">
            {coursesData.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourseId === c.id
                    ? 'bg-[#24140A] text-[#FAEDCD] shadow-md'
                    : 'text-[#7A6E68] hover:text-[#24140A]'
                }`}
              >
                {c.title.split('Dolphy')[0] || c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE COURSE OVERVIEW & PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E0D5] p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E76F51] text-white">
                {currentCourse.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#24140A] mt-2">
                {currentCourse.title}
              </h2>
              <p className="text-sm sm:text-base text-[#7A6E68] mt-2 leading-relaxed">
                {currentCourse.subtitle}
              </p>
            </div>

            {/* USPs */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display text-base font-bold text-[#4A2C11]">
                Điểm Khác Biệt Độc Quyền (USP):
              </h3>
              <div className="space-y-2">
                {currentCourse.usps.map((usp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#27AE60] shrink-0 mt-0.5" />
                    <span>{usp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display text-base font-bold text-[#4A2C11]">
                Khóa Học Này Dành Cho Ai?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentCourse.targetAudience.map((aud, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8E0D5] text-xs text-gray-700">
                    • {aud}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF7F2] to-[#FFF] p-6 sm:p-8 rounded-2xl border-2 border-[#D4A373]/40 shadow-xl space-y-6">
            
            <div className="space-y-2 pb-4 border-b border-[#E8E0D5]">
              <div className="text-xs text-gray-500 flex items-center justify-between">
                <span>Học phí niêm yết:</span>
                <span className="line-through">{currentCourse.price.toLocaleString('vi-VN')} ₫</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold text-[#4A2C11]">Ưu đãi tháng này:</span>
                <span className="text-3xl font-extrabold text-[#C0392B]">
                  {currentCourse.discountPrice.toLocaleString('vi-VN')} ₫
                </span>
              </div>
              <div className="text-xs text-[#8C5329] font-medium bg-[#FAEDCD]/40 p-2 rounded-lg">
                💡 Bạn chỉ cần <strong>đặt cọc trước {currentCourse.depositAmount.toLocaleString('vi-VN')} ₫</strong> để giữ suất ưu đãi!
              </div>
            </div>

            {/* Course Specs */}
            <div className="space-y-2.5 text-xs text-gray-700">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500">Tổng thời lượng:</span>
                <strong className="text-gray-900">{currentCourse.totalHours} giờ ({currentCourse.sessions} buổi)</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500">Thời lượng mỗi buổi:</span>
                <strong className="text-gray-900">{currentCourse.hoursPerSession} giờ / buổi</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500">Hình thức học:</span>
                <strong className="text-gray-900">Thực hành trực tiếp tại quán</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500">Quy mô lớp:</span>
                <strong className="text-[#E76F51]">Chỉ 4 - 6 học viên / lớp</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Chứng chỉ:</span>
                <strong className="text-gray-900">Chứng nhận Dolphy Academy</strong>
              </div>
            </div>

            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4A2C11] via-[#7A4E27] to-[#8C5329] text-white font-bold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap size={18} />
              <span>Đăng Ký Học & Nhận Ưu Đãi</span>
            </button>

            <div className="text-center text-[11px] text-gray-500">
              Hỗ trợ tư vấn trực tiếp 24/7 qua Hotline: <strong>{brandInfo.hotline}</strong>
            </div>

          </div>

        </div>
      </section>

      {/* 4. DETAILED SYLLABUS BREAKDOWN */}
      <section id="syllabus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
            Khung Đào Tạo Chuẩn
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A]">
            Nội Dung Chi Tiết {currentCourse.sessions} Buổi Học Thực Chiến
          </h2>
          <p className="text-sm text-[#7A6E68] max-w-xl mx-auto">
            Mỗi buổi học đều tập trung vào kỹ năng thao tác thực tế trên máy, loại bỏ lý thuyết sáo rỗng.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {currentCourse.syllabus.map((syl) => {
            const isOpen = openSyllabusSession === syl.session;
            return (
              <div
                key={syl.session}
                className="rounded-2xl border border-[#E8E0D5] bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenSyllabusSession(isOpen ? null : syl.session)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF0E6] text-[#8C5329] font-bold text-xs flex items-center justify-center shrink-0">
                      B{syl.session}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#24140A]">
                      {syl.title}
                    </h3>
                  </div>
                  {isOpen ? <ChevronUp size={20} className="text-[#8C5329]" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-gray-100 space-y-3 bg-[#FAF7F2]/40">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {syl.description}
                    </p>
                    <div>
                      <div className="text-xs font-bold text-[#8C5329] mb-1.5 uppercase tracking-wider">
                        Kỹ năng thực hành cốt lõi:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {syl.practicalSkills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#E8E0D5] text-xs font-medium text-gray-800"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. MARKET COMPARISON TABLE (FROM PLANNING REPORT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E0D5] shadow-lg">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5329]">
              Báo Cáo Nghiên Cứu Thị Trường Barista TP.HCM 2026
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A]">
              So Sánh Lợi Thế Cạnh Tranh Của Dolphy Academy
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#24140A] text-white">
                  <th className="p-3.5 rounded-tl-xl font-bold">Tiêu Chí Đối Sánh</th>
                  <th className="p-3.5 bg-[#4A2C11] text-[#FAEDCD] font-bold">Dolphy Academy</th>
                  <th className="p-3.5 font-bold">Các Trung Tâm Đào Tạo Khác</th>
                  <th className="p-3.5 rounded-tr-xl font-bold">Tự Học / Học Việc Tại Quán</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-900">Môi trường thực hành</td>
                  <td className="p-3.5 bg-[#FAF0E6]/50 font-bold text-[#8C5329]">
                    100% tại quầy bar chuỗi cửa hàng thực tế
                  </td>
                  <td className="p-3.5 text-gray-600">Phòng lab mô phỏng, ít va chạm thực tế</td>
                  <td className="p-3.5 text-gray-600">Làm việc vặt, ít được đứng máy pha chính</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-900">Cam kết việc làm</td>
                  <td className="p-3.5 bg-[#FAF0E6]/50 font-bold text-[#27AE60]">
                    Ưu tiên nhận việc ngay tại 10 chi nhánh Dolphy
                  </td>
                  <td className="p-3.5 text-gray-600">Tự nộp CV xin việc bên ngoài</td>
                  <td className="p-3.5 text-gray-600">Lương thấp, không có lộ trình rõ ràng</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-900">Mức học phí</td>
                  <td className="p-3.5 bg-[#FAF0E6]/50 font-bold text-[#C0392B]">
                    7.000.000 ₫ (Tiết kiệm 20-30%)
                  </td>
                  <td className="p-3.5 text-gray-600">8.000.000 – 12.000.000 ₫</td>
                  <td className="p-3.5 text-gray-600">Miễn phí nhưng mất 6-12 tháng thử việc</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-900">Quy mô lớp</td>
                  <td className="p-3.5 bg-[#FAF0E6]/50 font-bold text-[#8C5329]">
                    Chỉ 4 - 6 học viên / lớp (Kèm sát)
                  </td>
                  <td className="p-3.5 text-gray-600">10 - 15 học viên / lớp (Đông đúc)</td>
                  <td className="p-3.5 text-gray-600">Không có người kèm riêng</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-900">Ràng buộc hợp đồng</td>
                  <td className="p-3.5 bg-[#FAF0E6]/50 font-bold text-[#27AE60]">
                    Không ràng buộc độc quyền
                  </td>
                  <td className="p-3.5 text-gray-600">Không ràng buộc</td>
                  <td className="p-3.5 text-gray-600">Bị ký cam kết làm 1-2 năm lương thấp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TRAINER TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
            Đội Ngũ Giảng Dạy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#24140A]">
            Học Cùng Những Master Trainer Thực Chiến
          </h2>
          <p className="text-sm text-[#7A6E68] max-w-xl mx-auto">
            Những người trực tiếp điều hành chất lượng đồ uống tại chuỗi Dolphy Café, giàu kinh nghiệm và tận tâm truyền nghề.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6 shadow-sm flex gap-5 items-center">
            <img
              src="/images/image1.jpg"
              alt="Trainer Dolphy"
              className="w-24 h-24 rounded-2xl object-cover bg-gray-100 shrink-0"
            />
            <div>
              <h3 className="font-display text-lg font-bold text-[#24140A]">Trưởng Bộ Phận Đào Tạo (Lead Trainer)</h3>
              <p className="text-xs text-[#8C5329] font-semibold mt-0.5">8+ Năm Kinh Nghiệm F&B • SCA Certified</p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Đã đào tạo trực tiếp hơn 500 Barista chuyên nghiệp tại TP.HCM. Chuyên sâu về cân chỉnh Dial-in máy pha và kỹ thuật tạo bọt sữa lụa bóng.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6 shadow-sm flex gap-5 items-center">
            <img
              src="/images/image2.jpg"
              alt="Trainer Dolphy"
              className="w-24 h-24 rounded-2xl object-cover bg-gray-100 shrink-0"
            />
            <div>
              <h3 className="font-display text-lg font-bold text-[#24140A]">Chuyên Gia Latte Art & Sensory</h3>
              <p className="text-xs text-[#8C5329] font-semibold mt-0.5">Top Barista Championship • 6 Năm Tại Dolphy</p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Đam mê nghệ thuật rót tạo hình bọt sữa và phương pháp pha chế ủ lạnh Cold Brew, gìn giữ phong cách dịch vụ "Happiness in a cup".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5329]">
            Giải Đáp Thắc Mắc
          </span>
          <h2 className="font-display text-3xl font-bold text-[#24140A]">
            Câu Hỏi Thường Gặp Về Khóa Học
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm space-y-2">
              <h3 className="font-display text-base font-bold text-[#4A2C11] flex items-start gap-2">
                <span className="text-[#8C5329]">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM ENROLLMENT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Bắt Đầu Hành Trình Barista Chuyên Nghiệp Cùng Dolphy
          </h2>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-2xl mx-auto">
            Số lượng học viên mỗi lớp giới hạn tối đa 6 bạn để đảm bảo chất lượng đứng máy. Đăng ký ngay hôm nay để nhận ưu đãi học phí 7.000.000đ (chỉ cọc 2.000.000đ).
          </p>
          <div className="pt-2">
            <button
              onClick={() => setEnrollingCourse(currentCourse)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] to-[#FAEDCD] text-[#24140A] font-bold text-base shadow-xl hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <GraduationCap size={20} />
              <span>Đăng Ký Khóa Học Barista 2026</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
