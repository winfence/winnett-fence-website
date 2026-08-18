import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Home,
  Clock,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Winnett Fence. Your fence estimate request has been received.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-gray-50">
      <section className="min-h-[75vh] flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full">

          {/* MAIN CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12 text-center">

            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-9 w-9 text-black" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Request Received
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Thanks — We’ve Got Your Request!
            </h1>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              Your free fence estimate request has been received. We’ll review
              the information you sent and reach out to discuss your project.
            </p>

            {/* WHAT HAPPENS NEXT */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6 md:p-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-5 text-center">
                What Happens Next?
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      We review your request
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      We’ll look over the project details you provided.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      We’ll contact you
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      We may call, text, or email to discuss the project and
                      confirm any additional details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Schedule your estimate
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      We’ll work with you to arrange the next step for your
                      fence repair or installation project.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="tel:8577029780"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                <Phone className="h-4 w-4" />
                Call 857-702-9780
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 px-7 py-4 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>

            </div>

            <p className="text-xs text-gray-400 mt-8">
              Winnett Fence LLC · Serving Southeastern Massachusetts
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
