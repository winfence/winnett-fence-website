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

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 max-w-xl">
      <h2 className="text-2xl font-semibold mb-2">
        Request a Free Quote
      </h2>
      <p className="text-gray-600 mb-6">
        Fence repair & installation — serving Attleboro and surrounding MA towns.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-0"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-0"
            placeholder="john@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-0"
            placeholder="857-702-9780"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Service Needed
          </label>
          <select
            name="service"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white"
          >
            <option>Fence Repair</option>
            <option>Vinyl Fence</option>
            <option>Wood Fence</option>
            <option>Chain Link Fence</option>
            <option>Aluminum Fence</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Project Details
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-0"
            placeholder="Tell us what’s going on…"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-lg py-4 font-medium hover:bg-gray-900 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Request Quote"}
        </button>
