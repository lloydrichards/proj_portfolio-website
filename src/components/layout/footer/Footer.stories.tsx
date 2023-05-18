import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "layout/Footer",
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

export const Base: StoryObj<typeof Footer> = {
  play: () => {},
};
