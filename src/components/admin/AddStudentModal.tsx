import React, { useState } from 'react';
import { X, GraduationCap, User, Phone, Mail, MapPin, Calendar, DollarSign, FileText, CheckCircle2 } from 'lucide-react';
import { coursesData, branchesData } from '../../data/dolphyData';
import { StudentRegistration } from '../../types';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: Omit<StudentRegistration, 'id' | 'createdAt' | 'status'> & { initialStatus?: StudentRegistration['status'] }) => void;
  language: 'vi' | 'en';
}

export const AddStudentModal: React.FC<AddStudentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  language
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(coursesData[0]?.id || 'barista-mastery');
  const [preferredBranch, setPreferredBranch] = useState('28 Thảo Điền, TP. Thủ Đức (Dolphy Academy Lab 1)');
  const [preferredSchedule, setPreferredSchedule] = useState('Sáng T2 - T4 - T6 (08:30 - 11:30)');
  const [paymentOption, setPaymentOption] = useState<'deposit' | 'full'>('deposit');
  const [leadSource, setLeadSource] = useState('walk_in');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const selectedCourse = coursesData.find(c => c.id === courseId) || coursesData[0];
  const calculatedAmount = paymentOption === 'deposit' ? selectedCourse.depositAmount : selectedCourse.discountPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert(language === 'vi' ? 'Vui lòng điền họ tên và số điện thoại!' : 'Please enter full name and phone number!');
      return;
    }

    const initialStatus: StudentRegistration['status'] = paymentOption === 'full' ? 'enrolled' : 'paid_deposit';

    onSubmit({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || `${phone.trim()}@student.dolphy.vn`,
      courseId: selectedCourse.id,
      courseTitle: selectedCourse.title,
      branchPreference: preferredBranch,
      preferredSchedule: preferredSchedule,
      paymentOption: paymentOption,
      amount: calculatedAmount,
      notes: `[Nguồn: ${leadSource.toUpperCase()}] ${notes.trim()}`,
      initialStatus
    });

    // Reset form
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center">
              <GraduationCap size={18} />
            </div>
            <div>
              <h3 className="font-oswald text-lg font-bold uppercase text-gray-900 dark:text-white leading-tight">
                {language === 'vi' ? 'Ghi Danh Học Viên Mới' : 'Register New Student (Manual)'}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Nhập thông tin đăng ký trực tiếp tại quầy, qua Hotline hoặc Zalo' : 'Input walk-in, hotline, or social inquiry directly'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Họ và Tên Học Viên *' : 'Full Name *'}
              </label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder={language === 'vi' ? 'Ví dụ: Nguyễn Văn An' : 'e.g. John Doe'}
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Số Điện Thoại (Zalo) *' : 'Phone Number (Zalo) *'}
              </label>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="09xx xxx xxx"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>
          </div>

          {/* Email & Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Nguồn Ghi Danh' : 'Lead Source'}
              </label>
              <select
                value={leadSource}
                onChange={e => setLeadSource(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="walk_in">{language === 'vi' ? 'Trực tiếp tại quầy cà phê' : 'Walk-in at store'}</option>
                <option value="hotline">{language === 'vi' ? 'Gọi điện Hotline tư vấn' : 'Hotline Call'}</option>
                <option value="zalo">{language === 'vi' ? 'Nhắn tin Zalo OA' : 'Zalo Chat'}</option>
                <option value="facebook">{language === 'vi' ? 'Facebook Fanpage / Messenger' : 'Facebook Messenger'}</option>
                <option value="referral">{language === 'vi' ? 'Bạn bè / Học viên cũ giới thiệu' : 'Student Referral'}</option>
              </select>
            </div>
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {language === 'vi' ? 'Khóa Học Đăng Ký *' : 'Selected Course *'}
            </label>
            <select
              value={courseId}
              onChange={e => setCourseId(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-[#2076bd]"
            >
              {coursesData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.title} — {c.discountPrice.toLocaleString('vi-VN')}₫ ({c.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Campus Location & Schedule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Địa Điểm Học *' : 'Training Campus *'}
              </label>
              <select
                value={preferredBranch}
                onChange={e => setPreferredBranch(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="28 Thảo Điền, TP. Thủ Đức (Dolphy Academy Lab 1)">28 Thảo Điền, Q2 (Lab 1)</option>
                <option value="1441 Nguyễn Văn Linh, Phú Mỹ Hưng, Q7 (Dolphy Academy Lab 2)">1441 Nguyễn Văn Linh, Q7 (Lab 2)</option>
                <option value="Xưởng Rang Dolphy Roastery Thảo Điền (Khóa Rang Xay)">Xưởng Rang Roastery Thảo Điền</option>
                <option value="Trụ sở Dolphy Head Office (Khóa Quản Trị F&B)">Trụ sở Head Office (Quản Trị)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Ca Học Dự Kiến *' : 'Preferred Shift *'}
              </label>
              <select
                value={preferredSchedule}
                onChange={e => setPreferredSchedule(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="Sáng T2 - T4 - T6 (08:30 - 11:30)">Sáng T2 - T4 - T6 (08:30 - 11:30)</option>
                <option value="Tối T3 - T5 (18:30 - 21:00)">Tối T3 - T5 (18:30 - 21:00)</option>
                <option value="Cuối tuần T7 & CN (09:00 - 16:00)">Cuối tuần T7 & CN (09:00 - 16:00)</option>
                <option value="Cả ngày Thứ Bảy (08:30 - 17:00)">Cả ngày Thứ Bảy (08:30 - 17:00)</option>
              </select>
            </div>
          </div>

          {/* Payment Option */}
          <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-2">
            <span className="block text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">
              {language === 'vi' ? 'Hình Thức Thu Phí' : 'Tuition Payment'}
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentOption('deposit')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  paymentOption === 'deposit'
                    ? 'border-[#2076bd] bg-white dark:bg-slate-900 text-[#2076bd] dark:text-[#3ba0e6] shadow-xs'
                    : 'border-gray-200 dark:border-slate-700 bg-transparent text-gray-600 dark:text-gray-400'
                }`}
              >
                <div className="text-[11px] font-bold">{language === 'vi' ? 'Thu Đặt Cọc Giữ Chỗ' : 'Deposit Only'}</div>
                <div className="font-mono text-xs font-bold mt-0.5">{selectedCourse.depositAmount.toLocaleString('vi-VN')}₫</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentOption('full')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  paymentOption === 'full'
                    ? 'border-[#2076bd] bg-white dark:bg-slate-900 text-[#2076bd] dark:text-[#3ba0e6] shadow-xs'
                    : 'border-gray-200 dark:border-slate-700 bg-transparent text-gray-600 dark:text-gray-400'
                }`}
              >
                <div className="text-[11px] font-bold">{language === 'vi' ? 'Thu Đủ 100% Học Phí' : 'Full Tuition (100%)'}</div>
                <div className="font-mono text-xs font-bold mt-0.5 text-emerald-600 dark:text-emerald-400">
                  {selectedCourse.discountPrice.toLocaleString('vi-VN')}₫
                </div>
              </button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {language === 'vi' ? 'Ghi Chú Đặc Biệt' : 'Internal Notes'}
            </label>
            <textarea
              rows={2}
              placeholder={language === 'vi' ? 'Ví dụ: Học viên đã chuyển khoản qua VietQR, mong muốn định hướng mở quán...' : 'e.g. Paid via VietQR, plans to open specialty cafe...'}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
            ></textarea>
          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {language === 'vi' ? 'Hủy Bỏ' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <CheckCircle2 size={14} />
              <span>{language === 'vi' ? 'Xác Nhận Ghi Danh' : 'Save Registration'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
