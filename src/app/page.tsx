import Button from "@/components/ui/Button";
import Link from "next/link";
import ProductFamilyCard from "@/components/ui/ProductFamilyCard";
import { families } from "@/data/families";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/30 to-graphite z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <h1 className="text-h1 md:text-6xl font-bold mb-6 max-w-3xl">
            Architecting Light.
            <br />
            Engineering Precision.
          </h1>
          <p className="text-body-lg text-steel max-w-2xl mb-8">
            German-engineered architectural lighting for projects that demand
            specification-grade performance and uncompromising design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/families">
              <Button variant="primary" size="lg">
                Explore Product Families
              </Button>
            </Link>
            <Link href="/downloads">
              <Button variant="secondary" size="lg">
                Download Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Product Families Grid */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-h2 text-center mb-12">Product Families</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((family) => (
            <ProductFamilyCard key={family.code} family={family} />
          ))}
        </div>
      </section>
      {/* Spec Callout */}
      <section className="py-16 md:py-24 bg-graphite-light border-y border-bronze/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">
              CRI 90+
            </span>
            <p className="text-caption text-steel mt-2">
              True color rendering for architectural spaces
            </p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">
              IP20–IP67
            </span>
            <p className="text-caption text-steel mt-2">
              Ingress protection for any environment
            </p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold text-bronze">
              Lumen Packages
            </span>
            <p className="text-caption text-steel mt-2">
              Tailored output for specification-grade performance
            </p>
          </div>
        </div>
      </section>
      Featured Project
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        {/* پس‌زمینه موقت (بعداً با next/image جایگزین می‌شود) */}
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-light via-graphite to-graphite-dark" />

        {/* Overlay تیره از پایین */}
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-transparent z-10" />

        {/* محتوای پروژه */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <span className="text-overline text-bronze">Featured Project</span>
          <h2 className="text-h2 md:text-4xl font-bold mt-2 max-w-2xl">
            Museum of Contemporary Art
          </h2>
          <p className="text-body text-steel mt-4 max-w-lg">
            A precision lighting scheme integrating Linear and Wall Washer
            families to illuminate gallery spaces without compromise.
          </p>
          <div className="mt-6">
            <Link href="/projects">
              <Button variant="secondary" size="md">
                View Project →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-graphite-light">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-h2 font-bold mb-4">Ready to specify?</h2>
          <p className="text-body-lg text-steel mb-8">
            Our engineering team is available to support your next project with
            technical data, samples, and specification guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request Specification
              </Button>
            </Link>
            <Link href="/downloads">
              <Button variant="secondary" size="lg">
                Download Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
