import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { TypedObject } from "sanity";
export type PostObject = {
  title: string;
  publishedAt: Object;
  mainImage: SanityAsset;
  slug: string;
  describtion: string;
};
export type SinglePostObject = {
  title: string;
  publishedAt: Object;
  mainImage: SanityAsset;
  slug: string;
  body: TypedObject;
  describtion: string;
};

export type authorObj = {
  name: string;
  image: SanityAsset;
  bio: TypedObject;
  slug: string;
};
