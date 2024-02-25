import { Meta, StoryObj } from "@storybook/react";
import { RecentPosts } from "./RecentPosts";

export default {
  title: "organism/RecentPosts",
  component: RecentPosts,
  argTypes: {},
  args: {
    posts: [
      {
        id: 1,
        title: "Post 1",
        description: "Description 1",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
} as Meta<typeof RecentPosts>;

export const Base: StoryObj<typeof RecentPosts> = {};
