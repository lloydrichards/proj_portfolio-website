import createMDX from "@next/mdx";
import mdxMermaid from "mdx-mermaid";
import type { NextConfig } from "next";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  outputFileTracingIncludes: {
    database: ["./database/**/*"],
  },
  experimental: {
    reactCompiler: true,
  },
} as NextConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-gfm", { strict: true, throwOnError: true }],
      [mdxMermaid],
    ],
    rehypePlugins: [
      ["rehype-mdx-import-media", { strict: true, throwOnError: true }],
      ["rehype-slug", { strict: true, throwOnError: true }],
      [
        "rehype-pretty-code",
        {
          strict: true,
          throwOnError: true,
          keepBackground: false,
          theme: "synthwave-84",
        },
      ],
      [
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
