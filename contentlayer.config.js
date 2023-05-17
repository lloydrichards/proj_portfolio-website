import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { CATEGORIES } from "./src/lib/const";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export const Experiment = defineDocumentType(() => ({
  name: "Experiment",
  filePathPattern: `experiments/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));

export const Portfolio = defineDocumentType(() => ({
  name: "Portfolio",
  filePathPattern: `portfolio/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    category: {
      type: "list",
      of: { type: "enum", options: CATEGORIES, required: true },
    },
    image: {
      type: "string",
      required: true,
    },
    repo: {
      type: "string",
    },
    href: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post, Experiment, Portfolio],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
