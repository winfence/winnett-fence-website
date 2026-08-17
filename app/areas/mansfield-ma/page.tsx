import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Shield,
  Hammer,
  Grid3X3,
  Fence,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Repair & Installation in Mansfield, MA | Winnett Fence",
  description:
    "Fence repair and installation in Mansfield, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides professional new fence installation. Free estimates.",
};

const repairServices = [
  "Broken or rotted fence posts",
  "Leaning fence sections",
  "Vinyl panel and rail replacement",
  "Gate repair and adjustment",
  "Storm and tree damage",
  "Chain-link fence repair",
  "Damaged wood rails and pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance vinyl fencing for privacy, backyards and clean property boundaries.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, security and a natural residential appearance.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Durable, practical fencing for yards, pets and residential property lines.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Attractive aluminum fencing that adds security while preserving an open view.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair just part of my fence?",
    answer:
      "Yes. If the surrounding fence is still in good condition, we can often repair or replace only the damaged posts, rails, panels or sections instead of replacing the entire fence.",
  },
  {
    question: "Do you repair leaning fences in Mansfield?",
    answer:
      "Yes. Leaning fences can be caused by failed posts, soil movement or deteriorated materials. We can inspect the problem and determine whether the affected area can be stabilized or rebuilt.",
  },
  {
    question: "Can you replace broken vinyl fence panels or rails?",
    answer:
      "Yes. We repair many common vinyl fence problems. Whether an exact match is available depends on the age, manufacturer and style of the existing fence.",
  },
  {
    question: "Do you repair storm-damaged fences?",
    answer:
      "Yes. We repair damage caused by wind, fallen branches, trees and other weather-related problems. Whenever practical, we repair only the damaged area.",
  },
  {
    question: "Do you offer free estimates in Mansfield?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repair, replacement and new installation projects in Mansfield.",
  },
];

export default function MansfieldCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Mansfield, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Mansfield, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Repair what makes sense. Replace only when needed.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides residential fence repair and installation
              throughout Mansfield. We handle broken posts, leaning sections,
              damaged gates, vinyl repairs, storm damage and complete new fence
              installation.
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
            Residential Fence Service in Mansfield
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              A fence can develop isolated problems long before the rest of the
              system needs to be replaced. One failed post, damaged rail or
              broken panel does not always mean starting over.
            </p>

            <p>
              Winnett Fence provides both repair and full installation, so we
              can help you compare the condition of the existing fence with the
              cost and practicality of repair. The goal is to recommend the
              option that makes sense for the property rather than assuming a
              full replacement is necessary.
            </p>
          </div>
        </div>
      </section>

      {/* REPAIR SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Wrench className="h-11 w-11 mb-5" />

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Fence Repair
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Fence Repair in Mansfield, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Fence damage can come from age, weather, ground movement,
                accidental impact or fallen trees and branches. When the damage
                is limited to part of the fence, repairing the affected area can
                often extend the useful life of the existing installation.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We repair vinyl, wood, chain-link and aluminum fencing and can
                address many common structural and gate problems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">
                Common Fence Repairs
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {repairServices.map((repair) => (
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

      {/* INSTALLATION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              New Fence Installation
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              New Fence Installation in Mansfield
            </h2>

            <p className="mt-4 text-gray-600">
              If your current fence has reached the end of its useful life or
              you need a completely new enclosure, Winnett Fence also provides
              professional residential fence installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="border border-gray-200 rounded-2xl p-7"
                >
                  <Icon className="h-9 w-9 mb-4" />

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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
              Local, Owner-Operated Fence Service
            </h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Winnett Fence is locally owned and owner-operated, with a focus on
              straightforward recommendations, clear communication and
              dependable scheduling from estimate through completion.
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

                <p className="font-semibold">
                  {item}
                </p>
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
              Mansfield Fence Repair FAQs
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

      {/* NEARBY AREAS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Serving Mansfield & Nearby Communities
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Winnett Fence serves Mansfield and surrounding Southeastern
            Massachusetts communities including Norton, Foxborough, Easton,
            Attleboro, North Attleboro, Plainville, Wrentham, Seekonk and
            Rehoboth.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Fence Repair in Mansfield?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From a single damaged post to storm repairs or a complete new fence,
            contact Winnett Fence for a free on-site estimate.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#quote-form"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
            >
              Get Free Estimate
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
