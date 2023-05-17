const { withContentlayer } = require("next-contentlayer");

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
