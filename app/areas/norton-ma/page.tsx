import Link from "next/link";

export default function NortonCityPage() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Fence Contractor in Norton, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Winnett Fence provides professional fence installation and repair
          services for homeowners and businesses in Norton, Massachusetts. We’re
          a local fence contractor committed to quality workmanship and
          dependable service.
        </p>

        <p className="text-gray-600 mb-10">
          From repairing damaged fences to installing new vinyl, wood, chain
          link, or aluminum fencing, our team delivers results you can count on.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Fence Services in Norton
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Fence repair and replacement</li>
          <li>Vinyl fence installation</li>
          <li>Wood fence installation</li>
          <li>Chain link fencing</li>
          <li>Aluminum fencing</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Why Homeowners in Norton Trust Winnett Fence
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-10 space-y-2">
          <li>Locally owned and operated</li>
          <li>Experienced with residential projects</li>
          <li>Durable materials and professional installs</li>
          <li>Clear communication and reliable timelines</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Request a Free Fence Estimate in Norton, MA
        </h2>

        <p className="text-gray-600 mb-8">
          If you’re searching for a reliable fence contractor in Norton, MA,
          reach out to Winnett Fence today for a free estimate.
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
