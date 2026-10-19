import React from 'react';
import { X, User, Phone, Mail, MapPin, Calendar, Clock, DollarSign, FileText, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { StudentRegistration, Order, JobApplication } from '../../types';

type DetailRecord =
  | { type: 'student'; data: StudentRegistration }
  | { type: 'order'; data: Order }
  | { type: 'candidate'; data: JobApplication };

interface RecordDetailModalProps {
  record: DetailRecord | null;
  onClose: () => void;
  language: 'vi' | 'en';
}

export const RecordDetailModal: React.FC<RecordDetailModalProps> = ({
  record,
  onClose,
  language
}) => {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center font-bold text-xs">
              {record.type === 'student' ? 'HV' : record.type === 'order' ? 'ĐH' : 'ỨV'}
            </span>
            <div>
              <h3 className="font-oswald text-base font-bold uppercase text-gray-900 dark:text-white leading-tight">
                {record.type === 'student'
                  ? (language === 'vi' ? 'Hồ Sơ Học Viên Academy' : 'Student Dossier')
                  : record.type === 'order'
                  ? (language === 'vi' ? 'Chi Tiết Đơn Hàng' : 'Order Details')
                  : (language === 'vi' ? 'Hồ Sơ Tuyển Dụng' : 'Applicant Resume')}
              </h3>
              <p className="font-mono text-[11px] text-[#2076bd] dark:text-[#3ba0e6] font-semibold">
                Mã: {record.data.id}
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

        {/* Modal Content */}
        <div className="p-6 space-y-4 text-xs max-h-[75vh] overflow-y-auto">
          
          {/* Quick Contact Actions Bar */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={15} className="text-gray-400" />
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                {'fullName' in record.data ? record.data.fullName : record.data.customerName}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <a
                href={`tel:${record.data.phone}`}
                className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1 hover:bg-emerald-200 transition-colors"
              >
                <Phone size={11} />
                <span>Gọi</span>
              </a>
              <a
                href={`https://zalo.me/${record.data.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] font-semibold flex items-center gap-1 hover:bg-blue-200 transition-colors"
              >
                <MessageSquare size={11} />
                <span>Zalo</span>
              </a>
            </div>
          </div>

          {/* STUDENT DETAIL */}
          {record.type === 'student' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40">
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Khóa học đăng ký</div>
                  <div className="font-bold text-gray-800 dark:text-gray-200 mt-0.5">{record.data.courseTitle}</div>
                </div>
                <div className="p-3 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40">
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Học phí ghi nhận</div>
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm mt-0.5">
                    {record.data.amount.toLocaleString('vi-VN')}₫
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-3 rounded-lg border border-gray-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Hình thức thanh toán:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {record.data.paymentOption === 'full' ? 'Nộp đủ 100%' : 'Đặt cọc giữ chỗ (1.000.000₫)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Chi nhánh / Cơ sở:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{record.data.branchPreference || '28 Thảo Điền'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Ca học mong muốn:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{record.data.preferredSchedule || 'Lớp Sáng'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Thời gian đăng ký:</span>
                  <span className="font-mono text-gray-600 dark:text-gray-300">{record.data.createdAt}</span>
                </div>
                {record.data.notes && (
                  <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
                    <span className="text-gray-400 block mb-1">Ghi chú:</span>
                    <p className="text-gray-700 dark:text-gray-300 italic">{record.data.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ORDER DETAIL */}
          {record.type === 'order' && (
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40">
                <div className="text-[10px] text-gray-400 uppercase font-semibold">Địa chỉ nhận hàng</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 mt-0.5">{record.data.address}</div>
                {record.data.note && (
                  <div className="mt-1 text-[11px] text-amber-600 dark:text-amber-400 italic">
                    Ghi chú: "{record.data.note}"
                  </div>
                )}
              </div>

              <div className="space-y-2 p-3 rounded-lg border border-gray-100 dark:border-slate-800">
                <div className="font-bold text-gray-800 dark:text-gray-200 uppercase text-[10px] tracking-wider mb-1">
                  Chi tiết món trong đơn:
                </div>
                {record.data.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-slate-800/60 last:border-none">
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{it.product.name}</span>
                      <span className="text-[#2076bd] font-bold ml-1.5">x{it.quantity}</span>
                      {it.grindOption && <div className="text-[10px] text-gray-400">{it.grindOption}</div>}
                    </div>
                    <span className="font-mono font-bold text-gray-800 dark:text-gray-200">
                      {(it.product.price * it.quantity).toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between font-bold">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="font-mono text-sm text-[#2076bd] dark:text-[#3ba0e6]">
                    {record.data.totalAmount.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-[11px]">
                <span>Phương thức: {record.data.paymentMethod.toUpperCase()}</span>
                <span>Ngày tạo: {record.data.createdAt}</span>
              </div>
            </div>
          )}

          {/* CANDIDATE DETAIL */}
          {record.type === 'candidate' && (
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Vị trí ứng tuyển:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{record.data.position}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Khu vực mong muốn:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{record.data.branchPreference}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Ca làm việc:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{record.data.shiftPreference}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-gray-100 dark:border-slate-800 space-y-1">
                <span className="text-gray-400 text-[10px] uppercase font-semibold block">Giới thiệu & Kinh nghiệm:</span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{record.data.experienceNotes}"
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end bg-slate-50 dark:bg-slate-900/50">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 font-semibold text-xs transition-colors"
          >
            {language === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
