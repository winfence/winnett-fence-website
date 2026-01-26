import QuoteForm from "./components/QuoteForm"
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServiceAreaSection from "./components/ServiceAreaSection";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT: COPY */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Residential Fence Installation & Repairs in Southern Massachusetts
              </h1>

              <p className="mt-5 text-lg text-zinc-300 max-w-xl">
                Vinyl, wood, chain-link & aluminum fencing — installed right,
                repaired fast, and built to last.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-200">
                <li>✅ Free on-site estimates</li>
                <li>✅ Licensed & insured</li>
                <li>✅ Repairs, replacements & new installs</li>
                <li>✅ Owner-operated — no subcontractors</li>
              </ul>

              <p className="mt-6 text-sm text-zinc-400">
                Serving Attleboro, Mansfield, Norton, North Attleboro & nearby towns
              </p>
            </div>

            {/* RIGHT: FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-zinc-900">
              <QuoteForm />
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
      <ServicesSection />
      <WhyChooseSection />
      <ServiceAreaSection />
    </main>
  )
}
