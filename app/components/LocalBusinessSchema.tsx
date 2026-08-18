// app/components/LocalBusinessSchema.js

export default function LocalBusinessSchema() {
  const serviceAreas = [
    "Attleboro, MA",
    "North Attleboro, MA",
    "Mansfield, MA",
    "Norton, MA",
    "Foxborough, MA",
    "Wrentham, MA",
    "Plainville, MA",
    "Seekonk, MA",
    "Rehoboth, MA",
    "Easton, MA",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.winnettoutdoor.services/#organization",

    name: "Winnett Fence LLC",

    url: "https://www.winnettoutdoor.services",

    logo: {
      "@type": "ImageObject",
      url: "https://www.winnettoutdoor.services/images/logo/winnett-fence-logo.png",
    },

    telephone: "+1-857-702-9780",

    email: "robert@winnettoutdoor.services",

    description:
      "Winnett Fence LLC provides residential fence repair, replacement, and installation throughout Southeastern Massachusetts, including vinyl, wood, chain-link, and aluminum fencing.",

    sameAs: [
      "https://www.facebook.com/winnettoutdoor",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-857-702-9780",
      email: "robert@winnettoutdoor.services",
      contactType: "customer service",
      areaServed: "US-MA",
      availableLanguage: "English",
    },

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fence Repair",
          url: "https://www.winnettoutdoor.services/services/fence-repair",
          description:
            "Residential fence repair for vinyl, wood, chain-link, and aluminum fencing, including broken posts, damaged sections, gates, rails, panels, and storm damage.",
          areaServed: serviceAreas,
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinyl Fence Installation",
          url: "https://www.winnettoutdoor.services/services/vinyl-fence",
          areaServed: serviceAreas,
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Fence Installation",
          url: "https://www.winnettoutdoor.services/services/wood-fence",
          areaServed: serviceAreas,
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chain Link Fence Installation",
          url: "https://www.winnettoutdoor.services/services/chain-link-fence",
          areaServed: serviceAreas,
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminum Fence Installation",
          url: "https://www.winnettoutdoor.services/services/aluminum-fence",
          areaServed: serviceAreas,
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
