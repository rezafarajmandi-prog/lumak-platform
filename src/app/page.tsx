'use client';

import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

// ---------- داده‌ها ----------
const heroSlides = [
  { type: 'image', src: '/images/hero/slide1.jpg', alt: 'Product 1' },
  { type: 'video', src: '/videos/product-demo.mp4', poster: '/images/hero/video-poster.jpg' },
  { type: 'image', src: '/images/hero/slide2.jpg', alt: 'Product 2' },
  { type: 'image', src: '/images/hero/slide3.jpg', alt: 'Product 3' },
];

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'موزه هنر معاصر',
    description: 'طرح روشنایی دقیق با ترکیب Linear و Wall Washer',
    image: '/images/projects/museum.jpg',
    link: '/projects/museum'
  },
  {
    id: 2,
    title: 'پروژه اداری',
    description: 'نورپردازی مدرن فضای کار',
    image: '/images/projects/office.jpg',
    link: '/projects/office'
  },
  {
    id: 3,
    title: 'هتل بوتیک',
    description: 'فضای گرم و دعوت‌کننده',
    image: '/images/projects/hotel.jpg',
    link: '/projects/hotel'
  },
  {
    id: 4,
    title: 'فروشگاه مفهومی',
    description: 'نمایش محصول با نورپردازی حرفه‌ای',
    image: '/images/projects/retail.jpg',
    link: '/projects/retail'
  },
];

interface SliderItem {
  id: string | number;
  name: string;
  description?: string;
  image: string;
  link: string;
  chips?: string[];
}

const newProducts: SliderItem[] = [
  { id: 'np1', name: 'لوستر مدرن X1', description: 'طراحی مینیمال و نورپردازی یکنواخت', image: '/images/products/x1.jpg', link: '/products/np1', chips: ['جدید'] },
  { id: 'np2', name: 'چراغ خطی LED', description: 'مناسب فضاهای اداری و تجاری', image: '/images/products/linear.jpg', link: '/products/np2', chips: [] },
  { id: 'np3', name: 'پنل سقفی', description: 'نصب آسان و بازده نوری بالا', image: '/images/products/panel.jpg', link: '/products/np3', chips: ['پرفروش'] },
  { id: 'np4', name: 'چراغ دیواری', description: 'نورپردازی دکوراتیو', image: '/images/products/wall.jpg', link: '/products/np4', chips: [] },
];

const families: SliderItem[] = [
  { id: 'fam1', name: 'Linear', description: 'روشنایی خطی پیوسته', image: '/images/families/linear.jpg', link: '/families/linear' },
  { id: 'fam2', name: 'Wall Washer', description: 'شستشوی نوری دیوارها', image: '/images/families/wallwasher.jpg', link: '/families/wallwasher' },
  { id: 'fam3', name: 'Downlight', description: 'نورپردازی سقفی متمرکز', image: '/images/families/downlight.jpg', link: '/families/downlight' },
  { id: 'fam4', name: 'Track', description: 'ریل‌های نورپردازی', image: '/images/families/track.jpg', link: '/families/track' },
  { id: 'fam5', name: 'Outdoor', description: 'نورپردازی فضای باز', image: '/images/families/outdoor.jpg', link: '/families/outdoor' },
  { id: 'fam6', name: 'Decorative', description: 'چراغ‌های دکوراتیو', image: '/images/families/deco.jpg', link: '/families/deco' },
];

// ---------- کامپوننت اسلایدر عمومی (با پشتیبانی از دو آرایش) ----------
const ContentSlider = ({
  items,
  height = 'h-64',
  variant = 'default'
}: {
  items: SliderItem[];
  height?: string;
  variant?: 'default' | 'textOutside';
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / itemsPerPage;
      sliderRef.current.scrollTo({ left: page * slideWidth * itemsPerPage, behavior: 'smooth' });
    }
  }, [itemsPerPage]);

  const nextPage = useCallback(() => {
    goToPage((currentPage + 1) % totalPages);
  }, [currentPage, totalPages, goToPage]);



  useEffect(() => {
    const interval = setInterval(nextPage, 4000);
    return () => clearInterval(interval);
  }, [nextPage]);

  return (


      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory -mx-2 px-2
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-steel/30 hover:scrollbar-thumb-steel/50
          [&::-webkit-scrollbar]:h-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-steel/30
          hover:[&::-webkit-scrollbar-thumb]:bg-steel/50"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#b0b0b050 transparent'
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2">
            {variant === 'textOutside' ? (
              /* آرایش: تصویر کارت کامل + متن در زیر آن (راست‌چین) */
              <div className="flex flex-col">
                <Link
                  href={item.link}
                  className="group block bg-white dark:bg-graphite-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className={`relative ${height} bg-steel/10`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.chips && item.chips.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {item.chips.map((chip) => (
                          <span
                            key={chip}
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              chip === 'جدید' ? 'bg-red-500 text-white' : 'bg-white/90 text-graphite'
                            }`}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
                {/* متن زیر کارت (خارج از کارت) */}
                <div className="mt-3 px-1" dir="rtl">
                  <h3 className="text-body font-semibold text-graphite dark:text-warmwhite text-right">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-caption text-steel mt-1 text-right">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              /* آرایش پیش‌فرض: تصویر و متن داخل یک کارت */
              <Link
                href={item.link}
                className="group block bg-white dark:bg-graphite-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`relative ${height} bg-steel/10`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.chips && item.chips.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            chip === 'جدید' ? 'bg-red-500 text-white' : 'bg-white/90 text-graphite'
                          }`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-body font-semibold text-graphite dark:text-warmwhite">{item.name}</h3>
                  {item.description && (
                    <p className="text-caption text-steel mt-1">{item.description}</p>
                  )}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
  );
};

// ---------- کارت پروژه (تصویر تمام کارت + مشخصات و دکمه روی تصویر) ----------
const ProjectCard = ({ project }: { project: ProjectItem }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow aspect-3/2">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
      <h3 className="text-body md:text-h4 font-semibold">{project.title}</h3>
      {project.description && (
        <p className="text-caption md:text-body mt-1 text-white/80">{project.description}</p>
      )}
      <div className="mt-3">
        <Link href={project.link}>
          <Button variant="primary" size="md">
            مشاهده پروژه
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

// ---------- صفحه اصلی ----------
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlides.length;
  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % totalSlides), [totalSlides]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides), [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Hero Slider */}
<section className="relative min-h-[calc(100vh+72px)] -mt-[72px] md:min-h-[calc(100vh+88px)] md:-mt-[88px] bg-graphite overflow-hidden">        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              {slide.type === 'image' ? (
                <Image src={slide.src} alt={slide.alt || ''} fill className="object-cover" priority={index === 0} />
              ) : (
                <video autoPlay muted loop playsInline poster={slide.poster} className="absolute inset-0 w-full h-full object-cover">
                  <source src={slide.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">   
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-warmwhite scale-125' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      {/* پروژه‌های منتخب */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-h2 text-center mb-12 text-graphite dark:text-warmwhite">پروژه‌های منتخب</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* جدیدترین محصولات (اسلایدر با متن خارج از کارت) */}
      <section className="py-16 md:py-24 bg-warmwhite-dark dark:bg-graphite-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-h2 text-center mb-12 text-graphite dark:text-warmwhite">جدیدترین محصولات</h2>
          </ScrollReveal>
          <ContentSlider items={newProducts} height="h-128" variant="textOutside" />
        </div>
      </section>

      {/* دسته‌بندی محصولات (اسلایدر با متن خارج از کارت) */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-h2 text-center mb-12 text-graphite dark:text-warmwhite">دسته‌بندی محصولات</h2>
        </ScrollReveal>
        <ContentSlider items={families} height="h-64" variant="textOutside" />
      </section>
    </>
  );
}