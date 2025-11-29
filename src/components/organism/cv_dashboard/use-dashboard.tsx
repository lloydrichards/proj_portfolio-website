"use client";
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  use,
  useEffect,
  useState,
} from "react";
import {
  useResponsive,
  withResponsive,
} from "@/components/template/responsive_wrapper";

type DashboardState = {
  textBlock: [number | null, Dispatch<SetStateAction<number | null>>];
};

const DashboardContext = createContext<DashboardState | null>(null);

export const DashboardProvider = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const textBlock = useState<number | null>(null);

  return (
    <DashboardContext.Provider value={{ textBlock }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const TextBlocWrapper = withResponsive(
  ({ children }: { children?: ReactNode | ReactNode[] }) => {
    const { height } = useResponsive();
    const {
      textBlock: [_, set],
    } = useDashboard();

    useEffect(() => {
      if (height) {
        set(height);
      }
    }, [height, set]);

    return children;
  },
);

/**
 * A hook to get the current width and height of the wrapper.
 *
 * @returns {DashboardState}
 */
export const useDashboard = (): DashboardState => {
  const context = use(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
