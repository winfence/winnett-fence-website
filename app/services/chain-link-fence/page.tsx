import type { Metadata } from "next";
import Link from "next/link";
import {
  Grid3X3,
  CheckCircle2,
  Wrench,
  Dog,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chain Link Fence Installation in Southeastern Massachusetts",
  description:
    "Chain link fence installation in Southeastern Massachusetts. Winnett Fence installs galvanized and vinyl-coated chain link fencing and repairs damaged chain link fences. Free estimates.",
};

const benefits = [
  "Durable and practical",
  "Cost-effective fencing option",
  "Good visibility through the fence",
  "Great for pets and yards",
  "Galvanized and coated options",
  "Repairable in sections",
];

const faqs = [
  {
    question: "Do you install residential chain link fencing?",
    answer:
      "Yes. Winnett Fence installs chain link fencing for residential yards, property boundaries, pet enclosures and other applications.",
  },
  {
    question: "Do you offer vinyl-coated chain link fencing?",
    answer:
      "Yes. Both traditional galvanized and vinyl-coated chain link options may be available depending on the project and material requirements.",
  },
  {
    question: "Is chain link fencing good for dogs?",
    answer:
      "Chain link is a popular option for pet enclosures because it creates a secure boundary while maintaining visibility through the fence. The appropriate height and layout depend on the property and the pet.",
  },
  {
    question: "Can you repair an existing chain link fence?",
    answer:
      "Yes. We repair many common chain link fence problems including damaged fabric, bent rails, failed posts, gates and sections that have been pulled out of alignment.",
  },
  {
    question: "Can you replace only one damaged section?",
    answer:
      "Often, yes. If the surrounding fence is still in usable condition, damaged posts, rails, fabric or individual sections can often be repaired without replacing the entire fence.",
  },
  {
    question: "Do you provide free estimates for chain link fencing?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for chain link fence installation, replacement and repair.",
  },
];

export default function ChainLinkFencePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Chain Link Fencing
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Chain Link Fence Installation in Southeastern Massachusetts
            </h1>

            <p className="mt-6 text-xl font-medium">
              Durable, practical fencing without blocking visibility.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence installs chain link fencing for residential yards,
              pet enclosures, property boundaries and other applications
              throughout Southeastern Massachusetts.
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
            A Practical Fence for Yards, Pets & Property Boundaries
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Chain link fencing is a practical option when you need a durable
              boundary without creating a solid visual barrier. It works well
              for backyards, pet areas, property lines and many other
              residential applications.
            </p>

            <p>
              Winnett Fence installs both traditional galvanized and coated
              chain link fencing with attention to proper post placement,
              tension and alignment.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Grid3X3 className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Chain Link Fence Benefits
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Durable, Affordable & Functional
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Chain link is one of the most practical fencing materials for
                homeowners who need a dependable enclosure while maintaining
                visibility through the fence.
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
              Where Chain Link Fencing Works Well
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-7">
              <Dog className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Pet Enclosures
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Chain link creates a defined enclosure for dogs and other pets
                while maintaining an open view of the yard.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <ShieldCheck className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Property Boundaries
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A durable way to define yards and property boundaries without
                the visual barrier of a solid privacy fence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-7">
              <DollarSign className="h-9 w-9 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                Cost-Effective Fencing
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Chain link can be a practical choice for longer fence runs where
                durability and function are the primary goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Chain Link Options
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Galvanized & Vinyl-Coated Chain Link
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Galvanized Chain Link
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Traditional galvanized chain link provides a simple, durable
                enclosure and is a practical choice for many residential
                applications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Vinyl-Coated Chain Link
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Coated chain link provides the same practical enclosure with a
                different finished appearance that can blend more naturally
                with landscaping and residential properties.
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
                Chain Link Fence Repair
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Repairing Existing Chain Link Fences
              </h2>

              <p className="mt-5 text-zinc-300 leading-relaxed">
                A damaged chain link fence does not necessarily need to be
                completely replaced. Individual posts, rails, fabric and gates
                can often be repaired while leaving the rest of the fence in
                place.
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                Winnett Fence can inspect the damaged area and determine
                whether a targeted repair is a practical option.
              </p>
            </div>

            <div className="border border-zinc-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5">
                Common Chain Link Repairs
              </h3>

              <div className="space-y-4 text-zinc-200">
                <p>✓ Bent or damaged top rail</p>
                <p>✓ Damaged chain link fabric</p>
                <p>✓ Broken or leaning posts</p>
                <p>✓ Gate repairs and alignment</p>
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
              Chain Link Fence FAQs
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
            Chain Link Fence Installation Throughout Southeastern Massachusetts
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
            Need a Chain Link Fence?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Contact Winnett Fence for a free on-site estimate for chain link
            fence installation, replacement or repair.
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
