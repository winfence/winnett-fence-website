import Link from "next/link";

export default function VinylFencePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Vinyl Fence Installation in Attleboro, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Vinyl fencing is a popular choice for homeowners looking for privacy,
          durability, and low maintenance. Winnett Fence installs high-quality
          vinyl fencing designed to withstand New England weather while
          maintaining a clean, modern look.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Privacy and semi-privacy vinyl fences</li>
          <li>White and custom color options</li>
          <li>Durable, weather-resistant materials</li>
          <li>Clean, professional installation</li>
        </ul>

        <p className="text-gray-600 mb-10">
          We proudly serve Attleboro and surrounding Massachusetts towns with
          reliable vinyl fence installation and honest pricing.
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
