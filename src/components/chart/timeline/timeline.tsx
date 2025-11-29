"use client";
import {
  curveStep,
  line,
  min,
  scaleOrdinal,
  scaleTime,
  timeMonth,
  timeYear,
} from "d3";
import type { FC } from "react";
import { useResponsive } from "@/components/template/responsive_wrapper";
import { ConferenceItem } from "./conference_item";
import { OccupationItem } from "./occupation_item";
import { useChannels } from "./use-channels";

type Data = {
  start_date: Date;
  end_date: Date | null;
  category: string;
};

interface TimelineProps {
  data: Data[];
  textBlockHeight: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const Timeline: FC<TimelineProps> = ({
  data,
  margin = {
    top: 8,
    right: 0,
    bottom: 8,
    left: 8,
  },
  textBlockHeight,
}) => {
  const { width } = useResponsive();
  const dataWithChannels = useChannels(data);
  const height = data.length * textBlockHeight;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // Scales
  const yScale = scaleTime()
    .domain([
      min(data, (d) => d.start_date) || new Date("1988-04-18"),
      new Date(),
    ])
    .range([innerHeight, margin.bottom]);

  const xScale = scaleOrdinal<number, number>()
    .domain(Array.from(new Set(dataWithChannels.map((d) => d.channel))))
    .range(
      Array.from(
        { length: new Set(dataWithChannels.map((d) => d.channel)).size },
        (_, i) => margin.left + 12 + (i * innerWidth) / 4 - i * 16,
      ),
    );
  const cScale = scaleOrdinal<string>()
    .domain(Array.from(new Set(data.map((d) => d.category))))
    .range(["#A8C7E6", "#E5B0A8", "#E5C7A8", "#B8D6A8", "#E5B680"]);

  const lineConnector = line()
    .curve(curveStep)
    .x((d) => d[0])
    .y((d) => d[1]);

  // Ticks
  const startDate = yScale.domain()[0];
  const endDate = yScale.domain()[1];
  const monthTicks = timeMonth.range(startDate, endDate);
  const yearTicks = timeYear.range(startDate, endDate);

  return (
    <div
      suppressHydrationWarning
      style={{
        height,
        width,
        overflow: "hidden",
      }}
    >
      <svg width={width} height={height}>
        {/* Y-axis line */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={innerHeight}
          className="stroke-foreground"
          strokeWidth={3}
        />

        {/* Month ticks */}
        {monthTicks.map((tick, i) => (
          <line
            key={`month-${i}`}
            x1={margin.left + 4}
            y1={yScale(tick)}
            x2={margin.left}
            y2={yScale(tick)}
            className="stroke-foreground"
            strokeWidth={2}
          />
        ))}

        {dataWithChannels.map((d, idx) => {
          const y1 = yScale(d.start_date);
          const y2 = yScale(d.end_date || new Date());
          const height = y1 - y2;

          if (d.category === "CONFERENCE") {
            return (
              <ConferenceItem
                key={idx}
                x={xScale(d.channel)}
                y={y2}
                color={cScale(d.category)}
                path={
                  lineConnector([
                    [xScale(d.channel) + 16, y1 - height / 2],
                    [innerWidth, idx * textBlockHeight + textBlockHeight / 2],
                  ]) || ""
                }
              />
            );
          }

          return (
            <OccupationItem
              key={idx}
              x={xScale(d.channel)}
              y={y2}
              barHeight={height}
              width={innerWidth}
              color={cScale(d.category)}
              path={
                lineConnector([
                  [xScale(d.channel) + innerWidth / 4, y1 - height / 2],
                  [innerWidth, idx * textBlockHeight + textBlockHeight / 2],
                ]) || ""
              }
            />
          );
        })}

        {/* Year ticks and labels */}
        {yearTicks.map((tick, i) => (
          <g key={`year-${i}`}>
            <line
              x1={margin.left + 8}
              y1={yScale(tick)}
              x2={margin.left}
              y2={yScale(tick)}
              className="stroke-foreground"
              strokeWidth={4}
            />
            <text
              x={margin.left + 12}
              y={yScale(tick)}
              className="fill-foreground pointer-events-none hidden text-shadow-md sm:block sm:text-xl md:text-3xl lg:text-6xl"
              alignmentBaseline="middle"
            >
              {tick.getFullYear()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
