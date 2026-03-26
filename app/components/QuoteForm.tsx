"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    google?: typeof google;
  }
}

export default function QuoteForm() {
  const router = useRouter();
  const addressInputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      router.push("/thank-you");
    }, 2000);

    return () => clearTimeout(timer);
  }, [success, router]);

  useEffect(() => {
    if (!window.google || !addressInputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      addressInputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "address_components", "geometry"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const formatted = place.formatted_address || addressInputRef.current?.value || "";
      setAddress(formatted);
    });

    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: address || formData.get("address"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { success?: boolean; error?: string } = {};

      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setAddress("");
      setSuccess(true);
      setError("");
    } catch (err) {
      console.error("Quote form submission failed:", err);
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Request a Free Quote</h2>

      <p className="text-gray-600 mb-6">
        Quality fence repair & installation you can trust.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
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
          type="tel"
          required
          placeholder="Phone"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          ref={addressInputRef}
          name="address"
          type="text"
          required
          placeholder="Project Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="street-address"
          className="w-full border rounded-lg px-4 py-3"
        />

        <select
          name="service"
          required
          defaultValue=""
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Fence Repair">Fence Repair</option>
          <option value="Vinyl Fence">Vinyl Fence</option>
          <option value="Wood Fence">Wood Fence</option>
          <option value="Chain Link Fence">Chain Link Fence</option>
          <option value="Aluminum Fence">Aluminum Fence</option>
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

        <div aria-live="polite" className="min-h-[24px]">
          {success ? (
            <p className="text-green-600 text-sm text-center">
              ✅ Request sent! Redirecting…
            </p>
          ) : error ? (
            <p className="text-red-600 text-sm text-center">{error}</p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
