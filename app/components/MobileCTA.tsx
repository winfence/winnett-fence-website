"use client";

import { Phone, ClipboardList } from "lucide-react";

export default function MobileCTA() {
  const scrollToQuote = () => {
    const quoteForm = document.getElementById("quote-form");

    if (quoteForm) {
      quoteForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white p-3 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:8577029780"
          className="flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 font-semibold text-zinc-900"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>

        <button
          type="button"
          onClick={scrollToQuote}
          className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 font-semibold text-white"
        >
          <ClipboardList className="h-5 w-5" />
          Free Estimate
        </button>
      </div>
    </div>
  );
}
