import { Meta, StoryObj } from "@storybook/react";
import { ThemeSelect } from "./theme-select";

const meta = {
  title: "molecule/ThemeSelect",
  component: ThemeSelect,
  argTypes: {},
} satisfies Meta<typeof ThemeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
