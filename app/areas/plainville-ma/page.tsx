import Link from "next/link";

export default function PlainvilleCityPage() {
  return (
    <main>
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Fence Contractor in Plainville, MA
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8">
          Winnett Fence provides professional fencing services to Plainville,
          Massachusetts and surrounding areas.
        </p>
        <Link href="/#quote" className="bg-white text-black px-8 py-4 rounded-lg font-medium">
          Request a Free Estimate
        </Link>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6">
        <p>
          Whether you need a new fence installation or repairs to an existing
          fence, our team delivers dependable workmanship and honest service.
        </p>
      </section>

      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Free Fence Estimates in Plainville, MA
        </h2>
        <Link href="/#quote" className="bg-black text-white px-8 py-4 rounded-lg font-medium">
          Request Free Estimate
        </Link>
      </section>
    </main>
  );
}
