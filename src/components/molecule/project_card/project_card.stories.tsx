import { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./project_card";
import { allProjects } from "../../../../.contentlayer/generated";

const meta = {
  title: "molecule/ProjectCard",
  component: ProjectCard,
  argTypes: {},
  args: {
    project: allProjects.at(0),
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Base: Story = {};
