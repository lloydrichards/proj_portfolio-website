"use client";
import { max } from "d3";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atom/tooltip";
import { typefaceMeta } from "@/components/tokens/typeface";
import { AesLayer } from "./aes_layer";
import { GeomLayer } from "./geom_layer";
import { useStackedBarData } from "./use-stacked-bar-data";

export interface StackedData {
  stack: string;
  series: string;
  value: number;
}

interface StackedBarChartProps {
  height?: number;
  width?: number;
  margins?: { top: number; right: number; bottom: number; left: number };
  title?: string;
  data: StackedData[];
  seriesDomain?: string[];
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  margins = { top: 10, right: 10, bottom: 48, left: 10 },
  height = 200,
  width = 300,
  title,
  seriesDomain,
}) => {
  const innerWidth = width - margins.left - margins.right;
  const innerHeight = height - margins.top - margins.bottom;

  const { cScale, series, xScale, yScale } = useStackedBarData(data, {
    innerHeight,
    innerWidth,
    cDomain: seriesDomain,
  });

  if (height <= 0 || width <= 0) {
    return null;
  }

  const chartWidth = max([0, width]);
  const chartHeight = max([0, height]);

  return (
    <div
      className="relative"
      style={{ width: chartWidth, height: chartHeight }}
    >
      <svg
        width={chartWidth}
        height={chartHeight}
        overflow="visible"
        role="img"
        aria-label={title ? `${title} stacked bar chart` : "Stacked bar chart"}
      >
        <g transform={`translate(${margins.left},${margins.top})`}>
          {/* Title */}
          {title && (
            <text
              x={innerWidth}
              y={-margins.top / 2}
              textAnchor="end"
              dominantBaseline="middle"
              className={typefaceMeta("fill-muted-foreground font-medium")}
            >
              {title}
            </text>
          )}

          <AesLayer xScale={xScale} yScale={yScale} height={innerHeight} />
          <GeomLayer
            xScale={xScale}
            yScale={yScale}
            cScale={cScale}
            series={series}
          />
        </g>
      </svg>
      {series.map((s) =>
        s.map((d) => {
          const xValue = xScale(d.data.stack);
          if (xValue === undefined) {
            return null;
          }
          const segmentHeight = max([0, yScale(d[0]) - yScale(d[1])]);
          if (!segmentHeight) {
            return null;
          }
          const left = margins.left + xValue;
          const top = margins.top + yScale(d[1]);
          const widthValue = xScale.bandwidth();
          const value = d.data[s.key] as number;
          const label = `${s.key}: ${value}hrs`;

          return (
            <Tooltip key={`tooltip-${s.key}-${d.data.stack}`}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label={label}
                  className="absolute rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{
                    left,
                    top,
                    width: widthValue,
                    height: segmentHeight,
                  }}
                />
              </TooltipTrigger>
              <TooltipContent
                className="pointer-events-none"
                positionerClassName="pointer-events-none"
              >
                <span className="text-sm font-medium">{label}</span>
              </TooltipContent>
            </Tooltip>
          );
        }),
      )}
    </div>
  );
};
