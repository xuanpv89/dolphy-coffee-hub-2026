import React from 'react';
import { Award, Heart, Sparkles, MapPin, Coffee, Users, Leaf, Smile, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { brandInfo } from '../data/dolphyData';
import { useDolphy } from '../context/DolphyContext';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { t, language } = useDolphy();

  const stats = [
    { value: '2013', label: language === 'vi' ? 'Khởi nghiệp tại Thảo Điền' : 'Founded in Thao Dien' },
    { value: '10', label: language === 'vi' ? 'Chi nhánh xanh tại TP.HCM' : 'Green Spaces in HCMC' },
    { value: '1 Triệu+', label: language === 'vi' ? 'Tách cà phê hạnh phúc' : 'Happy Cups Served' },
    { value: '100%', label: language === 'vi' ? 'Cà phê rang mộc chuẩn vị' : 'Pure Specialty Beans' }
  ];

  const milestones = [
    {
      year: '2013',
      title: language === 'vi' ? 'Khởi Đầu Từ Góc Nhỏ Thảo Điền' : 'Humble Beginnings in Thao Dien',
      desc: language === 'vi'
        ? 'Cửa hàng đầu tiên mở tại số 31 Thảo Điền. Giữa làn sóng cà phê tẩm bơ bắp phổ biến thời bấy giờ, Dolphy kiên định chỉ phục vụ cà phê mộc nguyên chất và cà phê pha máy Espresso chuẩn Ý.'
        : 'First store opened at 31 Thao Dien, pioneering pure, unadulterated Vietnamese specialty beans and authentic espresso.'
    },
    {
      year: '2016',
      title: language === 'vi' ? 'Vinh Danh Top 10 Quán Cà Phê Đáng Uống Nhất' : 'Voted Top 10 Coffee Spots in Saigon',
      desc: language === 'vi'
        ? 'Tạp chí ẩm thực du lịch Words và The Guide bình chọn Dolphy là Top 10 quán cà phê được cộng đồng chuyên gia quốc tế (Expat) yêu thích nhất tại TP.HCM suốt các năm 2015, 2016, 2017.'
        : 'Honored as a Top 10 Must-Visit Coffee Spot in HCMC by Words magazine for 3 consecutive years.'
    },
    {
      year: '2019 - 2022',
      title: language === 'vi' ? 'Mở Rộng Cụm Thảo Điền & Phú Mỹ Hưng' : 'Expanding to Thao Dien & Phu My Hung',
      desc: language === 'vi'
        ? 'Định hình cụm cửa hàng chiến lược tại hai khu đô thị quốc tế bậc nhất Sài Gòn: Thảo Điền (08, 28 Thảo Điền, 03 Nguyễn Văn Hưởng, 28 Trần Lựu, 113 Dương Văn An) và Phú Mỹ Hưng (Hoàng Văn Thái, Nam Viên, Nam Quang, Nguyễn Văn Linh).'
        : 'Strategic expansion connecting the international expatriate hubs of Thao Dien and Phu My Hung.'
    },
    {
      year: '2024 - 2025',
      title: language === 'vi' ? 'Dolphy Junior Barista Championship & Học Viện' : 'Barista Championship & Academy Launch',
      desc: language === 'vi'
        ? 'Tổ chức giải đấu tay nghề Barista nội bộ thường niên tại 28 Trần Lựu, nâng chuẩn kỹ năng SCA toàn hệ thống và chuẩn hóa giáo trình đào tạo Barista thực chiến 100% tại quầy bar.'
        : 'Inaugural annual Barista Championship, standardizing SCA sensory skills and hands-on store training.'
    },
    {
      year: '2026',
      title: language === 'vi' ? 'Kỷ Nguyên DOLPHY HUB 2026' : 'The DOLPHY HUB 2026 Era',
      desc: language === 'vi'
        ? 'Chuyển mình mạnh mẽ thành Hệ sinh thái Cà phê toàn diện: Chuỗi 10 chi nhánh kết nối cộng đồng, Học viện đào tạo Barista & Quản lý F&B thực chiến, Dịch vụ tiệc Teabreak doanh nghiệp B2B và nền tảng số đa kênh.'
        : 'Comprehensive Coffee Ecosystem: 10 community flagship stores, Barista Academy, B2B Catering, and omnichannel digital ordering.'
    }
  ];

  const pillars = [
    {
      icon: <Coffee size={24} />,
      title: language === 'vi' ? 'Hạt Mộc Thuần Khiết' : '100% Pure Coffee Beans',
      desc: language === 'vi' 
        ? 'Dolphy chỉ tuyển lựa những trái chín đỏ từ nông trại Cầu Đất (Arabica) và Bảo Lộc (Robusta). Rang mộc bằng kỹ thuật gia truyền, tuyệt đối không hương liệu hay chất tạo sánh.'
        : 'Sourced from high-altitude farms in Cau Dat and Bao Loc. Naturally roasted with zero artificial additives.'
    },
    {
      icon: <Smile size={24} />,
      title: language === 'vi' ? 'Barista Hạnh Phúc' : 'Happy Baristas, Happy Cups',
      desc: language === 'vi' 
        ? 'Chúng tôi tin sâu sắc: "Chỉ những Barista hạnh phúc mới tạo nên những tách cà phê hạnh phúc". Đội ngũ Dolphiers luôn được trân trọng, đào tạo bài bản và gắn kết chân thành.'
        : 'We firmly believe only happy Baristas can brew happy cups. Our team is trained, fairly compensated, and deeply loved.'
    },
    {
      icon: <Users size={24} />,
      title: language === 'vi' ? 'Điểm Hẹn Gắn Kết' : 'Global Community Hub',
      desc: language === 'vi' 
        ? 'Nơi hội tụ cư dân địa phương và bạn bè quốc tế từ hơn 30 quốc gia. Không gian mở ngập tràn cây xanh, hồ cá Koi, thân thiện với thú cưng (Pet-friendly) và cả gia đình.'
        : 'A warm meeting place for locals and expats from 30+ nations. Lush open air, live Koi ponds, and family-pet friendly.'
    },
    {
      icon: <Leaf size={24} />,
      title: language === 'vi' ? 'Lối Sống Xanh Bền Vững' : 'Eco-Conscious Living',
      desc: language === 'vi' 
        ? 'Chương trình Green Stamp Card đồng hành giảm thiểu đồ nhựa một lần, khuyến khích khách hàng mang bình cá nhân và tái sử dụng bã cà phê làm phân bón sinh học.'
        : 'Green Stamp loyalty initiative encouraging reusable tumblers, paper straws, and zero-waste coffee grounds upcycling.'
    }
  ];

  const photoStories = [
    {
      image: '/images/fanpage/community-expat-family-pet.jpg',
      tag: language === 'vi' ? 'Văn Hóa Pet-Friendly' : 'Pet-Friendly Culture',
      title: language === 'vi' ? 'Gia đình nhỏ và người bạn bốn chân' : 'Expat families and their beloved pets',
      desc: language === 'vi' ? 'Một buổi sáng trong lành tại 08 Thảo Điền: cà phê thơm ngát trên bàn và chú cún ngoan ngoãn nằm đón gió.' : 'A peaceful Thao Dien morning with delicious coffee and furry friends.'
    },
    {
      image: '/images/fanpage/community-kids-art-workshop.jpg',
      tag: language === 'vi' ? 'Dolphy Art & Coffee' : 'Creative Kids Workshop',
      title: language === 'vi' ? 'Xưởng vẽ sáng tạo cho bé cuối tuần' : 'Weekend painting classes for children',
      desc: language === 'vi' ? 'Bố mẹ thảnh thơi nhâm nhi Cold Brew cam, các bé thỏa sức vẽ nên thế giới diệu kỳ bằng màu vẽ.' : 'Parents unwind with signature cold brew while children paint imaginative worlds.'
    },
    {
      image: '/images/fanpage/academy-championship-backdrop.jpg',
      tag: language === 'vi' ? 'Dolphy Academy' : 'Barista Championship',
      title: language === 'vi' ? 'Ngọn lửa nhiệt huyết của tuổi trẻ' : 'Passion ignited at Barista Championship',
      desc: language === 'vi' ? 'Giải đấu Junior Barista thường niên tại 28 Trần Lựu – nơi tôn vinh tài năng và tình yêu với từng giọt cà phê.' : 'Celebrating young craftsmanship, technical precision, and heartfelt service.'
    },
    {
      image: '/images/fanpage/career-dolphiers-striped-uniform.jpg',
      tag: language === 'vi' ? 'Đội Ngũ Dolphiers' : 'Our Dolphier Family',
      title: language === 'vi' ? 'Nụ cười sau chiếc áo sọc xanh trắng' : 'Smiles in our iconic blue stripes',
      desc: language === 'vi' ? 'Sự đoàn kết, thân thiện và năng lượng tích cực của những "chú cá heo" luôn chào đón bạn mỗi ngày.' : 'Agile, warm, and tightly-knit like dolphins bringing happiness to every customer.'
    },
    {
      image: '/images/fanpage/retail-teabreak-catering.jpg',
      tag: language === 'vi' ? 'Dịch Vụ B2B' : 'Corporate Catering',
      title: language === 'vi' ? 'Đồng hành cùng sự kiện doanh nghiệp' : 'Partnering with prestigious events',
      desc: language === 'vi' ? 'Bàn tiệc Teabreak trọn gói tiếp sức cho các hội nghị quốc tế và đối tác doanh nghiệp lớn tại Sài Gòn.' : 'Full-scale tea, coffee, and French pastry catering for corporate partners.'
    },
    {
      image: '/images/fanpage/community-koi-fish-pond.jpg',
      tag: language === 'vi' ? 'Không Gian Xanh' : 'Tranquil Ambiance',
      title: language === 'vi' ? 'Hồ cá Koi thanh bình giữa phố thị' : 'Relaxing Koi pond in the heart of town',
      desc: language === 'vi' ? 'Điểm hẹn thư thái cho gia đình nhiều thế hệ trò chuyện và tìm lại sự bình yên trong tâm hồn.' : 'A calming oasis for multiple generations to connect and recharge.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-white dark:bg-[#0f172a] text-[#222222] dark:text-[#f1f5f9] transition-colors">
      
      {/* 1. Page Hero Banner */}
      <section className="bg-gradient-to-r from-[#165b94] via-[#2076bd] to-[#165b94] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/images/hero_slide_store.webp')" }} />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/30 backdrop-blur-sm">
            <Sparkles size={14} />
            <span>{t('about.tag')}</span>
          </span>
          <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
            {t('about.title')}
          </h1>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto italic font-serif leading-relaxed">
            {t('about.quote')}
          </p>
        </div>
      </section>

      {/* 2. Brand Stats Ribbon */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-slate-800">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center p-2 flex flex-col items-center justify-center">
              <span className="font-oswald text-3xl sm:text-4xl font-bold text-[#2076bd] dark:text-[#3ba0e6] block tracking-wide">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 min-h-[38px] flex items-center justify-center text-center leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Chương 1: Hành Trình Khởi Nghiệp & Câu Chuyện Hạt Mộc */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
                {language === 'vi' ? 'CHƯƠNG I: CÂU CHUYỆN KHỞI NGUỒN' : 'CHAPTER I: OUR ORIGIN'}
              </span>
              <h2 className="font-oswald text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] leading-snug">
                {language === 'vi' ? (
                  <>Khởi Đầu Từ Niềm Đam Mê<br className="hidden sm:inline" /> Cà Phê Thuần Túy</>
                ) : (
                  t('about.origin_title')
                )}
              </h2>
            </div>
            
            <p className="leading-relaxed">
              {t('about.origin_p1')}
            </p>
            <p className="leading-relaxed">
              {t('about.origin_p2')}
            </p>
            <p className="leading-relaxed">
              {t('about.origin_p3')}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/branches"
                className="dolphy-btn dolphy-btn-primary px-5 py-2.5 rounded text-xs uppercase font-oswald flex items-center gap-1.5"
              >
                <MapPin size={14} />
                <span>{language === 'vi' ? 'Khám phá 10 chi nhánh' : 'Explore 10 Branches'}</span>
              </Link>
              <Link
                to="/shop"
                className="dolphy-btn dolphy-btn-outline px-5 py-2.5 rounded text-xs uppercase font-oswald dark:border-[#3ba0e6] dark:text-[#3ba0e6]"
              >
                <span>{language === 'vi' ? 'Ghé thăm cửa hàng hạt' : 'Specialty Beans'}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-slate-800 h-64 bg-slate-900 relative group">
                <img
                  src="/images/fanpage/branch-28-thao-dien.jpg"
                  alt="Dolphy Thảo Điền Facade"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white font-oswald text-[10px] uppercase font-bold tracking-wider">
                  28 Thảo Điền
                </span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-slate-800/80 text-xs text-gray-700 dark:text-gray-300 min-h-[80px] flex flex-col justify-center">
                <p className="font-oswald font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase text-sm mb-0.5">28 THẢO ĐIỀN</p>
                <p className="leading-relaxed">{language === 'vi' ? 'Biểu tượng gắn liền với nhịp sống cư dân từ những ngày đầu.' : 'Iconic spot cherished by expats since 2013.'}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-slate-800 h-64 bg-slate-900 relative group">
                <img
                  src="/images/fanpage/academy-signature-rose-latte.jpg"
                  alt="Dolphy Barista Signature Latte"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#f09c05]/90 text-white font-oswald text-[10px] uppercase font-bold tracking-wider">
                  Espresso & Latte
                </span>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/80 dark:bg-orange-950/30 text-xs text-gray-700 dark:text-gray-300 min-h-[80px] flex flex-col justify-center">
                <p className="font-oswald font-bold text-[#f09c05] uppercase text-sm mb-0.5">HẠT MỘC NGUYÊN BẢN</p>
                <p className="leading-relaxed">{language === 'vi' ? 'Rang mộc mỗi tuần, đóng túi van 1 chiều đạt chuẩn.' : 'Freshly roasted weekly with zero butter or flavoring.'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Guide Award Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-blue-200 dark:border-slate-700 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#f09c05] text-white flex items-center justify-center shrink-0 shadow-lg">
            <Award size={36} />
          </div>
          <div className="space-y-1 text-center md:text-left flex-1">
            <span className="text-[10px] font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
              PRESTIGIOUS RECOGNITION
            </span>
            <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.awards_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              {t('about.awards_desc')}
            </p>
          </div>
        </div>

        {/* 4. Chương 2: 4 Giá Trị Cốt Lõi (Happiness in a cup) */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
              {language === 'vi' ? 'CHƯƠNG II: TRIẾT LÝ PHỤC VỤ' : 'CHAPTER II: OUR PHILOSOPHY'}
            </span>
            <h2 className="section-title">
              {language === 'vi' ? 'HẠNH PHÚC TỪ NHỮNG ĐIỀU CHÂN THÀNH' : 'HAPPINESS IN A CUP'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {language === 'vi'
                ? 'Tại Dolphy, mỗi tách cà phê được trao đi không chỉ chứa đựng caffeine giúp bạn tỉnh táo, mà còn là tâm huyết, nụ cười và năng lượng tích cực bắt đầu ngày mới.'
                : 'Every cup served at Dolphy carries warmth, precision, and heartfelt positivity to brighten your day.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center group-hover:bg-[#2076bd] group-hover:text-white transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-oswald text-base sm:text-lg font-bold uppercase text-[#222222] dark:text-white min-h-[48px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Chương 3: Dấu Ấn Thời Gian (Milestone Timeline) */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
              {language === 'vi' ? 'CHƯƠNG III: DẤU ẤN THỜI GIAN' : 'CHAPTER III: OUR TIMELINE'}
            </span>
            <h2 className="section-title">
              {language === 'vi' ? 'HÀNH TRÌNH 2013 - 2026' : 'JOURNEY 2013 - 2026'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {language === 'vi' ? 'Chặng đường hơn một thập kỷ từng bước kiến tạo thương hiệu cà phê đáng tin cậy của người Sài Gòn.' : 'Over a decade of continuous passion, community growth, and coffee excellence.'}
            </p>
          </div>

          <div className="relative border-l-2 border-blue-200 dark:border-slate-700 ml-4 sm:ml-10 md:ml-12 space-y-8 pl-6 sm:pl-8">
            {milestones.map((m, mIdx) => (
              <div key={mIdx} className="relative group">
                {/* Circle Marker centered on border line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] border-4 border-[#2076bd] group-hover:border-[#f09c05] transition-colors shadow-xs" />

                <div className="bg-white dark:bg-[#1e293b] p-5 sm:p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-2.5 group-hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#f09c05]/15 text-[#d98200] dark:text-[#f09c05] font-oswald text-xs sm:text-sm font-bold tracking-wider inline-flex items-center gap-1.5 shrink-0">
                      <Calendar size={13} />
                      <span>{m.year}</span>
                    </span>
                    <h3 className="font-oswald text-base sm:text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Chương 4: Thư Viện Hình Ảnh Cảm Xúc (Authentic Photo Stories) */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#f09c05] font-bold">
              {language === 'vi' ? 'CHƯƠNG IV: NHỮNG KHOẢNH KHẮC ĐỜI THƯỜNG' : 'CHAPTER IV: REAL-LIFE MOMENTS'}
            </span>
            <h2 className="section-title">
              {language === 'vi' ? 'ĐỜI THỰC TẠI 10 KHÔNG GIAN DOLPHY' : 'MOMENTS ACROSS 10 DOLPHY SPACES'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {language === 'vi'
                ? 'Không diễn xuất, không cầu kỳ. Đây là những nụ cười, tách cà phê và câu chuyện chân thực nhất được ghi lại từ ống kính của chính khách hàng và đội ngũ Dolphiers.'
                : 'Unfiltered, authentic stories captured right in our stores by our baristas and cherished guests.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoStories.map((story, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white font-oswald text-[10px] uppercase font-bold tracking-wider">
                    {story.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <h3 className="font-oswald text-base font-bold uppercase text-[#222222] dark:text-white group-hover:text-[#2076bd] dark:group-hover:text-[#3ba0e6] transition-colors min-h-[44px] flex items-center">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Sứ mệnh & Tầm nhìn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center text-2xl font-bold">
                ★
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {t('about.mission_title')}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-semibold">
                {t('about.mission_desc')}
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-3 border-t border-gray-100 dark:border-slate-800">
              {t('about.mission_sub')}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-slate-800 text-[#f09c05] flex items-center justify-center text-2xl font-bold">
                ☀
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                {t('about.vision_title')}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-semibold text-[#f09c05]">
                {t('about.vision_desc')}
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-3 border-t border-gray-100 dark:border-slate-800">
              {t('about.vision_sub')}
            </p>
          </div>
        </div>

        {/* 8. Lời cam kết chân thành & Pháp lý doanh nghiệp */}
        <div id="contact" className="p-8 sm:p-10 rounded-2xl bg-[#f0f8ff] dark:bg-[#1e293b] border border-blue-100 dark:border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#2076bd] dark:text-[#3ba0e6] font-bold">
              {language === 'vi' ? 'CAM KẾT CHẤT LƯỢNG' : 'OUR PLEDGE'}
            </span>
            <h3 className="font-oswald text-2xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
              {t('about.contact_title')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {language === 'vi'
                ? 'Dolphy Café cam kết minh bạch 100% về nguồn gốc hạt cà phê, xuất xứ nguyên vật liệu và tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm khắt khe nhất.'
                : 'Dolphy Café pledges full transparency in bean origins, food safety, and fair trade partnerships.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-slate-700">
            <div className="space-y-2.5">
              <p><strong>{language === 'vi' ? 'Đơn vị chủ quản:' : 'Operating Company:'}</strong> {t('footer.company_name')}</p>
              <p><strong>{language === 'vi' ? 'Mã số doanh nghiệp (MST):' : 'Tax / Business Registration:'}</strong> 0313865203</p>
              <p><strong>Hotline Chăm Sóc Khách Hàng:</strong> <a href="tel:0938084985" className="text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline">{brandInfo.hotline}</a></p>
              <p><strong>Email chính thức:</strong> <a href={`mailto:${brandInfo.email}`} className="text-[#2076bd] dark:text-[#3ba0e6] hover:underline">{brandInfo.email}</a></p>
            </div>
            <div className="space-y-2.5">
              <p><strong>{language === 'vi' ? 'Trụ sở điều hành Dolphy Hub:' : 'Headquarters & Training Hub:'}</strong> {brandInfo.mainAddress}</p>
              <p><strong>{language === 'vi' ? 'Học viện Barista:' : 'Dolphy Barista Academy:'}</strong> 28 Thảo Điền & 1441 Nguyễn Văn Linh</p>
              <p><strong>{language === 'vi' ? 'Giờ mở cửa toàn chuỗi:' : 'Operating Hours:'}</strong> 06:30 - 22:30 hàng ngày</p>
              <p><strong>{language === 'vi' ? 'Kênh mạng xã hội:' : 'Social Channels:'}</strong> 
                <span className="inline-flex items-center gap-2 ml-2">
                  <a href={brandInfo.facebook} target="_blank" rel="noreferrer" className="text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline">Facebook</a> •
                  <a href={brandInfo.instagram} target="_blank" rel="noreferrer" className="text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline">Instagram</a> •
                  <a href={brandInfo.tiktok} target="_blank" rel="noreferrer" className="text-[#2076bd] dark:text-[#3ba0e6] font-bold hover:underline">TikTok</a>
                </span>
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
