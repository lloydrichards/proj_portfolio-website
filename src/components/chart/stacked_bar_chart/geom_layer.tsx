import { max, type ScaleBand, type ScaleLinear, type ScaleOrdinal } from "d3";
import type { FC } from "react";
import { typefaceMeta } from "@/components/tokens/typeface";

type GeomLayerProps = {
  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number>;
  cScale: ScaleOrdinal<string, string>;
  series: d3.Series<
    { stack: string; [key: string]: string | number },
    string
  >[];
};

export const GeomLayer: FC<GeomLayerProps> = ({
  xScale,
  yScale,
  cScale,
  series,
}) => {
  const stackSums = series[0].map((_, index) => {
    return series.reduce((sum, s) => {
      const value = s[index].data[s.key] as number;
      return sum + value;
    }, 0);
  });

  return (
    <g>
      {/* Bars */}
      <g>
        {series.map((s) => (
          <g key={`series-${s.key}`}>
            {s.map((d) => (
              <rect
                key={`series-${s.key}-stack-${d.data.stack}`}
                x={xScale(d.data.stack)}
                y={yScale(d[1])}
                width={xScale.bandwidth()}
                height={max([0, yScale(d[0]) - yScale(d[1]) - 4])}
                fill={cScale(d.data.stack)}
                className="stroke-muted-foreground/40 transition-opacity duration-150 hover:opacity-70"
                strokeWidth={1}
                opacity={0.8}
              />
            ))}
          </g>
        ))}
      </g>
      {/* Annotations */}
      <g>
        {stackSums.map((sum, i) => {
          const stackKey = series[0][i]?.data.stack;
          if (!stackKey) {
            return null;
          }
          const stackPosition = xScale(stackKey);
          if (stackPosition === undefined) {
            return null;
          }
          return (
            <text
              key={`stack-sum-${stackKey}`}
              x={stackPosition + xScale.bandwidth() / 2}
              y={yScale(sum) - 8}
              textAnchor="middle"
              className={typefaceMeta("fill-muted-foreground text-xs")}
            >
              {sum.toLocaleString()}
            </text>
          );
        })}
      </g>
    </g>
  );
};
