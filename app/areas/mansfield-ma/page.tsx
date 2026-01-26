import Link from "next/link";

export default function MansfieldCityPage() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Fence Contractor in Mansfield, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Winnett Fence proudly serves homeowners and businesses in Mansfield,
          Massachusetts with professional fence installation and repair
          services. As a local fence contractor, we focus on quality
          craftsmanship, clear communication, and dependable results.
        </p>

        <p className="text-gray-600 mb-10">
          Whether you need a new fence for privacy, security, or curb appeal — or
          repairs to an existing fence — our team delivers reliable solutions
          tailored to your property.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Fence Services in Mansfield
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Fence repair and replacement</li>
          <li>Vinyl fence installation</li>
          <li>Wood fence installation</li>
          <li>Chain link fencing</li>
          <li>Aluminum fencing</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Winnett Fence in Mansfield?
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Locally owned and operated</li>
          <li>Residential and light commercial experience</li>
          <li>High-quality materials and professional installation</li>
          <li>Reliable scheduling and honest pricing</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Request a Free Fence Estimate in Mansfield, MA
        </h2>

        <p className="text-gray-600 mb-8">
          Looking for a trusted fence contractor in Mansfield, MA? Contact
          Winnett Fence today for a free, no-obligation estimate.
        </p>

        <Link
          href="/#quote"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Get Free Estimate
        </Link>
      </div>
    </section>
  );
}
