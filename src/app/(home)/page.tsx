import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { IconType } from "react-icons";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextui,
} from "react-icons/si";
import getAuthor from "@/sanity/lib/getAuthor";
import { PortableText } from "@portabletext/react";
import { ReactNode } from "react";
import { PostObject, authorObj } from "@/models/types";
import getSanityData from "@/sanity/lib/getSanityData";
import PostBox from "@/components/PostBox";
import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
export const metadata: Metadata = {
  title: "David Martinez | Ana Səhifə",
  description:
    "Mən Aziz İmranzadə. Kod yazmağı sevirəm. Uşaqlıqdan kod yazmaq macərasına atılmışam və bu mənim üçün bir yaşam tərzinə çevrilib. Bu web səhifədə mənim haqqımda məlumat əldə edə, mənimlə əlaqə saxlaya, hazırladığım layhilərə baxa və bloq yazılarımı oxuya bilərsiniz.",
  openGraph: {
    title:'David Martinez | @thisisaziz',
    description: "David Martinez | Software Developer",
    url:`${process.env.NEXT_PUBLIC_SITE_BASE_URL}`
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_BASE_URL,
  },
};
const Home = async () => {
  const blogPostsQuery: string = `*[_type=='post'][0...2] | order(publishedAt desc) {
    title,
    publishedAt,
    mainImage,
    describtion,
    'slug':slug.current
  } `;
  interface Props {
    children?: ReactNode;
    value?: any;
  }
  const myPortableTextComponents = {
    types: {},
    marks: {
      link: ({ children, value }: Props) => {
        return (
          <Link href={value.href} target="_blank">
            {children}
          </Link>
        );
      },
    },
  };
  type techStackObj = { name: string; icon: IconType };
  const techStacks: techStackObj[] = [
    {
      name: "Tailwindcss",
      icon: SiTailwindcss,
    },
    {
      name: "NextUI",
      icon: SiNextui,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Next Js",
      icon: TbBrandNextjs,
    },

    {
      name: "Firebase",
      icon: SiFirebase,
    },
    {
      name: "Github",
      icon: SiGithub,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
  ];
  let worksQuery: string = `*[_type=='work'][0...2] | order(publishedAt desc) {
    title,
    publishedAt,
    mainImage,
    describtion,
    'slug':slug.current
  }`;
  let galleryQuery: string = `*[_type=='gallery'][0...6]{
    galleryImage,
    'alt':galleryImage.alt
  }`;
  const author: authorObj = await getAuthor();
  const posts: PostObject[] = await getSanityData(blogPostsQuery);
  const works: PostObject[] = await getSanityData(worksQuery);
  const images: { galleryImage: SanityAsset; alt: string }[] =
    await getSanityData(galleryQuery);
  return (
    <main className="w-full h-full  mt-12 text-white/80 sm:pb-20 flex flex-col  gap-y-14">
      <section className="h-auto  w-full flex sm:flex-row flex-col-reverse  justify-between sm:items-center gap-y-6 sm:gap-y-0 gap-x-4 ">
        <div className="space-y-3">
          <h1 className="text-xl font-[500] text-white/90">
            Salam ! Mən {author.name}👋
          </h1>
          <div className="text-[0.9rem] prose prose-sm text-justify text-white/70 prose-strong:text-white/80">
            <PortableText
              components={myPortableTextComponents}
              value={author.bio}
            />
          </div>
        </div>
        <div className=" flex-shrink-0 h-40 w-40 overflow-hidden relative rounded-md">
          <Image
            src={urlForImage(author.image)}
            alt="David Martinez Avatar"
            fill
            className=" w-full h-full object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-[500]  text-white/90 mb-3">
          Texnologiyalar
        </h2>
        <div className="w-full gap-x-3 gap-y-2 grid  sm:grid-cols-4 grid-cols-2 ">
          {techStacks.map((item, index) => (
            <Button
              key={index}
              startContent={<item.icon className="text-xl" />}
              size="lg"
              variant="ghost"
            >
              <p>{item.name}</p>
            </Button>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-[500]  text-white/90 mb-3">
          Son Layihəhlər
        </h2>
        <div className="w-full gap-4 gap-y-2  grid sm:grid-cols-2 grid-cols-1 sm:space-y-0 space-y-3">
          {works.map((post, index) => (
            <PostBox post={post} key={index} href={`/works/${post.slug}`} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-[500]  text-white/90 mb-3">
          Son Blog Postları
        </h2>
        <div className="w-full gap-4 gap-y-2  grid sm:grid-cols-2 grid-cols-1 sm:space-y-0 space-y-3">
          {posts.map((post, index) => (
            <PostBox post={post} key={index} href={`/blog/${post.slug}`} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-[500]  text-white/90 mb-3">
          Foto Qaleriya
        </h2>
        <div className="w-full h-[30rem]  mb-2 grid grid-cols-12 grid-rows-8 sm:grid-rows-12 gap-4">
          <div className="bg-default sm:col-span-4 col-span-6  row-span-4 sm:row-span-8 rounded-lg overflow-hidden relative">
            <Image
              src={urlForImage(images[0].galleryImage)}
              fill
              alt={images[0].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
          <div className="bg-default sm:col-span-4 col-span-6  row-span-3 sm:row-span-4 rounded-lg overflow-hidden relative">
            <Image
              src={urlForImage(images[1].galleryImage)}
              fill
              alt={images[1].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
          <div className="bg-default sm:col-span-4 col-span-6  row-span-3 rounded-lg  sm:row-span-8 overflow-hidden relative">
            <Image
              src={urlForImage(images[2].galleryImage)}
              fill
              alt={images[2].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
          <div className="bg-default sm:col-span-4 col-span-6  row-span-2 rounded-lg sm:row-span-8 overflow-hidden relative">
            <Image
              src={urlForImage(images[3].galleryImage)}
              fill
              alt={images[3].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
          <div className="bg-default sm:col-span-4 col-span-6  row-span-3 sm:row-span-4 rounded-lg overflow-hidden relative">
            <Image
              src={urlForImage(images[4].galleryImage)}
              fill
              alt={images[4].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
          <div className="bg-default sm:col-span-4 col-span-6  row-span-3 sm:row-span-4 rounded-lg overflow-hidden relative">
            <Image
              src={urlForImage(images[5].galleryImage)}
              fill
              alt={images[5].alt || "David Martinez"}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
