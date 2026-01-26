"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-black">
          Winnett Fence
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="hover:text-gray-600">
            Services
          </Link>
          <Link href="/#areas" className="hover:text-gray-600">
            Service Areas
          </Link>
          <Link href="/#quote" className="hover:text-gray-600">
            Free Estimate
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="#quote"
          className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-900 transition"
        >
          Request Free Estimate
        </a>
      </div>
    </header>
  );
}
