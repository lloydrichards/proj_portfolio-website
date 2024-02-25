import { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./LineChart";
import { mockLineChartProps } from "./LineChart.mocks";

export default {
  title: "chart/LineChart",
  component: LineChart,
  argTypes: {},
} as Meta<typeof LineChart>;

export const Base: StoryObj<typeof LineChart> = {
  args: mockLineChartProps.base,
  parameters: {},
  play: () => {},
};
