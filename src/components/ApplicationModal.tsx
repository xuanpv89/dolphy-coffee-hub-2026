import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Heart, Send } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { JobApplication } from '../types';

export const ApplicationModal: React.FC = () => {
  const { applyingJob, setApplyingJob, submitApplication, t, language, theme } = useDolphy();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    branchPreference: 'Khu vực Quận 2 (Thảo Điền / An Phú)',
    shiftPreference: 'Linh hoạt (Part-time / Full-time)',
    experienceNotes: ''
  });
  const [createdApp, setCreatedApp] = useState<JobApplication | null>(null);

  if (!applyingJob) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert(language === 'vi' ? 'Vui lòng điền Họ tên và Số điện thoại.' : 'Please enter your Full Name and Phone Number.');
      return;
    }

    const app = submitApplication({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      position: applyingJob.title,
      branchPreference: formData.branchPreference,
      shiftPreference: formData.shiftPreference,
      experienceNotes: formData.experienceNotes
    });

    setCreatedApp(app);
  };

  const handleClose = () => {
    setCreatedApp(null);
    setApplyingJob(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-lg shadow-2xl overflow-hidden my-6 transition-colors ${
        theme === 'nordic' ? 'bg-white dark:bg-zinc-950 text-black dark:text-white rounded-none border-2 border-zinc-900 dark:border-zinc-200 font-mono' :
        theme === 'vintage' ? 'bg-[#faf6f0] text-[#221e1a] rounded-lg border-2 border-[#e6ded1] font-serif' :
        theme === 'roastery' ? 'bg-[#070a12] text-white rounded-xl border border-cyan-500/40 font-mono shadow-[0_0_30px_rgba(2,132,199,0.3)]' :
        theme === 'sunset' ? 'bg-white text-[#271a17] rounded-3xl border border-rose-200 shadow-2xl' :
        theme === 'dark' ? 'bg-[#0F172A] text-slate-100 rounded-2xl border border-slate-700' :
        'bg-white dark:bg-[#1e293b] text-slate-800 dark:text-slate-100 rounded-3xl border border-blue-100 dark:border-slate-700'
      }`}>
        
        {/* Header */}
        <div className={`px-6 py-4 flex items-center justify-between text-white transition-colors ${
          theme === 'nordic' ? 'bg-black dark:bg-zinc-900 border-b-2 border-zinc-900 dark:border-zinc-200 font-mono' :
          theme === 'vintage' ? 'bg-[#1b4d3e] border-b-2 border-[#2d6a4f] text-[#faf6f0] font-serif' :
          theme === 'roastery' ? 'bg-[#0b1324] border-b border-cyan-500/40 text-cyan-300 font-mono shadow-[0_0_20px_rgba(2,132,199,0.2)]' :
          theme === 'sunset' ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 font-oswald' :
          theme === 'dark' ? 'bg-[#0F172A] border-b border-slate-700 text-[#FAEA28] font-oswald' :
          'bg-[#2076bd] font-oswald'
        }`}>
          <div className="flex items-center gap-2.5">
            <Briefcase className={
              theme === 'vintage' ? 'text-[#c05621]' :
              theme === 'roastery' ? 'text-cyan-400' :
              theme === 'sunset' ? 'text-amber-300' :
              theme === 'nordic' ? 'text-white' :
              'text-[#FAEA28]'
            } size={22} />
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider">
                {createdApp 
                  ? (language === 'vi' ? 'NỘP ĐƠN THÀNH CÔNG!' : 'APPLICATION SUCCESSFUL!')
                  : t('app_modal.title')}
              </h3>
              <p className="text-xs opacity-80">{applyingJob.title}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-slate-800 dark:text-slate-100">
          {createdApp ? (
            <div className="text-center py-6 space-y-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                theme === 'nordic' ? 'bg-black text-white dark:bg-white dark:text-black rounded-none' :
                theme === 'vintage' ? 'bg-[#f2ebe0] text-[#1b4d3e]' :
                theme === 'roastery' ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' :
                theme === 'sunset' ? 'bg-rose-50 text-rose-600' :
                theme === 'dark' ? 'bg-slate-800 text-[#FAEA28]' :
                'bg-blue-50 dark:bg-blue-900/30 text-[#2076bd] dark:text-[#38bdf8]'
              }`}>
                <CheckCircle2 size={36} />
              </div>
              <h4 className={`font-oswald text-xl font-bold uppercase ${
                theme === 'vintage' ? 'font-serif text-[#1b4d3e]' :
                theme === 'roastery' ? 'font-oswald text-cyan-300' :
                theme === 'sunset' ? 'font-oswald text-rose-600' :
                theme === 'nordic' ? 'font-mono text-black dark:text-white' :
                theme === 'dark' ? 'font-oswald text-[#FAEA28]' :
                'font-oswald text-[#2076bd] dark:text-[#38bdf8]'
              }`}>
                {language === 'vi' ? 'Hồ Sơ Của Bạn Đã Được Chuyển Đến HR Dolphy!' : 'Your Application Has Reached Dolphy HR!'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                {language === 'vi' 
                  ? <>Cảm ơn bạn đã mong muốn trở thành một chú cá heo đồng hành cùng Dolphy. Phòng Nhân sự sẽ liên hệ mời phỏng vấn trong 2-3 ngày làm việc tới số điện thoại <strong>{createdApp.phone}</strong>.</>
                  : <>Thank you for wanting to join the Dolphy dolphin crew. HR will contact you for an interview within 2-3 business days at <strong>{createdApp.phone}</strong>.</>}
              </p>
              <div className={`inline-block px-4 py-1.5 rounded-full font-mono font-bold text-xs border ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' :
                theme === 'vintage' ? 'rounded bg-[#f2ebe0] text-[#1b4d3e] border-[#e6ded1]' :
                theme === 'roastery' ? 'rounded-lg bg-cyan-950 text-cyan-400 border-cyan-500/40' :
                theme === 'sunset' ? 'rounded-full bg-rose-50 text-rose-600 border-rose-200' :
                theme === 'dark' ? 'rounded-md bg-slate-800 text-[#FAEA28] border-slate-700' :
                'bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#38bdf8] border-blue-200 dark:border-slate-700'
              }`}>
                {language === 'vi' ? 'Mã Hồ Sơ Ứng Viên:' : 'Application ID:'} {createdApp.id}
              </div>
              <div className="pt-4">
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
                  {language === 'vi' ? 'Xác Nhận & Đóng' : 'Confirm & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
                theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-mono' :
                theme === 'vintage' ? 'rounded bg-[#f2ebe0] border-[#e6ded1] text-[#1b4d3e] font-serif' :
                theme === 'roastery' ? 'rounded-lg bg-slate-900 border-cyan-500/30 text-cyan-400 font-mono' :
                theme === 'sunset' ? 'rounded-2xl bg-rose-50 border-rose-200 text-rose-700 font-oswald' :
                theme === 'dark' ? 'rounded-lg bg-slate-800/80 border-slate-700 text-[#FAEA28] font-oswald' :
                'bg-blue-50/60 dark:bg-slate-800/60 border-blue-100 dark:border-slate-700 text-[#2076bd] dark:text-[#38bdf8]'
              }`}>
                <Heart size={16} className="shrink-0" />
                <span>
                  {language === 'vi'
                    ? <>Mức thu nhập: <strong>{applyingJob.salary}</strong>. Không cần kinh nghiệm (được đào tạo bài bản).</>
                    : <>Compensation: <strong>{applyingJob.salary}</strong>. No experience required (full training provided).</>}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                  {t('app_modal.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={language === 'vi' ? 'Ví dụ: Hoàng Tuấn Anh' : 'E.g., John Smith'}
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
                    {t('app_modal.phone')}
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
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {t('app_modal.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="candidate@gmail.com"
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
                  {t('app_modal.branch')}
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
                  <option value="Khu vực Quận 2 (Thảo Điền / An Phú)">{language === 'vi' ? 'Khu vực Quận 2 (Thảo Điền / An Phú)' : 'District 2 (Thao Dien / An Phu)'}</option>
                  <option value="Khu vực Quận 7 (Phú Mỹ Hưng)">{language === 'vi' ? 'Khu vực Quận 7 (Phú Mỹ Hưng)' : 'District 7 (Phu My Hung)'}</option>
                  <option value="Khu vực Quận Bình Thạnh (Phạm Viết Chánh)">{language === 'vi' ? 'Khu vực Quận Bình Thạnh (Phạm Viết Chánh)' : 'Binh Thanh District (Pham Viet Chanh)'}</option>
                  <option value="Bất kỳ chi nhánh nào thuận tiện">{language === 'vi' ? 'Bất kỳ chi nhánh nào thuận tiện' : 'Any convenient branch'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                  {t('app_modal.shift')}
                </label>
                <select
                  value={formData.shiftPreference}
                  onChange={(e) => setFormData({ ...formData, shiftPreference: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-sm focus:outline-none border ${
                    theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                    theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                    theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                    theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                    theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                    'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-[#2076bd]'
                  }`}
                >
                  <option value="Ca sáng (06:30 - 14:30)">{language === 'vi' ? 'Ca sáng (06:30 - 14:30)' : 'Morning shift (06:30 - 14:30)'}</option>
                  <option value="Ca chiều / tối (14:30 - 22:30)">{language === 'vi' ? 'Ca chiều / tối (14:30 - 22:30)' : 'Afternoon / Evening shift (14:30 - 22:30)'}</option>
                  <option value="Part-time linh hoạt 4-5 tiếng/ngày">{language === 'vi' ? 'Part-time linh hoạt 4-5 tiếng/ngày' : 'Flexible Part-time 4-5 hrs/day'}</option>
                  <option value="Full-time cố định">{language === 'vi' ? 'Full-time cố định' : 'Full-time fixed'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                  {t('app_modal.intro')}
                </label>
                <textarea
                  rows={3}
                  value={formData.experienceNotes}
                  onChange={(e) => setFormData({ ...formData, experienceNotes: e.target.value })}
                  placeholder={language === 'vi' ? 'Ví dụ: Đang là sinh viên năm 2, tiếng Anh giao tiếp tốt, yêu thích văn hóa cà phê...' : 'E.g., 2nd-year student, conversational English, passionate about specialty coffee...'}
                  className={`w-full px-3.5 py-2 text-sm focus:outline-none border ${
                    theme === 'nordic' ? 'rounded-none border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono' :
                    theme === 'vintage' ? 'rounded border-[#e6ded1] bg-white text-[#221e1a] font-serif focus:border-[#1b4d3e]' :
                    theme === 'roastery' ? 'rounded-lg border-cyan-500/40 bg-slate-900 text-white font-mono focus:border-cyan-400' :
                    theme === 'sunset' ? 'rounded-2xl border-rose-200 bg-white text-[#271a17] focus:border-rose-400' :
                    theme === 'dark' ? 'rounded-lg border-slate-700 bg-slate-900 text-white focus:border-[#FAEA28]' :
                    'rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-[#2076bd]'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 text-xs uppercase tracking-wider font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    theme === 'nordic' ? 'rounded-none bg-black text-white dark:bg-white dark:text-black font-mono font-bold hover:bg-[#ff3b00] hover:text-white' :
                    theme === 'vintage' ? 'rounded bg-[#1b4d3e] hover:bg-[#c05621] text-white font-serif' :
                    theme === 'roastery' ? 'rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                    theme === 'sunset' ? 'rounded-full bg-gradient-to-r from-rose-500 to-[#ff7a00] hover:from-rose-600 hover:to-[#ea580c] text-white font-oswald shadow-md hover:scale-105' :
                    theme === 'dark' ? 'rounded-lg bg-[#FAEA28] hover:bg-amber-300 text-slate-950 font-oswald font-bold' :
                    'rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald'
                  }`}
                >
                  <Send size={16} />
                  <span>{t('app_modal.submit')}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
