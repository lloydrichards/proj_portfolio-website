"use client";
import { useResponsive } from "@/components/template/responsive_wrapper";
import { getAllOccupations } from "@/services/api/get-all-occupations";
import { curveStep, line, min, scaleOrdinal, scaleTime } from "d3";
import { FC } from "react";
import { OccupationItem } from "./internal/OccupationItem";

export type Occupations = Awaited<ReturnType<typeof getAllOccupations>>;
interface TimelineProps {
  data: Occupations;
  maxHeight?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

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
  const textBlockHeight = 240;
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
    .domain([0, 1, 2, 3])
    .range([margin.left, margin.left + 16, margin.left + 32, margin.left + 48]);
  const cScale = scaleOrdinal<string>()
    .domain(Array.from(new Set(data.map((d) => d.category))))
    .range(["#CBE0F2", "#EECEC9", "#F0E2CE"]);

  const dataWithChannels = data.map((d, i) => ({
    ...d,
    channel: i % 3,
  }));

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
        overflow: "hidden",
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
