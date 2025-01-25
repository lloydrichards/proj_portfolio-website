"use client";
import { StackedBarChart } from "@/components/chart/stacked_bar_chart/stacked_bar_chart";
import {
  useResponsive,
  withResponsive,
} from "@/components/template/responsive_wrapper";
import { SkillData } from "@/services/api/get-skill-data";
import { FC } from "react";
import { useSkillBarChartData } from "./use-skill-bar-chart-data";

type SkillBarChartClientProps = {
  data: SkillData[];
};

export const SkillBarChartClient: FC<SkillBarChartClientProps> = withResponsive(
  ({ data }) => {
    const parsed = useSkillBarChartData(data);
    const { height, width } = useResponsive();
    return (
      <StackedBarChart
        title="Skills from occupations (hrs)"
        data={parsed}
        margins={{
          top: 32,
          right: 10,
          bottom: 96,
          left: 64,
        }}
        height={height}
        width={width}
      />
    );
  },
);
