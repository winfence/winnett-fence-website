import Link from "next/link";

const towns = [
  { name: "Attleboro", href: "/areas/attleboro-ma" },
  { name: "North Attleboro", href: "/areas/north-attleboro-ma" },
  { name: "Mansfield", href: "/areas/mansfield-ma" },
  { name: "Norton", href: "/areas/norton-ma" },
  { name: "Foxborough", href: "/areas/foxborough-ma" },
  { name: "Wrentham", href: "/areas/wrentham-ma" },
  { name: "Plainville", href: "/areas/plainville-ma" },
  { name: "Seekonk", href: "/areas/seekonk-ma" },
  { name: "Rehoboth", href: "/areas/rehoboth-ma" },
  { name: "Easton", href: "/areas/easton-ma" },
];

type NearbyAreasSectionProps = {
  currentTown: string;
};

export default function NearbyAreasSection({
  currentTown,
}: NearbyAreasSectionProps) {
  const nearbyTowns = towns.filter(
    (town) => town.name !== currentTown
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Serving {currentTown} & Nearby Communities
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Winnett Fence serves {currentTown} and surrounding communities
          throughout Southeastern Massachusetts.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {nearbyTowns.map((town) => (
            <Link
              key={town.href}
              href={town.href}
              className="inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition"
            >
              {town.name}, MA
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
