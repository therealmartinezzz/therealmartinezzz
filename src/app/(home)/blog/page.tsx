import PostBox from "@/components/PostBox";
import { PostObject } from "@/models/types";
import getSanityData from "@/sanity/lib/getSanityData";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description: `        Bu blog mənim kod dünyamda yaşadığım səyahətləri, təcrübələrimi və
  fikirlərimi paylaşmaq üçündür. Burada kodlarla bağlı məqalələr,
  texnologiya trendləri və müxtəlif məsələlər barədə danışacağıq. 💻💡
  Siz də bu səyahətə qoşulmağa hazırsınız? Mənimlə birlikdə texnologiya
  dünyasını kəşf etmək üçün mənə qoşulun! 🚀`,
  openGraph: {
    type: "website",
    title: "Aziz İmranzade | Blog",
    url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/blog`,
  },
};
const Blog = async () => {
  const query = `*[_type=='post'] | order(publishedAt desc){
    title,
    publishedAt,
    mainImage,
    describtion,
    'slug':slug.current,
  }`;
  const posts = await getSanityData(query);
  return (
    <div className="h-full  w-full text-white/70 sm:mt-12 mt-6">
      <div className="mb-6">
        <h1 className="text-xl font-[500] mb-2">Bloq Yazıları</h1>
        <p className="text-white/70">
          Bu blog mənim kod dünyamda yaşadığım səyahətləri, təcrübələrimi və
          fikirlərimi paylaşmaq üçündür. Burada kodlarla bağlı məqalələr,
          texnologiya trendləri və müxtəlif məsələlər barədə danışacağıq. 💻💡
          Siz də bu səyahətə qoşulmağa hazırsınız? Mənimlə birlikdə texnologiya
          dünyasını kəşf etmək üçün mənə qoşulun! 🚀
        </p>
      </div>
      <div className=" gap-4 w-full h-auto grid sm:grid-cols-2 grid-cols-1">
        {posts.map((post: PostObject, index: number) => (
          <PostBox key={index} post={post} href={`blog/${post.slug}`} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
