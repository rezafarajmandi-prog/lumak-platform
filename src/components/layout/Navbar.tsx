'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/components/LanguageProvider';

export default function Navbar() {
  const t = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // اسکرول فقط در صفحه اصلی
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setIsAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // قفل اسکرول هنگام باز بودن منو
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // رنگ‌ها
  let linkColor: string;
  let logoColor: string;
  let hamburgerColor: string;

  if (isHome) {
    linkColor = isAtTop
      ? 'text-white/90 hover:text-white'
      : 'text-steel hover:text-graphite dark:text-steel-light dark:hover:text-warmwhite';
    logoColor = isAtTop ? 'text-white' : 'text-graphite dark:text-warmwhite';
    hamburgerColor = isAtTop ? 'text-white' : 'text-graphite dark:text-warmwhite';
  } else {
    linkColor = 'text-steel hover:text-graphite dark:text-steel-light dark:hover:text-warmwhite';
    logoColor = 'text-graphite dark:text-warmwhite';
    hamburgerColor = 'text-graphite dark:text-warmwhite';
  }

  const headerClass = isHome
    ? isAtTop
      ? 'navbar-transparent'
      : 'bg-panel border-b border-steel/15 dark:border-bronze/10 shadow-md'
    : 'bg-panel border-b border-steel/15 dark:border-bronze/10 shadow-md';

  return (
    <>
      {/* هدر اصلی – فقط وقتی منو باز نیست نمایش داده شود */}
      {!isOpen && (
        <header className={`sticky top-0 z-50 h-18 transition-all duration-300 ${headerClass}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-8">
            <Link href="/" className={`font-heading font-bold text-xl tracking-tight transition-colors ${logoColor}`}>
              LUMAK
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/families" className={`transition-colors duration-150 ${linkColor}`}>
                {t.nav.families}
              </Link>
              <Link href="/projects" className={`transition-colors duration-150 ${linkColor}`}>
                {t.nav.projects}
              </Link>
              <Link href="/downloads" className={`transition-colors duration-150 ${linkColor}`}>
                {t.nav.downloads}
              </Link>
              <Link href="/contact" className={`transition-colors duration-150 ${linkColor}`}>
                {t.nav.contact}
              </Link>
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  {t.nav.requestSpecs}
                </Button>
              </Link>
            </nav>

            {/* دکمه همبرگری */}
            <button
              onClick={() => setIsOpen(true)}
              className={`md:hidden p-2 transition-colors ${hamburgerColor}`}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </header>
      )}

      {/* منوی موبایل – کاملاً مستقل از هدر، با z-index بالاتر */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-panel p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-graphite dark:text-warmwhite font-heading font-bold text-xl tracking-tight" onClick={() => setIsOpen(false)}>
              LUMAK
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-graphite dark:text-warmwhite p-2" aria-label="Close menu">
              ✕
            </button>
          </div>
          <nav className="space-y-6 text-lg text-steel dark:text-warmwhite">
            <Link href="/families" className="block hover:text-graphite dark:hover:text-white" onClick={() => setIsOpen(false)}>
              {t.nav.families}
            </Link>
            <Link href="/projects" className="block hover:text-graphite dark:hover:text-white" onClick={() => setIsOpen(false)}>
              {t.nav.projects}
            </Link>
            <Link href="/downloads" className="block hover:text-graphite dark:hover:text-white" onClick={() => setIsOpen(false)}>
              {t.nav.downloads}
            </Link>
            <Link href="/contact" className="block hover:text-graphite dark:hover:text-white" onClick={() => setIsOpen(false)}>
              {t.nav.contact}
            </Link>
          </nav>
          <div className="mt-12">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                {t.nav.requestSpecs}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}