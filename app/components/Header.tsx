"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-[76px] flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
            aria-label="Winnett Fence home"
          >
            <Image
              src="/images/logo/winnett-fence-logo-header.png"
              alt="Winnett Fence"
              width={165}
              height={60}
              priority
              className="h-auto w-[145px] sm:w-[165px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
            <Link
              href="/services/fence-repair"
              className="hover:text-black transition"
            >
              Fence Repair
            </Link>

            <Link
              href="/services"
              className="hover:text-black transition"
            >
              Services
            </Link>

            <Link
              href="/#areas"
              className="hover:text-black transition"
            >
              Service Areas
            </Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8577029780"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black transition"
            >
              <Phone className="h-4 w-4" />
              857-702-9780
            </a>

            <Link
              href="/#quote-form"
              className="bg-black text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
            >
              Free Estimate
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:8577029780"
              aria-label="Call Winnett Fence"
              className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-800"
            >
              <Phone className="h-5 w-5" />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-800"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-5">
            <nav className="flex flex-col">
              <Link
                href="/services/fence-repair"
                onClick={closeMenu}
                className="py-3 text-base font-semibold text-gray-900"
              >
                Fence Repair
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="py-3 text-base font-medium text-gray-700"
              >
                All Services
              </Link>

              <Link
                href="/#areas"
                onClick={closeMenu}
                className="py-3 text-base font-medium text-gray-700"
              >
                Service Areas
              </Link>

              <a
                href="tel:8577029780"
                onClick={closeMenu}
                className="py-3 text-base font-medium text-gray-700"
              >
                Call 857-702-9780
              </a>
            </nav>

            <Link
              href="/#quote-form"
              onClick={closeMenu}
              className="mt-4 flex w-full items-center justify-center bg-black text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Request Free Estimate
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
