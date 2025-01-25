import { components } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import mdxMermaid from "mdx-mermaid";
import rehypeMdxImportMedia from "rehype-mdx-import-media";

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
