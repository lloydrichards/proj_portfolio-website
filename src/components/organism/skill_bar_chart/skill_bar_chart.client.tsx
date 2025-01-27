"use client";
import { DateRangeSlider } from "@/components/atom/range-slider";
import { StackedBarChart } from "@/components/chart/stacked_bar_chart/stacked_bar_chart";
import {
  useResponsive,
  withResponsive,
} from "@/components/template/responsive_wrapper";
import { SkillData } from "@/services/api/get-skill-data";
import { timeFormat } from "d3";
import { isSameMonth } from "date-fns";
import { FC, useState } from "react";
import { useSkillBarChartData } from "./use-skill-bar-chart-data";

type SkillBarChartClientProps = {
  data: SkillData[];
};

export const SkillBarChartClient: FC<SkillBarChartClientProps> = withResponsive(
  ({ data }) => {
    const minDate = new Date(data.at(0)?.date ?? new Date());
    const maxDate = new Date();
    const [values, setValues] = useState<[Date, Date]>([minDate, maxDate]);
    const parsed = useSkillBarChartData(data, values);
    const { height, width } = useResponsive();

    const handleSliderChange = (value: [Date, Date]) => {
      if (isSameMonth(value[0], value[1])) {
        return;
      }
      setValues(value);
    };

    return (
      <div className="relative">
        <StackedBarChart
          title="Skills from occupations (hrs)"
          data={parsed}
          margins={{
            top: 32,
            right: 10,
            bottom: 120,
            left: 64,
          }}
          height={height - 56}
          width={width}
        />
        <div className="absolute bottom-0 w-full px-8">
          <DateRangeSlider
            labelPosition="bottom"
            label={(value) => <span>{timeFormat("%b %Y")(value)}</span>}
            value={values}
            onValueChange={handleSliderChange}
            min={minDate}
            max={maxDate}
            step={2592000000}
          />
        </div>
      </div>
    );
  },
);
