'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { useTranslation } from '@/components/LanguageProvider';

export default function ProjectsContent() {
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
