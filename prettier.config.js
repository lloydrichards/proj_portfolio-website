/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva", "cn"],
  proseWrap: "always",
};

export default config;
