import QuoteForm from "./components/QuoteForm"
import ServicesSection from "./components/ServicesSection";

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

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
      
          <h2 className="text-3xl font-bold text-center">
            Why Homeowners Choose Winnett Fence
          </h2>
      
          <p className="mt-4 text-center text-zinc-600 max-w-2xl mx-auto">
            Straightforward service from a local fence contractor you can trust.
          </p>
      
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
      
            <div>
              <div className="text-4xl">🏠</div>
              <h3 className="mt-4 font-semibold">Local & Owner-Operated</h3>
              <p className="mt-2 text-sm text-zinc-600">
                You deal directly with the owner — no subcontractors, no runaround.
              </p>
            </div>
      
            <div>
              <div className="text-4xl">🛠️</div>
              <h3 className="mt-4 font-semibold">Repairs Welcome</h3>
              <p className="mt-2 text-sm text-zinc-600">
                From small fixes to full replacements, we don’t turn jobs away.
              </p>
            </div>
      
            <div>
              <div className="text-4xl">🧱</div>
              <h3 className="mt-4 font-semibold">Built to Last</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Quality materials and clean installs that hold up over time.
              </p>
            </div>
      
            <div>
              <div className="text-4xl">📞</div>
              <h3 className="mt-4 font-semibold">Fast, Clear Communication</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Quick responses, clear pricing, and no pressure.
              </p>
            </div>
      
          </div>
      
          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="#quote"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Request Free Estimate
            </a>
          </div>
      
        </div>
      </section>
    </main>
  )
}
