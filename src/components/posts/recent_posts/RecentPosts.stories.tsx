import { Meta, StoryObj } from "@storybook/react";
import { RecentPosts } from "./RecentPosts";

export default {
  title: "Posts/RecentPosts",
  component: RecentPosts,
  argTypes: {},
} as Meta<typeof RecentPosts>;

export const Base: StoryObj<typeof RecentPosts> = {};
