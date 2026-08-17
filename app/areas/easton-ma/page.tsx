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
  title: "Fence Repair & Installation in Easton, MA | Winnett Fence",
  description:
    "Fence repair and installation in Easton, MA. Winnett Fence repairs damaged vinyl, wood, chain-link and aluminum fences and provides new fence installation. Free estimates.",
};

const repairServices = [
  "Broken or deteriorated fence posts",
  "Leaning and unstable fence sections",
  "Vinyl panel and rail replacement",
  "Gate repairs and alignment",
  "Tree and storm damage",
  "Chain-link fence repairs",
  "Damaged wood rails and pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance vinyl fencing for privacy, backyards and property boundaries.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, security and a natural appearance.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Durable and economical fencing for yards, pets and residential properties.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Attractive aluminum fencing that provides security while maintaining an open view.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Is my damaged fence worth repairing?",
    answer:
      "It depends on the condition of the surrounding fence. If the posts, rails and remaining sections are still serviceable, repairing the damaged area can often make more sense than replacing the entire fence. We can inspect the damage and explain your options.",
  },
  {
    question: "Can you replace individual broken fence posts?",
    answer:
      "Yes. We can often replace failed, rotted or damaged posts while keeping the surrounding fence sections in place.",
  },
  {
    question: "Do you repair vinyl fence panels and rails?",
    answer:
      "Yes. We repair many common vinyl fence problems including damaged panels, rails, posts and gates. The availability of matching replacement parts depends on the style, age and manufacturer of the existing fence.",
  },
  {
    question: "Can you repair a fence damaged by a fallen tree?",
    answer:
      "Yes. We handle fence damage caused by fallen trees, branches, wind and storms. Depending on the extent of the damage, we may be able to replace only the affected posts, rails or sections.",
  },
  {
    question: "Do you provide free fence estimates in Easton?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repair, replacement and new installation projects in Easton.",
  },
];

export default function EastonCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Easton, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Easton, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Fix what can be repaired. Replace what needs to be replaced.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides residential fence repair and installation
              throughout Easton. Whether you have a broken post, damaged gate,
              leaning section, storm damage or an older fence that needs
              attention, we can evaluate the problem and recommend a practical
              solution.
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
            Residential Fence Service in Easton
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              A fence is exposed to weather, soil movement and everyday wear
              year after year. Eventually, individual posts, rails, panels or
              gates can fail even when much of the remaining fence is still in
              usable condition.
            </p>

            <p>
              Winnett Fence provides both repair and complete installation, so
              the goal is not to automatically sell you a new fence. We’ll look
              at the condition of the existing fence and help determine whether
              repairing the affected area or replacing the fence makes more
              sense for your property.
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
                Fence Repair in Easton, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Damage to one part of a fence does not necessarily mean the
                entire fence has reached the end of its life. Individual
                components and sections can often be repaired or replaced while
                preserving the rest of the fence.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We work on vinyl, wood, chain-link and aluminum fencing and can
                address many common structural, weather-related and gate
                problems.
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
              New Fence Installation in Easton
            </h2>

            <p className="mt-4 text-gray-600">
              If your existing fence is beyond practical repair or you’re
              enclosing a property for the first time, Winnett Fence also
              provides complete residential fence installation.
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
              Owner-Operated Fence Service for Easton
            </h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              Winnett Fence is locally owned and owner-operated. You deal
              directly with the company handling your project, with an emphasis
              on straightforward recommendations, responsive communication and
              dependable workmanship.
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
              Easton Fence Repair FAQs
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
            Serving Easton & Nearby Communities
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Winnett Fence serves Easton and surrounding Southeastern
            Massachusetts communities including Mansfield, Norton, Attleboro,
            North Attleboro, Foxborough, Wrentham, Plainville, Seekonk and
            Rehoboth.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Fence That Needs Attention in Easton?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Send us information about the problem—and photos if you have
            them—or schedule a free on-site estimate for your repair or new
            fence project.
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
