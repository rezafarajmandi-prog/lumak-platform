import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { families } from '@/data/families';
import Button from '@/components/ui/Button';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const family = families.find((f) => f.slug === product.family);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* برگشت به خانواده */}
      <Link
        href={`/families/${product.family}`}
        className="text-steel hover:text-bronze transition-colors text-sm mb-6 inline-block"
      >
        ← بازگشت به {family?.name ?? product.family}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        {/* تصویر محصول (placeholder) */}
        <div className="aspect-[4/3] bg-graphite-dark rounded-md overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-graphite-light to-graphite flex items-center justify-center text-steel">
            [Product Image]
          </div>
        </div>

        {/* اطلاعات محصول */}
        <div>
          <span className="text-overline text-bronze">{family?.code ?? product.family}</span>
          <h1 className="text-h1 mt-2 mb-2">{product.name}</h1>
          <p className="text-caption text-steel mb-6">{product.model}</p>
          <p className="text-body text-steel mb-8">{product.description}</p>

          {/* مشخصات فنی */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">توان</span>
              <p className="text-h4 text-warmwhite mt-1">{product.wattage}W</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">CCT</span>
              <p className="text-h4 text-warmwhite mt-1">{product.cct}K</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">CRI</span>
              <p className="text-h4 text-warmwhite mt-1">{product.cri}</p>
            </div>
            <div className="border border-steel/20 rounded-sm p-4">
              <span className="text-caption text-steel">محافظت نفوذ</span>
              <p className="text-h4 text-warmwhite mt-1">{product.ip}</p>
            </div>
          </div>

          {/* دکمه‌های دانلود و درخواست */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">درخواست مشخصات</Button>
            <Button variant="secondary">دانلود دیتاشیت</Button>
            <Button variant="ghost">IES / BIM</Button>
          </div>
        </div>
      </div>
    </section>
  );
}