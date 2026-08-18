import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import PhoneClickTracker from "./components/PhoneClickTracker";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winnettoutdoor.services"),

  title: {
    default: "Winnett Fence LLC | Fence Repair & Installation",
    template: "%s | Winnett Fence",
  },

  description:
    "Fence repair and installation in Southeastern Massachusetts. Winnett Fence repairs vinyl, wood, chain-link and aluminum fences and provides free on-site estimates.",

  applicationName: "Winnett Fence LLC",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.winnettoutdoor.services",
    siteName: "Winnett Fence LLC",
    title: "Winnett Fence LLC | Fence Repair & Installation",
    description:
      "Professional fence repair and installation throughout Southeastern Massachusetts.",
    images: [
      {
        url: "/images/logo/winnett-fence-logo.png",
        width: 1200,
        height: 630,
        alt: "Winnett Fence LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Winnett Fence LLC | Fence Repair & Installation",
    description:
      "Professional fence repair and installation throughout Southeastern Massachusetts.",
    images: ["/images/logo/winnett-fence-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/images/logo/favicon.ico",
      },
      {
        url: "/images/logo/favicon-32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>

      <body>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&libraries=places`}
          strategy="afterInteractive"
        />

        <Header />
        <PhoneClickTracker />
        {children}

        <Footer />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MS6HMGKR07"
        strategy="afterInteractive"
      />
      
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-MS6HMGKR07');
        `}
      </Script>
      </body>
    </html>
  );
}
