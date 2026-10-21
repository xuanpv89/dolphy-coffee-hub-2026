import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, GraduationCap, QrCode, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Course, StudentRegistration } from '../types';
import { coursesData } from '../data/dolphyData';

export const CourseRegisterModal: React.FC = () => {
  const { enrollingCourse, setEnrollingCourse, submitRegistration, t, language, theme } = useDolphy();

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
      <div className={`relative w-full max-w-2xl shadow-2xl overflow-hidden my-6 transition-colors ${
        theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
        theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-lg border-2 border-[#e6ded1] font-serif' :
        theme === 'roastery' ? 'bg-[#070a12] text-white rounded-xl border border-cyan-500/40 font-mono shadow-[0_0_30px_rgba(2,132,199,0.3)]' :
        theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
        theme === 'dark' ? 'bg-[#0F172A] rounded-2xl border border-slate-700 text-white' :
        'bg-white dark:bg-[#1e293b] rounded-3xl border border-blue-100 dark:border-slate-700'
      }`}>
        
        {/* Header */}
        <div className={`px-6 py-4 flex items-center justify-between text-white transition-colors ${
          theme === 'nordic' ? 'bg-black dark:bg-zinc-900 border-b-2 border-zinc-900 dark:border-zinc-200 font-mono' :
          theme === 'vintage' ? 'bg-[#1b4d3e] border-b-2 border-[#2d6a4f] text-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'bg-[#0b1324] border-b border-cyan-500/40 text-cyan-300 font-mono shadow-[0_0_20px_rgba(2,132,199,0.2)]' :
          theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 font-oswald' :
          theme === 'dark' ? 'bg-[#0F172A] border-b border-slate-700 text-[#FAEA28] font-oswald' :
          'bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] font-oswald'
        }`}>
          <div className="flex items-center gap-2.5">
            <GraduationCap className={
              theme === 'vintage' ? 'text-[#c05621]' :
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'sunset' ? 'text-amber-300' :
              theme === 'nordic' ? 'text-white' :
              'text-[#FAEA28]'
            } size={24} />
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                {createdReg 
                  ? (language === 'vi' ? 'ĐĂNG KÝ THÀNH CÔNG!' : 'REGISTRATION SUCCESSFUL!')
                  : t('course_modal.title')}
              </h3>
              <p className="text-xs opacity-80">
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
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-inner ${
                theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black rounded-none' :
                theme === 'vintage' ? 'bg-[#f2ebe0] text-[#1b4d3e]' :
                theme === 'roastery' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                theme === 'sunset' ? 'bg-rose-50 text-rose-600' :
                theme === 'dark' ? 'bg-slate-800 text-[#FAEA28]' :
                'bg-blue-50 dark:bg-blue-900/30 text-[#2076bd] dark:text-[#38bdf8]'
              }`}>
                <CheckCircle2 size={36} />
              </div>
              
              <div>
                <h4 className={`font-oswald text-2xl font-bold uppercase ${
                  theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                  theme === 'roastery' ? 'text-cyan-300' :
                  theme === 'sunset' ? 'text-rose-600' :
                  theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                  theme === 'dark' ? 'text-[#FAEA28]' :
                  'text-[#2076bd] dark:text-[#38bdf8]'
                }`}>
                  {language === 'vi' ? 'Chúc Mừng Bạn Đã Trở Thành Học Viên!' : 'Congratulations on Enrolling!'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">
                  {language === 'vi' 
                    ? <>Dolphy Academy đã nhận được thông tin ghi danh cho khóa: <strong>{createdReg.courseTitle}</strong>.</>
                    : <>Dolphy Academy has received your enrollment for: <strong>{createdReg.courseTitle}</strong>.</>}
                </p>
                <div className={`mt-3 inline-block px-4 py-1.5 font-mono font-bold text-sm border ${
                  theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' :
                  theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e] border-[#e6ded1]' :
                  theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border-cyan-500/40' :
                  theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 border-rose-200' :
                  theme === 'dark' ? 'rounded-md bg-slate-800 text-[#FAEA28] border-slate-700' :
                  'rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#38bdf8] border-blue-200 dark:border-slate-700'
                }`}>
                  {language === 'vi' ? 'Mã Hồ Sơ Học Viên:' : 'Student ID:'} {createdReg.id}
                </div>
              </div>

              {/* QR Code Transfer */}
              <div className={`p-5 rounded-2xl max-w-sm mx-auto shadow-md space-y-3 ${
                theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 font-mono' :
                theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-white font-serif' :
                theme === 'roastery' ? 'rounded-xl border border-cyan-500/30 bg-[#0b1324] font-mono' :
                theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-white' :
                theme === 'dark' ? 'rounded-xl bg-slate-900 border border-slate-700' :
                'bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-slate-700'
              }`}>
                <div className={`flex items-center justify-center gap-2 font-bold text-sm ${
                  theme === 'vintage' ? 'text-[#1b4d3e]' :
                  theme === 'roastery' ? 'text-cyan-400' :
                  theme === 'sunset' ? 'text-rose-600' :
                  theme === 'nordic' ? 'text-black dark:text-white' :
                  theme === 'dark' ? 'text-[#FAEA28]' :
                  'text-[#2076bd] dark:text-[#38bdf8]'
                }`}>
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
                  <div>{language === 'vi' ? 'Số tiền:' : 'Amount:'} <strong className={`font-bold ${
                    theme === 'vintage' ? 'text-[#1b4d3e]' :
                    theme === 'roastery' ? 'text-cyan-400' :
                    theme === 'sunset' ? 'text-rose-600' :
                    theme === 'dark' ? 'text-[#FAEA28]' :
                    'text-[#2076bd] dark:text-[#38bdf8]'
                  }`}>{createdReg.amount.toLocaleString('vi-VN')} ₫</strong></div>
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
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white hover:bg-zinc-800 font-mono' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono shadow-[0_0_15px_rgba(6,182,212,0.4)]' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-oswald shadow-md' :
                    theme === 'dark' ? 'rounded-lg bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald' :
                    'bg-[#2076bd] text-white hover:bg-[#165b94]'
                  }`}
                >
                  {language === 'vi' ? 'Hoàn Tất & Đóng' : 'Finish & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Course Selection Card */}
              <div className={`p-4 rounded-2xl border space-y-2 ${
                theme === 'nordic' ? 'rounded-none border-2 border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-900 font-mono' :
                theme === 'vintage' ? 'rounded-lg border-2 border-[#e6ded1] bg-[#faf6f0] font-serif' :
                theme === 'roastery' ? 'rounded-xl border border-cyan-500/40 bg-[#0b1324] font-mono' :
                theme === 'sunset' ? 'rounded-2xl border border-rose-100 bg-rose-50/50' :
                theme === 'dark' ? 'rounded-xl border border-slate-700 bg-slate-900' :
                'bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700'
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 ${
                      theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono' :
                      theme === 'vintage' ? 'rounded bg-[#c05621] text-white font-serif' :
                      theme === 'roastery' ? 'rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-mono' :
                      theme === 'sunset' ? 'rounded-full bg-rose-500 text-white font-oswald' :
                      'rounded-full bg-[#FAEA28] text-slate-950 font-extrabold'
                    }`}>
                      {selectedCourse.badge || (language === 'vi' ? 'Khóa Đào Tạo' : 'Course')}
                    </span>
                    <h4 className={`font-oswald text-base font-bold uppercase mt-1 ${
                      theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                      theme === 'roastery' ? 'text-cyan-300' :
                      theme === 'sunset' ? 'text-rose-600' :
                      theme === 'nordic' ? 'text-black dark:text-white' :
                      theme === 'dark' ? 'text-[#FAEA28]' :
                      'text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}>
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
                    <span className={`text-lg font-bold ${
                      theme === 'vintage' ? 'text-[#1b4d3e] font-serif' :
                      theme === 'roastery' ? 'text-cyan-400 font-mono' :
                      theme === 'sunset' ? 'text-rose-600 font-oswald' :
                      theme === 'nordic' ? 'text-black dark:text-white font-mono' :
                      theme === 'dark' ? 'text-[#FAEA28]' :
                      'text-[#2076bd] dark:text-[#3ba0e6]'
                    }`}>
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
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-[#2076bd]'
                      }`}
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
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-[#2076bd]'
                      }`}
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
                    className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                      theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                      theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                      'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-[#2076bd]'
                    }`}
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
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-[#2076bd]'
                      }`}
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
                      className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                        theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                        theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                        theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                        theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                        theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                        'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-[#2076bd]'
                      }`}
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
                    className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                      theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                      theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                      theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                      theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                      theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                      'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-[#2076bd]'
                    }`}
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
                    className={`cursor-pointer p-3.5 border transition-all ${
                      theme === 'nordic' ? 'rounded-none' :
                      theme === 'vintage' ? 'rounded-lg' :
                      theme === 'roastery' ? 'rounded-xl' :
                      theme === 'sunset' ? 'rounded-2xl' : 'rounded-xl'
                    } ${
                      formData.paymentOption === 'deposit'
                        ? (theme === 'nordic' ? 'border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 ring-2 ring-black dark:ring-white' :
                           theme === 'vintage' ? 'border-[#1b4d3e] bg-[#f2ebe0] ring-2 ring-[#1b4d3e]' :
                           theme === 'roastery' ? 'border-cyan-400 bg-slate-900 ring-2 ring-cyan-400' :
                           theme === 'sunset' ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-500' :
                           theme === 'dark' ? 'border-[#FAEA28] bg-slate-800 ring-2 ring-[#FAEA28]' :
                           'border-[#2076bd] bg-blue-50/50 dark:bg-blue-900/30 ring-2 ring-[#2076bd]')
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'deposit'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'deposit' })}
                      className={theme === 'dark' ? 'accent-[#FAEA28]' : 'text-[#2076bd] focus:ring-[#2076bd]'}
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-gray-800 dark:text-white">
                        {language === 'vi' ? 'Đặt Cọc Giữ Chỗ (Ưu tiên)' : 'Seat Deposit (Priority)'}
                      </div>
                      <div className={`text-base font-bold mt-0.5 ${
                        theme === 'vintage' ? 'text-[#1b4d3e]' :
                        theme === 'roastery' ? 'text-cyan-400' :
                        theme === 'sunset' ? 'text-rose-600' :
                        theme === 'dark' ? 'text-[#FAEA28]' :
                        'text-[#2076bd] dark:text-[#38bdf8]'
                      }`}>
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
                    className={`cursor-pointer p-3.5 border transition-all ${
                      theme === 'nordic' ? 'rounded-none' :
                      theme === 'vintage' ? 'rounded-lg' :
                      theme === 'roastery' ? 'rounded-xl' :
                      theme === 'sunset' ? 'rounded-2xl' : 'rounded-xl'
                    } ${
                      formData.paymentOption === 'full'
                        ? (theme === 'nordic' ? 'border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 ring-2 ring-black dark:ring-white' :
                           theme === 'vintage' ? 'border-[#1b4d3e] bg-[#f2ebe0] ring-2 ring-[#1b4d3e]' :
                           theme === 'roastery' ? 'border-cyan-400 bg-slate-900 ring-2 ring-cyan-400' :
                           theme === 'sunset' ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-500' :
                           theme === 'dark' ? 'border-[#FAEA28] bg-slate-800 ring-2 ring-[#FAEA28]' :
                           'border-[#2076bd] bg-blue-50/50 dark:bg-blue-900/30 ring-2 ring-[#2076bd]')
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'full'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'full' })}
                      className={theme === 'dark' ? 'accent-[#FAEA28]' : 'text-[#2076bd] focus:ring-[#2076bd]'}
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-gray-800 dark:text-white">
                        {language === 'vi' ? 'Thanh Toán Toàn Bộ Học Phí' : 'Full Tuition Payment'}
                      </div>
                      <div className={`text-base font-bold mt-0.5 ${
                        theme === 'vintage' ? 'text-[#1b4d3e]' :
                        theme === 'roastery' ? 'text-cyan-400' :
                        theme === 'sunset' ? 'text-rose-600' :
                        theme === 'dark' ? 'text-[#FAEA28]' :
                        'text-[#2076bd] dark:text-[#38bdf8]'
                      }`}>
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
                  className={`w-full py-3.5 text-sm uppercase tracking-wider font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono font-bold hover:bg-[#ff3b00] hover:text-white' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white font-oswald shadow-lg shadow-rose-500/25' :
                    theme === 'dark' ? 'rounded-lg bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald font-bold' :
                    'rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald'
                  }`}
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
