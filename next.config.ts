import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import mdxMermaid from "mdx-mermaid";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    reactCompiler: true,
  },
} as NextConfig;

const withMDX = createMDX({
  options: {
    jsx: true,
    remarkPlugins: [
      [mdxMermaid],
      // @ts-expect-error wrong types
      ["remark-gfm", { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [
      // @ts-expect-error wrong types
      ["rehype-mdx-import-media", { strict: true, throwOnError: true }],
      [
        // @ts-expect-error wrong types
        "rehype-pretty-code",
        {
          strict: true,
          throwOnError: true,
          keepBackground: false,
          theme: "synthwave-84",
        },
      ],
      // @ts-expect-error wrong types
      ["rehype-slug", { strict: true, throwOnError: true }],
      [
        // @ts-expect-error wrong types
        "rehype-autolink-headings",
        {
          strict: true,
          throwOnError: true,
          behavior: "append",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
