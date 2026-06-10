'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/components/LanguageProvider';

export default function NotFound() {
  const t = useTranslation();

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-h1 text-bronze mb-4">404</h1>
        <h2 className="text-h2 mb-4">{t.notFound.title}</h2>
        <p className="text-body-lg text-steel max-w-md mx-auto mb-8">{t.notFound.description}</p>
        <Link href="/">
          <Button variant="primary" size="lg">{t.notFound.backToHome}</Button>
        </Link>
      </div>
    </section>
  );
}