import { Brush } from "@visx/brush";
import BaseBrush, { BaseBrushState } from "@visx/brush/lib/BaseBrush";
import { Bounds } from "@visx/brush/lib/types";
import { max, scaleBand, scaleTime } from "d3";
import { addDays, eachMonthOfInterval, format } from "date-fns";
import { FC, useMemo, useRef, useState } from "react";
import { FiFastForward, FiPause, FiPlay, FiRewind } from "react-icons/fi";
import { useInterval } from "usehooks-ts";
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
  const brushRef = useRef<BaseBrush | null>(null);
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

  // Brush
  const initialBrushPosition = useMemo(
    () => ({
      start: { x: xScale(intervals[0]) },
      end: { x: xScale(intervals[1]) },
    }),
    [xScale]
  );

  // Handlers
  const [selected, setSelected] = useState<[Date, Date]>([
    intervals[0],
    intervals[1],
  ]);
  const [window, setWindow] = useState<[Date, Date]>([
    intervals[0],
    intervals[1],
  ]);
  const [count, setCount] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) return;
    setSelected([new Date(domain.x0), new Date(domain.x1)]);
  };

  const ontTick = () => {
    if (!brushRef.current) return;
    brushRef.current.updateBrush((prevBrush) => {
      const newStart = addDays(window[0], speed);
      const newEnd = addDays(window[1], speed);
      const newExtent = brushRef.current!.getExtent(
        { x: xScale(newStart) },
        { x: xScale(newEnd) }
      );
      setWindow([newStart, newEnd]);
      const newState: BaseBrushState = {
        ...prevBrush,
        start: { y: newExtent.y0, x: newExtent.x0 },
        end: { y: newExtent.y1, x: newExtent.x1 },
        extent: newExtent,
      };
      return newState;
    });
  };

  const onReset = () => {
    setSpeed(0);
    setWindow([intervals[0], intervals[1]]);
    setSelected([intervals[0], intervals[1]]);
    setCount(0);
    if (!brushRef.current) return;
    brushRef.current.updateBrush((prevBrush) => {
      const newExtent = brushRef.current!.getExtent(
        { x: xScale(intervals[0]) },
        { x: xScale(intervals[1]) }
      );
      const newState: BaseBrushState = {
        ...prevBrush,
        start: { y: newExtent.y0, x: newExtent.x0 },
        end: { y: newExtent.y1, x: newExtent.x1 },
        extent: newExtent,
      };
      return newState;
    });
  };

  useInterval(
    () => {
      setCount(count + 1);
      ontTick();
    },
    speed != 0 ? 200 : null
  );

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
                intersect(selected, [c.start, c.end]) ? "tomato" : "SteelBlue"
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
            innerRef={brushRef}
            initialBrushPosition={initialBrushPosition}
            resizeTriggerAreas={[]}
            onChange={onBrushChange}
            onClick={onReset}
          />
        </g>
      </svg>
      <div className="not-prose grid h-8 grid-flow-col grid-cols-3 items-center gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => setSpeed(speed - 1)}
            className="w-36 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            <FiRewind />
          </button>
          <button
            onClick={() => setSpeed(speed == 0 ? 1 : 0)}
            className="w-36 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            {speed != 0 ? <FiPause /> : <FiPlay />}
          </button>
          <button
            onClick={() => setSpeed(speed + 1)}
            className="w-36 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            <FiFastForward />
          </button>
        </div>
        <p>
          Brush Start:{" "}
          {selected != undefined ? format(selected[0], "LLL d, yyy") : null}
        </p>
        <p>
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
