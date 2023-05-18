import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "layout/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

export const Base: StoryObj<typeof Navbar> = {
  play: () => {},
};
