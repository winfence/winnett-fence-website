import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.winnettfence.com";
  const now = new Date();

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Services
    {
      url: `${baseUrl}/services/fence-repair`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/vinyl-fence`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/wood-fence`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/chain-link-fence`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/aluminum-fence`,
      lastModified: now,
      priority: 0.8,
    },

    // City / Service Area Pages (ALL)
    {
      url: `${baseUrl}/areas/attleboro-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/north-attleboro-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/mansfield-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/norton-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/foxborough-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/wrentham-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/plainville-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/seekonk-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/rehoboth-ma`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/easton-ma`,
      lastModified: now,
      priority: 0.7,
    },
  ];
}
