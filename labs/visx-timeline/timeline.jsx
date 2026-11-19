import { AxisTop } from "@visx/axis";
import { Brush } from "@visx/brush";
import { scaleBand, scaleUtc } from "@visx/scale";
import { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const day = 24 * 60 * 60 * 1000;
const months = Array.from(
  { length: 13 },
  (_, month) => new Date(Date.UTC(2021, month, 1)),
);
const yearStart = Number(months[0]);
const yearEnd = Number(months[12]);
const initialRange = [yearStart, Number(months[1])];
const channels = ["CH 1", "CH 2", "CH 3"];
const schedules = [
  ["CH 1", Date.UTC(2021, 0, 1), Date.UTC(2021, 3, 1)],
  ["CH 2", Date.UTC(2021, 1, 1), Date.UTC(2021, 4, 1)],
  ["CH 2", Date.UTC(2021, 7, 1), Date.UTC(2021, 9, 1)],
  ["CH 3", Date.UTC(2021, 3, 1), Date.UTC(2021, 6, 1)],
];
const formatMonth = new Intl.DateTimeFormat("en", {
  month: "short",
  timeZone: "UTC",
});
const formatDate = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const left = 42;
const top = 30;
const height = 122;
const margin = { left, top };
const chartHeight = top + height + 4;
const yScale = scaleBand({
  domain: channels,
  range: [0, height],
  padding: 0.15,
});
const selectedBoxStyle = {
  fill: "#fbbf24",
  fillOpacity: 0.22,
  stroke: "#b45309",
};
const playback =
  new URLSearchParams(window.location.search).get("mode") === "playback";

function Timeline() {
  const chart = useRef(null);
  const brush = useRef(null);
  const [width, setWidth] = useState(0);
  const [range, setRange] = useState(playback ? initialRange : null);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const element = chart.current;
    const observer = new ResizeObserver(() => setWidth(element.clientWidth));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const innerWidth = Math.max(1, width - left - 8);
  const scale = useMemo(
    () =>
      scaleUtc({
        domain: [months[0], months[12]],
        range: [0, innerWidth],
        clamp: true,
      }),
    [innerWidth],
  );

  useEffect(() => {
    if (!speed) return;

    const timer = window.setInterval(() => {
      setRange(([start, end]) => {
        const shift = Math.max(
          yearStart - start,
          Math.min(speed * day, yearEnd - end),
        );
        return shift ? [start + shift, end + shift] : [start, end];
      });
    }, 200);

    return () => window.clearInterval(timer);
  }, [speed]);

  useEffect(() => {
    if (!playback || !brush.current || !range) return;
    const control = brush.current;
    const start = { x: scale(range[0]), y: 0 };
    const end = { x: scale(range[1]), y: height };
    control.updateBrush((previous) => ({
      ...previous,
      start,
      end,
      extent: control.getExtent(start, end),
    }));
  }, [range, scale]);

  function reset() {
    setSpeed(0);
    if (playback) {
      setRange([...initialRange]);
    } else {
      brush.current?.reset();
      setRange(null);
    }
  }

  return (
    <main>
      <div ref={chart} className="chart">
        {width > left && (
          <svg
            width={width}
            height={chartHeight}
            aria-label="Three channel schedules for 2021"
          >
            <g transform={`translate(${left} ${top})`}>
              <AxisTop
                scale={scale}
                tickValues={months
                  .slice(0, -1)
                  .filter((_, index) => width >= 460 || index % 2 === 0)}
                tickFormat={(date) => formatMonth.format(date)}
                tickLabelProps={{ fill: "currentColor", fontSize: 10 }}
              />
              {months.map((date) => (
                <line
                  key={Number(date)}
                  x1={scale(date)}
                  x2={scale(date)}
                  y2={height}
                  stroke="currentColor"
                  opacity={0.2}
                />
              ))}
              {channels.map((channel) => (
                <text
                  key={channel}
                  x={-6}
                  y={yScale(channel) + yScale.bandwidth() / 2}
                  dominantBaseline="middle"
                  textAnchor="end"
                  fill="currentColor"
                  fontSize={11}
                >
                  {channel}
                </text>
              ))}
              {schedules.map(([channel, start, end]) => (
                <rect
                  key={`${channel}-${start}`}
                  data-schedule=""
                  rx={4}
                  x={scale(start)}
                  y={yScale(channel)}
                  width={scale(end) - scale(start)}
                  height={yScale.bandwidth()}
                  fill={
                    range
                      ? range[0] <= end && start <= range[1]
                        ? "tomato"
                        : "steelblue"
                      : "seagreen"
                  }
                />
              ))}
              <Brush
                innerRef={brush}
                margin={margin}
                xScale={scale}
                yScale={yScale}
                width={innerWidth}
                height={height}
                brushDirection="horizontal"
                resizeTriggerAreas={playback ? [] : ["left", "right"]}
                selectedBoxStyle={selectedBoxStyle}
                onBrushStart={playback ? () => setSpeed(0) : undefined}
                onChange={
                  playback
                    ? undefined
                    : (bounds) => {
                        setRange(
                          bounds
                            ? [Number(bounds.x0), Number(bounds.x1)]
                            : null,
                        );
                      }
                }
                onBrushEnd={
                  playback
                    ? (bounds) => {
                        if (!bounds) return;
                        setSpeed(0);
                        const { x0, x1 } = brush.current.state.extent;
                        setRange([
                          Number(scale.invert(x0)),
                          Number(scale.invert(x1)),
                        ]);
                      }
                    : undefined
                }
              />
            </g>
          </svg>
        )}
      </div>
      <div className="controls">
        <div className="buttons">
          {playback && (
            <>
              <button
                type="button"
                onClick={() =>
                  setSpeed((previous) => Math.max(-8, previous - 1))
                }
              >
                Rewind
              </button>
              <button type="button" onClick={() => setSpeed(speed ? 0 : 1)}>
                {speed ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                onClick={() =>
                  setSpeed((previous) => Math.min(8, previous + 1))
                }
              >
                Fast-forward
              </button>
            </>
          )}
          <button type="button" onClick={reset}>
            {playback ? "Reset" : "Clear selection"}
          </button>
        </div>
        <output aria-live={speed ? "off" : "polite"}>
          {range
            ? `${formatDate.format(range[0])} to ${formatDate.format(range[1])}`
            : "Drag across the timeline to select dates."}
        </output>
      </div>
    </main>
  );
}

createRoot(document.getElementById("timeline")).render(<Timeline />);
