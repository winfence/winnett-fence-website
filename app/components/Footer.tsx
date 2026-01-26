import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Winnett Fence
            </h3>
            <p className="text-sm leading-relaxed">
              Professional fence installation and repair services across
              Southeastern Massachusetts. Quality workmanship you can trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Fence Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Vinyl Fence Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Wood Fence Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Chain Link Fence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Aluminum Fence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Attleboro, MA</li>
              <li>
                <a
                  href="tel:18577029780"
                  className="hover:text-white"
                >
                  (508) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:robert@winnettoutdoor.services"
                  className="hover:text-white"
                >
                  robert@winnettoutdoor.services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Winnett Fence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
