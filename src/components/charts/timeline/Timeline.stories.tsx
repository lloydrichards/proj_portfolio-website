import { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";
import { allOccupations } from "../../../../.contentlayer/generated";
import { ResponsiveChart } from "../utils/ResponsiveChart";

export default {
  title: "charts/Timeline",
  component: Timeline,
  argTypes: {},
  parameters: {
    controls: {
      exclude: ["data"],
    },
  },
} as Meta<typeof Timeline>;

export const Base: StoryObj<typeof Timeline> = {
  render: () => (
    <ResponsiveChart
      className="h-screen"
      render={({ width, height }) => (
        <Timeline data={allOccupations} width={width} maxHeight={height} />
      )}
    />
  ),

  args: {
    data: allOccupations,
  },
  play: () => {},
};
