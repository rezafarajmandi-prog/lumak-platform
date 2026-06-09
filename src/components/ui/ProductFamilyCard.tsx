import Link from 'next/link';
import Card from './Card';
import { Family } from '@/data/families';

export default function ProductFamilyCard({ family }: { family: Family }) {
  return (
    <Link href={`/families/${family.slug}`}>
      <Card hover className="group p-6 cursor-pointer">
        {/* Overline رنگی */}
        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium ${family.color} text-warmwhite mb-4`}>
          {family.code}
        </span>
        <h4 className="text-h4 text-warmwhite group-hover:text-bronze-light transition-colors">
          {family.name}
        </h4>
        <p className="text-caption text-steel mt-2">
          {family.description}
        </p>
      </Card>
    </Link>
  );
}