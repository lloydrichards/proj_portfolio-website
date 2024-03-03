import { Meta, StoryObj } from "@storybook/react";
import { PostListItem } from "./post_list_item";
import { allLabs } from "../../../../.contentlayer/generated";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { expect, within, userEvent, fn, waitFor } from "@storybook/test";

const meta = {
  title: "molecule/PostListItem",
  component: PostListItem,
  argTypes: {},
  args: {
    post: allLabs.at(0),
    onClick: fn(),
  },
  decorators: [
    (Story: any) => (
      <NavigationMenu>
        <Story />
      </NavigationMenu>
    ),
  ],
} satisfies Meta<typeof PostListItem>;

export default meta;

type Story = StoryObj<typeof PostListItem>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByText(args.post.title));
    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
};
