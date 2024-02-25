/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ],
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.ts",
    },
  },
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "tailwindcss/classnames-order": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off",
    "prefer-const": "warn",
    "@next/next/no-img-element": "off",
    "no-var": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    // Tailwind CSS
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        callees: ["clsx", "cn"],
      },
    ],
  },
};
module.exports = config;
