import Link from "next/link";

const services = [
  {
    title: "Fence Repair",
    href: "/services/fence-repair",
    description:
      "Fast, reliable fence repairs to restore safety, appearance, and function.",
  },
  {
    title: "Vinyl Fence Installation",
    href: "/services/vinyl-fence",
    description:
      "Low-maintenance vinyl fencing for privacy, durability, and curb appeal.",
  },
  {
    title: "Wood Fence Installation",
    href: "/services/wood-fence",
    description:
      "Classic wood fencing built to last and customized to your property.",
  },
  {
    title: "Chain Link Fence",
    href: "/services/chain-link-fence",
    description:
      "Affordable, durable fencing for residential and commercial needs.",
  },
  {
    title: "Aluminum Fence",
    href: "/services/aluminum-fence",
    description:
      "Elegant aluminum fencing that combines strength and style.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Fence Services in Attleboro, MA
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          Winnett Fence provides professional fence installation and repair
          services throughout Southeastern Massachusetts.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block border rounded-2xl p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
