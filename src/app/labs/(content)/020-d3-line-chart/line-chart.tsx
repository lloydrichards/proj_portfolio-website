import { curveCardinal, line, scaleLinear } from "d3";

const values = [25, 36, 29, 60, 48, 22, 39];
const width = 700;
const height = 300;
const plotWidth = 600;
const plotHeight = 250;
const left = 50;
const top = 12;

const xScale = scaleLinear([0, values.length - 1], [0, plotWidth]);
const yScale = scaleLinear([0, 100], [plotHeight, 0]);
const path = line<number>()
  .x((_, index) => xScale(index))
  .y(yScale)
  .curve(curveCardinal)(values);

export function LineChart() {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="D3 line chart showing 25, 36, 29, 60, 48, 22, and 39"
      className="not-prose my-6 block h-auto w-full max-w-[700px] rounded-lg border"
    >
      <g transform={`translate(${left} ${top})`} fontSize={16}>
        <g transform={`translate(0 ${plotHeight})`}>
          <line x2={plotWidth} stroke="currentColor" />
          {xScale.ticks(values.length - 1).map((tick) => (
            <g key={tick} transform={`translate(${xScale(tick)} 0)`}>
              <line y2={6} stroke="currentColor" />
              <text y={23} textAnchor="middle" fill="currentColor">
                {tick}
              </text>
            </g>
          ))}
        </g>
        <g>
          <line y2={plotHeight} stroke="currentColor" />
          {yScale.ticks(10).map((tick) => (
            <g key={tick} transform={`translate(0 ${yScale(tick)})`}>
              <line x2={-6} stroke="currentColor" />
              <text
                x={-9}
                textAnchor="end"
                dominantBaseline="middle"
                fill="currentColor"
              >
                {tick}
              </text>
            </g>
          ))}
        </g>
        <path
          d={path ?? undefined}
          fill="none"
          stroke="tomato"
          strokeWidth={3}
        />
      </g>
    </svg>
  );
}
