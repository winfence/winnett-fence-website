import type { Metadata } from "next";
import Link from "next/link";
import {
  Fence,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Sparkles,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aluminum Fence Installation in Southeastern Massachusetts",
  description:
    "Aluminum fence installation in Southeastern Massachusetts. Winnett Fence installs low-maintenance aluminum fencing and repairs damaged aluminum fences. Free estimates.",
  
  alternates: {
    canonical: "/services/aluminum-fence",
  },
};

const benefits = [
  "Low-maintenance material",
  "Clean, decorative appearance",
  "Open visibility through the fence",
  "Rust-resistant construction",
  "Good fit for front yards and boundaries",
  "Available in multiple styles",
];

const faqs = [
  {
    question: "What are the benefits of aluminum fencing?",
    answer:
      "Aluminum fencing offers a clean, decorative look with relatively low maintenance. It provides a defined boundary while maintaining visibility through the fence.",
  },
  {
    question: "Does aluminum fencing rust?",
    answer:
      "Aluminum does not rust like traditional steel. Properly finished aluminum fencing is designed for long-term outdoor use with minimal maintenance.",
  },
  {
    question: "Is aluminum fencing good for front yards?",
    answer:
      "Yes. Aluminum is a popular option for front yards and other areas where homeowners want a more decorative boundary without blocking the view.",
  },
  {
    question: "Can aluminum fencing be used around pools?",
    answer:
      "Aluminum fencing is commonly used around pools, but the required height, spacing, gates and hardware depend on applicable local and state safety requirements. We can help determine the appropriate fence configuration for your project.",
  },
  {
    question: "Can you repair an existing aluminum fence?",
    answer:
      "Yes. We can evaluate damaged aluminum posts, sections and gates and determine whether a targeted repair is practical.",
  },
  {
    question: "Do you provide free estimates for aluminum fencing?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for aluminum fence installation, replacement and repair.",
  },
];

export default function AluminumFencePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Aluminum Fencing
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Aluminum Fence Installation in Southeastern Massachusetts
            </h1>

            <p className="mt-6 text-xl font-medium">
              Clean lines, low maintenance and an open appearance.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence installs residential aluminum fencing for property
              boundaries, front yards, decorative applications and other areas
              where homeowners want security without a solid visual barrier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#quote-form"
                className="inline-block bg-white text-zinc-900 px-7 py-4 rounded-xl font-semibold hover:bg-zinc-100 transition"
              >
                Request a Free Estimate
              </Link>

              <a
                href="tel:8577029780"
                className="inline-block border border-zinc-600 px-7 py-4 rounded-xl font-semibold hover:bg-zinc-800 transition"
              >
                Call 857-702-9780
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-5">
            Decorative Fencing Without Blocking the View
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Aluminum fencing is a good fit for homeowners who want a finished,
              decorative appearance while keeping the property visually open.
              It works well for front yards, landscape boundaries and many other
              residential applications.
            </p>

            <p>
              Winnett Fence installs aluminum fencing with careful attention to
              layout, spacing and alignment so the finished fence complements
              the property while providing a dependable boundary.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Fence className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Aluminum Fence Benefits
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Attractive, Durable & Low Maintenance
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Aluminum fencing combines a more decorative appearance with
                practical outdoor durability and relatively little routine
                maintenance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Popular Uses
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Where Aluminum Fencing Works Well
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-7">
              <Sparkles className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Decorative Boundaries
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Aluminum fencing creates a clean, finished boundary that works
                well with many home and landscape styles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <Eye className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Open Visibility
              </h3>

              <p className="text-gray-600 leading-relaxed">
                The open picket design provides a defined boundary without the
                visual barrier of a solid privacy fence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <ShieldCheck className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Residential Security
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Aluminum fencing can help define and secure areas of a property
                while maintaining a more decorative appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POOL SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Pool Fencing
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Aluminum Fencing for Pool Areas
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Aluminum is commonly used around residential pools because it
              provides a defined barrier while maintaining visibility into the
              pool area. Pool-fence requirements can vary based on the project
              and applicable safety rules, so the correct height, spacing, gate
              and hardware configuration should be determined for the specific
              property.
            </p>
          </div>
        </div>
      </section>

      {/* REPAIR */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Wrench className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Aluminum Fence Repair
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Repairing Existing Aluminum Fences
              </h2>

              <p className="mt-5 text-zinc-300 leading-relaxed">
                Damaged aluminum fencing may be repairable without replacing the
                entire fence. Individual posts, sections and gates can sometimes
                be repaired or replaced while preserving the surrounding fence.
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Winnett Fence can evaluate the damaged area and determine
                whether a targeted repair is practical.
              </p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5">
                Common Aluminum Fence Repairs
              </h3>

              <div className="space-y-4 text-zinc-200">
                <p>✓ Damaged fence sections</p>
                <p>✓ Failed or loose posts</p>
                <p>✓ Gate repairs and alignment</p>
                <p>✓ Impact damage</p>
                <p>✓ Storm and tree damage</p>
              </div>

              <Link
                href="/services/fence-repair"
                className="inline-block mt-7 underline underline-offset-4 font-semibold"
              >
                Learn more about fence repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Aluminum Fence FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-xl"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-lg flex items-center justify-between gap-4">
                  <span>{faq.question}</span>

                  <span className="text-2xl font-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Aluminum Fence Installation Throughout Southeastern Massachusetts
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Winnett Fence serves Attleboro, North Attleboro, Mansfield, Norton,
            Foxborough, Wrentham, Plainville, Seekonk, Rehoboth, Easton and
            nearby communities.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Considering Aluminum Fencing?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Contact Winnett Fence for a free on-site estimate for aluminum fence
            installation, replacement or repair.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#quote-form"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
            >
              Request Free Estimate
            </Link>

            <a
              href="tel:8577029780"
              className="inline-block border border-gray-300 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Call 857-702-9780
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
