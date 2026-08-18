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
  title: "Fence Repair & Installation in North Attleboro, MA",
  description:
    "Fence repair and installation in North Attleboro, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides professional new fence installation. Free estimates.",
  alternates: {
    canonical: "/areas/north-attleboro-ma",
  },
};

const repairServices = [
  "Broken and rotted fence posts",
  "Leaning or loose fence sections",
  "Vinyl rail and panel replacement",
  "Gate repairs and realignment",
  "Wind and storm damage",
  "Chain-link fence repairs",
  "Wood rail and picket replacement",
  "Partial fence replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Durable, low-maintenance vinyl fencing for privacy, property lines and backyard spaces.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Wood fencing for privacy, traditional style and customized residential layouts.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Practical, durable fencing for pets, yards and residential property boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Low-maintenance aluminum fencing that provides security while maintaining an open appearance.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair an older fence instead of replacing it?",
    answer:
      "Often, yes. The condition of the posts, rails, panels and surrounding sections will determine whether a repair makes sense. We evaluate the existing fence and recommend repair when it can be done properly.",
  },
  {
    question: "Do you repair vinyl fences in North Attleboro?",
    answer:
      "Yes. We handle many common vinyl fence repairs including damaged panels, rails, posts and gates. Replacement parts depend on the age, style and manufacturer of the existing fence.",
  },
  {
    question: "Can you fix a leaning fence?",
    answer:
      "In many cases, yes. Leaning fences are often caused by failed posts, shifting ground or deteriorated materials. We can inspect the cause and determine whether the affected sections can be stabilized or rebuilt.",
  },
  {
    question: "Do you repair gates that no longer close correctly?",
    answer:
      "Yes. We can repair many gate problems including sagging, misalignment, damaged hinges, latch issues and failed gate posts.",
  },
  {
    question: "Do you provide free estimates in North Attleboro?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repairs, replacements and new installations in North Attleboro.",
  },
];

export default function NorthAttleboroCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving North Attleboro, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in North Attleboro, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Repair the damage. Keep the fence when it still makes sense.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides fence repair, replacement and new
              installation for homeowners throughout North Attleboro. We work
              with vinyl, wood, chain-link and aluminum fencing and handle
              everything from damaged posts and gates to storm-damaged sections
              and complete new fences.
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
            Residential Fence Service in North Attleboro
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Fence problems do not always require a complete replacement.
              Depending on the condition of the surrounding fence, individual
              posts, rails, panels, gates or sections may be repaired while the
              rest of the fence remains in place.
            </p>

            <p>
              Winnett Fence focuses on practical solutions and clear
              communication. Whether you need to restore an existing fence or
              install something completely new, we’ll help you understand the
              available options before work begins.
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
                Fence Repair in North Attleboro
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Weather, age, soil movement and accidental damage can all cause
                problems with an otherwise serviceable fence. We repair many
                common issues without automatically recommending a full
                replacement.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                If only part of the fence is damaged, we’ll evaluate the
                affected area and determine whether it can be repaired safely
                and economically.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">
                Repairs We Commonly Handle
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
              New Fence Installation in North Attleboro
            </h2>

            <p className="mt-4 text-gray-600">
              When a fence has reached the end of its useful life or you’re
              creating a new enclosed area, we also provide complete residential
              fence installation.
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
              Winnett Fence is an owner-operated company serving North Attleboro
              and nearby communities. We focus on responsive communication,
              dependable scheduling and work that fits the actual needs of the
              property.
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
              North Attleboro Fence FAQs
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
      <NearbyAreasSection currentTown="North Attleboro" />

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Fence Repair in North Attleboro?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From a damaged gate or broken post to larger storm repairs and new
            fence installation, contact Winnett Fence for a free on-site
            estimate.
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
