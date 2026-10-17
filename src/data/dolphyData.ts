import { Product, Course, Branch, Article, Job, Testimonial } from '../types';

export const brandInfo = {
  name: 'Dolphy Café & Coffee Hub',
  shortName: 'Dolphy Café',
  slogan: 'Happiness in a cup',
  foundedYear: '2013',
  foundedDate: '20/10/2013',
  hotline: '0938 084 985',
  email: 'contact@dolphycafe.com',
  recruitmentEmail: 'trangnguyen.dolphy@gmail.com',
  orderOnlineUrl: 'https://dolphycoffee.cukcuk.vn/order-online/',
  facebook: 'https://www.facebook.com/dolphycafe',
  instagram: 'https://www.instagram.com/dolphycafe/',
  tiktok: 'https://www.tiktok.com/@_.dolphycafe._',
  socials: {
    facebook: 'https://www.facebook.com/dolphycafe',
    instagram: 'https://www.instagram.com/dolphycafe/',
    tiktok: 'https://www.tiktok.com/@_.dolphycafe._'
  },
  mapEmbedUrl: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
  story: `Được thành lập từ 20/10/2013, DOLPHY không chỉ là một chuỗi cửa hàng cafe luôn hướng tới chất lượng cà phê nguyên bản thơm ngon, mà DOLPHY còn được tạo ra với mong muốn đem lại trải nghiệm thoải mái, những khoảnh khắc "happiness in a cup" cho mọi người khi bắt đầu ngày mới.

DOLPHY được đặt tên dựa trên ý tưởng "danh từ hóa" từ tiếng Anh Dolphin (Cá heo). Bạn có thể đọc được đâu đó ở DOLPHY lời tự giới thiệu: "My name's DOLPHY. I'm a dolphin. I only serve pure coffee." 

Với tên gọi DOLPHY, chúng tôi mong muốn đội ngũ Barista sẽ luôn là những người bạn gần gũi, thân thiện, thông minh, nhanh nhẹn và đoàn kết như những chú cá heo vốn luôn được mọi người yêu mến. Thế mạnh của DOLPHY là làm nên những tách cafe Ý thơm ngon và cà phê phin di sản, dựa trên nguồn nguyên liệu là các hạt cà phê chất lượng cao nhất từ các cao nguyên trứ danh của Việt Nam.`,
  mission: 'Dựa trên lý tưởng về sứ mệnh "Happiness in a cup", ở DOLPHY chúng tôi tin rằng chỉ những Barista hạnh phúc mới có thể tạo nên những tách cà phê hạnh phúc. Sứ mệnh của DOLPHIERs chúng ta là tạo ra những tách cafe hạnh phúc mỗi ngày.',
  vision: 'DOLPHY có thể không lớn nhất, nhiều cửa hàng nhất, nhưng luôn luôn là chuỗi cửa hàng café đáng uống nhất và hệ sinh thái đào tạo Barista thực chiến hàng đầu Việt Nam.',
  awards: 'Đã từng được vinh danh là một trong 10 quán cafe đáng uống nhất TP.HCM do tạp chí ẩm thực – du lịch Words bình chọn liên tiếp các năm 2015, 2016, 2017.',
  stats: [
    { label: 'Năm đồng hành cùng Sài Gòn', value: '13+' },
    { label: 'Chi nhánh tại TP.HCM', value: '10' },
    { label: 'Khách hàng thân thiết', value: '50.000+' },
    { label: 'Học viên & Barista đào tạo', value: '500+' }
  ]
};

export const coursesData: Course[] = [
  {
    id: 'barista-thuc-chien',
    title: 'Khóa Học Barista Thực Chiến Dolphy',
    slug: 'barista-thuc-chien',
    badge: 'Khóa Học Trọng Tâm 2026',
    subtitle: 'Đào tạo kỹ năng pha chế toàn diện, thực hành 100% tại quầy bar chuỗi cửa hàng Dolphy và cam kết ưu tiên tuyển dụng ngay sau khi tốt nghiệp.',
    price: 8000000,
    discountPrice: 7000000,
    depositAmount: 2000000,
    duration: '2 - 3 tuần',
    totalHours: 21,
    sessions: 6,
    hoursPerSession: 3.5,
    targetAudience: [
      'Người muốn học nghề pha chế chuyên nghiệp để đi làm ngay tại các chuỗi lớn.',
      'Sinh viên, người trẻ chuẩn bị đi du học hoặc làm việc tại nước ngoài cần nghề Barista quốc tế.',
      'Chủ quán cà phê tương lai muốn nắm vững kỹ thuật, quy trình vận hành và kiểm soát chất lượng.',
      'Người yêu thích cà phê muốn nâng tầm trải nghiệm cá nhân.'
    ],
    usps: [
      'Thực hành trực tiếp 100% tại quầy bar cửa hàng chuỗi Dolphy (máy pha Espresso cao cấp, máy xay chuyên dụng).',
      'Cam kết đầu ra việc làm: Ưu tiên tuyển dụng trực tiếp vào 10 chi nhánh Dolphy Café (25k - 35k/h) hoặc kết nối làm việc tại các chuỗi đối tác.',
      'Không ràng buộc độc quyền: Học viên tự do phát triển sự nghiệp tại bất cứ đâu sau khóa học.',
      'Học phí cạnh tranh hàng đầu thị trường (chỉ 7.000.000đ so với mặt bằng 8 - 10 triệu tại TP.HCM).',
      'Đội ngũ Master Trainer thực chiến, kèm 1:1 hoặc lớp nhỏ tối đa 4 - 6 học viên.'
    ],
    syllabus: [
      {
        session: 1,
        title: 'Buổi 1: Thế Giới Cà Phê Hạt & Phân Biệt Arabica vs Robusta',
        description: 'Khám phá bản đồ cà phê, vùng trồng Cầu Đất, Buôn Ma Thuột; các phương pháp sơ chế (Wash, Honey, Natural); quy trình rang xay và nhận biết hạt tiêu chuẩn.',
        practicalSkills: ['Cupping cảm quan', 'Nhận diện lỗi hạt cà phê', 'Cách bảo quản cà phê đúng chuẩn']
      },
      {
        session: 2,
        title: 'Buổi 2: Vận Hành Máy Pha & Kỹ Thuật Chiết Xuất Espresso Hoàn Hảo (Dial-in)',
        description: 'Cấu tạo máy pha công nghiệp, máy xay hạt. Hiểu sâu về tỉ lệ Brew Ratio, thời gian, áp suất 9-bar, nhiệt độ và cách cân chỉnh độ mịn (Dial-in grind size) theo thời tiết.',
        practicalSkills: ['Cân chỉnh cối xay (Dial-in)', 'Kỹ thuật nén Tamp chuẩn xác', 'Đánh giá ly Espresso chuẩn vị (Crema, Body, Acidity)']
      },
      {
        session: 3,
        title: 'Buổi 3: Kỹ Thuật Đánh Sữa (Milk Steaming) & Bọt Sữa Vi Mô (Micro-foam)',
        description: 'Vật lý và hóa học của sữa tươi thanh trùng khi gia nhiệt. Kỹ thuật góc nghiêng vòi hơi, tạo vòng xoáy vortex, kiểm soát nhiệt độ 60 - 65°C để sữa ngọt tự nhiên.',
        practicalSkills: ['Tạo foam sữa mịn như lụa (Glossy micro-foam)', 'Xử lý bọt thừa', 'Đồng nhất sữa và Espresso']
      },
      {
        session: 4,
        title: 'Buổi 4: Nghệ Thuật Tạo Hình Latte Art & Menu Cà Phê Ý Chuẩn Quốc Tế',
        description: 'Thực hành kỹ thuật rót dòng chảy (flow rate), độ cao (distance), lắc tay (wiggle). Thực hành các hình vẽ cơ bản: Heart (Trái tim), Tulip, Rosetta.',
        practicalSkills: ['Pha chế Cappuccino, Café Latte, Flat White, Macchiato', 'Latte Art Trái Tim & Tulip nhiều tầng', 'Vệ sinh và bảo dưỡng máy sau ca làm']
      },
      {
        session: 5,
        title: 'Buổi 5: Cà Phê Phin Nâng Cao, Cold Brew & Dòng Thức Uống Signature Dolphy',
        description: 'Bí quyết ủ phin nhôm truyền thống chuẩn Việt Nam; phương pháp chiết xuất lạnh Cold Brew 12 - 24 tiếng; công thức Bạc sỉu 3 tầng trứ danh của Dolphy được khách quốc tế yêu thích.',
        practicalSkills: ['Ủ phin nhôm chuẩn nhiệt độ 92-96°C', 'Công thức Bạc sỉu, Cà phê sữa đá Sài Gòn', 'Kỹ thuật pha Cold Brew 1:10 bảo quản 2-4 tuần']
      },
      {
        session: 6,
        title: 'Buổi 6: Quy Trình Vận Hành Quầy Bar 5 Sao, Thi Tốt Nghiệp & Phỏng Vấn Việc Làm',
        description: 'Setup quy trình trạm làm việc (station flow), kiểm soát tốc độ đơn hàng (speed of service), kỹ năng giao tiếp - dịch vụ khách hàng "Happiness in a cup", xử lý tình huống phát sinh.',
        practicalSkills: ['Thi thực hành pha chế tổng hợp theo đơn gọi món', 'Đánh giá chấm điểm tốt nghiệp', 'Phỏng vấn nhận việc ngay tại Dolphy']
      }
    ],
    outcomes: [
      'Nắm vững tay nghề pha chế mọi thức uống cà phê Ý và cà phê Việt Nam hiện đại.',
      'Tự tin vận hành máy pha công nghiệp độc lập ở bất kỳ quầy bar chuyên nghiệp nào.',
      'Nhận chứng chỉ tốt nghiệp Dolphy Academy.',
      'Được ưu tiên tuyển dụng làm Barista tại hệ thống 10 chi nhánh Dolphy Café.'
    ],
    trainerInfo: 'Trực tiếp giảng dạy bởi Trưởng bộ phận Đào tạo (Lead Trainer) Dolphy cùng các Barista kỳ cựu đã gắn bó nhiều năm với thương hiệu.',
    schedule: [
      'Lớp Trong Tuần: Thứ 2 - 4 - 6 (Ca Sáng 08:30 - 12:00 hoặc Ca Chiều 13:30 - 17:00)',
      'Lớp Cuối Tuần: Thứ 7 & Chủ Nhật (Ca Linh hoạt)',
      'Lớp Cấp Tốc: Học liên tục theo thỏa thuận riêng'
    ],
    image: '/images/fanpage/academy-championship-backdrop.jpg',
    locations: [
      'Dolphy Training Hub - 28 Thảo Điền, P. Thảo Điền, TP. Thủ Đức',
      'Dolphy Training Hub - 1441 Nguyễn Văn Linh, P. Tân Phong, Quận 7'
    ]
  },
  {
    id: 'latte-art-sensory',
    title: 'Khóa Chuyên Sâu Latte Art & Sensory Cảm Quan',
    slug: 'latte-art-sensory',
    badge: 'Kỹ Năng Nâng Cao',
    subtitle: 'Nâng cấp kỹ thuật tạo hình bọt sữa điêu luyện (Rosetta, Swan, Winged Tulip) và kỹ năng nếm nếm đánh giá hương vị cà phê Specialty.',
    price: 4500000,
    discountPrice: 3800000,
    depositAmount: 1000000,
    duration: '1 - 2 tuần',
    totalHours: 14,
    sessions: 4,
    hoursPerSession: 3.5,
    targetAudience: [
      'Barista đã có nền tảng cơ bản muốn nâng cao kỹ thuật tạo hình nghệ thuật.',
      'Những ai chuẩn bị tham gia các cuộc thi Latte Art hoặc Barista Championship.',
      'Người làm việc tại các quầy Specialty Coffee cao cấp.'
    ],
    usps: [
      'Rèn luyện kỹ thuật tay rót chuyên sâu với hàng trăm shot thực hành không giới hạn nguyên liệu.',
      'Phát triển khả năng cảm nhận hương hoa, quả mọng, socola, hạt phỉ trong hạt cà phê.',
      'Hướng dẫn chụp ảnh/quay video khoe tác phẩm Latte Art ấn tượng trên mạng xã hội.'
    ],
    syllabus: [
      {
        session: 1,
        title: 'Buổi 1: Kiểm Soát Bọt Sữa Tuyệt Đối & Free Pour Cơ Bản',
        description: 'Tối ưu độ sánh dẻo của sữa cho từng kiểu tách (Cup size), phân tích góc nghiêng và áp lực dòng sữa khi tiếp xúc bề mặt Espresso.',
        practicalSkills: ['Solid Heart', 'Layered Heart', 'Double Tulip']
      },
      {
        session: 2,
        title: 'Buổi 2: Kỹ Thuật Đẩy Pattern & Winged Rosetta',
        description: 'Kiểm soát nhịp lắc cổ tay, độ rộng của cánh hoa lá Rosetta, kỹ năng kéo ngọn chỉ không đứt nét.',
        practicalSkills: ['Classic Rosetta', 'Winged Tulip', 'Inverted patterns']
      },
      {
        session: 3,
        title: 'Buổi 3: Tạo Hình Phức Hợp (Swan & Dragon)',
        description: 'Kết hợp nhiều kỹ thuật trong một tách duy nhất: tạo thân, cánh, cổ và đầu thiên nga uyển chuyển.',
        practicalSkills: ['Swan (Thiên nga đơn/kép)', 'Seahorse', 'Tự do sáng tạo mẫu mới']
      },
      {
        session: 4,
        title: 'Buổi 4: Sensory Cupping & Hiệu Chỉnh Vị Cà Phê Chuyên Sâu',
        description: 'Vòng tròn hương vị SCA Flavor Wheel; phân tích độ chua Acidity, độ ngọt Sweetness, vị đắng Bitterness và Hậu vị Aftertaste.',
        practicalSkills: ['Thử nếm Cupping mù 5 loại cà phê cao cấp', 'Đánh giá điểm cân bằng sensory']
      }
    ],
    outcomes: [
      'Thành thạo ít nhất 5 mẫu Latte Art phức tạp.',
      'Tự tin tạo nên trải nghiệm thị giác và vị giác đỉnh cao cho thực khách.'
    ],
    trainerInfo: 'Hướng dẫn bởi Quán quân / Trọng tài các giải đấu Barista & Trainer chuyên sâu của Dolphy.',
    schedule: ['Thứ 3 - Thứ 5 hàng tuần (14:00 - 17:30)', 'Chủ Nhật (Cả ngày)'],
    image: '/images/fanpage/academy-latte-art-pouring.jpg',
    locations: ['Dolphy Training Hub - 28 Thảo Điền, TP. Thủ Đức']
  },
  {
    id: 'workshop-trai-nghiem-barista',
    title: 'Workshop Hướng Nghiệp & Trải Nghiệm Nghề Barista',
    slug: 'workshop-trai-nghiem-barista',
    badge: 'Trải Nghiệm Cuối Tuần',
    subtitle: 'Buổi giao lưu trải nghiệm thực tế 1 buổi: Tự tay pha ly cà phê chuẩn vị, khám phá văn hóa cà phê và trắc nghiệm mức độ phù hợp với nghề Barista.',
    price: 350000,
    discountPrice: 250000,
    depositAmount: 250000,
    duration: '1 buổi (3.5 giờ)',
    totalHours: 3.5,
    sessions: 1,
    hoursPerSession: 3.5,
    targetAudience: [
      'Các bạn trẻ đang tìm hiểu về nghề Barista và ngành F&B.',
      'Người yêu thích cà phê muốn có trải nghiệm cuối tuần thú vị.',
      'Các nhóm bạn, cặp đôi tìm kiếm hoạt động kết nối ý nghĩa.'
    ],
    usps: [
      'Chi phí siêu ưu đãi (Chỉ 250k/người, bao gồm toàn bộ nguyên liệu và đồ uống mang về).',
      'Được tự tay vận hành máy pha công nghiệp và thử vẽ hình Latte Art đầu tiên.',
      'Miễn phí 100% học phí workshop nếu đăng ký khóa học Barista Thực Chiến sau đó.'
    ],
    syllabus: [
      {
        session: 1,
        title: 'Trải Nghiệm 3.5 Giờ Trở Thành Barista Thực Thụ',
        description: 'Khám phá câu chuyện cà phê Sài Gòn, bí quyết chiếc phin nhôm truyền thống, cách nhận biết cà phê sạch và tự tay pha 2 món cà phê yêu thích.',
        practicalSkills: ['Tự pha 01 ly Espresso & Latte Art', 'Tự ủ 01 mẻ Cold Brew mang về', 'Nhận quà tặng cà phê túi Dolphy']
      }
    ],
    outcomes: [
      'Hiểu rõ lộ trình phát triển và tiềm năng thu nhập của nghề Barista tại Việt Nam & quốc tế.',
      'Sở hữu thành phẩm cà phê do chính tay mình tạo nên.'
    ],
    trainerInfo: 'Speaker & Barista Host thân thiện từ Dolphy Café Team.',
    schedule: ['Sáng Thứ 7 hàng tuần (09:00 - 12:30)', 'Sáng Chủ Nhật hàng tuần (09:00 - 12:30)'],
    image: '/images/fanpage/academy-signature-rose-latte.jpg',
    locations: [
      'Dolphy Thảo Điền (28 Thảo Điền, Q.2)',
      'Dolphy Phú Mỹ Hưng (1441 Nguyễn Văn Linh, Q.7)'
    ]
  },
  {
    id: 'quan-ly-van-hanh-fnb',
    title: 'Khóa Đào Tạo Quản Lý Quán & Vận Hành F&B Thực Chiến',
    slug: 'quan-ly-van-hanh-fnb',
    badge: 'Chuyên Gia Vận Hành 2026',
    subtitle: 'Nắm vững kỹ năng quản trị kinh doanh cà phê, kiểm soát cost, định lượng nguyên liệu, quản lý nhân sự và phần mềm bán hàng CukCuk thực tế tại chuỗi Dolphy.',
    price: 15000000,
    discountPrice: 12000000,
    depositAmount: 3000000,
    duration: '4 tuần (8 buổi)',
    totalHours: 28,
    sessions: 8,
    hoursPerSession: 3.5,
    targetAudience: [
      'Chủ quán cà phê tương lai chuẩn bị khởi nghiệp hoặc nhận nhượng quyền.',
      'Quản lý cửa hàng, Shift Leader muốn nâng cao năng lực điều hành chuỗi.',
      'Người muốn nắm vững tài chính và tối ưu tỷ suất lợi nhuận trong ngành F&B.'
    ],
    usps: [
      'Học trực tiếp trên số liệu vận hành và hệ thống CukCuk thực tế của 10 chi nhánh Dolphy.',
      'Tối ưu hóa tỷ lệ hao hụt nguyên vật liệu (Food & Beverage Cost Control dưới 28%).',
      'Được tư vấn 1:1 bản vẽ thiết kế công năng quầy bar và quy trình kiểm soát ca làm việc.'
    ],
    syllabus: [
      {
        session: 1,
        title: 'Buổi 1: Mô Hình Kinh Doanh F&B & Thiết Kế Công Năng Quầy Bar Chuẩn',
        description: 'Phân tích tam giác vàng trong quầy bar (Tủ mát - Máy pha - Bồn rửa). Tối ưu luồng di chuyển của nhân viên trong giờ cao điểm.',
        practicalSkills: ['Đọc bản vẽ mặt bằng quầy bar', 'Bố trí trạm làm việc (Station Layout)']
      },
      {
        session: 2,
        title: 'Buổi 2: Xây Dựng Định Lượng (Recipe Costing) & Kiểm Soát Giá Vốn (COGS)',
        description: 'Công thức tính giá vốn chuẩn cho từng món đồ uống và bánh ngọt; thiết lập mức giá bán cạnh tranh và biên lợi nhuận kỳ vọng.',
        practicalSkills: ['Lập bảng Costing Excel', 'Cân đối tỷ lệ cost Arabica/Robusta/Sữa tươi']
      },
      {
        session: 3,
        title: 'Buổi 3: Vận Hành Phần Mềm POS & Quản Trị Kho Đơn Hàng (CukCuk)',
        description: 'Thiết lập danh mục menu, quản lý xuất nhập tồn kho, kiểm kê định kỳ và đối soát doanh thu bán mang đi qua app giao hàng.',
        practicalSkills: ['Thực hành trên phần mềm quản lý CukCuk', 'Xử lý hủy món, hoàn tiền, chiết khấu']
      },
      {
        session: 4,
        title: 'Buổi 4: Tuyển Dụng, Đào Tạo & Quản Trị Nhân Sự Khối Cửa Hàng',
        description: 'Quy trình tuyển dụng Barista, xây dựng thang bảng lương, chính sách thưởng tip và KPIs doanh số theo giờ làm việc.',
        practicalSkills: ['Thiết kế ca làm việc (Roster)', 'Quy trình Onboarding nhân sự mới']
      },
      {
        session: 5,
        title: 'Buổi 5: Tiêu Chuẩn Dịch Vụ Khách Hàng 5 Sao & Xử Lý Khủng Hoảng F&B',
        description: 'Văn hóa Happiness in a cup, quy tắc ứng xử với khách hàng quốc tế, quy trình xử lý phàn nàn và bảo vệ uy tín thương hiệu.',
        practicalSkills: ['Xử lý tình huống đền món', 'Kịch bản giao tiếp giải tỏa bức xúc']
      },
      {
        session: 6,
        title: 'Buổi 6: Quản Lý Vệ Sinh An Toàn Thực Phẩm & Pháp Lý Cửa Hàng',
        description: 'Các tiêu chuẩn VSATTP, quy định PCCC, thủ tục đăng ký kinh doanh và bảo quản nguyên vật liệu chuẩn theo mùa.',
        practicalSkills: ['Checklist kiểm tra ca mở / ca đóng cửa hàng', 'Lưu mẫu thực phẩm']
      },
      {
        session: 7,
        title: 'Buổi 7: Marketing Cửa Hàng & Kéo Khách Hàng Địa Phương (Local Store Marketing)',
        description: 'Cách xây dựng tệp khách hàng thân thiết, phát hành thẻ tích điểm, tổ chức sự kiện workshop và chạy ưu đãi ngày lễ.',
        practicalSkills: ['Thiết kế chương trình Mua 10 tặng 1 / Green Stamp', 'Tối ưu Google Business']
      },
      {
        session: 8,
        title: 'Buổi 8: Báo Cáo Tài Chính Cửa Hàng & Bảo Vệ Đồ Án Mở Quán Thực Tế',
        description: 'Đọc và phân tích bảng P&L (Lãi - Lỗ) hàng tháng; đánh giá điểm hòa vốn (Break-even point) và thuyết trình kế hoạch kinh doanh.',
        practicalSkills: ['Lập báo cáo P&L mẫu', 'Bảo vệ kế hoạch mở quán trước hội đồng chuyên gia']
      }
    ],
    outcomes: [
      'Tự tin làm chủ hoặc điều hành chuỗi cà phê từ 1 đến nhiều chi nhánh.',
      'Kiểm soát chặt chẽ dòng tiền và hạn chế tối đa rủi ro thất thoát trong kinh doanh.',
      'Nhận chứng chỉ Quản lý F&B chuyên nghiệp từ Dolphy Academy.'
    ],
    trainerInfo: 'Trực tiếp giảng dạy bởi Giám đốc Vận hành (COO) và Quản lý Chuỗi kỳ cựu của Dolphy Café.',
    schedule: ['Thứ 7 & Chủ Nhật (14:00 - 17:30)', 'Lớp linh hoạt theo nhu cầu chủ quán'],
    image: '/images/fanpage/academy-bracket-board.jpg',
    locations: [
      'Dolphy Training Hub - 28 Thảo Điền, P. Thảo Điền, TP. Thủ Đức',
      'Dolphy Training Hub - 1441 Nguyễn Văn Linh, P. Tân Phong, Quận 7'
    ]
  }
];

export const productsData: Product[] = [
  // 1. Cà Phê Gói & Hạt Mộc (Coffee Bags)
  {
    id: 'arabica-250g',
    name: 'Arabica Cầu Đất 250g (100% Arabica) (Gói)',
    nameEn: "Arabica Cau Dat 250g (100% Arabica)",
    alias: 'arabica-250g-100-arabica-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 255000,
    weight: '250g',
    origin: 'Cầu Đất, Lâm Đồng (Độ cao 1.500m - 1.650m)',
    originEn: "Cau Dat, Lam Dong (Altitude 1,500m - 1,650m)",
    roastLevel: 'Medium Roast (Rang vừa)',
    tasteNotes: ['Hương hoa nhài', 'Chua thanh dịu nhẹ', 'Hậu vị ngọt ngào', 'Hương trái cây mọng'],
    description: `100% hạt Arabica thượng hạng được tuyển chọn kỹ lưỡng từ vùng đất Cầu Đất - Đà Lạt, nơi có khí hậu quanh năm se lạnh và thổ nhưỡng lý tưởng bậc nhất cho cây cà phê Arabica.

Hạt được rang ở mức vừa (Medium) để lưu giữ trọn vẹn hương thơm phong phú của hoa cỏ, độ chua thanh tao nhã và hậu vị ngọt sâu lưu luyến. Phù hợp hoàn hảo cho cách pha Pour Over (V60), Cold Brew và pha máy Espresso hiện đại.`,
    descriptionEn: "100% specialty Arabica beans meticulously selected from Cau Dat - Da Lat, where cool highlands and fertile soil yield exceptional coffee beans.\n\nRoasted to Medium to preserve vibrant floral aromas, delicate bright acidity, and a lingering honeyed sweetness. Perfect for Pour Over (V60), Cold Brew, and home or cafe espresso machines.",
    brewingRecommendation: 'Pha Pour-over / V60, Cold Brew, Máy pha Espresso gia đình hoặc quán.',
    image: '/images/prod_arabica_250g.jpg',
    images: [
      '/images/prod_arabica_250g.jpg',
      '/images/prod_arabica_500g.jpg',
      '/images/fanpage/retail-beans-bakery-display.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'arabica-500g',
    name: 'Arabica Cầu Đất 500g (100% Arabica) (Gói Tiết Kiệm)',
    nameEn: "Arabica Cau Dat 500g (100% Arabica) Value Pack",
    alias: 'arabica-500g-100-arabica-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 485000,
    compareAtPrice: 510000,
    weight: '500g',
    origin: 'Cầu Đất, Lâm Đồng',
    originEn: "Cau Dat, Lam Dong",
    roastLevel: 'Medium Roast',
    tasteNotes: ['Hương hoa cỏ', 'Vị thanh ngọt', 'Acidity sáng', 'Hậu vị thanh lịch'],
    description: `Gói tiết kiệm 500g dành cho người yêu thích hương vị Arabica tinh tế sử dụng hàng ngày tại nhà hoặc văn phòng. 100% hạt Arabica được đóng gói van 1 chiều giúp bảo toàn hương vị và khí CO2 tự nhiên của hạt cà phê tươi mới.`,
    descriptionEn: "Economical 500g pack designed for daily lovers of refined Arabica coffee at home or the office. 100% pure Arabica sealed with a one-way degassing valve to preserve fresh roast aromatics and natural sweetness.",
    brewingRecommendation: 'Pha V60, Cold Brew, French Press, Máy Espresso.',
    image: '/images/prod_arabica_500g.jpg',
    images: [
      '/images/prod_arabica_500g.jpg',
      '/images/prod_arabica_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'robusta-250g',
    name: 'Fine Robusta Lâm Đồng 250g (100% Robusta) (Gói)',
    nameEn: "Fine Robusta Lam Dong 250g (100% Robusta)",
    alias: 'robusta-250g-100-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 185000,
    weight: '250g',
    origin: 'Bảo Lộc, Lâm Đồng (Cao nguyên bazan màu mỡ)',
    originEn: "Bao Loc, Lam Dong (Highland Basalt Soil)",
    roastLevel: 'Medium-Dark Roast (Rang nâu đậm)',
    tasteNotes: ['Vị đắng đầm', 'Hương socola đen', 'Hạt dẻ rang', 'Hàm lượng caffeine cao'],
    description: `100% hạt Robusta Việt Nam chất lượng cao được hái chín cây và sơ chế kỹ lưỡng, loại bỏ hoàn toàn hạt xanh lép. 

Đặc trưng bởi hương vị cà phê Việt Nam truyền thống mạnh mẽ, body dày đậm, hậu vị béo ngậy và hàm lượng caffeine tự nhiên giúp bạn bừng tỉnh năng lượng tức thì. Lựa chọn số 1 cho người mê cà phê sữa đá, cà phê đen đá và pha phin truyền thống.`,
    descriptionEn: "Specialty Fine Robusta hand-harvested at 100% optimal ripeness from the volcanic basalt soil of Bao Loc highlands. Processed with natural honey fermentation.\n\nDelivers bold crema, dark chocolate richness, toasted walnut depth, and a caramel sweetness without harsh bitterness. Perfect for traditional Vietnamese Phin and intense Espresso.",
    brewingRecommendation: 'Pha phin nhôm truyền thống, pha máy Espresso gu đậm, pha cà phê sữa đá.',
    image: '/images/prod_robusta_250g.jpg',
    images: [
      '/images/prod_robusta_250g.jpg',
      '/images/prod_robusta_500g.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'robusta-500g',
    name: 'Fine Robusta Lâm Đồng 500g (100% Robusta) (Gói)',
    nameEn: "Fine Robusta Lam Dong 500g (100% Robusta) Value Pack",
    alias: 'robusta-500g-100-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 350000,
    compareAtPrice: 370000,
    weight: '500g',
    origin: 'Bảo Lộc, Lâm Đồng',
    originEn: "Bao Loc, Lam Dong",
    roastLevel: 'Medium-Dark Roast',
    tasteNotes: ['Đậm đà', 'Thơm nồng', 'Socola nguyên chất', 'Hậu vị bền bỉ'],
    description: `Gói 500g kinh tế cho người sành gu cà phê đậm đà hoặc các văn phòng làm việc. Hạt Robusta hạt to đồng đều, được rang theo công thức gia truyền của Dolphy giúp hạt dậy mùi thơm ngào ngạt mà không hề bị khét cháy.`,
    descriptionEn: "500g value pack for dedicated coffee fans who crave authentic bold Vietnamese flavor. Medium Dark roast enhances chocolate, nutty warmth, and thick, velvety body.",
    brewingRecommendation: 'Pha phin truyền thống, cà phê đen, bạc sỉu.',
    image: '/images/prod_robusta_500g.jpg',
    images: [
      '/images/prod_robusta_500g.jpg',
      '/images/prod_robusta_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'espresso-250g',
    name: 'Espresso Blend Signature 250g (80% Arabica + 20% Robusta)',
    nameEn: "Espresso Blend Signature 250g (80% Arabica + 20% Robusta)",
    alias: 'espresso-250g-80-arabica-20-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 235000,
    weight: '250g',
    origin: 'Phối trộn Cầu Đất & Bảo Lộc',
    originEn: "Artisanal Cau Dat & Bao Loc Blend",
    roastLevel: 'Medium Roast',
    tasteNotes: ['Hài hòa chua & đắng', 'Crema vàng dày mịn', 'Hương caramel ngọt bùi', 'Hương hoa thoang thoảng'],
    description: `Dòng sản phẩm Signature được yêu thích nhất tại Dolphy Café! Sự kết hợp hoàn hảo theo tỷ lệ vàng: 80% Arabica Cầu Đất thanh thoát và 20% Robusta Lâm Đồng đậm đà.

Tỉ lệ này tạo nên một ly Espresso cân bằng mỹ mãn: lớp bọt kem crema dày óng ánh, vị chua thanh hòa quyện êm ái cùng độ đắng dịu ngọt của caramel. Rất dễ uống và thích hợp cho cả món cà phê đen lẫn món có sữa như Latte, Cappuccino.`,
    descriptionEn: "Dolphy’s signature espresso recipe crafted and refined over 12+ years across our Thao Dien coffee houses. Harmonious union of 80% floral Cau Dat Arabica and 20% bold Bao Loc Fine Robusta.\n\nYields rich golden crema, bright citrus undertones, smooth chocolate body, and balanced finish for Americano, Latte, and Cappuccino.",
    brewingRecommendation: 'Máy pha Espresso, Moka Pot, Phin nhôm tân thời, Cold Brew kết hợp cam sả.',
    image: '/images/prod_espresso_250g.jpg',
    images: [
      '/images/prod_espresso_250g.jpg',
      '/images/prod_espresso_500g.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'espresso-500g',
    name: 'Espresso Blend Signature 500g (80% Arabica + 20% Robusta)',
    nameEn: "Espresso Blend Signature 500g (80% Arabica + 20% Robusta)",
    alias: 'espresso-500g-80-arabica-20-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 445000,
    compareAtPrice: 470000,
    weight: '500g',
    origin: 'Phối trộn Cầu Đất & Bảo Lộc',
    originEn: "Artisanal Cau Dat & Bao Loc Blend",
    roastLevel: 'Medium Roast',
    tasteNotes: ['Cân bằng tuyệt đối', 'Vị ngọt caramel', 'Crema óng ả', 'Đậm đà êm mượt'],
    description: `Gói lớn 500g dòng Espresso Blend kinh điển của Dolphy. Đảm bảo nguồn năng lượng mỗi sớm mai với hương thơm lan tỏa ngập tràn không gian.`,
    descriptionEn: "Signature espresso blend in 500g standard barista packaging. Tailored for commercial cafes and demanding espresso enthusiasts at home.",
    brewingRecommendation: 'Máy pha Espresso, Phin truyền thống, French Press.',
    image: '/images/prod_espresso_500g.jpg',
    images: [
      '/images/prod_espresso_500g.jpg',
      '/images/prod_espresso_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'single-origin-typica-250g',
    name: 'Specialty Single Origin Typica Cầu Đất 250g (Micro-lot)',
    nameEn: "Specialty Single Origin Typica Cau Dat 250g (Micro-lot)",
    alias: 'specialty-single-origin-typica-cau-dat-250g',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 320000,
    weight: '250g',
    origin: 'Trạm Hành, Cầu Đất (Độ cao 1.650m - Sơ chế ướt lên men yếm khí)',
    originEn: "Tram Hanh, Cau Dat (1,650m - Anaerobic Washed)",
    roastLevel: 'Light-Medium Roast (Rang sáng)',
    tasteNotes: ['Hương trà đen Bergamot', 'Vị cam vàng tươi mát', 'Mật ong hoa rừng', 'Body mượt như lụa'],
    description: `Dòng cà phê Single Origin Typica cổ thụ tuyển chọn từ những gốc cà phê hơn 40 năm tuổi tại Cầu Đất. Trái chín được tuyển lựa bằng tay với độ đường Brix > 22%, lên men yếm khí 48 giờ và phơi giàn trong nhà kính.

Mỗi ngụm cà phê bừng nở hương cam sảng khoái và vị ngọt sâu như mật ong hoa rừng. Sản phẩm dành riêng cho những tín đồ thưởng thức Pour-over thủ công.`,
    descriptionEn: "Rare heirloom Arabica Typica micro-lot harvested from heritage trees planted in 1930s Tram Hanh highlands. 72-hour anaerobic fermentation unleashes jasmine perfume, bergamot tea notes, and silky honey mouthfeel.",
    brewingRecommendation: 'Pha V60, Chemex, Origami, Aeropress hoặc Cold Drip.',
    image: '/images/prod_arabica_250g.jpg',
    images: [
      '/images/prod_arabica_250g.jpg',
      '/images/fanpage/retail-beans-bakery-display.jpg'
    ],
    inStock: true,
    isBestSeller: false
  },
  {
    id: 'traditional-phin-blend-500g',
    name: 'Cà Phê Mộc Phin Sài Gòn Đậm Vị 500g (Gu Truyền Thống)',
    nameEn: "Saigon Heritage Phin Coffee Blend 500g (Bold Taste)",
    alias: 'ca-phe-moc-phin-sai-gon-dam-vi-500g',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    categoryNameEn: "Coffee Bag",
    price: 310000,
    weight: '500g',
    origin: 'Cao nguyên Đắk Nông & Lâm Đồng',
    originEn: "Dak Nong & Lam Dong Highlands",
    roastLevel: 'Dark Roast (Rang đậm)',
    tasteNotes: ['Hương khói gỗ thông', 'Vị đắng bùi socola 85%', 'Độ sánh cao', 'Hậu vị ngọt sâu'],
    description: `Công thức rang mộc gia truyền tái hiện trọn vẹn phong vị cà phê vỉa hè Sài Gòn xưa: đậm, đắng, sánh bốc khói nghi ngút khi nhỏ từng giọt qua chiếc phin nhôm. Tuyệt đối không hương liệu nhân tạo, không bột bắp đậu nành.`,
    descriptionEn: "Tribute to authentic Saigon street coffee culture. Pure rustic beans roasted to Dark profile, delivering intense aroma, thick body, and lingering bittersweet cocoa that pairs heavenly with sweet condensed milk.",
    brewingRecommendation: 'Pha phin nhôm truyền thống, pha cà phê sữa đá Sài Gòn, cà phê đen đường phèn.',
    image: '/images/prod_robusta_500g.jpg',
    images: [
      '/images/prod_robusta_500g.jpg',
      '/images/fanpage/knowledge-phin-brewing-guide.jpg'
    ],
    inStock: true
  },

  // 2. Đồ Uống Đóng Chai Fresh (Bottled Drinks)
  {
    id: 'bottle-coldbrew-classic',
    name: 'Chai Cold Brew Truyền Thống Dolphy 330ml (Ủ Chậm 18 Giờ)',
    nameEn: "Dolphy Classic Cold Brew Bottle 330ml (18-Hour Slow Steep)",
    alias: 'chai-cold-brew-truyen-thong-dolphy-330ml',
    category: 'bottled-drinks',
    categoryName: 'Đồ uống đóng chai Fresh',
    categoryNameEn: "Bottled Drink",
    price: 65000,
    weight: '330ml',
    origin: 'Chiết xuất từ hạt 100% Arabica Cầu Đất',
    originEn: "100% Cau Dat Highland Arabica extract",
    tasteNotes: ['Thanh mát dịu nhẹ', 'Hương socola sữa', 'Ít chua', 'Hậu vị ngọt thanh'],
    description: `Được ủ lạnh chậm suốt 18 tiếng ở nhiệt độ 4°C bằng nước lọc tinh khiết RO, chiết xuất từng giọt tinh túy không gắt dầu, hàm lượng axit thấp, êm dịu cho dạ dày. Đóng chai thủy tinh cao cấp, bảo quản tủ mát 5 ngày.`,
    descriptionEn: "Slow-steeped over 18 hours with filtered cold water. Clean, refreshing profile highlighting ripe fruit sweetness, low bitterness, zero astringency, and wine-like floral complexity. Ready to drink chilled.",
    brewingRecommendation: 'Uống trực tiếp với đá lạnh hoặc thêm 1 lát cam tươi.',
    image: '/images/fanpage/drink-layered-coffee-tumbler.jpg',
    images: [
      '/images/fanpage/drink-layered-coffee-tumbler.jpg',
      '/images/fanpage/retail-ice-coffee-poster.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'bottle-coldbrew-orange',
    name: 'Chai Cold Brew Cam Vàng Mọng Nước 330ml (Signature Drink)',
    nameEn: "Cold Brew Juicy Orange Bottle 330ml (Signature Drink)",
    alias: 'chai-cold-brew-cam-vang-mong-nuoc-330ml',
    category: 'bottled-drinks',
    categoryName: 'Đồ uống đóng chai Fresh',
    categoryNameEn: "Bottled Drink",
    price: 75000,
    weight: '330ml',
    origin: 'Cold Brew Arabica + Nước ép cam vàng Navel tươi',
    originEn: "Arabica Cold Brew + Fresh Navel Orange Juice",
    tasteNotes: ['Chua ngọt sảng khoái', 'Hương tinh dầu vỏ cam', 'Hậu vị cà phê thơm nồng'],
    description: `Món giải khát 'best-seller' những trưa hè oi ả tại Thảo Điền! Sự kết hợp bùng nổ giữa cà phê ủ lạnh mượt mà và nước ép cam vàng Navel ngọt mọng, điểm xuyết thêm chút hương hoa hồi thoang thoảng.`,
    descriptionEn: "Refreshing best-seller fusing slow-steeped Cau Dat Arabica cold brew with fresh California Navel orange juice and rosemary infusion. Vibrant, thirst-quenching, and revitalizing.",
    brewingRecommendation: 'Lắc đều, rót ra ly kèm đá viên và thưởng thức.',
    image: '/images/fanpage/drink-strawberry-smoothie-tumbler.jpg',
    images: [
      '/images/fanpage/drink-strawberry-smoothie-tumbler.jpg',
      '/images/fanpage/drink-layered-coffee-tumbler.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'bottle-salted-cream-coffee',
    name: 'Chai Cà Phê Muối Kem Béo Dolphy Signature 330ml',
    nameEn: "Dolphy Salted Cream Coffee Bottle 330ml (Signature)",
    alias: 'chai-ca-phe-muoi-kem-beo-dolphy-signature-330ml',
    category: 'bottled-drinks',
    categoryName: 'Đồ uống đóng chai Fresh',
    categoryNameEn: "Bottled Drink",
    price: 68000,
    weight: '330ml',
    origin: 'Cà phê phin Robusta + Lớp màng kem muối biển hồng Himalaya',
    originEn: "Robusta Phin Extract + Pink Himalayan Salt Foam",
    tasteNotes: ['Vị mặn mòi tinh tế', 'Kem béo ngậy mịn màng', 'Cà phê đậm đà', 'Hài hòa quyến rũ'],
    description: `Lớp kem béo làm từ sữa tươi thanh trùng kết hợp muối hồng Himalaya nguyên khoáng, phủ lên trên cốt cà phê phin đậm đặc được chiết xuất chậm từ hạt Robusta rang nâu.`,
    descriptionEn: "Addictive blend of bold Robusta coffee topped with velvety sweet cream infused with pink Himalayan salt. Rich, comforting, and perfectly balanced.",
    brewingRecommendation: 'Ngon nhất khi uống từng ngụm nghiêng 45 độ để kem muối và cà phê cùng hòa quyện.',
    image: '/images/fanpage/drink-salted-cream-tulip.jpg',
    images: [
      '/images/fanpage/drink-salted-cream-tulip.jpg',
      '/images/fanpage/retail-ice-coffee-poster.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'bottle-bac-siu-saigon',
    name: 'Chai Bạc Sỉu Sài Gòn Ba Tầng 330ml (Gu Thảo Điền)',
    nameEn: "Saigon Three-Layer Bac Siu Bottle 330ml (Thao Dien Taste)",
    alias: 'chai-bac-siu-saigon-ba-tang-330ml',
    category: 'bottled-drinks',
    categoryName: 'Đồ uống đóng chai Fresh',
    categoryNameEn: "Bottled Drink",
    price: 62000,
    weight: '330ml',
    origin: 'Sữa đặc Ngôi Sao + Sữa tươi thanh trùng Đà Lạt + Cốt cà phê Dolphy',
    originEn: "Sweet Condensed Milk + Fresh Milk + Dolphy Coffee Shot",
    tasteNotes: ['Ngọt bùi béo ngậy', 'Thơm nồng hương cà phê', 'Vị thanh không ngấy'],
    description: `Thức uống quốc dân được khách hàng nước ngoài và bản xứ tại Thảo Điền khen ngợi suốt 13 năm qua: sữa nhiều hơn cà phê, béo thơm ngất ngây mà không hề ngọt gắt.`,
    descriptionEn: "The beloved Thao Dien morning ritual in a portable bottle. Creamy condensed milk, pasture-fresh Dalat milk, and a delicate floating shot of aromatic espresso.",
    brewingRecommendation: 'Lắc nhẹ trước khi uống, dùng kèm đá bi.',
    image: '/images/fanpage/retail-ice-coffee-poster.jpg',
    images: [
      '/images/fanpage/retail-ice-coffee-poster.jpg',
      '/images/fanpage/drink-layered-coffee-tumbler.jpg'
    ],
    inStock: true
  },
  {
    id: 'bottle-oolong-milk-tea',
    name: 'Chai Trà Sữa Ô Long Nướng Dolphy 500ml (Kèm Thạch Củ Năng)',
    nameEn: "Roasted Oolong Milk Tea Bottle 500ml (With Water Chestnut Jelly)",
    alias: 'chai-tra-sua-o-long-nuong-dolphy-500ml',
    category: 'bottled-drinks',
    categoryName: 'Đồ uống đóng chai Fresh',
    categoryNameEn: "Bottled Drink",
    price: 79000,
    weight: '500ml',
    origin: 'Lá trà Ô Long Cao Sơn Bảo Lộc sao lửa than củi',
    originEn: "Charcoal-roasted Bao Loc Highland Oolong Leaves",
    tasteNotes: ['Mùi khói trà nướng thơm lừng', 'Vị chát dịu hậu ngọt', 'Sữa béo thanh thoát'],
    description: `Ủ từ cốt trà Ô Long nướng nguyên lá cao cấp Bảo Lộc, kết hợp cùng sữa tươi nguyên kem. Mùi trà thơm đượm nồng nàn lưu luyến mãi nơi cuống họng.`,
    descriptionEn: "Premium whole oolong tea leaves charcoal-roasted to perfection, brewed with creamy dairy and served with crunchy handmade water chestnut jelly.",
    brewingRecommendation: 'Uống lạnh trực tiếp từ chai hoặc thêm đá.',
    image: '/images/fanpage/drink-okinawa-milk-tea.jpg',
    images: [
      '/images/fanpage/drink-okinawa-milk-tea.jpg'
    ],
    inStock: true
  },

  // 3. Bánh Nướng Tươi Dolphy Bakery (Bakery & Pastries)
  {
    id: 'bakery-butter-croissant',
    name: 'Bánh Croissant Bơ Pháp Truyền Thống (Nướng Tươi Mỗi Sáng)',
    nameEn: "Traditional French Butter Croissant (Baked Fresh Daily)",
    alias: 'banh-croissant-bo-phap-truyen-thong',
    category: 'bakery',
    categoryName: 'Bánh Dolphy Bakery',
    categoryNameEn: "Artisanal Bakery",
    price: 45000,
    weight: '75g',
    origin: 'Bơ nguyên chất Elle & Vire nhập khẩu từ Pháp',
    originEn: "100% Elle & Vire Pure Butter imported from France",
    tasteNotes: ['Vỏ ngoài giòn rụm', 'Ruột tổ ong xốp mềm', 'Thơm lừng mùi bơ thơm'],
    description: `Chiếc bánh sừng bò kinh điển được nhào nặn và ủ bột kỳ công 24 giờ với hàng chục lớp bơ Pháp thơm nức. Thưởng thức cùng tách Cappuccino hoặc Americano nóng là bữa sáng lý tưởng chuẩn phong cách châu Âu tại Thảo Điền.`,
    descriptionEn: "Baked fresh every dawn across Dolphy bakeries. Honeycomb flaky layers, golden crisp exterior, and melt-in-your-mouth French butter aroma. The quintessential coffee pairing.",
    brewingRecommendation: 'Dùng kèm cà phê sáng hoặc hâm nóng lại trong lò nướng 2 phút ở 160°C.',
    image: '/images/fanpage/retail-beans-bakery-display.jpg',
    images: [
      '/images/fanpage/retail-beans-bakery-display.jpg',
      '/images/fanpage/retail-teabreak-catering.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'bakery-pain-au-chocolat',
    name: 'Bánh Pain au Chocolat Socola Bỉ Đậm Đà',
    nameEn: "Rich Belgian Chocolate Pain au Chocolat",
    alias: 'banh-pain-au-chocolat-socola-bi',
    category: 'bakery',
    categoryName: 'Bánh Dolphy Bakery',
    categoryNameEn: "Artisanal Bakery",
    price: 52000,
    weight: '85g',
    origin: 'Nhân socola thanh Callebaut Bỉ 54%',
    originEn: "Callebaut Belgian 54% Dark Chocolate Batons",
    tasteNotes: ['Giòn xốp nhiều tầng', 'Socola tan chảy béo đắng', 'Mùi bơ ngào ngạt'],
    description: `Hai thanh socola đen Bỉ thượng hạng ẩn mình bên trong lớp vỏ ngàn lớp giòn tan. Khi cắn vào, socola hơi ấm quyện cùng bột bánh béo ngậy tạo nên trải nghiệm vị giác khó quên.`,
    descriptionEn: "Flaky laminated French pastry dough wrapped around twin bars of rich 54% Belgian dark chocolate. Warm in the oven for a decadent molten cocoa sensation.",
    brewingRecommendation: 'Thích hợp với Latte nóng hoặc Trà Ô Long.',
    image: '/images/fanpage/retail-teabreak-catering.jpg',
    images: [
      '/images/fanpage/retail-teabreak-catering.jpg',
      '/images/fanpage/retail-beans-bakery-display.jpg'
    ],
    inStock: true
  },
  {
    id: 'bakery-blueberry-danish',
    name: 'Bánh Danish Việt Quất Phô Mai Tươi (Blueberry Cheese Danish)',
    nameEn: "Blueberry Fresh Cream Cheese Danish",
    alias: 'banh-danish-viet-quat-pho-mai-tuoi',
    category: 'bakery',
    categoryName: 'Bánh Dolphy Bakery',
    categoryNameEn: "Artisanal Bakery",
    price: 58000,
    weight: '90g',
    origin: 'Mứt quả việt quất Canada & Phô mai kem Anchor',
    originEn: "Canadian Wild Blueberry Compote & Anchor Cream Cheese",
    tasteNotes: ['Chua thanh ngọt mọng', 'Kem phô mai béo ngậy', 'Đế bánh giòn rụm'],
    description: `Sự kết hợp hoàn hảo giữa vị chua ngọt tự nhiên của quả việt quất tươi và lớp kem phô mai béo mềm trên nền đế bánh Danish nướng vàng ươm.`,
    descriptionEn: "Crisp laminated pastry nest cradling smooth, tangy cream cheese and vibrant wild blueberry compote. Bright, fruity, and delightful.",
    brewingRecommendation: 'Rất hợp khi nhâm nhi cùng Cold Brew cam hoặc Trà nóng.',
    image: '/images/fanpage/retail-beans-bakery-display.jpg',
    images: [
      '/images/fanpage/retail-beans-bakery-display.jpg'
    ],
    inStock: true
  },
  {
    id: 'bakery-cookies-chocochip',
    name: 'Hộp Bánh Cookies Chocolate Chip Hạt Điều Dolphy (Hộp 6 Chiếc)',
    nameEn: "Chocolate Chip & Roasted Cashew Cookies (Box of 6)",
    alias: 'hop-banh-cookies-chocolate-chip-hat-dieu-dolphy',
    category: 'bakery',
    categoryName: 'Bánh Dolphy Bakery',
    categoryNameEn: "Artisanal Bakery",
    price: 85000,
    weight: '180g (6 chiếc đóng túi riêng)',
    origin: 'Hạt điều Bình Phước tuyển chọn + Hạt socola chip',
    originEn: "Binh Duong Golden Cashews + Dark Chocolate Chips",
    tasteNotes: ['Giòn tan rôm rốp', 'Bùi béo hạt điều', 'Ngọt dịu không ngấy'],
    description: `Món bánh ăn vặt nướng thủ công được đóng hộp xinh xắn, là bạn đồng hành tuyệt vời trong các buổi học nhóm, làm việc văn phòng hoặc quà tặng nhỏ xinh.`,
    descriptionEn: "Freshly baked artisanal cookies combining crunchy roasted Binh Duong cashews and dark chocolate morsels. Perfectly crumbly with a hint of sea salt.",
    brewingRecommendation: 'Chấm nhẹ vào ly cà phê sữa hoặc trà chiều.',
    image: '/images/fanpage/retail-teabreak-catering.jpg',
    images: [
      '/images/fanpage/retail-teabreak-catering.jpg'
    ],
    inStock: true
  },

  // 4. Dụng Cụ Pha Chế & Merchandise (Gear & Lifestyle)
  {
    id: 'phin-ca-phe-nhom',
    name: 'Phin Cà Phê Nhôm Mạ Anode Dolphy (4 Màu Sắc Cao Cấp)',
    nameEn: "Dolphy Anodized Aluminum Coffee Phin (4 Premium Colors)",
    alias: 'phin-ca-phe-nhom-truyen-thong',
    category: 'equipment',
    categoryName: 'Dụng cụ & Merchandise',
    categoryNameEn: "Brewing Gear",
    originEn: "High-grade food-safe anodized aluminum",
    price: 100000,
    weight: '150g',
    description: `Phin nhôm truyền thống được chế tác từ chất liệu nhôm dày dặn, cứng cáp với công nghệ mạ anode cao cấp, giúp duy trì nhiệt độ ủ ổn định và bảo toàn trọn vẹn hương vị cà phê nguyên bản.

Sản phẩm có 4 màu sắc tinh tế để bạn lựa chọn:
1. Đen truyền thống (Traditional Black)
2. Vàng đồng quý phái (Bronze Gold)
3. Xám đậm hiện đại (Dark Grey)
4. Xanh dương đại dương (Royal Blue)`,
    descriptionEn: "Precision-engineered aluminum phin with laser-cut micro-perforations for even water saturation and optimal extraction. Available in Dolphy Navy, Rose Gold, Matte Silver, and Amber Bronze.",
    image: '/images/prod_phin_nhom.jpg',
    images: [
      '/images/prod_phin_nhom.jpg',
      '/images/fanpage/knowledge-phin-brewing-guide.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'dolphy-tumbler-500ml',
    name: 'Bình Giữ Nhiệt Dolphy Stainless Steel Tumbler 500ml (Xanh Đại Dương)',
    nameEn: "Dolphy Stainless Steel Thermal Tumbler 500ml (Ocean Navy)",
    alias: 'binh-giu-nhiet-dolphy-tumbler-500ml',
    category: 'equipment',
    categoryName: 'Dụng cụ & Merchandise',
    categoryNameEn: "Merchandise",
    originEn: "Double-wall Vacuum Insulated SUS 304 Steel",
    price: 280000,
    weight: '300g (Ruột Inox 304 2 lớp chân không)',
    description: `Bình giữ nhiệt Dolphy phiên bản giới hạn với họa tiết chú cá heo xanh khắc laser tinh xảo. Khả năng giữ nóng 8 giờ và giữ lạnh đá viên lên đến 18 giờ.

Đặc quyền sống xanh: Mang bình đến bất kỳ chi nhánh Dolphy nào được giảm trực tiếp 10% trên hóa đơn và tích thêm 1 Green Stamp!`,
    descriptionEn: "Signature Dolphy thermal tumbler keeping beverages icy cold for 24 hours or steaming hot for 12 hours. BPA-free leakproof lid. Enjoy 10% discount on beverage refills at all Dolphy stores.",
    image: '/images/fanpage/community-green-stamp-card.jpg',
    images: [
      '/images/fanpage/community-green-stamp-card.jpg',
      '/images/fanpage/drink-layered-coffee-tumbler.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'barista-milk-pitcher',
    name: 'Ca Đánh Sữa Barista Pitcher 450ml Thép Không Gỉ (Vạch Chia Đo SCA)',
    nameEn: "Barista Milk Steaming Pitcher 450ml Stainless Steel (SCA Scale)",
    alias: 'ca-danh-sua-barista-pitcher-450ml',
    category: 'equipment',
    categoryName: 'Dụng cụ & Merchandise',
    categoryNameEn: "Brewing Gear",
    originEn: "SCA Standard Heavy Duty Food-Grade SUS 304",
    price: 220000,
    weight: '210g',
    description: `Ca đánh sữa chuyên nghiệp chuẩn học viện Dolphy Barista Academy. Miệng rót mỏ vịt nhọn giúp kiểm soát dòng sữa cực mảnh, dễ dàng tạo hình các họa tiết phức tạp như Thiên nga, Rosetta nhiều cánh hay Tulip đa tầng.`,
    descriptionEn: "Professional barista pitcher with precision pointed spout for intricate Latte Art. Internal measurement markings facilitate exact milk portioning and zero waste.",
    image: '/images/fanpage/academy-latte-art-pouring.jpg',
    images: [
      '/images/fanpage/academy-latte-art-pouring.jpg',
      '/images/fanpage/academy-milk-frothing.jpg'
    ],
    inStock: true
  },
  {
    id: 'dolphiers-striped-tshirt',
    name: 'Áo Thun Dolphier Official Sọc Xanh Trắng (100% Cotton 2 Chiều)',
    nameEn: "Official Dolphier Striped T-Shirt (100% 2-Way Cotton)",
    alias: 'ao-thun-dolphier-official-soc-xanh-trang',
    category: 'equipment',
    categoryName: 'Dụng cụ & Merchandise',
    categoryNameEn: "Merchandise",
    originEn: "Premium Combed Cotton 250gsm, Vietnam Made",
    price: 195000,
    weight: '250g (Đủ size S, M, L, XL)',
    description: `Chiếc áo thun đồng phục mang tính biểu tượng của gia đình Dolphy! Chất vải thun cotton 100% dày dặn, thấm hút mồ hôi tốt với họa tiết sọc ngang xanh - trắng năng động, ngực thêu logo cá heo sắc sảo.`,
    descriptionEn: "Dolphy’s iconic blue-and-white maritime striped uniform t-shirt. Breathable, durable, and comfortable for all-day urban wear. Loved by baristas and community friends alike.",
    image: '/images/fanpage/career-dolphiers-striped-uniform.jpg',
    images: [
      '/images/fanpage/career-dolphiers-striped-uniform.jpg',
      '/images/fanpage/career-customer-warm-greeting.jpg'
    ],
    inStock: true
  },

  // 5. Combo Quà Tặng & Dịch Vụ Doanh Nghiệp (Combos & B2B)
  {
    id: 'combo-phin-traditional-light',
    name: 'COMBO PHIN VIETNAM - TRADITIONAL LIGHT (Gu Tinh Tế)',
    nameEn: "Vietnam Phin Combo - Traditional Light (Floral & Delicate)",
    alias: 'combo-phin-vietnam-traditional-light',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "Gift Box & Combo",
    originEn: "Cau Dat Arabica + Anodized Aluminum Phin",
    price: 779000,
    compareAtPrice: 840000,
    weight: '750g cà phê + 1 phin nhôm',
    description: `Combo Traditional là dòng quà tặng thiết thực và sang trọng, kết hợp giữa phin nhôm truyền thống và các lựa chọn cà phê đa dạng, được tinh chỉnh để phù hợp với từng gu thưởng thức riêng biệt.

COMBO TRADITIONAL NHẸ (Gu Tinh Tế):
Dành cho người yêu thích hương thơm phong phú, vị chua thanh nhẹ nhàng và hậu vị ngọt sâu. Sử dụng 100% hạt Arabica cao cấp.

Thành phần hộp quà gồm:
• 01 gói cà phê Arabica thượng hạng (500gr)
• 01 gói cà phê Arabica thượng hạng (250gr)
• 01 Phin cà phê nhôm cao cấp dập logo Dolphy tinh xảo
• Hộp quà sang trọng thiết kế đậm phong vị Tết truyền thống`,
    descriptionEn: "The perfect starter kit for gentle, aromatic coffee lovers. Includes 250g Arabica Cau Dat, 1 Dolphy anodized phin, and step-by-step brewing guide card.",
    image: '/images/prod_combo_phin_light.jpg',
    images: [
      '/images/prod_combo_phin_light.jpg',
      '/images/prod_phin_nhom.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'combo-phin-traditional-medium',
    name: 'COMBO PHIN VIET NAM - TRADITIONAL MEDIUM (Gu Hài Hòa)',
    nameEn: "Vietnam Phin Combo - Traditional Medium (Balanced Harmony)",
    alias: 'cappuccino',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "Gift Box & Combo",
    originEn: "Espresso Blend Signature + Ocean Navy Phin",
    price: 679000,
    compareAtPrice: 730000,
    weight: '750g cà phê + 1 phin nhôm',
    description: `COMBO TRADITIONAL VỪA (Gu Hài Hòa):
Lựa chọn phổ biến nhất với hương vị hài hòa, cân bằng hoàn hảo giữa độ đậm và hương thơm nồng nàn. Sử dụng dòng cà phê phối trộn giữa Arabica và Robusta (tỉ lệ vàng 80:20).

Thành phần combo gồm:
• 01 gói cà phê Mix Arabica & Robusta (500gr)
• 01 gói cà phê Mix Arabica & Robusta (250gr)
• 01 Phin cà phê nhôm cao cấp Dolphy
• Hộp quà Tết trang nhã kèm thiệp chúc mừng`,
    descriptionEn: "Dolphy’s signature balance. Includes 250g Espresso Blend (80/20), 1 Ocean Navy anodized aluminum phin, and brewing ratio recipe.",
    image: '/images/prod_combo_phin_medium.jpg',
    images: [
      '/images/prod_combo_phin_medium.jpg',
      '/images/prod_phin_nhom.jpg'
    ],
    inStock: true
  },
  {
    id: 'combo-phin-traditional-strong',
    name: 'COMBO PHIN VIETNAM - TRADITIONAL STRONG (Gu Mạnh Mẽ)',
    nameEn: "Vietnam Phin Combo - Traditional Strong (Bold Energy)",
    alias: 'latte',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "Gift Box & Combo",
    originEn: "Fine Robusta Lam Dong + Matte Black Phin",
    price: 579000,
    compareAtPrice: 635000,
    weight: '750g cà phê + 1 phin nhôm',
    description: `COMBO TRADITIONAL ĐẬM (Gu Mạnh Mẽ):
Set quà tặng dành cho người yêu thích gu cà phê Việt Nam truyền thống mạnh mẽ, đậm đà, body sánh quyện và giàu năng lượng. Sử dụng 100% hạt Robusta tuyển chọn.

Thành phần combo gồm:
• 01 gói cà phê Robusta tuyển chọn (500gr)
• 01 gói cà phê Robusta tuyển chọn (250gr)
• 01 Phin cà phê nhôm truyền thống Dolphy
• Hộp quà cao cấp`,
    descriptionEn: "Designed for seekers of intense energy and authentic street coffee spirit. Includes 250g Fine Robusta, 1 premium phin, and condensed milk measuring cup.",
    image: '/images/prod_combo_phin_strong.jpg',
    images: [
      '/images/prod_combo_phin_strong.jpg',
      '/images/prod_phin_nhom.jpg'
    ],
    inStock: true
  },
  {
    id: 'combo-tet-giftbox-2026',
    name: 'Hộp Quà Tết Dolphy Giáp Thìn 2026 "Xuân Khởi Sắc"',
    alias: 'hop-qua-tet-dolphy-giap-thin-2026-xuan-khoi-sac',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "Gift Box & Combo",
    originEn: "Deluxe Special Edition Box",
    price: 950000,
    compareAtPrice: 1100000,
    weight: '1.2kg (Trọn bộ quà tặng cao cấp)',
    description: `Set quà Tết độc quyền kết hợp giữa cà phê rang mộc thượng hạng và phụ kiện lễ hội:
• 01 Gói Arabica Cầu Đất 250g
• 01 Gói Espresso Signature 250g
• 01 Phin nhôm mạ vàng Gold Edition
• 01 Bộ bao lì xì Dolphy may mắn độc quyền
• Hộp cứng vân gỗ bọc nhung ép kim sang trọng.`,
    descriptionEn: "Festive luxury gift box featuring Cau Dat Specialty beans, 1 gold anodized phin, 1 box of chocolate chip cashew cookies, and handwritten greeting card from Dolphy founder.",
    image: '/images/fanpage/career-red-envelopes-tet.jpg',
    images: [
      '/images/fanpage/career-red-envelopes-tet.jpg',
      '/images/prod_combo_phin_light.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'b2b-teabreak-mini-package',
    name: 'Gói Tiệc Teabreak Doanh Nghiệp Mini (20 - 30 Khách)',
    nameEn: "Corporate Mini Teabreak Package (20 - 30 Guests)",
    alias: 'goi-tiec-teabreak-doanh-nghiep-mini',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "B2B Catering",
    originEn: "On-site Office Catering Service",
    price: 2500000,
    weight: 'Trọn gói setup tận nơi',
    description: `Giải pháp tiệc teabreak trọn gói cho hội thảo, workshop, họp văn phòng:
• 30 Suất đồ uống (Cà phê phin sữa đá, Trà trái cây nhiệt đới, Nước ép tươi)
• 60 Chiếc bánh ngọt & mặn nướng tươi (Croissant bơ Pháp, Pain au chocolat, Danish việt quất)
• Trái cây tươi cắt sẵn theo mùa (Dưa hấu, Nho Mỹ, Dâu tây)
• Đầy đủ khay kệ trang trí hoa tươi, ly dĩa giấy thân thiện môi trường và nhân viên setup chu đáo.`,
    descriptionEn: "All-inclusive catering package for office seminars, board meetings, and team celebrations. Includes 30 assorted fresh pastries, 30 bottled specialty drinks, and branded eco-friendly tableware.",
    image: '/images/fanpage/retail-teabreak-catering.jpg',
    images: [
      '/images/fanpage/retail-teabreak-catering.jpg',
      '/images/fanpage/community-b2b-corporate-booth.jpg'
    ],
    inStock: true
  },
  {
    id: 'b2b-teabreak-vip-package',
    name: 'Gói Tiệc Teabreak & Quầy Barista Lưu Động VIP (50 - 100 Khách)',
    nameEn: "VIP Corporate Teabreak & Mobile Barista Bar (50 - 100 Guests)",
    alias: 'goi-tiec-teabreak-quay-barista-luu-dong-vip',
    category: 'combo',
    categoryName: 'Combo & Doanh nghiệp',
    categoryNameEn: "B2B Catering",
    originEn: "Full Mobile Barista Pop-up Station",
    price: 6800000,
    weight: 'Trọn gói quầy Barista pha trực tiếp',
    description: `Đẳng cấp khác biệt cho sự kiện khai trương, hội nghị khách hàng, giải thi đấu:
• Mang máy pha Espresso công nghiệp và quầy bar gỗ Dolphy đến tận địa điểm
• 02 Barista chuyên nghiệp phục vụ pha chế trực tiếp không giới hạn (Latte Art, Cappuccino, Cold Brew...)
• Bàn tiệc bánh ngọt Âu cao cấp 5 sao và trà hoa thảo mộc
• Đã được tin dùng bởi Prudential Tower, SSIS, Spartan Race Vietnam.`,
    descriptionEn: "Turnkey mobile specialty cafe experience at your venue. Includes 2 certified baristas, commercial espresso machine, unlimited menu drinks, and gourmet European pastry buffet.",
    image: '/images/fanpage/community-b2b-corporate-booth.jpg',
    images: [
      '/images/fanpage/community-b2b-corporate-booth.jpg',
      '/images/fanpage/retail-office-teabreak-service.jpg',
      '/images/fanpage/retail-teabreak-catering.jpg'
    ],
    inStock: true,
    isBestSeller: true
  }
];

export const branchesData: Branch[] = [
  // Khu vực Quận 2 (TP. Thủ Đức)
  {
    id: 'branch-08-thao-dien',
    name: 'Dolphy Café - 08 Thảo Điền',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '08 Thảo Điền, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30 (Mở cửa mỗi ngày)',
    mapUrl: 'https://maps.google.com/?q=8+Thao+Dien+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-08-thao-dien-clean.jpg',
    features: ['Góc phố Thảo Điền rợp bóng mát', 'Cộng đồng Expat quốc tế', 'Thân thiện thú cưng (Pet-friendly)', 'Take-away & Giao hàng tận nơi'],
    featuresEn: ["Shaded Thao Dien corner","International expat community","Pet-friendly space","Take-away & Doorstep delivery"],
    isFlagship: true
  },
  {
    id: 'branch-28-thao-dien',
    name: 'Dolphy Café - 28 Thảo Điền',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '28 Thảo Điền, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30 (Mở cửa mỗi ngày)',
    mapUrl: 'https://maps.google.com/?q=28+Thao+Dien+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-28-thao-dien-facade-clean.jpg',
    features: ['Biểu tượng Dolphy Thảo Điền từ 2013', 'Trung tâm Dolphy Barista Academy', 'Không gian xanh thoáng đãng', 'Wifi tốc độ cao làm việc'],
    featuresEn: ["Thao Dien icon since 2013","Dolphy Barista Academy Hub","Lush open garden ambiance","High-speed coworking Wi-Fi"],
    isFlagship: true
  },
  {
    id: 'branch-03-nguyen-van-huong',
    name: 'Dolphy Café - 03 Nguyễn Văn Hưởng',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '03 Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30',
    mapUrl: 'https://maps.google.com/?q=3+Nguyen+Van+Huong+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-03-nguyen-van-huong.jpg',
    features: ['Không gian mộc mạc vỉa hè Sài Gòn', 'Cây cổ thụ tỏa bóng xanh mát', 'Điểm hẹn cà phê sáng lý tưởng', 'Chỗ để xe rộng rãi'],
    featuresEn: ["Rustic Saigon street cafe vibe","Shaded by ancient trees","Ideal morning coffee rendezvous","Spacious free parking"]
  },
  {
    id: 'branch-23-nguyen-van-huong',
    name: 'Dolphy Café - 23 Nguyễn Văn Hưởng (Flagship)',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '23 Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30',
    mapUrl: 'https://maps.google.com/?q=23+Nguyen+Van+Huong+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/23-nguyen-van-huong-night.jpg',
    features: ['Kiến trúc 3 tầng vòm bê tông thô mộc', 'Rooftop gió sông thoáng đãng', 'Bàn dài làm việc nhóm lớn', 'Không gian check-in độc bản'],
    featuresEn: ["3-storey raw architectural arches","Breezy river-view rooftop","Large group meeting tables","Unique photo check-in spot"],
    isFlagship: true
  },
  {
    id: 'branch-28-tran-luu',
    name: 'Dolphy Café - 28 Trần Lựu',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'An Phú, TP. Thủ Đức',
    address: '28 Trần Lựu, Phường An Phú, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=28+Tran+Luu+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-28-tran-luu.jpg',
    features: ['Sân vườn biệt thự An Phú', 'Nơi tổ chức Junior Barista Championship', 'Gặp gỡ đối tác trang nhã', 'Khuôn viên yên bình'],
    featuresEn: ["An Phu villa garden setting","Junior Barista Championship venue","Elegant corporate meeting spot","Peaceful tranquil retreat"]
  },
  {
    id: 'branch-113-duong-van-an',
    name: 'Dolphy Café - 113 Dương Văn An',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'An Phú, TP. Thủ Đức',
    address: '113 Dương Văn An, Phường An Phú, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=113+Duong+Van+An+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-113-duong-van-an.jpg',
    features: ['Khu dân cư hiện đại An Phú', 'Bàn làm việc nhóm lớn', 'Menu Cloud Collection mới', 'Ổ cắm điện từng bàn'],
    featuresEn: ["Modern An Phu residential zone","Large team collaborative tables","Fresh Cloud Collection drinks","Power outlets at every table"]
  },

  // Khu vực Quận 7 (Phú Mỹ Hưng)
  {
    id: 'branch-1441-nguyen-van-linh',
    name: 'Dolphy Café - 1441 Nguyễn Văn Linh',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: '1441 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=1441+Nguyen+Van+Linh+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-1441-nguyen-van-linh.jpg',
    features: ['Đại lộ Nguyễn Văn Linh sầm uất', 'Kính panorama ngập tràn ánh sáng', 'Dolphy Academy Training Hub Q7', 'Hồ cá Koi thanh tịnh'],
    featuresEn: ["Bustling Nguyen Van Linh boulevard","Sunlit panoramic glass windows","Dolphy Academy D7 training hub","Peaceful Koi pond garden"],
    isFlagship: true
  },
  {
    id: 'branch-nam-vien',
    name: 'Dolphy Café - Nam Viên (Phú Mỹ Hưng)',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phú, Quận 7',
    address: 'Khu dân cư Nam Viên, Phường Tân Phú, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=Nam+Vien+Phu+My+Hung+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-nam-vien-pmh.jpg',
    features: ['Công viên Nam Viên rợp bóng cây', 'Không khí trong lành yên tĩnh', 'Chỗ ngồi ngoài trời thoáng đãng', 'Thân thiện thú cưng'],
    featuresEn: ["Surrounded by Nam Vien lush park","Serene fresh green atmosphere","Spacious alfresco terrace","Pet-friendly friendly patio"]
  },
  {
    id: 'branch-ly-long-tuong',
    name: 'Dolphy Café - Lý Long Tường (Nam Quang)',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: 'R3-21 Lý Long Tường, KDC Nam Quang, Phú Mỹ Hưng, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=R3-21+Ly+Long+Tuong+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-ly-long-tuong-nam-quang.jpg',
    features: ['Trung tâm phố đi bộ Phú Mỹ Hưng', 'Thiết kế biển hiệu xanh nổi bật', 'Chỗ ngồi bệt & bàn cao', 'Phục vụ cư dân Hàn Quốc & Expat'],
    featuresEn: ["Phu My Hung pedestrian hub","Vibrant signature ocean-blue facade","Floor cushions & high tables","Welcoming Korean & expat residents"]
  },
  {
    id: 'branch-hoang-van-thai',
    name: 'Dolphy Café - Prudential Tower (Hoàng Văn Thái)',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: '08 Hoàng Văn Thái, Khu Phố 1, Quận 7 (Tòa nhà Prudential), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 20:30 (Thứ 2 - Thứ 7)',
    mapUrl: 'https://maps.google.com/?q=8+Hoang+Van+Thai+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-08-hoang-van-thai-prudential.jpg',
    features: ['Tòa nhà Prudential trung tâm tài chính Q7', 'Phục vụ văn phòng & tiệc Teabreak', 'Take-away siêu nhanh', 'Đặt món online giao tận bàn'],
    featuresEn: ["Prudential Tower financial center","Corporate office & teabreak service","Lightning-fast express take-away","Order online with table delivery"]
  },

  // Khu vực Bình Thạnh
  {
    id: 'branch-pham-viet-chanh',
    name: 'Dolphy Café - 79 Phạm Viết Chánh',
    area: 'Quận Bình Thạnh',
    district: 'Phường 19, Bình Thạnh',
    address: '79 Phạm Viết Chánh, Phường 19, Quận Bình Thạnh, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30',
    mapUrl: 'https://maps.google.com/?q=79+Pham+Viet+Chanh+Binh+Thanh+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/branch-79-pham-viet-chanh.jpg',
    features: ['Khu phố Tây/Nhật Phạm Viết Chánh sôi động', 'Nhạc acoustic nhẹ nhàng', 'Bạc sỉu & cà phê pha phin truyền thống', 'Góc vỉa hè ngắm phố'],
    featuresEn: ["Vibrant Japanese/Western quarter","Gentle acoustic soundtrack","Heritage Bac Siu & Phin coffee","Charming sidewalk street-view"]
  },

  // Khu vực Quận 3 (Trung Tâm)
  {
    id: 'branch-ba-huyen-thanh-quan',
    name: 'Dolphy Café - 08 Bà Huyện Thanh Quan (Mới)',
    area: 'Quận 3 (Trung Tâm)',
    district: 'Phường Võ Thị Sáu, Quận 3',
    address: '08 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:00 - 22:00 (Mở cửa mỗi ngày)',
    mapUrl: 'https://maps.google.com/?q=8+Ba+Huyen+Thanh+Quan+District+3+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/fanpage/soft-opening-ba-huyen-thanh-quan.jpg',
    features: ['Chi nhánh trung tâm mới nhất', 'Ưu đãi Soft Opening 30%', 'Không gian cổ điển lãng mạn', 'Menu bánh nướng Pháp cao cấp'],
    featuresEn: ["Newest city center flagship","Soft opening special 30% off","Romantic neoclassical interior","Gourmet French bakery menu"],
    isFlagship: true
  }
];

export const articlesData: Article[] = [
  {
    id: 'junior-barista-championship-2024',
    titleEn: 'Dolphy Junior Barista Championship 2024: Igniting the Flame of Youth Passion at 28 Tran Luu',
    categoryEn: 'Academy & Contests',
    readTimeEn: '6 min read',
    excerptEn: 'Annual internal skills showcase bringing together young talents across 10 Dolphy branches to compete in Latte Art mastery and coffee sensory calibration.',
    contentEn: `On March 20, 2024, at Dolphy Café 28 Tran Luu (An Phu, Thu Duc City), the grand finals of the DOLPHY JUNIOR BARISTA CHAMPIONSHIP 2024 took place with incredible energy and thrilling sportsmanship.

MORE THAN A COMPETITION, A GROWTH JOURNEY
Gathering over 30 promising young baristas representing 10 branches across HCMC, contestants navigated intense knockout rounds (Quarterfinals, Semifinals, and Grand Finals) across key challenges:
• Challenge 1: Espresso grinder calibration (Dial-in) under a strict 10-minute countdown.
• Challenge 2: Advanced Latte Art precision pouring with 3 mandatory patterns: Multi-layered Heart, Symmetrical Tulip, and Delicate Rosetta.
• Challenge 3: Creative Signature Beverage crafted on the foundation of authentic single-origin Cau Dat Arabica.

RIGOROUS EVALUATION BY SCA-CERTIFIED JUDGES
The judging panel, composed of Head Baristas and Master Trainers, evaluated each cup against SCA international standards: from the glossy sheen of micro-foam to the balance of bright acidity and rich sweetness, and the heartfelt service ethos of "Happiness in a cup".

The championship trophy and honorary graduation certificates celebrated worthy champions, opening career pathways to Shift Leader and future Trainer positions at Dolphy Academy.`,
    title: 'Dolphy Junior Barista Championship 2024: Nơi Bừng Sáng Ngọn Lửa Đam Mê Của Thế Hệ Trẻ Tại 28 Trần Lựu',
    slug: 'junior-barista-championship-2024-tran-luu',
    category: 'Học Viện & Cuộc Thi',
    date: '2026-10-17',
    author: 'Dolphy Academy',
    readTime: '6 phút đọc',
    excerpt: 'Sân chơi chuyên môn nội bộ thường niên giữa 10 chi nhánh Dolphy quy tụ các tài năng trẻ thi thố kỹ năng Latte Art và cảm quan hương vị cà phê.',
    image: '/images/fanpage/academy-championship-backdrop.jpg',
    tags: ['Junior Barista', 'Championship 2024', 'Dolphy Academy', '28 Trần Lựu'],
    content: `Ngày 20/03/2024 tại chi nhánh Dolphy Café 28 Trần Lựu (An Phú, TP. Thủ Đức), vòng chung kết cuộc thi DOLPHY JUNIOR BARISTA CHAMPIONSHIP 2024 đã diễn ra vô cùng sôi nổi và kịch tính.

ĐÂU CHỈ LÀ MỘT CUỘC THI, ĐÂY LÀ HÀNH TRÌNH TRƯỞNG THÀNH
Quy tụ hơn 30 thí sinh trẻ xuất sắc đại diện từ 10 cơ sở trên khắp TP.HCM, các bạn đã vượt qua các vòng đấu bảng căng thẳng (Tứ kết, Bán kết và Chung kết) với các thử thách:
• Thử thách 1: Căn chỉnh cối xay (Dial-in Espresso) trong thời gian giới hạn 10 phút.
• Thử thách 2: Biểu diễn Latte Art kỹ thuật cao với 3 mẫu bắt buộc: Trái tim nhiều tầng (Layered Heart), Cánh hoa Tulip đối xứng và Lá Rosetta thanh mảnh.
• Thử thách 3: Pha chế thức uống sáng tạo Signature Drink dựa trên nền hạt Arabica Cầu Đất nguyên bản.

HỘI ĐỒNG GIÁM KHẢO CHUYÊN MÔN CHẤM ĐIỂM KHẮC KHE
Ban giám khảo gồm các Head Barista và chuyên gia đào tạo đã đánh giá từng tách cà phê dựa trên thang điểm chuẩn quốc tế SCA: từ độ sáng mịn của bọt sữa (Glossy micro-foam), độ cân bằng hương vị giữa chua thanh và ngọt bùi, cho đến phong thái phục vụ chân thành "Happiness in a cup".

Chiếc cúp vô địch cùng chứng nhận tốt nghiệp danh dự đã tìm được chủ nhân xứng đáng, mở ra nấc thang thăng tiến trở thành Trưởng ca và Huấn luyện viên tương lai tại Dolphy Academy.`
  },
  {
    id: 'huong-dan-pha-phin-dolphy',
    titleEn: 'Secrets of Traditional Saigon Phin Coffee: 4-Step Golden Ratio 1:4 by Head Barista',
    categoryEn: 'Brewing Guide',
    readTimeEn: '5 min read',
    excerptEn: 'Precise dosing of 20-25g pure coffee and a 3-minute bloom technique to extract rich caramel and dark chocolate aromatic notes.',
    contentEn: `Traditional Vietnamese phin coffee is more than a daily beverage; it is a cultural symbol of slow living and mindful pauses amidst the bustling rhythm of Saigon.

Here is the exact formula shared by Dolphy’s Head Barista for brewing a velvety, fragrant cup of phin coffee at home:

INGREDIENTS & EQUIPMENT:
• 20 - 25 grams of medium-dark roasted pure coffee beans (Dolphy Robusta Bao Loc or Espresso Blend 80:20).
• Fresh purified water heated to optimal brewing temperature 92°C - 96°C.
• 01 Dolphy premium aluminum phin (aluminum provides superior thermal conduction and heat retention compared to stainless steel).

4-STEP GOLDEN RATIO BREWING PROCESS:
• Step 1: Pre-warm the phin and glass with boiling water to stabilize brewing temperature.
• Step 2: Add 20 - 25g of ground coffee into the phin chamber. Gently shake to level the coffee bed, insert the gravity press, and apply gentle, even pressure.
• Step 3 (The Bloom - The Critical Step): Pour 30ml of hot water into the lid and base, and gently drizzle 20ml over the coffee bed. Cover and let bloom for 2 - 3 minutes to release CO2 and fully saturate the grounds.
• Step 4: After blooming, slowly pour 40 - 50ml of hot water into the chamber. Cover with lid and allow coffee to drip naturally at approximately 1 drop per second.

The result is 40 - 45ml of concentrated, aromatic coffee with bold dark chocolate and roasted hazelnut notes. Add sweetened condensed milk for authentic Saigon Iced Milk Coffee or 3-layered Bac Xiu!`,
    title: 'Bí Quyết Pha Cà Phê Phin Chuẩn Vị Sài Gòn: 4 Bước Tỉ Lệ Vàng 1:4 Từ Head Barista Dolphy',
    slug: 'bi-quyet-pha-ca-phe-phin-chuan-vi-sai-gon',
    category: 'Cẩm Nang Barista',
    date: '2026-10-12',
    author: 'Head Barista Dolphy',
    readTime: '5 phút đọc',
    excerpt: 'Chi tiết định lượng 20-25g cà phê mộc, kỹ thuật ủ phin 30ml nước sôi trong 2-3 phút để chiết xuất trọn vẹn tầng hương caramel và socola.',
    image: '/images/fanpage/knowledge-phin-brewing-guide.jpg',
    tags: ['Cà phê phin', 'Hướng dẫn pha chế', 'Tỉ lệ vàng', 'Bạc sỉu'],
    content: `Cà phê phin không đơn thuần là một món uống quen thuộc, mà là biểu tượng của phong cách sống chậm rãi, lắng đọng giữa nhịp sống hối hả của Sài Gòn.

Hôm nay, Head Barista của DOLPHY CAFÉ xin chia sẻ đến bạn công thức "chuẩn chỉ" để có thể tự pha một tách cà phê phin đậm đà thơm ngát ngay tại nhà:

NGUYÊN LIỆU & DỤNG CỤ:
• 20 - 25 gram cà phê hạt mộc rang vừa-đậm (Dòng Robusta Bảo Lộc hoặc Espresso Blend 80:20 của Dolphy).
• Nước sôi tinh khiết ở nhiệt độ lý tưởng 92°C - 96°C.
• 01 Phin cà phê nhôm cao cấp Dolphy (Phin nhôm giúp truyền nhiệt đều và giữ nóng tốt hơn phin inox).

4 BƯỚC PHA CHẾ TỶ LỆ VÀNG:
• Bước 1: Tráng nóng phin và ly bằng nước sôi để ổn định nhiệt độ trước khi pha.
• Bước 2: Cho 20 - 25g bột cà phê vào phin, lắc nhẹ cho bề mặt bột phẳng đều, sau đó đặt gài phin và ấn nhẹ vừa tay.
• Bước 3 (Ủ cà phê - Bước quyết định): Rót 30ml nước sôi vào nắp phin và đáy phin, đồng thời rót 20ml lên mặt trên để cà phê nở đều từ hai phía. Đậy nắp và chờ trong 2 - 3 phút để hạt cà phê giải phóng hết khí CO2 và ngấm đẫm nhiệt.
• Bước 4: Sau khi ủ, rót thêm 40 - 50ml nước sôi vào phin. Đậy nắp và để cà phê nhỏ giọt tí tách tự nhiên (tốc độ chuẩn là khoảng 1 giọt/giây).

Thành phẩm thu được khoảng 40 - 45ml cốt cà phê sánh đậm, thơm ngát mùi socola đen và hạt dẻ rang. Thêm sữa đặc để làm ly Cà phê sữa đá hoặc Bạc sỉu 3 tầng béo ngậy!`
  },
  {
    id: 'dolphy-art-workshop-cho-be',
    titleEn: 'Dolphy Art & Coffee: Weekend Creative Workshop for Kids while Parents Relax',
    categoryEn: 'Community & Culture',
    readTimeEn: '4 min read',
    excerptEn: 'Dolphy’s lush garden spaces become warm weekend community hubs: parents savor artisan coffee while children explore creative art.',
    contentEn: `Weekends are precious moments for families to connect, unwind, and recharge after a busy week of school and work.

Understanding the lifestyle desires of families in Thao Dien and An Phu, DOLPHY CAFÉ regularly hosts weekend "COLORFUL CANVAS & ART CREATION" workshops designed specifically for children in our airy garden courtyards.

AN ARTISTIC ENVIRONMENT FULL OF INSPIRATION
Young painters are provided with professional wooden easels, mini artist aprons, acrylic palettes, and hands-on guidance from experienced art teachers on color harmonies and brushwork.

PEACEFUL MOMENTS FOR PARENTS
While children immerse themselves in artistic exploration, parents can leisurely enjoy a fresh Cappuccino or Flat White, read a favorite book, or chat with friendly neighborhood friends.

This warm, interconnected neighborhood spirit is the heart of what Dolphy cultivates every single day.`,
    title: 'Dolphy Art & Coffee: Sân Chơi Sáng Tạo Nghệ Thuật Cho Bé Bên Tách Cà Phê Sáng Của Bố Mẹ',
    slug: 'dolphy-art-coffee-workshop-cho-be-cuoi-tuan',
    category: 'Cộng Đồng Thảo Điền',
    date: '2026-10-08',
    author: 'Dolphy Community',
    readTime: '4 phút đọc',
    excerpt: 'Không gian mở tại Dolphy trở thành điểm hẹn thân thương cho các gia đình cuối tuần: Bố mẹ thảnh thơi thưởng thức cà phê, các bé tự do sáng tạo sắc màu.',
    image: '/images/fanpage/community-kids-art-workshop.jpg',
    tags: ['Workshop thiếu nhi', 'Gia đình', 'Thảo Điền', 'Art & Coffee'],
    content: `Cuối tuần luôn là khoảng thời gian quý giá để cả gia đình gắn kết và tái tạo năng lượng sau một tuần học tập, làm việc bận rộn.

Thấu hiểu mong muốn của các bậc phụ huynh tại khu đô thị Thảo Điền và An Phú, DOLPHY CAFÉ thường xuyên phối hợp tổ chức các buổi "XƯỞNG VẼ SẮC MÀU & SÁNG TẠO NGHỆ THUẬT" dành riêng cho các bé thiếu nhi ngay trong không gian sân vườn của quán.

KHÔNG GIAN NGHỆ THUẬT NGẬP TRÀN CẢM HỨNG
Các bé được trang bị giá vẽ chuyên nghiệp, tạp dề họa sĩ nhí, bảng pha màu acrylic và được các thầy cô hướng dẫn tận tình từng nét cọ, cách phối sắc độ tương phản và tự tay hoàn thiện bức tranh chủ đề thiên nhiên.

KHOẢNH KHẮC BÌNH YÊN CỦA BỐ MẸ
Trong khi các con say mê sáng tạo trong thế giới hội họa, bố mẹ có thể thảnh thơi ngồi bên tách Cappuccino hay Flat White thơm phức, đọc một cuốn sách hay hoặc trò chuyện cùng những người hàng xóm thân thiện.

Đó chính là bức tranh cộng đồng sống động và ấm áp mà Dolphy luôn nỗ lực vun đắp mỗi ngày!`
  },
  {
    id: 'dich-vu-teabreak-catering',
    titleEn: 'Dolphy Teabreak Catering & B2B: Full-Service Beverage & Artisan Pastry Solutions for Corporate Events',
    categoryEn: 'B2B Services',
    readTimeEn: '5 min read',
    excerptEn: 'Mobile specialty coffee bar setups, fresh Dolphy Bakery French pastries, and premium catering for executive offices and international conferences.',
    contentEn: `Beyond our neighborhood cafes, DOLPHY CAFÉ is a trusted corporate beverage and catering partner for premier enterprises across HCMC (Prudential Tower, international schools SSIS, BIS, and major athletic tournaments).

FLEXIBLE CATERING PACKAGES:
• Standard Teabreak Package: Fresh artisan French pastries (butter croissants, muffins, danishes) paired with traditional drip coffee, bottled cold brew, and refreshing organic fruit teas.
• Premium Mobile Barista Station: On-site commercial espresso machine setup with skilled baristas crafting customized Latte Art, Cappuccino, and Americano on demand.
• Sliced seasonal fresh fruits and chilled herbal detox infusions.

EXECUTIVE SERVICE STANDARDS:
• Elegant table linens and metallic serveware matching Dolphy’s refined navy brand aesthetic.
• Professional, attentive baristas fluent in English.
• Official VAT e-invoicing and flexible corporate billing contracts.`,
    title: 'Dolphy Teabreak Catering & B2B: Giải Pháp Đồ Uống & Tiệc Bánh Ngọt Trọn Gói Cho Sự Kiện Doanh Nghiệp',
    slug: 'dich-vu-teabreak-catering-b2b-dolphy',
    category: 'Dịch Vụ B2B',
    date: '2026-10-01',
    author: 'Dolphy Corporate Services',
    readTime: '5 phút đọc',
    excerpt: 'Dịch vụ setup quầy cà phê di động, bánh nướng Dolphy Bakery và trái cây tươi chuyên nghiệp phục vụ các tòa nhà văn phòng và hội nghị lớn.',
    image: '/images/fanpage/retail-teabreak-catering.jpg',
    tags: ['Teabreak Catering', 'B2B', 'Sự kiện doanh nghiệp', 'Dolphy Bakery'],
    content: `Bên cạnh chuỗi cửa hàng cà phê phục vụ cư dân địa phương, DOLPHY CAFÉ tự hào là đối tác cung cấp dịch vụ Teabreak & Cà phê sự kiện tin cậy của hàng loạt doanh nghiệp hàng đầu tại TP.HCM (Prudential Tower, các trường quốc tế SSIS, BIS, và các giải thể thao lớn).

CÁC GÓI DỊCH VỤ TEABREAK LINH HOẠT:
• Gói Standard Teabreak: Bánh ngọt tươi (Croissant bơ Pháp, Muffin, Danishes) kết hợp cà phê phin truyền thống, cà phê ủ lạnh Cold Brew đóng chai và các loại trà hoa quả thanh mát.
• Gói Premium Barista Station: Setup trực tiếp quầy pha chế di động với máy pha Espresso chuyên nghiệp, Barista phục vụ tại chỗ các món Latte Art, Cappuccino, Americano theo yêu cầu của khách tham dự.
• Trái cây tươi theo mùa cắt tỉa trang nhã và bình nước detox thảo mộc giải nhiệt.

TIÊU CHUẨN PHỤC VỤ CHUYÊN NGHIỆP:
• Khăn trải bàn, đĩa khay kim loại cao cấp mang tông màu xanh hải quân nhận diện sang trọng của Dolphy.
• Đội ngũ nhân viên phục vụ lịch thiệp, chu đáo và giao tiếp tiếng Anh lưu loát.
• Hỗ trợ xuất hóa đơn VAT đầy đủ, linh hoạt hợp đồng cho các doanh nghiệp và tổ chức sự kiện.`
  },
  {
    id: 'blue-dolphins-barista-championship',
    titleEn: 'Blue Dolphins Barista Championship Season VII: Nurturing Saigon Barista Excellence',
    categoryEn: 'Academy & Contests',
    readTimeEn: '6 min read',
    excerptEn: 'A heartwarming wrap-up to Season VII with our founding motto: Create with Heart, Compete with Soul, Grow as a Whole.',
    contentEn: `At DOLPHY CAFÉ, our guiding belief has always been: "Only happy baristas can craft happy cups of coffee." The annual BLUE DOLPHINS BARISTA CHAMPIONSHIP Season VII is our pinnacle professional arena celebrating dedication, craft, and passion behind the espresso counter.

ON-STORE RIGOR ACROSS 10 BRANCHES
Over 50 baristas system-wide completed grueling tests: from espresso grinder calibration (Dial-in) and silky micro-foam texture to ticket speed during 7:30 - 9:30 AM peak morning rush hours.

TOP 12 FINALISTS COMPETE ON STAGE
Finalists from branches (Nguyen Van Huong, 28 Thao Dien, Bui Bang Doan, Mai Chi Tho, Song Hanh) delivered world-class Latte Art showcases and innovative signature drinks.

"CREATE WITH HEART, COMPETE WITH SOUL, GROW AS A WHOLE"
The championship trophy celebrated not just the most balanced extraction, but the barista who radiated heartfelt hospitality and warmth to the judges. Dolphy Academy takes immense pride in elevating the next generation of Vietnamese baristas onto global stages.`,
    title: 'Hành Trình Blue Dolphins Barista Championship Season VII: Nơi Ươm Mầm Tài Năng Pha Chế Sài Gòn',
    slug: 'blue-dolphins-barista-championship-season-vii',
    category: 'Học Viện & Cuộc Thi',
    date: '2026-10-16',
    author: 'Dolphy Academy',
    readTime: '6 phút đọc',
    excerpt: 'Khép lại mùa giải Season VII đầy cảm xúc của Blue Dolphins Barista Championship với thông điệp: Create with Heart, Compete with Soul, Grow as a Whole.',
    image: '/images/fanpage/barista-championship-ceremony.jpg',
    tags: ['Barista Championship', 'Dolphy Academy', 'Cuộc thi pha chế', 'Văn hóa Barista'],
    content: `Tại DOLPHY CAFÉ, chúng tôi luôn tâm niệm rằng: "Chỉ những Barista hạnh phúc mới có thể tạo ra những tách cà phê hạnh phúc". Cuộc thi thường niên BLUE DOLPHINS BARISTA CHAMPIONSHIP Season VII chính là sân chơi chuyên môn đỉnh cao, nơi tôn vinh ngọn lửa đam mê và sự khổ luyện của các bạn trẻ phía sau quầy bar.

VƯỢT QUA VÒNG THỰC CHIẾN TẠI 10 CHI NHÁNH
Hơn 50 Barista trên toàn hệ thống đã trải qua các vòng sát hạch gắt gao: từ kỹ năng căn chỉnh cối xay (Dial-in Espresso), kỹ thuật tạo foam sữa mượt như lụa (Glossy micro-foam), cho đến tốc độ ra đơn trong khung giờ cao điểm "rush hour" 7:30 - 9:30 sáng.

12 GƯƠNG MẶT XUẤT SẮC TRANH TÀI TẠI CHUNG KẾT
Top 12 Barista đại diện từ các chi nhánh (DNV - Nguyễn Văn Hưởng, D28 - Thảo Điền, DBS - Bùi Bằng Đoàn, DMT - Mai Chí Thọ, D79 - Song Hành) đã cùng nhau cống hiến những màn trình diễn Latte Art đỉnh cao và bài thuyết trình thức uống sáng tạo (Signature Beverage).

THÔNG ĐIỆP "CREATE WITH HEART - COMPETE WITH SOUL - GROW AS A WHOLE"
Chức vô địch không chỉ trao cho ly cà phê cân bằng nhất, mà thuộc về Barista truyền tải được cảm xúc chân thành và sự kết nối ấm áp đến ban giám khảo. Dolphy Academy tự hào là bệ phóng vững chắc giúp các thế hệ Barista trẻ tự tin vươn ra các đấu trường cà phê quốc tế.`
  },
  {
    id: 'kien-truc-23-nguyen-van-huong',
    titleEn: 'Dolphy 23 Nguyen Van Huong: Brutalist Concrete Architecture in Harmony with Thao Dien Greenery',
    categoryEn: 'Spaces & Architecture',
    readTimeEn: '5 min read',
    excerptEn: 'Explore 3 architectural levels featuring raw concrete arches, a tropical thatched rooftop, and an open layout flooded with natural daylight.',
    contentEn: `Nestled on 23 Nguyen Van Huong – one of the greenest tree-lined avenues on the Thao Dien peninsula – DOLPHY CAFÉ’s flagship branch captivates guests with its striking fusion of Brutalist concrete aesthetics and lush tropical elements.

ICONIC CONCRETE ARCH FAÇADE
The exterior showcases sweeping circular forms and open concrete arches that allow gentle sunlight to filter into every corner. At night, warm ambient lighting turns the building into a luminous architectural lantern.

TROPICAL ROOFTOP & MULTI-TIER WORKSPACES
• Ground Floor: An open layout centered around an expansive bar counter where guests can connect with baristas and watch coffee extractions up close.
• Floors 1 & 2: Solid hardwood communal tables with ample power outlets, ideal for collaborative team work, content creation, or quiet reading.
• Rooftop: Thatched resort-inspired retreat catching gentle breezes off the Saigon River.

Whether seeking deep focus or relaxed weekend gatherings, Dolphy 23 Nguyen Van Huong is designed to feel like your second home.`,
    title: 'Dolphy 23 Nguyễn Văn Hưởng: Bản Hòa Ca Kiến Trúc Bê Tông Thô Mộc & Thiên Nhiên Thảo Điền',
    slug: 'kien-truc-doc-ban-dolphy-23-nguyen-van-huong',
    category: 'Không Gian & Kiến Trúc',
    date: '2026-10-14',
    author: 'Dolphy Design Team',
    readTime: '5 phút đọc',
    excerpt: 'Khám phá kiến trúc 3 tầng với những vòm bê tông uốn lượn, sân thượng lợp rơm phong cách nhiệt đới và không gian ngập tràn ánh sáng tự nhiên.',
    image: '/images/fanpage/23-nguyen-van-huong-night.jpg',
    tags: ['Kiến trúc', '23 Nguyễn Văn Hưởng', 'Thảo Điền', 'Check-in'],
    content: `Tọa lạc tại số 23 Nguyễn Văn Hưởng – một trong những cung đường rợp bóng cây xanh đẹp nhất bán đảo Thảo Điền, chi nhánh mới của DOLPHY CAFÉ gây ấn tượng mạnh mẽ với giới trẻ và cư dân quốc tế bởi ngôn ngữ kiến trúc thô mộc (Brutalism & Tropical Fusion).

MẶT TIỀN VÒM BÊ TÔNG ĐỘC BẢN
Mặt tiền công trình được tạo điểm nhấn bởi các hình khối tròn và vòm cong bê tông mở, cho phép ánh nắng tự nhiên len lỏi vào từng ngóc ngách của quán. Khi màn đêm buông xuống, hệ thống đèn hắt ánh sáng vàng ấm biến tòa nhà thành một chiếc đèn lồng khổng lồ rực rỡ giữa phố.

SÂN THƯỢNG NHIỆT ĐỚI & KHÔNG GIAN LÀM VIỆC ĐA TẦNG
• Tầng trệt: Không gian mở gắn liền với quầy pha chế trải dài, nơi khách hàng có thể trò chuyện trực tiếp cùng các Barista và ngắm nhìn từng giọt cà phê chiết xuất.
• Tầng 1 & 2: Khu vực bàn dài gỗ nguyên khối tiện nghi, trang bị đầy đủ ổ cắm điện cho các buổi làm việc nhóm, sáng tạo nội dung hoặc đọc sách thư giãn.
• Tầng thượng: Không gian lợp rơm phong cách resort nghỉ dưỡng, đón trọn từng làn gió mát rượi từ sông Sài Gòn lộng gió.

Dù bạn tìm kiếm một góc yên tĩnh để tập trung làm việc hay không gian gặp gỡ bạn bè cuối tuần, Dolphy 23 Nguyễn Văn Hưởng luôn sẵn sàng mang đến cho bạn cảm giác thân thuộc như trở về nhà.`
  },
  {
    id: 'van-hoa-pet-friendly-dolphy',
    titleEn: 'Pet-Friendly Culture: Why Dolphy Is a Second Home for Four-Legged Friends',
    categoryEn: 'Community & Culture',
    readTimeEn: '4 min read',
    excerptEn: 'At Dolphy, furry companions are not merely welcomed; they are greeted with chilled water bowls and genuine affection from our staff.',
    contentEn: `In Thao Dien, pets are true family members. Since our founding in 2013, DOLPHY CAFÉ has remained steadfast in our commitment to open, welcoming "Pet-Friendly" environments.

FRESH CHILLED WATER BOWLS ALWAYS READY
Whenever you take your pup or cat for a neighborhood stroll and stop by Dolphy, our baristas will proactively prepare clean bowls of fresh chilled water for our little guests. Shaded outdoor garden patios provide the perfect resting spot while you savor an iced Bac Xiu or rich Espresso.

CONNECTING THE PET LOVER COMMUNITY
Countless friendships between local residents and international expats have sparked from gentle tail wags at Dolphy counters. This genuine neighborhood connection is the true meaning of "Happiness in a cup."`,
    title: 'Văn Hóa Pet-Friendly: Tại Sao Dolphy Là Ngôi Nhà Thứ Hai Của Những Người Bạn Bốn Chân?',
    slug: 'van-hoa-pet-friendly-dolphy-cafe-thao-dien',
    category: 'Cộng Đồng Thảo Điền',
    date: '2026-10-10',
    author: 'Dolphy Community',
    readTime: '4 phút đọc',
    excerpt: 'Ở Dolphy, các bạn thú cưng không chỉ được chào đón mà còn có riêng những bát nước mát lạnh và sự yêu thương từ đội ngũ nhân viên.',
    image: '/images/fanpage/pet-friendly-thao-dien.jpg',
    tags: ['Pet-friendly', 'Thú cưng', 'Thảo Điền', 'Lifestyle'],
    content: `Tại Thảo Điền, thú cưng không đơn thuần là động vật nuôi, mà là những thành viên thực thụ trong mỗi gia đình. Ngay từ những ngày đầu thành lập năm 2013, DOLPHY CAFÉ đã kiên định với mô hình không gian "Pet-Friendly" mở và thân thiện.

NHỮNG BÁT NƯỚC MÁT LẠNH LUÔN SẴN SÀNG
Mỗi khi bạn dắt cún cưng hay mèo cưng đi dạo ghé qua Dolphy, các bạn Barista sẽ luôn chủ động chuẩn bị những bát nước lọc sạch mát lạnh dành riêng cho các "vị khách nhỏ". Góc sân vườn ngoài trời thoáng đãng với tán cây xanh rợp bóng mát là vị trí lý tưởng để các bé nằm nghỉ ngơi trong khi bạn thong thả thưởng thức ly Bạc sỉu hay Espresso mát lạnh.

KẾT NỐI CỘNG ĐỒNG YÊU THÚ CƯNG
Rất nhiều tình bạn đẹp giữa những người hàng xóm Thảo Điền, từ cư dân bản địa đến các chuyên gia nước ngoài, đã bắt đầu từ những cái vẫy đuôi làm quen của các bé cún tại quầy bar Dolphy. Đó chính là ý nghĩa đích thực của "Happiness in a cup" mà Dolphy luôn gìn giữ.`
  },
  {
    id: 'cloud-collection-mat-lanh',
    titleEn: 'Introducing "Cloud Collection" 2026: A Refreshing Breakthrough of Coconut Foam',
    categoryEn: 'New Menu',
    readTimeEn: '4 min read',
    excerptEn: 'A delicate fusion of fresh coconut water, cloud-soft coconut cream foam, and premium specialty coffee for only 75k.',
    contentEn: `Saigon’s sunny afternoons call for refreshing, crisp flavor notes! DOLPHY CAFÉ is delighted to introduce our "CLOUD COLLECTION 2026", now available across 23 Nguyen Van Huong, 113 Duong Van An, and 1441 Nguyen Van Linh:

1. CLOUD ESPRESSO:
The harmonic balance between the bold, clean acidity of fresh espresso and the velvety richness of airy coconut cream foam.

2. CLOUD MATCHA:
Premium Uji Japanese ceremonial matcha whipped to perfection over naturally sweet fresh coconut water, delivering instant refreshment and a lingering sweet finish.

3. LEMON GINGER MATCHA:
A bright, invigorating spark of yellow lemon, subtle ginger warmth, and sparkling fizz to awaken your senses during busy workdays.

Special introductory price: 75,000 VND. Visit Dolphy and treat yourself to a peaceful cloud in a cup today!`,
    title: 'Ra Mắt "Cloud Collection" 2026: Trải Nghiệm Bọt Kem Dừa Thanh Mát Đột Phá',
    slug: 'ra-mat-cloud-collection-dolphy-2026',
    category: 'Thực Đơn Mới',
    date: '2026-10-05',
    author: 'Dolphy R&D',
    readTime: '4 phút đọc',
    excerpt: 'Sự kết hợp tinh tế giữa nước dừa tươi nguyên chất, lớp kem foam mềm mịn như mây và cà phê đặc sản cao cấp chỉ 75k.',
    image: '/images/fanpage/cloud-collection-poster.jpg',
    tags: ['Cloud Collection', 'Thực đơn mới', 'Matcha Dừa Kem', 'Espresso Dừa Kem'],
    content: `Mùa nắng Sài Gòn cần những nốt vị tươi mát và sảng khoái! DOLPHY CAFÉ trân trọng giới thiệu bộ ba thức uống sáng tạo thuộc "CLOUD COLLECTION 2026", hiện đã có mặt tại các chi nhánh 23 Nguyễn Văn Hưởng, 113 Dương Văn An và 1441 Nguyễn Văn Linh:

1. CLOUD ESPRESSO (Espresso Dừa Kem):
Sự đối lập hoàn hảo giữa vị đắng thanh nồng nàn của shot Espresso chiết xuất tươi và sự ngọt bùi, beo béo dịu dàng từ lớp kem dừa mềm mượt.

2. CLOUD MATCHA (Matcha Dừa Kem):
Bột trà xanh cao cấp Uji Nhật Bản được đánh bông mịn màng trên nền nước dừa tươi thanh khiết, giải nhiệt tức thì và lưu lại hậu vị ngọt thanh dài lâu.

3. LEMON GINGER MATCHA (Matcha Gừng Sủi):
Bùng nổ sảng khoái với vị chua của chanh vàng, ấm nhẹ của gừng tươi và bọt sủi sảng khoái, đánh thức mọi giác quan trong ngày làm việc năng động.

Mức giá trải nghiệm đồng giá chỉ 75.000đ. Hãy ghé ngay Dolphy để tự thưởng cho mình một "đám mây êm ái" bạn nhé!`
  },
  {
    id: 'khai-truong-ba-huyen-thanh-quan',
    titleEn: 'Welcome New Branch: Dolphy Cafe Arrives at 08 Ba Huyen Thanh Quan (District 3)',
    categoryEn: 'Store News',
    readTimeEn: '3 min read',
    excerptEn: 'Dolphy Cafe officially opens in the heart of District 3 with a Soft Opening 30% discount on all handcrafted drinks and fresh bakery.',
    contentEn: `Following a 13-year journey serving as an iconic coffee destination in Thao Dien (District 2) and Phu My Hung (District 7), DOLPHY CAFÉ brings happiness in a cup closer to the central heart of Ho Chi Minh City:

ADDRESS: 08 Ba Huyen Thanh Quan, Vo Thi Sau Ward, District 3, HCMC.
OPENING HOURS: 06:00 AM – 10:00 PM daily.

SOFT OPENING SPECIALS:
• 30% OFF all Handcrafted Drinks and Fresh Daily Pastries.
• Experience authentic phin drip coffee, specialty espresso, and warm French butter croissants under the shade of ancient Saigon trees.`,
    title: 'Chào Đón Chi Nhánh Mới: Dolphy Cafe Đổ Bộ 08 Bà Huyện Thanh Quan (Quận 3)',
    slug: 'khai-truong-dolphy-ba-huyen-thanh-quan-quan-3',
    category: 'Tin Tức Chi Nhánh',
    date: '2026-09-25',
    author: 'Dolphy Expansion',
    readTime: '3 phút đọc',
    excerpt: 'Dolphy Cafe chính thức có mặt tại trung tâm Quận 3 với chương trình Soft Opening ưu đãi 30% toàn bộ Menu đồ uống và bánh ngọt.',
    image: '/images/fanpage/soft-opening-ba-huyen-thanh-quan.jpg',
    tags: ['Chi nhánh mới', 'Quận 3', 'Soft Opening', 'Giảm giá 30%'],
    content: `Sau hành trình 13 năm gắn bó và trở thành biểu tượng cà phê tại Thảo Điền (Quận 2) và Phú Mỹ Hưng (Quận 7), DOLPHY CAFÉ chính thức mang hương vị cà phê hạnh phúc đến gần hơn với cư dân trung tâm TP.HCM:

ĐỊA CHỈ: 08 Bà Huyện Thanh Quan, Phường Võ Thị Sáu (Xuân Hòa cũ), Quận 3, TP.HCM.
GIỜ MỞ CỬA: 06:00 AM – 10:00 PM mỗi ngày.

CHƯƠNG TRÌNH SOFT OPENING ĐẶC BIỆT:
• GIẢM NGAY 30% cho toàn bộ Menu Đồ uống và Bánh nướng tươi (Pastries).
• Thưởng thức dòng cà phê phin truyền thống, Specialty Espresso và bánh Croissant bơ Pháp nóng giòn trong không gian cổ điển, xanh mát giữa lòng Quận 3.

Hãy ghé thăm chúng mình để khởi đầu ngày mới với ly cà phê chất lượng và ngắm nhìn phố phường Sài Gòn rợp bóng cây cổ thụ!`
  },
  {
    id: 'dolphy-badminton-club',
    titleEn: 'Dolphiers Life: Dolphy Badminton Club 2025 - Team Energy Beyond the Counter',
    categoryEn: 'People & Culture',
    readTimeEn: '4 min read',
    excerptEn: 'Explore weekly athletic community activities connecting baristas and headquarters staff across the Dolphy coffee family.',
    contentEn: `Working at DOLPHY is more than mastering espresso extraction; it is about belonging to a youthful, caring family that prioritizes physical wellness and mutual support.

DOLPHY BADMINTON CLUB - SHEDDING STRESS, BUILDING BONDS
Every week, friendly badminton matches bring together part-time baristas, shift leaders, and directors on the court, sharing laughter and energetic rallies.

"SWING HIGH, TEAM FLY"
Sports build agility, swift reflexes, and stamina – essential traits for peak-hour counter service. Most importantly, court teamwork translates into seamless coordination during busy cafe mornings.

Ready to join our energetic dolphin family? Apply to become a Dolphy Barista today!`,
    title: 'Đời Sống Dolphiers: Dolphy Badminton Club 2025 - Gắn Kết Năng Lượng Sau Giờ Quầy Bar',
    slug: 'doi-song-dolphiers-badminton-club-2025',
    category: 'Đời Sống Nhân Sự',
    date: '2026-09-18',
    author: 'Dolphy People & Culture',
    readTime: '4 phút đọc',
    excerpt: 'Khám phá hoạt động thể thao gắn kết thường tuần của các Barista và cán bộ nhân viên chuỗi cà phê Dolphy.',
    image: '/images/fanpage/badminton-club-2025.jpg',
    tags: ['Văn hóa doanh nghiệp', 'Badminton Club', 'Tuyển dụng', 'Dolphier'],
    content: `Làm việc tại DOLPHY không chỉ là học cách chiết xuất một ly cà phê chuẩn vị, mà còn là được hòa mình vào một đại gia đình trẻ trung, năng động và luôn quan tâm đến sức khỏe thể chất lẫn tinh thần của nhau.

DOLPHY BADMINTON CLUB - NƠI TRÚT BỎ MỆT MỎI
Hằng tuần, giải đấu giao lưu cầu lông giữa các chi nhánh được tổ chức đều đặn. Từ các bạn Barista Part-time mới vào nghề, Shift Leader đến ban giám đốc đều cùng ra sân, đập cầu hết mình và chia sẻ những tràng cười sảng khoái.

"SWING HIGH, TEAM FLY"
Thể thao giúp các bạn rèn luyện phản xạ nhanh nhạy, sức bền dẻo dai – những yếu tố vô cùng quan trọng cho công việc đứng quầy bar phục vụ khách hàng. Hơn hết, tinh thần đồng đội trên sân cầu cũng chính là sự phối hợp nhịp nhàng, tương trợ lẫn nhau giữa giờ cao điểm tại quán.

Bạn muốn trở thành một chú cá heo giàu năng lượng tích cực? Hãy nộp hồ sơ gia nhập đội ngũ Barista Dolphy ngay hôm nay!`
  },
  {
    id: 'series-cold-brew',
    titleEn: 'Daily Brewing Series: #1 Cold Brew - The Elegance of Simplicity',
    categoryEn: 'Brewing Guide',
    readTimeEn: '5 min read',
    excerptEn: 'Cold Brew: a unique brewing method requiring zero hot water, tracing back to 17th-century Dutch sailors, delivering smooth low-acid coffee.',
    contentEn: `COLD BREW is completely distinct from conventional extraction: IT USES ZERO HOT WATER.

Historical records show this method originated in 17th-century Netherlands when European merchant sailors needed coffee aboard wooden ships where fires were strictly prohibited. Sailors steeped ground coffee in water containers stored deep in ship holds. By 1600, this technique reached Japan, evolving into Kyoto-style drip.

Cold brew boasts exceptionally smooth, chocolatey flavors with negligible bitterness and reduced acidity. It stays fresh in your refrigerator for 2 - 4 weeks.

GOLDEN FORMULA (1:10 RATIO):
• Dosing: 50g coarse-ground Arabica to 500ml room-temperature filtered water.
• Steep in sealed glass jar in the fridge for 12 - 24 hours.
• Filter through fine mesh without pressing grounds to preserve clarity.
• Serve over ice with an orange slice or fresh cold milk!`,
    title: 'Series Mỗi Ngày Một Cách Pha: #1 Cold Brew - Tinh Tế Của Sự Đơn Giản',
    slug: 'series-moi-ngay-mot-cach-pha-cold-brew',
    category: 'Cẩm Nang Pha Chế',
    date: '2026-09-10',
    author: 'Dolphy Master Barista',
    readTime: '5 phút đọc',
    excerpt: 'COLD BREW – cách pha hoàn toàn khác biệt không cần dùng nước nóng, bắt nguồn từ những thủy thủ Hà Lan thế kỷ 17 với vị ngọt dịu và ít chua đặc biệt.',
    image: '/images/art_series_pha.jpg',
    tags: ['Cold Brew', 'Pha chế tại nhà', 'Cà phê ủ lạnh'],
    content: `COLD BREW – là một cách pha hoàn toàn khác biệt với những cách pha chúng ta đã từng biết, đó là KHÔNG CẦN SỬ DỤNG NƯỚC NÓNG.

Theo các tài liệu nghiên cứu, phương pháp pha này bắt nguồn từ nước Hà Lan từ những năm của thế kỷ 17 khi các thuyền buôn châu Âu lênh đênh trên biển và không thể pha cà phê theo cách bình thường vì lúc bấy giờ thuyền đều được làm bằng gỗ, việc sử dụng lửa để đun nước bị nghiêm cấm. Do đó, các thủy thủ Hà Lan đã phải ngâm cà phê vào trong bình chứa nước và cất dưới khoang tàu để tiện sử dụng. Đến năm 1600, cách pha này đã đến Nhật Bản và phát triển mạnh mẽ.

Hương vị của Cold Brew vô cùng đặc biệt bởi vị và mùi cà phê êm dịu, mượt mà hơn. Vị cà phê vẫn "tươi" nguyên vẹn như mới pha dù bảo quản trong ngăn mát tủ lạnh từ 2 – 4 tuần. Quá trình oxy hóa diễn ra chậm hơn nhiều nên cà phê Cold Brew có rất ít vị chua gắt và vị đắng vô cùng nhẹ nhàng.

CÔNG THỨC & CÁCH PHA CHẾ CHUẨN TỈ LỆ 1:10
Dụng cụ: 1 bình thủy tinh ngâm cà phê, rây lọc (hoặc giấy lọc V60), muỗng khuấy và bình đựng thành phẩm.
Tỷ lệ vàng: 1 phần cà phê : 10 phần nước tinh khiết nhiệt độ phòng (Ví dụ: 50g cà phê tương đương 500ml nước).

• Bước 1: Cho 50g cà phê Arabica hoặc Blend A1 của Dolphy vào máy xay ở mức thô (Coarse - như hạt muối biển).
• Bước 2: Cho cà phê vào bình thủy tinh, rót 500ml nước tinh khiết vào và dùng muỗng khuấy nhẹ đều cho bột ngấm nước.
• Bước 3: Đậy kín nắp bình và cho vào ngăn mát tủ lạnh ủ từ 12 – 24 tiếng tùy gu đậm nhạt.
• Bước 4: Hết thời gian ngâm ủ, lấy bình ra và lọc từ từ qua rây lọc/giấy lọc sang bình khác. Lưu ý không nén ép bã cà phê để tránh làm đục nước.

Thưởng thức: Rót ra ly cùng vài viên đá mát lạnh, có thể kết hợp thêm 1 lát cam vàng, nhánh hương thảo hoặc sữa tươi thanh trùng!`
  },
  {
    id: 'ca-phe-phin-net-van-hoa-doc-dao',
    titleEn: 'Phin Coffee - The Timeless Cultural Soul of Vietnam',
    categoryEn: 'Coffee Culture',
    readTimeEn: '6 min read',
    excerptEn: 'More than a beverage, phin coffee is an art of patience and mindful pauses to appreciate the moving rhythm of the city.',
    contentEn: `More than a drink, coffee is an essential facet of Vietnamese urban life.

The aluminum phin filter, with slow rhythmic drops falling one by one, has become an enduring cultural emblem. It invites us to practice patience and savor quiet reflection before plunging into busy days.

At Dolphy, we honor this heritage by using thick-gauge stamped aluminum phins for optimal heat distribution, paired with carefully roasted Robusta & Arabica ground to precise micron tolerances.`,
    title: 'Cà Phê Phin - Nét Văn Hóa Độc Đáo Của Người Việt',
    slug: 'ca-phe-phin-net-van-hoa-doc-dao-cua-viet-nam',
    category: 'Văn Hóa Cà Phê',
    date: '2026-08-28',
    author: 'Dolphy Storyteller',
    readTime: '6 phút đọc',
    excerpt: 'Hơn cả một thức uống, cà phê phin là nghệ thuật của sự kiên nhẫn và phong cách sống chậm rãi ngắm nhìn phố phường chuyển động.',
    image: '/images/prod_phin_nhom.jpg',
    tags: ['Cà phê phin', 'Văn hóa Việt Nam', 'Phin nhôm'],
    content: `Hơn cả một thức uống, cà phê là một phần của cuộc sống, tiếp thêm năng lượng và tinh thần cho mỗi người thưởng thức. Mỗi ngày, bạn sẽ thấy các quán cà phê khắp các con phố ở Việt Nam, từ các quán ven đường nhỏ bé đến những không gian sang trọng.

Chiếc phin cà phê nhôm với những giọt cà phê tí tách rơi chầm chậm đã trở thành biểu tượng văn hóa bất biến. Nó dạy chúng ta sự kiên nhẫn, khoảng thời gian lắng đọng để suy ngẫm trước khi bắt đầu một ngày bận rộn.

Tại Dolphy, chúng tôi nâng tầm trải nghiệm phin truyền thống bằng việc lựa chọn chất liệu nhôm dập dày dặn giữ nhiệt tối ưu, cùng hạt Robusta & Arabica tuyển chọn được rang xay ở độ mịn chuẩn xác để từng giọt chiết xuất đều sánh đượm, thơm nồng.`
  },
  {
    id: 'latte-la-gi',
    titleEn: 'What Is a Caffè Latte? The Craft Behind the World’s Most Beloved Coffee',
    categoryEn: 'Barista Guide',
    readTimeEn: '7 min read',
    excerptEn: 'Explore the Italian origins of Caffè Latte and the thermodynamics of silky glossy micro-foam with Dolphy Academy.',
    contentEn: `Caffè Latte traces its roots to Italy, where "latte" translates to milk. A classic latte combines rich espresso with steamed milk and a velvety 0.5-1 cm layer of glossy micro-foam.

THE ART OF TEXTURING:
Heating pasteurized fresh milk to 60°C - 65°C breaks down lactose into natural sweetness without needing added sugar. Skilled baristas angle steam wands to create a rolling vortex, transforming large bubbles into silky micro-foam capable of pouring intricate Latte Art hearts, tulips, and rosettas.`,
    title: 'Latte Là Gì? Nghệ Thuật Tạo Nên Một Tách Café Được Cả Thế Giới Say Mê',
    slug: 'latte-la-gi',
    category: 'Cẩm Nang Barista',
    date: '2026-08-15',
    author: 'Dolphy Academy',
    readTime: '7 phút đọc',
    excerpt: 'Cùng Dolphy Café tìm hiểu nguồn gốc của Caffè Latte từ nước Ý và bí quyết tạo nên lớp foam sữa bóng bẩy hoàn hảo.',
    image: '/images/art_latte.jpg',
    tags: ['Latte', 'Latte Art', 'Cà phê Ý'],
    content: `Latte (viết đầy đủ là Caffè Latte) trong tiếng Ý có nghĩa là "cà phê và sữa". Ra đời từ nước Ý thơ mộng, Latte nhanh chóng chinh phục toàn cầu bởi sự cân bằng tuyệt vời giữa vị đắng nhẹ của cà phê Espresso và sự béo ngọt mịn màng của sữa nóng được đánh bọt vi mô (Micro-foam).

Tỉ lệ tiêu chuẩn của một ly Latte gồm:
1 shot Espresso (khoảng 30ml) + 180 - 200ml sữa tươi nóng + lớp bọt sữa mỏng khoảng 0.5 - 1cm trên bề mặt.

Khác với Cappuccino vốn có lớp bọt sữa dày bồng bềnh, Latte thiên về độ mềm mại, lướt nhẹ trên đầu lưỡi, tạo điều kiện lý tưởng để các Barista thể hiện kỹ thuật Latte Art đỉnh cao.`
  },
  {
    id: 'dolphy-coffee-bag-find-your-match',
    titleEn: 'Dolphy Coffee Bags - Find Your Perfect Specialty Roast',
    categoryEn: 'Specialty Beans',
    readTimeEn: '4 min read',
    excerptEn: 'Explore our 100% Cau Dat Arabica, Bao Loc Robusta, and Signature Espresso Blends packaged in 1-way degassing valve bags.',
    contentEn: `Every coffee lover has a distinct palate. Dolphy crafts tailored roast profiles to help you find your soulmate brew:
• Cau Dat Arabica (1,600m altitude): Bright floral fragrance, gentle citrus acidity, and sweet honey finish.
• Bao Loc Robusta: Bold body, dark chocolate intensity, zero harshness.
• Espresso Blend 80:20 & 70:30: Thick golden crema and balanced sweetness for cafe-quality espresso at home.`,
    title: 'DOLPHY CAFÉ COFFEE BAG - Đi Tìm Gu Cà Phê Chân Ái Cho Bạn',
    slug: 'dolphy-cafe-coffee-bag-find-your-match',
    category: 'Hướng Dẫn Chọn Cà Phê',
    date: '2026-08-01',
    author: 'Dolphy Roastery',
    readTime: '4 phút đọc',
    excerpt: 'Nhất nước, nhì cà, tam pha, tứ thưởng. Bí quyết lựa chọn giữa 100% Arabica, 100% Robusta hay tỷ lệ vàng Espresso Blend 80:20.',
    image: '/images/prod_arabica_250g.jpg',
    tags: ['Coffee Bag', 'Arabica', 'Robusta', 'Espresso Blend'],
    content: `Nhất nước, nhì cà, tam pha, tứ thưởng! Để có một tách cà phê thơm ngon tại gia, chọn đúng loại hạt phù hợp với khẩu vị là bước quan trọng nhất.

• Gu Tinh Tế & Thanh Lịch: Hãy chọn 100% Arabica Cầu Đất. Vị chua thanh hoa quả tự nhiên, thơm dịu, rất ít đắng, uống không say cồn cào.
• Gu Đậm Đà & Giàu Năng Lượng: Hãy chọn 100% Robusta Lâm Đồng. Vị đắng đầm, thơm nồng, hậu vị socola, thích hợp pha phin sữa đá hoặc đen đá.
• Gu Hiện Đại & Cân Bằng: Hãy chọn Espresso Blend (80% Arabica + 20% Robusta). Vừa có hương thơm hoa cỏ quyến rũ vừa có độ dày body và crema vàng óng.`
  },
  {
    id: 'chuong-trinh-10-tang-1',
    titleEn: 'Dolphy Loyalty Rewards: Buy 10 Get 1 Free System-Wide',
    categoryEn: 'Promotions & Rewards',
    readTimeEn: '3 min read',
    excerptEn: 'Collect digital and physical reward stamps across all 10 branches to redeem complimentary specialty handcrafted drinks.',
    contentEn: `To express our gratitude to our loyal community, Dolphy offers a seamless loyalty stamp program across all 10 branches:
• Collect 1 stamp for every handcrafted beverage purchased.
• Accumulate 10 stamps to receive 01 free beverage of your choice!
• Redeemable at any Dolphy branch or via phone hotline ordering.`,
    title: 'Thẻ Quà Tặng Tích Điểm: Mua 10 Tặng 1 Tại Toàn Hệ Thống Dolphy Café',
    slug: 'the-qua-tang-mua-10-tang-1',
    category: 'Chương Trình Khách Hàng',
    date: '2026-07-20',
    author: 'Dolphy Marketing',
    readTime: '3 phút đọc',
    excerpt: 'Tri ân khách hàng thân thiết: Tích lũy 10 dấu trên thẻ quà tặng để nhận ngay 1 đồ uống miễn phí tùy chọn.',
    image: '/images/art_the_qua_tang.jpg',
    tags: ['Ưu đãi', 'Mua 10 tặng 1', 'Khách hàng thân thiết'],
    content: `Để tri ân quý khách hàng đã luôn đồng hành cùng DOLPHY CAFÉ trong suốt 13 năm qua, chúng tôi tiếp tục triển khai chương trình Thẻ Quà Tặng tích điểm "Mua 10 tặng 1".

Quy định áp dụng:
• Mỗi khi mua 01 phần đồ uống tại quầy hoặc mang đi, bạn sẽ nhận được 01 dấu tích điểm.
• Đủ 10 dấu, bạn được tặng ngay 01 ly đồ uống miễn phí size Vừa hoặc Nhỏ tùy thích.
• Thẻ có giá trị áp dụng tại toàn bộ 10 chi nhánh Dolphy Café tại TP.HCM.`
  },
  {
    id: 'green-stamp-bao-ve-moi-truong',
    titleEn: 'Green Stamp - Partnering with Dolphy for an Eco-Friendly Future',
    categoryEn: 'Green Living',
    readTimeEn: '4 min read',
    excerptEn: 'Bring your personal tumbler or repurpose spent coffee grounds for organic garden fertilizer with Dolphy.',
    contentEn: `Dolphy is committed to environmental stewardship through mindful everyday practices:
• Bring your own tumbler: Enjoy 5,000 VND discount on every beverage.
• Free spent coffee grounds: Available daily at our counters for guests to take home as natural deodorizers and nutrient-rich plant compost.
• Biodegradable straws and recycled paper carry bags across all stores.`,
    title: 'Green Stamp - Cùng Dolphy Chung Tay Vì Môi Trường Xanh',
    slug: 'green-stamp-bao-ve-moi-truong',
    category: 'Môi Trường & Cộng Đồng',
    date: '2026-07-05',
    author: 'Dolphy Green Initiative',
    readTime: '3 phút đọc',
    excerpt: 'Mang theo bình nước cá nhân khi mua cà phê tại Dolphy để nhận ngay Green Stamp và cùng cắt giảm rác thải nhựa.',
    image: '/images/art_green_stamp.png',
    tags: ['Green Stamp', 'Bảo vệ môi trường', 'Sống xanh'],
    content: `Dolphy luôn trân trọng những hành động góp phần giảm thiểu các tác động tiêu cực của con người lên trái đất, dù là nhỏ bé nhất.

Đó là lý do Dolphy gửi lời cảm ơn đến bạn vì đã luôn mang theo bình nước riêng của mình mỗi khi ghé Dolphy Café:
• Nhận ngay 01 tem xanh Green Stamp cho mỗi lần sử dụng bình cá nhân mua cà phê mang đi.
• Tích lũy đủ tem xanh, bạn sẽ nhận được những phần quà đặc biệt từ Dolphy Café như bình giữ nhiệt cao cấp, túi tote và các thức uống signature!`
  }
];

export interface CommunityPhoto {
  id: string;
  image: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  location: string;
  locationEn: string;
  likes: number;
}

export const communityGalleryData: CommunityPhoto[] = [
  {
    id: 'photo-1',
    image: '/images/fanpage/community-expat-family-pet.jpg',
    title: 'Gia đình Expat và chú cún cưng bên tách cà phê sáng',
    titleEn: 'Morning coffee with expat family & beloved dog',
    category: 'Pet-Friendly',
    categoryEn: 'Pet-Friendly',
    location: 'Dolphy Thảo Điền',
    locationEn: 'Dolphy Thao Dien',
    likes: 489
  },
  {
    id: 'photo-2',
    image: '/images/fanpage/community-expat-group-cheers.jpg',
    title: 'Happiness in a cup: Nụ cười kết nối bạn bè quốc tế',
    titleEn: 'Happiness in a cup: Expat friends gathering',
    category: 'Cộng Đồng',
    categoryEn: 'Community',
    location: 'Dolphy 28 Thảo Điền',
    locationEn: 'Dolphy 28 Thao Dien',
    likes: 562
  },
  {
    id: 'photo-3',
    image: '/images/fanpage/community-kids-art-workshop.jpg',
    title: 'Xưởng vẽ tranh thiếu nhi: Sáng tạo sắc màu cuối tuần',
    titleEn: 'Kids art workshop: Weekend creative colors',
    category: 'Workshop',
    categoryEn: 'Workshop',
    location: 'Dolphy 113 Dương Văn An',
    locationEn: 'Dolphy 113 Duong Van An',
    likes: 438
  },
  {
    id: 'photo-4',
    image: '/images/fanpage/community-kids-painting-class.jpg',
    title: 'Hướng dẫn viên kèm cặp các họa sĩ nhí từng nét cọ',
    titleEn: 'Mentor guiding young painters stroke by stroke',
    category: 'Workshop',
    categoryEn: 'Workshop',
    location: 'Dolphy Thảo Điền',
    locationEn: 'Dolphy Thao Dien',
    likes: 375
  },
  {
    id: 'photo-5',
    image: '/images/fanpage/academy-championship-trophy.jpg',
    title: 'Vinh danh cúp vô địch Junior Barista Championship 2024',
    titleEn: 'Junior Barista Championship 2024 Trophy & Awards',
    category: 'Academy',
    categoryEn: 'Academy',
    location: 'Dolphy 28 Trần Lựu',
    locationEn: 'Dolphy 28 Tran Luu',
    likes: 712
  },
  {
    id: 'photo-6',
    image: '/images/fanpage/academy-latte-art-pouring.jpg',
    title: 'Kỹ thuật rót bọt sữa điêu luyện của Barista Dolphy',
    titleEn: 'Masterful latte art milk pouring technique',
    category: 'Barista',
    categoryEn: 'Barista',
    location: 'Dolphy Barista Academy',
    locationEn: 'Dolphy Barista Academy',
    likes: 624
  },
  {
    id: 'photo-7',
    image: '/images/fanpage/community-koi-fish-pond.jpg',
    title: 'Gia đình các thế hệ ngắm hồ cá Koi rực rỡ sắc màu',
    titleEn: 'Multi-generation family enjoying vibrant Koi pond',
    category: 'Không Gian',
    categoryEn: 'Space',
    location: 'Dolphy 1441 Nguyễn Văn Linh',
    locationEn: 'Dolphy 1441 Nguyen Van Linh',
    likes: 512
  },
  {
    id: 'photo-8',
    image: '/images/fanpage/community-green-stamp-card.jpg',
    title: 'Lối sống xanh cùng thẻ tích điểm Green Stamp',
    titleEn: 'Eco-friendly lifestyle with Green Stamp rewards',
    category: 'Sống Xanh',
    categoryEn: 'Eco-Living',
    location: 'Toàn hệ thống Dolphy',
    locationEn: 'All Dolphy Stores',
    likes: 395
  },
  {
    id: 'photo-9',
    image: '/images/fanpage/career-dolphiers-striped-uniform.jpg',
    title: 'Nụ cười rạng rỡ của gia đình Dolphiers đồng phục sọc',
    titleEn: 'Radiant smiles of Dolphiers in signature striped uniforms',
    category: 'Đội Ngũ',
    categoryEn: 'Team',
    location: 'Dolphy Training Center',
    locationEn: 'Dolphy Training Center',
    likes: 685
  },
  {
    id: 'photo-10',
    image: '/images/fanpage/career-handmade-craft-team.jpg',
    title: 'Team Dolphiers cùng làm đồ handmade trang trí quán',
    titleEn: 'Dolphiers crafting handmade store decorations together',
    category: 'Văn Hóa',
    categoryEn: 'Culture',
    location: 'Dolphy Thảo Điền Patio',
    locationEn: 'Dolphy Thao Dien Patio',
    likes: 467
  },
  {
    id: 'photo-11',
    image: '/images/fanpage/retail-beans-bakery-display.jpg',
    title: 'Kệ cà phê hạt mộc nguyên chất & tủ bánh Dolphy Bakery',
    titleEn: 'Pure specialty bean shelf & fresh Dolphy Bakery display',
    category: 'Sản Phẩm',
    categoryEn: 'Retail',
    location: 'Dolphy Thảo Điền Flagship',
    locationEn: 'Dolphy Thao Dien Flagship',
    likes: 531
  },
  {
    id: 'photo-12',
    image: '/images/fanpage/retail-teabreak-catering.jpg',
    title: 'Dịch vụ setup tiệc Teabreak & Cà phê sự kiện trọn gói',
    titleEn: 'Full-service corporate Teabreak & event coffee catering',
    category: 'Dịch Vụ',
    categoryEn: 'Catering',
    location: 'Khối Dịch vụ Sự kiện Dolphy',
    locationEn: 'Dolphy Event Catering Division',
    likes: 422
  },
  {
    id: 'photo-13',
    image: '/images/fanpage/community-spartan-event-partner.jpg',
    title: 'Dolphy đồng hành tiếp sức giải chạy thể thao',
    titleEn: 'Dolphy official hydration & coffee partner at sports races',
    category: 'Sự Kiện',
    categoryEn: 'Events',
    location: 'Sự kiện Marathon & Spartan',
    locationEn: 'Marathon & Spartan Races',
    likes: 456
  },
  {
    id: 'photo-14',
    image: '/images/fanpage/community-b2b-corporate-booth.jpg',
    title: 'Quầy cà phê tiếp sức năng lượng cho Team Prudential Q7',
    titleEn: 'Dolphy corporate coffee booth energizing Prudential Team',
    category: 'Sự Kiện',
    categoryEn: 'Events',
    location: 'Prudential Tower Phú Mỹ Hưng',
    locationEn: 'Prudential Tower PMH',
    likes: 479
  },
  {
    id: 'photo-15',
    image: '/images/fanpage/career-red-envelopes-tet.jpg',
    title: 'Bộ bao lì xì độc quyền thương hiệu Dolphy đón Tết may mắn',
    titleEn: 'Exclusive Dolphy branded lucky red envelopes for Tet',
    category: 'Khoảnh Khắc',
    categoryEn: 'Moments',
    location: 'Toàn hệ thống Dolphy',
    locationEn: 'All Dolphy Stores',
    likes: 520
  },
  {
    id: 'photo-16',
    image: '/images/fanpage/community-cozy-bar-holiday.jpg',
    title: 'Không gian quầy bar lung linh ấm cúng mùa lễ hội',
    titleEn: 'Cozy and festive coffee bar ambience for holidays',
    category: 'Quầy Bar',
    categoryEn: 'Bar Counter',
    location: 'Dolphy 28 Thảo Điền',
    locationEn: 'Dolphy 28 Thao Dien',
    likes: 498
  }
];

export const jobsData: Job[] = [
  {
    id: 'job-barista',
    titleEn: 'Barista – Coffee Specialist (Full-time & Part-time)',
    departmentEn: 'Store Operations',
    typeEn: 'Full-time / Part-time',
    salaryEn: '25,000 - 35,000 VND/hour (Sales bonus + shared tips)',
    descriptionEn: 'Do you love coffee? Enjoy serving and bringing smiles to guests every day? Eager to learn in a vibrant, supportive team? Dolphy is looking for teammates across our HCMC stores.',
    requirementsEn: ["No previous experience required (comprehensive on-store training provided via Dolphy Academy).","Age: 18 - 25 years old.","Energetic, honest, tidy, and radiating sincere hospitality.","Basic English communication is a strong plus (vibrant expat clientele in Thao Dien & Phu My Hung).","Minimum commitment of 4 - 6 months."],
    benefitsEn: ["Flexible shift scheduling, ideal for university students.","Free 100% Barista certification training from Dolphy Academy.","Performance incentives, monthly revenue bonuses, and 100% shared daily tips.","Free daily specialty handcrafted beverages on shift and employee discounts."],
    title: 'Barista – Nhân Viên Pha Chế (Full-time & Part-time)',
    department: 'Khối Cửa Hàng (Store Operations)',
    type: 'Toàn thời gian / Bán thời gian',
    salary: '25.000 – 35.000 đ/giờ (Thưởng theo doanh số & tip)',
    locations: ['Quận 2 (Thảo Điền, An Phú)', 'Quận 7 (Phú Mỹ Hưng)', 'Quận Bình Thạnh'],
    ageRange: '18 – 25 tuổi',
    description: `Bạn yêu cà phê? Yêu việc được phục vụ và nhìn thấy nụ cười của khách hàng mỗi ngày? Bạn không ngại học hỏi và muốn gắn bó với môi trường trẻ trung, nhiệt huyết? Dolphy đang tìm kiếm những người bạn đồng hành cho các chi nhánh tại TP.HCM.`,
    requirements: [
      'Không yêu cầu kinh nghiệm trước đó (được đào tạo bài bản từ đầu theo tiêu chuẩn Dolphy Academy).',
      'Độ tuổi: 18 – 25 tuổi.',
      'Nhanh nhẹn, trung thực, ngăn nắp và có tinh thần CHÂN THÀNH.',
      'Biết giao tiếp tiếng Anh cơ bản là một lợi thế lớn (do lượng khách nước ngoài tại Thảo Điền & Phú Mỹ Hưng rất đông).',
      'Cam kết làm việc tối thiểu 4 - 6 tháng.'
    ],
    benefits: [
      'Mức thu nhập hấp dẫn: 25.000 – 35.000 đ/giờ + thưởng doanh số chi nhánh + tip chia đều.',
      'Lịch làm việc linh hoạt, dễ dàng đăng ký theo tuần (rất phù hợp cho sinh viên).',
      'Được đào tạo nghề Barista miễn phí từ chuyên gia (giá trị tương đương khóa học 8.000.000đ).',
      'Lộ trình thăng tiến rõ ràng: Barista ➔ Shift Leader ➔ Quản lý Cửa Hàng (Store Manager) ➔ Trainer.',
      'Môi trường làm việc văn minh, thân thiện, đồng nghiệp đoàn kết như những chú cá heo.'
    ]
  },
  {
    id: 'job-supervisor',
    titleEn: 'Shift Leader / Store Supervisor (Full-time)',
    departmentEn: 'Store Operations',
    typeEn: 'Full-time',
    salaryEn: '9,000,000 - 14,000,000 VND/month + KPI Bonus',
    descriptionEn: 'Lead daily store operations, uphold "Happiness in a cup" service standards, manage inventory, and coach junior baristas across peak shifts.',
    requirementsEn: ["At least 1 year of experience as a Barista or Shift Leader in coffee chains.","Good English conversational ability for expat guest relations.","Strong team leadership and problem-solving skills during rush hours.","Passionate about coffee quality calibration and customer care."],
    benefitsEn: ["Attractive salary + monthly KPI revenue bonuses.","Full social insurance, 13th-month salary, and annual paid leave.","Clear promotion roadmap to Store Manager and Area Manager."],
    title: 'Giám Sát Ca / Quản Lý Cửa Hàng (Store Supervisor / Manager)',
    department: 'Khối Vận Hành',
    type: 'Full-time',
    salary: '10.000.000 – 15.000.000 đ/tháng + KPIs + Thưởng Doanh Số',
    locations: ['Quận 2 (Thảo Điền)', 'Quận 7 (Phú Mỹ Hưng)'],
    ageRange: '22 – 32 tuổi',
    description: 'Chịu trách nhiệm toàn diện về chất lượng phục vụ, kiểm soát cost nguyên vật liệu dưới 28%, vận hành hệ thống POS CukCuk và đào tạo đội ngũ nhân sự tại chi nhánh.',
    requirements: [
      'Có từ 1 năm kinh nghiệm quản lý ca hoặc cửa hàng tại các chuỗi F&B hoặc Specialty Coffee.',
      'Kỹ năng lãnh đạo, giao tiếp tiếng Anh tốt với khách quốc tế.',
      'Tinh thần trách nhiệm cao, thấu hiểu văn hóa Happiness in a cup.'
    ],
    benefits: [
      'Thu nhập cạnh tranh cùng thưởng KPIs doanh thu hàng tháng.',
      'Được tham gia các khóa đào tạo quản trị F&B thực chiến cao cấp.',
      'Đầy đủ chế độ BHXH, BHYT, nghỉ phép năm và du lịch thường niên.'
    ]
  },
  {
    id: 'job-b2b-catering',
    titleEn: 'B2B & Teabreak Catering Specialist',
    departmentEn: 'B2B & Corporate Services',
    typeEn: 'Full-time',
    salaryEn: '10,000,000 - 18,000,000 VND/month + Commission',
    descriptionEn: 'Develop corporate client partnerships, consult custom Teabreak & Mobile Barista catering packages for executive offices and international conferences in HCMC.',
    requirementsEn: ["Experience in B2B sales, F&B catering, or corporate event management.","Dynamic communication, negotiation, and contract execution skills.","Fluent in English communication and professional presentation."],
    benefitsEn: ["Base salary + high project commission structure.","Company transport allowance and project bonuses.","Opportunity to build network with senior corporate executives."],
    title: 'Chuyên Viên Phát Triển Dịch Vụ Doanh Nghiệp (B2B & Teabreak Specialist)',
    department: 'Khối Doanh Nghiệp & Catering',
    type: 'Full-time',
    salary: '10.000.000 – 18.000.000 đ/tháng + Hoa hồng hợp đồng',
    locations: ['Văn phòng Dolphy Hub 2026 - Quận 2'],
    ageRange: '22 – 30 tuổi',
    description: 'Tìm kiếm, tư vấn và chăm sóc khách hàng doanh nghiệp, trường quốc tế (SSIS, AIS...) và các đơn vị tổ chức sự kiện có nhu cầu tiệc Teabreak, cà phê văn phòng và quà tặng Tết.',
    requirements: [
      'Có kinh nghiệm sales B2B trong mảng F&B, sự kiện hoặc khách sạn.',
      'Kỹ năng đàm phán, thuyết trình và lập báo giá chuyên nghiệp.',
      'Nhanh nhẹn, ngoại hình sáng, tác phong chỉn chu.'
    ],
    benefits: [
      'Lương cứng + Hoa hồng hấp dẫn theo doanh thu dự án.',
      'Môi trường làm việc tự chủ, sáng tạo và nhiều cơ hội mở rộng quan hệ đối tác lớn.'
    ]
  },
  {
    id: 'job-academy-trainer',
    titleEn: 'Master Barista & Sensory Trainer (Dolphy Academy)',
    departmentEn: 'Dolphy Academy',
    typeEn: 'Full-time',
    salaryEn: '12,000,000 - 20,000,000 VND/month',
    descriptionEn: 'Lead professional training courses for students and internal baristas, coach commercial espresso calibration, Latte Art, and sensory tasting.',
    requirementsEn: ["At least 2-3 years as Head Barista or Coffee Trainer with SCA certifications.","Mastery of Latte Art, cupping protocols, and commercial machinery.","Inspiring pedagogical presentation and patient coaching style."],
    benefitsEn: ["Competitive salary + training class completion bonuses.","Access to premium single-origin beans and commercial gear.","Judge at annual Blue Dolphins Barista Championships."],
    title: 'Huấn Luyện Viên Barista & Sensory (Dolphy Academy Trainer)',
    department: 'Khối Học Viện & Đào Tạo',
    type: 'Full-time',
    salary: '12.000.000 – 18.000.000 đ/tháng + Thưởng đứng lớp',
    locations: ['Dolphy Training Hub - 28 Thảo Điền & 1441 Nguyễn Văn Linh'],
    ageRange: '24 – 35 tuổi',
    description: 'Giảng dạy các khóa học Barista Thực Chiến, Latte Art chuyên sâu và Workshop trải nghiệm cho học viên và nhân sự nội bộ.',
    requirements: [
      'Có chứng chỉ SCA (Barista Skills / Sensory Skills) hoặc từng đạt giải tại các cuộc thi Barista.',
      'Ít nhất 2 năm kinh nghiệm đứng quầy và 1 năm kinh nghiệm đào tạo.',
      'Kỹ năng truyền cảm hứng, kiên nhẫn và giọng nói rõ ràng.'
    ],
    benefits: [
      'Thù lao đứng lớp cạnh tranh, được cấp kinh phí tham gia các kỳ thi Barista quốc gia.',
      'Được tự do sáng tạo giáo trình và cập nhật xu hướng cà phê làn sóng thứ ba.'
    ]
  },
  {
    id: 'job-marketing-creator',
    titleEn: 'Content Creator & Social Media Specialist',
    departmentEn: 'Marketing & Media',
    typeEn: 'Full-time / Flexible',
    salaryEn: '9,000,000 - 15,000,000 VND/month',
    descriptionEn: 'Plan and produce engaging photo and video content for Facebook, TikTok, and Instagram, capturing the authentic lifestyle and community moments at Dolphy.',
    requirementsEn: ["Proficiency in smartphone videography, CapCut/Premiere, and storytelling.","Creative visual sense, passion for coffee aesthetics and Gen Z / Expat trends.","Active and confident on camera when needed."],
    benefitsEn: ["Creative autonomy and flexible working locations across 10 green cafes.","Free unlimited specialty drinks and snacks while working on location.","Performance bonuses based on viral reach and engagement."],
    title: 'Content Creator & Quản Trị Fanpage (Social Media Specialist)',
    department: 'Khối Marketing & Sáng Tạo',
    type: 'Full-time',
    salary: '9.000.000 – 14.000.000 đ/tháng',
    locations: ['Quận 2 - Đi thị sát 10 chi nhánh'],
    ageRange: '21 – 28 tuổi',
    description: 'Lên ý tưởng, chụp ảnh, quay video ngắn (TikTok/Reels) về những khoảnh khắc đời thường tại 10 chi nhánh Dolphy, văn hóa thú cưng, giải chạy Spartan và các sự kiện cộng đồng.',
    requirements: [
      'Thành thạo chụp ảnh, quay dựng video ngắn bằng điện thoại/máy ảnh.',
      'Gu thẩm mỹ tinh tế, trẻ trung, nắm bắt nhanh các trào lưu MXH.',
      'Yêu thích cà phê và văn hóa lối sống Thảo Điền.'
    ],
    benefits: [
      'Được cấp thiết bị làm việc, thưởng nóng cho các video viral.',
      'Miễn phí đồ uống hàng ngày tại toàn bộ 10 chi nhánh Dolphy.'
    ]
  },
  {
    id: 'job-bakery-chef',
    titleEn: 'Pastry & Bakery Chef (Dolphy Bakery)',
    departmentEn: 'Bakery Chef',
    typeEn: 'Full-time',
    salaryEn: '8,000,000 - 12,000,000 VND/month',
    descriptionEn: 'Bake daily artisan French croissants, pastries, muffins, and savory snacks for distribution across Dolphy branches every morning.',
    requirementsEn: ["Knowledge of French viennoiserie, bread fermentation, and oven baking.","Meticulous hygiene, punctuality, and pride in artisanal quality.","Culinary or pastry training certificate is an advantage."],
    benefitsEn: ["Stable day shifts (early morning baking schedule).","Modern, air-conditioned central bakery kitchen equipment.","Full insurance, holiday bonuses, and career growth."],
    title: 'Nhân Viên Bếp Bánh Nướng Tươi (Dolphy Bakery Pastry Staff)',
    department: 'Khối Bếp Bánh & Sản Xuất',
    type: 'Toàn thời gian / Bán thời gian',
    salary: '7.500.000 – 10.500.000 đ/tháng + Phụ cấp ca sáng',
    locations: ['Bếp Trung Tâm Dolphy Bakery - TP. Thủ Đức'],
    ageRange: '18 – 30 tuổi',
    description: 'Tham gia sơ chế, tạo hình và nướng các mẻ bánh Croissant, Danish, Cookies thơm lừng mỗi sáng sớm để phân phối đến 10 chi nhánh.',
    requirements: [
      'Yêu thích làm bánh, cẩn thận, sạch sẽ và tuân thủ nghiêm ngặt vệ sinh ATTP.',
      'Chưa có kinh nghiệm sẽ được Bếp trưởng đào tạo từ đầu.'
    ],
    benefits: [
      'Được học nghề làm bánh Âu chuyên nghiệp.',
      'Phụ cấp ăn trưa và thưởng chuyên cần.'
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Katie Beck',
    role: 'Khách hàng thân thiết tại Thảo Điền (Expat)',
    rating: 5,
    comment: 'This is one of my favorite coffee places in Saigon. I buy their bags of coffee beans often as well as sit on the corner sipping coffee while bikes whiz by. The staff is extremely friendly.',
    translation: 'Đây là một trong những quán cà phê yêu thích của tôi ở Sài Gòn. Tôi thường xuyên mua các gói cà phê hạt của họ và ngồi ở góc phố nhâm nhi cà phê ngắm xe cộ qua lại. Nhân viên cực kỳ thân thiện và dễ thương.'
  },
  {
    id: 'test-2',
    author: 'Kwon Yu-rim (권유림)',
    role: 'Khách hàng thường xuyên tại Phú Mỹ Hưng',
    rating: 5,
    comment: '빡시유는 여기가 제일 맛있어요. 직원분들도 친절하고 만족스러워 자주 이용 합니다.',
    translation: 'Bạc sỉu ở đây là ngon nhất Sài Gòn! Nhân viên rất thân thiện, chu đáo và tôi cảm thấy vô cùng hài lòng nên ghé quán hầu như mỗi ngày.'
  },
  {
    id: 'test-3',
    author: 'Lê Hoàng Nam',
    role: 'Cựu học viên Dolphy Academy (Khóa Barista Thực Chiến)',
    rating: 5,
    comment: 'Khóa học thực chiến đúng nghĩa. Mình được đứng máy pha xịn ngay từ buổi thứ hai, thầy chỉ từng tí cách đánh sữa và nén tamp. Tốt nghiệp xong được nhận làm Barista tại chi nhánh Thảo Điền luôn, thu nhập ổn định và tự tin hẳn!',
    translation: ''
  }
];
