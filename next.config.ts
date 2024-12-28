import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
} as NextConfig;

const withMDX = createMDX({});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
