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

    const data = await res.json(); // 🔑 THIS IS THE KEY

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
        Request a Free Quote
      </h2>

      <p className="text-gray-600 mb-6">
        Quality fence repair & installation you can trust.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          name="phone"
          required
          placeholder="Phone"
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
          placeholder="Tell us about your project"
          rows={4}
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Sending..." : "Request Quote"}
        </button>

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
