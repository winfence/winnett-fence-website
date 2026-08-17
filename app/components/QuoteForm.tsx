"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const addressInputRef = useRef<HTMLInputElement | null>(null);

declare global {
  interface Window {
    google?: any;
  }
}

export default function QuoteForm() {
  const router = useRouter();

  const addressContainerRef = useRef<HTMLDivElement | null>(null);
  const autocompleteRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [address, setAddress] = useState("");
  const [addressSelected, setAddressSelected] = useState(false);

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      router.push("/thank-you");
    }, 2000);

    return () => clearTimeout(timer);
  }, [success, router]);

  useEffect(() => {
  let attempts = 0;

  const initAutocomplete = () => {
    if (
      !window.google?.maps?.places ||
      !addressInputRef.current
    ) {
      attempts++;

      if (attempts < 20) {
        setTimeout(initAutocomplete, 250);
      }

      return;
    }

    const autocomplete =
      new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address"],
        }
      );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      const formattedAddress =
        place.formatted_address || "";

      if (!formattedAddress) {
        setAddressSelected(false);
        setError(
          "Please select your project address from the suggestions."
        );
        return;
      }

      setAddress(formattedAddress);
      setAddressSelected(true);
      setError("");
    });

    return autocomplete;
  };

  const autocomplete = initAutocomplete();

  return () => {
    if (
      autocomplete &&
      window.google?.maps?.event
    ) {
      window.google.maps.event.clearInstanceListeners(
        autocomplete
      );
    }
  };
}, []);

        addressContainerRef.current.innerHTML = "";
        addressContainerRef.current.appendChild(autocomplete);

        autocompleteRef.current = autocomplete;
      } catch (err) {
        console.error(
          "Google address autocomplete failed:",
          err
        );
      }
    };

    initAutocomplete();

    return () => {
      if (autocompleteRef.current) {
        autocompleteRef.current.remove();
        autocompleteRef.current = null;
      }
    };
  }, []);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) return;

    setError("");
    setSuccess(false);

    if (!addressSelected || !address) {
      setError(
        "Please select your project address from the Google suggestions."
      );
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("address", address);

    const photos = formData
      .getAll("photos")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    if (photos.length > 3) {
      setError("Please upload no more than 3 photos.");
      setLoading(false);
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/heic",
      "image/heif",
    ];

    for (const photo of photos) {
      if (!allowedTypes.includes(photo.type)) {
        setError(
          "Please upload JPG, PNG, WebP, HEIC, or HEIF images only."
        );
        setLoading(false);
        return;
      }

      if (photo.size > 5 * 1024 * 1024) {
        setError(
          "Each photo must be 5 MB or smaller."
        );
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      let data: {
        success?: boolean;
        error?: string;
      } = {};

      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok || !data.success) {
        throw new Error(
          data.error ||
            "Something went wrong. Please try again."
        );
      }

      form.reset();

      setAddress("");
      setAddressSelected(false);

      if (autocompleteRef.current) {
        autocompleteRef.current.value = "";
      }

      setSuccess(true);
      setError("");
    } catch (err) {
      console.error(
        "Quote form submission failed:",
        err
      );

      setSuccess(false);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
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

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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
          onChange={(e) => {
            setAddress(e.target.value);
        
            // If the customer edits the field after selecting a Google result,
            // require them to select an address again.
            setAddressSelected(false);
          }}
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
          <option value="Fence Repair">
            Fence Repair
          </option>
          <option value="Vinyl Fence">
            Vinyl Fence
          </option>
          <option value="Wood Fence">
            Wood Fence
          </option>
          <option value="Chain Link Fence">
            Chain Link Fence
          </option>
          <option value="Aluminum Fence">
            Aluminum Fence
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows={4}
          className="w-full border rounded-lg px-4 py-3"
        />

        <div>
          <label
            htmlFor="photos"
            className="block font-medium text-gray-900 mb-2"
          >
            Upload photos{" "}
            <span className="font-normal text-gray-500">
              (optional)
            </span>
          </label>

          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />

          <p className="mt-2 text-xs text-gray-500">
            Add up to 3 photos of the fence or damaged area. Maximum 5 MB per photo.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-lg font-medium disabled:opacity-50"
        >
          {loading
            ? "Sending..."
            : "Request Quote"}
        </button>

        <div
          aria-live="polite"
          className="min-h-[24px]"
        >
          {success ? (
            <p className="text-green-600 text-sm text-center">
              ✅ Request sent! Redirecting…
            </p>
          ) : error ? (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
