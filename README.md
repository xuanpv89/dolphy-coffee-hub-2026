# Dolphy Coffee Hub 2026 ☕🌿

> **Website chính thức của Hệ sinh thái Cà phê Dolphy Caf� - Dolphy Academy & Specialty Roastery.**
> Kế thừa di sản 13 năm (thành lập từ năm 2013, Top 10 Saigon Coffee) kết hợp chiến lược mở rộng đào tạo thực chiến và thương mại điện tử chuyên nghiệp.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xuanpv89/dolphy-coffee-hub-2026)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)

---

## 🌟 Tổng Quan Hệ Sinh Thái Dolphy 2026

Dự án được xây dựng dựa trên dữ liệu nghiên cứu thị trường, kế hoạch kinh doanh và toàn bộ tư liệu thực tế của Dolphy Caf�:
1. **Di sản & Hệ thống 10 Chi nhánh (Heritage & 10 Branches)**:
   - Thảo Điền (Quận 2): Nguyễn Bá Huân, Xuân Thủy, Thảo Điền, Quốc Hương, Tống Hữu Định,...
   - Bình Thạnh: Nguyễn Cửu Vân, Điện Biên Phủ,...
   - Quận 7 (Phú Mỹ Hưng): Hưng Vượng, Hà Huy Tập,...
   - Tích hợp bộ lọc tiện ích (Máy lạnh, Ngoài trời, Chỗ đỗ xe hơi, Thân thiện thú cưng, Ổ cắm làm việc) và Google Maps chỉ đường.
2. **Dolphy Academy - Học viện Đào tạo Pha chế Thực chiến**:
   - Khóa học trọng tâm: **Barista Thực Chiến (21 giờ - 7 buổi)** - Thực hành 100% tại quầy bar cửa hàng Dolphy thật, giáo trình chuẩn SCA, cam kết ưu tiên tuyển dụng ngay vào chuỗi.
   - Các khóa chuyên đề: Latte Art & Sensory Nâng cao, Workshop Cà phê Thủ công cuối tuần.
   - Form đăng ký trực tuyến kèm tạo mã QR đặt cọc (2.000.000đ) qua chuẩn VietQR Napas247.
3. **Cửa hàng Cà phê Hạt & Dụng cụ (Specialty Roastery Shop)**:
   - Cà phê hạt nguyên chất tuyển chọn: Dolphy Blend Signature, Arabica Cầu Đất Khuyên Dùng, Robusta Honey Bảo Lộc, Phin Giấy Drip Bag tiện lợi.
   - Tùy chọn xay linh hoạt: Nguyên hạt (Espresso), Xay Pha Phin, Xay Cold Brew, Xay V60/Pour Over.
   - Giỏ hàng động, chính sách quà tặng kèm (Tặng Phin nhôm cao cấp khi mua từ 2 gói).
   - Thanh toán chuyển khoản tự động tích hợp VietQR.
4. **Knowledge Hub - Cẩm nang Cà phê & Barista**:
   - Hướng dẫn pha chế Specialty Coffee, mẹo chỉnh máy, đánh sữa Latte Art, phân biệt Fine Robusta và Arabica Cầu Đất.
5. **Tuyển dụng & Phát triển Nghề nghiệp (Careers)**:
   - Vị trí Barista Full-time & Part-time, Giám sát Ca (Shift Supervisor).
   - Form ứng tuyển trực tiếp đính kèm CV và chọn chi nhánh làm việc mong muốn.
6. **Hệ thống Quản trị Nội bộ (Admin CRM Portal - `/admin`)**:
   - Quản lý học viên đăng ký Academy & theo dõi 6 giai đoạn phễu tư vấn (Mới đăng ký ➔ Đã liên hệ ➔ Chờ cọc ➔ Đã cọc ➔ Đã đóng đủ ➔ Đang học).
   - Quản lý đơn hàng mua cà phê hạt, kiểm tra trạng thái thanh toán và giao vận.
   - Quản lý hồ sơ ứng viên tuyển dụng & trạng thái phỏng vấn.
   - Đồng bộ tự động LocalStorage và hỗ trợ xuất dữ liệu JSON/Excel.

---

## 🚀 Cài Đặt & Chạy Cục Bộ (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/xuanpv89/dolphy-coffee-hub-2026.git
cd dolphy-coffee-hub-2026

# 2. Cài đặt dependencies
npm install

# 3. Khởi chạy development server
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173/`

### Build Production & Preview:
```bash
npm run build
npm run preview
```

---

## 📁 Cấu Trúc Dự Án

```
DOLPHY WEBSITE/
├── public/
│   ├── images/              # Hình ảnh thực tế trích xuất từ Dolphy Caf� & Academy
│   └── favicon.svg
├── src/
│   ├── components/          # UI Components
│   │   ├── Navbar.tsx       # Thanh điều hướng đa tầng + Giỏ hàng badge
│   │   ├── Footer.tsx       # Chân trang đầy đủ thông tin pháp lý & chi nhánh
│   │   ├── CartDrawer.tsx   # Giỏ hàng trượt với tùy chọn xay & quà tặng
│   │   ├── CheckoutModal.tsx# Thanh toán VietQR động
│   │   ├── CourseRegisterModal.tsx # Đăng ký khóa học & VietQR đặt cọc
│   │   ├── ApplicationModal.tsx    # Nộp hồ sơ tuyển dụng
│   │   └── Toast.tsx        # Thông báo tương tác
│   ├── context/
│   │   └── DolphyContext.tsx # Quản lý State: Giỏ hàng, Đơn hàng, Học viên, Tuyển dụng
│   ├── data/
│   │   └── dolphyData.ts    # Dữ liệu 10 chi nhánh, Khóa học, Sản phẩm, Blog, Tuyển dụng
│   ├── pages/
│   │   ├── Home.tsx         # Trang chủ hiện đại, video/banner, highlight di sản & academy
│   │   ├── Academy.tsx      # Trang Học viện Barista Thực chiến chi tiết
│   │   ├── Shop.tsx         # Trang Sản phẩm Cà phê Hạt & Quà tặng
│   │   ├── Branches.tsx     # Trang 10 Chi nhánh có lọc & bản đồ
│   │   ├── KnowledgeHub.tsx # Trang Blog kiến thức pha chế
│   │   ├── Careers.tsx      # Trang Tuyển dụng nhân sự
│   │   ├── About.tsx        # Câu chuyện thương hiệu từ 2013
│   │   ├── Policies.tsx     # Chính sách bảo mật & thanh toán
│   │   └── AdminDashboard.tsx # Cổng CRM quản trị phễu học viên & đơn hàng
│   ├── types/
│   │   └── index.ts         # TypeScript definitions
│   ├── App.tsx              # Router 9 trang
│   ├── main.tsx
│   └── index.css            # Tailwind CSS styling
├── vercel.json              # Cấu hình Single Page Application routing cho Vercel
├── package.json
└── vite.config.ts
```

---

## 🌐 Triển Khai Lên Vercel (Deployment)

Dự án đã được cấu hình sẵn file `vercel.json` hỗ trợ Single Page Application (SPA) routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Bạn có thể import trực tiếp repository `xuanpv89/dolphy-coffee-hub-2026` từ tài khoản Vercel: [vercel.com/xuanpv89](https://vercel.com/xuanpv89).

---

## 📜 Bản Quyền & Giấy Phép

© 2013 - 2026 **Dolphy Caf� & Dolphy Academy**. All rights reserved.
Phát triển bởi đội ngũ công nghệ Dolphy Hub.

