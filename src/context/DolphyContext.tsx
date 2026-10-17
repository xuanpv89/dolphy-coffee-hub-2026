import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Course, CartItem, Order, StudentRegistration, JobApplication, Job } from '../types';

interface DolphyContextType {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, grindOption?: CartItem['grindOption']) => void;
  removeFromCart: (productId: string | number, grindOption: string) => void;
  updateQuantity: (productId: string | number, grindOption: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;

  // Modals
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  enrollingCourse: Course | null;
  setEnrollingCourse: (course: Course | null) => void;
  applyingJob: Job | null;
  setApplyingJob: (job: Job | null) => void;

  // Submissions (Admin data)
  orders: Order[];
  registrations: StudentRegistration[];
  applications: JobApplication[];
  submitOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => Order;
  submitRegistration: (reg: Omit<StudentRegistration, 'id' | 'createdAt' | 'status'>) => StudentRegistration;
  submitApplication: (app: Omit<JobApplication, 'id' | 'createdAt' | 'status'>) => JobApplication;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  updateRegistrationStatus: (id: string, status: StudentRegistration['status']) => void;
  updateApplicationStatus: (id: string, status: JobApplication['status']) => void;

  // Toast
  toast: string | null;
  showToast: (msg: string) => void;
}

const DolphyContext = createContext<DolphyContextType | undefined>(undefined);

export const DolphyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dolphy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [enrollingCourse, setEnrollingCourse] = useState<Course | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Database mock state for Admin portal
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('dolphy_orders');
      if (saved) return JSON.parse(saved);
    } catch {}
    // Seed with 1 initial sample order
    return [
      {
        id: 'DOLPHY-ORD-8821',
        customerName: 'Nguyễn Văn Hải',
        phone: '0903123456',
        email: 'hai.nguyen@gmail.com',
        address: 'Villa 12, Đường số 10, Thảo Điền, TP. Thủ Đức',
        note: 'Giao trong giờ hành chính giúp mình',
        items: [
          {
            product: {
              id: 'arabica-250g',
              name: 'Arabica 250g (100% Arabica) (Gói)',
              alias: 'arabica-250g-100-arabica-goi',
              category: 'coffee-bag',
              categoryName: 'Cà phê túi',
              price: 255000,
              weight: '250g',
              description: '100% Arabica',
              images: ['https://bizweb.dktcdn.net/100/434/956/products/12.jpg?v=1767175895743'],
              inStock: true
            },
            quantity: 2,
            grindOption: 'Xay Cold Brew (Coarse)'
          }
        ],
        totalAmount: 510000,
        paymentMethod: 'vietqr',
        status: 'confirmed',
        createdAt: '2026-10-16T09:30:00.000Z'
      }
    ];
  });

  const [registrations, setRegistrations] = useState<StudentRegistration[]>(() => {
    try {
      const saved = localStorage.getItem('dolphy_registrations');
      if (saved) return JSON.parse(saved);
    } catch {}
    // Seed initial sample registrations
    return [
      {
        id: 'DOLPHY-REG-101',
        fullName: 'Trần Minh Quang',
        phone: '0918765432',
        email: 'quang.tran@gmail.com',
        courseId: 'barista-thuc-chien',
        courseTitle: 'Khóa Học Barista Thực Chiến Dolphy (6 Buổi)',
        branchPreference: 'Dolphy Thảo Điền (28 Thảo Điền, Q.2)',
        preferredSchedule: 'Lớp Trong Tuần (Thứ 2-4-6 Ca Chiều)',
        paymentOption: 'deposit',
        amount: 2000000,
        status: 'paid_deposit',
        notes: 'Chuẩn bị đi du học Úc, muốn học để đi làm thêm bên đó',
        createdAt: '2026-10-15T14:20:00.000Z'
      },
      {
        id: 'DOLPHY-REG-102',
        fullName: 'Lê Thùy Dương',
        phone: '0982345678',
        email: 'thuyduong.coffee@gmail.com',
        courseId: 'latte-art-sensory',
        courseTitle: 'Khóa Chuyên Sâu Latte Art & Sensory Cảm Quan',
        branchPreference: 'Dolphy Phú Mỹ Hưng (1441 Nguyễn Văn Linh, Q.7)',
        preferredSchedule: 'Cuối Tuần (Chủ Nhật)',
        paymentOption: 'full',
        amount: 3800000,
        status: 'enrolled',
        notes: 'Đã có kinh nghiệm làm quán 1 năm, muốn nâng cao tay nghề',
        createdAt: '2026-10-16T11:00:00.000Z'
      }
    ];
  });

  const [applications, setApplications] = useState<JobApplication[]>(() => {
    try {
      const saved = localStorage.getItem('dolphy_applications');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 'DOLPHY-APP-201',
        fullName: 'Phạm Đức Anh',
        phone: '0977889900',
        email: 'ducanh.pham@outlook.com',
        position: 'Barista (Part-time)',
        branchPreference: 'Khu vực Quận 2 (Thảo Điền / An Phú)',
        shiftPreference: 'Ca sáng (06:30 - 12:00)',
        experienceNotes: 'Sinh viên năm 2 ĐH Hutech, tiếng Anh IELTS 6.5, yêu thích làm dịch vụ và rất thích không gian Dolphy Thảo Điền.',
        status: 'interview_scheduled',
        createdAt: '2026-10-15T16:45:00.000Z'
      }
    ];
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dolphy_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('dolphy_orders', JSON.stringify(orders));
    } catch {}
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('dolphy_registrations', JSON.stringify(registrations));
    } catch {}
  }, [registrations]);

  useEffect(() => {
    try {
      localStorage.setItem('dolphy_applications', JSON.stringify(applications));
    } catch {}
  }, [applications]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    grindOption: CartItem['grindOption'] = 'Hạt nguyên chất (Whole Bean)'
  ) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.grindOption === grindOption
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, grindOption }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const removeFromCart = (productId: string | number, grindOption: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.grindOption === grindOption)));
    showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
  };

  const updateQuantity = (productId: string | number, grindOption: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, grindOption);
      return;
    }
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.grindOption === grindOption) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const submitOrder = (orderData: Omit<Order, 'id' | 'createdAt' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `DOLPHY-ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setIsCheckoutOpen(false);
    showToast('Đặt hàng thành công! Mã đơn: ' + newOrder.id);
    return newOrder;
  };

  const submitRegistration = (regData: Omit<StudentRegistration, 'id' | 'createdAt' | 'status'>) => {
    const newReg: StudentRegistration = {
      ...regData,
      id: `DOLPHY-REG-${Math.floor(100 + Math.random() * 900)}`,
      status: regData.paymentOption === 'deposit' ? 'paid_deposit' : 'enrolled',
      createdAt: new Date().toISOString()
    };
    setRegistrations(prev => [newReg, ...prev]);
    setEnrollingCourse(null);
    showToast('Đăng ký khóa học thành công! Mã học viên: ' + newReg.id);
    return newReg;
  };

  const submitApplication = (appData: Omit<JobApplication, 'id' | 'createdAt' | 'status'>) => {
    const newApp: JobApplication = {
      ...appData,
      id: `DOLPHY-APP-${Math.floor(100 + Math.random() * 900)}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    setApplications(prev => [newApp, ...prev]);
    setApplyingJob(null);
    showToast('Gửi hồ sơ ứng tuyển thành công! Cảm ơn bạn đã quan tâm đến Dolphy.');
    return newApp;
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => (o.id === id ? { ...o, status } : o)));
    showToast(`Đã cập nhật trạng thái đơn ${id} thành "${status}"`);
  };

  const updateRegistrationStatus = (id: string, status: StudentRegistration['status']) => {
    setRegistrations(prev => prev.map(r => (r.id === id ? { ...r, status } : r)));
    showToast(`Đã cập nhật trạng thái học viên ${id}`);
  };

  const updateApplicationStatus = (id: string, status: JobApplication['status']) => {
    setApplications(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
    showToast(`Đã cập nhật trạng thái ứng viên ${id}`);
  };

  return (
    <DolphyContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCheckoutOpen,
        setIsCheckoutOpen,
        enrollingCourse,
        setEnrollingCourse,
        applyingJob,
        setApplyingJob,
        orders,
        registrations,
        applications,
        submitOrder,
        submitRegistration,
        submitApplication,
        updateOrderStatus,
        updateRegistrationStatus,
        updateApplicationStatus,
        toast,
        showToast
      }}
    >
      {children}
    </DolphyContext.Provider>
  );
};

export const useDolphy = () => {
  const context = useContext(DolphyContext);
  if (!context) {
    throw new Error('useDolphy must be used within a DolphyProvider');
  }
  return context;
};
