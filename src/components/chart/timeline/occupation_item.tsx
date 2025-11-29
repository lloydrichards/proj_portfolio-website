import { motion } from "framer-motion";
import type { FC } from "react";

interface OccupationItemProps {
  x: number;
  y: number;
  color: string;
  width: number;
  barHeight: number;
  path: string;
}

export const OccupationItem: FC<OccupationItemProps> = ({
  x,
  y,
  color,
  width,
  barHeight,
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
          opacity: 1,
          x,
          y,
          width: width / 4,
        }}
        whileHover={{
          strokeWidth: 4,
          opacity: 0.8,
        }}
        rx={4}
        height={barHeight}
        fill={color}
        className="peer stroke-background"
      />

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
        strokeWidth={1}
      />
    </g>
  );
};
