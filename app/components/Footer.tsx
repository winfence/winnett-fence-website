import Link from "next/link";
import Image from "next/image";

const services = [
  {
    label: "Fence Repair",
    href: "/services/fence-repair",
  },
  {
    label: "Vinyl Fence Installation",
    href: "/services/vinyl-fence",
  },
  {
    label: "Wood Fence Installation",
    href: "/services/wood-fence",
  },
  {
    label: "Chain Link Fence",
    href: "/services/chain-link-fence",
  },
  {
    label: "Aluminum Fence",
    href: "/services/aluminum-fence",
  },
];

const serviceAreas = [
  {
    label: "Attleboro",
    href: "/areas/attleboro-ma",
  },
  {
    label: "North Attleboro",
    href: "/areas/north-attleboro-ma",
  },
  {
    label: "Mansfield",
    href: "/areas/mansfield-ma",
  },
  {
    label: "Norton",
    href: "/areas/norton-ma",
  },
  {
    label: "Foxborough",
    href: "/areas/foxborough-ma",
  },
  {
    label: "Wrentham",
    href: "/areas/wrentham-ma",
  },
  {
    label: "Plainville",
    href: "/areas/plainville-ma",
  },
  {
    label: "Seekonk",
    href: "/areas/seekonk-ma",
  },
  {
    label: "Rehoboth",
    href: "/areas/rehoboth-ma",
  },
  {
    label: "Easton",
    href: "/areas/easton-ma",
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              aria-label="Winnett Fence home"
              className="inline-block"
            >
              <Image
                src="/images/logo/winnett-fence-logo-dark.png"
                alt="Winnett Fence"
                width={200}
                height={70}
                className="mb-6"
              />
            </Link>

            <p className="text-sm leading-relaxed max-w-sm">
              Residential fence repair and installation throughout Southeastern
              Massachusetts. Owner-operated service focused on practical
              solutions, clear communication, and dependable workmanship.
            </p>

            <Link
              href="/#quote-form"
              className="inline-block mt-6 bg-white text-zinc-900 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-100 transition"
            >
              Request Free Estimate
            </Link>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href="/services"
                  className="font-semibold text-white hover:text-zinc-300 transition"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICE AREAS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Service Areas
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {serviceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="hover:text-white transition"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Winnett Fence
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                Serving Southeastern Massachusetts
              </li>

              <li>
                <a
                  href="tel:8577029780"
                  className="hover:text-white transition"
                >
                  (857) 702-9780
                </a>
              </li>

              <li>
                <a
                  href="mailto:robert@winnettoutdoor.services"
                  className="hover:text-white transition break-all"
                >
                  robert@winnettoutdoor.services
                </a>
              </li>

              <li className="pt-2">
                <Link
                  href="/#quote-form"
                  className="font-semibold text-white hover:text-zinc-300 transition"
                >
                  Get a Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-zinc-800 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>
              © {new Date().getFullYear()} Winnett Fence LLC. All rights reserved.
            </p>

            <p>
              Fence Repair & Installation in Southeastern Massachusetts
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
