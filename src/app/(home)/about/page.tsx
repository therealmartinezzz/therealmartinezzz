import { SinglePostObject, authorObj } from "@/models/types";
import getSanityData from "@/sanity/lib/getSanityData";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { User } from "@nextui-org/react";
import getAuthor from "@/sanity/lib/getAuthor";
import moment from "moment";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
interface PostObjectProps {
  params: { slug: string };
}
export async function generateMetadata({
  params: { slug },
}: PostObjectProps): Promise<Metadata> {
  const query = `*[_type=='post' && slug.current == 'aziz-imranzade-kimdir']`;

  const singlePostData: SinglePostObject[] = await getSanityData(query);
  return {
    title: singlePostData[0].title,
    description: singlePostData[0].describtion,
    openGraph: {
      title: singlePostData[0].title,
      description: singlePostData[0].describtion,
      images: [
        {
          url: urlForImage(singlePostData[0].mainImage),
          width: 800,
          height: 600,
        },
      ],
      type: "website",
    },
  };
}
const About = async () => {
  const query = `*[_type=='post' && slug.current == 'aziz-imranzade-kimdir']`;
  const singlePostData: SinglePostObject[] = await getSanityData(query);
  const author: authorObj = await getAuthor();
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
  return (
    <main className="w-full min-h-screen flex flex-col text-white space-y-8">
      <div className="flex  w-full   justify-between h-12 items-center mt-8">
        <User
          name={author.name}
          description={moment(singlePostData[0].publishedAt).format("lll")}
          avatarProps={{ src: urlForImage(author.image) }}
        />
        <h1 className="text-lg text-white/80 font-[500]">
          {singlePostData[0].title}
        </h1>
      </div>
      <div className="bg-red-500 rounded-md w-full h-[20rem] relative overflow-hidden">
        <Image
          src={urlForImage(singlePostData[0].mainImage)}
          fill
          alt={singlePostData[0].title}
          className=" object-cover"
        />
      </div>
      <div className="w-full   prose-invert prose-cyan  prose-base prose">
        <PortableText
          components={myPortableTextComponents}
          value={singlePostData[0].body}
        />
      </div>
    </main>
  );
};
export default About;
