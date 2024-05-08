import { Occupation } from "../../../../../.contentlayer/generated";
import { FC } from "react";
import { OccupationCard } from "./OccupationCard";
import { motion } from "framer-motion";

interface OccupationItemProps {
  data: Occupation;
  idx: number;
  x: number;
  y: number;
  color: string;
  width: number;
  barHeight: number;
  textHeight: number;
  textMargin: number;
  path: string;
}

export const OccupationItem: FC<OccupationItemProps> = ({
  data,
  idx,
  x,
  y,
  color,
  width,
  barHeight,
  textHeight,
  textMargin,
  path,
}) => {
  if (width <= 0) return;
  return (
    <g>
      <motion.rect
        initial={{
          x,
          y,
          width: 0,
        }}
        animate={{
          strokeWidth: 1,
          opacity: 0.8,
          x,
          y,
          width: 48,
        }}
        whileHover={{
          strokeWidth: 4,
          opacity: 1,
        }}
        rx={4}
        height={barHeight}
        fill={color}
        className="peer stroke-background"
      />
      <foreignObject
        x={textMargin}
        y={idx * textHeight + 16}
        width={width - textMargin}
        height={textHeight - 8}
        className="rounded-lg peer-hover:bg-card"
      >
        <OccupationCard data={data} />
      </foreignObject>

      <motion.path
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        d={path}
        stroke={color}
        fill="none"
        strokeWidth={3}
      />
    </g>
  );
};
