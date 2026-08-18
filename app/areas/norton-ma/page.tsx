import type { Metadata } from "next";
import NearbyAreasSection from "../../components/NearbyAreasSection";
import ServiceLinksSection from "../../components/ServiceLinksSection";
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
  title: "Fence Repair & Installation in Norton, MA",
  description:
    "Fence repair and installation in Norton, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides new residential fence installation. Free estimates.",
  alternates: {
    canonical: "/areas/norton-ma",
  },
};

const repairServices = [
  "Broken or rotted fence posts",
  "Leaning or unstable fence sections",
  "Vinyl rail and panel replacement",
  "Gate repairs and adjustments",
  "Storm and tree damage",
  "Chain-link fence repairs",
  "Damaged wood rails and pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance vinyl fencing for privacy, backyards and clean residential property lines.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, security and a natural look around the home.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Durable and economical fencing for yards, pets and residential boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Attractive aluminum fencing that provides security while keeping an open appearance.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair one damaged section of my fence?",
    answer:
      "Yes. If the rest of the fence is still in usable condition, we can often repair or replace only the damaged posts, rails, panels or sections.",
  },
  {
    question: "Do you repair fence posts in Norton?",
    answer:
      "Yes. Broken, rotted, loose and leaning fence posts can often be replaced individually while keeping the surrounding fence in place.",
  },
  {
    question: "Can you repair storm-damaged fencing?",
    answer:
      "Yes. We handle damage caused by wind, fallen trees, branches and other storm-related problems. We’ll evaluate whether the affected area can be repaired without replacing the whole fence.",
  },
  {
    question: "Do you repair chain-link fences?",
    answer:
      "Yes. We can repair many common chain-link problems including damaged fabric, bent rails, failed posts and sections that have been pulled out of alignment.",
  },
  {
    question: "Do you offer free fence estimates in Norton?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repairs, replacements and new installations in Norton.",
  },
];

export default function NortonCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Norton, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Norton, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Keep the good parts. Repair the damaged ones.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides residential fence repair and installation
              throughout Norton. We repair broken posts, damaged gates, leaning
              sections, storm damage, vinyl fencing, chain-link fencing and
              other common fence problems.
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
            Residential Fence Service in Norton
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Fence damage is often limited to only part of the system. A
              failed post, broken rail or damaged panel may be repairable even
              when the rest of the fence is still in good shape.
            </p>

            <p>
              Winnett Fence provides both repair and complete installation, so
              we can evaluate the condition of the fence and help you decide
              whether repairing the problem area or replacing the fence is the
              more practical choice.
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
                Fence Repair in Norton, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Weather, ground movement, age and impact damage can all cause
                individual parts of a fence to fail. When the surrounding fence
                is still structurally sound, repairing only the affected area
                can often extend its useful life.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We work on vinyl, wood, chain-link and aluminum fencing and
                provide straightforward recommendations based on the condition
                of the fence.
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
              New Fence Installation in Norton
            </h2>

            <p className="mt-4 text-gray-600">
              If repair is no longer practical or you’re starting a new fence
              project, Winnett Fence also provides complete residential fence
              installation.
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
              Winnett Fence is locally owned and owner-operated. We focus on
              responsive communication, dependable scheduling and practical
              repair or replacement recommendations based on what your property
              actually needs.
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
              Norton Fence Repair FAQs
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

      <ServiceLinksSection />
      <NearbyAreasSection currentTown="Norton" />

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Fence Repair in Norton?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you have one damaged post, a leaning section, storm damage
            or need a completely new fence, contact Winnett Fence for a free
            on-site estimate.
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
