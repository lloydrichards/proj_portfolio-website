"use client";
import { typefaceMeta } from "@/components/tokens/typeface";
import { max } from "d3";
import { useState } from "react";
import { AesLayer } from "./aes_layer";
import { GeomLayer } from "./geom_layer";
import { useStackedBarData } from "./use-stacked-bar-data";

export interface StackedData {
  stack: string;
  series: string;
  value: number;
}

export interface StackedBarChartProps {
  height?: number;
  width?: number;
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  title?: string;
  data: StackedData[];
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  margins = { top: 10, right: 10, bottom: 48, left: 10 },
  height = 200,
  width = 300,
  title,
}) => {
  const [selected, setSelected] = useState<{
    series: string;
    value: number;
  } | null>(null);

  const innerWidth = width - margins.left - margins.right;
  const innerHeight = height - margins.top - margins.bottom;

  const { cScale, series, xScale, yScale } = useStackedBarData(data, {
    innerHeight,
    innerWidth,
  });

  if (height <= 0 || width <= 0) {
    return null;
  }

  return (
    <svg width={max([0, width])} height={max([0, height])} overflow="visible">
      <g transform={`translate(${margins.left},${margins.top})`}>
        {/* Title */}
        {title && (
          <text
            x={innerWidth}
            y={-margins.top / 2}
            textAnchor="end"
            dominantBaseline="middle"
            className={typefaceMeta("fill-foreground font-medium")}
          >
            {title}
          </text>
        )}

        {/* Tooltip */}
        {selected && (
          <text
            x={innerWidth}
            y={innerHeight / 2}
            textAnchor="end"
            dominantBaseline="middle"
            className={typefaceMeta("fill-foreground font-medium")}
          >
            {`${selected.series}: ${selected.value}hrs`}
          </text>
        )}

        <AesLayer xScale={xScale} yScale={yScale} height={innerHeight} />
        <GeomLayer
          xScale={xScale}
          yScale={yScale}
          cScale={cScale}
          series={series}
          onSelected={setSelected}
        />
      </g>
    </svg>
  );
};
