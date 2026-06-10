"use client";

import type { VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "framer-motion";
import type { Ref } from "react";

import { cn } from "@/lib/utils";
import { tileTransition, tileVariants } from "./tile.variants";

export type { TileSize } from "./tile.variants";

interface TileProps
  extends HTMLMotionProps<"section">,
    VariantProps<typeof tileVariants> {
  ref?: Ref<HTMLElement>;
}

export function Tile({
  className,
  outline,
  display,
  size,
  children,
  ref,
  ...props
}: TileProps) {
  return (
    <motion.section
      layout="position"
      transition={{ layout: tileTransition }}
      className={cn(tileVariants({ size, outline, display, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </motion.section>
  );
}
