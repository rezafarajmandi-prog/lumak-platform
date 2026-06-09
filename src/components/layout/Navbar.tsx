'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-graphite/95 backdrop-blur-md border-b border-bronze/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-8">
        {/* لوگو */}
        <Link href="/" className="text-warmwhite font-heading font-bold text-xl tracking-tight">
          LUMAK
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-8 text-steel text-sm">
          <Link href="/families" className="hover:text-warmwhite transition-colors duration-150">
            Product Families
          </Link>
          <Link href="/projects" className="hover:text-warmwhite transition-colors duration-150">
            Projects
          </Link>
          <Link href="/downloads" className="hover:text-warmwhite transition-colors duration-150">
            Downloads
          </Link>
          <Link href="/contact" className="hover:text-warmwhite transition-colors duration-150">
            Contact
          </Link>
        </nav>

        {/* دکمه CTA و همبرگر */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button variant="primary" size="sm">
              Request Spec
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-warmwhite p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-graphite-light border-b border-bronze/10 p-4 space-y-4">
          <Link
            href="/families"
            className="block text-steel hover:text-warmwhite py-2"
            onClick={() => setIsOpen(false)}
          >
            Product Families
          </Link>
          <Link
            href="/projects"
            className="block text-steel hover:text-warmwhite py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/downloads"
            className="block text-steel hover:text-warmwhite py-2"
            onClick={() => setIsOpen(false)}
          >
            Downloads
          </Link>
          <Link
            href="/contact"
            className="block text-steel hover:text-warmwhite py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="md" className="w-full">
              Request Spec
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}