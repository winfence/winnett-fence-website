import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-10 text-center">
        <CheckCircle className="h-14 w-14 mx-auto text-green-600 mb-4" />

        <h1 className="text-3xl font-bold mb-3">
          Thanks — We’ve Got Your Request!
        </h1>

        <p className="text-gray-600 mb-6">
          Your request for a free fence estimate has been received.
          We’ll review the details and get back to you shortly.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 mb-8">
          <p className="font-medium text-gray-800 mb-1">
            What happens next?
          </p>
          <ul className="space-y-1">
            <li>• We’ll contact you within 1 business day</li>
            <li>• We may call or email to confirm details</li>
            <li>• You’ll receive a clear, no-pressure estimate</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
          >
            Back to Home
          </Link>

          <a
            href="tel:18577029780"
            className="inline-flex justify-center items-center border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Call Us Now
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Winnett Fence · Serving Attleboro & surrounding Massachusetts towns
        </p>
      </div>
    </section>
  );
}
