import { Card, CardBody, Link, CardFooter, Divider } from "@nextui-org/react";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import moment from "moment";
import { FC } from "react";
import { PostObject } from "@/models/types";
interface BlogPostProps {
  post: PostObject;
  href: string;
}
const PostBox: FC<BlogPostProps> = async ({ post, href }) => {
  return (
    <Card className="py-2  flex-1 flex-shrink-0 ">
      <CardBody className=" py-2 overflow-hidden  h-48  ">
        <div className="relative w-full h-full">
          <Image
            alt={post.title}
            fill
            className="object-cover rounded-xl "
            src={urlForImage(post.mainImage)}
          />
        </div>
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start mb-4">
        <h1 className="font-bold  text-lg break-words w-full text-white/80">
          <Link color="primary" href={href}>
            {post.title}
          </Link>
        </h1>

        <small className="text-default-500">
          {moment(post.publishedAt).fromNow()}
        </small>
        {post.describtion && (
          <>
            <Divider className="my-2" />
            <p className="py-1 text-sm text-white/70 break-words w-full text-justify">
              {" "}
              {post.describtion}
            </p>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
export default PostBox;
