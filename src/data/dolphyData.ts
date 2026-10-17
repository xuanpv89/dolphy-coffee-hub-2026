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
    image: '/images/image4.jpg',
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
    image: '/images/image2.jpg',
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
    image: '/images/image1.jpg',
    locations: [
      'Dolphy Thảo Điền (28 Thảo Điền, Q.2)',
      'Dolphy Phú Mỹ Hưng (1441 Nguyễn Văn Linh, Q.7)'
    ]
  }
];

export const productsData: Product[] = [
  {
    id: 'arabica-250g',
    name: 'Arabica 250g (100% Arabica) (Gói)',
    alias: 'arabica-250g-100-arabica-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 255000,
    weight: '250g',
    origin: 'Cầu Đất, Lâm Đồng (Độ cao 1.500m - 1.650m)',
    roastLevel: 'Medium Roast (Rang vừa)',
    tasteNotes: ['Hương hoa nhài', 'Chua thanh dịu nhẹ', 'Hậu vị ngọt ngào', 'Hương trái cây mọng'],
    description: `100% hạt Arabica thượng hạng được tuyển chọn kỹ lưỡng từ vùng đất Cầu Đất - Đà Lạt, nơi có khí hậu quanh năm se lạnh và thổ nhưỡng lý tưởng bậc nhất cho cây cà phê Arabica.

Hạt được rang ở mức vừa (Medium) để lưu giữ trọn vẹn hương thơm phong phú của hoa cỏ, độ chua thanh tao nhã và hậu vị ngọt sâu lưu luyến. Phù hợp hoàn hảo cho cách pha Pour Over (V60), Cold Brew và pha máy Espresso hiện đại.`,
    brewingRecommendation: 'Pha Pour-over / V60, Cold Brew, Máy pha Espresso gia đình hoặc quán.',
    images: [
      '/images/prod_arabica_250g.jpg',
      '/images/prod_arabica_500g.jpg',
      '/images/image12.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'arabica-500g',
    name: 'Arabica 500g (100% Arabica) (Gói)',
    alias: 'arabica-500g-100-arabica-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 485000,
    compareAtPrice: 510000,
    weight: '500g',
    origin: 'Cầu Đất, Lâm Đồng',
    roastLevel: 'Medium Roast',
    tasteNotes: ['Hương hoa cỏ', 'Vị thanh ngọt', 'Acidity sáng', 'Hậu vị thanh lịch'],
    description: `Gói tiết kiệm 500g dành cho người yêu thích hương vị Arabica tinh tế sử dụng hàng ngày tại nhà hoặc văn phòng. 100% hạt Arabica được đóng gói van 1 chiều giúp bảo toàn hương vị và khí CO2 tự nhiên của hạt cà phê tươi mới.`,
    brewingRecommendation: 'Pha V60, Cold Brew, French Press, Máy Espresso.',
    images: [
      '/images/prod_arabica_500g.jpg',
      '/images/prod_arabica_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'robusta-250g',
    name: 'Robusta 250g (100% Robusta) (Gói)',
    alias: 'robusta-250g-100-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 185000,
    weight: '250g',
    origin: 'Bảo Lộc, Lâm Đồng (Cao nguyên bazan màu mỡ)',
    roastLevel: 'Medium-Dark Roast (Rang nâu đậm)',
    tasteNotes: ['Vị đắng đầm', 'Hương socola đen', 'Hạt dẻ rang', 'Hàm lượng caffeine cao'],
    description: `100% hạt Robusta Việt Nam chất lượng cao được hái chín cây và sơ chế kỹ lưỡng, loại bỏ hoàn toàn hạt xanh lép. 

Đặc trưng bởi hương vị cà phê Việt Nam truyền thống mạnh mẽ, body dày đậm, hậu vị béo ngậy và hàm lượng caffeine tự nhiên giúp bạn bừng tỉnh năng lượng tức thì. Lựa chọn số 1 cho người mê cà phê sữa đá, cà phê đen đá và pha phin truyền thống.`,
    brewingRecommendation: 'Pha phin nhôm truyền thống, pha máy Espresso gu đậm, pha cà phê sữa đá.',
    images: [
      '/images/prod_robusta_250g.jpg',
      '/images/prod_robusta_500g.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'robusta-500g',
    name: 'Robusta 500g (100% Robusta) (Gói)',
    alias: 'robusta-500g-100-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 350000,
    compareAtPrice: 370000,
    weight: '500g',
    origin: 'Bảo Lộc, Lâm Đồng',
    roastLevel: 'Medium-Dark Roast',
    tasteNotes: ['Đậm đà', 'Thơm nồng', 'Socola nguyên chất', 'Hậu vị bền bỉ'],
    description: `Gói 500g kinh tế cho người sành gu cà phê đậm đà hoặc các văn phòng làm việc. Hạt Robusta hạt to đồng đều, được rang theo công thức gia truyền của Dolphy giúp hạt dậy mùi thơm ngào ngạt mà không hề bị khét cháy.`,
    brewingRecommendation: 'Pha phin truyền thống, cà phê đen, bạc sỉu.',
    images: [
      '/images/prod_robusta_500g.jpg',
      '/images/prod_robusta_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'espresso-250g',
    name: 'Espresso 250g (80% Arabica + 20% Robusta) (Gói)',
    alias: 'espresso-250g-80-arabica-20-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 235000,
    weight: '250g',
    origin: 'Phối trộn Cầu Đất & Bảo Lộc',
    roastLevel: 'Medium Roast',
    tasteNotes: ['Hài hòa chua & đắng', 'Crema vàng dày mịn', 'Hương caramel ngọt bùi', 'Hương hoa thoang thoảng'],
    description: `Dòng sản phẩm Signature được yêu thích nhất tại Dolphy Café! Sự kết hợp hoàn hảo theo tỷ lệ vàng: 80% Arabica Cầu Đất thanh thoát và 20% Robusta Lâm Đồng đậm đà.

Tỉ lệ này tạo nên một ly Espresso cân bằng mỹ mãn: lớp bọt kem crema dày óng ánh, vị chua thanh hòa quyện êm ái cùng độ đắng dịu ngọt của caramel. Rất dễ uống và thích hợp cho cả món cà phê đen lẫn món có sữa như Latte, Cappuccino.`,
    brewingRecommendation: 'Máy pha Espresso, Moka Pot, Phin nhôm tân thời, Cold Brew kết hợp cam sả.',
    images: [
      '/images/prod_espresso_250g.jpg',
      '/images/prod_espresso_500g.jpg'
    ],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'espresso-500g',
    name: 'Espresso 500g (80% Arabica + 20% Robusta) (Gói)',
    alias: 'espresso-500g-80-arabica-20-robusta-goi',
    category: 'coffee-bag',
    categoryName: 'Cà phê túi / Coffee Bag',
    price: 445000,
    compareAtPrice: 470000,
    weight: '500g',
    origin: 'Phối trộn Cầu Đất & Bảo Lộc',
    roastLevel: 'Medium Roast',
    tasteNotes: ['Cân bằng tuyệt đối', 'Vị ngọt caramel', 'Crema óng ả', 'Đậm đà êm mượt'],
    description: `Gói lớn 500g dòng Espresso Blend kinh điển của Dolphy. Đảm bảo nguồn năng lượng mỗi sớm mai với hương thơm lan tỏa ngập tràn không gian.`,
    brewingRecommendation: 'Máy pha Espresso, Phin truyền thống, French Press.',
    images: [
      '/images/prod_espresso_500g.jpg',
      '/images/prod_espresso_250g.jpg'
    ],
    inStock: true
  },
  {
    id: 'combo-phin-traditional-light',
    name: 'COMBO PHIN VIETNAM - TRADITIONAL LIGHT (Gu Tinh Tế)',
    alias: 'combo-phin-vietnam-traditional-light',
    category: 'combo',
    categoryName: 'Combo Hộp Quà Tết 2026',
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
    alias: 'cappuccino',
    category: 'combo',
    categoryName: 'Combo Hộp Quà Tết 2026',
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
    images: [
      '/images/prod_combo_phin_medium.jpg',
      '/images/prod_phin_nhom.jpg'
    ],
    inStock: true
  },
  {
    id: 'combo-phin-traditional-strong',
    name: 'COMBO PHIN VIETNAM - TRADITIONAL STRONG (Gu Mạnh Mẽ)',
    alias: 'latte',
    category: 'combo',
    categoryName: 'Combo Hộp Quà Tết 2026',
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
    images: [
      '/images/prod_combo_phin_strong.jpg',
      '/images/prod_phin_nhom.jpg'
    ],
    inStock: true
  },
  {
    id: 'phin-ca-phe-nhom',
    name: 'Phin Cà Phê Nhôm Truyền Thống Dolphy',
    alias: 'phin-ca-phe-nhom-truyen-thong',
    category: 'equipment',
    categoryName: 'Dụng cụ pha chế',
    price: 100000,
    weight: '150g',
    description: `Phin nhôm truyền thống được chế tác từ chất liệu nhôm dày dặn, cứng cáp với công nghệ mạ anode cao cấp, giúp duy trì nhiệt độ ủ ổn định và bảo toàn trọn vẹn hương vị cà phê nguyên bản.

Sản phẩm có 4 màu sắc tinh tế để bạn lựa chọn:
1. Đen truyền thống (Traditional Black)
2. Vàng đồng quý phái (Bronze Gold)
3. Xám đậm hiện đại (Dark Grey)
4. Xanh dương đại dương (Royal Blue)`,
    images: [
      '/images/prod_phin_nhom.jpg',
      '/images/image4.jpg'
    ],
    inStock: true
  }
];

export const branchesData: Branch[] = [
  // Khu vực Quận 2 (TP. Thủ Đức)
  {
    id: 'branch-thao-dien-1',
    name: 'Dolphy Café - 28 Thảo Điền',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '28 Thảo Điền, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00 (Mở cửa mỗi ngày)',
    mapUrl: 'https://maps.google.com/?q=28+Thao+Dien+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image5.jpg',
    features: ['Góc ngồi ngắm phố sầm uất', 'Wifi tốc độ cao', 'Thân thiện thú cưng', 'Dolphy Academy Training Hub'],
    isFlagship: true
  },
  {
    id: 'branch-thao-dien-2',
    name: 'Dolphy Café - 08 Thảo Điền',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '08 Thảo Điền, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00 (Mở cửa mỗi ngày)',
    mapUrl: 'https://maps.google.com/?q=08+Thao+Dien+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image1.jpg',
    features: ['Không gian mở thoáng mát', 'Máy lạnh trong nhà', 'Chỗ đậu xe rộng rãi']
  },
  {
    id: 'branch-nguyen-van-huong',
    name: 'Dolphy Café - 03 Nguyễn Văn Hưởng',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'Thảo Điền, TP. Thủ Đức',
    address: '03 Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=03+Nguyen+Van+Huong+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image2.jpg',
    features: ['Gần sông Sài Gòn lộng gió', 'Yên tĩnh làm việc & đọc sách', 'Menu bánh tươi']
  },
  {
    id: 'branch-duong-van-an',
    name: 'Dolphy Café - 113 Dương Văn An',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'An Phú, TP. Thủ Đức',
    address: '113 Dương Văn An, Phường An Phú, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=113+Duong+Van+An+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image3.jpg',
    features: ['Khu dân cư văn minh', 'Bàn làm việc nhóm lớn', 'Ổ cắm điện từng bàn']
  },
  {
    id: 'branch-tran-luu',
    name: 'Dolphy Café - 28 Trần Lựu',
    area: 'Quận 2 (TP. Thủ Đức)',
    district: 'An Phú, TP. Thủ Đức',
    address: '28 Trần Lựu, Phường An Phú, Quận 2 (TP. Thủ Đức), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=28+Tran+Luu+District+2+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image4.jpg',
    features: ['Khu biệt thự yên tĩnh', 'Không gian xanh mát', 'Thích hợp gặp đối tác']
  },

  // Khu vực Quận 7
  {
    id: 'branch-nguyen-van-linh',
    name: 'Dolphy Café - 1441 Nguyễn Văn Linh',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: '1441 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=1441+Nguyen+Van+Linh+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image9.jpg',
    features: ['Trục đường lớn Phú Mỹ Hưng', 'Khách quốc tế & Hàn Quốc đông đúc', 'Dolphy Academy Training Hub Q7'],
    isFlagship: true
  },
  {
    id: 'branch-nam-vien',
    name: 'Dolphy Café - Nam Viên',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phú, Quận 7',
    address: '35 Đường Số 16, Khu dân cư Nam Viên, Phường Tân Phú, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=35+Duong+so+16+Nam+Vien+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image6.jpg',
    features: ['Công viên Nam Viên xanh mát', 'Không khí trong lành', 'Khu vực ngoài trời thoáng đãng']
  },
  {
    id: 'branch-ly-long-tuong',
    name: 'Dolphy Café - Lý Long Tường',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: 'R3-21 Lý Long Tường, Phường Tân Phong, Quận 7, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:00',
    mapUrl: 'https://maps.google.com/?q=R3-21+Ly+Long+Tuong+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image7.jpg',
    features: ['Trung tâm phố đi bộ Phú Mỹ Hưng', 'Gần các nhà hàng ẩm thực', 'Chỗ ngồi bệt & bàn cao']
  },
  {
    id: 'branch-hoang-van-thai',
    name: 'Dolphy Café - Prudential Tower',
    area: 'Quận 7 (Phú Mỹ Hưng)',
    district: 'Tân Phong, Quận 7',
    address: '8 Hoàng Văn Thái, Khu Phố 1, Quận 7 (Tòa nhà Prudential), TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 20:30 (Thứ 2 - Thứ 7)',
    mapUrl: 'https://maps.google.com/?q=8+Hoang+Van+Thai+District+7+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image8.jpg',
    features: ['Phục vụ dân văn phòng & doanh nghiệp', 'Take-away siêu nhanh', 'Đặt món online giao tận bàn']
  },

  // Khu vực Bình Thạnh
  {
    id: 'branch-pham-viet-chanh',
    name: 'Dolphy Café - Phạm Viết Chánh',
    area: 'Quận Bình Thạnh',
    district: 'Phường 19, Bình Thạnh',
    address: '79 Phạm Viết Chánh, Phường 19, Quận Bình Thạnh, TP.HCM',
    phone: '0938 084 985',
    openingHours: '06:30 - 22:30',
    mapUrl: 'https://maps.google.com/?q=79+Pham+Viet+Chanh+Binh+Thanh+Ho+Chi+Minh',
    mapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1G8GDTYb1sLjNzvR_axBATk2463LZn5M&ehbc=2E312F',
    image: '/images/image10.jpg',
    features: ['Khu phố Tây/Nhật Phạm Viết Chánh sôi động', 'Nhạc acoustic nhẹ nhàng', 'Bạc sỉu & cà phê pha phin truyền thống']
  }
];

export const articlesData: Article[] = [
  {
    id: 'series-cold-brew',
    title: 'Series Mỗi Ngày Một Cách Pha: #1 Cold Brew - Tinh Tế Của Sự Đơn Giản',
    slug: 'series-moi-ngay-mot-cach-pha-cold-brew',
    category: 'Cẩm Nang Pha Chế',
    date: '2026-10-15',
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
    title: 'Cà Phê Phin - Nét Văn Hóa Độc Đáo Của Người Việt',
    slug: 'ca-phe-phin-net-van-hoa-doc-dao-cua-viet-nam',
    category: 'Văn Hóa Cà Phê',
    date: '2026-10-12',
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
    title: 'Latte Là Gì? Nghệ Thuật Tạo Nên Một Tách Café Được Cả Thế Giới Say Mê',
    slug: 'latte-la-gi',
    category: 'Cẩm Nang Barista',
    date: '2026-09-28',
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
    title: 'DOLPHY CAFÉ COFFEE BAG - Đi Tìm Gu Cà Phê Chân Ái Cho Bạn',
    slug: 'dolphy-cafe-coffee-bag-find-your-match',
    category: 'Hướng Dẫn Chọn Cà Phê',
    date: '2026-09-15',
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
    title: 'Thẻ Quà Tặng Tích Điểm: Mua 10 Tặng 1 Tại Toàn Hệ Thống Dolphy Café',
    slug: 'the-qua-tang-mua-10-tang-1',
    category: 'Chương Trình Khách Hàng',
    date: '2026-09-01',
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
    title: 'Green Stamp - Cùng Dolphy Chung Tay Vì Môi Trường Xanh',
    slug: 'green-stamp-bao-ve-moi-truong',
    category: 'Môi Trường & Cộng Đồng',
    date: '2026-08-20',
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

export const jobsData: Job[] = [
  {
    id: 'job-barista',
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
    title: 'Giám Sát Ca / Quản Lý Cửa Hàng (Store Supervisor / Manager)',
    department: 'Khối Vận Hành',
    type: 'Full-time',
    salary: '9.000.000 – 14.000.000 đ/tháng + KPIs + Thưởng',
    locations: ['Quận 2', 'Quận 7'],
    ageRange: '22 – 30 tuổi',
    description: 'Chịu trách nhiệm vận hành cửa hàng, quản lý ca làm việc, kiểm soát chất lượng đồ uống và chăm sóc khách hàng tại chi nhánh.',
    requirements: [
      'Có từ 1 năm kinh nghiệm ở vị trí tương đương tại các chuỗi F&B hoặc Specialty Coffee.',
      'Kỹ năng quản lý nhân sự, phân chia ca làm việc và giải quyết tình huống khéo léo.',
      'Giao tiếp tiếng Anh trôi chảy.',
      'Tâm huyết với nghề và thấu hiểu triết lý "Happiness in a cup".'
    ],
    benefits: [
      'Thu nhập cạnh tranh theo năng lực quản lý.',
      'Được tham gia các khóa đào tạo quản trị chuyên sâu.',
      'Chế độ bảo hiểm và phúc lợi đầy đủ theo luật lao động.'
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
