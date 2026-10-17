import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Heart, Send } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { JobApplication } from '../types';

export const ApplicationModal: React.FC = () => {
  const { applyingJob, setApplyingJob, submitApplication } = useDolphy();

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
      alert('Vui lòng điền Họ tên và Số điện thoại.');
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
      <div className="relative w-full max-w-lg bg-[#FDFBF7] rounded-3xl shadow-2xl overflow-hidden border border-[#D4A373]/30 my-6">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#2076bd] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Briefcase className="text-[#f09c05]" size={22} />
            <div>
              <h3 className="font-oswald text-base font-bold uppercase tracking-wider">
                {createdApp ? 'NỘP ĐƠN THÀNH CÔNG!' : 'ỨNG TUYỂN VỊ TRÍ BARISTA & NHÂN SỰ'}
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
        <div className="p-6">
          {createdApp ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-display text-xl font-bold text-[#24140A]">
                Hồ Sơ Của Bạn Đã Được Chuyển Đến HR Dolphy!
              </h4>
              <p className="text-sm text-[#7A6E68]">
                Cảm ơn bạn đã mong muốn trở thành một chú cá heo đồng hành cùng Dolphy. Phòng Nhân sự sẽ liên hệ mời phỏng vấn trong 2-3 ngày làm việc tới số điện thoại <strong>{createdApp.phone}</strong>.
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FAEDCD] text-[#4A2C11] font-mono font-bold text-xs">
                Mã Hồ Sơ Ứng Viên: {createdApp.id}
              </div>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#4A2C11] text-white font-bold text-sm hover:bg-[#7A4E27]"
                >
                  Xác Nhận & Đóng
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3 rounded-xl bg-[#FAEDCD]/40 border border-[#D4A373]/30 text-xs text-[#4A2C11] flex items-center gap-2">
                <Heart size={16} className="text-[#E76F51] shrink-0" />
                <span>Mức thu nhập: <strong>{applyingJob.salary}</strong>. Không cần kinh nghiệm (được đào tạo bài bản).</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ví dụ: Hoàng Tuấn Anh"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Số điện thoại (Zalo) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="09xx xxx xxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ungvien@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Khu vực chi nhánh mong muốn làm việc
                </label>
                <select
                  value={formData.branchPreference}
                  onChange={(e) => setFormData({ ...formData, branchPreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                >
                  <option value="Khu vực Quận 2 (Thảo Điền / An Phú)">Khu vực Quận 2 (Thảo Điền / An Phú)</option>
                  <option value="Khu vực Quận 7 (Phú Mỹ Hưng)">Khu vực Quận 7 (Phú Mỹ Hưng)</option>
                  <option value="Khu vực Quận Bình Thạnh (Phạm Viết Chánh)">Khu vực Quận Bình Thạnh (Phạm Viết Chánh)</option>
                  <option value="Bất kỳ chi nhánh nào thuận tiện">Bất kỳ chi nhánh nào thuận tiện</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Ca làm việc mong muốn
                </label>
                <select
                  value={formData.shiftPreference}
                  onChange={(e) => setFormData({ ...formData, shiftPreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                >
                  <option value="Ca sáng (06:30 - 14:30)">Ca sáng (06:30 - 14:30)</option>
                  <option value="Ca chiều / tối (14:30 - 22:30)">Ca chiều / tối (14:30 - 22:30)</option>
                  <option value="Part-time linh hoạt 4-5 tiếng/ngày">Part-time linh hoạt 4-5 tiếng/ngày</option>
                  <option value="Full-time cố định">Full-time cố định</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Đôi dòng về bạn, trình độ tiếng Anh hoặc kinh nghiệm (nếu có)
                </label>
                <textarea
                  rows={3}
                  value={formData.experienceNotes}
                  onChange={(e) => setFormData({ ...formData, experienceNotes: e.target.value })}
                  placeholder="Ví dụ: Đang là sinh viên năm 2, tiếng Anh giao tiếp tốt, yêu thích văn hóa cà phê..."
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-xs uppercase tracking-wider font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>GỬI HỒ SƠ ỨNG TUYỂN NGAY</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
