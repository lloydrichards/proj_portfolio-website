import type { ScaleBand, ScaleLinear } from "d3";
import type { FC } from "react";
import { typefaceMeta } from "@/components/tokens/typeface";

type AesLayerProps = {
  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number>;
  height: number;
};
export const AesLayer: FC<AesLayerProps> = ({ xScale, yScale, height }) => {
  // Add tick calculation before return statement
  const yTicks = yScale.ticks(5);
  const clipId = `stacked-bar-clip-${xScale.domain().length}-${Math.round(
    height,
  )}`;
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={0} y={0} width={xScale.range()[1]} height={height} />
        </clipPath>
      </defs>
      {/* Grid + Y-axis */}
      <g>
        {yTicks.map((tick) => (
          <g key={tick} transform={`translate(0,${yScale(tick)})`}>
            <line
              x1={0}
              x2={xScale.range()[1]}
              y1={0}
              y2={0}
              className="stroke-muted-foreground/20"
              clipPath={`url(#${clipId})`}
            />
            <line
              x1={-6}
              x2={0}
              y1={0}
              y2={0}
              className="stroke-muted-foreground/50"
            />
            <text
              x={-8}
              dy=".32em"
              textAnchor="end"
              className={typefaceMeta("fill-muted-foreground text-xs")}
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
      {/* X-axis labels */}
      <g transform={`translate(0,${height}) `}>
        {xScale.domain().map((stack) => {
          const stackPosition = xScale(stack);
          if (stackPosition === undefined) {
            return null;
          }

          return (
            <g
              key={stack}
              transform={`translate(${stackPosition + xScale.bandwidth() / 2},12)`}
            >
              <text
                dominantBaseline="middle"
                textAnchor="end"
                className={typefaceMeta(
                  "fill-muted-foreground text-xs -rotate-45",
                )}
              >
                {stack}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
};
