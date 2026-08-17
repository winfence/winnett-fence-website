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
  title: "Fence Repair & Installation in Attleboro, MA | Winnett Fence",
  description:
    "Fence repair and installation in Attleboro, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides professional new fence installation. Free estimates.",
};

const repairServices = [
  "Broken or rotted fence posts",
  "Leaning fence sections",
  "Vinyl fence panels and rails",
  "Gate repairs and adjustments",
  "Storm and tree damage",
  "Damaged chain-link fencing",
  "Broken wood pickets and rails",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance vinyl fencing for privacy, boundaries and curb appeal.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, security and a classic appearance.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Durable and cost-effective fencing for yards, pets and property boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Attractive, low-maintenance aluminum fencing for a clean and open look.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair just one section of my fence in Attleboro?",
    answer:
      "Yes. If the rest of the fence is still in usable condition, we can often repair or replace only the damaged section rather than replacing the entire fence.",
  },
  {
    question: "Do you repair fences installed by another contractor?",
    answer:
      "Yes. Winnett Fence can repair existing fences regardless of who originally installed them, provided the fence can be repaired safely and properly.",
  },
  {
    question: "Do you repair storm-damaged fences?",
    answer:
      "Yes. We repair damage caused by wind, falling branches, trees and other storm-related problems. Whenever practical, we try to save the existing fence instead of replacing the entire run.",
  },
  {
    question: "Can you replace individual fence posts?",
    answer:
      "Yes. Broken, rotted, loose and leaning posts can often be replaced individually while preserving the surrounding fence.",
  },
  {
    question: "Do you offer free fence estimates in Attleboro?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for repairs, replacements and new fence installations in Attleboro.",
  },
];

export default function AttleboroCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Attleboro, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Attleboro, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Broken fence? You may not need a whole new one.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides professional fence repair and installation
              for homeowners throughout Attleboro. From broken posts and
              damaged vinyl panels to leaning fences, gates and storm damage,
              we look for practical ways to restore your existing fence whenever
              possible.
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
            Local Fence Service for Attleboro Homeowners
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Winnett Fence is locally owned and provides residential fence
              repair, replacement and installation throughout Attleboro,
              Massachusetts. We work with vinyl, wood, chain-link and aluminum
              fencing and handle projects ranging from individual repairs to
              complete new installations.
            </p>

            <p>
              We believe a damaged fence should be evaluated before assuming it
              needs to be completely replaced. If a repair is practical, we’ll
              explain the options and help you determine the best way to restore
              the fence.
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
                Fence Repair in Attleboro, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Fence damage can come from age, weather, falling trees, ground
                movement or everyday wear. In many cases, the damaged parts can
                be repaired without replacing the entire fence.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Winnett Fence handles both small repairs and more involved
                restoration work. We’ll inspect the affected area and recommend
                a repair when it makes sense.
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
              New Fencing in Attleboro
            </h2>

            <p className="mt-4 text-gray-600">
              When repair isn’t the right option—or you’re starting a new
              project—we also provide complete residential fence installation.
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
              A Local, Owner-Operated Fence Company
            </h2>

            <p className="mt-5 text-zinc-300 leading-relaxed">
              When you contact Winnett Fence, you work directly with a local
              owner-operated company. We focus on clear communication,
              dependable scheduling and practical solutions for each property.
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
              Attleboro Fence Repair FAQs
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
            Serving Attleboro & Nearby Communities
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Winnett Fence serves Attleboro and surrounding Southeastern
            Massachusetts communities including North Attleboro, Mansfield,
            Norton, Plainville, Seekonk, Rehoboth, Wrentham, Foxborough and
            Easton.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Fence Repair in Attleboro?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you have one broken post, storm damage or need an entirely
            new fence, contact Winnett Fence for a free on-site estimate.
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
