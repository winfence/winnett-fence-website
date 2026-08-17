import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  CheckCircle2,
  Hammer,
  Shield,
  Grid3X3,
  Fence,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Repair in Southeastern Massachusetts",
  description:
    "Fence repair for vinyl, wood, chain-link and aluminum fences in Southeastern Massachusetts. Winnett Fence repairs broken posts, leaning sections, gates, storm damage and more. Free estimates.",
};

const repairTypes = [
  "Broken or rotted fence posts",
  "Leaning fence sections",
  "Vinyl panel and rail replacement",
  "Gate repairs and realignment",
  "Storm and tree damage",
  "Damaged chain-link fencing",
  "Broken wood rails and pickets",
  "Partial fence section replacement",
];

const materialRepairs = [
  {
    title: "Vinyl Fence Repair",
    description:
      "Repair damaged vinyl posts, rails, panels and gates when compatible replacement parts are available.",
    icon: Shield,
  },
  {
    title: "Wood Fence Repair",
    description:
      "Replace failed posts, rails and pickets while preserving usable sections of the existing fence.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fence Repair",
    description:
      "Repair bent rails, damaged fabric, failed posts and sections that have been pulled out of alignment.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fence Repair",
    description:
      "Repair damaged sections, posts and gates when the existing fence can be restored properly.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair only one section of my fence?",
    answer:
      "Yes. If the rest of the fence is still in usable condition, we can often repair or replace only the damaged section instead of replacing the entire fence.",
  },
  {
    question: "Can you replace individual fence posts?",
    answer:
      "Yes. Broken, rotted, loose and leaning posts can often be replaced individually while preserving the surrounding fence.",
  },
  {
    question: "Do you repair fences installed by another company?",
    answer:
      "Yes. We repair existing fences regardless of who originally installed them, provided the fence can be repaired safely and properly.",
  },
  {
    question: "Can you match my existing vinyl fence?",
    answer:
      "Often, yes. Exact matches depend on the manufacturer, age and style of the existing fence, but we can usually determine whether compatible replacement parts are available.",
  },
  {
    question: "Do you repair storm or tree damage?",
    answer:
      "Yes. We repair damage caused by wind, fallen branches, trees and other storm-related problems. Whenever practical, we repair the damaged area rather than replacing the entire run.",
  },
  {
    question: "How much does fence repair cost?",
    answer:
      "Repair cost depends on the type of fence, extent of damage, materials needed and site access. Winnett Fence provides free on-site estimates so you can understand the cost before deciding how to proceed.",
  },
];

export default function FenceRepairPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Fence Repair Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair in Southeastern Massachusetts
            </h1>

            <p className="mt-6 text-xl font-medium">
              Broken fence? You may not need a whole new one.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence repairs vinyl, wood, chain-link and aluminum fencing,
              including broken posts, leaning sections, damaged gates, storm
              damage and partial fence failures.
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
            Repair Before You Replace
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              A damaged fence does not always mean the entire fence needs to be
              replaced. In many cases, individual posts, rails, panels, gates or
              sections can be repaired while the rest of the fence remains in
              place.
            </p>

            <p>
              Winnett Fence evaluates the condition of the existing fence and
              recommends a practical repair whenever one can be done safely and
              properly. If replacement makes more sense, we’ll explain that too.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON REPAIRS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Wrench className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Common Problems
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Fence Problems We Repair
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Fence damage can come from weather, age, soil movement, impact,
                tree damage or everyday wear. We handle both small repairs and
                more involved section restoration.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                {repairTypes.map((repair) => (
                  <div
                    key={repair}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />

                    <span className="text-gray-700">
                      {repair}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL REPAIRS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Fence Materials
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Repair for Vinyl, Wood, Chain-Link & Aluminum
            </h2>

            <p className="mt-4 text-gray-600">
              Different fence materials fail in different ways. Winnett Fence
              works with the major residential fence types found throughout
              Southeastern Massachusetts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialRepairs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-2xl p-7"
                >
                  <Icon className="h-9 w-9 mb-4" />

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Why Winnett Fence
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              A Repair-First Approach
            </h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Winnett Fence is owner-operated and focused on practical
              solutions. When repair makes sense, we’ll explain the repair
              option instead of automatically recommending a complete new fence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Locally owned & operated",
              "Licensed & insured",
              "No subcontractors",
              "Free on-site estimates",
            ].map((item) => (
              <div
                key={item}
                className="border border-zinc-700 rounded-xl p-6"
              >
                <CheckCircle2 className="h-6 w-6 mb-3" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
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
              Fence Repair FAQs
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
            Fence Repair Throughout Southeastern Massachusetts
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
            Not Sure If Your Fence Can Be Repaired?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Send us a few details and photos of the damage, or schedule a free
            on-site estimate. We’ll help you determine whether repair or
            replacement makes the most sense.
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
