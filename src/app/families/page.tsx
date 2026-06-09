import ProductFamilyCard from '@/components/ui/ProductFamilyCard';
import { families } from '@/data/families';

export const metadata = {
  title: 'Product Families — LUMAK',
  description: 'Explore LUMAK architectural lighting families.',
};

export default function FamiliesPage() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-h1 mb-4">Product Families</h1>
      <p className="text-body-lg text-steel max-w-2xl mb-12">
        Six precision-engineered families for every architectural lighting requirement.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {families.map((family) => (
          <ProductFamilyCard key={family.code} family={family} />
        ))}
      </div>
    </section>
  );
}