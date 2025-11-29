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
  return (
    <g>
      {/* Y-axis */}
      <g>
        <line x1={0} x2={0} y1={0} y2={height} className="stroke-foreground" />
        {yTicks.map((tick) => (
          <g
            key={tick}
            transform={`translate(0,${yScale(tick)})`}
            className="stroke-foreground"
          >
            <line x1={-6} x2={0} y1={0} y2={0} />
            <text
              x={-8}
              dy=".32em"
              textAnchor="end"
              className={typefaceMeta("fill-foreground text-sm")}
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
      {/* X-axis labels */}
      <g transform={`translate(0,${height}) `}>
        {xScale.domain().map((stack, i) => (
          <g
            key={i}
            transform={`translate(${xScale(stack)! + xScale.bandwidth() / 2},12)`}
          >
            <text
              dominantBaseline="middle"
              textAnchor="end"
              className={typefaceMeta("fill-foreground -rotate-45")}
            >
              {stack}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
};
