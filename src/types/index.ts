export interface Product {
  id: string | number;
  name: string;
  alias: string;
  category: 'coffee-bag' | 'combo' | 'equipment';
  categoryName: string;
  price: number;
  compareAtPrice?: number;
  weight: string;
  origin?: string;
  roastLevel?: string;
  tasteNotes?: string[];
  description: string;
  brewingRecommendation?: string;
  images: string[];
  inStock: boolean;
  isBestSeller?: boolean;
}

export interface SyllabusItem {
  session: number;
  title: string;
  description: string;
  practicalSkills: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  subtitle: string;
  price: number;
  discountPrice: number;
  depositAmount: number;
  duration: string;
  totalHours: number;
  sessions: number;
  hoursPerSession: number;
  targetAudience: string[];
  usps: string[];
  syllabus: SyllabusItem[];
  outcomes: string[];
  trainerInfo: string;
  schedule: string[];
  image: string;
  locations: string[];
}

export interface Branch {
  id: string;
  name: string;
  area: 'Quận 2 (TP. Thủ Đức)' | 'Quận 7 (Phú Mỹ Hưng)' | 'Quận Bình Thạnh';
  district: string;
  address: string;
  phone: string;
  openingHours: string;
  mapEmbed: string;
  mapUrl: string;
  image: string;
  features: string[];
  isFlagship?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Toàn thời gian / Bán thời gian';
  salary: string;
  locations: string[];
  ageRange: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  translation?: string;
  avatar?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  grindOption: 'Hạt nguyên chất (Whole Bean)' | 'Xay pha Phin (Medium)' | 'Xay Cold Brew (Coarse)' | 'Xay máy Espresso (Fine)';
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  note?: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: 'vietqr' | 'cod';
  status: 'pending' | 'confirmed' | 'shipping' | 'completed';
  createdAt: string;
}

export interface StudentRegistration {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  courseId: string;
  courseTitle: string;
  branchPreference: string;
  preferredSchedule: string;
  paymentOption: 'deposit' | 'full';
  amount: number;
  status: 'new' | 'contacted' | 'paid_deposit' | 'enrolled';
  notes?: string;
  createdAt: string;
}

export interface JobApplication {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  position: string;
  branchPreference: string;
  shiftPreference: string;
  experienceNotes: string;
  status: 'new' | 'interview_scheduled' | 'hired' | 'archived';
  createdAt: string;
}
