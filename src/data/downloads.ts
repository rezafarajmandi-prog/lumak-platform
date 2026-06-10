export type Download = {
  id: string;
  title: string;
  type: 'IES' | 'BIM' | 'Datasheet' | 'Catalog';
  family?: string; // slug family (lin, trk, ...)
  size: string; // e.g., "2.4 MB"
  format: string; // e.g., ".ies", ".rfa", ".pdf"
};

export const downloads: Download[] = [
  { id: 'ies-lin-120', title: 'داده فوتومتریک LIN-120', type: 'IES', family: 'lin', size: '45 KB', format: '.ies' },
  { id: 'ies-trk-60', title: 'داده فوتومتریک TRK-60', type: 'IES', family: 'trk', size: '52 KB', format: '.ies' },
  { id: 'bim-lin-family', title: 'کتابخانه Revit خانواده خطی', type: 'BIM', family: 'lin', size: '2.1 MB', format: '.rfa' },
  { id: 'bim-rec-family', title: 'کتابخانه Revit خانواده توکار', type: 'BIM', family: 'rec', size: '1.8 MB', format: '.rfa' },
  { id: 'ds-lin-120', title: 'دیتاشیت LIN-120', type: 'Datasheet', family: 'lin', size: '1.2 MB', format: '.pdf' },
  { id: 'cat-main', title: 'کاتالوگ محصولات LUMAK ۲۰۲۴', type: 'Catalog', size: '8.5 MB', format: '.pdf' },
  { id: 'cat-spec', title: 'راهنمای مشخصات', type: 'Catalog', size: '3.2 MB', format: '.pdf' },
];