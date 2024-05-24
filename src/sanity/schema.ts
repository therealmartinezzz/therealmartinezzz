import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import work from "./schemaTypes/work";
import image from "./schemaTypes/image";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, work, image],
};
