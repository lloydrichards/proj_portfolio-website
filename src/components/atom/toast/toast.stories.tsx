import type { Meta, StoryObj } from "@storybook/react";

import { Toast, ToastAction, ToastActionElement, ToastProps } from "./toast";
import { Toaster } from "./toaster";
import { useToast } from "../../../hooks/use-toast";
import { Button } from "../button/button";

/**
 * A succinct message that is displayed temporarily.
 */
const meta = {
  title: "atom/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => <ToastExample {...args} />,
  decorators: [
    (Story) => (
      <div className="grid h-44 items-center justify-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = Omit<StoryObj<typeof meta>, "args"> & {
  args: Omit<ToasterToast, "id">;
};

type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

const ToastExample = (args: Story["args"]) => {
  const { toast } = useToast();
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast(args);
      }}
    >
      Show Toast
    </Button>
  );
};

/**
 * The default form of the toast.
 */
export const Default: Story = {
  args: {
    description: "Your message has been sent.",
  },
};

/**
 * Use the `title` prop to provide a title for the toast.
 */
export const WithTitle: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
  },
};

/**
 * Use the `action` prop to provide an action for the toast.
 */
export const WithAction: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};

/**
 * Use the `destructive` variant to indicate a destructive action.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};

/**
 * Use the `warning` variant to indicate a warning.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Looks like you missed something!",
    description: "Please fill out all required fields.",
  },
};

/**
 * Use the `success` variant to indicate a successful action.
 */
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    description: "Your message has been sent.",
  },
};
