import { Meta, StoryObj } from "@storybook/react";
import { MdxContent } from "./mdx_content";
import { allLabs } from "../../../../.contentlayer/generated";

const meta = {
  title: "molecule/MdxContent",
  component: MdxContent,
  argTypes: {},
  args: {
    code: allLabs.at(0)!.body.code,
  },
} satisfies Meta<typeof MdxContent>;

export default meta;

type Story = StoryObj<typeof MdxContent>;

export const Base: Story = {};
