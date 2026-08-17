import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.winnettoutdoor.services";

  return [
    // Homepage
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Fence Services
    {
      url: `${baseUrl}/services/fence-repair`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/vinyl-fence`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/wood-fence`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/chain-link-fence`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/aluminum-fence`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Service Area Pages
    {
      url: `${baseUrl}/areas/attleboro-ma`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas/north-attleboro-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/mansfield-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/norton-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/foxborough-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/wrentham-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/plainville-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/seekonk-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/rehoboth-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/easton-ma`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
