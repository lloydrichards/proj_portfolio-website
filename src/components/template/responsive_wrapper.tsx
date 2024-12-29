"use client";
import {
  type ReactNode,
  type ComponentType,
  type FC,
  createContext,
  use,
  useLayoutEffect,
} from "react";

import { useMeasure } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

type ResponsiveState = {
  width: number;
  height: number;
};

const ResponsiveContext = createContext<ResponsiveState | null>(null);

export const ResponsiveWrapper = ({
  children,
  className,
  onHeightChange,
}: {
  children?: ReactNode;
  className?: string;
  onHeightChange?: (height: number) => void;
}) => {
  const [ref, { width, height }] = useMeasure();
  useLayoutEffect(() => {
    if (onHeightChange && height) {
      onHeightChange(height);
    }
  }, [height, onHeightChange]);
  return (
    <ResponsiveContext.Provider
      value={{ width: width ?? 0, height: height ?? 0 }}
    >
      <div ref={ref} className={cn("size-full", className)}>
        {children}
      </div>
    </ResponsiveContext.Provider>
  );
};
/**
 * A hook to get the current width and height of the wrapper.
 *
 * @returns {ResponsiveState}
 */
export const useResponsive = (): ResponsiveState => {
  const context = use(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveWrapper");
  }
  return context;
};

/**
 * A Higher Order Component to wrap a component with the ResponsiveWrapper.
 *
 * @param children
 * @returns children
 */
export const withResponsive = <P extends object>(
  OriginalComponent: ComponentType<P>,
): React.FC<P> => {
  const WithInteraction: FC<P> = (props: P) => {
    return (
      <ResponsiveWrapper>
        <OriginalComponent {...props} />
      </ResponsiveWrapper>
    );
  };

  return WithInteraction;
};
