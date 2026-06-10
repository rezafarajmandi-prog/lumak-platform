import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { families } from '@/data/families';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <Link href="/projects" className="text-steel hover:text-bronze transition-colors text-sm mb-6 inline-block">
        ← بازگشت به پروژه‌ها
      </Link>

      {/* تصویر پروژه (placeholder) */}
      <div className="aspect-[16/9] bg-gradient-to-br from-graphite-dark to-graphite-light rounded-md overflow-hidden mb-8">
        <div className="w-full h-full flex items-center justify-center text-steel">
          [Project Hero Image]
        </div>
      </div>

      <h1 className="text-h1 mb-2">{project.title}</h1>
      <p className="text-body-lg text-steel mb-6">{project.location} — {project.architect}</p>

      <p className="text-body text-warmwhite/80 mb-8">{project.description}</p>

      <h2 className="text-h3 mb-4">محصولات استفاده‌شده</h2>
      <div className="flex flex-wrap gap-3">
        {project.families.map((code) => {
          const fam = families.find((f) => f.code === code);
          return (
            <Link
              key={code}
              href={`/families/${fam?.slug ?? code}`}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                fam?.color ?? 'bg-steel'
              } text-warmwhite hover:opacity-80 transition-opacity`}
            >
              {fam?.name ?? code}
            </Link>
          );
        })}
      </div>
    </section>
  );
}