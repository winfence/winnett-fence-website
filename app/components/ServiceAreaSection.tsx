import { Map } from "lucide-react";

const towns = [
  { name: "Attleboro", slug: "/areas/attleboro-ma" },
  { name: "North Attleboro" },
  { name: "Mansfield", slug: "/areas/mansfield-ma" },
  { name: "Norton", slug: "/areas/norton-ma" },
  { name: "Foxborough",slug: "/areas/foxborough-ma" },
  { name: "Wrentham" },
  { name: "Plainville" },
  { name: "Seekonk" },
  { name: "Rehoboth" },
  { name: "Easton" },
];

export default function ServiceAreaSection() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <Map className="h-10 w-10 mx-auto mb-4 text-black" />

          <h2 className="text-3xl font-bold mb-3">
            Service Areas
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Winnett Fence proudly serves homeowners and businesses throughout
            Southeastern Massachusetts. If you’re nearby, chances are we’ve got
            you covered.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {towns.map((town) => (
            <li
              key={town.name}
              className="bg-white rounded-xl py-4 px-2 text-sm font-medium shadow-sm"
            >
              {town.slug ? (
                <Link
                  href={town.slug}
                  className="hover:underline hover:text-black"
                >
                  {town.name}, MA
                </Link>
              ) : (
                <span className="text-gray-800">
                  {town.name}, MA
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don’t see your town listed? Contact us — we may still be able to help.
        </p>
      </div>
    </section>
  );
}
