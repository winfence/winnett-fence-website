import Link from "next/link";

export default function WoodFencePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Wood Fence Installation in Attleboro, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Wood fencing offers a classic look and can be customized to fit your
          property and style. Winnett Fence builds strong, attractive wood fences
          using quality materials and proven installation methods.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Privacy, picket, and decorative styles</li>
          <li>Pressure-treated and cedar options</li>
          <li>Custom layouts and heights</li>
          <li>Built for durability and longevity</li>
        </ul>

        <p className="text-gray-600 mb-10">
          From new installations to replacements, we serve homeowners throughout
          Attleboro and nearby Massachusetts communities.
        </p>

        <Link
          href="/#quote"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Request Free Estimate
        </Link>
      </div>
    </section>
  );
}
