import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const databaseFile = process.env.DB_FILE_NAME ?? "./database/db.sqlite";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  webpack(config, { defaultLoaders, isServer }) {
    if (isServer) {
      // @next/mdx's generic SWC loader treats metadata exports as client code.
      for (const rule of config.module.rules) {
        if (
          rule.test instanceof RegExp &&
          rule.test.test("page.mdx") &&
          Array.isArray(rule.use)
        ) {
          for (const [index, loader] of rule.use.entries()) {
            if (loader === defaultLoaders.babel) {
              rule.use[index] = {
                ...loader,
                options: { ...loader.options, bundleLayer: "rsc" },
              };
            }
          }
        }
      }
    }
    return config;
  },
  outputFileTracingRoot: process.cwd(),
  transpilePackages: ["effect-boxes"],
  pageExtensions: ["mdx", "ts", "tsx"],
  serverExternalPackages: ["@sparticuz/chromium-min", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/og{,/**}": [
      "./public/fonts/roboto-mono/**/*",
      "./public/images/social/**/*",
    ],
    "/*": [databaseFile, `${databaseFile}-wal`, `${databaseFile}-shm`],
  },
};

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
