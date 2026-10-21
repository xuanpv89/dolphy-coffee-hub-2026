export type Theme = 'ocean' | 'roastery' | 'vintage' | 'nordic' | 'sunset';

export interface ThemeConfig {
  id: Theme;
  nameVi: string;
  nameEn: string;
  badgeVi: string;
  badgeEn: string;
  taglineVi: string;
  taglineEn: string;
  descVi: string;
  descEn: string;
  iconName: 'Waves' | 'Moon' | 'Leaf' | 'Square' | 'Sunrise';
  primaryHex: string;
  accentHex: string;
  bgHex: string;
  surfaceHex: string;
  borderHex: string;
  isDark: boolean;
  aesthetic: string;
}

export const THEME_ORDER: Theme[] = ['ocean', 'roastery', 'vintage', 'nordic', 'sunset'];

export const DOLPHY_THEMES: Record<Theme, ThemeConfig> = {
  ocean: {
    id: 'ocean',
    nameVi: 'Di Sản Biển Xanh',
    nameEn: 'Ocean Heritage',
    badgeVi: 'Nguyên Bản 2013',
    badgeEn: 'Original 2013',
    taglineVi: 'Sắc xanh biển Thảo Điền & di sản 13 năm',
    taglineEn: 'Coastal blue & 13 years of coffee heritage',
    descVi: 'Giao diện nguyên bản kinh điển của Dolphy Café: Sắc xanh đại dương tươi mát kết hợp điểm nhấn vàng rực rỡ.',
    descEn: 'Classic coastal aesthetic with signature Dolphy ocean blue, golden amber badges, and balanced modern typography.',
    iconName: 'Waves',
    primaryHex: '#2076bd',
    accentHex: '#FAEA28',
    bgHex: '#ffffff',
    surfaceHex: '#f0f8ff',
    borderHex: '#e2e8f0',
    isDark: false,
    aesthetic: 'Clean Coastal Modern'
  },
  roastery: {
    id: 'roastery',
    nameVi: 'Xưởng Rang Đêm',
    nameEn: 'Midnight Roastery',
    badgeVi: 'Cyber Lounge',
    badgeEn: 'Cyber Lounge',
    taglineVi: 'Đen tuyền Obsidian, kính mờ & ánh lửa rang',
    taglineEn: 'Obsidian noir, frosted glass & roasting flame',
    descVi: 'Không gian Cyber Lounge huyền bí cho tín đồ specialty coffee: Nền đen obsidian, viền neon cyan và ánh lửa rang hổ phách.',
    descEn: 'Luxury dark lounge aesthetic with frosted glassmorphism, electric cyan borders, and warm golden amber glow.',
    iconName: 'Moon',
    primaryHex: '#0284c7',
    accentHex: '#f59e0b',
    bgHex: '#070a12',
    surfaceHex: '#0f172a',
    borderHex: '#1e293b',
    isDark: true,
    aesthetic: 'Dark Luxury Tech-Lounge'
  },
  vintage: {
    id: 'vintage',
    nameVi: 'Vườn Cổ Điển Thảo Điền',
    nameEn: 'Botanical Courtyard',
    badgeVi: 'Cổ Điển Sài Gòn',
    badgeEn: 'French Colonial',
    taglineVi: 'Xanh ngọc bích, giấy mộc & phông chữ thanh lịch',
    taglineEn: 'Forest emerald, warm linen paper & editorial serif',
    descVi: 'Hơi thở hoài niệm biệt thự vườn Thảo Điền: Xanh ngọc bảo quý phái, nền giấy mộc ấm áp, nốt quế quánh và phông chữ Playfair.',
    descEn: 'Artisanal courtyard bistro with forest emerald tones, warm parchment paper, antique borders, and literary Playfair typography.',
    iconName: 'Leaf',
    primaryHex: '#1b4d3e',
    accentHex: '#c05621',
    bgHex: '#faf6f0',
    surfaceHex: '#ffffff',
    borderHex: '#e6ded1',
    isDark: false,
    aesthetic: 'Artisanal French Garden Bistro'
  },
  nordic: {
    id: 'nordic',
    nameVi: 'Tối Giản Bắc Âu',
    nameEn: 'Nordic Minimalist',
    badgeVi: 'Studio Tối Giản',
    badgeEn: 'Minimal Studio',
    taglineVi: 'Đen - trắng tương phản, góc sắc sảo & caramel cháy',
    taglineEn: 'Stark monochrome, razor lines & toasted caramel',
    descVi: 'Phong cách thiết kế Studio Bắc Âu: Tương phản trắng - đen tuyệt đối, góc cạnh sắc sảo (0px radius) và điểm nhấn caramel nướng.',
    descEn: 'Scandinavian architectural precision: Stark high contrast, sharp geometric angles, hairline borders, and toasty caramel accents.',
    iconName: 'Square',
    primaryHex: '#18181b',
    accentHex: '#c27803',
    bgHex: '#ffffff',
    surfaceHex: '#f4f4f5',
    borderHex: '#e4e4e7',
    isDark: false,
    aesthetic: 'Brutalist Architectural Chic'
  },
  sunset: {
    id: 'sunset',
    nameVi: 'Hoàng Hôn Sài Gòn',
    nameEn: 'Sunset Saigon',
    badgeVi: 'San Hô Rực Rỡ',
    badgeEn: 'Warm Coral',
    taglineVi: 'Nắng chiều sông Sài Gòn, sắc san hô & bo tròn mềm mại',
    taglineEn: 'Riverside golden hour, vibrant coral & pebble curves',
    descVi: 'Ánh chiều tà rực rỡ bên sông Sài Gòn: Sắc san hô rực lửa hòa quyện cam hoàng hôn, nền sữa đào và những đường bo cong pebble 28px.',
    descEn: 'Golden hour warmth with radiant crimson coral gradients, honey amber badges, soft peach dawn glow, and smooth organic pebble curves.',
    iconName: 'Sunrise',
    primaryHex: '#e11d48',
    accentHex: '#f97316',
    bgHex: '#fff8f5',
    surfaceHex: '#ffffff',
    borderHex: '#fed7aa',
    isDark: false,
    aesthetic: 'Warm Vibrant Lifestyle'
  }
};

export const getNextTheme = (current: Theme): Theme => {
  const currentIndex = THEME_ORDER.indexOf(current);
  const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
  return THEME_ORDER[nextIndex];
};
