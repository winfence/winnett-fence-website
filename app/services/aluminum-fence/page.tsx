import Link from "next/link";

export default function AluminumFencePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Aluminum Fence Installation in Attleboro, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Aluminum fencing combines strength, elegance, and low maintenance.
          Winnett Fence installs aluminum fences that enhance curb appeal while
          providing reliable security.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Decorative and security-style aluminum fencing</li>
          <li>Rust-resistant, long-lasting materials</li>
          <li>Pool-compliant fence options</li>
          <li>Professional installation and layout</li>
        </ul>

        <p className="text-gray-600 mb-10">
          We proudly serve Attleboro and nearby Massachusetts towns with quality
          aluminum fence installation services.
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
