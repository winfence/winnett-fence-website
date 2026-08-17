import type { Metadata } from "next";
import NearbyAreasSection from "../../components/NearbyAreasSection";
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
  title: "Fence Repair & Installation in Plainville, MA | Winnett Fence",
  description:
    "Fence repair and installation in Plainville, MA. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides new residential fence installation. Free estimates.",
};

const repairServices = [
  "Broken and rotted fence posts",
  "Leaning fence sections",
  "Vinyl fence panel and rail repairs",
  "Sagging or damaged gates",
  "Wind and storm damage",
  "Chain-link fence repairs",
  "Broken wood rails and pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Clean, low-maintenance vinyl fencing for privacy, backyards and residential property lines.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Traditional wood fencing for privacy, security and a natural appearance around your property.",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    description:
      "Practical and durable fencing for yards, pets and residential boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Low-maintenance aluminum fencing for an attractive boundary without blocking the view.",
    icon: Fence,
  },
];

const faqs = [
  {
    question: "Can you repair my fence instead of replacing the whole thing?",
    answer:
      "Often, yes. If most of the fence is still structurally sound, individual posts, rails, panels or damaged sections may be repaired or replaced without rebuilding the entire fence.",
  },
  {
    question: "Can you replace individual rotted or broken fence posts?",
    answer:
      "Yes. Individual posts can often be replaced while preserving the surrounding fence when the rest of the structure is still in usable condition.",
  },
  {
    question: "Do you repair gates that are sagging or won't close?",
    answer:
      "Yes. We repair many common gate problems including sagging, misalignment, damaged hinges, latch problems and failed gate posts.",
  },
  {
    question: "Can you repair a fence after a tree or branch falls on it?",
    answer:
      "Yes. We repair fence damage caused by fallen trees, branches, wind and storms. Depending on the damage, only the affected sections may need to be rebuilt.",
  },
  {
    question: "Do you provide free estimates in Plainville?",
    answer:
      "Yes. Winnett Fence provides free on-site estimates for fence repair, replacement and new installation projects in Plainville.",
  },
];

export default function PlainvilleCityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Serving Plainville, Massachusetts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation in Plainville, MA
            </h1>

            <p className="mt-6 text-xl font-medium">
              From one broken post to a complete new fence.
            </p>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides residential fence repair and installation
              throughout Plainville. We repair damaged posts, panels, rails,
              gates and fence sections and install new vinyl, wood, chain-link
              and aluminum fencing.
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
            Residential Fence Service in Plainville
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              New England weather and normal wear can eventually take a toll on
              a fence. Posts can loosen or rot, gates can fall out of alignment
              and individual panels or rails can become damaged while the rest
              of the fence remains in good condition.
            </p>

            <p>
              That does not always mean you need a completely new fence.
              Winnett Fence evaluates the existing structure and looks for a
              practical repair when one makes sense. When replacement is the
              better option, we can handle that too.
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
                Fence Repair in Plainville, MA
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Repairing a damaged section can often restore the function and
                appearance of a fence without the expense of replacing
                everything. We handle both small repairs and more involved
                section replacements.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We work with vinyl, wood, chain-link and aluminum fencing and
                can evaluate problems caused by age, weather, ground movement,
                impact or storm damage.
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
              New Fence Installation in Plainville
            </h2>

            <p className="mt-4 text-gray-600">
              Need more privacy, a secure area for pets or a new property
              boundary? We also provide complete residential fence installation
              when repair isn't the right solution.
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
              clear communication, dependable scheduling and practical
              solutions instead of automatically recommending more work than a
              property needs.
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
              Plainville Fence Repair FAQs
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

      <NearbyAreasSection currentTown="Plainville" />

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Fence That Needs Repair in Plainville?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us what is going on and upload a few photos with your quote
            request. Winnett Fence provides free on-site estimates for fence
            repairs and new installations.
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
