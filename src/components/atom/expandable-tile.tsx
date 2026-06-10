"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { type HTMLMotionProps, motion } from "framer-motion";
import type { FC, ReactNode, Ref } from "react";
import { createContext, use, useCallback, useMemo, useState } from "react";
import {
  type TileSize,
  tileTransition,
  tileVariants,
} from "@/components/atom/tile.variants";
import { cn } from "@/lib/utils";

type TileContextValue = {
  sizeIndex: number;
  currentSize: TileSize;
  sizes: TileSize[];
  cycle: () => void;
};

const TileContext = createContext<TileContextValue | null>(null);

export const useTileContext = () => {
  const ctx = use(TileContext);
  if (!ctx) {
    throw new Error("TileTrigger must be used within an ExpandableTile");
  }
  return ctx;
};

type ExpandableTileProps = HTMLMotionProps<"section"> & {
  sizes: TileSize[];
  defaultSizeIndex?: number;
  sizeIndex?: number;
  onSizeChange?: (index: number) => void;
  outline?: boolean | null;
  display?: "grid" | "default" | null;
  className?: string;
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
};

export const ExpandableTile: FC<ExpandableTileProps> = ({
  className,
  outline = true,
  display = "default",
  sizes,
  defaultSizeIndex = 0,
  sizeIndex: controlledSizeIndex,
  onSizeChange,
  children,
  ref,
  ...props
}) => {
  const [internalIndex, setInternalIndex] = useState(defaultSizeIndex);

  const isControlled = controlledSizeIndex !== undefined;
  const activeIndex = isControlled ? controlledSizeIndex : internalIndex;

  const resolvedSize: TileSize = sizes[activeIndex] ?? sizes[0];

  const cycle = useCallback(() => {
    const nextIndex = (activeIndex + 1) % sizes.length;
    if (!isControlled) {
      setInternalIndex(nextIndex);
    }
    onSizeChange?.(nextIndex);
  }, [activeIndex, sizes, isControlled, onSizeChange]);

  const contextValue = useMemo<TileContextValue>(
    () => ({
      sizeIndex: activeIndex,
      currentSize: resolvedSize,
      sizes,
      cycle,
    }),
    [activeIndex, resolvedSize, sizes, cycle],
  );

  return (
    <TileContext.Provider value={contextValue}>
      <motion.section
        layout
        transition={{ layout: tileTransition }}
        className={cn(
          tileVariants({ size: resolvedSize, outline, display, className }),
        )}
        ref={ref}
        style={{ containerType: "size", containerName: "tile" }}
        {...props}
      >
        <motion.div layout="position" className="h-full w-full overflow-hidden">
          {children}
        </motion.div>
      </motion.section>
    </TileContext.Provider>
  );
};

type TileTriggerProps = useRender.ComponentProps<"button"> & {
  className?: string;
};

export const TileTrigger: FC<TileTriggerProps> = ({
  className,
  render,
  ...props
}) => {
  const { sizeIndex, sizes, cycle } = useTileContext();
  const isExpanded = sizeIndex > 0;

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        type: "button",
        className,
        "aria-expanded": isExpanded,
        onClick: cycle,
      },
      props,
    ),
    render,
    state: {
      slot: "tile-trigger",
      expanded: isExpanded,
      sizeIndex,
      totalSizes: sizes.length,
    },
  });
};
