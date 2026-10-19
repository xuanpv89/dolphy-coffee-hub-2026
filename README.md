# DOLPHY CAFÉ & ACADEMY - HỆ THỐNG WEBSITE & CẨM NANG VẬN HÀNH 2026 🐬☕

> **Website Chính Thức Của Hệ Sinh Thái Cà Phê Dolphy Café - Dolphy Academy & Specialty Roastery**  
> Kế thừa di sản 13 năm (2013 - 2026, Top 10 Saigon Coffee) kết hợp chuyển đổi số: Học viện đào tạo Barista thực chiến, Cửa hàng cà phê mộc rang xay và Hệ thống quản trị nội bộ (Admin CRM).  
> 🔗 **Website Trực Tuyến**: [https://dolphycafe.vercel.app](https://dolphycafe.vercel.app)  
> 🛡️ **Cổng Quản Trị Nội Bộ (CRM Bí Mật)**: [https://dolphycafe.vercel.app/admin](https://dolphycafe.vercel.app/admin)

---

## 📑 MỤC LỤC TỔNG QUAN

1. [Nhận Diện Thương Hiệu (Brand Identity)](#1-nhận-diện-thương-hiệu-brand-identity)
2. [Hệ Thống Bảng Màu Chuẩn (Color Palette & Tokens)](#2-hệ-thống-bảng-màu-chuẩn-color-palette--tokens)
3. [Quy Chuẩn Font Chữ & Typography](#3-quy-chuẩn-font-chữ--typography)
4. [Tiêu Chuẩn Thiết Kế & Trải Nghiệm Người Dùng (UI/UX)](#4-tiêu-chuẩn-thiết-kế--trải-nghiệm-người-dùng-uiux)
5. [Kiến Trúc Kỹ Thuật & Công Nghệ (Technical Stack)](#5-kiến-trúc-kỹ-thuật--công-nghệ-technical-stack)
6. [Cấu Trúc Thư Mục Dự Án](#6-cấu-trúc-thư-mục-dự-án)
7. [CẨM NANG QUẢN LÝ WEBSITE DÀNH CHO NGƯỜI KHÔNG RÀNH KỸ THUẬT](#7-cẩm-nang-quản-lý-website-dành-cho-người-không-rành-kỹ-thuật)
   - 7.1. Hướng dẫn sử dụng Cổng Quản Trị CRM (`/admin`)
   - 7.2. Quản lý Đăng ký Khóa học Academy & Phễu Tuyển sinh 6 Giai đoạn
   - 7.3. Quản lý Đơn hàng Cà phê Gói (Shop Roastery)
   - 7.4. Quản lý Hồ sơ Tuyển dụng & Ứng viên (Careers)
   - 7.5. Hướng dẫn Chỉnh sửa Menu, Giá tiền, Chi nhánh, Bài viết (File `dolphyData.ts`)
   - 7.6. Hướng dẫn Thay đổi Hình ảnh & Tối ưu dung lượng
   - 7.7. Quy trình Cập nhật Website Tự động (GitHub ➔ Vercel Auto Deploy)
   - 7.8. Cấu hình Tài khoản Ngân hàng Chuyển khoản & Mã VietQR
   - 7.9. Hướng dẫn Khắc phục Sự cố Thường gặp (FAQ / Troubleshooting)
8. [Cài Đặt & Chạy Cục Bộ (Dành Cho Lập Trình Viên)](#8-cài-đặt--chạy-cục-bộ-dành-cho-lập-trình-viên)
9. [Bản Quyền & Thông Tin Liên Hệ](#9-bản-quyền--thông-tin-liên-hệ)

---

## 1. NHẬN DIỆN THƯƠNG HIỆU (BRAND IDENTITY)

* **Tên thương hiệu**: Dolphy Café & Dolphy Academy
* **Câu khẩu hiệu (Slogan)**: *"Happiness in a cup"* (Hạnh phúc trong từng tách cà phê)
* **Thông điệp cốt lõi**: *"My name's DOLPHY. I'm a dolphin. I only serve pure coffee."*
* **Biểu tượng (Icon)**: Chú cá heo thông minh, thân thiện, vui vẻ và nhanh nhẹn. Tượng trưng cho tinh thần của các Barista Dolphier luôn kết nối và mang niềm vui đến khách hàng.
* **Di sản thương hiệu**: Thành lập ngày **20/10/2013** tại Thảo Điền (Quận 2, nay là TP. Thủ Đức). Từng được tạp chí ẩm thực - du lịch uy tín *Words* bình chọn là 1 trong 10 quán cà phê đáng uống nhất TP.HCM liên tiếp các năm 2015, 2016, 2017.
* **Quy mô chuỗi**: 10 chi nhánh phục vụ tại các khu vực sầm uất: Thảo Điền (Quận 2), Phú Mỹ Hưng (Quận 7), Bình Thạnh và Quận 3.
* **Phong cách ngôn ngữ (Tone of Voice)**: Trẻ trung, chuyên nghiệp, ấm áp, gần gũi, đam mê cà phê mộc nguyên bản và đề cao kỹ năng thực chiến.

---

## 2. HỆ THỐNG BẢNG MÀU CHUẨN (COLOR PALETTE & TOKENS)

Mọi thành phần giao diện trên website đều tuân thủ nghiêm ngặt bảng mã màu thương hiệu đã được chuẩn hóa:

| Vai Trò Màu Sắc | Tên Gọi | Mã HEX | Mã RGB | Hướng Dẫn Ứng Dụng Thực Tế |
| :--- | :--- | :--- | :--- | :--- |
| **Màu Nhận Diện Chủ Đạo** | **Dolphy Ocean Blue** | `#2076bd` | `rgb(32, 118, 189)` | Màu thương hiệu cốt lõi: Nút bấm chính, tiêu đề phân mục lớn, thanh Header, icon nổi bật, tab đang chọn, đường viền kích hoạt. |
| **Xanh Đậm (Hover / Gradient)** | **Dolphy Dark Blue** | `#165b94` | `rgb(22, 91, 148)` | Trạng thái hover của nút bấm xanh, dải chuyển màu (gradient) ở các banner Hero, chân trang Footer. |
| **Xanh Sáng (Dark Mode)** | **Dolphy Light Blue** | `#3ba0e6` | `rgb(59, 160, 230)` | Chữ tiêu đề và điểm nhấn icon khi người dùng bật chế độ Giao diện Tối (Dark Mode). |
| **Xanh Băng (Nền Nhẹ)** | **Dolphy Ice Blue** | `#f0f8ff` | `rgb(240, 248, 255)` | Khối nền nhẹ nhàng, thẻ giới thiệu tính năng, nhãn phụ dịu mắt. |
| **Màu Điểm Nhấn Nổi Bật** | **Dolphy Sunshine Amber** | `#FAEA28` | `rgb(250, 234, 40)` | Màu vàng cá heo rực rỡ: Thẻ "BÁN CHẠY", huy hiệu "ƯU ĐÃI", nút Đặt hàng / Giữ chỗ gấp, gạch chân tiêu đề, ngôi sao đánh giá. |
| **Vàng Đậm (Hover CTA)** | **Dolphy Dark Amber** | `#D4C618` | `rgb(212, 198, 24)` | Trạng thái di chuột (hover) trên các nút bấm màu vàng. |
| **Màu Chữ Chính (Light Mode)** | **Dolphy Charcoal Dark** | `#222222` | `rgb(34, 34, 34)` | Văn bản chính, tiêu đề bài viết. Độ tương phản cao êm mắt, thay thế màu đen tuyền `#000000` chống mỏi mắt. |
| **Màu Chữ Phụ / Mô Tả** | **Dolphy Neutral Gray** | `#666666` | `rgb(102, 102, 102)` | Mô tả chi tiết, ngày tháng đăng bài, số giờ học, thông tin phụ. |
| **Nền Trang Tối (Dark Mode)** | **Deep Slate Dark** | `#0f172a` | `rgb(15, 23, 42)` | Màu nền toàn bộ website khi chuyển sang chế độ Dark Mode. |
| **Khối Thẻ Tối (Dark Card)** | **Card Slate Dark** | `#1e293b` | `rgb(30, 41, 59)` | Hộp sản phẩm, khung chi nhánh, modal bài viết trong Dark Mode. |
| **Xanh Quản Trị (Admin)** | **Admin Deep Navy** | `#0b1329` | `rgb(11, 19, 41)` | Nền trang quản trị CRM chuyên biệt. |
| **Thành Công (Success)** | **Emerald Green** | `#16a34a` | `rgb(22, 163, 74)` | Trạng thái: "Đã cọc", "Đã thanh toán", "Đã tuyển", thông báo thành công. |
| **Cảnh Báo / Chờ Duyệt** | **Warning Orange** | `#f59e0b` | `rgb(245, 158, 11)` | Trạng thái: "Chờ liên hệ", "Chờ đặt cọc", "Đang xử lý". |
| **Hủy Bỏ / Lỗi (Error)** | **Rose Red** | `#ef4444` | `rgb(239, 68, 68)` | Trạng thái: "Đã hủy", "Hết hàng", thông báo lỗi. |

---

## 3. QUY CHUẨN FONT CHỮ & TYPOGRAPHY

Dự án sử dụng Google Fonts nhúng trực tiếp tại `index.html`, tối ưu hiển thị 100% tiếng Việt có dấu:

### 3.1. Font Tiêu Đề Chính: `Oswald`
* **Khai báo CSS**: `font-family: 'Oswald', sans-serif;`
* **Đặc tính**: Chữ cô đọng (condensed), viết hoa (UPPERCASE), dứt khoát, mang tinh thần thương hiệu di sản từ 2013 của Dolphy.
* **Ứng dụng**: Toàn bộ tiêu đề trang (H1, H2, H3), tên sản phẩm, tên khóa học, số liệu thống kê nổi bật, nút bấm CTA (chữ in hoa, `letter-spacing: 0.5px - 1px`).
* **Độ đậm (Font Weight)**: `500` (Medium), `600` (Semi-bold), `700` (Bold).

### 3.2. Font Nội Dung Thân: `Montserrat`
* **Khai báo CSS**: `font-family: 'Montserrat', system-ui, -apple-system, sans-serif;`
* **Đặc tính**: Hình học (geometric sans), nét tròn trịa, hiện đại, cực kỳ dễ đọc trên màn hình điện thoại và máy tính bảng.
* **Ứng dụng**: Đoạn văn bản mô tả, nội dung bài viết, bảng giá, biểu mẫu điền thông tin, địa chỉ chi nhánh.
* **Độ đậm (Font Weight)**: `400` (Regular), `500` (Medium), `600` (Semi-bold).

### 3.3. Font Kể Chuyện & Di Sản: `Playfair Display` & `Lora`
* **Khai báo CSS**: `font-family: 'Playfair Display', 'Lora', Georgia, serif;`
* **Đặc tính**: Font có chân (Serif) sang trọng, giàu tính điện ảnh và cảm xúc.
* **Ứng dụng**: Các câu châm ngôn, trích dẫn triết lý thương hiệu, câu chuyện 13 năm di sản Sài Gòn.

---

## 4. TIÊU CHUẨN THIẾT KẾ & TRẢI NGHIỆM NGƯỜI DÙNG (UI/UX)

* **Thiết Kế Mobile-First Đáp Ứng Mọi Thiết Bị**: Tối ưu hoàn hảo từ màn hình điện thoại nhỏ (375px), iPhone Pro Max (430px), iPad (768px - 1024px) đến màn hình máy tính lớn (1920px+).
* **Video Hero Tinh Gọn & Đẹp Mắt**:
  - Tự động chạy nền không giật (`autoplay`, `loop`, `muted`, `playsinline`).
  - Cắt tràn viền điện ảnh để che khoảng viền đen, tạo cảm giác sang trọng.
  - Tích hợp nút chạm để bật/tắt tiếng tinh tế, không chèn bất kỳ lớp quảng cáo rối mắt nào.
* **Hiệu Ứng Cuộn Mượt Mà Chuẩn 60fps/120fps (Hardware-Accelerated)**:
  - Chỉ sử dụng phần cứng GPU composite (`transform: translate3d(...)` và `opacity`).
  - **Tuyệt đối không dùng `filter: blur()` khi cuộn** để triệt tiêu 100% hiện tượng giật hình (lag/jank).
  - Đường cong chuyển động chuẩn của Apple: `0.85s cubic-bezier(0.16, 1, 0.3, 1)`.
  - Nhịp sóng xuất hiện phân tầng (stagger delay) nối đuôi nhau `90ms` tự nhiên.
  - Sử dụng `IntersectionObserver` bất đồng bộ, loại bỏ hoàn toàn việc tính toán vị trí gây nghẽn khung hình.
* **Độc Lập Toạ Độ Cho Cửa Sổ Modal (`createPortal`)**:
  - Tất cả các modal đọc bài viết, xem ảnh phóng to, xem nhanh sản phẩm đều dùng `createPortal(..., document.body)` để luôn hiển thị ngay giữa màn hình độc lập với thanh cuộn trang.
  - Tự động khoá thanh cuộn trang chính (`overflow: hidden`) khi đang mở modal.
  - Hỗ trợ bấm vùng nền đen mờ (backdrop) hoặc phím `Esc` để đóng nhanh.
* **Chế Độ Sáng / Tối (Light & Dark Mode)**: Hỗ trợ chuyển đổi nhanh chỉ bằng 1 nút bấm (biểu tượng Mặt Trời / Mặt Trăng) và tự ghi nhớ lựa chọn của khách qua `localStorage`.
* **Song Ngữ Hoàn Chỉnh (Tiếng Việt / English)**: Chuyển đổi ngôn ngữ tức thì không cần tải lại trang.

---

## 5. KIẾN TRÚC KỸ THUẬT & CÔNG NGHỆ (TECHNICAL STACK)

| Công Nghệ | Phiên Bản | Mục Đích Sử Dụng |
| :--- | :--- | :--- |
| **React** | `19.0.0` | Thư viện giao diện chính, tối ưu hóa xử lý render và hiệu suất cao. |
| **Vite** | `6.2.0` | Công cụ đóng gói mã nguồn siêu tốc, khởi động máy chủ thử nghiệm dưới 300ms. |
| **TypeScript** | `5.7.2` | Ngôn ngữ gõ tĩnh giúp kiểm soát lỗi dữ liệu, đảm bảo website không gặp lỗi bất ngờ. |
| **Tailwind CSS** | `v4.0` | Framework tạo kiểu dáng giao diện với hệ thống class tiện ích hiện đại. |
| **React Router** | `v7.2.0` | Điều hướng trang mượt mà chuẩn Single Page Application (SPA), không bị chớp giật khi chuyển trang. |
| **Lucide React** | `v0.475.0` | Bộ biểu tượng đồ họa vector SVG sắc nét, dung lượng siêu nhẹ. |
| **VietQR Napas247** | API v2 | Tự động tạo mã QR chuyển khoản ngân hàng chuẩn Quốc gia kèm số tiền và mã hóa đơn. |
| **Vercel** | Edge Network | Nền tảng máy chủ đám mây toàn cầu, tự động triển khai mã nguồn khi cập nhật GitHub. |

---

## 6. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
DOLPHY WEBSITE/
├── public/                     # Thư mục chứa hình ảnh tĩnh, logo, video, favicon
│   ├── favicon.ico             # Icon hiển thị trên tab trình duyệt
│   ├── favicon.png             # Icon độ phân giải cao cho điện thoại
│   ├── dolphy-hero-loop.mp4    # Video chạy nền trang chủ
│   └── images/                 # Kho ảnh sản phẩm, chi nhánh, học viện
├── src/
│   ├── components/             # Các khối giao diện dùng chung
│   │   ├── Navbar.tsx          # Thanh điều hướng đầu trang (Logo, Menu, Đổi ngôn ngữ, Giỏ hàng)
│   │   ├── Footer.tsx          # Chân trang (Thông tin pháp lý, Địa chỉ chi nhánh, Mạng xã hội)
│   │   ├── CartDrawer.tsx      # Ngăn kéo giỏ hàng trượt từ phải sang
│   │   ├── CheckoutModal.tsx   # Cửa sổ thanh toán giỏ hàng kèm mã VietQR
│   │   ├── CourseRegisterModal.tsx # Cửa sổ đăng ký học Barista kèm mã VietQR đặt cọc
│   │   ├── ApplicationModal.tsx# Cửa sổ ứng tuyển việc làm trực tuyến
│   │   ├── BackToTop.tsx       # Nút cuộn nhanh lên đầu trang
│   │   └── Toast.tsx           # Hộp thông báo nổi (Thêm giỏ hàng thành công, v.v.)
│   ├── context/
│   │   └── DolphyContext.tsx   # "Bộ não" lưu trữ trạng thái Giỏ hàng, Đơn hàng, Ngôn ngữ, Giao diện
│   ├── data/
│   │   └── dolphyData.ts       # ⭐ FILE DỮ LIỆU CHÍNH: Nơi sửa Menu, Giá tiền, Chi nhánh, Khóa học
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Bộ kích hoạt hiệu ứng cuộn mượt mà không giật
│   ├── i18n/
│   │   └── translations.ts     # Từ điển Song ngữ (Tiếng Việt & Tiếng Anh)
│   ├── pages/                  # Các trang hiển thị chính của website
│   │   ├── Home.tsx            # Trang Chủ (Hero Video, 13 Năm Di Sản, Khóa học, Sản phẩm, Thư viện)
│   │   ├── Academy.tsx         # Trang Học Viện Barista Thực Chiến (Lộ trình 6 buổi, Lịch học, Học phí)
│   │   ├── Shop.tsx            # Cửa hàng Cà phê Hạt & Dụng cụ Pha chế
│   │   ├── Branches.tsx        # Bản đồ & Danh sách 10 Chi nhánh (Có bộ lọc Quận & Giờ mở cửa)
│   │   ├── KnowledgeHub.tsx    # Cẩm nang Cà phê & Tin tức (Kèm cửa sổ đọc bài viết)
│   │   ├── Careers.tsx         # Tuyển dụng Barista & Ca trưởng
│   │   ├── About.tsx           # Câu chuyện Thương hiệu & Tầm nhìn
│   │   ├── Policies.tsx        # Chính sách Đổi trả, Bảo mật & Giao hàng
│   │   └── AdminDashboard.tsx  # ⭐ TRANG QUẢN TRỊ NỘI BỘ (CRM NỘI BỘ)
│   ├── types/
│   │   └── index.ts            # Định nghĩa cấu trúc dữ liệu chuẩn (TypeScript Interfaces)
│   ├── App.tsx                 # Cấu hình đường dẫn URL và bố cục tổng thể
│   ├── index.css               # Định nghĩa màu sắc, font chữ và hiệu ứng chuyển động
│   └── main.tsx                # Điểm khởi đầu của ứng dụng React
├── index.html                  # Khung HTML gốc, nhúng font chữ và thẻ SEO
├── package.json                # Danh sách thư viện và tập lệnh build
└── README.md                   # ⭐ CẨM NANG HƯỚNG DẪN NÀY
```

---

## 7. CẨM NANG QUẢN LÝ WEBSITE DÀNH CHO NGƯỜI KHÔNG RÀNH KỸ THUẬT

Phần này được biên soạn đặc biệt dành cho Quản lý cửa hàng, Trưởng phòng Marketing hoặc Chủ thương hiệu để có thể dễ dàng quản trị, theo dõi đơn hàng và cập nhật nội dung website mà không cần biết viết code.

---

### 7.1. Hướng Dẫn Sử Dụng Cổng Quản Trị CRM (`/admin`)

Website được tích hợp sẵn một hệ thống CRM chuyên nghiệp chạy trực tiếp trên trình duyệt, không cần cài đặt phần mềm bên ngoài:

* **Đường dẫn truy cập**: Bạn chỉ cần thêm `/admin` vào sau địa chỉ web.  
  👉 Ví dụ: **`https://dolphycafe.vercel.app/admin`**
* **Tại đây, bạn có thể xem nhanh các chỉ số kinh doanh**:
  - 📊 **Doanh thu tiềm năng**: Tổng số tiền học phí và đơn hàng cà phê được gửi về hệ thống.
  - 🎓 **Tổng số học viên đăng ký**: Số lượng người đã điền form giữ chỗ khóa học Barista.
  - 🛒 **Tổng số đơn hàng**: Các đơn đặt mua cà phê hạt hoặc dụng cụ từ khách hàng.
  - 👥 **Tổng số hồ sơ ứng tuyển**: Danh sách các bạn trẻ nộp CV xin làm Barista hoặc Quản lý ca.

---

### 7.2. Quản Lý Học Viên Đăng Ký Academy & Phễu Tuyển Sinh

Khi khách hàng bấm *"ĐĂNG KÝ GIỮ CHỖ"* trên trang Học viện, dữ liệu sẽ ngay lập tức được gửi vào CRM tại tab **"Học Viên Academy"**:

1. **Xem thông tin chi tiết**: Bạn sẽ thấy Tên học viên, Số điện thoại, Email, Khóa học mong muốn, Ca học đã chọn, và Số tiền cọc (2.000.000đ).
2. **Theo dõi 6 giai đoạn tư vấn (Quy trình chuẩn)**:
   - 🟡 **Mới đăng ký (`pending`)**: Học viên vừa gửi thông tin trên web, chưa gọi điện tư vấn.
   - 🔵 **Đã liên hệ (`contacted`)**: Tư vấn viên đã gọi điện thoại/Zalo để giải đáp thắc mắc.
   - 🟠 **Chờ cọc (`waiting_deposit`)**: Học viên hẹn ngày chuyển tiền cọc 2 triệu giữ chỗ.
   - 🟢 **Đã cọc (`deposited`)**: Kế toán đã nhận được tiền cọc qua tài khoản ngân hàng.
   - 🟣 **Đã đóng đủ (`paid_full`)**: Học viên đã hoàn tất 100% học phí trước ngày khai giảng.
   - 🎓 **Đang học / Đã tốt nghiệp (`studying` / `graduated`)**: Học viên đang thực hành tại quầy bar Dolphy.
3. **Cập nhật trạng thái**: Bạn chỉ cần nhấp chuột vào ô trạng thái của học viên đó và chọn bước tiếp theo.
4. **Xuất danh sách ra Excel / CSV**: Bấm nút **"Xuất Dữ Liệu" (Download CSV)** ở góc trên để tải file danh sách học viên về máy, mở trực tiếp bằng Microsoft Excel để gửi cho Giảng viên hoặc Kế toán.

---

### 7.3. Quản Lý Đơn Hàng Cà Phê Gói (Shop Roastery)

Tại tab **"Đơn Hàng Shop"**:
* Hiển thị danh sách khách đặt mua: Tên người nhận, Số điện thoại, Địa chỉ giao hàng, Tên sản phẩm, Độ mịn hạt cần xay (Nguyên hạt, Xay Pha Phin, Xay Cold Brew, Xay V60), và Tổng tiền.
* Cập nhật tiến độ giao: **Chờ xác nhận ➔ Đang đóng gói ➔ Đang giao hàng ➔ Hoàn thành**.
* **Lưu ý**: Đối với các món nước pha chế uống ngay (Ly mang đi), website tự động chuyển hướng khách sang hệ sinh thái giao hàng tận nơi **CukCuk** của Dolphy để nhân viên cửa hàng gần nhất nhận đơn in bill ngay lập tức.

---

### 7.4. Quản Lý Hồ Sơ Tuyển Dụng & Ứng Viên (Careers)

Tại tab **"Hồ Sơ Tuyển Dụng"**:
* Xem danh sách ứng viên xin việc: Họ tên, Năm sinh, Vị trí (Barista Full-time / Part-time / Ca trưởng), Chi nhánh muốn làm việc, Kinh nghiệm trước đây.
* **Xem CV**: Bấm vào liên kết CV đính kèm để mở hồ sơ năng lực của ứng viên.
* Đổi trạng thái tuyển dụng: **Chờ duyệt ➔ Đã liên hệ ➔ Hẹn phỏng vấn ➔ Trúng tuyển ➔ Từ chối**.

---

### 7.5. Hướng Dẫn Chỉnh Sửa Menu, Giá Tiền, Chi Nhánh, Bài Viết

Toàn bộ nội dung hiển thị trên website được quản lý tập trung tại duy nhất một file:  
📁 **`src/data/dolphyData.ts`**

Bạn có thể mở file này bằng ứng dụng **Notepad**, **Visual Studio Code** hoặc trực tiếp trên **GitHub.com**:

#### Ví dụ 1: Thay đổi Số điện thoại Hotline hoặc Email của Dolphy
Tìm đoạn mã `brandInfo` ở đầu file và sửa chữ trong dấu ngoặc kép:
```typescript
export const brandInfo = {
  name: 'Dolphy Café & Coffee Hub',
  slogan: 'Happiness in a cup',
  hotline: '0938 084 985',          // <-- Sửa số điện thoại mới tại đây
  email: 'contact@dolphycafe.com',   // <-- Sửa email mới tại đây
  ...
};
```

#### Ví dụ 2: Thay đổi Giá tiền hoặc Tên Khóa Học Barista
Tìm đến phần `coursesData`, tìm khóa học cần sửa:
```typescript
{
  id: 'barista-thuc-chien',
  title: 'Khóa Học Barista Thực Chiến Dolphy',
  price: 8000000,          // <-- Giá gốc (ví dụ 8.000.000đ)
  discountPrice: 7000000,  // <-- Giá ưu đãi thực thu (ví dụ 7.000.000đ)
  depositAmount: 2000000,  // <-- Tiền cọc giữ chỗ (ví dụ 2.000.000đ)
  duration: '2 - 3 tuần',  // <-- Thời lượng khóa học
  ...
}
```

#### Ví dụ 3: Thêm hoặc Sửa Địa Chỉ Chi Nhánh
Tìm đến phần `branchesData`:
```typescript
{
  id: 'branch-10',
  name: 'Dolphy Café - Bà Huyện Thanh Quan',
  address: '08 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP.HCM',
  phone: '0938 084 985',
  openHours: '07:00 - 22:00',
  mapUrl: 'https://maps.app.goo.gl/...', // Link Google Maps dẫn đường
  ...
}
```

> [!IMPORTANT]
> **Quy Tắc Vàng Khi Sửa File**:
> 1. Giữ nguyên dấu phẩy `,` ở cuối mỗi dòng.
> 2. Chữ phải luôn nằm trong cặp dấu nháy đơn `'...'` hoặc nháy kép `"..."`.
> 3. Số tiền viết liền không có dấu chấm (Ví dụ: `7000000`, không viết `7.000.000`).

---

### 7.6. Hướng Dẫn Thay Đổi Hình Ảnh & Tối Ưu Dung Lượng

Để website tải nhanh như chớp và không bị giật lag trên điện thoại:

1. **Chuẩn kích thước hình ảnh khuyến nghị**:
   - **Ảnh Banner lớn / Hero**: Tỉ lệ 16:9 (Chiều rộng 1920px, Chiều cao 1080px).
   - **Ảnh Sản phẩm Cà phê**: Tỉ lệ Vuông 1:1 (Chiều rộng 800px, Chiều cao 800px).
   - **Ảnh Tin tức / Chi nhánh / Lớp học**: Tỉ lệ 4:3 hoặc 16:9 (Chiều rộng 1200px, Chiều cao 900px).
2. **Nén giảm dung lượng trước khi tải lên**:
   - Truy cập trang web miễn phí [TinyPNG.com](https://tinypng.com).
   - Kéo ảnh vào để nén. Đảm bảo dung lượng mỗi tấm ảnh **dưới 300 KB** (tránh tải ảnh gốc 5MB - 10MB từ điện thoại lên làm chậm web).
3. **Cách lưu ảnh vào dự án**:
   - Đặt file ảnh vào thư mục `public/images/`. Ví dụ: `public/images/ca-phe-goi-moi.jpg`.
   - Trong file `src/data/dolphyData.ts`, bạn chỉ cần điền đường dẫn: `image: '/images/ca-phe-goi-moi.jpg'`.

---

### 7.7. Quy Trình Cập Nhật Website Tự Động (GitHub ➔ Vercel Auto Deploy)

Bạn **không cần** thuê kỹ sư máy chủ hay cài đặt hosting phức tạp. Hệ thống đã được thiết lập quy trình tự động hóa 100%:

```mermaid
flowchart LR
    A["Chỉnh sửa file<br>(dolphyData.ts hoặc ảnh)"] --> B["Lưu lại & Commit<br>lên GitHub nhánh 'main'"]
    B --> C["Vercel Cloud<br>Tự động nhận diện"]
    C --> D["Biên dịch siêu tốc<br>(Chỉ mất 30 - 60 giây)"]
    D --> E["Website Trực Tuyến<br>Cập Nhật Thành Công! 🎉"]
```

* **Nếu sửa trực tiếp trên trình duyệt qua GitHub**:
  1. Mở trang GitHub của dự án: `https://github.com/xuanpv89/dolphy-coffee-hub-2026`.
  2. Bấm vào file cần sửa (ví dụ `src/data/dolphyData.ts`).
  3. Bấm biểu tượng cây bút chì ✏️ để chỉnh sửa chữ/giá tiền.
  4. Bấm nút xanh **"Commit changes..."** ở góc phải trên.
  5. Chờ 1 phút, mở lại trang `https://dolphycafe.vercel.app` là bạn sẽ thấy nội dung mới xuất hiện ngay lập tức!

---

### 7.8. Cấu Hình Tài Khoản Ngân Hàng & Mã VietQR Chuyển Khoản

Khi học viên đặt cọc khóa học hoặc khách đặt mua cà phê chọn *"Chuyển khoản QR"*, website sẽ tự động gọi API Quốc gia VietQR để vẽ ra mã QR có sẵn số tiền và nội dung hóa đơn:

* **Tài khoản thụ hưởng hiện tại**:
  - **Ngân hàng**: MB Bank (Ngân hàng Quân Đội)
  - **Số tài khoản**: `0938084985`
  - **Tên chủ tài khoản**: `DOLPHY CAFÉ`
* **Nơi điều chỉnh thông tin tài khoản**:
  - Mở file `src/i18n/translations.ts`.
  - Tìm các dòng `checkout.bank_name`, `checkout.bank_acc`, `checkout.bank_owner` để thay số tài khoản hoặc ngân hàng mới khi cần.

---

### 7.9. Hướng Dẫn Khắc Phục Sự Cố Thường Gặp (FAQ / Troubleshooting)

#### Q1: Tôi vừa sửa chữ trên GitHub xong nhưng mở web vẫn thấy chữ cũ?
* **Giải pháp**: Do trình duyệt lưu bộ nhớ đệm (cache) trang web cũ. Bạn hãy nhấn tổ hợp phím **`Ctrl + F5`** (trên Windows) hoặc **`Cmd + Shift + R`** (trên máy Mac) để làm mới hoàn toàn. Trên điện thoại, hãy thử mở bằng tab ẩn danh.

#### Q2: Khách hàng báo không mở được bài viết trên điện thoại?
* **Giải pháp**: Lỗi này đã được khắc phục triệt để bằng công nghệ Portal độc lập. Mọi bài viết hiện tại đều mở mượt mà ngay tâm màn hình. Nếu khách dùng phiên bản cũ, chỉ cần tải lại trang là xong.

#### Q3: Dữ liệu học viên đăng ký trên trang `/admin` có bị mất khi tắt máy không?
* **Giải pháp**: Dữ liệu được lưu trữ an toàn trong bộ nhớ trình duyệt `localStorage` của máy bạn. Định kỳ mỗi tuần, bạn chỉ cần bấm nút **"Xuất Dữ Liệu" (Download CSV)** trên trang Admin để lưu một bản sao lưu (backup) an toàn vào máy tính hoặc Google Drive.

---

## 8. CÀI ĐẶT & CHẠY CỤC BỘ (DÀNH CHO LẬP TRÌNH VIÊN)

Nếu lập trình viên muốn tải mã nguồn về máy để nâng cấp tính năng mới:

### Yêu cầu môi trường
* Node.js phiên bản 18.0 trở lên (khuyên dùng Node 20 hoặc 22 LTS).
* Trình quản lý gói `npm` hoặc `pnpm`.

### Các bước cài đặt
```bash
# 1. Tải mã nguồn về máy
git clone https://github.com/xuanpv89/dolphy-coffee-hub-2026.git
cd dolphy-coffee-hub-2026

# 2. Cài đặt các thư viện phụ thuộc
npm install

# 3. Khởi chạy máy chủ thử nghiệm cục bộ
npm run dev
# Mở trình duyệt tại: http://localhost:5173

# 4. Kiểm tra lỗi và đóng gói sản phẩm trước khi đưa lên mạng
npm run build

# 5. Xem thử bản đóng gói (Production Preview)
npm run preview
```

---

## 9. BẢN QUYỀN & THÔNG TIN LIÊN HỆ

* **Chủ sở hữu**: Hệ thống Dolphy Café & Dolphy Academy © 2013 - 2026.
* **Địa chỉ trụ sở chính**: 28 Thảo Điền, Phường Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh.
* **Hotline hỗ trợ khách hàng**: `0938 084 985`
* **Email liên hệ**: `contact@dolphycafe.com`
* **Tuyển dụng**: `trangnguyen.dolphy@gmail.com`
* **Kênh truyền thông chính thức**:
  - Facebook: [https://www.facebook.com/dolphycafe](https://www.facebook.com/dolphycafe)
  - Instagram: [https://www.instagram.com/dolphycafe/](https://www.instagram.com/dolphycafe/)
  - TikTok: [https://www.tiktok.com/@_.dolphycafe._](https://www.tiktok.com/@_.dolphycafe._)
* **Giấy phép mã nguồn**: Dự án độc quyền thuộc bản quyền của Dolphy Café. Mọi hành vi sao chép không xin phép đều bị nghiêm cấm.

---
*Tài liệu được cập nhật và kiểm thử toàn diện vào tháng 10 năm 2026.*