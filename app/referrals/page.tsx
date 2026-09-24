"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

export default function ReferralsPage() {
  const [referrerName, setReferrerName] = useState("");
  const [referrerContact, setReferrerContact] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Winnett Fence Referral - ${customerName}`
    );

    const body = encodeURIComponent(
      [
        "NEW WINNETT FENCE REFERRAL",
        "",
        `Referrer Name: ${referrerName}`,
        `Referrer Email / Phone: ${referrerContact}`,
        "",
        `Referred Customer: ${customerName}`,
        `Customer Email / Phone: ${customerContact}`,
        "",
        `Notes: ${notes || "None provided"}`,
      ].join("\n")
    );

    window.location.href =
      `mailto:robert@winnettoutdoor.services?subject=${subject}&body=${body}`;
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-slate-950">
            <Gift className="h-8 w-8" />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            Winnett Fence Referral Program
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Refer a Friend.
            <span className="block text-amber-400">Get a $50 Gift Card.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Know someone who needs fence repair or a new fence? Send them to
            Winnett Fence and we'll send you a $50 gift card of your choice
            when their project is completed and paid in full.
          </p>

          <div className="mt-9">
            <a
              href="#refer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Refer Someone
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Simple & Easy
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              How the Referral Program Works
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Three simple steps. We'll take care of everything else.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white">
                <UserPlus className="h-7 w-7" />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-amber-600">
                Step 1
              </p>

              <h3 className="mt-2 text-xl font-bold">Send Us a Referral</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Refer a friend, neighbor, customer, or colleague who needs
                fence repair or installation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-amber-600">
                Step 2
              </p>

              <h3 className="mt-2 text-xl font-bold">We Handle the Project</h3>

              <p className="mt-3 leading-7 text-slate-600">
                We'll contact them, provide an estimate, and handle their fence
                project from start to finish.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                <Gift className="h-7 w-7" />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-amber-600">
                Step 3
              </p>

              <h3 className="mt-2 text-xl font-bold">You Get $50</h3>

              <p className="mt-3 leading-7 text-slate-600">
                After the project is completed and paid in full, we'll contact
                you to choose your $50 gift card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NO LIMIT */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Gift className="mx-auto h-10 w-10 text-amber-600" />

          <h2 className="mt-4 text-3xl font-black">
            There's No Limit to Referrals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Have another friend or neighbor who needs fence work? Send them our
            way. You can earn another $50 gift card for every qualifying new
            customer you refer.
          </p>
        </div>
      </section>

      {/* BUSINESS REFERRALS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Handshake className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-amber-600">
              Local Businesses & Contractors
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Have a Customer Who Needs Fence Work?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our referral program isn't just for homeowners. Landscapers, tree
              companies, contractors, real estate professionals, property
              managers, and other local businesses are welcome to participate.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Send your customer to Winnett Fence. We'll take care of the
              estimate, communication, and fence work while keeping the process
              simple for you and your customer.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
            <HeartHandshake className="h-10 w-10 text-amber-400" />

            <h3 className="mt-5 text-2xl font-black">
              Business Referrals Earn $50 Too
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              When your referred customer completes their project and pays
              their final invoice, we'll send you a $50 gift card of your
              choice.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "No selling required",
                "No quoting required",
                "We'll communicate directly with the customer",
                "No limit on qualifying referrals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REFERRAL FORM */}
      <section id="refer" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Send a Referral
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Know Someone Who Needs Fence Work?
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Send us their information and we'll take it from here.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl bg-white p-6 text-slate-900 shadow-xl sm:p-8"
          >
            <h3 className="text-xl font-bold">Your Information</h3>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="referrerName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name *
                </label>

                <input
                  id="referrerName"
                  type="text"
                  required
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="referrerContact"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Email or Phone *
                </label>

                <input
                  id="referrerContact"
                  type="text"
                  required
                  value={referrerContact}
                  onChange={(e) => setReferrerContact(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Email or phone"
                />
              </div>
            </div>

            <div className="my-8 border-t border-slate-200" />

            <h3 className="text-xl font-bold">Who Are You Referring?</h3>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="customerName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Customer Name *
                </label>

                <input
                  id="customerName"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Customer name"
                />
              </div>

              <div>
                <label
                  htmlFor="customerContact"
                  className="mb-2 block text-sm font-semibold"
                >
                  Customer Email or Phone *
                </label>

                <input
                  id="customerContact"
                  type="text"
                  required
                  value={customerContact}
                  onChange={(e) => setCustomerContact(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  placeholder="Email or phone"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-semibold"
              >
                Anything We Should Know?
              </label>

              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                placeholder="Fence repair, new fence, best time to contact them, etc."
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Submit Referral
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Please make sure the person you're referring is comfortable
              having Winnett Fence contact them.
            </p>
          </form>
        </div>
      </section>

      {/* TERMS */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-bold">Referral Program Terms</h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Referral must be a new Winnett Fence customer. The referring person
            or business must be identified when the customer requests an
            estimate or through the referral form. A $50 gift card is earned
            after the referred customer's qualifying project is completed and
            the final invoice is paid in full. One referral reward is issued
            per new referred customer. Referral rewards are not available
            retroactively for existing customers or projects. There is no
            limit to the number of qualifying new customers you may refer.
            Winnett Fence reserves the right to modify or discontinue the
            referral program.
          </p>
        </div>
      </section>
    </main>
  );
}
