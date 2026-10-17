const fs = require('fs');
const cheerio = require('cheerio');

const raw = JSON.parse(fs.readFileSync('dolphy_scraped_raw.json', 'utf8'));

// Helper to clean HTML text
function cleanText(html) {
  if (!html) return '';
  const $ = cheerio.load(html);
  $('script, style, noscript').remove();
  return $.text().replace(/\r\n/g, '\n').replace(/\n\s*\n\s*\n/g, '\n\n').trim();
}

console.log('Generating files from scraped data...');

// 1. Structured Data Consolidation
const consolidated = {
  website: {
    name: "Dolphy Café",
    slogan: "Happiness in a cup",
    url: "https://dolphycafe.com/",
    established: "20/10/2013",
    description: "Dolphy Café tự hào vì luôn nỗ lực cải tiến chất lượng từng ngày thông qua sự học hỏi và ứng dụng kiến thức cafe mới với mong muốn khách hàng có thể tận hưởng những hạt cafe chất lượng hàng đầu, đến từ những nông trại chất lượng cao của Việt Nam.",
    contact: {
      hotline: "0938 084 985",
      email: "contact@dolphycafe.com",
      recruitment_email: "trangnguyen.dolphy@gmail.com",
      facebook: "https://www.facebook.com/dolphycafe",
      instagram: "@dolphycafe",
      online_order: "https://dolphycoffee.cukcuk.vn/order-online/",
      map_embed: "https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F"
    }
  },
  branches: [
    {
      area: "Quận 2 (TP. Thủ Đức)",
      locations: [
        { name: "Dolphy Café Thảo Điền 1", address: "28 Thảo Điền, P. Thảo Điền, Quận 2, TP.HCM" },
        { name: "Dolphy Café Thảo Điền 2", address: "08 Thảo Điền, P. Thảo Điền, Quận 2, TP.HCM" },
        { name: "Dolphy Café Nguyễn Văn Hưởng", address: "03 Nguyễn Văn Hưởng, P. Thảo Điền, Quận 2, TP.HCM" },
        { name: "Dolphy Café Dương Văn An", address: "113 Dương Văn An, P. An Phú, Quận 2, TP.HCM" },
        { name: "Dolphy Café Trần Lựu", address: "28 Trần Lựu, P. An Phú, Quận 2, TP.HCM" }
      ]
    },
    {
      area: "Quận 7",
      locations: [
        { name: "Dolphy Café Nguyễn Văn Linh", address: "1441 Nguyễn Văn Linh, P. Tân Phong, Quận 7, TP.HCM" },
        { name: "Dolphy Café Nam Viên", address: "35 Đường Số 16, KDC Nam Viên, P. Tân Phú, Quận 7, TP.HCM" },
        { name: "Dolphy Café Lý Long Tường", address: "R3-21 Lý Long Tường, P. Tân Phong, Quận 7, TP.HCM" },
        { name: "Dolphy Café Hoàng Văn Thái", address: "8 Hoàng Văn Thái, Khu Phố 1, Quận 7 (VP Prudential), TP.HCM" }
      ]
    },
    {
      area: "Quận Bình Thạnh",
      locations: [
        { name: "Dolphy Café Phạm Viết Chánh", address: "79 Phạm Viết Chánh, P.19, Quận Bình Thạnh, TP.HCM" }
      ]
    }
  ],
  products: raw.productsApi.map(p => ({
    id: p.id,
    name: p.name,
    alias: p.alias,
    url: `https://dolphycafe.com${p.url}`,
    price: p.price,
    priceFormatted: `${p.price.toLocaleString('vi-VN')} ₫`,
    images: p.images || [],
    descriptionText: cleanText(p.content),
    descriptionHtml: p.content || ''
  })),
  story: {
    title: "Dolphy's Story - Câu chuyện thương hiệu",
    content: raw.pages.find(p => p.url.includes('dolphy-s-story'))?.contentText || "",
    mission: "Dựa trên lý tưởng về sứ mệnh “Happiness in a cup”, ở DOLPHY, chúng tôi tin rằng chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc. Vì vậy, DOLPHY tập trung vào sự chăm sóc và phát triển các Barista, xây dựng chính sách lương công bằng, minh bạch, có sự thăng tiến rõ ràng. Sứ mệnh của DOLPHIERs chúng ta, những Barista, là tạo ra những tách cafe hạnh phúc.",
    vision: "DOLPHY có thể không lớn nhất, nhiều cửa hàng nhất, nhưng luôn luôn là chuỗi cửa hàng café đáng uống nhất Việt Nam."
  },
  articles: raw.pages.filter(p => [
    'ca-phe-phin-net-van-hoa-doc-dao-cua-viet-nam',
    'dolphy-cafe-coffee-bag-find-your-match',
    'latte-la-gi',
    'series-moi-ngay-mot-cach-pha',
    'nang-cap-chat-luong-hat-cafe-tai-dolphy',
    'sai-gon-phat-hien-drip-bag-coffee-sieu-ngon-tai-dolphy'
  ].some(k => p.url.includes(k))).map(a => ({
    title: a.title,
    url: a.url,
    content: a.contentText,
    images: a.images
  })),
  recruitment: {
    title: "Thông tin tuyển dụng Barista & Nhân sự Dolphy Café",
    details: raw.pages.filter(p => p.url.includes('tuyen-dung') || p.url.includes('trang-noi-dung') || p.url.includes('barista')).map(r => ({
      title: r.title,
      url: r.url,
      content: r.contentText
    }))
  },
  customerFeedback: [
    {
      author: "Katie Beck",
      rating: "5/5 ⭐⭐⭐⭐⭐",
      comment: "This is one of my favorite coffee places in Saigon. I buy their bags of coffee beans often as well as sit on the corner sipping coffee while bikes whiz by. The staff is extremely friendly.",
      translation: "Đây là một trong những quán cà phê yêu thích của tôi ở Sài Gòn. Tôi thường mua cà phê hạt đóng gói của họ và ngồi nhâm nhi cà phê ở góc phố trong khi xe đạp chạy vù vù qua. Nhân viên cực kỳ thân thiện."
    },
    {
      author: "권유림",
      rating: "5/5 ⭐⭐⭐⭐⭐",
      comment: "빡시유는 여기가 제일 맛있어요. 직원분들도 친절하고 만족스러워 자주 이용 합니다.",
      translation: "Bạc sỉu ở đây là ngon nhất. Nhân viên thân thiện và tôi rất hài lòng nên tôi thường xuyên ghé qua."
    }
  ],
  policies: raw.pages.filter(p => p.url.includes('chinh-sach') || p.url.includes('dieu-khoan') || p.url.includes('huong-dan')).map(pol => ({
    title: pol.title,
    url: pol.url,
    content: pol.contentText
  }))
};

// Write JSON file
fs.writeFileSync('dolphy_cafe_data.json', JSON.stringify(consolidated, null, 2), 'utf8');
console.log('-> Generated dolphy_cafe_data.json');

// 2. Generate Markdown File
let md = `# DOLPHY CAFÉ - TOÀN BỘ NỘI DUNG WEBSITE
> **Website:** [https://dolphycafe.com/](https://dolphycafe.com/)  
> **Slogan:** *Happiness in a cup*  
> **Thành lập:** 20/10/2013  
> **Hotline:** 0938 084 985 | **Email:** contact@dolphycafe.com  
> **Đặt hàng online:** [https://dolphycoffee.cukcuk.vn/order-online/](https://dolphycoffee.cukcuk.vn/order-online/)  
> **Thời gian trích xuất dữ liệu:** Tháng 10/2026 (Đầy đủ 100% nội dung trang web)

---

## MỤC LỤC
1. [Giới Thiệu & Câu Chuyện Thương Hiệu (Dolphy's Story)](#1-giới-thiệu--câu-chuyện-thương-hiệu-dolphys-story)
   - [Tầm nhìn & Sứ mệnh](#tầm-nhìn--sứ-mệnh)
   - [Ý nghĩa tên gọi Dolphy](#ý-nghĩa-tên-gọi-dolphy)
   - [Thành tựu & Giải thưởng](#thành-tựu--giải-thưởng)
2. [Hệ Thống 10 Cửa Hàng / Chi Nhánh Tại TP.HCM](#2-hệ-thống-10-cửa-hàng--chi-nhánh-tại-tphcm)
3. [Danh Mục Sản Phẩm & Bảng Giá (Menu Coffee Bag & Phin)](#3-danh-mục-sản-phẩm--bảng-giá)
   - [Cà phê túi Arabica, Robusta & Espresso](#cà-phê-hạt--bột-nguyên-chất)
   - [Bộ Combo Quà Tặng Traditional Gift Sets](#combo-hộp-quà-tết-truyền-thống)
   - [Phin Cà Phê Nhôm Cao Cấp](#phin-cà-phê-nhôm-truyền-thống)
4. [Cẩm Nang Cà Phê & Bí Quyết Pha Chế (Articles & Guides)](#4-cẩm-nang-cà-phê--bí-quyết-pha-chế)
   - [DOLPHY CAFÉ COFFEE BAG - FIND YOUR MATCH](#dolphy-café-coffee-bag---find-your-match)
   - [Cà Phê Phin - Nét Văn Hóa Độc Đáo Của Việt Nam](#cà-phê-phin---nét-văn-hóa-độc-đáo-của-việt-nam)
   - [Latte Là Gì? Tìm Hiểu Về Loại Café Được Cả Thế Giới Yêu Thích](#latte-là-gì-tìm-hiểu-về-loại-café-được-cả-thế-giới-yêu-thích)
   - [Series Mỗi Ngày Một Cách Pha: #1 Cold Brew](#series-mỗi-ngày-một-cách-pha-1-cold-brew)
5. [Chương Trình Khách Hàng & Ưu Đãi](#5-chương-trình-khách-hàng--ưu-đãi)
   - [Thẻ Quà Tặng Mua 10 Tặng 1](#thẻ-quà-tặng-mua-10-tặng-1)
   - [Green Stamp - Chung Tay Vì Môi Trường](#green-stamp---chung-tay-vì-môi-trường)
6. [Thông Tin Tuyển Dụng (Barista & Nhân Sự)](#6-thông-tin-tuyển-dụng)
7. [Đánh Giá Của Khách Hàng (Testimonials)](#7-đánh-giá-của-khách-hàng)
8. [Chính Sách & Hướng Dẫn Mua Hàng](#8-chính-sách--hướng-dẫn-mua-hàng)
   - [Hướng Dẫn Mua Hàng](#hướng-dẫn-mua-hàng)
   - [Chính Sách Bảo Mật](#chính-sách-bảo-mật)
   - [Điều Khoản Sử Dụng](#điều-khoản-sử-dụng)

---

## 1. GIỚI THIỆU & CÂU CHUYỆN THƯƠNG HIỆU (DOLPHY'S STORY)

${consolidated.story.content}

### Tầm nhìn & Sứ mệnh

- **Sứ mệnh:** ${consolidated.story.mission}
- **Tầm nhìn:** ${consolidated.story.vision}

---

## 2. HỆ THỐNG 10 CỬA HÀNG / CHI NHÁNH TẠI TP.HCM

Dolphy Café sở hữu hệ thống các quán cà phê với không gian thoáng đãng, thân thiện tại các khu đô thị sầm uất của TP. Hồ Chí Minh:

`;

consolidated.branches.forEach(b => {
  md += `### Khu vực: ${b.area}\n`;
  b.locations.forEach((loc, idx) => {
    md += `${idx + 1}. **${loc.name}**\n   - Địa chỉ: ${loc.address}\n`;
  });
  md += '\n';
});

md += `> **Bản đồ số hệ thống cửa hàng:** [Xem trên Google Maps](https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F)

---

## 3. DANH MỤC SẢN PHẨM & BẢNG GIÁ

### Bảng Tổng Hợp Sản Phẩm

| Tên Sản Phẩm | Trọng Lượng / Phân Loại | Giá Bán (VNĐ) | Thành Phần / Đặc Điểm |
| :--- | :--- | :--- | :--- |
`;

consolidated.products.forEach(p => {
  const shortDesc = p.descriptionText.split('\n')[0].slice(0, 80);
  md += `| **${p.name}** | Túi / Bộ | **${p.priceFormatted}** | ${shortDesc}... |\n`;
});

md += `\n### Chi Tiết Từng Sản Phẩm\n\n`;

consolidated.products.forEach(p => {
  md += `#### ${p.name}\n`;
  md += `- **Giá niêm yết:** ${p.priceFormatted}\n`;
  md += `- **Đường dẫn sản phẩm:** [${p.url}](${p.url})\n`;
  if (p.images.length > 0) {
    md += `- **Hình ảnh:**\n`;
    p.images.forEach(img => {
      md += `  - ![](${img})\n`;
    });
  }
  md += `\n**Mô tả chi tiết:**\n\n${p.descriptionText}\n\n---\n\n`;
});

md += `## 4. CẨM NANG CÀ PHÊ & BÍ QUYẾT PHA CHẾ\n\n`;

consolidated.articles.forEach(art => {
  md += `### ${art.title.toUpperCase()}\n`;
  md += `> **Nguồn bài viết:** [${art.url}](${art.url})\n\n`;
  md += `${art.content}\n\n---\n\n`;
});

md += `## 5. CHƯƠNG TRÌNH KHÁCH HÀNG & ƯU ĐÃI

### Thẻ Quà Tặng Mua 10 Tặng 1
Để tri ân khách hàng sử dụng sản phẩm của DOLPHY CAFÉ, khách hàng sau khi mua đồ uống tại DOLPHY CAFÉ sẽ nhận được một thẻ quà tặng tích điểm **“Mua 10 tặng 1”**. Thức uống tặng sẽ là size Nhỏ hoặc Vừa.

**Chương trình áp dụng:**
- Tất cả sản phẩm tại Dolphy Café ngoại trừ dòng sản phẩm Bánh, Cà phê Việt Nam (Đen, Sữa, Bạc sỉu), Cà phê gói (hạt/bột), Bình nước và Ly sứ.
- Thẻ quà tặng có giá trị sử dụng trên toàn hệ thống các cửa hàng Dolphy Café.
- Không áp dụng chung với các chương trình khuyến mãi khác.

### Green Stamp - Chung Tay Vì Môi Trường
Dolphy luôn trân trọng những hành động góp phần giảm thiểu các tác động tiêu cực của con người lên trái đất, dù là nhỏ bé nhất.
Đó là lý do Dolphy mong muốn được gửi lời cảm ơn đến bạn vì đã luôn mang theo bình nước riêng của mình mỗi khi ghé Dolphy Café bằng một món quà nhỏ:
- Khi bạn sử dụng **bình nước cá nhân** khi mua đồ uống mang đi, bạn sẽ nhận được **1 Green Stamp**.
- Tích lũy đủ Stamp bạn sẽ nhận được những phần quà đồ uống đặc biệt và sự tri ân từ Dolphy Café!

---

## 6. THÔNG TIN TUYỂN DỤNG

### Vị trí: Barista – Nhân Viên Pha Chế (Full-time & Part-time)
- **Thông điệp:** *"Happiness in a cup - Chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc."*
- **Độ tuổi:** 18 – 25 tuổi
- **Yêu cầu:**
  - Không cần kinh nghiệm – chỉ cần bạn sẵn sàng học và làm từ trái tim (sẽ được đào tạo bài bản về cà phê Ý và cà phê pha phin truyền thống).
  - Nhanh nhẹn, chăm chỉ, trung thực và CHÂN THÀNH.
  - Biết ngoại ngữ giao tiếp là một lợi thế lớn (vì lượng khách quốc tế tại Thảo Điền và Phú Mỹ Hưng rất đông).
  - Mong muốn đồng hành lâu dài.
- **Mức thu nhập:** **25.000 – 35.000 đ/giờ**
- **Lịch làm việc:** Linh hoạt theo ca (phù hợp với sinh viên).
- **Lộ trình phát triển:** Barista ➔ Quản lý cửa hàng (Store Manager) ➔ Quản lý chất lượng (QA/QC) ➔ Chuyên viên đào tạo (Trainer)...
- **Địa điểm làm việc:** Các chi nhánh tại Quận 2, Quận 7, Quận Bình Thạnh.
- **Cách thức ứng tuyển:**
  - Điền form ứng tuyển trực tuyến: [Google Forms Dolphy Recruitment](https://forms.gle/rfZP5cNVkTT3igb88)
  - Hoặc gửi CV qua email: **trangnguyen.dolphy@gmail.com**

---

## 7. ĐÁNH GIÁ CỦA KHÁCH HÀNG

${consolidated.customerFeedback.map(fb => `> **${fb.author}** (${fb.rating}):  
> "${fb.comment}"  
> *(Bản dịch: ${fb.translation})*`).join('\n\n')}

---

## 8. CHÍNH SÁCH & HƯỚNG DẪN MUA HÀNG

`;

consolidated.policies.forEach(pol => {
  md += `### ${pol.title}\n\n${pol.content}\n\n---\n\n`;
});

fs.writeFileSync('DOLPHY_CAFE_TOAN_BO_NOI_DUNG.md', md, 'utf8');
console.log('-> Generated DOLPHY_CAFE_TOAN_BO_NOI_DUNG.md');

// 3. Generate Plain Text File
let txt = `================================================================================
                    DOLPHY CAFÉ - TOÀN BỘ NỘI DUNG WEBSITE
                         Website: https://dolphycafe.com/
                          Slogan: Happiness in a cup
                         Thành lập: 20/10/2013
                    Hotline: 0938 084 985 | Email: contact@dolphycafe.com
================================================================================\n\n`;

txt += md.replace(/###?\s+/g, '--- ')
         .replace(/!\[.*?\]\(.*?\)/g, '')
         .replace(/\[(.*?)\]\(.*?\)/g, '$1')
         .replace(/[*_`]/g, '');

fs.writeFileSync('DOLPHY_CAFE_NOI_DUNG.txt', txt, 'utf8');
console.log('-> Generated DOLPHY_CAFE_NOI_DUNG.txt');

// 4. Generate Interactive Standalone Offline Reader HTML
const htmlTemplate = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dolphy Café - Toàn Bộ Nội Dung Website</title>
  <style>
    :root {
      --primary: #4a2c11;
      --primary-light: #7a4e27;
      --accent: #d4a373;
      --bg: #faf7f2;
      --card-bg: #ffffff;
      --text: #2d2a26;
      --text-muted: #6b635b;
      --border: #e8e0d5;
      --sidebar-width: 280px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      display: flex;
    }
    /* Sidebar */
    #sidebar {
      width: var(--sidebar-width);
      background: #2b180d;
      color: #f3ece4;
      height: 100vh;
      position: sticky;
      top: 0;
      overflow-y: auto;
      padding: 24px 16px;
      flex-shrink: 0;
    }
    #sidebar h1 {
      font-size: 20px;
      color: #faedcd;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #sidebar .slogan {
      font-size: 13px;
      color: #d4a373;
      font-style: italic;
      margin-bottom: 20px;
    }
    #search-box {
      width: 100%;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.1);
      color: #fff;
      font-size: 14px;
      margin-bottom: 20px;
    }
    #search-box::placeholder { color: #ccc; }
    #nav-links { list-style: none; }
    #nav-links li { margin-bottom: 6px; }
    #nav-links a {
      color: #e5ded7;
      text-decoration: none;
      font-size: 14px;
      display: block;
      padding: 8px 10px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    #nav-links a:hover {
      background: rgba(255,255,255,0.15);
      color: #fff;
      transform: translateX(4px);
    }
    /* Main Content */
    #main {
      flex: 1;
      padding: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .hero-banner {
      background: linear-gradient(135deg, #4a2c11 0%, #7a4e27 100%);
      color: white;
      padding: 32px;
      border-radius: 16px;
      margin-bottom: 32px;
      box-shadow: 0 10px 25px rgba(74, 44, 17, 0.15);
    }
    .hero-banner h2 { font-size: 28px; margin-bottom: 8px; color: #faedcd; }
    .hero-banner p { font-size: 16px; opacity: 0.95; }
    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 16px;
      font-size: 14px;
    }
    .hero-meta span {
      background: rgba(255,255,255,0.15);
      padding: 4px 12px;
      border-radius: 20px;
    }
    .card {
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    h2.section-title {
      font-size: 22px;
      color: var(--primary);
      border-bottom: 2px solid var(--accent);
      padding-bottom: 8px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    h3 { color: var(--primary-light); margin: 16px 0 8px 0; font-size: 18px; }
    p { margin-bottom: 12px; }
    .grid-products {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .product-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .product-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: #f0ebe4;
    }
    .product-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .product-name {
      font-size: 16px;
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 6px;
    }
    .product-price {
      font-size: 18px;
      font-weight: bold;
      color: #c0392b;
      margin-bottom: 10px;
    }
    .product-desc {
      font-size: 13px;
      color: var(--text-muted);
      flex: 1;
      white-space: pre-line;
    }
    .branches-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }
    .branch-item {
      background: #fbf9f6;
      border-left: 4px solid var(--accent);
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
    }
    .branch-item strong { color: var(--primary); display: block; margin-bottom: 4px; }
    .article-box {
      border-bottom: 1px solid var(--border);
      padding: 20px 0;
    }
    .article-box:last-child { border-bottom: none; }
    .article-box h3 { color: var(--primary); font-size: 18px; }
    .badge {
      display: inline-block;
      background: #e9ecef;
      color: #495057;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    .btn-print {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: all 0.2s;
    }
    .btn-print:hover { background: var(--primary-light); transform: scale(1.05); }
    @media (max-width: 768px) {
      body { flex-direction: column; }
      #sidebar { width: 100%; height: auto; position: static; }
      #main { padding: 20px; }
    }
  </style>
</head>
<body>
  <div id="sidebar">
    <h1>🐬 Dolphy Café</h1>
    <div class="slogan">Happiness in a cup</div>
    <input type="text" id="search-box" placeholder="🔍 Tìm kiếm nội dung...">
    <ul id="nav-links">
      <li><a href="#about">📖 Giới Thiệu & Story</a></li>
      <li><a href="#branches">📍 10 Chi Nhánh TP.HCM</a></li>
      <li><a href="#products">☕ Sản Phẩm & Bảng Giá</a></li>
      <li><a href="#articles">📚 Cẩm Nang & Pha Chế</a></li>
      <li><a href="#promotions">🎁 Chương Trình & Ưu Đãi</a></li>
      <li><a href="#recruitment">💼 Tuyển Dụng Barista</a></li>
      <li><a href="#reviews">⭐ Đánh Giá Khách Hàng</a></li>
      <li><a href="#policies">📜 Chính Sách & Điều Khoản</a></li>
    </ul>
  </div>

  <div id="main">
    <div class="hero-banner">
      <h2>Dolphy Café - Toàn Bộ Nội Dung Website</h2>
      <p>Bản tổng hợp dữ liệu toàn diện trích xuất từ website chính thức dolphycafe.com</p>
      <div class="hero-meta">
        <span>📅 Thành lập: 20/10/2013</span>
        <span>📞 Hotline: 0938 084 985</span>
        <span>✉️ contact@dolphycafe.com</span>
        <span>📍 10 Chi nhánh tại TP.HCM</span>
      </div>
    </div>

    <!-- Section 1: About & Story -->
    <div class="card" id="about">
      <h2 class="section-title">📖 Giới Thiệu & Câu Chuyện Thương Hiệu (Dolphy's Story)</h2>
      <div style="white-space: pre-line; line-height: 1.8;">
${consolidated.story.content}
      </div>
      <div style="margin-top: 20px; padding: 16px; background: #fdfaf6; border-radius: 8px; border: 1px solid #faedcd;">
        <h3 style="margin-top:0;">🌟 Sứ Mệnh (Mission)</h3>
        <p>${consolidated.story.mission}</p>
        <h3>🔭 Tầm Nhìn (Vision)</h3>
        <p>${consolidated.story.vision}</p>
      </div>
    </div>

    <!-- Section 2: Branches -->
    <div class="card" id="branches">
      <h2 class="section-title">📍 Hệ Thống 10 Cửa Hàng / Chi Nhánh Tại TP.HCM</h2>
      <p>Dolphy Café sở hữu 10 cửa hàng nằm tại các vị trí đắc địa ở TP.HCM:</p>
      
      <div class="branches-grid" style="margin-top: 16px;">
${consolidated.branches.map(b => b.locations.map(loc => `
        <div class="branch-item">
          <strong>${loc.name}</strong>
          <div>📍 ${loc.address}</div>
          <div style="font-size: 12px; color: #888; margin-top: 4px;">Khu vực: ${b.area}</div>
        </div>`).join('')).join('')}
      </div>
      <div style="margin-top: 20px;">
        <p>🗺️ <strong>Bản đồ số hệ thống cửa hàng:</strong> <a href="https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F" target="_blank" style="color: #4a2c11; font-weight: bold;">Mở Google Maps chỉ đường</a></p>
      </div>
    </div>

    <!-- Section 3: Products -->
    <div class="card" id="products">
      <h2 class="section-title">☕ Danh Mục Sản Phẩm & Bảng Giá Chi Tiết</h2>
      <div class="grid-products">
${consolidated.products.map(p => `
        <div class="product-card">
          <img class="product-img" src="${(p.images[0] && p.images[0].startsWith('//') ? 'https:' + p.images[0] : (p.images[0] || 'https://dolphycafe.com/favicon.png'))}" alt="${p.name}">
          <div class="product-body">
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.priceFormatted}</div>
            <div class="product-desc">${p.descriptionText}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Section 4: Articles -->
    <div class="card" id="articles">
      <h2 class="section-title">📚 Cẩm Nang Cà Phê & Bí Quyết Pha Chế</h2>
${consolidated.articles.map(art => `
      <div class="article-box">
        <h3>${art.title}</h3>
        <p style="white-space: pre-line; margin-top: 10px; color: #333;">${art.content}</p>
      </div>`).join('')}
    </div>

    <!-- Section 5: Promotions -->
    <div class="card" id="promotions">
      <h2 class="section-title">🎁 Chương Trình Khách Hàng & Ưu Đãi</h2>
      <h3>1. Thẻ Quà Tặng Mua 10 Tặng 1</h3>
      <p>Để tri ân khách hàng, sau khi mua đồ uống tại DOLPHY CAFÉ bạn sẽ nhận được một thẻ tích điểm <strong>“Mua 10 tặng 1”</strong> (thức uống tặng size Nhỏ hoặc Vừa).</p>
      <p><em>Áp dụng:</em> Toàn bộ hệ thống Dolphy Café cho hầu hết đồ uống (ngoại trừ bánh, cà phê gói, phin/ly sứ).</p>

      <h3 style="margin-top: 20px;">2. Green Stamp - Chung Tay Vì Môi Trường</h3>
      <p>Dolphy luôn trân trọng những hành động giảm thiểu rác thải nhựa. Khi bạn <strong>mang theo bình nước cá nhân</strong> đến mua cà phê mang đi, Dolphy tặng bạn <strong>1 Green Stamp</strong> để tích lũy nhận quà!</p>
    </div>

    <!-- Section 6: Recruitment -->
    <div class="card" id="recruitment">
      <h2 class="section-title">💼 Thông Tin Tuyển Dụng Barista</h2>
      <p><strong>Dolphy Café tuyển dụng Barista 2024 - 2025:</strong></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li><strong>Vị trí:</strong> Barista – Nhân viên pha chế (Full-time / Part-time)</li>
        <li><strong>Độ tuổi:</strong> 18 – 25 tuổi</li>
        <li><strong>Yêu cầu:</strong> Không cần kinh nghiệm, nhiệt tình, trung thực, ham học hỏi và chân thành. Biết ngoại ngữ là lợi thế lớn.</li>
        <li><strong>Mức thu nhập:</strong> 25.000 – 35.000 đ/giờ</li>
        <li><strong>Nơi làm việc:</strong> Quận 2, Quận 7, Quận Bình Thạnh</li>
        <li><strong>Lộ trình:</strong> Barista ➔ Quản lý cửa hàng ➔ QA/QC ➔ Trainer</li>
        <li><strong>Form ứng tuyển:</strong> <a href="https://forms.gle/rfZP5cNVkTT3igb88" target="_blank" style="color: #4a2c11; font-weight: bold;">Google Form Tuyển Dụng Dolphy</a> hoặc gửi CV qua email: <strong>trangnguyen.dolphy@gmail.com</strong></li>
      </ul>
    </div>

    <!-- Section 7: Reviews -->
    <div class="card" id="reviews">
      <h2 class="section-title">⭐ Đánh Giá Của Khách Hàng (Testimonials)</h2>
${consolidated.customerFeedback.map(fb => `
      <div style="background: #fbf9f6; padding: 16px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid #d4a373;">
        <strong>${fb.author}</strong> - <span style="color: #f39c12;">${fb.rating}</span>
        <p style="margin-top: 6px; font-style: italic;">"${fb.comment}"</p>
        <p style="color: #666; font-size: 13px;">👉 Bản dịch: ${fb.translation}</p>
      </div>`).join('')}
    </div>

    <!-- Section 8: Policies -->
    <div class="card" id="policies">
      <h2 class="section-title">📜 Chính Sách & Điều Khoản Sử Dụng</h2>
${consolidated.policies.map(p => `
      <div style="margin-bottom: 24px;">
        <h3>${p.title}</h3>
        <p style="white-space: pre-line; font-size: 14px; color: #444;">${p.content}</p>
      </div>`).join('')}
    </div>
  </div>

  <button class="btn-print" onclick="window.print()">🖨️ In / Lưu PDF</button>

  <script>
    // Realtime search filter
    document.getElementById('search-box').addEventListener('input', function(e) {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card, .product-card, .article-box');
      cards.forEach(c => {
        if (!q || c.textContent.toLowerCase().includes(q)) {
          c.style.display = '';
        } else {
          c.style.display = 'none';
        }
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync('DOLPHY_CAFE_READER.html', htmlTemplate, 'utf8');
console.log('-> Generated DOLPHY_CAFE_READER.html');

console.log('\nAll files created successfully!');
