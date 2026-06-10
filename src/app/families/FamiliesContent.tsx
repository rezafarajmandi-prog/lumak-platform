'use client';

import ProductFamilyCard from '@/components/ui/ProductFamilyCard';
import { families } from '@/data/families';
import { useTranslation } from '@/components/LanguageProvider';

export default function FamiliesContent() {
  const t = useTranslation();

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-h1 mb-4">{t.families.title}</h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">{t.families.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {families.map((family) => (
          <ProductFamilyCard key={family.code} family={family} />
        ))}
      </div>
    </section>
  );
}
