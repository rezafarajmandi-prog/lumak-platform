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
    description: 'Slim continuous linear fixture for ceiling integration.',
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
    description: 'Compact linear solution for cove and accent lighting.',
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
    description: 'Adjustable track spot for retail and gallery.',
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
    description: 'Wide beam track light for exhibition spaces.',
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
    description: 'Surface-mounted downlight with architectural finish.',
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
    description: 'Minimal recessed downlight for clean ceilings.',
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
    description: 'Asymmetric optic for uniform wall illumination.',
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
    description: 'Ultra-compact profile for furniture integration.',
  },
];