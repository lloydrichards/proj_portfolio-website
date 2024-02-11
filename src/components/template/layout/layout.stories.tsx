import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./layout";
import { Placeholder } from "@/components/atom/placeholder";

export default {
  title: "template/Layout",
  component: Layout,
  argTypes: {},
  args: {
    children: <Placeholder className="h-96" type="chart" />,
  },
} as Meta<typeof Layout>;

export const Base: StoryObj<typeof Layout> = {};
