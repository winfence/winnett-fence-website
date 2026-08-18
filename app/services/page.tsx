import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Shield,
  Hammer,
  Grid3X3,
  Fence,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fence Repair & Installation Services",
  description:
    "Explore fence repair and installation services from Winnett Fence, including vinyl, wood, chain-link and aluminum fencing throughout Southeastern Massachusetts.",
  alternates: {
    canonical: "/services",
  },
};

const installationServices = [
  {
    title: "Vinyl Fence Installation",
    href: "/services/vinyl-fence",
    description:
      "Low-maintenance vinyl fencing for privacy, backyards and residential property boundaries.",
    icon: Shield,
  },
  {
    title: "Wood Fence Installation",
    href: "/services/wood-fence",
    description:
      "Traditional wood fencing for privacy, security and a natural residential appearance.",
    icon: Hammer,
  },
  {
    title: "Chain Link Fence",
    href: "/services/chain-link-fence",
    description:
      "Durable and cost-effective fencing for yards, pets and residential property boundaries.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fence",
    href: "/services/aluminum-fence",
    description:
      "Decorative, low-maintenance aluminum fencing that provides security without blocking the view.",
    icon: Fence,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Winnett Fence Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fence Repair & Installation Services
            </h1>

            <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
              Winnett Fence provides residential fence repair, replacement and
              installation throughout Southeastern Massachusetts. We work with
              vinyl, wood, chain-link and aluminum fencing.
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

      {/* FEATURED REPAIR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <Wrench className="h-11 w-11 mb-5" />

                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Featured Service
                </p>

                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Fence Repair
                </h2>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  A broken or damaged fence does not always need to be
                  completely replaced. Winnett Fence repairs existing vinyl,
                  wood, chain-link and aluminum fences whenever practical.
                </p>

                <Link
                  href="/services/fence-repair"
                  className="inline-flex items-center gap-2 mt-7 font-semibold"
                >
                  Explore Fence Repair
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-5">
                  Common repairs include:
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Broken or rotted posts",
                    "Leaning fence sections",
                    "Vinyl panels and rails",
                    "Gate repairs",
                    "Storm and tree damage",
                    "Chain-link damage",
                    "Wood rails and pickets",
                    "Partial section replacement",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              New Fence Installation
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Choose the Right Fence for Your Property
            </h2>

            <p className="mt-4 text-gray-600">
              When repair is not the right solution—or you’re starting a new
              project—we install several popular residential fence materials.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {installationServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-gray-300 transition"
                >
                  <Icon className="h-10 w-10 mb-5" />

                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 mt-6 font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY WINNETT */}
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
              Whether you need a small repair or a complete new fence, Winnett
              Fence focuses on straightforward recommendations, clear
              communication and dependable workmanship.
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

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not Sure Which Fence Service You Need?
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us about your project and upload a few photos if you have
            them. We can help determine whether repair, replacement or a new
            installation makes the most sense.
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
