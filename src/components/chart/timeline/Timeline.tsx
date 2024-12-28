"use client";
import { curveStep, line, min, scaleOrdinal, scaleTime } from "d3";
import { FC } from "react";
import { OccupationItem } from "./internal/OccupationItem";
import { OccupationMeta } from "@/types/domain";
import { useResponsive } from "@/components/template/responsive_wrapper";

interface TimelineProps {
  data: OccupationMeta[];
  maxHeight?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

const isBefore = (date1: Date, date2: Date): boolean => {
  return date1.getTime() < date2.getTime();
};
export const Timeline: FC<TimelineProps> = ({
  data,
  maxHeight,
  margin = {
    top: 16,
    right: 0,
    bottom: 16,
    left: 48,
  },
}) => {
  const { width } = useResponsive();
  const textBlockHeight = 160;
  const textMargin = 180;
  const height = data.length * textBlockHeight || maxHeight || 400;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // Scales
  const yScale = scaleTime()
    .domain([
      min(data, (d) => new Date(d.start_date)) || new Date("1988-04-18"),
      new Date(),
    ])
    .range([innerHeight, margin.bottom]);
  const xScale = scaleOrdinal<number, number>()
    .domain([0, 1, 2])
    .range([margin.left, margin.left + 16, margin.left + 32]);
  const cScale = scaleOrdinal<string>()
    .domain(Array.from(new Set(data.map((d) => d.category))))
    .range(["#CBE0F2", "#EECEC9", "#F0E2CE"]);

  // Helpers
  const lookupInRange = (
    corner: Date,
    allValues: Array<OccupationMeta>,
  ): boolean => {
    let result: boolean = false;
    allValues.forEach((i) => {
      if (
        corner > new Date(i.start_date) &&
        corner < new Date(i.end_date || new Date())
      ) {
        result = true;
        return true;
      }
    });
    return result;
  };

  const dataWithChannels = data
    .sort((a, b) =>
      isBefore(new Date(a.start_date), new Date(b.start_date)) ? 1 : -1,
    )
    .map((d) => {
      if (
        lookupInRange(new Date(d.end_date || new Date()), data) &&
        lookupInRange(new Date(d.start_date), data)
      ) {
        return { ...d, channel: 2 };
      } else if (lookupInRange(new Date(d.start_date), data)) {
        return { ...d, channel: 1 };
      } else {
        return { ...d, channel: 0 };
      }
    });

  const lineConnector = line()
    .curve(curveStep)
    .x((d) => d[0])
    .y((d) => d[1]);

  return (
    <div
      suppressHydrationWarning
      style={{
        height,
        width,
        maxHeight: maxHeight || undefined,
        overflow: "scroll",
      }}
    >
      <svg width={width} height={height}>
        {dataWithChannels.map((d, idx) => {
          {
            const startDate = new Date(d.start_date);
            const endDate = new Date(d.end_date || new Date());
            const y1 = yScale(startDate);
            const y2 = yScale(endDate);
            const height = y1 - y2;
            return (
              <OccupationItem
                key={idx}
                data={d}
                idx={idx}
                x={xScale(d.channel)}
                y={y2}
                barHeight={height}
                textHeight={textBlockHeight}
                width={innerWidth}
                textMargin={textMargin}
                color={cScale(d.category)}
                path={
                  lineConnector([
                    [xScale(d.channel) + 48, y1 - height / 2],
                    [textMargin, idx * textBlockHeight + textBlockHeight / 2],
                  ]) || ""
                }
              />
            );
          }
        })}
      </svg>
    </div>
  );
};
