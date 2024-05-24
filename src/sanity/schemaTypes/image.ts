import { defineType, defineField } from "sanity";

export default defineType({
  name: "gallery",
  title: "Images",
  type: "document",
  fields: [
    defineField({
      name: "galleryImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Image",
      media: "galleryImage",
    },
  },
});
