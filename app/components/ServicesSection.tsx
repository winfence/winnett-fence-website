import {
  Wrench,
  Fence,
  Shield,
  Hammer,
  Grid3X3,
  Check,
} from "lucide-react";

const repairServices = [
  "Broken or rotted fence posts",
  "Leaning fence sections",
  "Vinyl panel and rail replacement",
  "Gate repairs and adjustments",
  "Storm and tree damage",
  "Damaged chain-link fencing",
  "Broken or missing wood pickets",
  "Partial fence section replacement",
];

const installationServices = [
  {
    title: "Vinyl Fencing",
    description:
      "Low-maintenance privacy and decorative vinyl fencing built for long-term durability.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description:
      "Classic wood privacy and decorative fencing with professional installation.",
    icon: Hammer,
  },
  {
    title: "Chain Link",
    description:
      "Durable and cost-effective chain-link fencing for residential properties.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description:
      "Clean, elegant aluminum fencing that adds security without blocking the view.",
    icon: Fence,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Fence Services
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Fence Repair First. New Installations Too.
          </h2>

          <p className="mt-4 text-gray-600">
            Whether you need one damaged section repaired or an entirely new
            fence, Winnett Fence can help.
          </p>
        </div>

        {/* FEATURED REPAIR SECTION */}
        <div className="bg-zinc-900 text-white rounded-2xl p-8 md:p-10 mb-10 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div>
              <Wrench className="h-10 w-10 mb-5" />

              <h3 className="text-2xl md:text-3xl font-bold">
                Fence Repair
              </h3>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                A damaged fence does not always need to be completely replaced.
                We repair existing vinyl, wood, chain-link and aluminum fences
                whenever practical, helping homeowners restore their fence
                without paying for a full replacement.
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                From a single broken post to storm-damaged sections, we'll
                evaluate the problem and recommend a practical repair whenever
                possible.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-5">
                Common fence repairs include:
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {repairServices.map((repair) => (
                  <div
                    key={repair}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 mt-0.5 shrink-0" />

                    <span className="text-zinc-200">
                      {repair}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* INSTALLATION SERVICES */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center">
            New Fence Installation
          </h3>

          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
            Need more than a repair? We also install complete residential
            fencing in several popular materials.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {installationServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <Icon className="h-10 w-10 mb-4 text-black" />

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
