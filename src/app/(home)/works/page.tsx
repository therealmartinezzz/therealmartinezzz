import PostBox from "@/components/PostBox";
import { PostObject } from "@/models/types";
import getSanityData from "@/sanity/lib/getSanityData";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Layihələr",
  description: `          Bu bölmədə göstərdiyim işlər, təqdim olunan nümunələrdir və hər bir
  müştəri üçün fərqlilik göstərə bilər. 🎨 Hər bir layihə fərqli
  tələblər və özəlliklərə malik olacağından, burada göstərilən nümunələr
  yalnız bir təcrübəni təmsil edir. 💼 Daha ətraflı məlumat almaq və ya
  bir layihə üçün təklif istəmək istəyirsinizsə, mənimlə əlaqə saxlaya
  bilərsiniz. 📩`,
  openGraph: {
    title: "Aziz Imranzade | Layihələr",
    url: `${process.env.VERCEL_PROJECT_PRODUCTION_URL}/works`,
    type: "website",
  },
};
const Blog = async () => {
  const query = `*[_type=='work'] | order(publishedAt desc){
    title,
    publishedAt,
    mainImage,
    describtion,
    'slug':slug.current,
  }`;
  const posts = await getSanityData(query);
  return (
    <div className="h-full min-h-screen  w-full text-white/70 sm:mt-12 mt-6">
      <div className="mb-6">
        <h1 className="text-xl font-[500] mb-2">Hazırlanmış Layihələr</h1>
        <p className="text-white/70">
          Bu bölmədə göstərdiyim işlər, təqdim olunan nümunələrdir və hər bir
          müştəri üçün fərqlilik göstərə bilər. 🎨 Hər bir layihə fərqli
          tələblər və özəlliklərə malik olacağından, burada göstərilən nümunələr
          yalnız bir təcrübəni təmsil edir. 💼 Daha ətraflı məlumat almaq və ya
          bir layihə üçün təklif istəmək istəyirsinizsə, mənimlə əlaqə saxlaya
          bilərsiniz. 📩
        </p>
      </div>
      <div className=" gap-4 w-full h-auto grid sm:grid-cols-2 grid-cols-1">
        {posts.map((post: PostObject, index: number) => (
          <PostBox key={index} post={post} href={`works/${post.slug}`} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
