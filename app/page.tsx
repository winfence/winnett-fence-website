import QuoteForm from "./components/QuoteForm";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import FinalCTASection from "./components/FinalCTASection";
import MobileCTA from "./components/MobileCTA";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      {/* HERO */}
      <section className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT: COPY */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Fence Repair & Installation
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Fence Repair & Installation in Southeastern Massachusetts
              </h1>

              <p className="mt-5 text-xl font-medium text-white max-w-xl">
                Broken fence? You may not need a whole new one.
              </p>

              <p className="mt-3 text-lg text-zinc-300 max-w-xl">
                Winnett Fence repairs vinyl, wood, chain-link and aluminum fences,
                including damaged panels, broken posts, gates, leaning sections
                and storm damage. We also provide complete new fence installations.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-200">
                <li>✅ Free on-site estimates</li>
                <li>✅ Licensed & insured</li>
                <li>✅ Fence repairs, replacements & new installs</li>
                <li>✅ Owner-operated — no subcontractors</li>
              </ul>

              <p className="mt-6 text-sm text-zinc-400">
                Serving Attleboro, Mansfield, Norton, North Attleboro & nearby towns
              </p>
            </div>

            {/* RIGHT: FORM */}
            <div
              id="quote-form"
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-zinc-900 scroll-mt-6"
            ><QuoteForm />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-zinc-100 border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium">
            <div>Locally Owned</div>
            <div>Fast Turnaround</div>
            <div>Quality Materials</div>
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
  )
}
