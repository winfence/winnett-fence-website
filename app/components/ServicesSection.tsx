import {
  Wrench,
  Fence,
  Shield,
  Hammer,
  Grid3X3
} from "lucide-react";

const services = [
  {
    title: "Fence Repair",
    description: "Fix leaning, broken, or damaged fences quickly and affordably.",
    icon: Wrench,
  },
  {
    title: "Vinyl Fencing",
    description: "Low-maintenance, clean-looking vinyl fences built to last.",
    icon: Shield,
  },
  {
    title: "Wood Fencing",
    description: "Classic wood fences for privacy, style, and durability.",
    icon: Hammer,
  },
  {
    title: "Chain Link",
    description: "Strong, cost-effective fencing for homes and businesses.",
    icon: Grid3X3,
  },
  {
    title: "Aluminum Fencing",
    description: "Elegant metal fencing with strength and curb appeal.",
    icon: Fence,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Fence Services
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          From small repairs to full installations, Winnett Fence delivers
          quality craftsmanship across Massachusetts.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
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
