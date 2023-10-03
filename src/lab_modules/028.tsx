import { scaleTime, scaleBand, max } from "d3";
import { eachMonthOfInterval, format } from "date-fns";
import { FC, useRef, useState } from "react";
import { Brush } from "@visx/brush";
import { Bounds } from "@visx/brush/lib/types";
import BaseBrush from "@visx/brush/lib/BaseBrush";

const channels = [
  {
    channel: "CH 1",
    start: new Date("2021-01-01"),
    end: new Date("2021-02-01"),
  },
  {
    channel: "CH 2",
    start: new Date("2021-02-01"),
    end: new Date("2021-05-01"),
  },
  {
    channel: "CH 2",
    start: new Date("2021-08-01"),
    end: new Date("2021-09-01"),
  },
  {
    channel: "CH 3",
    start: new Date("2021-04-01"),
    end: new Date("2021-07-01"),
  },
];

const timeDomain = [new Date("2021-01-01"), new Date("2022-01-01")];
const channelDomain = Array.from(new Set(channels.map((c) => c.channel)));

interface ChartProps {
  height: number;
  width: number;
}

export const Timeline: FC<ChartProps> = ({ height, width }) => {
  const [selected, setSelected] = useState<[Date, Date] | undefined>();
  // Dimensions
  const margin = {
    top: 24,
    bottom: 32,
    left: 48,
    right: 0,
  };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const intervals = eachMonthOfInterval({
    start: timeDomain[0],
    end: timeDomain[1],
  });

  // Scales
  const xScale = scaleTime().domain(timeDomain).range([0, innerWidth]);
  const yScale = scaleBand()
    .domain(channelDomain)
    .range([0, innerHeight])
    .paddingInner(0.1);

  // Handlers
  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) return;
    setSelected([new Date(domain.x0), new Date(domain.x1)]);
  };

  return (
    <div
      style={{
        background: "light grey",
        height: height,
        width: width,
        overflow: "scroll",
      }}
    >
      <svg width={width} height={margin.top + innerHeight}>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {/* Axis */}
          {intervals.map((i, idx) => {
            const barWidth = clampZero(xScale(intervals[idx + 1]) - xScale(i));
            const label = format(i, "LLL");
            return (
              <g
                key={`g-${idx}`}
                transform={`translate(${xScale(i)} ${-margin.top / 2})`}
              >
                <text x={barWidth / 2} textAnchor="middle">
                  {label}
                </text>
                <line x1={0} x2={0} y1={0} y2={height} stroke="grey" />
              </g>
            );
          })}
          {/* Labels */}
          {channels.map((c, i) => (
            <text
              key={`text-${i}`}
              x={-margin.left}
              y={(yScale(c.channel) || 0) + yScale.bandwidth() / 2}
              fill="black"
              alignmentBaseline="middle"
            >
              {c.channel}
            </text>
          ))}
          {/* Rects */}
          {channels.map((c, i) => (
            <rect
              key={`rect-${i}`}
              rx={4}
              x={xScale(c.start)}
              y={yScale(c.channel) || 0}
              width={clampZero(xScale(c.end) - xScale(c.start))}
              height={yScale.bandwidth()}
              fill={
                selected != undefined
                  ? intersect(selected, [c.start, c.end])
                    ? "tomato"
                    : "SteelBlue"
                  : "SeaGreen"
              }
            />
          ))}
        </g>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          <Brush
            xScale={xScale}
            yScale={yScale}
            height={innerHeight}
            width={innerWidth}
            margin={margin}
            //   innerRef={brushRef}
            //   useWindowMoveEvents
            //   resizeTriggerAreas={["left", "right"]}
            //   brushDirection="horizontal"
            onChange={onBrushChange}
            onClick={() => setSelected(undefined)}
          />
        </g>
      </svg>
      <div className="not-prose grid h-8 grid-flow-col grid-cols-2 gap-2">
        <p className="line-clamp-1">
          Brush Start:{" "}
          {selected != undefined ? format(selected[0], "LLL d, yyy") : null}
        </p>
        <p className="line-clamp-1">
          Brush End:{" "}
          {selected != undefined ? format(selected[1], "LLL d, yyy") : null}
        </p>
      </div>
    </div>
  );
};

const clampZero = (n: number) => max([n, 0]) || 0;
const intersect = (a: [Date, Date], b: [Date, Date]) =>
  a[0] <= b[1] && b[0] <= a[1];
