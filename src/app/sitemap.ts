import { PostObject } from "@/models/types";
import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogQuery = `*[_type=='post']{
    'slug': slug.current
  }`;
  const workQuery = `*[_type=='work']{
    'slug':slug.current
  }`;
  const posts: PostObject[] = await client.fetch(blogQuery);
  const works: PostObject[] = await client.fetch(workQuery);
  const postUrls = posts.map((post) => {
    return {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/blog/${post.slug}`,
    };
  });
  const workUrls = works.map((work) => {
    return {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/work/${work.slug}`,
    };
  });
  return [
    {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    },
    {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/works`,
    },
    {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/blog`,
    },
    {
      url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/about`,
    },
    ...postUrls,
    ...workUrls,
  ];
}
