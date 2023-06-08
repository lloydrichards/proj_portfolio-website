import React, { FC } from "react";
import { useElementSize } from "usehooks-ts";

type ResponsiveChartProps = {
  children: (props: { height: number; width: number }) => React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export const ResponsiveChart: FC<ResponsiveChartProps> = ({
  children,
  ...props
}) => {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();
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
