import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tileVariants = cva("bg-card relative overflow-hidden rounded-md", {
  variants: {
    size: {
      unset: "",
      "box-xxs":
        "col-span-1 row-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1",
      "box-xs": "col-span-2 row-span-1 md:col-span-4 md:row-span-2",
      // "box-sm": "col-span-8 row-span-4 lg:col-span-10 lg:row-span-5",
      "box-md":
        "col-span-8 row-span-4 md:col-span-10 md:row-span-4 lg:col-span-12 lg:row-span-6",
      "square-xxs": "col-span-1 row-span-1",
      "square-xs": "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
      // "square-sm":
      //   "col-span-2 row-span-2 md:col-span-3 md:row-span-3 lg:col-span-4 lg:row-span-4",
      "square-md":
        "col-span-4 row-span-4 md:col-span-4 md:row-span-4 lg:col-span-6 lg:row-span-6",
    },
    outline: {
      true: "border",
      false: "",
    },
    display: {
      grid: "grid grid-cols-subgrid grid-rows-subgrid",
      container: "@container",
    },
  },
  defaultVariants: {
    size: "square-xs",
    outline: true,
    display: "container",
  },
});

export interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tileVariants> {
  asChild?: boolean;
}

const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ className, outline, display, size, children, ...props }, ref) => {
    return (
      <section
        className={cn(tileVariants({ size, outline, display, className }))}
        ref={ref}
        {...props}
      >
        {/* <span className="text-destructive absolute top-0 right-2 z-20">
          {size}
        </span> */}
        {children}
      </section>
    );
  },
);
Tile.displayName = "Tile";

export { Tile, tileVariants };
