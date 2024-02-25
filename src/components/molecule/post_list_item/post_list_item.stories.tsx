import { Meta, StoryObj } from "@storybook/react";
import { PostListItem } from "./post_list_item";
import { allLabs } from "../../../../.contentlayer/generated";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

const meta = {
  title: "molecule/PostListItem",
  component: PostListItem,
  argTypes: {},
  args: {
    post: allLabs.at(0),
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

export const Base: Story = {};
