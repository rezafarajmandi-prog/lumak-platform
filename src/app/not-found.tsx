import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-h1 text-bronze mb-4">404</h1>
        <h2 className="text-h2 mb-4">Page not found</h2>
        <p className="text-body-lg text-steel max-w-md mx-auto mb-8">
          The page you requested does not exist. It may have been moved or deleted.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">Return Home</Button>
        </Link>
      </div>
    </section>
  );
}