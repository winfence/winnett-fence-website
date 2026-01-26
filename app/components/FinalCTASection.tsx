import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Your Fence Project Started?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Get a fast, free estimate from a local Massachusetts fence contractor
          you can trust. No pressure. No obligation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#quote"
            className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Request Free Estimate
          </Link>

          <a
            href="tel:15085551234"
            className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition"
          >
            Call Now
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Serving Attleboro, Mansfield, Norton & surrounding towns
        </p>
      </div>
    </section>
  );
}
