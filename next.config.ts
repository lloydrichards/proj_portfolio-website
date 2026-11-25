import { resolve } from "node:path";
import createMDX from "@next/mdx";
import synthwave from "@shikijs/themes/synthwave-84";
import type { NextConfig } from "next";

const databaseFile = process.env.DB_FILE_NAME ?? "./database/db.sqlite";
const previewHost = process.env.LAB_PREVIEW_HOST;

const darkCodeTheme = {
  ...synthwave,
  tokenColors: [
    ...(synthwave.tokenColors ?? []),
    { scope: "markup.deleted.diff", settings: { foreground: "#FDAEB7" } },
    { scope: "markup.inserted.diff", settings: { foreground: "#85E89D" } },
  ],
};

const nextConfig: NextConfig = {
  allowedDevOrigins: previewHost ? [previewHost] : undefined,
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
      resolve("scripts/rehype-code-wrap.mjs"),
      [
        "rehype-pretty-code",
        {
          keepBackground: false,
          theme: {
            light: "github-light",
            dark: darkCodeTheme,
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
