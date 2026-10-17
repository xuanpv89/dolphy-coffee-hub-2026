import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, GraduationCap, QrCode, Calendar, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Course, StudentRegistration } from '../types';
import { coursesData } from '../data/dolphyData';

export const CourseRegisterModal: React.FC = () => {
  const { enrollingCourse, setEnrollingCourse, submitRegistration, t, language } = useDolphy();

  const [selectedCourse, setSelectedCourse] = useState<Course>(enrollingCourse || coursesData[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    branchPreference: '',
    preferredSchedule: '',
    paymentOption: 'deposit' as 'deposit' | 'full',
    notes: ''
  });
  const [createdReg, setCreatedReg] = useState<StudentRegistration | null>(null);

  useEffect(() => {
    if (enrollingCourse) {
      setSelectedCourse(enrollingCourse);
      setFormData(prev => ({
        ...prev,
        branchPreference: enrollingCourse.locations[0] || '',
        preferredSchedule: enrollingCourse.schedule[0] || ''
      }));
    }
  }, [enrollingCourse]);

  if (!enrollingCourse) return null;

  const currentPrice = formData.paymentOption === 'deposit'
    ? selectedCourse.depositAmount
    : selectedCourse.discountPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert(language === 'vi' ? 'Vui lòng điền Họ tên và Số điện thoại để hoàn tất đăng ký.' : 'Please enter your Full Name and Phone Number.');
      return;
    }

    const reg = submitRegistration({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      courseId: selectedCourse.id,
      courseTitle: selectedCourse.title,
      branchPreference: formData.branchPreference || selectedCourse.locations[0],
      preferredSchedule: formData.preferredSchedule || selectedCourse.schedule[0],
      paymentOption: formData.paymentOption,
      amount: currentPrice,
      notes: formData.notes
    });

    setCreatedReg(reg);
  };

  const handleClose = () => {
    setCreatedReg(null);
    setEnrollingCourse(null);
  };

  const qrUrl = `https://api.vietqr.io/image/970422-0938084985-compact2.jpg?amount=${currentPrice}&addInfo=DOLPHY%20ACADEMY%20${formData.phone || 'REG'}&accountName=DOLPHY%20CAFE`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-blue-100 dark:border-slate-700 my-6">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="text-[#FAEA28]" size={24} />
            <div>
              <h3 className="font-oswald text-lg font-bold uppercase tracking-wider">
                {createdReg 
                  ? (language === 'vi' ? 'ĐĂNG KÝ THÀNH CÔNG!' : 'REGISTRATION SUCCESSFUL!')
                  : t('course_modal.title')}
              </h3>
              <p className="text-xs text-blue-100">
                {language === 'vi' ? 'Cam kết đào tạo thực chiến & ưu tiên tuyển dụng' : 'Hands-on practical training & hiring preference'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[82vh] overflow-y-auto text-slate-800 dark:text-slate-100">
          {createdReg ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-[#2076bd] dark:text-[#38bdf8] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              
              <div>
                <h4 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#38bdf8]">
                  {language === 'vi' ? 'Chúc Mừng Bạn Đã Trở Thành Học Viên!' : 'Congratulations on Enrolling!'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">
                  {language === 'vi' 
                    ? <>Dolphy Academy đã nhận được thông tin ghi danh cho khóa: <strong>{createdReg.courseTitle}</strong>.</>
                    : <>Dolphy Academy has received your enrollment for: <strong>{createdReg.courseTitle}</strong>.</>}
                </p>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#38bdf8] font-mono font-bold text-sm border border-blue-200 dark:border-slate-700">
                  {language === 'vi' ? 'Mã Hồ Sơ Học Viên:' : 'Student ID:'} {createdReg.id}
                </div>
              </div>

              {/* QR Code Transfer */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-slate-700 max-w-sm mx-auto shadow-md space-y-3">
                <div className="flex items-center justify-center gap-2 font-bold text-sm text-[#2076bd] dark:text-[#38bdf8]">
                  <QrCode size={18} />
                  <span>
                    {language === 'vi' 
                      ? `Mã Chuyển Khoản ${createdReg.paymentOption === 'deposit' ? 'Đặt Cọc Giữ Chỗ' : 'Toàn Bộ Học Phí'}`
                      : `VietQR Transfer ${createdReg.paymentOption === 'deposit' ? 'Seat Deposit' : 'Full Tuition'}`}
                  </span>
                </div>
                <img
                  src={qrUrl}
                  alt="VietQR Dolphy Academy"
                  className="w-52 h-52 mx-auto rounded-xl border border-gray-200 dark:border-slate-700"
                />
                <div className="text-xs text-gray-700 dark:text-slate-300 space-y-1 text-left bg-gray-50 dark:bg-slate-800/60 p-3 rounded-xl border border-gray-100 dark:border-slate-700">
                  <div>{t('checkout.bank_name')}</div>
                  <div>{t('checkout.bank_acc')}</div>
                  <div>{t('checkout.bank_owner')}</div>
                  <div>{language === 'vi' ? 'Số tiền:' : 'Amount:'} <strong className="text-[#2076bd] dark:text-[#38bdf8] font-bold">{createdReg.amount.toLocaleString('vi-VN')} ₫</strong></div>
                  <div>{language === 'vi' ? 'Nội dung:' : 'Content:'} <strong>{createdReg.id} - {createdReg.phone}</strong></div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-slate-400 italic">
                  {language === 'vi' 
                    ? 'Trainer phụ trách lớp sẽ liên hệ qua điện thoại & Zalo trong 24h để gửi thời khóa biểu và hướng dẫn chuẩn bị dụng cụ.'
                    : 'The class instructor will reach out via phone & Zalo within 24h with the schedule and course prep instructions.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#2076bd] text-white font-bold text-sm hover:bg-[#165b94]"
                >
                  {language === 'vi' ? 'Hoàn Tất & Đóng' : 'Finish & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Course Selection Card */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAEA28] text-slate-950 font-extrabold">
                      {selectedCourse.badge || (language === 'vi' ? 'Khóa Đào Tạo' : 'Course')}
                    </span>
                    <h4 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#38bdf8] mt-1">
                      {selectedCourse.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      {language === 'vi' 
                        ? `Thời lượng: ${selectedCourse.totalHours} giờ (${selectedCourse.sessions} buổi x ${selectedCourse.hoursPerSession}h)`
                        : `Duration: ${selectedCourse.totalHours} hours (${selectedCourse.sessions} sessions x ${selectedCourse.hoursPerSession}h)`}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 dark:text-slate-500 line-through block">
                      {selectedCourse.price.toLocaleString('vi-VN')} ₫
                    </span>
                    <span className="text-lg font-bold text-[#2076bd] dark:text-[#38bdf8]">
                      {selectedCourse.discountPrice.toLocaleString('vi-VN')} ₫
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                      {t('course_modal.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                      {t('course_modal.phone')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="09xx xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {t('course_modal.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                      {t('course_modal.location')}
                    </label>
                    <select
                      value={formData.branchPreference}
                      onChange={(e) => setFormData({ ...formData, branchPreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    >
                      {selectedCourse.locations.map(loc => (
                        <option key={loc} value={loc} className="dark:bg-slate-800 text-slate-800 dark:text-slate-100">{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                      {language === 'vi' ? 'Ca học mong muốn' : 'Preferred Shift'}
                    </label>
                    <select
                      value={formData.preferredSchedule}
                      onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    >
                      {selectedCourse.schedule.map(sch => (
                        <option key={sch} value={sch} className="dark:bg-slate-800 text-slate-800 dark:text-slate-100">{sch}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {t('course_modal.notes')}
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'vi' ? 'Ví dụ: Muốn xin việc ngay tại Dolphy, sắp đi du học...' : 'E.g., planning to study abroad, opening a cafe...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Payment Option: Cọc or Full */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300">
                  {language === 'vi' ? 'Lựa chọn đóng học phí:' : 'Payment Option:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setFormData({ ...formData, paymentOption: 'deposit' })}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      formData.paymentOption === 'deposit'
                        ? 'border-[#2076bd] bg-blue-50/50 dark:bg-blue-900/30 ring-2 ring-[#2076bd]'
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'deposit'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'deposit' })}
                      className="text-[#2076bd] focus:ring-[#2076bd]"
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-gray-800 dark:text-white">
                        {language === 'vi' ? 'Đặt Cọc Giữ Chỗ (Ưu tiên)' : 'Seat Deposit (Priority)'}
                      </div>
                      <div className="text-base font-bold text-[#2076bd] dark:text-[#38bdf8] mt-0.5">
                        {selectedCourse.depositAmount.toLocaleString('vi-VN')} ₫
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
                        {language === 'vi' 
                          ? 'Phần còn lại thanh toán vào buổi khai giảng đầu tiên.' 
                          : 'Remaining balance due on the first class session.'}
                      </div>
                    </div>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentOption: 'full' })}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      formData.paymentOption === 'full'
                        ? 'border-[#2076bd] bg-blue-50/50 dark:bg-blue-900/30 ring-2 ring-[#2076bd]'
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'full'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'full' })}
                      className="text-[#2076bd] focus:ring-[#2076bd]"
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-gray-800 dark:text-white">
                        {language === 'vi' ? 'Thanh Toán Toàn Bộ Học Phí' : 'Full Tuition Payment'}
                      </div>
                      <div className="text-base font-bold text-[#2076bd] dark:text-[#38bdf8] mt-0.5">
                        {selectedCourse.discountPrice.toLocaleString('vi-VN')} ₫
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
                        {language === 'vi' 
                          ? 'Tặng thêm 01 gói cà phê túi Dolphy & áo thun Barista.'
                          : 'Includes 1 bag of Dolphy whole beans & Barista T-shirt.'}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-sm uppercase tracking-wider font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <GraduationCap size={18} />
                  <span>
                    {language === 'vi'
                      ? `XÁC NHẬN ĐĂNG KÝ (${currentPrice.toLocaleString('vi-VN')} VNĐ)`
                      : `CONFIRM REGISTRATION (${currentPrice.toLocaleString('vi-VN')} VND)`}
                  </span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
