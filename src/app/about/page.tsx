export const metadata = {
  title: 'About — LUMAK',
  description: 'LUMAK: Architecting Light since 2020.',
};

export default function AboutPage() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-h1 mb-6">About LUMAK</h1>
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-body-lg text-steel">
          LUMAK is a German-engineered architectural lighting brand built on three
          core values: <strong className="text-warmwhite">Trust</strong>,{' '}
          <strong className="text-warmwhite">Precision</strong>, and{' '}
          <strong className="text-warmwhite">Innovation</strong>.
        </p>
        <p className="text-body text-steel">
          Our luminaires are designed for specification-grade projects where
          performance cannot be compromised. From linear systems to recessed
          downlights, every product is developed with an architectural mindset —
          the light is never decorative; it is structural.
        </p>
        <p className="text-body text-steel">
          We serve architects, interior designers, lighting consultants, and
          contractors who demand accurate photometric data, BIM integration, and
          dependable lead times.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">CRI 90+</span>
            <p className="text-caption text-steel mt-2">Minimum color rendering across all families</p>
          </div>
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">IP20–IP67</span>
            <p className="text-caption text-steel mt-2">Ingress protection for any environment</p>
          </div>
          <div className="border border-steel/20 rounded-md p-6 text-center">
            <span className="text-h3 text-bronze">BIM Ready</span>
            <p className="text-caption text-steel mt-2">Revit families, IES files, and full datasheets</p>
          </div>
        </div>
      </div>
    </section>
  );
}