import { Meta, StoryObj } from "@storybook/react";
import { PostsNavigation } from "./posts_navigation";
import { allLabs } from "../../../../.contentlayer/generated";

const meta = {
  title: "organism/PostsNavigation",
  component: PostsNavigation,
  argTypes: {},
  args: {
    allPosts: allLabs,
  },
} satisfies Meta<typeof PostsNavigation>;

export default meta;

type Story = StoryObj<typeof PostsNavigation>;

export const Base: Story = {};
