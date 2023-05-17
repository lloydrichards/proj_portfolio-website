/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/storybook/",
        destination: "/storybook/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
