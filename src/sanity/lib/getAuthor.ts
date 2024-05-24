import { client } from "./client";

const getAuthor = async () => {
  const res = await client.fetch(`*[_type=='author'][0]{
        image,
        name,
        bio,
        'slug': slug.current
    }`);
  return res;
};
export default getAuthor;
