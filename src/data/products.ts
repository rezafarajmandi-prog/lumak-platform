export type Product = {
  id: string;
  family: string; // slug family (lin, trk, ...)
  name: string;
  model: string;
  wattage: number;
  cct: number; // Kelvin
  cri: number;
  ip: string;
  description: string;
};

export const products: Product[] = [
  // Linear
  {
    id: 'lin-120-18w-3k',
    family: 'lin',
    name: 'Linear 120',
    model: 'LIN-120-18W-3K',
    wattage: 18,
    cct: 3000,
    cri: 90,
    ip: 'IP20',
    description: 'چراغ خطی باریک پیوسته برای یکپارچه‌سازی سقف.',
  },
  {
    id: 'lin-90-12w-4k',
    family: 'lin',
    name: 'Linear 90',
    model: 'LIN-90-12W-4K',
    wattage: 12,
    cct: 4000,
    cri: 90,
    ip: 'IP20',
    description: 'راهکار خطی جمع‌وجور برای روشنایی کنج و تأکیدی.',
  },
  // Track
  {
    id: 'trk-60-15w-3k',
    family: 'trk',
    name: 'Track Spot 60',
    model: 'TRK-60-15W-3K',
    wattage: 15,
    cct: 3000,
    cri: 92,
    ip: 'IP20',
    description: 'اسپات ریلی قابل تنظیم برای فروشگاه و گالری.',
  },
  {
    id: 'trk-100-25w-4k',
    family: 'trk',
    name: 'Track Flood 100',
    model: 'TRK-100-25W-4K',
    wattage: 25,
    cct: 4000,
    cri: 90,
    ip: 'IP44',
    description: 'چراغ ریلی با پرتو گسترده برای فضاهای نمایشگاهی.',
  },
  // Surface
  {
    id: 'sur-200-20w-3k',
    family: 'sur',
    name: 'Surface Round 200',
    model: 'SUR-200-20W-3K',
    wattage: 20,
    cct: 3000,
    cri: 92,
    ip: 'IP54',
    description: 'چراغ سقفی سطحی با پایان معماری.',
  },
  // Recessed
  {
    id: 'rec-80-10w-3k',
    family: 'rec',
    name: 'Recessed Mini 80',
    model: 'REC-80-10W-3K',
    wattage: 10,
    cct: 3000,
    cri: 90,
    ip: 'IP20',
    description: 'چراغ توکار مینیمال برای سقف‌های تمیز.',
  },
  // Wall Washer
  {
    id: 'ww-150-30w-3k',
    family: 'ww',
    name: 'Wall Washer Linear',
    model: 'WW-150-30W-3K',
    wattage: 30,
    cct: 3000,
    cri: 90,
    ip: 'IP20',
    description: 'اپتیک نامتقارن برای روشنایی یکنواخت دیوار.',
  },
  // Profiles
  {
    id: 'prf-50-8w-3k',
    family: 'prf',
    name: 'Profile Micro',
    model: 'PRF-50-8W-3K',
    wattage: 8,
    cct: 3000,
    cri: 95,
    ip: 'IP20',
    description: 'پروفیل فوق‌فشرده برای یکپارچه‌سازی با مبلمان.',
  },
];