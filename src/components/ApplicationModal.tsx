import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Heart, Send } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { JobApplication } from '../types';

export const ApplicationModal: React.FC = () => {
  const { applyingJob, setApplyingJob, submitApplication, t, language } = useDolphy();

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
      <div className="relative w-full max-w-lg bg-white dark:bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-blue-100 dark:border-slate-700 my-6">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#2076bd] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Briefcase className="text-[#FAEA28]" size={22} />
            <div>
              <h3 className="font-oswald text-base font-bold uppercase tracking-wider">
                {createdApp 
                  ? (language === 'vi' ? 'NỘP ĐƠN THÀNH CÔNG!' : 'APPLICATION SUCCESSFUL!')
                  : t('app_modal.title')}
              </h3>
              <p className="text-xs text-blue-100">{applyingJob.title}</p>
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
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-[#2076bd] dark:text-[#38bdf8] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-oswald text-xl font-bold uppercase text-[#2076bd] dark:text-[#38bdf8]">
                {language === 'vi' ? 'Hồ Sơ Của Bạn Đã Được Chuyển Đến HR Dolphy!' : 'Your Application Has Reached Dolphy HR!'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                {language === 'vi' 
                  ? <>Cảm ơn bạn đã mong muốn trở thành một chú cá heo đồng hành cùng Dolphy. Phòng Nhân sự sẽ liên hệ mời phỏng vấn trong 2-3 ngày làm việc tới số điện thoại <strong>{createdApp.phone}</strong>.</>
                  : <>Thank you for wanting to join the Dolphy dolphin crew. HR will contact you for an interview within 2-3 business days at <strong>{createdApp.phone}</strong>.</>}
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#38bdf8] font-mono font-bold text-xs border border-blue-200 dark:border-slate-700">
                {language === 'vi' ? 'Mã Hồ Sơ Ứng Viên:' : 'Application ID:'} {createdApp.id}
              </div>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#2076bd] text-white font-bold text-sm hover:bg-[#165b94]"
                >
                  {language === 'vi' ? 'Xác Nhận & Đóng' : 'Confirm & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 text-xs text-[#2076bd] dark:text-[#38bdf8] flex items-center gap-2">
                <Heart size={16} className="text-[#2076bd] dark:text-[#38bdf8] shrink-0" />
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
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
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-slate-700 text-sm focus:outline-none focus:border-[#2076bd] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs uppercase tracking-wider font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
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
