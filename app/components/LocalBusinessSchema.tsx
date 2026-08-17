// app/components/LocalBusinessSchema.js

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.winnettoutdoor.services/#business",

    name: "Winnett Fence LLC",

    url: "https://www.winnettoutdoor.services",

    logo: "https://www.winnettoutdoor.services/images/logo/winnett-fence-logo.png",

    image: "https://www.winnettoutdoor.services/images/logo/winnett-fence-logo.png",

    telephone: "+1-857-702-9780",

    priceRange: "$$",

    description:
      "Winnett Fence LLC provides residential fence repair, replacement, and installation throughout Southeastern Massachusetts, including vinyl, wood, chain-link, and aluminum fencing.",

    areaServed: [
      {
        "@type": "City",
        name: "Attleboro",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "North Attleboro",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Mansfield",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Norton",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Foxborough",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Wrentham",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Plainville",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Seekonk",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Rehoboth",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Easton",
        address: {
          "@type": "PostalAddress",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fence Repair",
          url: "https://www.winnettoutdoor.services/services/fence-repair",
          description:
            "Repair of damaged vinyl, wood, chain-link, and aluminum fences, including broken posts, leaning sections, gates, panels, rails, and storm damage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinyl Fence Installation",
          url: "https://www.winnettoutdoor.services/services/vinyl-fence",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Fence Installation",
          url: "https://www.winnettoutdoor.services/services/wood-fence",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chain-Link Fence Installation",
          url: "https://www.winnettoutdoor.services/services/chain-link-fence",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminum Fence Installation",
          url: "https://www.winnettoutdoor.services/services/aluminum-fence",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
