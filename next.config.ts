import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
} as NextConfig;

const withMDX = createMDX({
  options: {
    // @ts-expect-error wrong types
    remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
    rehypePlugins: [
      // @ts-expect-error wrong types
      ["rehype-pretty-code", { strict: true, throwOnError: true }],
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
