"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    google?: any;
  }
}

export default function QuoteForm() {
  const router = useRouter();

  const addressInputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [address, setAddress] = useState("");
  const [addressSelected, setAddressSelected] = useState(false);

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [service, setService] = useState("");
  const [preferredContact, setPreferredContact] = useState("");

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      router.push("/thank-you");
    }, 2000);

    return () => clearTimeout(timer);
  }, [success, router]);

  useEffect(() => {
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let autocomplete: any;

    const initAutocomplete = () => {
      if (
        !window.google?.maps?.places ||
        !addressInputRef.current
      ) {
        retryTimer = setTimeout(initAutocomplete, 250);
        return;
      }

      autocomplete = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: {
            country: "us",
          },
          fields: [
            "formatted_address",
            "address_components",
          ],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        const formattedAddress =
          place.formatted_address || "";

        const components =
          place.address_components || [];

        if (!formattedAddress || components.length === 0) {
          setAddressSelected(false);

          setStreetAddress("");
          setCity("");
          setState("");
          setZip("");

          setError(
            "Please select your project address from the suggestions."
          );

          return;
        }

        const getComponent = (
          type: string,
          useShortName = false
        ) => {
          const component = components.find(
            (item: any) => item.types?.includes(type)
          );

          if (!component) return "";

          return useShortName
            ? component.short_name || ""
            : component.long_name || "";
        };

        const streetNumber =
          getComponent("street_number");

        const route =
          getComponent("route");

        const parsedStreetAddress = [
          streetNumber,
          route,
        ]
          .filter(Boolean)
          .join(" ");

        const parsedCity =
          getComponent("locality") ||
          getComponent("postal_town") ||
          getComponent(
            "administrative_area_level_3"
          );

        const parsedState =
          getComponent(
            "administrative_area_level_1",
            true
          );

        const parsedZip =
          getComponent("postal_code");

        setAddress(formattedAddress);

        setStreetAddress(parsedStreetAddress);
        setCity(parsedCity);
        setState(parsedState);
        setZip(parsedZip);

        setAddressSelected(true);
        setError("");
      });
    };

    initAutocomplete();

    return () => {
      if (retryTimer) {
        clearTimeout(retryTimer);
      }

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

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) return;

    setError("");
    setSuccess(false);

    if (!address || !addressSelected) {
      setError(
        "Please select your project address from the Google suggestions."
      );

      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("address", address);
    formData.set("streetAddress", streetAddress);
    formData.set("city", city);
    formData.set("state", state);
    formData.set("zip", zip);

    formData.set("service", service);
    formData.set(
      "preferredContact",
      preferredContact
    );

    const photos = formData
      .getAll("photos")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    if (photos.length > 3) {
      setError(
        "Please upload no more than 3 photos."
      );

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

      setStreetAddress("");
      setCity("");
      setState("");
      setZip("");

      setService("");
      setPreferredContact("");

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

  const fieldClasses =
    "w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent";

  return (
    <section className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2 text-gray-900">
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
          className={fieldClasses}
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={fieldClasses}
        />

        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className={fieldClasses}
        />

        <select
          name="preferredContact"
          required
          value={preferredContact}
          onChange={(e) =>
            setPreferredContact(e.target.value)
          }
          className={`w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
            preferredContact
              ? "text-gray-900"
              : "text-gray-500"
          }`}
        >
          <option value="" disabled>
            Preferred method of contact
          </option>

          <option
            value="Text Message"
            className="text-gray-900"
          >
            Text Message
          </option>

          <option
            value="Phone Call"
            className="text-gray-900"
          >
            Phone Call
          </option>

          <option
            value="Email"
            className="text-gray-900"
          >
            Email
          </option>
        </select>

        <input
          ref={addressInputRef}
          name="address"
          type="text"
          required
          placeholder="Project Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setAddressSelected(false);

            setStreetAddress("");
            setCity("");
            setState("");
            setZip("");
          }}
          autoComplete="street-address"
          className={fieldClasses}
        />

        <select
          name="service"
          required
          value={service}
          onChange={(e) =>
            setService(e.target.value)
          }
          className={`w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
            service
              ? "text-gray-900"
              : "text-gray-500"
          }`}
        >
          <option value="" disabled>
            Select a service
          </option>

          <option
            value="Fence Repair"
            className="text-gray-900"
          >
            Fence Repair
          </option>

          <option
            value="Vinyl Fence"
            className="text-gray-900"
          >
            Vinyl Fence
          </option>

          <option
            value="Wood Fence"
            className="text-gray-900"
          >
            Wood Fence
          </option>

          <option
            value="Chain Link Fence"
            className="text-gray-900"
          >
            Chain Link Fence
          </option>

          <option
            value="Aluminum Fence"
            className="text-gray-900"
          >
            Aluminum Fence
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows={4}
          className={fieldClasses}
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 text-sm file:text-gray-900"
          />

          <p className="mt-2 text-xs text-gray-500">
            Add up to 3 photos of the fence or damaged area.
            Maximum 5 MB per photo.
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
