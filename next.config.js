import { withContentlayer } from "next-contentlayer";

// @type {import('next').NextConfig}

const config = withContentlayer({
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/storybook/",
        destination: "/storybook/index.html",
      },
    ];
  },
});

export default config;
