import Link from "next/link";

export default function NorthAttleboroCityPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fence Contractor in North Attleboro, MA
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Winnett Fence provides professional fence installation and fence
            repair services for residential and commercial properties in North
            Attleboro, Massachusetts.
          </p>
          <Link href="/#quote" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium">
            Request a Free Estimate
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-bold">Fence Installation in North Attleboro</h2>
          <p className="text-gray-700">
            We install durable, attractive fences designed to improve privacy,
            security, and curb appeal. Every installation is tailored to your
            property and built to last.
          </p>

          <h3 className="text-2xl font-semibold">Fence Repair Services</h3>
          <p className="text-gray-700">
            From storm damage to aging materials, our fence repair services help
            restore safety and appearance without unnecessary replacement.
          </p>

          <h3 className="text-2xl font-semibold">Fence Types We Offer</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Wood fencing</li>
            <li>Vinyl fencing</li>
            <li>Chain link fencing</li>
            <li>Aluminum fencing</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Free Fence Estimates in North Attleboro, MA
        </h2>
        <Link href="/#quote" className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium">
          Request Free Estimate
        </Link>
      </section>
    </main>
  );
}
