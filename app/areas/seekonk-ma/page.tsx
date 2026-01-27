import Link from "next/link";

export default function SeekonkCityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fence Contractor in Seekonk, MA
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Winnett Fence provides professional fence installation and fence
            repair services for homeowners and businesses throughout Seekonk,
            Massachusetts. We deliver reliable craftsmanship and dependable
            service on every project.
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
              Fence Installation in Seekonk
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A professionally installed fence can enhance privacy, improve
              security, and add value to your property. Winnett Fence works with
              Seekonk homeowners and businesses to install fencing solutions
              that fit their needs and complement their property.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fence Repair Services in Seekonk, MA
            </h3>

            <p className="text-gray-700 leading-relaxed">
              If your fence has been damaged by weather, age, or normal wear,
              our fence repair services can restore its strength and appearance.
              We provide honest assessments and cost-effective repair options.
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
              <li>Aluminum and ornamental fencing</li>
              <li>Residential and commercial fencing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Why Choose Winnett Fence in Seekonk
            </h3>

            <p className="text-gray-700 leading-relaxed">
              We are a locally owned company focused on quality workmanship,
              clear communication, and dependable service. Seekonk property
              owners trust Winnett Fence because we do the job right and stand
              behind our work.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free Fence Estimate in Seekonk, MA
          </h2>

          <p className="text-gray-600 mb-8">
            Contact Winnett Fence today to schedule your free, no-obligation
            fence estimate in Seekonk.
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
