// app/page.tsx
import QuoteForm from "./components/QuoteForm";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(255,255,255,0.08),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: COPY */}
          <div>
            <span className="inline-block mb-4 rounded-full border border-white/20 px-4 py-1 text-sm tracking-wide">
              Serving Attleboro & Surrounding MA Towns
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Quality Fence Repair
              <br />
              You Can Trust
            </h1>

            <p className="text-lg text-neutral-300 max-w-xl mb-8">
              Expert fence repairs and installations for homeowners who care about craftsmanship, durability, and doing it right the first time.
            </p>

            <ul className="space-y-3 text-neutral-200">
              <li>✔ Fence repair specialists</li>
              <li>✔ Vinyl, wood, chain link & aluminum</li>
              <li>✔ Local, licensed & insured</li>
            </ul>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:pl-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg">Repair-Focused</h3>
            <p className="text-gray-600 mt-2">We specialize in fixing fences — not just replacing them.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Straightforward Pricing</h3>
            <p className="text-gray-600 mt-2">Honest recommendations and fair, transparent quotes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Local & Reliable</h3>
            <p className="text-gray-600 mt-2">Proudly serving Attleboro-area homeowners.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
