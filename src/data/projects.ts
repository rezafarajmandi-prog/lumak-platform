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
    description: 'Precision linear and wall-washing lighting integrated within gallery ceilings to create uniform illumination without visible fixtures.',
  },
  {
    id: 'oceanview-lobby',
    title: 'Oceanview Hotel Lobby',
    location: 'Dubai, UAE',
    architect: 'Zaha Hadid Architects',
    families: ['TRK', 'SUR'],
    description: 'Track and surface-mounted luminaires accentuating fluid architectural lines and premium material finishes.',
  },
  {
    id: 'silicon-tower',
    title: 'Silicon Tower Offices',
    location: 'Berlin, Germany',
    architect: 'David Chipperfield',
    families: ['REC', 'PRF'],
    description: 'Recessed downlights and micro profiles for a clean, specification-grade workspace with high CRI requirements.',
  },
];