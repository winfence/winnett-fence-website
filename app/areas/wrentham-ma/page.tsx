import Link from "next/link";

export default function WrenthamCityPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fence Contractor in Wrentham, MA
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Winnett Fence delivers reliable fence installation and repair services
          throughout Wrentham, Massachusetts.
        </p>
        <Link href="/#quote" className="bg-white text-black px-8 py-4 rounded-lg font-medium">
          Request a Free Estimate
        </Link>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 space-y-10">
        <p>
          We help Wrentham homeowners and businesses protect and enhance their
          properties with professionally installed fencing.
        </p>

        <ul className="list-disc list-inside">
          <li>Privacy fencing</li>
          <li>Decorative fencing</li>
          <li>Fence repairs and replacements</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get a Free Fence Estimate in Wrentham
        </h2>
        <Link href="/#quote" className="bg-black text-white px-8 py-4 rounded-lg font-medium">
          Request Free Estimate
        </Link>
      </section>
    </main>
  );
}
