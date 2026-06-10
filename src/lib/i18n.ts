export type Language = 'fa' | 'en';

export type TranslatedString = {
  en: string;
  fa: string;
};

export const defaultLanguage: Language = 'fa';

export function getDirection(language: Language) {
  return language === 'fa' ? 'rtl' : 'ltr';
}

export function translateField(field: TranslatedString | string, language: Language) {
  return typeof field === 'string' ? field : field[language] ?? field.en;
}

export const translations = {
  fa: {
    nav: {
      families: 'خانواده‌های محصول',
      projects: 'پروژه‌ها',
      downloads: 'دانلودها',
      contact: 'تماس',
      about: 'درباره',
      requestSpecs: 'درخواست مشخصات',
      languageButton: 'EN',
      languageToggle: 'تغییر زبان',
    },
    footer: {
      brandLine: 'معماری نور',
      familiesHeading: 'خانواده‌های محصول',
      company: 'شرکت',
      resources: 'منابع',
      dealers: 'نمایندگی‌ها',
      privacy: 'سیاست حفظ حریم خصوصی',
      terms: 'شرایط استفاده',
      copyright: '© 2024 LUMAK. تمامی حقوق محفوظ است.',
    },
    home: {
      heroTitle: 'معماری نور. مهندسی دقت.',
      heroSubtitle:
        'نورپردازی معماری مهندسی‌شده آلمان برای پروژه‌هایی که عملکرد تخصصی و طراحی بدون مصالحه را طلب می‌کنند.',
      exploreFamilies: 'بررسی خانواده‌های محصول',
      downloadCatalog: 'دانلود کاتالوگ',
      familiesTitle: 'خانواده‌های محصول',
      specsTitle: 'مشخصات فنی',
      specsFeature1: 'نمایش رنگی واقعی برای فضاهای معماری',
      specsFeature2: 'حفاظت نفوذ در هر محیطی',
      specsFeature3: 'خروجی سفارشی برای عملکرد سطح مشخصات',
      featuredProjectLabel: 'پروژه منتخب',
      featuredProjectTitle: 'موزه هنر معاصر',
      featuredProjectDescription:
        'طرح روشنایی دقیق با ترکیب خانواده‌های Linear و Wall Washer برای روشنایی فضاهای گالری بدون هیچ‌گونه مصالحه.',
      featuredProjectCta: 'مشاهده پروژه →',
      finalCtaTitle: 'آماده مشخص کردن هستید؟',
      finalCtaSubtitle:
        'تیم مهندسی ما آماده پشتیبانی از پروژه بعدی شما با داده‌های فنی، نمونه‌ها و راهنمایی‌های مشخصاتی است.',
      finalCtaPrimary: 'درخواست مشخصات',
      finalCtaSecondary: 'دانلود منابع',
    },
    about: {
      title: 'درباره LUMAK',
      paragraphs: [
        'LUMAK یک برند نورپردازی معماری مهندسی‌شده آلمان است که بر سه ارزش اصلی بنا شده است: اعتماد، دقت، و نوآوری.',
        'نورافکن‌های ما برای پروژه‌های سطح مشخصات طراحی شده‌اند، جایی که عملکرد قابل مصالحه نیست. از سیستم‌های خطی تا چراغ‌های توکار، هر محصول با ذهنیتی معماری توسعه می‌یابد — نور هرگز تزئینی نیست؛ ساختاری است.',
        'ما به معماران، طراحان داخلی، مشاوران نورپردازی و پیمانکارانی خدمت می‌دهیم که داده‌های فوتومتریک دقیق، یکپارچه‌سازی BIM و زمان تحویل قابل‌اعتماد می‌خواهند.',
      ],
      feature1: 'حداقل بازتولید رنگ در همه خانواده‌ها',
      feature2: 'محافظت نفوذ برای هر محیطی',
      feature3: 'کتابخانه‌های Revit، فایل‌های IES و دیتاشیت کامل',
    },
    downloads: {
      title: 'مرکز دانلود',
      description: 'دسترسی به فایل‌های فوتومتریک، کتابخانه‌های BIM، دیتاشیت‌های فنی و کاتالوگ‌های محصول.',
    },
    contact: {
      title: 'تماس با LUMAK',
      subtitle: 'درخواست مشخصات فنی، قیمت یا مشاوره پروژه.',
      thankYouTitle: 'با تشکر',
      thankYouText: 'درخواست شما ثبت شد. تیم مشخصات ما ظرف ۲۴ ساعت پاسخ خواهد داد.',
      submitAnother: 'ارسال درخواست جدید',
      fullName: 'نام کامل',
      company: 'شرکت / مجموعه',
      jobTitle: 'عنوان شغلی',
      email: 'ایمیل',
      phone: 'تلفن (اختیاری)',
      requestTypeLegend: 'نوع درخواست',
      requestTypes: ['مشاوره پروژه', 'درخواست کاتالوگ', 'قیمت‌گذاری', 'نمایندگی'],
      jobOptions: [
        { value: 'Architect', label: 'معمار' },
        { value: 'Interior Designer', label: 'طراح داخلی' },
        { value: 'Contractor', label: 'پیمانکار' },
        { value: 'Developer', label: 'توسعه‌دهنده' },
        { value: 'Other', label: 'سایر' },
      ],
      selectPlaceholder: 'انتخاب...',
      projectDetails: 'جزئیات پروژه (اختیاری)',
      projectDetailsPlaceholder: 'به‌طور خلاصه نیازهای پروژه را شرح دهید...',
      submit: 'ارسال درخواست',
    },
    families: {
      title: 'خانواده‌های محصول',
      description: 'مرور خانواده‌های نورپردازی معماری برای انتخاب راهکار مناسب پروژه.',
      noProducts: 'فعلاً محصولی برای این خانواده در دسترس نیست.',
      lighting: 'روشنایی',
    },
    projects: {
      title: 'پروژه‌ها',
      description: 'پروژه‌های منتخب نورپردازی معماری که دقت را با طراحی ملاقات می‌کنند.',
      usedProducts: 'محصولات استفاده‌شده',
    },
    notFound: {
      title: 'صفحه پیدا نشد',
      message: 'صفحه‌ای که درخواست کرده‌اید وجود ندارد. ممکن است منتقل یا حذف شده باشد.',
      description: 'صفحه‌ای که درخواست کرده‌اید وجود ندارد. ممکن است منتقل یا حذف شده باشد.',
      button: 'بازگشت به صفحه اصلی',
      backToHome: 'بازگشت به صفحه اصلی',
    },
    product: {
      backTo: 'بازگشت به',
      requestSpecs: 'درخواست مشخصات',
      downloadDatasheet: 'دانلود دیتاشیت',
      iesBim: 'IES / BIM',
      power: 'توان',
      cct: 'CCT',
      cri: 'CRI',
      ip: 'محافظت نفوذ',
      imagePlaceholder: '[تصویر محصول]',
      usedProducts: 'محصولات استفاده‌شده',
      backArrow: '←',
    },
    common: {
      projectImagePlaceholder: '[تصویر پروژه]',
      seeMore: 'مشاهده بیشتر',
    },
    downloadTypes: {
      Datasheet: 'دیتاشیت',
      Catalog: 'کاتالوگ',
      IES: 'IES',
      BIM: 'BIM',
    },
  },
  en: {
    nav: {
      families: 'Product Families',
      projects: 'Projects',
      downloads: 'Downloads',
      contact: 'Contact',
      about: 'About',
      requestSpecs: 'Request Specs',
      languageButton: 'FA',
      languageToggle: 'Switch language',
    },
    footer: {
      brandLine: 'Architecting Light',
      productFamilies: 'Product Families',
      company: 'Company',
      resources: 'Resources',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    home: {
      heroTitle: 'Architecting Light. Engineering Precision.',
      heroSubtitle:
        'German-engineered architectural lighting for projects that demand specialized performance and uncompromising design.',
      exploreFamilies: 'Explore product families',
      downloadCatalog: 'Download catalog',
      familiesTitle: 'Product Families',
      specsTitle: 'Technical performance',
      specsFeature1: 'True color rendering for architectural spaces',
      specsFeature2: 'Ingress protection for any environment',
      specsFeature3: 'Custom lumen packages for specification-grade performance',
      featuredProjectLabel: 'Featured Project',
      featuredProjectTitle: 'Museum of Contemporary Art',
      featuredProjectDescription:
        'Precision lighting design combining Linear and Wall Washer families to illuminate gallery spaces without compromise.',
      featuredProjectCta: 'View project →',
      finalCtaTitle: 'Ready to specify?',
      finalCtaSubtitle:
        'Our engineering team is ready to support your next project with technical data, samples, and specification guidance.',
      finalCtaPrimary: 'Request specs',
      finalCtaSecondary: 'Download resources',
    },
    about: {
      title: 'About LUMAK',
      paragraphs: [
        'LUMAK is a German-engineered architectural lighting brand built on three core values: trust, precision, and innovation.',
        'Our luminaires are designed for specification-grade projects where performance cannot be compromised. From linear systems to recessed downlights, every product is developed with an architectural mindset — the light is never decorative; it is structural.',
        'We serve architects, interior designers, lighting consultants, and contractors who demand accurate photometric data, BIM integration, and dependable lead times.',
      ],
      feature1: 'Minimum color rendering across all families',
      feature2: 'Ingress protection for any environment',
      feature3: 'Revit families, IES files, and full datasheets',
    },
    downloads: {
      title: 'Download Center',
      description: 'Access photometry files, BIM libraries, datasheets, and product catalogs.',
    },
    contact: {
      title: 'Contact LUMAK',
      subtitle: 'Request technical specifications, pricing, or project consultation.',
      thankYouTitle: 'Thank you',
      thankYouText: 'Your inquiry has been received. Our specification team will respond within 24 hours.',
      submitAnother: 'Submit another request',
      fullName: 'Full Name',
      company: 'Company / Firm',
      jobTitle: 'Job Title',
      email: 'Email',
      phone: 'Phone (optional)',
      requestTypeLegend: 'Request Type',
      requestTypes: ['Project Consultation', 'Catalog Request', 'Pricing', 'Dealership'],
      jobOptions: [
        { value: 'Architect', label: 'Architect' },
        { value: 'Interior Designer', label: 'Interior Designer' },
        { value: 'Contractor', label: 'Contractor' },
        { value: 'Developer', label: 'Developer' },
        { value: 'Other', label: 'Other' },
      ],
      selectPlaceholder: 'Choose...',
      projectDetails: 'Project Details (optional)',
      projectDetailsPlaceholder: 'Briefly describe your project needs...',
      submit: 'Send Inquiry',
    },
    families: {
      title: 'Product Families',
      description: 'Browse architectural lighting families to choose the right system for your project.',
      noProducts: 'No products available for this family at the moment.',
      lighting: 'Lighting',
    },
    projects: {
      title: 'Projects',
      description: 'Selected architectural lighting projects where precision meets design.',
      usedProducts: 'Used products',
    },
    notFound: {
      title: 'Page not found',
      message: 'The page you requested does not exist. It may have been moved or deleted.',
      description: 'The page you requested does not exist. It may have been moved or deleted.',
      button: 'Back to home',
      backToHome: 'Back to home',
    },
    product: {
      backTo: 'Back to',
      requestSpecs: 'Request specifications',
      downloadDatasheet: 'Download datasheet',
      iesBim: 'IES / BIM',
      power: 'Power',
      cct: 'CCT',
      cri: 'CRI',
      ip: 'Ingress protection',
      imagePlaceholder: '[Product Image]',
      usedProducts: 'Used products',
      backArrow: '←',
    },
    common: {
      projectImagePlaceholder: '[Project Image]',
      seeMore: 'See more',
    },
    downloadTypes: {
      Datasheet: 'Datasheet',
      Catalog: 'Catalog',
      IES: 'IES',
      BIM: 'BIM',
    },
  },
} as const;

export type Translations = typeof translations[keyof typeof translations];
