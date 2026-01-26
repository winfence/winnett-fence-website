import { ShieldCheck, Clock, MapPin, ThumbsUp } from "lucide-react";

const reasons = [
  {
    title: "Local & Reliable",
    description:
      "Locally owned and operated, proudly serving Attleboro and surrounding Massachusetts towns.",
    icon: MapPin,
  },
  {
    title: "Quality Craftsmanship",
    description:
      "We take pride in doing the job right — durable materials, clean installs, no shortcuts.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time & Responsive",
    description:
      "Clear communication, dependable scheduling, and fast turnaround on repairs and installs.",
    icon: Clock,
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work and treat every property like it’s our own.",
    icon: ThumbsUp,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose Winnett Fence?
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Homeowners across Massachusetts trust Winnett Fence for honest pricing,
          quality workmanship, and dependable service.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition"
              >
                <Icon className="h-10 w-10 mx-auto mb-4 text-black" />

                <h3 className="text-lg font-semibold mb-2">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
