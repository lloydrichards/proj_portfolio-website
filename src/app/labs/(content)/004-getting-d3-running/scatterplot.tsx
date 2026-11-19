import { randomLcg, scaleLinear } from "d3";

const size = 600;
const margin = 40;
const plotSize = size - 2 * margin;

const random = randomLcg(0.42);
const points = Array.from({ length: 100 }, (_, id) => ({
  id,
  x: random() * 40,
  y: random() * 40,
}));

const xScale = scaleLinear([0, 50], [0, plotSize]);
const yScale = scaleLinear([0, 50], [plotSize, 0]);

export function Scatterplot() {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Scatterplot of 100 sample points positioned using D3 linear scales"
      className="not-prose my-6 block h-auto w-full max-w-[600px] rounded-lg border"
    >
      <g transform={`translate(${margin} ${margin})`} fill="tomato">
        {points.map(({ id, x, y }) => (
          <circle key={id} cx={xScale(x)} cy={yScale(y)} r={5} />
        ))}
      </g>
    </svg>
  );
}
