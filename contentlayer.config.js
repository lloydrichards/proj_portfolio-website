import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { OCCUPATION_CATEGORIES, PROJECT_CATEGORIES } from "./src/lib/const";

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

const postFields = {
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
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...postFields,
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export const Lab = defineDocumentType(() => ({
  name: "Lab",
  filePathPattern: `labs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...postFields,
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
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
    spotlight: {
      type: "boolean",
      default: false,
    },
    published: {
      type: "boolean",
      default: true,
    },
    category: {
      type: "list",
      of: { type: "enum", options: PROJECT_CATEGORIES },
      required: true,
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

export const Occupation = defineDocumentType(() => ({
  name: "Occupation",
  filePathPattern: `occupations/**/*.mdx`,
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
    published: {
      type: "boolean",
      default: true,
    },
    company: {
      type: "string",
      required: true,
    },
    location: {
      type: "string",
      required: true,
    },
    skills: {
      type: "list",
      of: { type: "string" },
    },
    characters: {
      type: "list",
      of: { type: "string" },
    },
    category: {
      type: "enum",
      options: OCCUPATION_CATEGORIES,
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    start_date: {
      type: "date",
      required: true,
    },
    end_date: {
      type: "date",
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Blog, Lab, Project, Occupation],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrettyCode,
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
