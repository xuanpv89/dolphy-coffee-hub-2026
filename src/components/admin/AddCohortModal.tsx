import React, { useState } from 'react';
import { X, Calendar, GraduationCap, MapPin, Clock, Users, CheckCircle2, User } from 'lucide-react';
import { coursesData, branchesData } from '../../data/dolphyData';

export interface AcademyCohort {
  id: string;
  courseId: string;
  courseName: string;
  branchName: string;
  startDate: string;
  scheduleTime: string;
  totalSessions: number;
  maxSeats: number;
  enrolledSeats: number;
  leadTrainer: string;
  trainerPhone: string;
  room: string;
  status: 'recruiting' | 'starting_soon' | 'in_progress' | 'completed';
}

interface AddCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (cohort: AcademyCohort) => void;
  language: 'vi' | 'en';
}

export const AddCohortModal: React.FC<AddCohortModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  language
}) => {
  const [courseId, setCourseId] = useState(coursesData[0]?.id || 'barista-mastery');
  const [cohortId, setCohortId] = useState(`DOLPHY-K${Math.floor(12 + Math.random() * 20)}`);
  const [branchName, setBranchName] = useState('Dolphy Academy 28 Thảo Điền');
  const [startDate, setStartDate] = useState('15/11/2026');
  const [scheduleTime, setScheduleTime] = useState('Sáng T2 - T4 - T6 (08:30 - 11:30)');
  const [totalSessions, setTotalSessions] = useState(6);
  const [maxSeats, setMaxSeats] = useState(6);
  const [leadTrainer, setLeadTrainer] = useState('Trần Nam (Q-Grader)');
  const [trainerPhone, setTrainerPhone] = useState('0903.882.101');
  const [room, setRoom] = useState('Lab 1 - Quầy Bar La Marzocco Linea PB');

  if (!isOpen) return null;

  const selectedCourse = coursesData.find(c => c.id === courseId) || coursesData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cohortId.trim() || !startDate.trim()) {
      alert(language === 'vi' ? 'Vui lòng nhập mã lớp và ngày khai giảng!' : 'Please enter cohort code and start date!');
      return;
    }

    onSubmit({
      id: cohortId.trim().toUpperCase(),
      courseId: selectedCourse.id,
      courseName: selectedCourse.title,
      branchName,
      startDate: startDate.trim(),
      scheduleTime,
      totalSessions,
      maxSeats,
      enrolledSeats: 0,
      leadTrainer: leadTrainer.trim(),
      trainerPhone: trainerPhone.trim(),
      room: room.trim(),
      status: 'recruiting'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center">
              <Calendar size={18} />
            </div>
            <div>
              <h3 className="font-oswald text-lg font-bold uppercase text-gray-900 dark:text-white leading-tight">
                {language === 'vi' ? 'Khai Giảng Lớp Học Mới' : 'Open New Training Cohort'}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Lập lịch lớp đào tạo Barista, thiết lập sĩ số và phân bổ giảng viên' : 'Schedule upcoming Academy batches and assign trainers'}
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Mã Lớp Học (Cohort Code) *' : 'Cohort Code *'}
              </label>
              <input
                type="text"
                required
                value={cohortId}
                onChange={e => setCohortId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono uppercase font-bold focus:outline-none focus:border-[#2076bd]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Ngày Khai Giảng *' : 'Start Date *'}
              </label>
              <input
                type="text"
                required
                placeholder="DD/MM/YYYY"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {language === 'vi' ? 'Khóa Học Đào Tạo *' : 'Training Program *'}
            </label>
            <select
              value={courseId}
              onChange={e => setCourseId(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-[#2076bd]"
            >
              {coursesData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.duration})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Cơ Sở Học' : 'Training Campus'}
              </label>
              <select
                value={branchName}
                onChange={e => setBranchName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="Dolphy Academy 28 Thảo Điền">Dolphy Academy 28 Thảo Điền</option>
                <option value="Dolphy Academy 1441 Nguyễn Văn Linh Q7">Dolphy Academy 1441 Nguyễn Văn Linh Q7</option>
                <option value="Xưởng Rang Dolphy Roastery Thảo Điền">Xưởng Rang Roastery Thảo Điền</option>
                <option value="Trụ sở Dolphy Head Office">Trụ sở Dolphy Head Office</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Thời Gian & Ca Học' : 'Class Schedule Time'}
              </label>
              <select
                value={scheduleTime}
                onChange={e => setScheduleTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              >
                <option value="Sáng T2 - T4 - T6 (08:30 - 11:30)">Sáng T2 - T4 - T6 (08:30 - 11:30)</option>
                <option value="Tối T3 - T5 (18:30 - 21:00)">Tối T3 - T5 (18:30 - 21:00)</option>
                <option value="Cuối tuần T7 & CN (09:00 - 16:00)">Cuối tuần T7 & CN (09:00 - 16:00)</option>
                <option value="Cả ngày Thứ Bảy (08:30 - 17:00)">Cả ngày Thứ Bảy (08:30 - 17:00)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Sĩ Số Tối Đa (Seats)' : 'Max Capacity'}
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={maxSeats}
                onChange={e => setMaxSeats(parseInt(e.target.value) || 6)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Tổng Số Buổi Học' : 'Total Sessions'}
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={totalSessions}
                onChange={e => setTotalSessions(parseInt(e.target.value) || 6)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Giảng Viên Phụ Trách' : 'Lead Trainer'}
              </label>
              <input
                type="text"
                value={leadTrainer}
                onChange={e => setLeadTrainer(e.target.value)}
                placeholder="Tên giảng viên"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {language === 'vi' ? 'Phòng Thực Hành' : 'Lab / Room'}
              </label>
              <input
                type="text"
                value={room}
                onChange={e => setRoom(e.target.value)}
                placeholder="Lab 1, Lab 2, Roastery..."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:border-[#2076bd]"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {language === 'vi' ? 'Hủy' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <CheckCircle2 size={14} />
              <span>{language === 'vi' ? 'Khai Giảng Lớp' : 'Create Cohort'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
