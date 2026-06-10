import { cva, type VariantProps } from "class-variance-authority";

export const tileVariants = cva("bg-card relative overflow-hidden rounded-md", {
  variants: {
    size: {
      unset: "",
      "box-xxs":
        "col-span-1 row-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1",
      "box-xs":
        "col-span-2 row-span-1 md:col-span-4 md:row-span-2 lg:col-span-6 lg:row-span-2",
      "box-sm":
        "col-span-2 row-span-2 md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4",
      "box-md":
        "col-span-8 row-span-4 md:col-span-8 md:row-span-4 lg:col-span-12 lg:row-span-6",
      "full-sm":
        "col-span-full row-span-3 md:col-span-full md:row-span-4 lg:col-span-full lg:row-span-4",
      "full-md":
        "col-span-full row-span-5 md:col-span-full md:row-span-6 lg:col-span-full lg:row-span-8",
      "full-lg":
        "col-span-full row-span-8 md:col-span-full md:row-span-10 lg:col-span-full lg:row-span-12",
      "tall-lg":
        "col-span-full row-span-12 md:col-span-8 md:row-span-12 lg:col-span-12 lg:row-span-16",
      "square-xxs":
        "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
      "square-xs":
        "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
      "square-sm":
        "col-span-2 row-span-2 md:col-span-4 md:row-span-4 lg:col-span-4 lg:row-span-4",
      "square-md":
        "col-span-4 row-span-4 md:col-span-4 md:row-span-4 lg:col-span-6 lg:row-span-6",
      "square-lg":
        "col-span-full row-span-8 md:col-span-8 md:row-span-8 lg:col-span-12 lg:row-span-12",
    },
    outline: { true: "border", false: "" },
    display: { grid: "grid grid-cols-subgrid grid-rows-subgrid", default: "" },
  },
  defaultVariants: { size: "square-xs", outline: true, display: "default" },
});

export type TileSize = NonNullable<VariantProps<typeof tileVariants>["size"]>;

export const tileTransition = {
  duration: 0.35,
  ease: [0.4, 0.2, 0, 1],
} as const;
