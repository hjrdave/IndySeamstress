import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-info";

// Required for output: "export" in this Next.js version.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}
