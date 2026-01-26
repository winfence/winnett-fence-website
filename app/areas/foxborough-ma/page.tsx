import Link from "next/link";

export default function FoxboroughCityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fence Contractor in Foxborough, MA
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Winnett Fence provides professional fence installation and fence
            repair services for homeowners and businesses throughout Foxborough,
            Massachusetts. From privacy fences to durable repairs, we deliver
            quality workmanship you can rely on.
          </p>

          <Link
            href="/#quote"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Trusted Fence Installation in Foxborough
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A well-built fence adds privacy, security, and value to your
              property. Winnett Fence installs high-quality fencing solutions
              tailored to your needs and your property. We work with homeowners
              and businesses across Foxborough to design and install fences that
              look great and stand the test of time.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fence Repair Services in Foxborough, MA
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Storm damage, age, and everyday wear can take a toll on your
              fence. Our fence repair services in Foxborough are a cost-effective
              way to restore safety and appearance without the need for a full
              replacement. We assess the issue and provide honest
              recommendations you can trust.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Types of Fences We Install
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wood fence installation</li>
              <li>Vinyl fence installation</li>
              <li>Chain link fencing</li>
              <li>Aluminum and ornamental fencing</li>
              <li>Residential and commercial fencing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Why Foxborough Homeowners Choose Winnett Fence
            </h3>

            <p className="text-gray-700 leading-relaxed">
              We’re a locally owned company focused on quality, communication,
              and reliable service. Foxborough property owners choose Winnett
              Fence because we show up on time, do the job right, and stand
              behind our work. From the initial estimate to the final
              installation, we make the process simple and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free Fence Estimate in Foxborough, MA
          </h2>

          <p className="text-gray-600 mb-8">
            Looking for a dependable fence contractor in Foxborough?
            Contact Winnett Fence today to schedule your free estimate.
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
