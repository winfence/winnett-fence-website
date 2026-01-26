import Link from "next/link";

export default function FenceRepairPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Fence Repair in Attleboro, MA
        </h1>

        <p className="text-gray-600 mb-6">
          Winnett Fence provides reliable fence repair services for damaged,
          leaning, broken, or aging fences. Whether it’s storm damage, wear and
          tear, or structural issues, we’ll restore your fence quickly and
          professionally.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Broken or leaning fence sections</li>
          <li>Gate repairs and hardware replacement</li>
          <li>Wood, vinyl, chain link, and aluminum repairs</li>
          <li>Post replacement and reinforcement</li>
        </ul>

        <p className="text-gray-600 mb-10">
          We proudly serve Attleboro and surrounding Massachusetts towns with
          honest pricing and dependable workmanship.
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
