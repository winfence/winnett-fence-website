import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.winnettoutdoor.services";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // Services
    {
      url: `${baseUrl}/services/fence-repair`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/vinyl-fence`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/wood-fence`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/chain-link-fence`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/aluminum-fence`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // City pages
    {
      url: `${baseUrl}/areas/attleboro-ma`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/mansfield-ma`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/norton-ma`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/foxborough-ma`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
