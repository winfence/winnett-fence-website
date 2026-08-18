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
  title: "Fence Repair & Installation in Rehoboth, MA",
  description:
    "Fence repair and installation in Rehoboth, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides new residential fence installation. Free estimates.",
};

const repairServices = [
  "Broken or rotted fence posts",
  "Leaning fence sections",
  "Vinyl panel and rail repairs",
  "Gate repairs and realignment",
  "Storm and tree damage",
  "Chain-link fence repairs",
  "Damaged wood rails and pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance vinyl fencing for privacy, property boundaries and residential yards.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, separation and a natural appearance on larger properties.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Durable, practical fencing for yards, pets and larger residential boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Attractive aluminum fencing that adds security while maintaining an open view.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair a fence without replacing the entire run?",
    answer:
      "Yes. If the surrounding fence is still structurally sound, we can often replace individual posts, rails, panels or damaged sections while preserving the rest of the fence.",
  },
  {
    question: "Do you repair fences damaged by fallen trees or branches?",
    answer:
      "Yes. Tree and storm damage are common repair situations. We can assess the affected area and determine whether only the damaged sections need to be rebuilt.",
  },
  {
    question: "Can you repair leaning fence sections?",
    answer:
      "Often, yes. Leaning sections may be caused by failed posts, ground movement or deteriorated materials. We can determine whether the area can be stabilized or whether individual posts or sections should be replaced.",
  },
  {
    question: "Do you repair gates and gate posts?",
    answer:
      "Yes. We repair many common gate problems including sagging, alignment issues, damaged hardware and failed gate posts.",
  },
  {
    question: "Do you provide free fence estimates in Rehoboth?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repair, replacement and new installation projects in Rehoboth.",
  },
];

export default function RehobothCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Rehoboth, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Rehoboth, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              Practical fence solutions for residential and larger properties.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides fence repair and residential installation
              throughout Rehoboth. We handle damaged posts, leaning sections,
              gates, storm damage, vinyl repairs, chain-link repairs and complete
              new fence installation.
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
            Residential Fence Service in Rehoboth
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Fencing on larger lots and exposed properties can take a beating
              from weather, falling branches, soil movement and normal wear.
              Often, only a portion of the fence is damaged while the rest
              remains perfectly serviceable.
            </p>

            <p>
              Winnett Fence provides both repair and new installation, so we can
              evaluate the condition of the existing fence and recommend a
              practical solution rather than assuming the entire system needs to
              be replaced.
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
                Fence Repair in Rehoboth, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                A failed post, damaged gate or storm-damaged section does not
                always justify replacing an entire fence. When the surrounding
                structure is still in good condition, targeted repairs can
                restore the fence and extend its useful life.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We repair vinyl, wood, chain-link and aluminum fencing and can
                handle both small repairs and larger damaged sections.
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
              New Fence Installation in Rehoboth
            </h2>

            <p className="mt-4 text-gray-600">
              Whether you need privacy around the home, a defined property
              boundary or an enclosed area for pets, Winnett Fence also provides
              complete residential fence installation.
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
              practical recommendations, clear communication and dependable
              scheduling from the initial estimate through completion.
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
              Rehoboth Fence Repair FAQs
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
      <NearbyAreasSection currentTown="Rehoboth" />

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Fence Repair in Rehoboth?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From storm-damaged sections and failed posts to complete new fence
            installations, contact Winnett Fence for a free on-site estimate.
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
