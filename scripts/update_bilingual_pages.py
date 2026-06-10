from pathlib import Path

files = {
    'src/app/page.tsx': """'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import ProductFamilyCard from '@/components/ui/ProductFamilyCard';
import { families } from '@/data/families';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useTranslation } from '@/components/LanguageProvider';

export default function Home() {
  const t = useTranslation();

  return (
    <>
      <section className="relative min-h-[calc(100vh-72px)] flex items-center bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-warmwhite/30 to-warmwhite dark:from-graphite/30 dark:to-graphite z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <h1 className="text-h1 md:text-6xl font-bold mb-6 max-w-3xl text-graphite dark:text-warmwhite">
            {t.home.heroTitle}
          </h1>
          <p className="text-body-lg text-steel max-w-2xl mb-8">
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/families">
              <Button variant="primary" size="lg">
                {t.home.exploreFamilies}
              </Button>
            </Link>
            <Link href="/downloads">
              <Button variant="secondary" size="lg">
                {t.home.downloadCatalog}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-h2 text-center mb-12 text-graphite dark:text-warmwhite">
            {t.home.familiesTitle}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((family) => (
            <ScrollReveal key={family.code}>
              <ProductFamilyCard family={family} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-panel border-y border-bronze/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">CRI 90+</span>
            <p className="text-caption text-steel mt-2">{t.home.specsFeature1}</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">IP20–IP67</span>
            <p className="text-caption text-steel mt-2">{t.home.specsFeature2}</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">{t.home.specsTitle}</span>
            <p className="text-caption text-steel mt-2">{t.home.specsFeature3}</p>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-light via-graphite to-graphite-dark" />
        <div className="absolute inset-0 bg-gradient-to-t from-warmwhite via-warmwhite/70 to-transparent dark:from-graphite dark:via-graphite/70 dark:to-transparent z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <span className="text-overline text-bronze">{t.home.featuredProjectLabel}</span>
          <h2 className="text-h2 md:text-4xl font-bold mt-2 max-w-2xl text-graphite dark:text-warmwhite">
            {t.home.featuredProjectTitle}
          </h2>
          <p className="text-body text-steel mt-4 max-w-lg">
            {t.home.featuredProjectDescription}
          </p>
          <div className="mt-6">
            <Link href="/projects">
              <Button variant="secondary" size="md">
                {t.home.featuredProjectCta}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-panel">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-h2 font-bold mb-4 text-graphite dark:text-warmwhite">
            {t.home.finalCtaTitle}
          </h2>
          <p className="text-body-lg text-steel mb-8">
            {t.home.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t.home.finalCtaPrimary}
              </Button>
            </Link>
            <Link href="/downloads">
              <Button variant="secondary" size="lg">
                {t.home.finalCtaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
""",
    'src/app/about/page.tsx': """'use client';

import { useTranslation } from '@/components/LanguageProvider';

export default function AboutPage() {
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
""",
    'src/app/contact/page.tsx': """'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { useTranslation } from '@/components/LanguageProvider';

export default function ContactPage() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    requestTypes: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const toggleRequestType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      requestTypes: prev.requestTypes.includes(type)
        ? prev.requestTypes.filter((t) => t !== type)
        : [...prev.requestTypes, type],
    }));
  };

  if (submitted) {
    return (
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-2xl mx-auto text-center">
        <div className="bg-graphite-light border border-bronze/20 rounded-md p-12">
          <h2 className="text-h2 text-warmwhite mb-4">{t.contact.thankYouTitle}</h2>
          <p className="text-body text-steel mb-6">{t.contact.thankYouText}</p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            {t.contact.submitAnother}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-h1 mb-4">{t.contact.title}</h1>
      <p className="text-body-lg text-steel mb-12">{t.contact.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label={t.contact.fullName}
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label={t.contact.company}
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-caption text-steel">{t.contact.jobTitle}</label>
            <select
              className="bg-graphite-light border border-steel/30 rounded-sm px-4 py-3 text-warmwhite text-body focus:border-bronze focus:outline-none"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            >
              <option value="">{t.contact.selectPlaceholder}</option>
              {t.contact.jobOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Input
            label={t.contact.email}
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <Input
          label={t.contact.phone}
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <fieldset>
          <legend className="text-caption text-steel mb-3">{t.contact.requestTypeLegend}</legend>
          <div className="flex flex-wrap gap-3">
            {t.contact.requestTypes.map((type) => (
              <label
                key={type}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors ${
                  formData.requestTypes.includes(type)
                    ? 'bg-bronze/20 border-bronze text-bronze-light'
                    : 'border-steel/30 text-steel hover:border-steel'
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.requestTypes.includes(type)}
                  onChange={() => toggleRequestType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <Textarea
          label={t.contact.projectDetails}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.contact.projectDetailsPlaceholder}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          {t.contact.submit}
        </Button>
      </form>
    </section>
  );
}
""",
    'src/app/downloads/page.tsx': """'use client';

import { downloads } from '@/data/downloads';
import DownloadCard from '@/components/ui/DownloadCard';
import { useTranslation } from '@/components/LanguageProvider';

export default function DownloadsPage() {
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
""",
    'src/app/families/page.tsx': """'use client';

import ProductFamilyCard from '@/components/ui/ProductFamilyCard';
import { families } from '@/data/families';
import { useTranslation } from '@/components/LanguageProvider';

export default function FamiliesPage() {
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
""",
    'src/app/projects/page.tsx': """'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { useTranslation } from '@/components/LanguageProvider';

export default function ProjectsPage() {
  const t = useTranslation();

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-h1 mb-4">{t.projects.title}</h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">{t.projects.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
""",
    'src/app/not-found.tsx': """'use client';

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
        <p className="text-body-lg text-steel max-w-md mx-auto mb-8">
          {t.notFound.message}
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">{t.notFound.button}</Button>
        </Link>
      </div>
    </section>
  );
}
""",
    'src/app/products/[id]/page.tsx': """import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { families } from '@/data/families';
import ProductPageClient from '@/components/pages/ProductPageClient';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const family = families.find((f) => f.slug === product.family);

  return <ProductPageClient product={product} family={family} />;
}
""",
    'src/app/families/[family]/page.tsx': """import { notFound } from 'next/navigation';
import { families } from '@/data/families';
import { products } from '@/data/products';
import FamilyPageClient from '@/components/pages/FamilyPageClient';

export async function generateStaticParams() {
  return families.map((f) => ({ family: f.slug }));
}

export default async function FamilyPage({ params }: { params: { family: string } }) {
  const familyData = families.find((f) => f.slug === params.family);

  if (!familyData) {
    notFound();
  }

  const familyProducts = products.filter((product) => product.family === params.family);

  return <FamilyPageClient familyData={familyData} familyProducts={familyProducts} />;
}
""",
    'src/components/pages/ProductPageClient.tsx': """'use client';

import { useTranslation, useLanguage } from '@/components/LanguageProvider';
import { translateField } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Family } from '@/data/families';
import { Product } from '@/data/products';

export default function ProductPageClient({ product, family }: { product: Product; family?: Family }) {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <Link
        href={`/families/${product.family}`}
        className="text-steel hover:text-bronze transition-colors text-sm mb-6 inline-block"
      >
        {t.product.backArrow}{' '}
        {t.product.backTo} {translateField(family?.name ?? product.family, language)}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        <div className="aspect-[4/3] bg-graphite-dark rounded-md overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-graphite-light to-graphite flex items-center justify-center text-steel">
            {t.product.imagePlaceholder}
          </div>
        </div>

        <div>
          <span className="text-overline text-bronze">{family?.code ?? product.family}</span>
          <h1 className="text-h1 mt-2 mb-2">{translateField(product.name, language)}</h1>
          <p className="text-caption text-steel mb-6">{product.model}</p>
          <p className="text-body text-steel mb-8">{translateField(product.description, language)}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">{t.product.power}</span>
              <p className="text-h4 text-warmwhite mt-1">{product.wattage}W</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">{t.product.cct}</span>
              <p className="text-h4 text-warmwhite mt-1">{product.cct}K</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">{t.product.cri}</span>
              <p className="text-h4 text-warmwhite mt-1">{product.cri}</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">{t.product.ip}</span>
              <p className="text-h4 text-warmwhite mt-1">{product.ip}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">{t.product.requestSpecs}</Button>
            <Button variant="secondary">{t.product.downloadDatasheet}</Button>
            <Button variant="ghost">{t.product.iesBim}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    'src/components/pages/FamilyPageClient.tsx': """'use client';

import { useTranslation } from '@/components/LanguageProvider';
import { translateField } from '@/lib/i18n';
import ProductCard from '@/components/ui/ProductCard';
import { Family } from '@/data/families';
import { Product } from '@/data/products';

export default function FamilyPageClient({ familyData, familyProducts }: { familyData: Family; familyProducts: Product[] }) {
  const t = useTranslation();
  const language = useTranslation ? useTranslation().language : 'en';

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <span className={`inline-block px-4 py-1 rounded-full text-xs font-medium ${familyData.color} text-warmwhite mb-4`}>
        {familyData.code}
      </span>
      <h1 className="text-h1 mb-4">
        {translateField(familyData.name, language)} {t.families.lighting}
      </h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">
        {translateField(familyData.description, language)}
      </p>

      {familyProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-steel text-body">{t.families.noProducts}</p>
      )}
    </section>
  );
}
""",
}

for path, content in files.items():
    file_path = Path(path)
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(content, encoding='utf-8')
    print(f'Wrote {file_path}')
