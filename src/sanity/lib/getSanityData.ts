import { client } from "./client";

const getSanityData = async (query: string): Promise<[]> => {
  const res = await client.fetch(query);
  return res;
};
export default getSanityData;
