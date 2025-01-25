import { components } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";

import mdxMermaid from "mdx-mermaid";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const createMDX = async <T>(source: string) =>
  await compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, mdxMermaid],
        rehypePlugins: [
          rehypeMdxImportMedia,
          rehypeSlug,
          [rehypePrettyCode, { keepBackground: false, theme: "synthwave-84" }],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
              },
            },
          ],
        ],
      },
    },
    components: { ...components },
  });
