import type { MetadataRoute } from "next";

const siteUrl = "https://personal-portfolio-2yq.pages.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/projects/otosurya` },
    { url: `${siteUrl}/projects/cbs-guard` },
  ];
}
