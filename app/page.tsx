import QuoteForm from "./components/QuoteForm"

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
<section className="bg-zinc-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center">
      Fence Installation & Repair Services
    </h2>

    <p className="mt-4 text-center text-zinc-600 max-w-2xl mx-auto">
      Residential fencing services across Southern Massachusetts.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Repairs */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-3xl">🛠️</div>
        <h3 className="mt-3 text-xl font-semibold">Fence Repairs</h3>
        <p className="mt-2 text-zinc-600">
          Broken posts, leaning sections, sagging gates, and storm damage.
        </p>
        <a
          href="#quote"
          className="inline-block mt-4 font-medium text-emerald-600 hover:underline"
        >
          Request Free Estimate →
        </a>
      </div>

      {/* Vinyl */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-3xl">🧱</div>
        <h3 className="mt-3 text-xl font-semibold">Vinyl Fence Installation</h3>
        <p className="mt-2 text-zinc-600">
          Clean, durable, and low-maintenance fencing.
        </p>
        <a href="#quote" className="inline-block mt-4 font-medium text-emerald-600 hover:underline">
          Request Free Estimate →
        </a>
      </div>

      {/* Wood */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-3xl">🌲</div>
        <h3 className="mt-3 text-xl font-semibold">Wood Fence Installation</h3>
        <p className="mt-2 text-zinc-600">
          Privacy and classic New England style.
        </p>
        <a href="#quote" className="inline-block mt-4 font-medium text-emerald-600 hover:underline">
          Request Free Estimate →
        </a>
      </div>

      {/* Chain Link */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-3xl">🔗</div>
        <h3 className="mt-3 text-xl font-semibold">Chain-Link Fence</h3>
        <p className="mt-2 text-zinc-600">
          Affordable, durable, and practical fencing.
        </p>
        <a href="#quote" className="inline-block mt-4 font-medium text-emerald-600 hover:underline">
          Request Free Estimate →
        </a>
      </div>

      {/* Aluminum */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-3xl">🏗️</div>
        <h3 className="mt-3 text-xl font-semibold">Aluminum Fence</h3>
        <p className="mt-2 text-zinc-600">
          Decorative fencing with strength and longevity.
        </p>
        <a href="#quote" className="inline-block mt-4 font-medium text-emerald-600 hover:underline">
          Request Free Estimate →
        </a>
      </div>

    </div>
  </div>
</section>

    </main>
  )
}
