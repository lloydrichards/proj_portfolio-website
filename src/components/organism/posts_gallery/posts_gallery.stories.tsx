import { Meta, StoryObj } from "@storybook/react";
import { PostsGallery } from "./posts_gallery";
import { allLabs } from "../../../../.contentlayer/generated";

const meta = {
  title: "organism/PostsGallery",
  component: PostsGallery,
  argTypes: {},
  args: {
    limit: 6,
    posts: allLabs,
  },
} satisfies Meta<typeof PostsGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllPosts: Story = {};

export const RecentPosts: Story = {};
