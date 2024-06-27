import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio"],
      },
    ],
    sitemap: `${process.env.VERCEL_PROJECT_PRODUCTION_URL}/sitemap.xml`,
  };
}
