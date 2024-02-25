import { Meta, StoryObj } from "@storybook/react";
import { PostCard } from "./post_card";
import { allLabs } from "../../../../.contentlayer/generated";

const meta = {
  title: "molecule/PostCard",
  component: PostCard,
  argTypes: {},
  args: {
    post: allLabs.at(0),
  },
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Base: Story = {};
