import { Meta, StoryObj } from "@storybook/react";
import { RecentPosts } from "./recent_posts";
import { allLabs } from "../../../../.contentlayer/generated";

const meta = {
  title: "organism/RecentPosts",
  component: RecentPosts,
  argTypes: {},
  args: {
    posts: allLabs.splice(0, 6),
  },
} satisfies Meta<typeof RecentPosts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
