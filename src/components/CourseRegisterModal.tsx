import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, GraduationCap, QrCode, Calendar, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import { Course, StudentRegistration } from '../types';
import { coursesData } from '../data/dolphyData';

export const CourseRegisterModal: React.FC = () => {
  const { enrollingCourse, setEnrollingCourse, submitRegistration } = useDolphy();

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
      alert('Vui lòng điền Họ tên và Số điện thoại để hoàn tất đăng ký.');
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
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl overflow-hidden border border-[#D4A373]/30 my-6">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="text-[#D4A373]" size={24} />
            <div>
              <h3 className="font-display text-lg font-bold">
                {createdReg ? 'Đăng Ký Thành Công!' : 'Đăng Ký Khóa Học Dolphy Academy 2026'}
              </h3>
              <p className="text-xs text-[#FAEDCD]">Cam kết đào tạo thực chiến & ưu tiên tuyển dụng</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[82vh] overflow-y-auto">
          {createdReg ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              
              <div>
                <h4 className="font-display text-2xl font-bold text-[#24140A]">Chúc Mừng Bạn Đã Trở Thành Học Viên!</h4>
                <p className="text-sm text-[#7A6E68] mt-1">
                  Dolphy Academy đã nhận được thông tin ghi danh cho khóa: <strong>{createdReg.courseTitle}</strong>.
                </p>
                <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-[#FAEDCD] text-[#4A2C11] font-mono font-bold text-sm">
                  Mã Hồ Sơ Học Viên: {createdReg.id}
                </div>
              </div>

              {/* QR Code Transfer */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] max-w-sm mx-auto shadow-md space-y-3">
                <div className="flex items-center justify-center gap-2 font-bold text-sm text-[#4A2C11]">
                  <QrCode size={18} />
                  <span>
                    Mã Chuyển Khoản {createdReg.paymentOption === 'deposit' ? 'Đặt Cọc Giữ Chỗ' : 'Toàn Bộ Học Phí'}
                  </span>
                </div>
                <img
                  src={qrUrl}
                  alt="VietQR Dolphy Academy"
                  className="w-52 h-52 mx-auto rounded-xl border border-gray-200"
                />
                <div className="text-xs text-gray-700 space-y-1 text-left bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div>Ngân hàng: <strong>MB Bank (Quân Đội)</strong></div>
                  <div>Số tài khoản: <strong>0938084985</strong></div>
                  <div>Chủ tài khoản: <strong>DOLPHY CAFE</strong></div>
                  <div>Số tiền: <strong className="text-[#C0392B] font-bold">{createdReg.amount.toLocaleString('vi-VN')} ₫</strong></div>
                  <div>Nội dung: <strong>{createdReg.id} - {createdReg.phone}</strong></div>
                </div>
                <p className="text-[11px] text-gray-500 italic">
                  Trainer phụ trách lớp sẽ liên hệ qua điện thoại & Zalo trong 24h để gửi thời khóa biểu và hướng dẫn chuẩn bị dụng cụ.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#4A2C11] text-white font-bold text-sm hover:bg-[#7A4E27]"
                >
                  Hoàn Tất & Đóng
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Course Selection Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAEDCD]/40 to-[#FDFBF7] border border-[#D4A373]/40 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E76F51] text-white">
                      {selectedCourse.badge || 'Khóa Đào Tạo'}
                    </span>
                    <h4 className="font-display text-base font-bold text-[#24140A] mt-1">
                      {selectedCourse.title}
                    </h4>
                    <p className="text-xs text-[#7A6E68] mt-0.5">
                      Thời lượng: {selectedCourse.totalHours} giờ ({selectedCourse.sessions} buổi x {selectedCourse.hoursPerSession}h)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through block">
                      {selectedCourse.price.toLocaleString('vi-VN')} ₫
                    </span>
                    <span className="text-lg font-bold text-[#C0392B]">
                      {selectedCourse.discountPrice.toLocaleString('vi-VN')} ₫
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Họ và tên học viên *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email nhận tài liệu học tập
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hocvien@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Địa điểm học thực hành ưu tiên
                    </label>
                    <select
                      value={formData.branchPreference}
                      onChange={(e) => setFormData({ ...formData, branchPreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                    >
                      {selectedCourse.locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Ca học mong muốn
                    </label>
                    <select
                      value={formData.preferredSchedule}
                      onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                    >
                      {selectedCourse.schedule.map(sch => (
                        <option key={sch} value={sch}>{sch}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Mục tiêu học tập & Ghi chú (Nếu có)
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ví dụ: Muốn xin việc ngay tại Dolphy, sắp đi du học, v.v..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#4A2C11] bg-white"
                  />
                </div>
              </div>

              {/* Payment Option: Cọc or Full */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-semibold text-gray-700">
                  Lựa chọn đóng học phí:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setFormData({ ...formData, paymentOption: 'deposit' })}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      formData.paymentOption === 'deposit'
                        ? 'border-[#4A2C11] bg-[#FAEDCD]/30 ring-2 ring-[#4A2C11]'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'deposit'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'deposit' })}
                      className="text-[#4A2C11] focus:ring-[#4A2C11]"
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-[#24140A]">
                        Đặt Cọc Giữ Chỗ (Ưu tiên)
                      </div>
                      <div className="text-base font-bold text-[#C0392B] mt-0.5">
                        {selectedCourse.depositAmount.toLocaleString('vi-VN')} ₫
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Phần còn lại thanh toán vào buổi khai giảng đầu tiên.
                      </div>
                    </div>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentOption: 'full' })}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                      formData.paymentOption === 'full'
                        ? 'border-[#4A2C11] bg-[#FAEDCD]/30 ring-2 ring-[#4A2C11]'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      checked={formData.paymentOption === 'full'}
                      onChange={() => setFormData({ ...formData, paymentOption: 'full' })}
                      className="text-[#4A2C11] focus:ring-[#4A2C11]"
                    />
                    <div className="mt-1">
                      <div className="font-bold text-xs text-[#24140A]">
                        Thanh Toán Toàn Bộ Học Phí
                      </div>
                      <div className="text-base font-bold text-[#C0392B] mt-0.5">
                        {selectedCourse.discountPrice.toLocaleString('vi-VN')} ₫
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Tặng thêm 01 gói cà phê túi Dolphy & áo thun Barista.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4A2C11] via-[#7A4E27] to-[#8C5329] text-white font-bold text-base hover:brightness-110 shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap size={18} />
                  <span>Xác Nhận Đăng Ký ({currentPrice.toLocaleString('vi-VN')} ₫)</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
