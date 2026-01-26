import Link from "next/link";

export default function ChainLinkFencePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Chain Link Fence Installation in Attleboro, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Chain link fencing is a practical and affordable solution for both
          residential and commercial properties. Winnett Fence installs durable
          chain link fences that provide security without blocking visibility.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Residential and commercial installations</li>
          <li>Galvanized and vinyl-coated options</li>
          <li>Gates and enclosures</li>
          <li>Cost-effective fencing solutions</li>
        </ul>

        <p className="text-gray-600 mb-10">
          Serving Attleboro and surrounding Massachusetts towns with dependable
          chain link fence installation.
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
