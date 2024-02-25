import { Meta, StoryObj } from "@storybook/react";
import { PostCard } from "./PostCard";
import { mockPostCardProps } from "./PostCard.mocks";

export default {
  title: "molecule/PostCard",
  component: PostCard,
  argTypes: {},
} as Meta<typeof PostCard>;

export const Base: StoryObj<typeof PostCard> = {
  args: mockPostCardProps.base,
  parameters: {},
  play: () => {},
};
