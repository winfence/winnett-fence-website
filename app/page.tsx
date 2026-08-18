import Link from "next/link";
import {
  CheckCircle2,
  Wrench,
} from "lucide-react";

import QuoteForm from "./components/QuoteForm";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import FinalCTASection from "./components/FinalCTASection";
import MobileCTA from "./components/MobileCTA";

const trustPoints = [
  "Free on-site estimates",
  "Licensed & insured",
  "Fence repairs, replacements & new installs",
  "Owner-operated — no subcontractors",
];

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      {/* HERO */}
      <section className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT: COPY */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Fence Repair & Installation
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Fence Repair & Installation in Southeastern Massachusetts
              </h1>

              <p className="mt-6 text-xl font-medium text-white max-w-xl">
                Broken fence? You may not need a whole new one.
              </p>

              <p className="mt-3 text-lg text-zinc-300 max-w-xl leading-relaxed">
                Winnett Fence repairs vinyl, wood, chain-link and aluminum
                fences, including damaged panels, broken posts, gates, leaning
                sections and storm damage. We also provide complete new fence
                installations.
              </p>

              <div className="mt-7 space-y-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-zinc-200"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services/fence-repair"
                  className="inline-flex items-center gap-2 border border-zinc-600 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition"
                >
                  <Wrench className="h-4 w-4" />
                  Fence Repair Services
                </Link>

                <a
                  href="tel:8577029780"
                  className="inline-flex items-center px-6 py-3 font-semibold text-zinc-200 hover:text-white transition"
                >
                  Call 857-702-9780
                </a>
              </div>

              <p className="mt-7 text-sm text-zinc-400">
                Serving Attleboro and surrounding Southeastern Massachusetts
                communities
              </p>
            </div>

            {/* RIGHT: FORM */}
            <div
              id="quote-form"
              className="scroll-mt-24"
            >
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-zinc-800">
            <div>Locally Owned</div>
            <div>Owner-Operated</div>
            <div>Licensed & Insured</div>
            <div>Free Estimates</div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ProjectsSection />
      <ServicesSection />
      <WhyChooseSection />
      <ServiceAreaSection />
      <FAQSection />
      <FinalCTASection />

      <MobileCTA />
    </main>
  );
}
