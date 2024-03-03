import { Meta, StoryObj } from "@storybook/react";
import { ThemeSelect } from "./theme-select";
import { fn } from "@storybook/test";

const meta = {
  title: "molecule/ThemeSelect",
  component: ThemeSelect,
  argTypes: {},
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof ThemeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
