'use client';

import { useTranslation } from '@/components/LanguageProvider';
import { downloads } from '@/data/downloads';
import DownloadCard from '@/components/ui/DownloadCard';

export default function DownloadsContent() {
  const t = useTranslation();
  const types = ['IES', 'BIM', 'Datasheet', 'Catalog'] as const;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-h1 mb-4">{t.downloads.title}</h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">{t.downloads.description}</p>

      {types.map((type) => {
        const items = downloads.filter((d) => d.type === type);
        if (items.length === 0) return null;
        return (
          <div key={type} className="mb-12">
            <h2 className="text-h2 mb-6">{t.downloadTypes[type]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <DownloadCard key={item.id} download={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
