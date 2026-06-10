'use client';

import Link from 'next/link';
import Card from './Card';
import { useLanguage } from '@/components/LanguageProvider';
import { translateField } from '@/lib/i18n';
import { Family } from '@/data/families';

export default function ProductFamilyCard({ family }: { family: Family }) {
  const { language } = useLanguage();

  return (
    <Link href={`/families/${family.slug}`}>
      <Card hover className="group p-6 cursor-pointer">
        {/* برچسب کد خانواده (همیشه تیره با متن روشن) */}
        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium ${family.color} text-warmwhite mb-4`}>
          {family.code}
        </span>
        {/* عنوان خانواده */}
        <h4 className="text-h4 text-graphite dark:text-warmwhite group-hover:text-bronze-light transition-colors">
          {translateField(family.name, language)}
        </h4>
        {/* توضیح */}
        <p className="text-caption text-steel mt-2">
          {translateField(family.description, language)}
        </p>
      </Card>
    </Link>
  );
}