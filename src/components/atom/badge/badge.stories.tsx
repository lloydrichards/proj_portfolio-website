import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
  title: "atom/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Badge",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the badge.
 */
export const Default: Story = {};

/**
 * Use the `secondary` badge to call for less urgent information, blending
 * into the interface while still signaling minor updates or statuses.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * Use the `destructive` badge to  indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

/**
 * Use the `warning` badge to indicate caution or a warning that requires
 * attention.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

/**
 * Use the `success` badge to indicate success or a positive change.
 */
export const Success: Story = {
  args: {
    variant: "success",
  },
};

/**
 * Use the `info` badge to indicate information or a neutral change.
 */
export const Info: Story = {
  args: {
    variant: "info",
  },
};

/**
 * Use the `outline` badge for overlaying without obscuring interface details,
 * emphasizing clarity and subtlety..
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
