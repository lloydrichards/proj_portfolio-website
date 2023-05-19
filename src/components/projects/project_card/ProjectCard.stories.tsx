import { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";
import { mockProjectCardProps } from "./ProjectCard.mocks";

export default {
  // Update the title to match the component type
  title: "templates/ProjectCard",
  component: ProjectCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ProjectCard>;

export const Base: StoryObj<typeof ProjectCard> = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: mockProjectCardProps.base,
  // More on parameters: https://storybook.js.org/docs/react/writing-stories/parameters
  parameters: {},
  // More on interactions: https://storybook.js.org/docs/react/essentials/interactions
  play: () => {
    // Add some interactions here
  },
};

// Create more stories be exporting them as named exports
// More on Component Story Format 3: https://storybook.js.org/blog/component-story-format-3-0/ß
