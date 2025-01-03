// contentlayer.config.js

import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
    },
    publishAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: "content",
});
