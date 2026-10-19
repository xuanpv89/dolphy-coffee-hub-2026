import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Briefcase,
  DollarSign,
  Coffee,
  MapPin,
  TrendingUp,
  Link as LinkIcon,
  Search,
  ExternalLink,
  Copy,
  Check,
  Filter,
  Download,
  ArrowLeft,
  RefreshCw,
  Eye,
  EyeOff,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  AlertCircle,
  FileText,
  Globe,
  Sun,
  Moon,
  Clock,
  Phone,
  Mail,
  Store,
  GraduationCap,
  Calendar,
  Settings,
  Plus,
  QrCode,
  SlidersHorizontal,
  Wrench,
  RotateCcw,
  BarChart3,
  FileSpreadsheet,
  Award,
  Zap,
  Info,
  CheckCircle2,
  Trash2,
  MessageSquare
} from 'lucide-react';
import { useDolphy } from '../context/DolphyContext';
import {
  articlesData,
  productsData,
  coursesData,
  jobsData,
  branchesData,
  brandInfo
} from '../data/dolphyData';
import { Order, StudentRegistration, JobApplication } from '../types';
import { AddStudentModal } from '../components/admin/AddStudentModal';
import { AddOrderModal } from '../components/admin/AddOrderModal';
import { AddCohortModal, AcademyCohort } from '../components/admin/AddCohortModal';
import { RecordDetailModal } from '../components/admin/RecordDetailModal';

export const AdminDashboard: React.FC = () => {
  const {
    orders,
    registrations,
    applications,
    submitOrder,
    submitRegistration,
    updateOrderStatus,
    updateRegistrationStatus,
    updateApplicationStatus,
    t,
    language,
    toggleLanguage,
    theme,
    toggleTheme,
    showToast
  } = useDolphy();

  // Active admin tab
  type AdminTab = 'overview' | 'students' | 'schedule' | 'orders' | 'candidates' | 'products' | 'branches' | 'settings' | 'funnel' | 'sitemap';
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // Modals state
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isAddOrderOpen, setIsAddOrderOpen] = useState(false);
  const [isAddCohortOpen, setIsAddCohortOpen] = useState(false);
  const [selectedRecordForDetail, setSelectedRecordForDetail] = useState<{
    type: 'student' | 'order' | 'candidate';
    data: any;
  } | null>(null);

  // Filters & Searches
  const [searchTerm, setSearchTerm] = useState('');
  const [studentCourseFilter, setStudentCourseFilter] = useState('all');
  const [studentStatusFilter, setStudentStatusFilter] = useState('all');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [candidateJobFilter, setCandidateJobFilter] = useState('all');
  const [candidateStatusFilter, setCandidateStatusFilter] = useState('all');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');
  const [sitemapCategoryFilter, setSitemapCategoryFilter] = useState('all');
  const [sitemapSearch, setSitemapSearch] = useState('');

  // Overview timeframe filter
  const [overviewTimeframe, setOverviewTimeframe] = useState<'all' | 'month' | 'week' | 'today'>('all');

  // Schedule filters
  const [cohortCourseFilter, setCohortCourseFilter] = useState('all');
  const [cohortStatusFilter, setCohortStatusFilter] = useState('all');

  // Local product stock status override map
  const [productStockMap, setProductStockMap] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    productsData.forEach(p => {
      map[String(p.id)] = p.inStock;
    });
    return map;
  });

  const toggleProductStock = (id: string | number) => {
    const key = String(id);
    const updated = !productStockMap[key];
    setProductStockMap(prev => ({ ...prev, [key]: updated }));
    showToast(language === 'vi' 
      ? `Đã cập nhật trạng thái món: ${updated ? 'Còn hàng' : 'Tạm hết hàng'}`
      : `Product status updated: ${updated ? 'In Stock' : 'Out of Stock'}`
    );
  };

  // Academy Cohorts / Batch Schedule state (persisted)
  const [cohorts, setCohorts] = useState<AcademyCohort[]>(() => {
    try {
      const saved = localStorage.getItem('dolphy_academy_cohorts');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 'BAR-2026-K10',
        courseId: 'barista-mastery',
        courseName: 'Barista Thực Chiến Chuyên Nghiệp 2026',
        branchName: 'Dolphy Academy 28 Thảo Điền',
        startDate: '02/11/2026',
        scheduleTime: 'Sáng T2 - T4 - T6 (08:30 - 11:30)',
        totalSessions: 6,
        maxSeats: 6,
        enrolledSeats: 5,
        leadTrainer: 'Trần Nam (SCA Roaster & Q-Grader)',
        trainerPhone: '0903.882.101',
        room: 'Lab 1 - Quầy Bar La Marzocco Linea PB',
        status: 'recruiting'
      },
      {
        id: 'BAR-2026-K11',
        courseId: 'barista-mastery',
        courseName: 'Barista Thực Chiến Chuyên Nghiệp 2026',
        branchName: 'Dolphy Academy 1441 Nguyễn Văn Linh Q7',
        startDate: '08/11/2026',
        scheduleTime: 'Cuối tuần T7 & CN (09:00 - 16:00)',
        totalSessions: 6,
        maxSeats: 6,
        enrolledSeats: 6,
        leadTrainer: 'Lê Hoàng My (Head Trainer Academy)',
        trainerPhone: '0908.441.982',
        room: 'Lab 2 - Quầy Máy Synesso MVP Hydra',
        status: 'starting_soon'
      },
      {
        id: 'LATTE-2026-K08',
        courseId: 'latte-art-sensory',
        courseName: 'Nghệ Thuật Latte Art & Cảm Quan Mùi Vị',
        branchName: 'Dolphy Academy 28 Thảo Điền',
        startDate: '05/11/2026',
        scheduleTime: 'Tối T3 & T5 (18:30 - 21:00)',
        totalSessions: 4,
        maxSeats: 6,
        enrolledSeats: 4,
        leadTrainer: 'Nguyễn Hải Đăng (Top 3 Vietnam Barista Champ)',
        trainerPhone: '0912.773.004',
        room: 'Lab 1 - Quầy Tạo Bọt & Sensory',
        status: 'recruiting'
      },
      {
        id: 'ROAST-2026-K04',
        courseId: 'roasting-cupping-sca',
        courseName: 'Kỹ Thuật Rang Xay & Nếm Thử Cupping SCA',
        branchName: 'Xưởng Rang Dolphy Roastery Thảo Điền',
        startDate: '12/11/2026',
        scheduleTime: 'Cả ngày Thứ Bảy (08:30 - 17:00)',
        totalSessions: 4,
        maxSeats: 4,
        enrolledSeats: 3,
        leadTrainer: 'Nguyễn Hoàng Khánh (Founder & Master Roaster)',
        trainerPhone: '0938.084.985',
        room: 'Roastery Lab - Máy rang Giesen W6A',
        status: 'recruiting'
      },
      {
        id: 'MGT-2026-K03',
        courseId: 'coffee-shop-management',
        courseName: 'Quản Lý Vận Hành Quán Cà Phê Hiệu Quả',
        branchName: 'Trụ sở Dolphy Head Office (Thảo Điền)',
        startDate: '15/11/2026',
        scheduleTime: 'Tối T2 & T4 (19:00 - 21:30)',
        totalSessions: 8,
        maxSeats: 10,
        enrolledSeats: 8,
        leadTrainer: 'Đỗ Minh Quân (Operations Director)',
        trainerPhone: '0909.554.128',
        room: 'Phòng Hội Thảo Quản Trị F&B',
        status: 'recruiting'
      },
      {
        id: 'BAR-2026-K09',
        courseId: 'barista-mastery',
        courseName: 'Barista Thực Chiến Chuyên Nghiệp 2026',
        branchName: 'Dolphy Academy 28 Thảo Điền',
        startDate: '12/10/2026',
        scheduleTime: 'Sáng T2 - T4 - T6 (08:30 - 11:30)',
        totalSessions: 6,
        maxSeats: 6,
        enrolledSeats: 6,
        leadTrainer: 'Trần Nam (Q-Grader)',
        trainerPhone: '0903.882.101',
        room: 'Lab 1 - Quầy Bar La Marzocco Linea PB',
        status: 'in_progress'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('dolphy_academy_cohorts', JSON.stringify(cohorts));
    } catch {}
  }, [cohorts]);

  const handleAddCohort = (newCohort: AcademyCohort) => {
    setCohorts(prev => [newCohort, ...prev]);
    showToast(language === 'vi' ? `Đã khai giảng lớp học ${newCohort.id} thành công!` : `Cohort ${newCohort.id} created!`);
  };

  const updateCohortStatus = (id: string, status: AcademyCohort['status']) => {
    setCohorts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    showToast(language === 'vi' ? 'Đã cập nhật tiến độ lớp học!' : 'Cohort status updated!');
  };

  // Branch Operations state (persisted)
  interface BranchOpStatus {
    isOpen: boolean;
    shiftManager: string;
    managerPhone: string;
    machineName: string;
    machineStatus: 'good' | 'maintenance' | 'need_check';
    grinder: string;
    seatingCapacity: number;
    wifiPass: string;
  }

  const [branchOpMap, setBranchOpMap] = useState<Record<string, BranchOpStatus>>(() => {
    try {
      const saved = localStorage.getItem('dolphy_branch_operations');
      if (saved) return JSON.parse(saved);
    } catch {}
    const defaultMap: Record<string, BranchOpStatus> = {};
    branchesData.forEach((b, idx) => {
      defaultMap[b.id] = {
        isOpen: true,
        shiftManager: idx === 0 ? 'Nguyễn Hải Long' : idx === 1 ? 'Lê Thị Thu Thảo' : 'Trần Minh Quân',
        managerPhone: idx === 0 ? '0908.112.334' : '0938.084.985',
        machineName: idx === 0 ? 'La Marzocco Linea PB 2-Group' : idx === 1 ? 'Synesso MVP Hydra' : 'Nuova Simonelli Aurelia II',
        machineStatus: 'good',
        grinder: 'Mahlkönig EK43 & Mazzer Robur S',
        seatingCapacity: idx === 0 ? 65 : 45,
        wifiPass: 'dolphycoffee2026'
      };
    });
    return defaultMap;
  });

  useEffect(() => {
    try {
      localStorage.setItem('dolphy_branch_operations', JSON.stringify(branchOpMap));
    } catch {}
  }, [branchOpMap]);

  const toggleBranchOpen = (branchId: string) => {
    setBranchOpMap(prev => {
      const current = prev[branchId] || {
        isOpen: true,
        shiftManager: 'Quản lý quầy bar',
        managerPhone: '0938.084.985',
        machineName: 'La Marzocco Linea PB',
        machineStatus: 'good',
        grinder: 'Mahlkönig EK43',
        seatingCapacity: 45,
        wifiPass: 'dolphycoffee2026'
      };
      const updated = { ...current, isOpen: !current.isOpen };
      showToast(language === 'vi' 
        ? `Đã cập nhật trạng thái chi nhánh: ${updated.isOpen ? 'Mở cửa phục vụ' : 'Tạm đóng cửa'}`
        : `Branch status updated: ${updated.isOpen ? 'Open' : 'Closed'}`
      );
      return { ...prev, [branchId]: updated };
    });
  };

  const cycleMachineStatus = (branchId: string) => {
    setBranchOpMap(prev => {
      const current = prev[branchId];
      if (!current) return prev;
      const nextStatus: BranchOpStatus['machineStatus'] = 
        current.machineStatus === 'good' ? 'maintenance' : current.machineStatus === 'maintenance' ? 'need_check' : 'good';
      showToast(language === 'vi' ? 'Đã cập nhật tình trạng thiết bị pha cà phê!' : 'Espresso equipment status updated!');
      return { ...prev, [branchId]: { ...current, machineStatus: nextStatus } };
    });
  };

  // VietQR Live Tester states (in Settings tab)
  const [testAmount, setTestAmount] = useState('500000');
  const [testMemo, setTestMemo] = useState('DOLPHY ACADEMY K10');

  // Compute metrics
  const totalAcademyRevenue = registrations.reduce((sum, r) => sum + r.amount, 0);
  const totalShopRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalRevenue = totalAcademyRevenue + totalShopRevenue;
  const completedOrdersCount = orders.filter(o => o.status === 'completed').length;
  const enrolledStudentsCount = registrations.filter(r => r.status === 'paid_deposit' || r.status === 'enrolled').length;
  const newApplicantsCount = applications.filter(a => a.status === 'new').length;

  // Filtered Students
  const filteredStudents = useMemo(() => {
    return registrations.filter(reg => {
      const matchCourse = studentCourseFilter === 'all' || reg.courseId === studentCourseFilter;
      const matchStatus = studentStatusFilter === 'all' || reg.status === studentStatusFilter;
      const matchSearch = !searchTerm || 
        reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.phone.includes(searchTerm) ||
        (reg.email && reg.email.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCourse && matchStatus && matchSearch;
    });
  }, [registrations, studentCourseFilter, studentStatusFilter, searchTerm]);

  // Filtered Cohorts
  const filteredCohorts = useMemo(() => {
    return cohorts.filter(c => {
      const matchCourse = cohortCourseFilter === 'all' || c.courseId === cohortCourseFilter;
      const matchStatus = cohortStatusFilter === 'all' || c.status === cohortStatusFilter;
      const matchSearch = !searchTerm ||
        c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.leadTrainer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCourse && matchStatus && matchSearch;
    });
  }, [cohorts, cohortCourseFilter, cohortStatusFilter, searchTerm]);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchStatus = orderStatusFilter === 'all' || order.status === orderStatusFilter;
      const matchSearch = !searchTerm ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.phone.includes(searchTerm);
      return matchStatus && matchSearch;
    });
  }, [orders, orderStatusFilter, searchTerm]);

  // Filtered Candidates
  const filteredCandidates = useMemo(() => {
    return applications.filter(app => {
      const matchJob = candidateJobFilter === 'all' || app.jobId === candidateJobFilter;
      const matchStatus = candidateStatusFilter === 'all' || app.status === candidateStatusFilter;
      const matchSearch = !searchTerm ||
        app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.phone.includes(searchTerm) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase());
      return matchJob && matchStatus && matchSearch;
    });
  }, [applications, candidateJobFilter, candidateStatusFilter, searchTerm]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsData.filter(prod => {
      const matchCategory = productCategoryFilter === 'all' || prod.category === productCategoryFilter;
      const matchSearch = !searchTerm ||
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (prod.nameEn && prod.nameEn.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [productCategoryFilter, searchTerm]);

  // Complete Sitemap Registry
  const baseUrl = window.location.origin;

  const sitemapRegistry = useMemo(() => {
    const list: Array<{
      category: 'main' | 'article' | 'product' | 'course' | 'job' | 'branch' | 'external';
      categoryLabelVi: string;
      categoryLabelEn: string;
      titleVi: string;
      titleEn: string;
      path: string;
      fullUrl: string;
      tag?: string;
    }> = [];

    // Main Pages
    const mainPages = [
      { path: '/', titleVi: 'Trang Chủ', titleEn: 'Homepage', tag: 'Core' },
      { path: '/about', titleVi: 'Câu Chuyện Dolphy (Về chúng tôi & Lịch sử 2013 - 2026)', titleEn: "Dolphy's Story & Heritage", tag: 'Brand' },
      { path: '/shop', titleVi: 'Cửa Hàng Cà Phê Mộc, Hộp Quà & Đồ Uống Fresh', titleEn: 'Shop Beans, Gifts & Drinks', tag: 'E-commerce' },
      { path: '/academy', titleVi: 'Dolphy Academy - Học Viện Đào Tạo Barista Thực Chiến 2026', titleEn: 'Barista Academy & Courses', tag: 'Education' },
      { path: '/branches', titleVi: 'Hệ Thống 10 Chi Nhánh (Thảo Điền, Q7, Bình Thạnh, Q3)', titleEn: 'Store Network & Locations', tag: 'Stores' },
      { path: '/knowledge', titleVi: 'Cẩm Nang Cà Phê & Tin Tức Sài Gòn', titleEn: 'Coffee Knowledge Hub & News', tag: 'Blog' },
      { path: '/careers', titleVi: 'Cơ Hội Nghề Nghiệp & Gia Đình Barista Dolphiers', titleEn: 'Careers & Team Recruitment', tag: 'HR' },
      { path: '/policies', titleVi: 'Chính Sách Đổi Trả, Giao Nhận & Bảo Mật Khách Hàng', titleEn: 'Policies & Customer Service', tag: 'Legal' },
      { path: '/admin', titleVi: 'Cổng Quản Trị Hệ Thống Dolphy Hub (Admin Portal)', titleEn: 'Dolphy Hub Admin Portal', tag: 'Admin' }
    ];

    mainPages.forEach(p => {
      list.push({
        category: 'main',
        categoryLabelVi: 'Trang Chính',
        categoryLabelEn: 'Main Pages',
        titleVi: p.titleVi,
        titleEn: p.titleEn,
        path: p.path,
        fullUrl: `${baseUrl}${p.path}`,
        tag: p.tag
      });
    });

    // 16 Articles
    articlesData.forEach((art) => {
      const artPath = `/knowledge#${art.slug}`;
      list.push({
        category: 'article',
        categoryLabelVi: 'Bài Viết Chuyên Sâu',
        categoryLabelEn: 'Knowledge Articles',
        titleVi: art.title,
        titleEn: art.titleEn || art.title,
        path: artPath,
        fullUrl: `${baseUrl}${artPath}`,
        tag: art.category
      });
    });

    // 27 Products
    productsData.forEach((prod) => {
      const prodPath = `/shop?category=${prod.category}&id=${prod.id}`;
      list.push({
        category: 'product',
        categoryLabelVi: 'Sản Phẩm Cửa Hàng',
        categoryLabelEn: 'Catalog Products',
        titleVi: prod.name,
        titleEn: prod.nameEn || prod.name,
        path: prodPath,
        fullUrl: `${baseUrl}${prodPath}`,
        tag: `${prod.price.toLocaleString('vi-VN')}₫`
      });
    });

    // 4 Academy Courses
    coursesData.forEach((course) => {
      const cPath = `/academy#${course.id}`;
      list.push({
        category: 'course',
        categoryLabelVi: 'Khóa Học Academy',
        categoryLabelEn: 'Academy Courses',
        titleVi: course.title,
        titleEn: course.subtitle,
        path: cPath,
        fullUrl: `${baseUrl}${cPath}`,
        tag: `${course.discountPrice.toLocaleString('vi-VN')}₫`
      });
    });

    // 6 Careers Jobs
    jobsData.forEach((job) => {
      const jPath = `/careers#${job.id}`;
      list.push({
        category: 'job',
        categoryLabelVi: 'Vị Trí Tuyển Dụng',
        categoryLabelEn: 'Careers Positions',
        titleVi: job.title,
        titleEn: job.titleEn || job.title,
        path: jPath,
        fullUrl: `${baseUrl}${jPath}`,
        tag: job.salary
      });
    });

    // 12 Store Branches
    branchesData.forEach((branch) => {
      const bPath = `/branches#${branch.id}`;
      list.push({
        category: 'branch',
        categoryLabelVi: 'Chi Nhánh Cửa Hàng',
        categoryLabelEn: 'Store Branches',
        titleVi: branch.name,
        titleEn: branch.address,
        path: bPath,
        fullUrl: `${baseUrl}${bPath}`,
        tag: branch.area
      });
    });

    // External Channels
    list.push({
      category: 'external',
      categoryLabelVi: 'Ngoại Sàn & Kênh Mạng Xã Hội',
      categoryLabelEn: 'External & Socials',
      titleVi: 'Kênh Đặt Giao Hàng CukCuk Trực Tuyến',
      titleEn: 'CukCuk Online Delivery Portal',
      path: brandInfo.orderOnlineUrl,
      fullUrl: brandInfo.orderOnlineUrl,
      tag: 'CukCuk POS'
    });
    list.push({
      category: 'external',
      categoryLabelVi: 'Ngoại Sàn & Kênh Mạng Xã Hội',
      categoryLabelEn: 'External & Socials',
      titleVi: 'Facebook Fanpage Chính Thức Dolphy Café',
      titleEn: 'Dolphy Official Facebook Fanpage',
      path: brandInfo.facebook,
      fullUrl: brandInfo.facebook,
      tag: 'Meta 50k+'
    });
    list.push({
      category: 'external',
      categoryLabelVi: 'Ngoại Sàn & Kênh Mạng Xã Hội',
      categoryLabelEn: 'External & Socials',
      titleVi: 'Instagram Official @dolphycafe',
      titleEn: 'Dolphy Official Instagram',
      path: brandInfo.instagram,
      fullUrl: brandInfo.instagram,
      tag: 'Visual'
    });
    list.push({
      category: 'external',
      categoryLabelVi: 'Ngoại Sàn & Kênh Mạng Xã Hội',
      categoryLabelEn: 'External & Socials',
      titleVi: 'TikTok Channel @_.dolphycafe._',
      titleEn: 'Dolphy Official TikTok Channel',
      path: brandInfo.tiktok,
      fullUrl: brandInfo.tiktok,
      tag: 'Short Video'
    });
    list.push({
      category: 'external',
      categoryLabelVi: 'Ngoại Sàn & Kênh Mạng Xã Hội',
      categoryLabelEn: 'External & Socials',
      titleVi: 'Google Maps Định Vị Toàn Hệ Thống 10 Quán',
      titleEn: 'Google Maps 10-Branch Network',
      path: brandInfo.mapEmbedUrl,
      fullUrl: brandInfo.mapEmbedUrl,
      tag: 'Google Map'
    });

    return list;
  }, [baseUrl]);

  // Filtered Sitemap links
  const filteredSitemapLinks = useMemo(() => {
    return sitemapRegistry.filter(item => {
      const matchCat = sitemapCategoryFilter === 'all' || item.category === sitemapCategoryFilter;
      const matchQuery = !sitemapSearch ||
        item.titleVi.toLowerCase().includes(sitemapSearch.toLowerCase()) ||
        item.titleEn.toLowerCase().includes(sitemapSearch.toLowerCase()) ||
        item.path.toLowerCase().includes(sitemapSearch.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(sitemapSearch.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [sitemapRegistry, sitemapCategoryFilter, sitemapSearch]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(language === 'vi' ? `Đã sao chép: ${label}` : `Copied: ${label}`);
  };

  const exportSitemapAsJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(sitemapRegistry, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `dolphy_complete_sitemap_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    showToast(language === 'vi' ? 'Đã xuất file Sitemap JSON thành công!' : 'Sitemap JSON exported successfully!');
  };

  const exportStudentsCsv = () => {
    const headers = ['ID', 'Họ Và Tên', 'Điện Thoại', 'Email', 'Khóa Học', 'Chi Nhánh', 'Lịch Học', 'Số Tiền', 'Trạng Thái', 'Thời Gian'];
    const rows = registrations.map(r => [
      r.id,
      `"${r.fullName}"`,
      r.phone,
      r.email || '',
      `"${r.courseTitle}"`,
      `"${r.preferredLocation || ''}"`,
      `"${r.preferredSchedule || ''}"`,
      r.amount,
      r.status,
      r.createdAt
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers, ...rows].map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dolphy_academy_students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(language === 'vi' ? 'Đã xuất danh sách học viên CSV!' : 'Students CSV exported!');
  };

  // Comprehensive Multi-Table Financial Report
  const exportFinancialReportCsv = () => {
    const lines: string[] = [];
    lines.push('BÁO CÁO DOANH THU & GIAO DỊCH DOLPHY CAFÉ & ACADEMY 2026');
    lines.push(`Thời gian xuất file: ${new Date().toLocaleString('vi-VN')}`);
    lines.push('');
    lines.push('--- PHẦN 1: HỌC VIỆN DOLPHY ACADEMY ---');
    lines.push(['Mã Học Viên', 'Họ Và Tên', 'Số Điện Thoại', 'Khóa Học', 'Cơ Sở', 'Học Phí (VNĐ)', 'Trạng Thái', 'Thời Gian'].join(','));
    registrations.forEach(r => {
      lines.push([
        r.id,
        `"${r.fullName}"`,
        r.phone,
        `"${r.courseTitle}"`,
        `"${r.preferredLocation || 'Thảo Điền'}"`,
        r.amount,
        r.status,
        r.createdAt
      ].join(','));
    });
    lines.push('');
    lines.push('--- PHẦN 2: CỬA HÀNG CÀ PHÊ MỘC & ĐỒ UỐNG ---');
    lines.push(['Mã Đơn', 'Khách Hàng', 'Số Điện Thoại', 'Địa Chỉ', 'Số Món', 'Tổng Tiền (VNĐ)', 'Phương Thức', 'Trạng Thái', 'Thời Gian'].join(','));
    orders.forEach(o => {
      lines.push([
        o.id,
        `"${o.customerName}"`,
        o.phone,
        `"${o.address.replace(/"/g, '""')}"`,
        o.items.length,
        o.totalAmount,
        o.paymentMethod,
        o.status,
        o.createdAt
      ].join(','));
    });
    lines.push('');
    lines.push('--- PHẦN 3: TỔNG KẾT TÀI CHÍNH ---');
    lines.push(`Tổng doanh thu Academy,${totalAcademyRevenue} VNĐ`);
    lines.push(`Tổng doanh thu Cửa hàng,${totalShopRevenue} VNĐ`);
    lines.push(`TỔNG DOANH THU HỆ THỐNG,${totalRevenue} VNĐ`);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + lines.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dolphy_financial_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(language === 'vi' ? 'Đã xuất Báo Cáo Tài Chính Tổng Hợp (Excel/CSV)!' : 'Financial report CSV exported successfully!');
  };

  // Full Database Backup
  const backupFullDatabase = () => {
    const backupData = {
      timestamp: new Date().toISOString(),
      system: 'Dolphy Hub Admin Portal 2026',
      registrations,
      orders,
      applications,
      cohorts,
      branchOperations: branchOpMap,
      productStockMap
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `dolphy_full_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    showToast(language === 'vi' ? 'Đã sao lưu toàn bộ dữ liệu hệ thống (JSON)!' : 'Full database backup downloaded!');
  };

  const resetDemoData = () => {
    if (confirm(language === 'vi' ? 'Bạn có chắc chắn muốn khôi phục dữ liệu mẫu mặc định ban đầu?' : 'Reset all data to default demo state?')) {
      localStorage.removeItem('dolphy_academy_cohorts');
      localStorage.removeItem('dolphy_branch_operations');
      localStorage.removeItem('dolphy_orders');
      localStorage.removeItem('dolphy_registrations');
      localStorage.removeItem('dolphy_applications');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b1329] text-[#1e293b] dark:text-[#f8fafc] flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#0b1626] border-b border-slate-800 text-white shadow-lg">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center border-2 border-[#2076bd] shadow-sm">
                <img src="/favicon.png" alt="Dolphy" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-oswald text-base font-bold tracking-wider uppercase text-white group-hover:text-[#3ba0e6] transition-colors leading-none">
                  DOLPHY HUB ADMIN
                </span>
                <span className="text-[10px] text-[#FAEA28] font-semibold tracking-widest uppercase">
                  Operation & F&B Suite 2026
                </span>
              </div>
            </Link>

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Synced</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-oswald font-semibold uppercase text-gray-200 border border-slate-700 transition-colors flex items-center gap-1.5"
              title="Đổi ngôn ngữ / Change Language"
            >
              <Globe size={13} className="text-[#FAEA28]" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-200 border border-slate-700 transition-colors"
              title={theme === 'dark' ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối'}
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-blue-300" />}
            </button>

            {/* Exit Admin & Open Website Link */}
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-all shadow-sm flex items-center gap-1.5"
            >
              <ArrowLeft size={13} />
              <span className="hidden sm:inline">{language === 'vi' ? 'Về Website Chính' : 'Back to Website'}</span>
              <span className="sm:hidden">{language === 'vi' ? 'Web' : 'Site'}</span>
            </Link>

            {/* Manager Avatar Badge */}
            <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2076bd] to-[#FAEA28] text-slate-950 font-bold text-xs flex items-center justify-center shadow">
                AD
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="font-semibold text-gray-200">Quản Trị Viên</div>
                <div className="text-[10px] text-gray-400">Dolphy Headquarters</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Admin Content Body */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white dark:bg-[#131d36] rounded-2xl p-2 border border-gray-200 dark:border-slate-800 shadow-xs flex items-center gap-1 overflow-x-auto scrollbar-none">
          
          <button
            onClick={() => { setActiveTab('overview'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'overview'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard size={16} />
            <span>{language === 'vi' ? 'Tổng Quan Kinh Doanh' : 'Overview & KPIs'}</span>
          </button>

          <button
            onClick={() => { setActiveTab('students'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'students'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <GraduationCap size={16} />
            <span>{language === 'vi' ? 'Học Viện Barista' : 'Academy CRM'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {registrations.length}
            </span>
          </button>

          {/* TAB: SCHEDULE & COHORTS */}
          <button
            onClick={() => { setActiveTab('schedule'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'schedule'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Calendar size={16} />
            <span>{language === 'vi' ? 'Lớp Học & Khai Giảng' : 'Class Schedules'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {cohorts.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('orders'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'orders'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <ShoppingBag size={16} />
            <span>{language === 'vi' ? 'Đơn Hàng Cửa Hàng' : 'Orders & Delivery'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {orders.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('candidates'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'candidates'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Briefcase size={16} />
            <span>{language === 'vi' ? 'Tuyển Dụng Nhân Sự' : 'HR & Baristas'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {applications.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('products'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'products'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Coffee size={16} />
            <span>{language === 'vi' ? 'Sản Phẩm & Kho Hàng' : 'Menu & Catalog'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {productsData.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('branches'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'branches'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Store size={16} />
            <span>{language === 'vi' ? 'Vận Hành 10 Quán & Máy Móc' : 'Store Network & Bar Ops'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {branchesData.length}
            </span>
          </button>

          {/* TAB: SETTINGS & VIETQR */}
          <button
            onClick={() => { setActiveTab('settings'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'settings'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <Settings size={16} />
            <span>{language === 'vi' ? 'Cấu Hình & VietQR' : 'Settings & VietQR'}</span>
          </button>

          <button
            onClick={() => { setActiveTab('funnel'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'funnel'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            <TrendingUp size={16} />
            <span>{language === 'vi' ? 'Chiến Lược Phễu' : 'Funnel'}</span>
          </button>

          <button
            onClick={() => { setActiveTab('sitemap'); setSearchTerm(''); }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'sitemap'
                ? 'bg-[#2076bd] text-white shadow-md'
                : 'text-[#2076bd] dark:text-[#3ba0e6] hover:bg-blue-50 dark:hover:bg-slate-800 border border-[#2076bd]/30'
            }`}
          >
            <LinkIcon size={16} />
            <span>{language === 'vi' ? 'Sitemap & URL' : 'Sitemap'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
              {sitemapRegistry.length}
            </span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: OVERVIEW & KPIS                                   */}
        {/* ======================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Top Toolbar: Timeframe & Financial Export */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-[#131d36] p-4 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                  {language === 'vi' ? 'Kỳ Báo Cáo:' : 'Period:'}
                </span>
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-900 p-1 rounded-xl">
                  {[
                    { id: 'all', labelVi: 'Tất Cả', labelEn: 'All Time' },
                    { id: 'month', labelVi: 'Tháng Này', labelEn: 'This Month' },
                    { id: 'week', labelVi: 'Tuần Này', labelEn: 'This Week' },
                    { id: 'today', labelVi: 'Hôm Nay', labelEn: 'Today' }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => setOverviewTimeframe(p.id as any)}
                      className={`px-3 py-1 rounded-lg text-xs font-oswald uppercase tracking-wider font-bold transition-all ${
                        overviewTimeframe === p.id
                          ? 'bg-[#2076bd] text-white shadow-xs'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {language === 'vi' ? p.labelVi : p.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={exportFinancialReportCsv}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <FileSpreadsheet size={14} />
                  <span>{language === 'vi' ? 'Xuất Báo Cáo Tài Chính (CSV)' : 'Financial Ledger CSV'}</span>
                </button>
              </div>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold uppercase tracking-wider">{language === 'vi' ? 'Tổng Doanh Thu Ghi Nhận' : 'Total Revenue'}</span>
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                    <DollarSign size={18} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  {totalRevenue.toLocaleString('vi-VN')} ₫
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Academy: {totalAcademyRevenue.toLocaleString('vi-VN')} ₫</span>
                  <span>•</span>
                  <span>Shop: {totalShopRevenue.toLocaleString('vi-VN')} ₫</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold uppercase tracking-wider">{language === 'vi' ? 'Học Viên Đăng Ký' : 'Student Registrations'}</span>
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2076bd] dark:text-[#3ba0e6]">
                    <GraduationCap size={18} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
                  {registrations.length} {language === 'vi' ? 'Học Viên' : 'Students'}
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  {enrolledStudentsCount} {language === 'vi' ? 'hồ sơ đã hoàn tất đặt cọc / nộp phí' : 'enrolled / deposited'}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold uppercase tracking-wider">{language === 'vi' ? 'Đơn Đặt Hàng Web' : 'E-Shop Orders'}</span>
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                    <ShoppingBag size={18} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">
                  {orders.length} {language === 'vi' ? 'Đơn Hàng' : 'Orders'}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400">
                  {completedOrdersCount} {language === 'vi' ? 'đơn giao thành công' : 'delivered successfully'}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold uppercase tracking-wider">{language === 'vi' ? 'Hồ Sơ Tuyển Dụng' : 'Job Applications'}</span>
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                    <Briefcase size={18} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">
                  {applications.length} {language === 'vi' ? 'Ứng Viên' : 'Applicants'}
                </div>
                <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                  {newApplicantsCount} {language === 'vi' ? 'hồ sơ mới cần gọi phỏng vấn' : 'new for review'}
                </div>
              </div>

            </div>

            {/* Quick Action Dock */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/10 via-slate-900/5 to-amber-900/10 dark:from-blue-950/30 dark:to-slate-900/40 border border-[#2076bd]/20 shadow-xs">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-oswald text-sm font-bold uppercase text-gray-900 dark:text-white">
                    {language === 'vi' ? '⚡ Phím Tắt Thao Tác Nhanh Quản Trị Viên' : '⚡ Quick Operational Actions'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'vi' ? 'Ghi nhận học viên tại quầy, tạo đơn hàng qua hotline hoặc xếp lớp học mới ngay lập tức' : 'Directly record walk-in students, phone orders, or schedule batches'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setIsAddStudentOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-[#2076bd] hover:bg-blue-600 text-white font-oswald text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Plus size={13} />
                    <span>{language === 'vi' ? '+ Ghi Danh Học Viên' : '+ Add Student'}</span>
                  </button>

                  <button
                    onClick={() => setIsAddOrderOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-oswald text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Plus size={13} />
                    <span>{language === 'vi' ? '+ Đơn Hàng Mới' : '+ New Order'}</span>
                  </button>

                  <button
                    onClick={() => setIsAddCohortOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-oswald text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Plus size={13} />
                    <span>{language === 'vi' ? '+ Khai Giảng Lớp' : '+ Open Cohort'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    className="px-3 py-1.5 rounded-xl border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 font-oswald text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <QrCode size={13} />
                    <span>{language === 'vi' ? 'VietQR & Cấu Hình' : 'VietQR Config'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Strategic KPI Targets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-oswald uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">
                    {language === 'vi' ? 'Kiểm Soát Chi Phí F&B Cost' : 'F&B Food & Beverage Cost'}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">26.4% (&lt; 28% Target)</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {language === 'vi'
                    ? 'Định lượng cà phê hạt mộc và sữa tươi Dalat Milk đạt hiệu suất chiết xuất tối ưu tại tất cả 10 quầy bar.'
                    : 'Optimal extraction recipes applied consistently across all 10 store espresso machines.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-oswald uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">
                    {language === 'vi' ? 'Chỉ Số Hài Lòng Khách Hàng (CSAT)' : 'Customer Satisfaction (CSAT)'}
                  </span>
                  <span className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">4.9 / 5.0 (98% Positive)</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#2076bd] h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {language === 'vi'
                    ? 'Đánh giá dựa trên hơn 1.200 phản hồi tại Google Maps và trải nghiệm khách quốc tế tại cụm Thảo Điền.'
                    : 'Aggregated from 1,200+ verified customer reviews across Google Maps and in-store feedback.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-oswald uppercase tracking-wider font-bold text-gray-600 dark:text-gray-400">
                    {language === 'vi' ? 'Tỷ Lệ Giữ Chân Học Viên Academy' : 'Academy Graduate Retention'}
                  </span>
                  <span className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">92% Có Việc Ngay</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#2076bd] h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {language === 'vi'
                    ? 'Học viên tốt nghiệp khóa Thực Chiến được tuyển dụng thẳng vào 10 chi nhánh Dolphy hoặc đối tác F&B cao cấp.'
                    : 'Direct employment placement into Dolphy network and premium specialty partner cafes.'}
                </p>
              </div>
            </div>

            {/* Recent Live Activity Stream */}
            <div className="bg-white dark:bg-[#131d36] rounded-2xl p-6 border border-gray-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-oswald text-base font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                    {language === 'vi' ? 'Nhật Ký Tương Tác & Giao Dịch Gần Nhất' : 'Recent Activity Stream'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'vi' ? 'Nhấp vào từng giao dịch để xem chi tiết đầy đủ' : 'Click any transaction to inspect full details'}
                  </p>
                </div>
                <span className="text-xs font-oswald text-[#2076bd] dark:text-[#3ba0e6] font-semibold uppercase">
                  {registrations.length + orders.length + applications.length} {language === 'vi' ? 'tác vụ đã ghi nhận' : 'events recorded'}
                </span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-slate-800">
                {registrations.slice(0, 3).map(reg => (
                  <div
                    key={reg.id}
                    onClick={() => setSelectedRecordForDetail({ type: 'student', data: reg })}
                    className="py-3 flex items-center justify-between gap-4 text-xs hover:bg-gray-50 dark:hover:bg-slate-800/40 p-2 rounded-xl cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6] flex items-center justify-center font-bold">
                        <GraduationCap size={15} />
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {reg.fullName} {language === 'vi' ? 'đăng ký' : 'registered for'} <span className="text-[#2076bd] dark:text-[#3ba0e6]">{reg.courseTitle}</span>
                        </div>
                        <div className="text-gray-400 dark:text-gray-500 text-[11px]">
                          {reg.phone} • {reg.preferredLocation || 'Thảo Điền'} • {reg.createdAt}
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      +{reg.amount.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                ))}

                {orders.slice(0, 3).map(order => (
                  <div
                    key={order.id}
                    onClick={() => setSelectedRecordForDetail({ type: 'order', data: order })}
                    className="py-3 flex items-center justify-between gap-4 text-xs hover:bg-gray-50 dark:hover:bg-slate-800/40 p-2 rounded-xl cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] flex items-center justify-center font-bold">
                        <ShoppingBag size={15} />
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {order.customerName} {language === 'vi' ? 'đặt' : 'ordered'} {order.items.length} {language === 'vi' ? 'món cà phê' : 'items'}
                        </div>
                        <div className="text-gray-400 dark:text-gray-500 text-[11px]">
                          Mã: {order.id} • {order.address} • {order.createdAt}
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-[#2076bd] dark:text-[#3ba0e6] font-mono">
                      +{order.totalAmount.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: STUDENTS CRM                                      */}
        {/* ======================================================== */}
        {activeTab === 'students' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Quản Lý Học Viên Dolphy Academy' : 'Dolphy Academy Student CRM'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Theo dõi danh sách học viên đăng ký các khóa Barista, Quản lý F&B và Workshop' : 'Track registrations, shifts, tuition status and graduation certificates'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsAddStudentOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2076bd] hover:bg-blue-600 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Plus size={13} />
                  <span>{language === 'vi' ? '+ Ghi Danh Mới' : '+ New Student'}</span>
                </button>

                <button
                  onClick={exportStudentsCsv}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Download size={13} />
                  <span>{language === 'vi' ? 'Xuất File CSV' : 'Export CSV'}</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'vi' ? 'Tìm theo tên, SĐT, email...' : 'Search student...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                />
              </div>

              <select
                value={studentCourseFilter}
                onChange={(e) => setStudentCourseFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả các khóa học' : 'All Courses'}</option>
                {coursesData.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>

              <select
                value={studentStatusFilter}
                onChange={(e) => setStudentStatusFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả trạng thái' : 'All Statuses'}</option>
                <option value="new">{language === 'vi' ? 'Mới đăng ký' : 'New'}</option>
                <option value="contacted">{language === 'vi' ? 'Đã liên hệ tư vấn' : 'Contacted'}</option>
                <option value="paid_deposit">{language === 'vi' ? 'Đã đặt cọc' : 'Deposit Paid'}</option>
                <option value="enrolled">{language === 'vi' ? 'Đã hoàn tất học phí' : 'Fully Enrolled'}</option>
              </select>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">ID</th>
                    <th className="p-3.5">{language === 'vi' ? 'Học Viên' : 'Student'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Liên Hệ' : 'Contact'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Khóa Học' : 'Course'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Địa Điểm & Ca Học' : 'Location & Shift'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Học Phí' : 'Tuition'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                    <th className="p-3.5 text-right">{language === 'vi' ? 'Thao Tác' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-gray-400">
                        {language === 'vi' ? 'Không có hồ sơ học viên phù hợp.' : 'No matching student records.'}
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'student', data: reg })}
                            className="hover:underline"
                          >
                            {reg.id}
                          </button>
                        </td>
                        <td className="p-3.5 font-bold text-gray-900 dark:text-white">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'student', data: reg })}
                            className="hover:text-[#2076bd] text-left"
                          >
                            {reg.fullName}
                          </button>
                        </td>
                        <td className="p-3.5">
                          <div className="font-medium text-gray-800 dark:text-gray-200">{reg.phone}</div>
                          <div className="text-gray-400 text-[11px]">{reg.email || 'N/A'}</div>
                        </td>
                        <td className="p-3.5 max-w-xs font-medium text-gray-800 dark:text-gray-200">{reg.courseTitle}</td>
                        <td className="p-3.5 text-gray-600 dark:text-gray-300">
                          <div>{reg.preferredLocation || 'Dolphy Thảo Điền (28 Thảo Điền)'}</div>
                          <div className="text-[10px] text-gray-400">{reg.preferredSchedule || 'Lớp Sáng T2 - T4 - T6'}</div>
                        </td>
                        <td className="p-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {reg.amount.toLocaleString('vi-VN')}₫
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                            reg.status === 'enrolled'
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : reg.status === 'paid_deposit'
                              ? 'bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]'
                              : reg.status === 'contacted'
                              ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                          }`}>
                            {reg.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <select
                              value={reg.status}
                              onChange={(e) => {
                                updateRegistrationStatus(reg.id, e.target.value as any);
                                showToast(language === 'vi' ? 'Đã cập nhật trạng thái học viên!' : 'Student status updated!');
                              }}
                              className="px-2 py-1 text-[11px] rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:outline-none"
                            >
                              <option value="new">Mới</option>
                              <option value="contacted">Đã tư vấn</option>
                              <option value="paid_deposit">Đã cọc</option>
                              <option value="enrolled">Đã nộp đủ</option>
                            </select>

                            <button
                              onClick={() => setSelectedRecordForDetail({ type: 'student', data: reg })}
                              className="p-1 rounded text-gray-400 hover:text-[#2076bd]"
                              title="Xem chi tiết"
                            >
                              <Eye size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: SCHEDULE & COHORTS                                */}
        {/* ======================================================== */}
        {activeTab === 'schedule' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Lịch Khai Giảng & Quản Lý Lớp Học Academy' : 'Academy Cohorts & Batch Schedules'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Theo dõi sĩ số tối đa 6 HV/lớp thực hành, giảng viên phụ trách và tình trạng mở lớp' : 'Manage batch occupancy (max 6 students), lead trainers, and lab schedules'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsAddCohortOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2076bd] hover:bg-blue-600 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Plus size={13} />
                  <span>{language === 'vi' ? '+ Khai Giảng Lớp Mới' : '+ Open New Batch'}</span>
                </button>

                <button
                  onClick={() => setIsAddStudentOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Plus size={13} />
                  <span>{language === 'vi' ? '+ Ghi Danh Vào Lớp' : '+ Add Student'}</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'vi' ? 'Tìm mã lớp, tên khóa học, giảng viên...' : 'Search cohort, course, trainer...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                />
              </div>

              <select
                value={cohortCourseFilter}
                onChange={(e) => setCohortCourseFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả các khóa' : 'All Courses'}</option>
                {coursesData.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>

              <select
                value={cohortStatusFilter}
                onChange={(e) => setCohortStatusFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả trạng thái lớp' : 'All Cohort Statuses'}</option>
                <option value="recruiting">{language === 'vi' ? 'Đang tuyển sinh' : 'Recruiting'}</option>
                <option value="starting_soon">{language === 'vi' ? 'Sắp khai giảng' : 'Starting Soon'}</option>
                <option value="in_progress">{language === 'vi' ? 'Đang diễn ra' : 'In Progress'}</option>
                <option value="completed">{language === 'vi' ? 'Đã hoàn thành' : 'Completed'}</option>
              </select>
            </div>

            {/* Cohorts Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCohorts.map(cohort => {
                const percentFull = Math.min(100, Math.round((cohort.enrolledSeats / cohort.maxSeats) * 100));
                const isFull = cohort.enrolledSeats >= cohort.maxSeats;

                return (
                  <div
                    key={cohort.id}
                    className="p-5 rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 space-y-3.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-[#2076bd] dark:text-[#3ba0e6]">
                          {cohort.id}
                        </span>
                        
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                          cohort.status === 'recruiting'
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                            : cohort.status === 'starting_soon'
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                            : cohort.status === 'in_progress'
                            ? 'bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]'
                            : 'bg-gray-100 dark:bg-slate-800 text-gray-500'
                        }`}>
                          {cohort.status === 'recruiting' ? 'Tuyển sinh' : cohort.status === 'starting_soon' ? 'Sắp học' : cohort.status === 'in_progress' ? 'Đang học' : 'Đã tốt nghiệp'}
                        </span>
                      </div>

                      <h4 className="font-oswald text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {cohort.courseName}
                      </h4>

                      <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#2076bd] shrink-0" />
                          <span className="line-clamp-1">{cohort.branchName}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-amber-500 shrink-0" />
                          <span>Khai giảng: <strong>{cohort.startDate}</strong> ({cohort.totalSessions} buổi)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-gray-400 shrink-0" />
                          <span>{cohort.scheduleTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                          <Award size={13} className="text-purple-500 shrink-0" />
                          <span>HLV: {cohort.leadTrainer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Seat Occupancy Meter */}
                    <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-600 dark:text-gray-400">
                          {language === 'vi' ? 'Sĩ Số Đã Đăng Ký:' : 'Enrolled Seats:'}
                        </span>
                        <span className={`font-bold font-mono ${isFull ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                          {cohort.enrolledSeats} / {cohort.maxSeats} {isFull ? '(Hết chỗ)' : `(Còn ${cohort.maxSeats - cohort.enrolledSeats} chỗ)`}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            isFull ? 'bg-red-500' : percentFull > 70 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${percentFull}%` }}
                        ></div>
                      </div>

                      {/* Status Selector */}
                      <div className="pt-2 flex items-center justify-between gap-2">
                        <select
                          value={cohort.status}
                          onChange={(e) => updateCohortStatus(cohort.id, e.target.value as any)}
                          className="px-2 py-1 text-[11px] rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:outline-none"
                        >
                          <option value="recruiting">Tuyển sinh</option>
                          <option value="starting_soon">Sắp khai giảng</option>
                          <option value="in_progress">Đang học</option>
                          <option value="completed">Đã tốt nghiệp</option>
                        </select>

                        <button
                          onClick={() => setIsAddStudentOpen(true)}
                          className="px-2.5 py-1 rounded bg-[#2076bd]/10 hover:bg-[#2076bd] text-[#2076bd] hover:text-white font-oswald text-[11px] uppercase font-bold transition-colors"
                        >
                          + Ghi danh
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: ORDERS & DELIVERY                                 */}
        {/* ======================================================== */}
        {activeTab === 'orders' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Đơn Đặt Hàng & Giao Nhận Cà Phê Mộc' : 'Store Orders & Delivery Fulfillment'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Quản lý đơn hàng đặt từ Cửa hàng Dolphy online (van 1 chiều, combo, bánh tươi)' : 'Process customer coffee orders, delivery addresses and fulfillment'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsAddOrderOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2076bd] hover:bg-blue-600 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Plus size={13} />
                  <span>{language === 'vi' ? '+ Tạo Đơn Hàng Mới' : '+ New Order'}</span>
                </button>

                <select
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                >
                  <option value="all">{language === 'vi' ? 'Tất cả trạng thái đơn' : 'All Order Statuses'}</option>
                  <option value="pending">{language === 'vi' ? 'Mới nhận' : 'Pending'}</option>
                  <option value="confirmed">{language === 'vi' ? 'Đã xác nhận' : 'Confirmed'}</option>
                  <option value="shipping">{language === 'vi' ? 'Đang giao hàng' : 'Shipping'}</option>
                  <option value="completed">{language === 'vi' ? 'Đã hoàn thành' : 'Completed'}</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">Mã Đơn</th>
                    <th className="p-3.5">{language === 'vi' ? 'Khách Hàng' : 'Customer'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Địa Chỉ Nhận Hàng' : 'Shipping Address'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Chi Tiết Sản Phẩm' : 'Items & Grind'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Tổng Tiền' : 'Total'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                    <th className="p-3.5 text-right">{language === 'vi' ? 'Cập Nhật' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-gray-400">
                        {language === 'vi' ? 'Chưa có đơn hàng nào.' : 'No orders recorded.'}
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'order', data: order })}
                            className="hover:underline"
                          >
                            {order.id}
                          </button>
                        </td>
                        <td className="p-3.5">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'order', data: order })}
                            className="font-bold text-gray-900 dark:text-white hover:text-[#2076bd] text-left block"
                          >
                            {order.customerName}
                          </button>
                          <div className="text-[11px] text-gray-500">{order.phone}</div>
                        </td>
                        <td className="p-3.5 max-w-xs text-gray-600 dark:text-gray-300">
                          <div>{order.address}</div>
                          {order.note && <div className="text-[10px] text-amber-600 dark:text-amber-400 italic">"{order.note}"</div>}
                        </td>
                        <td className="p-3.5 max-w-sm">
                          <div className="space-y-1">
                            {order.items.map((it, idx) => (
                              <div key={idx} className="text-[11px] text-gray-700 dark:text-gray-200">
                                • {it.product.name} <span className="font-semibold text-[#2076bd]">x{it.quantity}</span>
                                {it.grindOption && <span className="text-[10px] text-gray-400"> ({it.grindOption})</span>}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                          {order.totalAmount.toLocaleString('vi-VN')}₫
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                            order.status === 'completed'
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : order.status === 'shipping'
                              ? 'bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]'
                              : order.status === 'confirmed'
                              ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <select
                              value={order.status}
                              onChange={(e) => {
                                updateOrderStatus(order.id, e.target.value as Order['status']);
                                showToast(language === 'vi' ? 'Đã cập nhật trạng thái đơn!' : 'Order status updated!');
                              }}
                              className="px-2 py-1 text-[11px] rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:outline-none"
                            >
                              <option value="pending">Mới nhận</option>
                              <option value="confirmed">Đã duyệt</option>
                              <option value="shipping">Đang giao</option>
                              <option value="completed">Hoàn tất</option>
                            </select>

                            <button
                              onClick={() => setSelectedRecordForDetail({ type: 'order', data: order })}
                              className="p-1 rounded text-gray-400 hover:text-[#2076bd]"
                              title="Xem chi tiết"
                            >
                              <Eye size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: HR & BARISTAS RECRUITMENT                         */}
        {/* ======================================================== */}
        {activeTab === 'candidates' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Quản Lý Hồ Sơ Ứng Tuyển Barista Dolphiers' : 'Barista & Staff Recruitment Portal'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Phê duyệt CV, đặt lịch phỏng vấn và sắp xếp ca làm việc tại 10 chi nhánh' : 'Review applicant resumes, schedule interviews, and assign store branches'}
                </p>
              </div>

              <select
                value={candidateJobFilter}
                onChange={(e) => setCandidateJobFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả vị trí tuyển dụng' : 'All Positions'}</option>
                {jobsData.map(j => (
                  <option key={j.id} value={j.id}>{j.title}</option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">Mã Hồ Sơ</th>
                    <th className="p-3.5">{language === 'vi' ? 'Ứng Viên' : 'Candidate'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Điện Thoại / Email' : 'Contact'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Vị Trí Tuyển' : 'Role'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Kinh Nghiệm / Giới Thiệu' : 'Experience & Note'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái' : 'Status'}</th>
                    <th className="p-3.5 text-right">{language === 'vi' ? 'Tiến Độ' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredCandidates.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-gray-400">
                        {language === 'vi' ? 'Chưa có hồ sơ ứng tuyển.' : 'No candidates registered.'}
                      </td>
                    </tr>
                  ) : (
                    filteredCandidates.map(app => (
                      <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 font-mono font-bold text-purple-600 dark:text-purple-400">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'candidate', data: app })}
                            className="hover:underline"
                          >
                            {app.id}
                          </button>
                        </td>
                        <td className="p-3.5 font-bold text-gray-900 dark:text-white">
                          <button
                            onClick={() => setSelectedRecordForDetail({ type: 'candidate', data: app })}
                            className="hover:text-[#2076bd] text-left"
                          >
                            {app.fullName}
                          </button>
                        </td>
                        <td className="p-3.5">
                          <div className="font-medium text-gray-800 dark:text-gray-200">{app.phone}</div>
                          <div className="text-[11px] text-gray-400">{app.email}</div>
                        </td>
                        <td className="p-3.5 font-medium text-gray-800 dark:text-gray-200">{app.position}</td>
                        <td className="p-3.5 max-w-xs text-gray-600 dark:text-gray-300">
                          <div className="line-clamp-2">{app.experienceNotes || 'Chưa có kinh nghiệm (sẽ đào tạo qua Academy)'}</div>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                            app.status === 'hired'
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : app.status === 'interview_scheduled'
                              ? 'bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]'
                              : app.status === 'archived'
                              ? 'bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300'
                              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <select
                              value={app.status}
                              onChange={(e) => {
                                updateApplicationStatus(app.id, e.target.value as any);
                                showToast(language === 'vi' ? 'Đã cập nhật trạng thái ứng viên!' : 'Candidate status updated!');
                              }}
                              className="px-2 py-1 text-[11px] rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 focus:outline-none"
                            >
                              <option value="new">Mới nộp</option>
                              <option value="interview_scheduled">Phỏng vấn</option>
                              <option value="hired">Trúng tuyển</option>
                              <option value="archived">Lưu trữ</option>
                            </select>

                            <button
                              onClick={() => setSelectedRecordForDetail({ type: 'candidate', data: app })}
                              className="p-1 rounded text-gray-400 hover:text-[#2076bd]"
                              title="Xem chi tiết"
                            >
                              <Eye size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: PRODUCTS & INVENTORY                              */}
        {/* ======================================================== */}
        {activeTab === 'products' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Quản Lý 27 Món Menu, Cà Phê Mộc & Tồn Kho' : 'Menu Catalog & Inventory Management'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Bật/tắt trạng thái Còn hàng trực tiếp trên website cho từng món' : 'Instantly toggle in-stock availability and review pricing across 27 products'}
                </p>
              </div>

              <select
                value={productCategoryFilter}
                onChange={(e) => setProductCategoryFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
              >
                <option value="all">{language === 'vi' ? 'Tất cả 5 nhóm danh mục' : 'All Categories'}</option>
                <option value="coffee-bag">{language === 'vi' ? 'Cà phê túi & hạt mộc' : 'Coffee Bags'}</option>
                <option value="bottled-drinks">{language === 'vi' ? 'Đồ uống đóng chai Fresh' : 'Bottled Drinks'}</option>
                <option value="bakery">{language === 'vi' ? 'Bánh tươi Dolphy Bakery' : 'Bakery'}</option>
                <option value="equipment">{language === 'vi' ? 'Dụng cụ & Merchandise' : 'Equipment'}</option>
                <option value="combo">{language === 'vi' ? 'Combo & Tiệc B2B' : 'Combos & B2B'}</option>
              </select>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">Hình Ảnh</th>
                    <th className="p-3.5">{language === 'vi' ? 'Tên Sản Phẩm' : 'Product Name'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Phân Loại' : 'Category'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Vùng Nguyên Liệu' : 'Origin'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Đơn Giá' : 'Price'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Trạng Thái Kho' : 'Stock Status'}</th>
                    <th className="p-3.5 text-right">{language === 'vi' ? 'Thao Tác' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredProducts.map(prod => {
                    const isStock = productStockMap[String(prod.id)] ?? prod.inStock;
                    return (
                      <tr key={prod.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40">
                        <td className="p-3.5 w-14">
                          <img
                            src={prod.image || prod.images?.[0]}
                            alt={prod.name}
                            className="w-10 h-10 object-cover rounded-lg border border-gray-200 dark:border-slate-700"
                          />
                        </td>
                        <td className="p-3.5">
                          <div className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                            <span>{prod.name}</span>
                            {prod.isBestSeller && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#FAEA28] text-slate-950 font-oswald uppercase font-extrabold">
                                Best Seller
                              </span>
                            )}
                          </div>
                          {prod.nameEn && <div className="text-[11px] text-gray-400 italic">{prod.nameEn}</div>}
                        </td>
                        <td className="p-3.5 text-gray-600 dark:text-gray-300 font-medium">
                          {prod.categoryName}
                        </td>
                        <td className="p-3.5 text-gray-500 text-[11px]">
                          {prod.origin || 'Dolphy Specialty'}
                        </td>
                        <td className="p-3.5 font-mono font-bold text-[#2076bd] dark:text-[#3ba0e6]">
                          {prod.price.toLocaleString('vi-VN')}₫
                          {prod.compareAtPrice && (
                            <span className="text-[10px] text-gray-400 line-through ml-1.5">
                              {prod.compareAtPrice.toLocaleString('vi-VN')}₫
                            </span>
                          )}
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                            isStock
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : 'bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300'
                          }`}>
                            {isStock ? (language === 'vi' ? 'Còn hàng' : 'In Stock') : (language === 'vi' ? 'Tạm hết' : 'Sold Out')}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => toggleProductStock(prod.id)}
                            className={`px-3 py-1 rounded text-[11px] font-oswald uppercase tracking-wider font-semibold transition-colors ${
                              isStock
                                ? 'bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200'
                                : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200'
                            }`}
                          >
                            {isStock ? (language === 'vi' ? 'Đổi Hết Hàng' : 'Set Out of Stock') : (language === 'vi' ? 'Bật Còn Hàng' : 'Set In Stock')}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 7: STORE NETWORK OPERATIONS & BAR EQUIPMENT          */}
        {/* ======================================================== */}
        {activeTab === 'branches' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                  {language === 'vi' ? 'Bảng Vận Hành 10 Chi Nhánh & Máy Móc Quầy Bar' : 'Dolphy Store Network Operations & Bar Health'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'vi' ? 'Theo dõi giờ phục vụ, ca trưởng phụ trách, kiểm tra áp suất máy pha La Marzocco và Wi-Fi từng điểm' : 'Monitor opening hours, shift supervisors, espresso machine health, and store Wi-Fi'}
                </p>
              </div>

              <a
                href={brandInfo.mapEmbedUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <MapPin size={13} />
                <span>{language === 'vi' ? 'Mở Bản Đồ Vệ Tinh' : 'Open Google Map'}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {branchesData.map(b => {
                const op = branchOpMap[b.id] || {
                  isOpen: true,
                  shiftManager: 'Quản lý cửa hàng',
                  managerPhone: '0938.084.985',
                  machineName: 'La Marzocco Linea PB',
                  machineStatus: 'good',
                  grinder: 'Mahlkönig EK43',
                  seatingCapacity: 45,
                  wifiPass: 'dolphycoffee2026'
                };

                return (
                  <div key={b.id} className="p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 space-y-3 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 shrink-0">
                            <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-oswald text-sm font-bold uppercase text-gray-900 dark:text-white leading-snug">
                              {b.name}
                            </h4>
                            <span className="text-[10px] text-[#2076bd] dark:text-[#3ba0e6] font-semibold uppercase">
                              {b.area}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleBranchOpen(b.id)}
                          className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase transition-colors ${
                            op.isOpen
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 hover:bg-emerald-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 hover:bg-red-200'
                          }`}
                          title="Nhấp để bật/tắt trạng thái mở cửa"
                        >
                          {op.isOpen ? (language === 'vi' ? 'Đang Mở Cửa' : 'Open') : (language === 'vi' ? 'Tạm Đóng' : 'Closed')}
                        </button>
                      </div>

                      {/* Store Details */}
                      <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                        <div className="flex items-start gap-1.5">
                          <MapPin size={13} className="text-gray-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{b.address}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-gray-400 shrink-0" />
                          <span>{b.openingHours || '06:30 - 22:30'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone size={13} className="text-gray-400 shrink-0" />
                          <span>{b.phone}</span>
                        </div>
                      </div>

                      {/* Bar Equipment & Health Monitor */}
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <Wrench size={12} className="text-[#2076bd]" />
                            <span>Máy pha: {op.machineName}</span>
                          </span>
                          <button
                            onClick={() => cycleMachineStatus(b.id)}
                            className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase ${
                              op.machineStatus === 'good'
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300'
                                : op.machineStatus === 'maintenance'
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300'
                                : 'bg-red-100 text-red-700 dark:bg-red-950/70 dark:text-red-300'
                            }`}
                            title="Nhấp để đổi trạng thái máy pha"
                          >
                            {op.machineStatus === 'good' ? 'Chuẩn 9 Bar' : op.machineStatus === 'maintenance' ? 'Bảo dưỡng' : 'Cần kiểm tra'}
                          </button>
                        </div>
                        <div className="text-gray-400 flex items-center justify-between">
                          <span>Ca trưởng: <strong>{op.shiftManager}</strong></span>
                          <span>Wi-Fi: <code className="text-gray-500 font-mono">{op.wifiPass}</code></span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-oswald uppercase">
                        ID: {b.id}
                      </span>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(b.address + ', TP. Hồ Chí Minh')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-[#2076bd] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>Google Map</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 8: SETTINGS, VIETQR & SYSTEM INTEGRATIONS           */}
        {/* ======================================================== */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            
            {/* VietQR Live Generator Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]">
                  <QrCode size={22} />
                </div>
                <div>
                  <h3 className="font-oswald text-base font-bold uppercase text-gray-900 dark:text-white leading-tight">
                    {language === 'vi' ? 'Cấu Hình Thanh Toán VietQR MB Bank' : 'MB Bank VietQR Integration Console'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'vi' ? 'Hệ thống thanh toán tự động quét mã QR 24/7 trực tiếp vào tài khoản Dolphy Café' : 'Direct bank transfer QR integration for zero-fee instant customer payments'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                
                {/* Account Details */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-slate-800">
                      <span className="text-gray-400 font-semibold uppercase">{language === 'vi' ? 'Ngân Hàng Tiếp Nhận' : 'Beneficiary Bank'}</span>
                      <span className="font-bold text-gray-900 dark:text-white">MB Bank (Ngân hàng TMCP Quân Đội)</span>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-slate-800">
                      <span className="text-gray-400 font-semibold uppercase">{language === 'vi' ? 'Số Tài Khoản' : 'Account Number'}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-base font-extrabold text-[#2076bd] dark:text-[#3ba0e6]">0938084985</span>
                        <button
                          onClick={() => copyToClipboard('0938084985', 'STK MB Bank')}
                          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-500"
                          title="Sao chép STK"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-slate-800">
                      <span className="text-gray-400 font-semibold uppercase">{language === 'vi' ? 'Chủ Tài Khoản' : 'Account Name'}</span>
                      <span className="font-bold text-gray-900 dark:text-white">DOLPHY CAFE / NGUYEN HOANG KHANH</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-semibold uppercase">{language === 'vi' ? 'Mã Định Danh NAPAS 24/7' : 'BIN Code'}</span>
                      <span className="font-mono text-gray-600 dark:text-gray-300">970422 (MB Bank)</span>
                    </div>
                  </div>

                  {/* QR Testing Sandbox */}
                  <div className="p-4 rounded-xl border border-gray-200 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-bold text-gray-900 dark:text-white uppercase font-oswald flex items-center gap-1.5">
                      <SlidersHorizontal size={14} className="text-[#2076bd]" />
                      <span>{language === 'vi' ? 'Kiểm Tra Sinh Mã QR Động Theo Số Tiền (Live Sandbox)' : 'Dynamic QR Generator Sandbox'}</span>
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-gray-500 mb-1 font-semibold">{language === 'vi' ? 'Số Tiền Thử Nghiệm (VNĐ)' : 'Test Amount'}</label>
                        <input
                          type="number"
                          step="10000"
                          value={testAmount}
                          onChange={e => setTestAmount(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-500 mb-1 font-semibold">{language === 'vi' ? 'Nội Dung Chuyển Khoản' : 'Transfer Memo'}</label>
                        <input
                          type="text"
                          value={testMemo}
                          onChange={e => setTestMemo(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code Live Preview */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 text-center space-y-3">
                  <div className="w-48 h-48 bg-white p-2 rounded-xl shadow-md border border-gray-200 flex items-center justify-center">
                    <img
                      src={`https://img.vietqr.io/image/970422-0938084985-compact2.png?amount=${testAmount || '0'}&addInfo=${encodeURIComponent(testMemo || 'DOLPHY')}&accountName=DOLPHY%20CAFE`}
                      alt="VietQR Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[11px] text-gray-500">
                    <div>{language === 'vi' ? 'Mẫu chuẩn VietQR NAPAS 24/7' : 'Standard NAPAS 24/7 QR'}</div>
                    <div className="font-mono text-emerald-600 font-bold mt-0.5">
                      {parseInt(testAmount || '0').toLocaleString('vi-VN')} ₫
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Brand Design Tokens & Typography Cheat Sheet */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <Zap size={22} />
                </div>
                <div>
                  <h3 className="font-oswald text-base font-bold uppercase text-gray-900 dark:text-white leading-tight">
                    {language === 'vi' ? 'Tiêu Chuẩn Thương Hiệu & Mã Màu (Brand Design Tokens)' : 'Dolphy Brand Design Tokens'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'vi' ? 'Bảng màu chuẩn hóa nhận diện Dolphy 2026 cho toàn bộ đội ngũ kỹ thuật và thiết kế' : 'Official design specifications, color codes, and typography guidelines'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                {[
                  { name: 'Primary Blue', hex: '#2076bd', text: 'text-white', bg: 'bg-[#2076bd]' },
                  { name: 'Accent Gold', hex: '#FAEA28', text: 'text-slate-950', bg: 'bg-[#FAEA28]' },
                  { name: 'Dark Navy', hex: '#0b1626', text: 'text-white', bg: 'bg-[#0b1626]' },
                  { name: 'Dark Canvas', hex: '#0f172a', text: 'text-white', bg: 'bg-[#0f172a]' },
                  { name: 'Light Canvas', hex: '#f1f5f9', text: 'text-slate-900', bg: 'bg-[#f1f5f9]' }
                ].map(col => (
                  <div
                    key={col.hex}
                    onClick={() => copyToClipboard(col.hex, col.name)}
                    className="p-3 rounded-xl border border-gray-200 dark:border-slate-800 space-y-2 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className={`w-full h-12 rounded-lg ${col.bg} flex items-center justify-center font-bold text-xs ${col.text} shadow-inner`}>
                      {col.hex}
                    </div>
                    <div className="text-center text-xs">
                      <div className="font-bold text-gray-900 dark:text-white">{col.name}</div>
                      <div className="text-[10px] text-gray-400">{language === 'vi' ? 'Nhấp để chép' : 'Click to copy'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Data Backup & Management Tools */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131d36] border border-gray-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-oswald text-base font-bold uppercase text-gray-900 dark:text-white leading-tight">
                    {language === 'vi' ? 'Quản Trị Cơ Sở Dữ Liệu & Sao Lưu Hệ Thống' : 'Database Administration & System Backup'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'vi' ? 'Tải bản sao lưu toàn bộ thông tin học viên, đơn hàng và lịch lớp học để lưu trữ an toàn' : 'Export complete system state as JSON backup or restore defaults'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={backupFullDatabase}
                  className="px-4 py-2 rounded-xl bg-[#2076bd] hover:bg-blue-600 text-white font-oswald text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Download size={14} />
                  <span>{language === 'vi' ? 'Tải Bản Sao Lưu Toàn Diện (Backup JSON)' : 'Download Full JSON Backup'}</span>
                </button>

                <button
                  onClick={resetDemoData}
                  className="px-4 py-2 rounded-xl border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400 font-oswald text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw size={14} />
                  <span>{language === 'vi' ? 'Khôi Phục Dữ Liệu Demo Chuẩn' : 'Reset to Factory Demo'}</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 9: FUNNEL & RESELL STRATEGY                          */}
        {/* ======================================================== */}
        {activeTab === 'funnel' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-6 p-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#2076bd] dark:text-[#3ba0e6] font-oswald">
                Dolphy Strategy 2026
              </span>
              <h3 className="font-oswald text-xl font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6] mt-0.5">
                {language === 'vi' ? 'Báo Cáo Phễu Chuyển Đổi & Chiến Lược Khai Thác Nguồn Cũ' : 'Recruitment & Student Conversion Funnel'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {language === 'vi'
                  ? 'Theo dõi sát sao từng nấc thang chuyển đổi từ lượt hiển thị mạng xã hội đến học viên đóng học phí thực tế.'
                  : 'Track and optimize step-by-step conversion from social impressions to tuition enrollment.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Stage 1</div>
                <div className="text-xs font-bold text-gray-600 dark:text-gray-300">{language === 'vi' ? 'Lượt Hiển Thị' : 'Impressions'}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">20.000+</div>
                <div className="text-[10px] text-gray-500">TikTok & Meta Reels</div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase">Stage 2</div>
                <div className="text-xs font-bold text-gray-600 dark:text-gray-300">{language === 'vi' ? 'Tiếp Cận Web' : 'Web Visitors'}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">1.000+</div>
                <div className="text-[10px] text-gray-500">Landing Page Views</div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-900/60 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 3</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'Lượt Quan Tâm' : 'Interested'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">100+</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400">Workshop & Trials</div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-slate-900/60 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 4</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'Leads Tiềm Năng' : 'Qualified Leads'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">20</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400">1-on-1 Inquiries</div>
              </div>

              <div className="p-4 rounded-xl bg-blue-100/50 dark:bg-slate-900/60 border border-blue-200 dark:border-blue-900 text-center space-y-1">
                <div className="text-[10px] font-bold text-[#2076bd] dark:text-[#3ba0e6] uppercase">Stage 5</div>
                <div className="text-xs font-bold text-[#2076bd] dark:text-[#3ba0e6]">{language === 'vi' ? 'HV Đăng Ký' : 'Registrations'}</div>
                <div className="text-lg font-bold text-[#2076bd] dark:text-[#3ba0e6]">10</div>
                <div className="text-[10px] text-gray-600 dark:text-gray-400">Form Submissions</div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#165b94] to-[#2076bd] text-white text-center space-y-1 shadow-md">
                <div className="text-[10px] font-bold text-[#FAEA28] uppercase">Target Goal</div>
                <div className="text-xs font-bold text-white">{language === 'vi' ? 'HV Đóng Học Phí' : 'Paid Students'}</div>
                <div className="text-xl font-extrabold text-white">5 Students</div>
                <div className="text-[10px] text-green-300 font-bold">35.000.000 ₫</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/40 dark:bg-slate-900/60 border border-blue-100 dark:border-slate-800 space-y-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-[#2076bd] dark:text-[#3ba0e6] block font-bold text-sm">
                📌 {language === 'vi' ? '3 Cơ Chế Vận Hành Tuyển Sinh Trọng Điểm 2026:' : 'Key Operational Recruitment Pillars for 2026:'}
              </strong>
              <div className="space-y-2">
                <p>
                  1. <strong>{language === 'vi' ? 'Tái Tiếp Cận 200+ Ứng Viên Cũ (Resell Candidate Base):' : 'Re-engage Past Applicants:'}</strong> {language === 'vi' ? 'Gửi email và tin nhắn Zalo thân mật mời các bạn từng trúng tuyển/không trúng tuyển Barista tham gia khóa đào tạo thực chiến với học phí ưu đãi 10% và cam kết tuyển thẳng.' : 'Nurture previous applicants who lacked experience with discounted academy tuition and guaranteed hiring.'}
                </p>
                <p>
                  2. <strong>{language === 'vi' ? 'Workshop Trải Nghiệm Cuối Tuần 250k:' : 'Weekend Workshops at 250k VND:'}</strong> {language === 'vi' ? 'Tạo phễu lọc khách hàng tự nhiên qua workshop 3.5h tại 28 Thảo Điền và 1441 Nguyễn Văn Linh. Miễn 100% phí workshop nếu đăng ký khóa Thực Chiến.' : 'Bi-weekly 3.5-hour workshops introducing espresso science, serving as primary academy feeders.'}
                </p>
                <p>
                  3. <strong>{language === 'vi' ? 'Làm Chủ Nền Tảng Dữ Liệu Tự Doanh:' : 'Independent Data Ownership:'}</strong> {language === 'vi' ? 'Toàn bộ thông tin khách hàng mua hạt mộc, học viên và ứng viên được lưu trữ độc lập trên Dolphy Hub, tối ưu hóa chi phí quảng cáo bên thứ ba.' : 'All customer, student, and applicant relationships are retained in-house for high lifetime value (LTV).'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 10: SITEMAP & URL MANAGEMENT HUB                     */}
        {/* ======================================================== */}
        {activeTab === 'sitemap' && (
          <div className="bg-white dark:bg-[#131d36] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-xs space-y-4 p-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-oswald uppercase tracking-wider font-bold bg-[#2076bd] text-white">
                    Sitemap Hub
                  </span>
                  <h3 className="font-oswald text-lg font-bold uppercase text-[#2076bd] dark:text-[#3ba0e6]">
                    {language === 'vi' ? 'Trung Tâm Điều Hướng & Quản Lý Liên Kết (URL Navigator)' : 'Sitemap & Links Management Navigator'}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {language === 'vi'
                    ? `Sinh link tự động cho toàn bộ ${sitemapRegistry.length} trang con, bài viết chuyên sâu, sản phẩm cửa hàng, khóa học, tuyển dụng và chi nhánh để kiểm tra & quản lý nhanh chóng.`
                    : `Auto-generated index of all ${sitemapRegistry.length} pages, knowledge articles, products, courses, jobs, and branches for seamless navigation.`}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={exportSitemapAsJson}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2076bd] hover:bg-[#FAEA28] hover:text-slate-950 text-white text-xs font-oswald uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Download size={13} />
                  <span>{language === 'vi' ? 'Tải Sitemap JSON' : 'Export Sitemap JSON'}</span>
                </button>
              </div>
            </div>

            {/* Sitemap Filter & Search Toolbar */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', labelVi: `Tất cả (${sitemapRegistry.length})`, labelEn: `All (${sitemapRegistry.length})` },
                  { id: 'main', labelVi: 'Trang chính (9)', labelEn: 'Main (9)' },
                  { id: 'article', labelVi: 'Bài viết (16)', labelEn: 'Articles (16)' },
                  { id: 'product', labelVi: 'Sản phẩm (27)', labelEn: 'Products (27)' },
                  { id: 'course', labelVi: 'Khóa học (4)', labelEn: 'Courses (4)' },
                  { id: 'job', labelVi: 'Tuyển dụng (6)', labelEn: 'Careers (6)' },
                  { id: 'branch', labelVi: 'Chi nhánh (12)', labelEn: 'Branches (12)' },
                  { id: 'external', labelVi: 'Ngoại sàn (5)', labelEn: 'External (5)' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSitemapCategoryFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-oswald uppercase tracking-wider font-semibold transition-all ${
                      sitemapCategoryFilter === cat.id
                        ? 'bg-[#2076bd] text-white shadow-xs'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {language === 'vi' ? cat.labelVi : cat.labelEn}
                  </button>
                ))}
              </div>

              <div className="relative md:ml-auto md:w-72">
                <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'vi' ? 'Tìm link hoặc tiêu đề...' : 'Search URLs or titles...'}
                  value={sitemapSearch}
                  onChange={(e) => setSitemapSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#2076bd]"
                />
              </div>
            </div>

            {/* Sitemap Links Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 dark:bg-slate-900/60 text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold border-b border-gray-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5">{language === 'vi' ? 'Phân Loại' : 'Type'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Tên Trang / Bài Viết / Mục' : 'Page / Article / Section'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Đường Dẫn URL' : 'Relative Path'}</th>
                    <th className="p-3.5">{language === 'vi' ? 'Ghi Chú / Thẻ' : 'Tag / Info'}</th>
                    <th className="p-3.5 text-right">{language === 'vi' ? 'Thao Tác Quản Trị' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredSitemapLinks.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-400">
                        {language === 'vi' ? 'Không tìm thấy liên kết phù hợp.' : 'No matching URLs found.'}
                      </td>
                    </tr>
                  ) : (
                    filteredSitemapLinks.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-oswald ${
                            item.category === 'main'
                              ? 'bg-blue-100 dark:bg-blue-950/60 text-[#2076bd] dark:text-[#3ba0e6]'
                              : item.category === 'article'
                              ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300'
                              : item.category === 'product'
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : item.category === 'course'
                              ? 'bg-[#FAEA28] text-slate-950 font-extrabold'
                              : item.category === 'job'
                              ? 'bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300'
                              : item.category === 'branch'
                              ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}>
                            {language === 'vi' ? item.categoryLabelVi : item.categoryLabelEn}
                          </span>
                        </td>

                        <td className="p-3.5 max-w-md">
                          <div className="font-bold text-gray-900 dark:text-white leading-snug">
                            {language === 'vi' ? item.titleVi : item.titleEn}
                          </div>
                          {language === 'vi' && item.titleEn !== item.titleVi && (
                            <div className="text-[11px] text-gray-400 italic mt-0.5 line-clamp-1">{item.titleEn}</div>
                          )}
                        </td>

                        <td className="p-3.5 max-w-xs font-mono text-[11px] text-[#2076bd] dark:text-[#3ba0e6] truncate">
                          {item.path}
                        </td>

                        <td className="p-3.5 whitespace-nowrap">
                          {item.tag && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
                              {item.tag}
                            </span>
                          )}
                        </td>

                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => copyToClipboard(item.fullUrl, item.titleVi)}
                              title={language === 'vi' ? 'Sao chép link' : 'Copy link'}
                              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 hover:text-[#2076bd] transition-colors"
                            >
                              <Copy size={13} />
                            </button>

                            <a
                              href={item.fullUrl}
                              target="_blank"
                              rel="noreferrer"
                              title={language === 'vi' ? 'Mở trong tab mới' : 'Open in new tab'}
                              className="p-1.5 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 text-[#2076bd] dark:text-[#3ba0e6] transition-colors"
                            >
                              <ExternalLink size={13} />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>

      {/* MODAL 1: ADD WALK-IN STUDENT */}
      <AddStudentModal
        isOpen={isAddStudentOpen}
        onClose={() => setIsAddStudentOpen(false)}
        language={language}
        onSubmit={(newStudent) => {
          submitRegistration(newStudent);
        }}
      />

      {/* MODAL 2: ADD PHONE ORDER */}
      <AddOrderModal
        isOpen={isAddOrderOpen}
        onClose={() => setIsAddOrderOpen(false)}
        language={language}
        onSubmit={(newOrder) => {
          submitOrder(newOrder);
        }}
      />

      {/* MODAL 3: ADD NEW COHORT */}
      <AddCohortModal
        isOpen={isAddCohortOpen}
        onClose={() => setIsAddCohortOpen(false)}
        language={language}
        onSubmit={handleAddCohort}
      />

      {/* MODAL 4: RECORD DOSSIER / AUDIT DETAIL */}
      <RecordDetailModal
        record={selectedRecordForDetail}
        onClose={() => setSelectedRecordForDetail(null)}
        language={language}
      />

    </div>
  );
};
