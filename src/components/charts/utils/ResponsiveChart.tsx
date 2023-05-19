import { useSize } from "@/hooks/use-size";
import React, { FC } from "react";

type ResponsiveChartProps = {
  children: (props: { height: number; width: number }) => React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export const ResponsiveChart: FC<ResponsiveChartProps> = ({
  children,
  ...props
}) => {
  const [ref, { width, height }] = useSize<HTMLDivElement>();
  return (
    <div
      {...props}
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        ...props.style,
      }}
      ref={ref}
    >
      {children({ width, height })}
    </div>
  );
};
