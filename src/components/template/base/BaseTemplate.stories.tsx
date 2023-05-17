import { Meta, StoryObj } from '@storybook/react';
import { BaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  // Update the title to match the component type
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BaseTemplate>;

export const Base: StoryObj<typeof BaseTemplate> = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: mockBaseTemplateProps.base,
  // More on parameters: https://storybook.js.org/docs/react/writing-stories/parameters
  parameters: {},
  // More on interactions: https://storybook.js.org/docs/react/essentials/interactions
  play: () => {
    // Add some interactions here
  },
};

// Create more stories be exporting them as named exports
// More on Component Story Format 3: https://storybook.js.org/blog/component-story-format-3-0/ß
