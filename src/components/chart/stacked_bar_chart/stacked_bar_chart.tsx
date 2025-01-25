"use client";
import { typefaceMeta } from "@/components/tokens/typeface";
import {
  max,
  scaleBand,
  scaleLinear,
  scaleOrdinal,
  schemeObservable10,
  stack,
} from "d3";
import { motion } from "framer-motion";
import { useState } from "react";

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
  // Change the selected state to include series name
  const [selected, setSelected] = useState<{
    series: string;
    value: number;
  } | null>(null);

  // Adjust width and height for margins
  const innerWidth = width - margins.left - margins.right;
  const innerHeight = height - margins.top - margins.bottom;

  // Get unique series and stacks
  const allSeries = Array.from(new Set(data.map((d) => d.series)));
  const allStacks = Array.from(new Set(data.map((d) => d.stack)));

  // Sort stacks by total value
  const stackTotals = allStacks.map((stack) => ({
    stack,
    total: data
      .filter((d) => d.stack === stack)
      .reduce((sum, d) => sum + d.value, 0),
  }));
  const sortedStacks = stackTotals
    .sort((a, b) => b.total - a.total)
    .map((item) => item.stack);

  // Reshape data for D3 stack
  const groupedData = sortedStacks.map((stack) => {
    const stackData: { stack: string; [key: string]: number | string } = {
      stack,
    };
    allSeries.forEach((series) => {
      const match = data.find((d) => d.stack === stack && d.series === series);
      stackData[series] = match?.value || 0;
    });
    return stackData;
  });

  // Create stack generator
  const stackGenerator = stack<(typeof groupedData)[0]>().keys(allSeries);

  const series = stackGenerator(groupedData);

  // Create scales
  const xScale = scaleBand()
    .range([0, innerWidth])
    .domain(sortedStacks)
    .padding(0.1);

  const yScale = scaleLinear()
    .domain([0, Math.max(...series.flat().map((d) => d[1]))])
    .range([innerHeight, 0]);

  const colorScale = scaleOrdinal<string>()
    .domain(allStacks)
    .range(schemeObservable10);

  // Add tick calculation before return statement
  const yTicks = yScale.ticks(5);

  // Add this before the return statement
  const stackSums = groupedData.map((stack) =>
    Object.keys(stack)
      .filter((key) => key !== "stack")
      .reduce((sum, key) => sum + (stack[key] as number), 0),
  );

  return (
    <svg
      width={max([0, innerWidth])}
      height={max([0, innerHeight])}
      overflow="visible"
    >
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

        {/* Y-axis */}
        <g>
          {/* Y-axis line */}
          <line
            x1={0}
            x2={0}
            y1={0}
            y2={innerHeight}
            className="stroke-foreground"
          />
          {/* Y-axis ticks and labels */}
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

        {/* Bars */}
        <g>
          {series.map((s, i) => (
            <g key={i}>
              {s.map((d, j) => (
                <motion.rect
                  key={j}
                  x={xScale(groupedData[j].stack)}
                  y={yScale(d[1])}
                  width={xScale.bandwidth()}
                  height={max([0, yScale(d[0]) - yScale(d[1])])}
                  fill={colorScale(d.data.stack)}
                  className="stroke-background stroke-3 hover:opacity-60"
                  opacity={0.8}
                  onTouchStart={() =>
                    setSelected({
                      series: s.key,
                      value: d.data[s.key] as number,
                    })
                  }
                  onTouchEnd={() => setSelected(null)}
                  onHoverStart={() => {
                    setSelected({
                      series: s.key,
                      value: d.data[s.key] as number,
                    });
                  }}
                  onHoverEnd={() => setSelected(null)}
                />
              ))}
            </g>
          ))}
          {/* X-axis labels */}
          <g transform={`translate(0,${innerHeight}) `}>
            {sortedStacks.map((stack, i) => (
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

        {/* Add annotations */}
        <g>
          {stackSums.map((sum, i) => (
            <text
              key={i}
              x={xScale(groupedData[i].stack)! + xScale.bandwidth() / 2}
              y={yScale(sum) - 8}
              textAnchor="middle"
              className={typefaceMeta("fill-foreground text-sm")}
            >
              {sum.toLocaleString()}
            </text>
          ))}
        </g>
      </g>
    </svg>
  );
};
