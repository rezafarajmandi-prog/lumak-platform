'use client';

import { useTranslation } from '@/components/LanguageProvider';

export default function AboutContent() {
  const t = useTranslation();

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-h1 mb-6">{t.about.title}</h1>
      <div className="prose prose-invert max-w-none space-y-6">
        {t.about.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-steel">
            {paragraph}
          </p>
        ))}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">CRI 90+</span>
            <p className="text-caption text-steel mt-2">{t.about.feature1}</p>
          </div>
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">IP20–IP67</span>
            <p className="text-caption text-steel mt-2">{t.about.feature2}</p>
          </div>
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">BIM</span>
            <p className="text-caption text-steel mt-2">{t.about.feature3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
