import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const towns = [
  { name: "Attleboro", slug: "/areas/attleboro-ma" },
  { name: "North Attleboro", slug: "/areas/north-attleboro-ma" },
  { name: "Mansfield", slug: "/areas/mansfield-ma" },
  { name: "Norton", slug: "/areas/norton-ma" },
  { name: "Foxborough", slug: "/areas/foxborough-ma" },
  { name: "Wrentham", slug: "/areas/wrentham-ma" },
  { name: "Plainville", slug: "/areas/plainville-ma" },
  { name: "Seekonk", slug: "/areas/seekonk-ma" },
  { name: "Rehoboth", slug: "/areas/rehoboth-ma" },
  { name: "Easton", slug: "/areas/easton-ma" },
];

export default function ServiceAreaSection() {
  return (
    <section id="areas" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MapPin className="h-10 w-10 mx-auto mb-4 text-black" />

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Local Fence Service
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Serving Southeastern Massachusetts
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Winnett Fence provides residential fence repair and installation
            throughout the Attleboro area and surrounding Southeastern
            Massachusetts communities.
          </p>
        </div>

        {/* TOWN LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {towns.map((town) => (
            <Link
              key={town.slug}
              href={town.slug}
              className="group bg-white rounded-xl border border-gray-200 px-4 py-5 text-center shadow-sm hover:shadow-md hover:border-gray-300 transition"
            >
              <span className="block font-semibold text-gray-900">
                {town.name}, MA
              </span>

              <span className="mt-2 inline-flex items-center gap-1 text-xs text-gray-500 group-hover:text-black transition">
                View local service
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* OUTSIDE LIST CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Don’t see your town listed? We may still be able to help.
          </p>

          <Link
            href="/#quote-form"
            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-gray-900 hover:underline"
          >
            Ask about your area
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
