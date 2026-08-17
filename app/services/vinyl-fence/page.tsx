import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Wrench,
  Sun,
  Droplets,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vinyl Fence Installation in Southeastern Massachusetts",
  description:
    "Vinyl fence installation in Southeastern Massachusetts. Winnett Fence installs low-maintenance privacy and decorative vinyl fencing and also repairs damaged vinyl fences. Free estimates.",
};

const benefits = [
  "Low maintenance",
  "Clean, modern appearance",
  "Resistant to rot and insects",
  "Works well for privacy",
  "Available in multiple styles",
  "Easy to clean",
];

const faqs = [
  {
    question: "Is vinyl fencing good for New England weather?",
    answer:
      "Yes. Quality vinyl fencing is designed to handle changing temperatures, rain and snow without rotting or requiring painting or staining.",
  },
  {
    question: "Do you install privacy vinyl fencing?",
    answer:
      "Yes. Winnett Fence installs full-privacy and semi-privacy vinyl styles along with other decorative options.",
  },
  {
    question: "Can you repair an existing vinyl fence?",
    answer:
      "Yes. We repair many common vinyl fence problems including damaged posts, rails, panels and gates when compatible replacement parts are available.",
  },
  {
    question: "Does vinyl fencing need much maintenance?",
    answer:
      "Vinyl is one of the lower-maintenance fencing materials. Routine cleaning is usually enough to keep it looking good.",
  },
  {
    question: "Do you provide free estimates for vinyl fencing?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for new vinyl fence installation and vinyl fence repair.",
  },
];

export default function VinylFencePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Vinyl Fencing
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Vinyl Fence Installation in Southeastern Massachusetts
            </h1>

            <p className="mt-6 text-xl font-medium">
              Durable, low-maintenance fencing with a clean finished look.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence installs residential vinyl fencing for privacy,
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
            Why Homeowners Choose Vinyl Fencing
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Vinyl fencing is a popular choice for homeowners who want privacy,
              durability and a clean appearance without the ongoing maintenance
              required by some other fence materials.
            </p>

            <p>
              It works especially well for backyard privacy, property lines and
              areas where homeowners want a consistent finished appearance.
              Winnett Fence installs vinyl fencing with careful layout,
              alignment and attention to long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Shield className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Vinyl Fence Benefits
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Built for Low-Maintenance Outdoor Living
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Vinyl fencing does not need painting or staining and is resistant
                to many of the problems that affect traditional wood fencing.
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

                    <span className="text-gray-700">
                      {benefit}
                    </span>
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
              Vinyl Fencing for Privacy, Yards & Property Lines
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-7">
              <Sun className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Backyard Privacy
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Full-privacy vinyl fencing creates a clean, enclosed backyard
                space with minimal maintenance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <Droplets className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Property Boundaries
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Vinyl fencing provides a consistent and attractive way to define
                residential property lines.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <Sparkles className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Clean Curb Appeal
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Decorative and semi-privacy styles can add structure and visual
                appeal without the upkeep of painted wood.
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
                Vinyl Fence Repair
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Already Have Vinyl Fencing?
              </h2>

              <p className="mt-5 text-zinc-300 leading-relaxed">
                Winnett Fence also repairs existing vinyl fences. Damaged
                panels, rails, posts and gates can often be repaired without
                replacing the entire fence.
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Matching replacement parts depend on the age, manufacturer and
                style of the existing fence, but we can evaluate the damage and
                determine what options are available.
              </p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5">
                Common Vinyl Repairs
              </h3>

              <div className="space-y-4 text-zinc-200">
                <p>✓ Damaged panels</p>
                <p>✓ Broken rails</p>
                <p>✓ Failed posts</p>
                <p>✓ Gate repairs</p>
                <p>✓ Storm damage</p>
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
              Vinyl Fence FAQs
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
            Vinyl Fence Installation Throughout Southeastern Massachusetts
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
            Thinking About a Vinyl Fence?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Contact Winnett Fence for a free on-site estimate for new vinyl
            fence installation or repair.
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
