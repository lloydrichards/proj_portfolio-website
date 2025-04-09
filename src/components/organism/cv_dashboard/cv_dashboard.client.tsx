"use client";

import { Timeline } from "@/components/chart/timeline/timeline";
import { withResponsive } from "@/components/template/responsive_wrapper";
import { Occupation } from "@/types/Occupation";
import { FC } from "react";
import { useDashboard } from "./use-dashboard";

interface CVDashboardClientProps {
  data: typeof Occupation.Array.Encoded;
}
export const CVDashboardClient: FC<CVDashboardClientProps> = withResponsive(
  ({ data }) => {
    const {
      textBlock: [textBlockHeight],
    } = useDashboard();

    const parsedData = data.map((d) => ({
      start_date: new Date(d.start_date),
      end_date: d.end_date ? new Date(d.end_date) : null,
      category: d.category,
    }));

    return (
      <Timeline
        data={parsedData}
        textBlockHeight={(textBlockHeight || 400) + 9}
      />
    );
  },
);
