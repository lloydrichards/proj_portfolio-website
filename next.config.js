const { withContentlayer } = require("next-contentlayer");

// @type {import('next').NextConfig}
 

module.exports = withContentlayer({
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
