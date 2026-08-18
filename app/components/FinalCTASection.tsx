import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
          Free On-Site Estimates
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Fence Repair or a New Fence?
        </h2>

        <p className="text-zinc-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Tell us about your project and upload a few photos if you have them.
          Winnett Fence provides straightforward recommendations for fence
          repairs, replacements, and new installations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#quote-form"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 font-semibold px-8 py-4 rounded-xl hover:bg-zinc-100 transition"
          >
            Request Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="tel:8577029780"
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            <Phone className="h-4 w-4" />
            Call 857-702-9780
          </a>
        </div>

        <p className="text-sm text-zinc-400 mt-6">
          Serving Attleboro and surrounding Southeastern Massachusetts communities
        </p>
      </div>
    </section>
  );
}
