import Link from "next/link";
import {
  Wrench,
  Shield,
  Hammer,
  Grid3X3,
  Fence,
} from "lucide-react";

const services = [
  {
    title: "Fence Repair",
    href: "/services/repairs",
    icon: Wrench,
  },
  {
    title: "Vinyl Fencing",
    href: "/services/vinyl",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    href: "/services/wood",
    icon: Hammer,
  },
  {
    title: "Chain-Link Fencing",
    href: "/services/chain-link",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    href: "/services/aluminum",
    icon: Fence,
  },
];

export default function ServiceLinksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Fence Services
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            Explore Our Fence Services
          </h2>

          <p className="mt-4 text-gray-600">
            Learn more about fence repair and the fencing materials Winnett
            Fence installs throughout Southeastern Massachusetts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition"
              >
                <Icon className="h-8 w-8 mb-4" />

                <h3 className="font-semibold text-lg group-hover:underline">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Learn more
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
