// app/components/LocalBusinessSchema.js
export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Winnett Fence LLC",
          "image": "https://www.winnettfence.com/images/logo/winnett-fence-logo.png",
          "url": "https://www.winnettfence.com",
          "telephone": "+1-857-702-9780",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Attleboro",
            "addressRegion": "MA",
            "postalCode": "02703",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.9448,
            "longitude": -71.2856
          },
          "areaServed": [
            "Attleboro, MA",
            "Mansfield, MA",
            "Norton, MA",
            "North Attleboro, MA",
            "Wrentham, MA",
            "Plainville, MA",
            "Seekonk, MA",
            "Rehoboth, MA",
            "Foxborough, MA",
            "Easton, MA"
          ],
          "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
          "sameAs": [
            "https://www.facebook.com/WinnettFence",
            "https://www.instagram.com/WinnettFence",
            "https://www.linkedin.com/company/winnett-fence-llc"
          ],
          "description": "Winnett Fence LLC provides professional residential and commercial fence installation, repair, and maintenance services in the Greater Attleboro area.",
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wood Fence Installation",
                "description": "Installation and repair of wood fences for privacy and aesthetics."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vinyl Fence Installation",
                "description": "Durable vinyl fences for residential and commercial properties."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Chain Link Fence Installation",
                "description": "Affordable chain link fence solutions for security and property delineation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fence Repair & Maintenance",
                "description": "Repair and maintenance services to extend the life of your fences."
              }
            }
          ]
        }),
      }}
    />
  );
}
