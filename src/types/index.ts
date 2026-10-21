export interface Product {
  id: string | number;
  name: string;
  nameEn?: string;
  alias: string;
  category: 'coffee-bag' | 'combo' | 'equipment' | 'bottled-drinks' | 'bakery';
  categoryName: string;
  categoryNameEn?: string;
  price: number;
  compareAtPrice?: number;
  weight: string;
  origin?: string;
  originEn?: string;
  roastLevel?: string;
  tasteNotes?: string[];
  description: string;
  descriptionEn?: string;
  brewingRecommendation?: string;
  image?: string;
  images: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  rating?: number;
  badge?: string;
  badgeEn?: string;
}

export interface SyllabusItem {
  session: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  practicalSkills: string[];
  practicalSkillsEn?: string[];
}

export interface Course {
  id: string;
  title: string;
  titleEn?: string;
  slug: string;
  badge?: string;
  badgeEn?: string;
  subtitle: string;
  subtitleEn?: string;
  price: number;
  discountPrice: number;
  depositAmount: number;
  duration: string;
  durationEn?: string;
  totalHours: number;
  sessions: number;
  hoursPerSession: number;
  targetAudience: string[];
  targetAudienceEn?: string[];
  usps: string[];
  uspsEn?: string[];
  syllabus: SyllabusItem[];
  syllabusEn?: SyllabusItem[];
  outcomes: string[];
  outcomesEn?: string[];
  trainerInfo: string;
  trainerInfoEn?: string;
  schedule: string[];
  scheduleEn?: string[];
  image: string;
  locations: string[];
  locationsEn?: string[];
}

export interface Branch {
  id: string;
  name: string;
  area: 'Quận 2 (TP. Thủ Đức)' | 'Quận 7 (Phú Mỹ Hưng)' | 'Quận Bình Thạnh' | 'Quận 3 (Trung Tâm)';
  district: string;
  address: string;
  phone: string;
  openingHours: string;
  mapEmbed: string;
  mapUrl: string;
  image: string;
  features: string[];
  featuresEn?: string[];
  isFlagship?: boolean;
}

export interface Article {
  id: string;
  title: string;
  titleEn?: string;
  slug: string;
  category: string;
  categoryEn?: string;
  date: string;
  author: string;
  readTime: string;
  readTimeEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  image: string;
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  titleEn?: string;
  department: string;
  departmentEn?: string;
  type: string;
  typeEn?: string;
  salary: string;
  salaryEn?: string;
  locations: string[];
  ageRange: string;
  description: string;
  descriptionEn?: string;
  requirements: string[];
  requirementsEn?: string[];
  benefits: string[];
  benefitsEn?: string[];
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
  grindOption?: 'Hạt nguyên chất (Whole Bean)' | 'Xay pha Phin (Medium)' | 'Xay Cold Brew (Coarse)' | 'Xay máy Espresso (Fine)' | 'Nguyên hạt (Espresso)' | 'Whole Bean (Espresso)' | string;
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
  preferredLocation?: string;
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
  jobId?: string;
  branchPreference: string;
  shiftPreference: string;
  experienceNotes: string;
  status: 'new' | 'interview_scheduled' | 'hired' | 'archived';
  createdAt: string;
}
