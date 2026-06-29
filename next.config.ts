import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig = {
  transpilePackages: ["effect-boxes"],
  pageExtensions: ["mdx", "ts", "tsx"],
  serverExternalPackages: ["@sparticuz/chromium-min", "puppeteer-core"],
  outputFileTracingIncludes: {
    database: ["./database/**/*"],
  },
} as NextConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", "mdx-mermaid"],
    rehypePlugins: [
      "rehype-mdx-import-media",
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          keepBackground: false,
          theme: {
            light: "github-light",
            dark: "synthwave-84",
          },
        },
      ],
      [
        "rehype-autolink-headings",
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
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
