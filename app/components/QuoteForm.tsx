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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" required placeholder="Name" />
      <input name="email" type="email" required placeholder="Email" />
      <input name="phone" required placeholder="Phone" />

      <select name="service">
        <option>Fence Repair</option>
        <option>Vinyl Fence</option>
        <option>Wood Fence</option>
        <option>Chain Link Fence</option>
        <option>Aluminum Fence</option>
      </select>

      <textarea name="message" placeholder="Tell us about your project" />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Request Quote"}
      </button>

      {success && <p className="text-green-600">Request sent successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
