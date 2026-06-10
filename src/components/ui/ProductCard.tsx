import Link from 'next/link';
import Card from './Card';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card hover className="group p-6">
        {/* تصویر placeholder (بعداً next/image) */}
        <div className="aspect-[4/3] bg-graphite-dark rounded-md mb-4 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-graphite-light to-graphite flex items-center justify-center text-steel text-xs">
            [Product Image]
          </div>
        </div>
        <h4 className="text-h4 text-graphite dark:text-warmwhite group-hover:text-bronze-light transition-colors">
          {product.name}
        </h4>
        <p className="text-caption text-steel mt-1">
          {product.model}
        </p>
        <div className="flex gap-3 mt-2 text-xs text-steel">
          <span>{product.wattage}W</span>
          <span>{product.cct}K</span>
          <span>CRI {product.cri}</span>
          <span>{product.ip}</span>
        </div>
      </Card>
    </Link>
  );
}