import Card from './Card';
import { Download } from '@/data/downloads';

const typeIcons: Record<Download['type'], string> = {
  IES: '💡',
  BIM: '🏗️',
  Datasheet: '📄',
  Catalog: '📘',
};

const typeColors: Record<Download['type'], string> = {
  IES: 'bg-info/20 text-info',
  BIM: 'bg-bronze/20 text-bronze-light',
  Datasheet: 'bg-steel/20 text-steel',
  Catalog: 'bg-graphite-light text-warmwhite',
};

export default function DownloadCard({ download }: { download: Download }) {
  return (
    <Card hover className="group p-6">
      <div className="flex items-start gap-4">
        <span className="text-2xl">{typeIcons[download.type]}</span>
        <div className="flex-1">
          <span className={`text-xs px-2 py-0.5 rounded-full inline-block mb-2 ${typeColors[download.type]}`}>
            {download.type}
          </span>
          <h4 className="text-h4 text-warmwhite group-hover:text-bronze-light transition-colors">
            {download.title}
          </h4>
          <div className="flex items-center gap-3 mt-2 text-caption text-steel">
            <span>{download.format}</span>
            <span>{download.size}</span>
            {download.family && <span className="uppercase">{download.family}</span>}
          </div>
        </div>
        <span className="text-steel group-hover:text-bronze transition-colors text-lg">↓</span>
      </div>
    </Card>
  );
}