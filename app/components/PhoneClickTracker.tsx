"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function PhoneClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const link = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;

      if (!link) return;

      const phoneNumber = link.getAttribute("href")?.replace("tel:", "") || "";

      if (typeof window.gtag === "function") {
        window.gtag("event", "click_to_call", {
          phone_number: phoneNumber,
          link_url: link.href,
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
