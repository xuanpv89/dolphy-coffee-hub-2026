import React, { useState } from 'react';
import { Users, ShoppingBag, Briefcase, DollarSign } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const AdminDashboard: React.FC = () => {
  const {
    orders,
    registrations,
    applications,
    updateOrderStatus,
    updateRegistrationStatus,
    updateApplicationStatus,
    t,
    language
  } = useDolphy();

  const [activeTab, setActiveTab] = useState<'students' | 'orders' | 'candidates' | 'funnel'>('students');

  // Compute metrics
  const totalAcademyRevenue = registrations.reduce((sum, r) => sum + r.amount, 0);
  const totalShopRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalRevenue = totalAcademyRevenue + totalShopRevenue;

  return (
    <div className="space-y-8 pb-20 bg-[#f8fafc] dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* Top Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-400/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs uppercase font-oswald font-bold tracking-widest text-[#f09c05]">
                {t('admin.tag')}
              </span>
            </div>
            <h1 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mt-1">
              {t('admin.title')}
            </h1>
            <p className="text-xs text-blue-100 mt-0.5">
              {t('admin.desc')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-white bg-white/20 px-3 py-1.5 rounded border border-white/20 font-oswald">
              {language === 'vi' ? 'Cập nhật trực tiếp (Real-time Sync)' : 'Real-time Sync'}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold uppercase tracking-wider">{t('admin.stat_revenue')}</span>
              <div className="p-2 rounded-xl bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400">
                <DollarSign size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
              {totalRevenue.toLocaleString('vi-VN')} ₫
            </div>
            <div className="text-[11px] text-[#27AE60] dark:text-green-400 flex items-center gap-1 font-medium">
              <span>Academy: {totalAcademyRevenue.toLocaleString('vi-VN')} ₫</span>
              <span>•</span>
              <span>Shop: {totalShopRevenue.toLocaleString('vi-VN')} ₫</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold uppercase tracking-wider">{t('admin.stat_students_count')}</span>
              <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400">
                <Users size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
              {registrations.length} {language === 'vi' ? 'Học Viên' : 'Students'}
            </div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400">
              {registrations.filter(r => r.status === 'paid_deposit' || r.status === 'enrolled').length} {language === 'vi' ? 'hồ sơ đã đặt cọc / nộp phí' : 'deposited / enrolled'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold uppercase tracking-wider">{t('admin.stat_orders_count')}</span>
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <ShoppingBag size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
              {orders.length} {language === 'vi' ? 'Đơn Hàng' : 'Orders'}
            </div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400">
              {language === 'vi' ? 'Cà phê hạt, bột & combo hộp quà Tết' : 'Coffee bags & Tet gift sets'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold uppercase tracking-wider">{t('admin.stat_applicants_count')}</span>
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                <Briefcase size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
              {applications.length} {language === 'vi' ? 'Ứng Viên' : 'Applicants'}
            </div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400">
              {applications.filter(a => a.status === 'new').length} {language === 'vi' ? 'hồ sơ mới cần phỏng vấn' : 'new applications for review'}
            </div>
          </div>

        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-gray-200 dark:border-slate-800 gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'students'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
            }`}
          >
            🎓 {t('admin.tab_academy')} ({registrations.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
            }`}
          >
            📦 {t('admin.tab_orders')} ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'candidates'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
            }`}
          >
            💼 {t('admin.tab_careers')} ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'funnel'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-[#222222] dark:hover:text-white'
            }`}
          >
            📈 {language === 'vi' ? 'BÁO CÁO PHỄU CHUYỂN ĐỔI (2026)' : 'CONVERSION FUNNEL (2026)'}
          </button>
        </div>

        {/* Tab 1: Students CRM */}
        {activeTab === 'students' && (
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Danh Sách Hồ Sơ Đăng Ký Dolphy Academy' : 'Dolphy Academy Registration Roster'}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Tự động cập nhật từ form đăng ký online' : 'Auto-synced from online registrations'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">ID</th>
                    <th className="p-3.5">{language === 'vi' ? 'Họ Và Tên' : 'Full Name'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Điện Thoại / Email' : 'Phone / Email'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Khóa Học Đăng Ký' : 'Course'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Chi Nhánh & Lịch Học' : 'Location & Shift'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Số Tiền' : 'Amount'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">{reg.id}</td>
                      <td className="p-3.5 font-bold text-gray-900 dark:text-white">{reg.fullName}</td>
                      <td className="p-3.5">
                        <div className="font-medium text-gray-800 dark:text-gray-200">{reg.phone}</div>
                        <div className="text-gray-400 dark:text-gray-500 text-[11px]">{reg.email || 'N/A'}</div>
                      </td>
                      <td className="p-3.5 max-w-xs font-medium text-gray-800 dark:text-gray-200">
                        {reg.courseTitle}
                      </td>
                      <td className="p-3.5 text-gray-600 dark:text-gray-400 text-[11px]">
                        <div>{reg.branchPreference}</div>
                        <div className="text-gray-400 dark:text-gray-500">{reg.schedulePreference}</div>
                      </td>
                      <td className="p-3.5 font-bold font-oswald text-[#f09c05]">
                        {reg.amount.toLocaleString('vi-VN')} ₫
                      </td>
                      <td className="p-3.5">
                        <select
                          value={reg.status}
                          onChange={(e: any) => updateRegistrationStatus(reg.id, e.target.value)}
                          className="px-2 py-1 rounded text-xs border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold focus:outline-none focus:border-[#2076bd]"
                        >
                          <option value="pending_deposit">{language === 'vi' ? 'Chờ Chuyển Cọc' : 'Pending Deposit'}</option>
                          <option value="paid_deposit">{language === 'vi' ? 'Đã Cọc 2 Triệu' : '2M Deposit Received'}</option>
                          <option value="enrolled">{language === 'vi' ? 'Đã Vào Lớp (Full)' : 'Enrolled (Full)'}</option>
                          <option value="graduated">{language === 'vi' ? 'Đã Tốt Nghiệp' : 'Graduated'}</option>
                          <option value="cancelled">{language === 'vi' ? 'Đã Hủy' : 'Cancelled'}</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Orders CRM */}
        {activeTab === 'orders' && (
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Danh Sách Đơn Hàng Cà Phê Hạt & Quà Tặng' : 'Store Orders: Coffee Beans & Gift Sets'}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Quản lý đơn hàng đóng gói và giao tận nơi' : 'Manage packaging and delivery'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">Mã Đơn</th>
                    <th className="p-3.5">{language === 'vi' ? 'Khách Hàng' : 'Customer'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Địa Chỉ Giao' : 'Delivery Address'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Sản Phẩm Đặt' : 'Items'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Tổng Tiền' : 'Total'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Thanh Toán' : 'Payment'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">{ord.id}</td>
                      <td className="p-3.5">
                        <div className="font-bold text-gray-900 dark:text-white">{ord.customerName}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-[11px]">{ord.phone}</div>
                      </td>
                      <td className="p-3.5 max-w-xs text-gray-600 dark:text-gray-300 text-[11px]">
                        {ord.address}
                      </td>
                      <td className="p-3.5 max-w-xs text-[11px] text-gray-700 dark:text-gray-300">
                        {ord.items.map((it, idx) => (
                          <div key={idx}>
                            • {it.product.name} ({it.grindOption}) x{it.quantity}
                          </div>
                        ))}
                      </td>
                      <td className="p-3.5 font-bold font-oswald text-[#f09c05]">
                        {ord.totalAmount.toLocaleString('vi-VN')} ₫
                      </td>
                      <td className="p-3.5 uppercase font-mono text-[11px]">
                        {ord.paymentMethod === 'vietqr' ? (
                          <span className="text-green-600 dark:text-green-400 font-bold">VietQR</span>
                        ) : (
                          <span className="text-gray-600 dark:text-gray-400">COD</span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={ord.status}
                          onChange={(e: any) => updateOrderStatus(ord.id, e.target.value)}
                          className="px-2 py-1 rounded text-xs border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold focus:outline-none focus:border-[#2076bd]"
                        >
                          <option value="pending">{language === 'vi' ? 'Mới Đặt' : 'New'}</option>
                          <option value="confirmed">{language === 'vi' ? 'Đã Xác Nhận' : 'Confirmed'}</option>
                          <option value="shipping">{language === 'vi' ? 'Đang Giao' : 'Shipping'}</option>
                          <option value="completed">{language === 'vi' ? 'Hoàn Tất' : 'Completed'}</option>
                          <option value="cancelled">{language === 'vi' ? 'Đã Hủy' : 'Cancelled'}</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Candidates CRM */}
        {activeTab === 'candidates' && (
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Danh Sách Ứng Viên Ứng Tuyển Barista' : 'Barista Applicant Roster'}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {language === 'vi' ? 'Hồ sơ tuyển dụng nộp qua trang tuyển dụng' : 'Applications submitted online'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">Mã UV</th>
                    <th className="p-3.5">{language === 'vi' ? 'Họ Và Tên' : 'Candidate Name'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Liên Hệ' : 'Contact'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Vị Trí & Ca Làm Việc' : 'Role & Shift'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Chi Nhánh Đăng Ký' : 'Branch'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Kinh Nghiệm / Giới Thiệu' : 'Experience'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                      <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">{app.id}</td>
                      <td className="p-3.5 font-bold text-gray-900 dark:text-white">{app.fullName}</td>
                      <td className="p-3.5">
                        <div className="font-medium text-gray-800 dark:text-gray-200">{app.phone}</div>
                        <div className="text-gray-400 dark:text-gray-500 text-[11px]">{app.email}</div>
                      </td>
                      <td className="p-3.5 text-gray-700 dark:text-gray-300">
                        <div className="font-semibold">{app.jobTitle}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-[11px]">{app.availableShift}</div>
                      </td>
                      <td className="p-3.5 text-gray-600 dark:text-gray-400 text-[11px]">
                        {app.branchPreference}
                      </td>
                      <td className="p-3.5 max-w-xs text-gray-600 dark:text-gray-400 text-[11px] line-clamp-2">
                        {app.notes || 'Không có ghi chú'}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={app.status}
                          onChange={(e: any) => updateApplicationStatus(app.id, e.target.value)}
                          className="px-2 py-1 rounded text-xs border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold focus:outline-none focus:border-[#2076bd]"
                        >
                          <option value="new">{language === 'vi' ? 'Mới Nộp' : 'New'}</option>
                          <option value="reviewed">{language === 'vi' ? 'Đã Xem Xét' : 'Reviewed'}</option>
                          <option value="interviewed">{language === 'vi' ? 'Đã Phỏng Vấn' : 'Interviewed'}</option>
                          <option value="hired">{language === 'vi' ? 'Đã Tuyển Dụng' : 'Hired'}</option>
                          <option value="archived">{language === 'vi' ? 'Lưu Trữ' : 'Archived'}</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Funnel Metrics */}
        {activeTab === 'funnel' && (
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-gray-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2076bd] dark:text-[#3ba0e6]">
                {language === 'vi' ? 'Kế Hoạch Triển Khai 4 Tháng Đầu (Nov 2026 - Feb 2027)' : 'Initial 4-Month Rollout Plan (Nov 2026 - Feb 2027)'}
              </span>
              <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] mt-1">
                {language === 'vi' ? 'Mô Hình Phễu Chuyển Đổi & KPIs Đào Tạo Dolphy Academy' : 'Conversion Funnel Model & Dolphy Academy KPIs'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {language === 'vi' 
                  ? 'Theo dõi sát sao từng nấc thang chuyển đổi từ lượt hiển thị mạng xã hội đến học viên đóng học phí thực tế.'
                  : 'Monitor each stage of student conversion from awareness to full tuition enrollment.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Stage 1</div>
                <div className="text-xs font-bold text-gray-600 dark:text-gray-300">{language === 'vi' ? 'Lượt Hiển Thị' : 'Impressions'}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">20.000+</div>
                <div className="text-[10px] text-gray-500">TikTok & Meta Vlog</div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Stage 2</div>
                <div className="text-xs font-bold text-gray-600 dark:text-gray-300">{language === 'vi' ? 'Tiếp Cận Web' : 'Web Visitors'}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">1.000+</div>
                <div className="text-[10px] text-gray-500">Landing Page Views</div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 3</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'Lượt Quan Tâm' : 'Interested'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">100+</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400">Workshop & Trials</div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 4</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'Leads Tiềm Năng' : 'Qualified Leads'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">20</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400">1-on-1 Inquiries</div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-100/50 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 5</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'HV Đăng Ký' : 'Registrations'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">10</div>
                <div className="text-[10px] text-gray-600 dark:text-gray-400">Form Submissions</div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#165b94] to-[#2076bd] text-white text-center space-y-1 shadow-md">
                <div className="text-[10px] font-bold text-[#f09c05] uppercase">Target</div>
                <div className="text-xs font-bold text-white">{language === 'vi' ? 'HV Đóng Học Phí' : 'Paid Students'}</div>
                <div className="text-xl font-extrabold text-white">5 Students</div>
                <div className="text-[10px] text-green-300 font-bold">35.000.000 ₫</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 space-y-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-[#2076bd] dark:text-[#3ba0e6] block font-bold text-sm">
                📌 {language === 'vi' ? 'Cơ Chế Vận Hành Tuyển Sinh & Khai Thác Nguồn Cũ (Resell Database):' : 'Academy Recruitment Strategy & Resell Mechanisms:'}
              </strong>
              <p>
                1. <strong>{language === 'vi' ? 'Tập Ứng Viên Cũ:' : 'Past Candidate Pool:'}</strong> {language === 'vi' ? 'Tiếp cận lại hơn 200 ứng viên từng nộp CV ứng tuyển Barista tại Dolphy nhưng chưa trúng tuyển do thiếu kinh nghiệm, mời tham gia khóa đào tạo thực chiến cam kết việc làm.' : 'Re-engage 200+ past applicants who lacked coffee experience, offering guaranteed hiring upon course completion.'}
              </p>
              <p>
                2. <strong>{language === 'vi' ? 'Workshop Trải Nghiệm Cuối Tuần:' : 'Weekend Coffee Workshops:'}</strong> {language === 'vi' ? 'Tổ chức định kỳ 2 tuần/lần tại 28 Thảo Điền (Q2) và 1441 Nguyễn Văn Linh (Q7) với mức phí 250k để tạo nguồn học viên nòng cốt.' : 'Bi-weekly experiential workshops at 28 Thao Dien (D2) and 1441 Nguyen Van Linh (D7) for 250k VND.'}
              </p>
              <p>
                3. <strong>{language === 'vi' ? 'Tự Chủ Nền Tảng:' : 'Independent Platform:'}</strong> {language === 'vi' ? 'Toàn bộ dữ liệu khách hàng và học viên được quản lý trực tiếp trên hệ thống Dolphy Coffee Hub, không bị phụ thuộc vào bên thứ ba.' : 'All customer, student, and applicant data are owned and managed independently inside Dolphy Hub.'}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
