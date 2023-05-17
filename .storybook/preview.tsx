import type { Preview } from "@storybook/react";
import React from "react";

// This is where you can wrap the story in any ContextProviders
export const decorators = [
  (Story) => (
    <div>
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