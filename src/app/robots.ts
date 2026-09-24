import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexingAllowed } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl().origin;
  return isIndexingAllowed()
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${origin}/sitemap.xml`,
        host: origin,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
