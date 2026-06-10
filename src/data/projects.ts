export type Project = {
  id: string;
  title: string;
  location: string;
  architect: string;
  families: string[]; // کد خانواده‌های استفاده‌شده
  description: string;
  image?: string; // فعلاً placeholder
};

export const projects: Project[] = [
  {
    id: 'museum-contemporary',
    title: 'Museum of Contemporary Art',
    location: 'Tehran, Iran',
    architect: 'Habibeh Madjdabadi',
    families: ['LIN', 'WW'],
    description: 'نورپردازی خطی دقیق و دیوارشوی یکپارچه در سقف گالری برای ایجاد روشنایی یکنواخت بدون تجهیزات قابل مشاهده.',
  },
  {
    id: 'oceanview-lobby',
    title: 'Oceanview Hotel Lobby',
    location: 'Dubai, UAE',
    architect: 'Zaha Hadid Architects',
    families: ['TRK', 'SUR'],
    description: 'چراغ‌های ریلی و سطحی که خطوط معماری سیال و پرداخت‌های با کیفیت را برجسته می‌کنند.',
  },
  {
    id: 'silicon-tower',
    title: 'Silicon Tower Offices',
    location: 'Berlin, Germany',
    architect: 'David Chipperfield',
    families: ['REC', 'PRF'],
    description: 'چراغ‌های توکار و پروفیل‌های کوچک برای یک فضای کاری تمیز و سطح مشخصات با نیازهای CRI بالا.',
  },
];