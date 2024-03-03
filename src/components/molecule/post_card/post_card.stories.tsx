import { Meta, StoryObj } from "@storybook/react";
import { PostCard } from "./post_card";
import { allLabs } from "../../../../.contentlayer/generated";
import { expect, within, userEvent, fn, waitFor } from "@storybook/test";

const meta = {
  title: "molecule/PostCard",
  component: PostCard,
  argTypes: {},
  args: {
    post: allLabs.at(0),
    onClick: fn(),
  },
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByText(args.post.title));
    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
};
