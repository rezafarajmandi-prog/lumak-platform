import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-graphite-light pt-16 pb-8 px-4 md:px-8 border-t border-bronze/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ستون ۱: برند */}
        <div>
          <h3 className="text-warmwhite font-bold text-lg">LUMAK</h3>
          <p className="text-steel text-sm mt-1">Architecting Light</p>
        </div>

        {/* ستون ۲: خانواده محصولات */}
        <div>
          <h4 className="text-warmwhite text-sm font-semibold mb-3">Product Families</h4>
          <ul className="space-y-2 text-steel text-sm">
            <li><Link href="/families/lin">Linear</Link></li>
            <li><Link href="/families/trk">Track</Link></li>
            <li><Link href="/families/sur">Surface</Link></li>
            <li><Link href="/families/rec">Recessed</Link></li>
            <li><Link href="/families/ww">Wall Washer</Link></li>
            <li><Link href="/families/prf">Profiles</Link></li>
          </ul>
        </div>

        {/* ستون ۳: شرکت */}
        <div>
          <h4 className="text-warmwhite text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-steel text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/dealers">Dealers</Link></li>
          </ul>
        </div>

        {/* ستون ۴: منابع فنی */}
        <div>
          <h4 className="text-warmwhite text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-steel text-sm">
            <li><Link href="/downloads">IES Files</Link></li>
            <li><Link href="/downloads">BIM Objects</Link></li>
            <li><Link href="/downloads">Datasheets</Link></li>
            <li><Link href="/downloads">Catalogs</Link></li>
          </ul>
        </div>
      </div>

      {/* نوار پایین */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-steel/20 flex flex-col md:flex-row justify-between text-steel text-xs">
        <span>© 2024 LUMAK. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}