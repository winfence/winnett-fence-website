const reviews = [
  {
    name: "Taylor Lopez Wood",
    text:
      "Robert was wonderful beginning to end, great communication and professional. He repaired our very broken fence for a reasonable price. Would absolutely recommend and use in the future if needed.",
  },
  {
    name: "Mel Tibbetts",
    text:
      "Robert Winnett does great work. My vinyl fence broke during a winter storm and one of the posts broke completely. Robert took the time to do the job right. He was very thoughtful about the whole process and communicated all that he was doing throughout the repair process. He is very professional and gets the job done right the first time!",
  },
  {
    name: "Kate Meagher",
    text:
      "A tree fell on our gate, and Rob came out the next day to evaluate the damage. Rob and his team were timely, efficient, professional, communicative and affordable. Next time we have any issues with our fence, I know who we will call!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Customer Reviews
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Trusted for Fence Repairs & Installations
          </h2>

          <p className="mt-4 text-gray-600">
            See why homeowners recommend Winnett Fence for professional,
            responsive and dependable service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div
                className="text-lg mb-5"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              <p className="text-gray-700 leading-relaxed">
                “{review.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {review.name}
                </p>

                <p className="text-sm text-gray-500">
                  Facebook Recommendation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
