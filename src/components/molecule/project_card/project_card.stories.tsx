import { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./project_card";
import { allProjects } from "../../../../.contentlayer/generated";
import { expect, within, userEvent, fn, waitFor } from "@storybook/test";

const meta = {
  title: "molecule/ProjectCard",
  component: ProjectCard,
  argTypes: {},
  args: {
    project: allProjects.at(0),
    onClick: fn(),
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByTestId("project-card"));
    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
};
