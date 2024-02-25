import { Meta, StoryObj } from "@storybook/react";
import { TimelineDashboard } from "./timeline_dashboard";
import { allOccupations } from "../../../../.contentlayer/generated";

const meta = {
  title: "organism/TimelineDashboard",
  component: TimelineDashboard,
  argTypes: {},
  args: {
    occupations: allOccupations.splice(0, 6),
  },
} satisfies Meta<typeof TimelineDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
