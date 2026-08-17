import Image from "next/image";

const projects = [
  {
    title: "Storm Damage Repair",
    description:
      "A fallen tree damaged this wood fence. We repaired the affected section and restored the fence without replacing the entire run.",
    before: "/images/projects/storm-damage-before.jpg",
    after: "/images/projects/storm-damage-after.jpg",
    beforeAlt: "Storm damaged wood fence before repair",
    afterAlt: "Wood fence after storm damage repair",
  },
  {
    title: "Chain-Link Fence Repair",
    description:
      "Bent framework and damaged chain-link were repaired to restore the fence and avoid a full replacement.",
    before: "/images/projects/chain-link-repair-before.jpg",
    after: "/images/projects/chain-link-repair-after.jpg",
    beforeAlt: "Damaged chain-link fence before repair",
    afterAlt: "Chain-link fence after repair",
  },
  {
    title: "Broken Post Repair",
    description:
      "Failed posts caused this wood fence to collapse. New posts were installed so the existing fence could be saved.",
    before: "/images/projects/broken-post-repair-before.jpg",
    after: "/images/projects/broken-post-repair-after.jpg",
    beforeAlt: "Collapsed wood fence with broken posts before repair",
    afterAlt: "Wood fence restored with new posts after repair",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Recent Repair Projects
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Before & After Fence Repairs
          </h2>

          <p className="mt-4 text-zinc-300">
            A damaged fence does not always need to be completely replaced.
            Here are a few examples of fences we were able to repair and restore.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white text-zinc-900 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <Image
                    src={project.before}
                    alt={project.beforeAlt}
                    width={1600}
                    height={1200}
                    className="w-full h-72 lg:h-80 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-zinc-900/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Before
                  </span>
                </div>

                <div className="relative">
                  <Image
                    src={project.after}
                    alt={project.afterAlt}
                    width={1600}
                    height={1200}
                    className="w-full h-72 lg:h-80 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-white/95 text-zinc-900 text-sm font-semibold px-3 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold">
            Not sure if your fence can be repaired?
          </p>

          <p className="mt-2 text-zinc-300">
            Request a free estimate and we can help determine whether repair or replacement makes the most sense.
          </p>
        </div>
      </div>
    </section>
  );
}
