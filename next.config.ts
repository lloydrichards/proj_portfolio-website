import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
} as NextConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
    rehypePlugins: [
      ["rehype-pretty-code", { strict: true, throwOnError: true }],
      ["rehype-slug", { strict: true, throwOnError: true }],
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
