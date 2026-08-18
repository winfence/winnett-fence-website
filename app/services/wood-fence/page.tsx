import type { Metadata } from "next";
import Link from "next/link";
import {
  Hammer,
  CheckCircle2,
  Wrench,
  Trees,
  ShieldCheck,
  Ruler,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wood Fence Installation in Southeastern Massachusetts",
  description:
    "Wood fence installation in Southeastern Massachusetts. Winnett Fence installs privacy, picket and decorative wood fencing and repairs damaged wood fences. Free estimates.",
  
  alternates: {
    canonical: "/services/wood-fence",
  },
};

const benefits = [
  "Classic natural appearance",
  "Privacy and decorative styles",
  "Flexible layouts and heights",
  "Customizable for many properties",
  "Repairable in sections",
  "Good fit for residential yards",
];

const faqs = [
  {
    question: "What types of wood fences do you install?",
    answer:
      "Winnett Fence installs common residential wood fence styles including privacy fencing, picket fencing and decorative layouts. The best option depends on the look, privacy level and function you want.",
  },
  {
    question: "Do you install pressure-treated wood fencing?",
    answer:
      "Yes. Pressure-treated lumber is a common choice for residential fencing because it is durable and practical for outdoor use.",
  },
  {
    question: "Can you repair an existing wood fence?",
    answer:
      "Yes. We repair many common wood fence problems including rotted or broken posts, damaged rails, missing pickets, leaning sections and storm damage.",
  },
  {
    question: "Can you replace only part of a wood fence?",
    answer:
      "Often, yes. If the surrounding fence is still in usable condition, individual posts, rails, pickets or sections can often be repaired or replaced without rebuilding the entire fence.",
  },
  {
    question: "Do you provide free estimates for wood fencing?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for new wood fence installation, replacement and repair.",
  },
];

export default function WoodFencePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Wood Fencing
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Wood Fence Installation in Southeastern Massachusetts
            </h1>

            <p className="mt-6 text-xl font-medium">
              Traditional style, privacy and flexible design.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence installs residential wood fencing for privacy,
              property boundaries and backyard spaces throughout Southeastern
              Massachusetts.
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
            A Classic Fence With Flexible Design Options
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Wood fencing remains popular because it offers a natural
              appearance and a high degree of flexibility. It can be used for
              full privacy, decorative boundaries, backyard enclosures and many
              other residential applications.
            </p>

            <p>
              Winnett Fence installs wood fencing with attention to layout,
              alignment and long-term performance, helping homeowners choose a
              style that fits both the property and the purpose of the fence.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Hammer className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Wood Fence Benefits
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Privacy, Style & Flexibility
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Wood fencing can be adapted to many residential properties and
                design preferences, making it a versatile option for privacy and
                decorative applications.
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
              Wood Fencing for Privacy, Boundaries & Backyard Spaces
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-7">
              <ShieldCheck className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Privacy Fencing
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Wood privacy fencing can create a more enclosed backyard while
                maintaining a traditional residential look.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <Trees className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Natural Appearance
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Wood complements landscaping and many home styles with a warm,
                natural appearance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <Ruler className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Flexible Layouts
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Wood fencing can be adapted to different heights, layouts and
                property conditions.
              </p>
            </div>
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
                Wood Fence Repair
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Repairing Existing Wood Fences
              </h2>

              <p className="mt-5 text-zinc-300 leading-relaxed">
                Wood fences can develop isolated problems over time, including
                failed posts, broken rails, missing pickets and leaning
                sections. Those issues do not always require replacing the
                entire fence.
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Winnett Fence can evaluate the damaged area and determine
                whether targeted repairs can extend the useful life of the
                existing fence.
              </p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5">
                Common Wood Fence Repairs
              </h3>

              <div className="space-y-4 text-zinc-200">
                <p>✓ Broken or rotted posts</p>
                <p>✓ Damaged rails</p>
                <p>✓ Missing or broken pickets</p>
                <p>✓ Leaning fence sections</p>
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
              Wood Fence FAQs
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
            Wood Fence Installation Throughout Southeastern Massachusetts
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
            Planning a Wood Fence Project?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Contact Winnett Fence for a free on-site estimate for new wood fence
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
