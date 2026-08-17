const faqs = [
  {
    question: "Can you repair just one section of my fence?",
    answer:
      "Yes. If the rest of the fence is still in good condition, we can often repair or replace only the damaged section instead of replacing the entire fence.",
  },
  {
    question: "Do you repair fences installed by another company?",
    answer:
      "Yes. We repair existing fences regardless of who originally installed them, as long as the fence can be repaired safely and properly.",
  },
  {
    question: "Can you replace individual fence posts?",
    answer:
      "Yes. Broken, rotted, loose, or leaning posts can often be replaced individually while keeping the rest of the fence in place.",
  },
  {
    question: "Can you match my existing vinyl fence?",
    answer:
      "In many cases, yes. We can often source replacement rails, posts, pickets, or panels that closely match the existing fence. Exact matches depend on the manufacturer, age, and style of the fence.",
  },
  {
    question: "Do you repair gates?",
    answer:
      "Yes. We repair and adjust many common gate problems, including sagging gates, damaged hardware, alignment issues, broken posts, and gates that no longer close properly.",
  },
  {
    question: "Do you repair storm or tree damage?",
    answer:
      "Yes. We regularly evaluate fences damaged by wind, fallen branches, trees, and other storm-related problems. Whenever practical, we repair the damaged area instead of replacing the entire fence.",
  },
  {
    question: "How much does fence repair cost?",
    answer:
      "Repair cost depends on the type of fence, the extent of the damage, materials needed, and access to the damaged area. Winnett Fence provides free on-site estimates so you can understand the cost before deciding how to proceed.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site estimates for fence repairs, replacements, and new fence installations throughout our service area.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Fence Repair Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Not sure whether your fence can be repaired? Here are answers to
            some of the questions we hear most often.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-gray-200 rounded-xl bg-gray-50"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-lg flex items-center justify-between gap-4">
                <span>{faq.question}</span>

                <span className="text-2xl font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
