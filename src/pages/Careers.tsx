import React from 'react';
import { Briefcase, Heart, Clock, Award, Users, CheckCircle2, ArrowRight, Send, Sparkles } from 'lucide-react';
import { jobsData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Careers: React.FC = () => {
  const { setApplyingJob } = useDolphy();

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#24140A] via-[#4A2C11] to-[#7A4E27] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D4A373]/30 text-xs text-[#FAEDCD]">
            <Sparkles size={14} className="text-[#E76F51]" />
            <span>DOLPHY CAFÉ HIRING 2026</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Cơ Hội Nghề Nghiệp Tại Dolphy Café
          </h1>
          <p className="text-sm sm:text-base text-[#D8CFCE] max-w-2xl mx-auto">
            "Chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc". Dolphy đang tìm kiếm những người bạn trẻ nhiệt huyết, chân thành để cùng nhau lan tỏa niềm vui mỗi ngày.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5329]">
            Văn Hóa Làm Việc
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A]">
            Tại Sao Bạn Sẽ Thích Làm Việc Tại Dolphy?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center mx-auto text-2xl">
              🎓
            </div>
            <h3 className="font-bold text-sm text-[#24140A]">Đào Tạo Barista Miễn Phí</h3>
            <p className="text-xs text-gray-600">
              Chưa có kinh nghiệm? Đừng lo, bạn sẽ được các Master Trainer đào tạo toàn bộ kỹ năng cà phê Ý, pha phin và đánh sữa chuẩn quốc tế.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center mx-auto text-2xl">
              ⏰
            </div>
            <h3 className="font-bold text-sm text-[#24140A]">Ca Làm Việc Siêu Linh Hoạt</h3>
            <p className="text-xs text-gray-600">
              Dễ dàng đăng ký ca theo tuần, cực kỳ thuận tiện cho các bạn sinh viên vừa học vừa làm mà không lo trùng lịch thi cử.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center mx-auto text-2xl">
              🌍
            </div>
            <h3 className="font-bold text-sm text-[#24140A]">Môi Trường Giao Tiếp Quốc Tế</h3>
            <p className="text-xs text-gray-600">
              Lượng khách expat người nước ngoài tại Thảo Điền và Phú Mỹ Hưng rất đông, là cơ hội tuyệt vời để bạn rèn luyện tiếng Anh mỗi ngày.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0E6] text-[#8C5329] flex items-center justify-center mx-auto text-2xl">
              🚀
            </div>
            <h3 className="font-bold text-sm text-[#24140A]">Lộ Trình Thăng Tiến Rõ Ràng</h3>
            <p className="text-xs text-gray-600">
              Từ Barista ➔ Trưởng ca (Shift Leader) ➔ Quản lý Cửa Hàng (Store Manager) ➔ Chuyên viên Đào tạo (Trainer).
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5329]">
            Vị Trí Đang Mở Đơn
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24140A]">
            Các Cơ Hội Việc Làm Hiện Có
          </h2>
        </div>

        <div className="space-y-6">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl border border-[#E8E0D5] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FAEDCD] text-[#4A2C11]">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#24140A] mt-1.5">
                    {job.title}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs text-gray-400">Mức thu nhập:</div>
                  <div className="text-lg font-bold text-[#C0392B]">{job.salary}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
                <div className="space-y-2">
                  <h4 className="font-bold text-[#4A2C11] text-sm">Yêu cầu công việc:</h4>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#27AE60] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#4A2C11] text-sm">Quyền lợi & Đãi ngộ:</h4>
                  <ul className="space-y-1.5">
                    {job.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#27AE60] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  📍 Địa điểm: <strong>{job.locations.join(' • ')}</strong>
                </div>

                <button
                  onClick={() => setApplyingJob(job)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#4A2C11] to-[#8C5329] text-white font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Send size={14} />
                  <span>Ứng Tuyển Vị Trí Này</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
