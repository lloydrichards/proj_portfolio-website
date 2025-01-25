"use client";
import { extent, line, scaleLinear } from "d3";
import { motion } from "framer-motion";
import { useRef } from "react";
export interface Data {
  timestamp: Date;
  value: number;
  category: string;
}

export interface ILineChart {
  height?: number;
  width?: number;
  data: Data[];
}

export const LineChart: React.FC<ILineChart> = ({
  data,
  height = 200,
  width = 300,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const xScale = scaleLinear()
    .domain(extent(data, (d) => d.timestamp) as [Date, Date])
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.value) as [number, number])
    .range([height, 0]);

  const lineMaker = line<Data>()
    .x((d) => xScale(d.timestamp))
    .y((d) => yScale(d.value));
  return (
    <div>
      <svg width={width} height={height} overflow="visible" ref={svgRef}>
        <motion.path
          d={lineMaker(data) || ""}
          stroke="black"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </svg>
    </div>
  );
};
