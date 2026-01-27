import Link from "next/link";

export default function RehobothCityPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fence Contractor in Rehoboth, MA
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Winnett Fence offers professional fence installation and fence
            repair services for properties throughout Rehoboth, Massachusetts.
            We focus on durable solutions built to last.
          </p>

          <Link
            href="/#quote"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Fence Installation in Rehoboth
            </h2>

            <p className="text-gray-700 leading-relaxed">
              From rural properties to residential neighborhoods, Winnett Fence
              installs fencing that enhances privacy, security, and appearance.
              Every fence is installed with attention to detail and quality
              materials.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fence Repair Services in Rehoboth, MA
            </h3>

            <p className="text-gray-700 leading-relaxed">
              If your fence is leaning, damaged, or showing signs of wear,
              our repair services can restore its function without a full
              replacement. We provide honest guidance and dependable repairs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Types of Fences We Install
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wood fencing</li>
              <li>Vinyl fencing</li>
              <li>Chain link fencing</li>
              <li>Aluminum fencing</li>
              <li>Residential and commercial fencing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Why Rehoboth Residents Choose Winnett Fence
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Rehoboth property owners choose Winnett Fence for our reliable
              service, quality workmanship, and straightforward communication.
              We take pride in delivering results our customers can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Free Fence Estimates in Rehoboth, MA
          </h2>

          <p className="text-gray-600 mb-8">
            Reach out to Winnett Fence today to schedule your free fence estimate
            in Rehoboth.
          </p>

          <Link
            href="/#quote"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Request Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
