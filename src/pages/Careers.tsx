import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { jobsData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Careers: React.FC = () => {
  const { setApplyingJob, t, language } = useDolphy();

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#f09c05] text-white text-xs font-oswald uppercase tracking-widest font-bold">
            <Sparkles size={14} />
            <span>{t('careers.hero_tag')}</span>
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            {t('careers.hero_title')}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            {t('careers.hero_desc')}
          </p>
        </div>
      </section>

      {/* Banner Image & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
          <img
            src="/images/art_barista_hiring.jpg"
            alt="Dolphy Cafe Barista Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-[#f09c05] font-oswald text-xs sm:text-sm uppercase tracking-widest font-bold">
              {t('careers.banner_tag')}
            </span>
            <h2 className="font-oswald text-2xl sm:text-4xl font-bold uppercase mt-1">
              {t('careers.banner_title')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mt-2 line-clamp-2 sm:line-clamp-none">
              {t('careers.banner_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="section-title">{t('careers.why_title')}</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t('careers.why_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center mx-auto text-2xl font-bold">
              ★
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'Đào Tạo Barista Miễn Phí' : 'Free Barista Training'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'vi' 
                ? 'Chưa có kinh nghiệm? Đừng lo, bạn sẽ được các Master Trainer đào tạo toàn bộ kỹ năng cà phê Ý, pha phin và đánh sữa chuẩn quốc tế.'
                : 'No prior experience? Our Master Trainers coach you in Italian espresso, Vietnamese phin, and latte art milk steaming.'}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-slate-800 text-[#f09c05] flex items-center justify-center mx-auto text-2xl font-bold">
              ⏰
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'Ca Làm Việc Siêu Linh Hoạt' : 'Flexible Shifts'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'vi'
                ? 'Dễ dàng đăng ký ca theo tuần, cực kỳ thuận tiện cho các bạn sinh viên vừa học vừa làm mà không lo trùng lịch thi cử.'
                : 'Easily register weekly shifts, ideal for university students balancing studies and exams.'}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center mx-auto text-2xl font-bold">
              🌍
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'Môi Trường Quốc Tế' : 'Expat Environment'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'vi'
                ? 'Lượng khách expat người nước ngoài tại Thảo Điền và Phú Mỹ Hưng rất đông, là cơ hội tuyệt vời để bạn rèn luyện tiếng Anh mỗi ngày.'
                : 'Vibrant expat customer base in Thao Dien and Phu My Hung, providing daily English practice opportunities.'}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-slate-800 text-[#f09c05] flex items-center justify-center mx-auto text-2xl font-bold">
              🚀
            </div>
            <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'Lộ Trình Thăng Tiến Rõ Ràng' : 'Clear Career Path'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'vi'
                ? 'Từ Barista ➔ Trưởng ca (Shift Leader) ➔ Quản lý Cửa Hàng (Store Manager) ➔ Chuyên viên Đào tạo (Trainer).'
                : 'From Barista ➔ Shift Leader ➔ Store Manager ➔ Master Trainer with competitive performance perks.'}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
            {t('careers.open_positions')}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {language === 'vi' 
              ? `Ứng tuyển trực tuyến hoặc gửi CV về email tuyển dụng: ${brandInfo.recruitmentEmail}`
              : `Apply online or email your CV to: ${brandInfo.recruitmentEmail}`}
          </p>
        </div>

        <div className="space-y-6">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-[#2076bd] dark:text-[#3ba0e6]">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-50 dark:bg-orange-950/40 text-[#f09c05]">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[#222222] dark:text-white uppercase">
                    {job.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-400 dark:text-gray-500 block font-oswald">{t('careers.income')}</span>
                  <span className="font-oswald text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                    {job.salary}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 dark:text-gray-300">
                <div className="space-y-2">
                  <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_desc')}</h4>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-200">{job.description}</p>
                  
                  {job.benefits && job.benefits.length > 0 && (
                    <div className="pt-2">
                      <h5 className="font-oswald text-xs font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] mb-1">{t('careers.job_benefits')}</h5>
                      <ul className="list-disc list-inside space-y-1 pl-1">
                        {job.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_req')}</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {(job.requirements || []).map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong>10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)</strong>
                </span>

                <button
                  onClick={() => setApplyingJob(job)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#2076bd] hover:bg-[#f09c05] text-white font-oswald text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>{t('careers.apply_now')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
