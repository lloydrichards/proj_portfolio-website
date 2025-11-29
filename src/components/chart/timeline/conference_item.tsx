import { motion } from "framer-motion";
import type { FC } from "react";

interface ConferenceItemProps {
  x: number;
  y: number;
  color: string;
  path: string;
}

export const ConferenceItem: FC<ConferenceItemProps> = ({
  x,
  y,
  color,
  path,
}) => {
  const radius = 16; // Circle radius
  return (
    <g>
      <motion.circle
        initial={{
          cx: x,
          cy: y,
          r: 0,
        }}
        animate={{
          strokeWidth: 1,
          opacity: 1,
          cx: x + radius,
          cy: y,
          r: radius,
        }}
        whileHover={{
          strokeWidth: 4,
          opacity: 0.8,
        }}
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
