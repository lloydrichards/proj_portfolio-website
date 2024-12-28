import { ILineChart } from "@/components/chart/line_chart/LineChart";

const base: ILineChart = {
  data: [
    {
      value: 0,
      timestamp: new Date("2020-01-01"),
      category: "A",
    },
    {
      value: 1,
      timestamp: new Date("2020-01-02"),
      category: "A",
    },
    {
      value: 2,
      timestamp: new Date("2020-01-03"),
      category: "A",
    },
    {
      value: 1,
      timestamp: new Date("2020-01-04"),
      category: "A",
    },
    {
      value: 1,
      timestamp: new Date("2020-01-05"),
      category: "A",
    },
    {
      value: 3,
      timestamp: new Date("2020-01-06"),
      category: "A",
    },
  ],
};

export const mockLineChartProps = {
  base,
};
