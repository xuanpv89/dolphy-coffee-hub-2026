export type Theme = 'ocean' | 'dark' | 'roastery' | 'vintage' | 'nordic' | 'sunset';

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
  iconName: 'Waves' | 'Moon' | 'Flame' | 'Leaf' | 'Square' | 'Sunrise';
  primaryHex: string;
  accentHex: string;
  bgHex: string;
  surfaceHex: string;
  borderHex: string;
  isDark: boolean;
  aesthetic: string;
}

export const THEME_ORDER: Theme[] = ['ocean', 'dark', 'roastery', 'vintage', 'nordic', 'sunset'];

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
  dark: {
    id: 'dark',
    nameVi: 'Di Sản Đêm',
    nameEn: 'Classic Dark',
    badgeVi: 'Tối Nguyên Bản',
    badgeEn: 'Original Dark',
    taglineVi: 'Giao diện nền tối kinh điển của Dolphy Café với sắc xanh & vàng hổ phách',
    taglineEn: 'Original classic dark mode with signature blue & champagne amber',
    descVi: 'Phiên bản nền tối chuẩn mực nguyên bản: Nền xám đen Slate #0f172a êm mắt, giữ trọn sắc xanh Dolphy Blue và huy hiệu vàng hổ phách #fbbf24.',
    descEn: 'The authentic classic dark theme: Deep slate #0f172a background, dark cards #1e293b, signature Dolphy blue and champagne amber badges.',
    iconName: 'Moon',
    primaryHex: '#38bdf8',
    accentHex: '#fbbf24',
    bgHex: '#0f172a',
    surfaceHex: '#1e293b',
    borderHex: '#334155',
    isDark: true,
    aesthetic: 'Classic Slate Dark'
  },
  roastery: {
    id: 'roastery',
    nameVi: 'Xưởng Rang Đêm',
    nameEn: 'Midnight Roastery',
    badgeVi: 'Cyber Lounge',
    badgeEn: 'Cyber Lounge',
    taglineVi: 'Đen tuyền Obsidian, viền neon cyan & ánh hồng laser',
    taglineEn: 'Obsidian noir, electric cyan & neon laser magenta',
    descVi: 'Không gian Cyber Lounge huyền bí cho tín đồ specialty coffee: Nền đen obsidian, viền neon cyan và ánh hồng laser rực rỡ.',
    descEn: 'Luxury dark lounge aesthetic with frosted glassmorphism, electric cyan borders, and vibrant neon laser magenta accents.',
    iconName: 'Flame',
    primaryHex: '#06b6d4',
    accentHex: '#ec4899',
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
    taglineVi: 'Xanh ngọc bích, đồng thau mạ vàng & phông chữ thanh lịch',
    taglineEn: 'Forest emerald, antique gilded brass & editorial serif',
    descVi: 'Hơi thở hoài niệm biệt thự vườn Thảo Điền: Xanh ngọc bảo quý phái, nền giấy mộc ấm áp, nốt đồng thau mạ vàng cổ kính và phông chữ Playfair.',
    descEn: 'Artisanal courtyard bistro with forest emerald tones, warm parchment paper, antique gilded brass accents, and literary Playfair typography.',
    iconName: 'Leaf',
    primaryHex: '#1b4d3e',
    accentHex: '#c59b27',
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
    taglineVi: 'Đen - trắng tương phản, góc sắc sảo & đỏ tín hiệu Thụy Sĩ',
    taglineEn: 'Stark monochrome, razor lines & Swiss architectural signal red',
    descVi: 'Phong cách thiết kế Studio Bắc Âu: Tương phản trắng - đen tuyệt đối, góc cạnh sắc sảo (0px radius) và điểm nhấn đỏ tín hiệu Thụy Sĩ.',
    descEn: 'Scandinavian architectural precision: Stark high contrast, sharp geometric angles, hairline borders, and iconic Swiss signal red accents.',
    iconName: 'Square',
    primaryHex: '#000000',
    accentHex: '#ef4444',
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
    accentHex: '#ff7a00',
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
