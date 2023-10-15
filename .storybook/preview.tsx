import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";
import { inter, josefin_sans, roboto_mono } from "../src/styles/font";

// This is where you can wrap the story in any ContextProviders
export const decorators = [
  (Story) => (
    <div
      className={`${inter.variable} ${roboto_mono.variable} ${josefin_sans.variable}`}
    >
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      // <- can add more themes here
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
