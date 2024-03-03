import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import React from "react";
import "../src/styles/globals.css";
import { inter, josefin_sans, roboto_mono } from "../src/styles/font";
import { cn } from "../src/lib/utils";

// This is where you can wrap the story in any ContextProviders
export const decorators = [
  (Story) => (
    <div
      className={cn(
        "font-sans",
        inter.variable,
        roboto_mono.variable,
        josefin_sans.variable,
      )}
    >
      <Story />
    </div>
  ),
  withThemeByDataAttribute<ReactRenderer>({
    themes: {
      Classic: "light-classic",
      "Classic (dark)": "dark-classic",
      Professional: "light-professional",
      "Professional (dark)": "dark-professional",
      Soft: "light-soft",
      Acid: "light-acid",
      Midnight: "dark-midnight",
    },
    defaultTheme: "Classic",
    attributeName: "data-theme",
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: [
          "design",
          "atom",
          "molecule",
          "chart",
          "organism",
          "template",
          "page",
        ],
      },
    },
  },
};

export default preview;
