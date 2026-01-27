import Link from "next/link";

export default function EastonCityPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fence Contractor in Easton, MA
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Winnett Fence provides expert fence installation and repair services
            for residential and commercial properties throughout Easton,
            Massachusetts.
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
              Fence Installation in Easton
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A quality fence can improve privacy, security, and curb appeal.
              Winnett Fence installs fencing solutions in Easton that are built
              to last and tailored to your property’s needs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Fence Repair Services in Easton, MA
            </h3>

            <p className="text-gray-700 leading-relaxed">
              If your fence has been damaged or is showing signs of wear, our
              repair services can help restore its appearance and function.
              We provide reliable repairs and honest recommendations.
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
              Why Choose Winnett Fence in Easton
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Easton homeowners and businesses choose Winnett Fence for our
              dependable service, skilled workmanship, and commitment to
              quality. We take pride in delivering fencing solutions that stand
              the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get a Free Fence Estimate in Easton, MA
          </h2>

          <p className="text-gray-600 mb-8">
            Contact Winnett Fence today to schedule your free fence estimate in
            Easton.
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
