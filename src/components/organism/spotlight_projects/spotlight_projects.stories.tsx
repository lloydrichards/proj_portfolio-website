import { Meta, StoryObj } from "@storybook/react";
import { SpotlightProjects } from "./spotlight_projects";

const meta = {
  title: "organism/SpotlightProjects",
  component: SpotlightProjects,
  argTypes: {},
  args: {},
} satisfies Meta<typeof SpotlightProjects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
