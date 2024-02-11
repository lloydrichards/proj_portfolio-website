import { cn } from "@/lib/utils";
import React, { FC, useRef } from "react";
import { useResizeObserver } from "usehooks-ts";

type ResponsiveChartProps = {
  render: (props: { height: number; width: number }) => React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export const ResponsiveChart: FC<ResponsiveChartProps> = ({
  render,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width = 0, height = 0 } = useResizeObserver({ ref });
  return (
    <div
      {...props}
      className={cn(className)}
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        ...props.style,
      }}
      ref={ref}
    >
      {render({ width, height })}
    </div>
  );
};
