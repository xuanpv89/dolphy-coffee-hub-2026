import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { jobsData, brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';

export const Careers: React.FC = () => {
  const { setApplyingJob, t, language } = useDolphy();
  const [selectedDept, setSelectedDept] = React.useState<string>('all');
  const [searchJob, setSearchJob] = React.useState<string>('');

  const departments = [
    { id: 'all', name: language === 'vi' ? 'Tất cả vị trí' : 'All Roles', count: jobsData.length },
    { id: 'Khối Cửa Hàng', name: language === 'vi' ? 'Khối Cửa Hàng' : 'Store Ops', count: jobsData.filter(j => j.department.includes('Cửa Hàng')).length },
    { id: 'Khối Vận Hành', name: language === 'vi' ? 'Khối Vận Hành' : 'Operations', count: jobsData.filter(j => j.department.includes('Vận Hành')).length },
    { id: 'Khối Doanh Nghiệp', name: language === 'vi' ? 'B2B & Catering' : 'B2B & Catering', count: jobsData.filter(j => j.department.includes('Doanh Nghiệp')).length },
    { id: 'Khối Học Viện', name: language === 'vi' ? 'Học Viện Barista' : 'Academy', count: jobsData.filter(j => j.department.includes('Học Viện')).length },
    { id: 'Khối Marketing', name: language === 'vi' ? 'Marketing & Media' : 'Marketing', count: jobsData.filter(j => j.department.includes('Marketing')).length },
    { id: 'Khối Bếp Bánh', name: language === 'vi' ? 'Bếp Bánh Bakery' : 'Bakery Chef', count: jobsData.filter(j => j.department.includes('Bánh')).length }
  ];

  const filteredJobs = jobsData.filter(j => {
    const matchDept = selectedDept === 'all' || j.department.includes(selectedDept);
    const matchSearch = j.title.toLowerCase().includes(searchJob.toLowerCase()) ||
                        j.description.toLowerCase().includes(searchJob.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] dark:from-[#0d2640] dark:via-[#133e68] dark:to-[#0a1e33] border-b border-transparent dark:border-slate-800 text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#FAEA28] text-slate-950 text-xs font-oswald uppercase tracking-widest font-extrabold">
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
            src="/images/fanpage/barista-championship-ceremony.jpg"
            alt="Đội ngũ Barista Dolphy Café"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-[#FAEA28] font-oswald text-xs sm:text-sm uppercase tracking-widest font-bold">
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
            <div className="w-12 h-12 rounded-lg bg-yellow-50 dark:bg-yellow-950/40 text-[#857200] dark:text-[#FAEA28] flex items-center justify-center mx-auto text-2xl font-bold">
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
            <div className="w-12 h-12 rounded-lg bg-yellow-50 dark:bg-yellow-950/40 text-[#857200] dark:text-[#FAEA28] flex items-center justify-center mx-auto text-2xl font-bold">
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

      {/* DOLPHIERS CULTURE & SPORTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div>
            <span className="inline-block text-xs font-oswald font-bold uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6]">
              {language === 'vi' ? 'CON NGƯỜI & VĂN HÓA DOANH NGHIỆP' : 'PEOPLE & CULTURE'}
            </span>
          </div>
          <div>
            <h2 className="section-title">{t('careers.culture_title')}</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('careers.culture_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-dolphiers-striped-uniform.jpg"
                alt="Đội ngũ nhân viên Dolphy trong đồng phục sọc"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Đại Gia Đình Dolphiers' : 'Dolphiers Family'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Nụ Cười & Tinh Thần Đồng Đội' : 'Smiles & Team Camaraderie'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Môi trường làm việc trẻ trung, tích cực và đoàn kết như những chú cá heo luôn yêu thương giúp đỡ nhau.'
                  : 'A youthful, supportive and vibrant workspace where teammates support each other like a dolphin pod.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-handmade-craft-team.jpg"
                alt="Team Dolphy làm đồ handmade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#857200] dark:text-[#FAEA28]">
                {language === 'vi' ? 'Sáng Tạo & Gắn Kết' : 'Craft & Bonding'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Tự Tay Làm Đồ Handmade Trang Trí' : 'Handmade Decor Crafting Sessions'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Các buổi workshop nội bộ tự tay làm phụ kiện trang trí chi nhánh cho mùa Giáng Sinh và lễ Tết sum vầy.'
                  : 'Creative internal crafting workshops making festive handcrafted decorations for our coffee shops.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-barista-champion-winner.jpg"
                alt="Cuộc thi Barista Championship nội bộ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Phát Triển Chuyên Môn' : 'Skill Development'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Đấu Trường Nâng Cao Tay Nghề' : 'Internal Championship Arena'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Cơ hội cọ xát tay nghề qua các giải đấu thường niên, nhận thưởng thành tích và thăng chức quản lý ca.'
                  : 'Elevate barista skills through annual championships with attractive cash prizes and career promotions.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-customer-warm-greeting.jpg"
                alt="Dolphier trao gửi nụ cười đón Tết cùng khách hàng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#857200] dark:text-[#FAEA28]">
                {language === 'vi' ? 'Văn Hóa Chân Thành' : 'Warm Hospitality'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Happiness In A Cup: Lan Tỏa Niềm Vui' : 'Happiness In A Cup Service'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Giao tiếp chân thành, ấm áp với khách hàng bản địa lẫn cộng đồng Expat quốc tế tại Thảo Điền & Phú Mỹ Hưng.'
                  : 'Delivering warm, sincere interactions to both local neighbors and the international expat community.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-tet-celebration-aodai.jpg"
                alt="Dolphiers diện áo dài đón Tết"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Văn Hóa Lễ Hội' : 'Festive Celebrations'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Duyên Dáng Áo Dài Đón Xuân' : 'Traditional Ao Dai Tet Celebrations'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Tôn vinh nét đẹp văn hóa truyền thống Việt Nam trong không gian kiến trúc hiện đại, rộn rã tiếng cười.'
                  : 'Embracing Vietnamese traditional beauty within contemporary coffee architectural spaces.'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-lg transition-all group">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src="/images/fanpage/career-red-envelopes-tet.jpg"
                alt="Bộ bao lì xì độc quyền Dolphy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-oswald font-bold uppercase tracking-wider text-[#857200] dark:text-[#FAEA28]">
                {language === 'vi' ? 'Phúc Lợi & Đãi Ngộ' : 'Benefits & Perks'}
              </span>
              <h4 className="font-oswald text-base font-bold text-[#222222] dark:text-white uppercase">
                {language === 'vi' ? 'Thưởng Lễ Tết & Quà Tặng Độc Quyền' : 'Holiday Rewards & Exclusive Gifts'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {language === 'vi'
                  ? 'Chế độ thưởng doanh số, tiền tip chia đều, thưởng tháng 13 và những món quà thương hiệu Dolphy ý nghĩa.'
                  : 'Performance bonuses, evenly shared tips, 13th-month salary and branded gifts for every staff member.'}
              </p>
            </div>
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

        {/* Department Filters & Search */}
        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-oswald tracking-wider font-semibold transition-all uppercase flex items-center gap-1.5 ${
                  selectedDept === dept.id
                    ? 'bg-[#2076bd] text-white shadow-md'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{dept.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedDept === dept.id ? 'bg-white/30 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-500'
                }`}>
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder={language === 'vi' ? 'Tìm theo tên vị trí...' : 'Search roles...'}
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className="w-full pl-3 pr-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-800 dark:text-white focus:outline-none focus:border-[#2076bd]"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/40 rounded-xl text-gray-500 dark:text-gray-400">
              {language === 'vi' ? 'Không tìm thấy vị trí tuyển dụng phù hợp.' : 'No matching positions found.'}
            </div>
          ) : (
            filteredJobs.map((job) => {
              const jTitle = language === 'en' ? (job.titleEn || job.title) : job.title;
              const jDept = language === 'en' ? (job.departmentEn || job.department) : job.department;
              const jType = language === 'en' ? (job.typeEn || job.type) : job.type;
              const jSalary = language === 'en' ? (job.salaryEn || job.salary) : job.salary;
              const jDesc = language === 'en' ? (job.descriptionEn || job.description) : job.description;
              const jBenefits = language === 'en' ? (job.benefitsEn || job.benefits) : job.benefits;
              const jReqs = language === 'en' ? (job.requirementsEn || job.requirements) : job.requirements;

              return (
              <div
                key={job.id}
                className="bg-white dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-[#2076bd] dark:text-[#3ba0e6]">
                        {jType}
                      </span>
                      <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-yellow-50 dark:bg-yellow-950/40 text-[#857200] dark:text-[#FAEA28]">
                        {jDept}
                      </span>
                    </div>
                    <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[#222222] dark:text-white uppercase">
                      {jTitle}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-400 dark:text-gray-500 block font-oswald">{t('careers.income')}</span>
                    <span className="font-oswald text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                      {jSalary}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 dark:text-gray-300">
                  <div className="space-y-2">
                    <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_desc')}</h4>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-200">{jDesc}</p>
                    
                    {jBenefits && jBenefits.length > 0 && (
                      <div className="pt-2">
                        <h5 className="font-oswald text-xs font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] mb-1">{t('careers.job_benefits')}</h5>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          {jBenefits.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-oswald text-xs font-bold uppercase text-[#222222] dark:text-white">{t('careers.job_req')}</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {(jReqs || []).map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {language === 'vi' ? 'Địa điểm:' : 'Workplaces:'} <strong>{language === 'vi' ? '10 chi nhánh Dolphy Café (Q.2, Q.7, Bình Thạnh)' : '10 Dolphy branches (D.2, D.7, Binh Thanh)'}</strong>
                  </span>

                  <button
                    onClick={() => setApplyingJob(job)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white font-oswald text-xs font-semibold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>{t('careers.apply_now')}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>

    </div>
  );
};
