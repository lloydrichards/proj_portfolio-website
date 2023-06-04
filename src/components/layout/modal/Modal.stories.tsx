import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { mockModalProps } from "./Modal.mocks";

export default {
  title: "layout/Modal",
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

export const Base: StoryObj<typeof Modal> = {
  args: mockModalProps.base,
};
