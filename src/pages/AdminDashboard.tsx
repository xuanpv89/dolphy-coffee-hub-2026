import React, { useState } from 'react';
import { Users, ShoppingBag, Briefcase, TrendingUp, DollarSign, CheckCircle2, Clock, Eye, AlertCircle, RefreshCw, Filter, ArrowUpRight } from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';

export const AdminDashboard: React.FC = () => {
  const {
    orders,
    registrations,
    applications,
    updateOrderStatus,
    updateRegistrationStatus,
    updateApplicationStatus
  } = useDolphy();

  const [activeTab, setActiveTab] = useState<'students' | 'orders' | 'candidates' | 'funnel'>('students');

  // Compute metrics
  const totalAcademyRevenue = registrations.reduce((sum, r) => sum + r.amount, 0);
  const totalShopRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalRevenue = totalAcademyRevenue + totalShopRevenue;

  return (
    <div className="space-y-8 pb-20">
      
      {/* Top Header */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-400/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs uppercase font-oswald font-bold tracking-widest text-[#f09c05]">
                HỆ THỐNG QUẢN TRỊ TỰ CHỦ 2026
              </span>
            </div>
            <h1 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mt-1">
              DOLPHY COFFEE HUB • CRM & ADMIN PORTAL
            </h1>
            <p className="text-xs text-blue-100 mt-0.5">
              Theo dõi đo lường phễu tuyển sinh Dolphy Academy, đơn hàng shop và tuyển dụng nhân sự.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-white bg-white/20 px-3 py-1.5 rounded border border-white/20 font-oswald">
              Cập nhật trực tiếp (Real-time Sync)
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold uppercase tracking-wider">Tổng Doanh Thu</span>
              <div className="p-2 rounded-xl bg-green-50 text-green-600">
                <DollarSign size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#24140A]">
              {totalRevenue.toLocaleString('vi-VN')} ₫
            </div>
            <div className="text-[11px] text-[#27AE60] flex items-center gap-1 font-medium">
              <span>Academy: {totalAcademyRevenue.toLocaleString('vi-VN')} ₫</span>
              <span>•</span>
              <span>Shop: {totalShopRevenue.toLocaleString('vi-VN')} ₫</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold uppercase tracking-wider">Học Viên Academy</span>
              <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                <Users size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#24140A]">
              {registrations.length} Học Viên
            </div>
            <div className="text-[11px] text-gray-500">
              {registrations.filter(r => r.status === 'paid_deposit' || r.status === 'enrolled').length} hồ sơ đã đặt cọc / nộp phí
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold uppercase tracking-wider">Đơn Hàng Shop</span>
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <ShoppingBag size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#24140A]">
              {orders.length} Đơn Hàng
            </div>
            <div className="text-[11px] text-gray-500">
              Cà phê hạt, bột & combo hộp quà Tết
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold uppercase tracking-wider">Hồ Sơ Barista Ứng Tuyển</span>
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Briefcase size={18} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#24140A]">
              {applications.length} Ứng Viên
            </div>
            <div className="text-[11px] text-gray-500">
              {applications.filter(a => a.status === 'new').length} hồ sơ mới cần phỏng vấn
            </div>
          </div>

        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-gray-200 gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'students'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
            }`}
          >
            🎓 HỌC VIÊN ACADEMY ({registrations.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
            }`}
          >
            📦 ĐƠN HÀNG SHOP ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'candidates'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
            }`}
          >
            💼 TUYỂN DỤNG BARISTA ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-5 py-2.5 rounded text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
              activeTab === 'funnel'
                ? 'bg-[#2076bd] text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#222222]'
            }`}
          >
            📈 BÁO CÁO PHỄU CHUYỂN ĐỔI (2026)
          </button>
        </div>

        {/* Tab 1: Students CRM */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-[#24140A]">
                Danh Sách Hồ Sơ Đăng Ký Dolphy Academy
              </h3>
              <span className="text-xs text-gray-500">Tự động cập nhật từ form đăng ký online</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF7F2] text-gray-700 uppercase tracking-wider font-bold border-b border-gray-200">
                  <tr>
                    <th className="p-3.5">Mã HV</th>
                    <th className="p-3.5">Họ Và Tên</th>
                    <th className="p-3.5">Điện Thoại / Email</th>
                    <th className="p-3.5">Khóa Học Đăng Ký</th>
                    <th className="p-3.5">Chi Nhánh & Lịch Học</th>
                    <th className="p-3.5">Số Tiền (Cọc / Full)</th>
                    <th className="p-3.5">Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="p-3.5 font-mono font-bold text-[#8C5329]">{reg.id}</td>
                      <td className="p-3.5 font-bold text-gray-900">{reg.fullName}</td>
                      <td className="p-3.5">
                        <div className="font-medium text-gray-800">{reg.phone}</div>
                        <div className="text-gray-400 text-[11px]">{reg.email || 'Không có'}</div>
                      </td>
                      <td className="p-3.5 max-w-xs font-medium text-gray-800">
                        {reg.courseTitle}
                      </td>
                      <td className="p-3.5 text-gray-600 text-[11px]">
                        <div>{reg.branchPreference}</div>
                        <div className="text-gray-400">{reg.preferredSchedule}</div>
                      </td>
                      <td className="p-3.5">
                        <span className="font-extrabold text-[#C0392B]">
                          {reg.amount.toLocaleString('vi-VN')} ₫
                        </span>
                        <span className="block text-[10px] text-gray-500">
                          {reg.paymentOption === 'deposit' ? '(Đặt cọc)' : '(Trọn gói)'}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <select
                          value={reg.status}
                          onChange={(e: any) => updateRegistrationStatus(reg.id, e.target.value)}
                          className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#4A2C11] bg-white"
                        >
                          <option value="new">Mới Đăng Ký</option>
                          <option value="contacted">Đã Liên Hệ Zalo</option>
                          <option value="paid_deposit">Đã Nhận Cọc (2M)</option>
                          <option value="enrolled">Đã Nhập Học</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-[#24140A]">
                Danh Sách Đơn Hàng Cà Phê & Quà Tặng
              </h3>
              <span className="text-xs text-gray-500">Đơn hàng tạo từ website</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF7F2] text-gray-700 uppercase tracking-wider font-bold border-b border-gray-200">
                  <tr>
                    <th className="p-3.5">Mã Đơn</th>
                    <th className="p-3.5">Khách Hàng</th>
                    <th className="p-3.5">Sản Phẩm & Phân Loại Xay</th>
                    <th className="p-3.5">Địa Chỉ Giao Hàng</th>
                    <th className="p-3.5">Tổng Tiền</th>
                    <th className="p-3.5">Hình Thức</th>
                    <th className="p-3.5">Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="p-3.5 font-mono font-bold text-[#8C5329]">{order.id}</td>
                      <td className="p-3.5">
                        <div className="font-bold text-gray-900">{order.customerName}</div>
                        <div className="text-gray-500 text-[11px]">{order.phone}</div>
                      </td>
                      <td className="p-3.5 max-w-xs space-y-1">
                        {order.items.map((it, i) => (
                          <div key={i} className="text-gray-700">
                            <strong>{it.quantity}x</strong> {it.product.name}
                            <span className="block text-[10px] text-gray-400">{it.grindOption}</span>
                          </div>
                        ))}
                      </td>
                      <td className="p-3.5 text-gray-600 max-w-xs truncate">
                        {order.address}
                        {order.note && <div className="text-[10px] text-gray-400 italic">Note: {order.note}</div>}
                      </td>
                      <td className="p-3.5 font-extrabold text-[#C0392B]">
                        {order.totalAmount.toLocaleString('vi-VN')} ₫
                      </td>
                      <td className="p-3.5 uppercase font-bold text-[10px] text-gray-600">
                        {order.paymentMethod === 'vietqr' ? 'VietQR (Chuyển khoản)' : 'COD (Tiền mặt)'}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={order.status}
                          onChange={(e: any) => updateOrderStatus(order.id, e.target.value)}
                          className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#4A2C11] bg-white"
                        >
                          <option value="pending">Chờ Xử Lý</option>
                          <option value="confirmed">Đã Xác Nhận</option>
                          <option value="shipping">Đang Giao Hàng</option>
                          <option value="completed">Đã Hoàn Tất</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Candidates */}
        {activeTab === 'candidates' && (
          <div className="bg-white rounded-3xl border border-[#E8E0D5] overflow-hidden shadow-sm">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-[#24140A]">
                Hồ Sơ Ứng Viên Tuyển Dụng Barista & Quản Lý
              </h3>
              <span className="text-xs text-gray-500">Dữ liệu hồ sơ gửi từ Careers Portal</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF7F2] text-gray-700 uppercase tracking-wider font-bold border-b border-gray-200">
                  <tr>
                    <th className="p-3.5">Mã Ứng Viên</th>
                    <th className="p-3.5">Họ Và Tên</th>
                    <th className="p-3.5">Điện Thoại / Email</th>
                    <th className="p-3.5">Vị Trí Ứng Tuyển</th>
                    <th className="p-3.5">Chi Nhánh & Ca Làm</th>
                    <th className="p-3.5">Ghi Chú Kinh Nghiệm</th>
                    <th className="p-3.5">Trạng Thái Xử Lý</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="p-3.5 font-mono font-bold text-[#8C5329]">{app.id}</td>
                      <td className="p-3.5 font-bold text-gray-900">{app.fullName}</td>
                      <td className="p-3.5">
                        <div className="font-medium text-gray-800">{app.phone}</div>
                        <div className="text-gray-400 text-[11px]">{app.email || 'Không có'}</div>
                      </td>
                      <td className="p-3.5 font-semibold text-[#4A2C11]">
                        {app.position}
                      </td>
                      <td className="p-3.5 text-gray-600 text-[11px]">
                        <div>{app.branchPreference}</div>
                        <div className="text-gray-400">{app.shiftPreference}</div>
                      </td>
                      <td className="p-3.5 text-gray-600 max-w-xs text-xs">
                        {app.experienceNotes || 'Chưa có kinh nghiệm (sẽ đào tạo)'}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={app.status}
                          onChange={(e: any) => updateApplicationStatus(app.id, e.target.value)}
                          className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#4A2C11] bg-white"
                        >
                          <option value="new">Hồ Sơ Mới</option>
                          <option value="interview_scheduled">Hẹn Phỏng Vấn</option>
                          <option value="hired">Đã Tuyển Dụng</option>
                          <option value="archived">Lưu Trữ</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Funnel Metrics from Planning Doc */}
        {activeTab === 'funnel' && (
          <div className="bg-white rounded-3xl border border-[#E8E0D5] p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5329]">
                Kế Hoạch Triển Khai 4 Tháng Đầu (Nov 2026 - Feb 2027)
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#24140A] mt-1">
                Mô Hình Phễu Chuyển Đổi & KPIs Đào Tạo Dolphy Academy
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Theo dõi sát sao từng nấc thang chuyển đổi từ lượt hiển thị mạng xã hội đến học viên đóng học phí thực tế.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Tầng 1</div>
                <div className="text-xs font-bold text-gray-600">Lượt Hiển Thị</div>
                <div className="text-lg font-bold text-gray-900">20.000+</div>
                <div className="text-[10px] text-gray-500">TikTok & Meta Vlog</div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Tầng 2</div>
                <div className="text-xs font-bold text-gray-600">Tiếp Cận Web</div>
                <div className="text-lg font-bold text-gray-900">1.000+</div>
                <div className="text-[10px] text-gray-500">Truy cập Landing page</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAEDCD]/30 border border-[#D4A373]/30 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#8C5329] uppercase">Tầng 3</div>
                <div className="text-xs font-bold text-[#4A2C11]">Lượt Quan Tâm</div>
                <div className="text-lg font-bold text-[#4A2C11]">100+</div>
                <div className="text-[10px] text-[#8C5329]">Đăng ký workshop/trial</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAEDCD]/50 border border-[#D4A373]/40 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#8C5329] uppercase">Tầng 4</div>
                <div className="text-xs font-bold text-[#4A2C11]">Leads Tiềm Năng</div>
                <div className="text-lg font-bold text-[#4A2C11]">20</div>
                <div className="text-[10px] text-[#8C5329]">Nhắn tin tư vấn 1-1</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF0E6] border border-[#8C5329]/30 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#8C5329] uppercase">Tầng 5</div>
                <div className="text-xs font-bold text-[#8C5329]">HV Đăng Ký</div>
                <div className="text-lg font-bold text-[#8C5329]">10</div>
                <div className="text-[10px] text-gray-600">Điền form ghi danh</div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#24140A] to-[#4A2C11] text-white text-center space-y-1 shadow-md">
                <div className="text-[10px] font-bold text-[#D4A373] uppercase">Mục Tiêu Tháng</div>
                <div className="text-xs font-bold text-[#FAEDCD]">HV Đóng Học Phí</div>
                <div className="text-xl font-extrabold text-white">5 Học Viên</div>
                <div className="text-[10px] text-green-300 font-bold">35.000.000 ₫</div>
              </div>

            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E0D5] space-y-2 text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#4A2C11] block font-bold text-sm">
                📌 Cơ Chế Vận Hành Tuyển Sinh & Khai Thác Nguồn Cũ (Resell Database):
              </strong>
              <p>
                1. <strong>Tập Ứng Viên Cũ:</strong> Tiếp cận lại hơn 200 ứng viên từng nộp CV ứng tuyển Barista tại Dolphy nhưng chưa trúng tuyển do thiếu kinh nghiệm, mời tham gia khóa đào tạo thực chiến cam kết việc làm.
              </p>
              <p>
                2. <strong>Workshop Trải Nghiệm Cuối Tuần:</strong> Tổ chức định kỳ 2 tuần/lần tại 28 Thảo Điền (Q2) và 1441 Nguyễn Văn Linh (Q7) với mức phí 250k để tạo nguồn học viên nòng cốt.
              </p>
              <p>
                3. <strong>Tự Chủ Nền Tảng:</strong> Toàn bộ dữ liệu khách hàng và học viên được quản lý trực tiếp trên hệ thống Dolphy Coffee Hub, không bị phụ thuộc vào bên thứ ba.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
