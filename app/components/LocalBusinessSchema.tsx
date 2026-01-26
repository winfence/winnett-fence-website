export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FenceContractor",
          "name": "Winnett Fence",
          "url": "https://www.winnettoutdoor.services",
          "telephone": "18577029780",
          "areaServed": [
            "Attleboro, MA",
            "Mansfield, MA",
            "Norton, MA"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Attleboro",
            "addressRegion": "MA",
            "addressCountry": "US"
          }
        }),
      }}
    />
  );
}
