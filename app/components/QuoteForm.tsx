"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("API error");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">
        Get a Free Fence Estimate
      </h2>

      <p className="text-zinc-600 mb-6">
        Fast, reliable fence installation & repairs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-3"
        />

        <select
          name="service"
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>Fence Repair</option>
          <option>Vinyl Fence</option>
          <option>Wood Fence</option>
          <option>Chain Link Fence</option>
          <option>Aluminum Fence</option>
        </select>

        <textarea
          name="message"
          placeholder="Briefly describe your project"
          rows={4}
          className="w-full border rounded-lg px-4 py-3"
        />

        {/* CTA SECTION */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {loading ? "Sending..." : "Request Free Estimate"}
          </button>

          <p className="mt-2 text-xs text-center text-zinc-500">
            No obligation • Fast response
          </p>

          <p className="mt-3 text-xs text-center text-zinc-600">
            Prefer to talk? Call{" "}
            <span className="font-medium">(857) 702-9780</span>
          </p>
        </div>

        {success && (
          <p className="text-green-600 text-sm text-center">
            ✅ Request sent successfully!
          </p>
        )}

        {error && (
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}
