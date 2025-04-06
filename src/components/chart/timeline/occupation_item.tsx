import { motion } from "framer-motion";
import { FC } from "react";

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
