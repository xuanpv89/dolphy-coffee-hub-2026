import React from 'react';
import { Briefcase, Heart, Clock, Award, Users, CheckCircle2, ArrowRight, Send, Sparkles } from 'lucide-react';
import { jobsData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Careers: React.FC = () => {
  const { setApplyingJob } = useDolphy();

  return (
    <div className="space-y-16 pb-20 bg-white text-[#222222]">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#f09c05] text-white text-xs font-oswald uppercase tracking-widest font-bold">
            <Sparkles size={14} />
            <span>DOLPHY CAFÉ HIRING 2026</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            CƠ HỘI NGHỀ NGHIỆP TẠI DOLPHY CAFÉ
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            "Chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc". Dolphy đang tìm kiếm những người bạn trẻ nhiệt huyết, chân thành để cùng nhau lan tỏa niềm vui mỗi ngày.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="section-title">VÌ SAO CHỌN DOLPHY CAFE?</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Môi trường làm việc thân thiện, chuẩn chỉ, thăng tiến công bằng và tôn trọng nhân sự.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2076bd] flex items-center justify-center mx-auto text-2xl font-bold">
              ★
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd]">Đào Tạo Barista Miễn Phí</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Chưa có kinh nghiệm? Đừng lo, bạn sẽ được các Master Trainer đào tạo toàn bộ kỹ năng cà phê Ý, pha phin và đánh sữa chuẩn quốc tế.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#f09c05] flex items-center justify-center mx-auto text-2xl font-bold">
              ⏰
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd]">Ca Làm Việc Siêu Linh Hoạt</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dễ dàng đăng ký ca theo tuần, cực kỳ thuận tiện cho các bạn sinh viên vừa học vừa làm mà không lo trùng lịch thi cử.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2076bd] flex items-center justify-center mx-auto text-2xl font-bold">
              🌍
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd]">Môi Trường Quốc Tế</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Lượng khách expat người nước ngoài tại Thảo Điền và Phú Mỹ Hưng rất đông, là cơ hội tuyệt vời để bạn rèn luyện tiếng Anh mỗi ngày.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#f09c05] flex items-center justify-center mx-auto text-2xl font-bold">
              🚀
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd]">Lộ Trình Thăng Tiến Rõ Ràng</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Từ Barista ➔ Trưởng ca (Shift Leader) ➔ Quản lý Cửa Hàng (Store Manager) ➔ Chuyên viên Đào tạo (Trainer).
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd]">
            CÁC VỊ TRÍ ĐANG TUYỂN DỤNG
          </h2>
          <p className="text-xs text-gray-500">Ứng tuyển trực tuyến hoặc gửi CV về email tuyển dụng: {brandInfo.recruitmentEmail}</p>
        </div>

        <div className="space-y-6">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#2076bd]">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-50 text-[#f09c05]">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[#222222] uppercase">
                    {job.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-400 block font-oswald">Mức thu nhập</span>
                  <span className="font-oswald text-lg font-bold text-[#2076bd]">
                    {job.salary}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600">
                <div className="space-y-2">
                  <h4 className="font-oswald text-xs font-bold uppercase text-[#222222]">Mô tả công việc:</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {job.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-oswald text-xs font-bold uppercase text-[#222222]">Yêu cầu ứng viên:</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400">
                  Địa điểm: <strong>10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)</strong>
                </span>

                <button
                  onClick={() => setApplyingJob(job)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>NỘP HỒ SƠ ỨNG TUYỂN NGAY</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
