import { notFound } from 'next/navigation';
import { families } from '@/data/families';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

// برای generateStaticParams (اختیاری)
export async function generateStaticParams() {
  return families.map((f) => ({ family: f.slug }));
}

export default async function FamilyPage({ params }: { params: Promise<{ family: string }> }) {
  const { family } = await params;
  const familyData = families.find((f) => f.slug === family);

  if (!familyData) {
    notFound();
  }

  const familyProducts = products.filter((p) => p.family === family);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* کد خانواده + عنوان */}
      <span className={`inline-block px-4 py-1 rounded-full text-xs font-medium ${familyData.color} text-warmwhite mb-4`}>
        {familyData.code}
      </span>
      <h1 className="text-h1 mb-4">روشنایی {familyData.name}</h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">
        {familyData.description}
      </p>

      {/* گرید محصولات */}
      {familyProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-steel text-body">فعلاً محصولی برای این خانواده در دسترس نیست.</p>
      )}
    </section>
  );
}