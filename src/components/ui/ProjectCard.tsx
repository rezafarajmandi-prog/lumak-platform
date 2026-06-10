'use client';

import Link from 'next/link';
import Card from './Card';
import { useLanguage } from '@/components/LanguageProvider';
import { translateField } from '@/lib/i18n';
import { Project } from '@/data/projects';
import { families } from '@/data/families';

export default function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <Link href={`/projects/${project.id}`}>
      <Card hover className="group">
        {/* تصویر پروژه (placeholder) */}
        <div className="aspect-[16/9] bg-gradient-to-br from-graphite-dark to-graphite-light overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-steel text-sm">
            [Project Image]
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-h4 text-graphite dark:text-warmwhite group-hover:text-bronze-light transition-colors">
            {translateField(project.title, language)}
          </h4>
          <p className="text-caption text-steel mt-1">{project.location}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.families.map((code) => {
              const fam = families.find((f) => f.code === code);
              return (
                <span
                  key={code}
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    fam?.color ?? 'bg-steel'
                  } text-warmwhite`}
                >
                  {code}
                </span>
              );
            })}
          </div>
        </div>
      </Card>
    </Link>
  );
}