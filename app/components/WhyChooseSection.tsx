import {
  ShieldCheck,
  Clock,
  MapPin,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "Local & Reliable",
    description:
      "Locally owned and serving homeowners throughout the Attleboro area and surrounding Southeastern Massachusetts communities.",
    icon: MapPin,
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Careful repairs and installations using quality materials and proven installation methods.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Service",
    description:
      "Clear communication, dependable scheduling, and straightforward recommendations from estimate through completion.",
    icon: Clock,
  },
  {
    title: "Owner-Operated",
    description:
      "Work directly with Winnett Fence from your initial estimate through the completion of your project.",
    icon: UserCheck,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Why Winnett Fence
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Straightforward Service. Quality Work.
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you need a damaged fence repaired or a completely new
            installation, we focus on practical solutions, clear communication,
            and workmanship built to last.
          </p>
        </div>

        {/* REASONS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-200 p-7 hover:shadow-md hover:border-gray-300 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-black" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-700">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Free On-Site Estimates
            </span>

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Licensed & Insured
            </span>

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Residential Fence Specialists
            </span>

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Repairs & New Installations
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
