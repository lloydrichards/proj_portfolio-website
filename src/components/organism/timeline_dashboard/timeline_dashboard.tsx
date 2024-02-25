"use client";
import { Timeline } from "@/components/chart/timeline/Timeline";
import { ResponsiveChart } from "@/components/chart/utils/ResponsiveChart";
import { Occupation } from "@generated";
import { FC } from "react";

type TimelineDashboardProps = {
  occupations: Occupation[];
};

export const TimelineDashboard: FC<TimelineDashboardProps> = ({
  occupations,
}) => {
  return (
    <section className="prose mt-8 min-h-96 w-full px-2 dark:prose-invert">
      <h2 className="font-serif">CV Timeline</h2>
      <ResponsiveChart
        className="prose size-full dark:prose-invert"
        render={({ width, height }) => (
          <Timeline data={occupations} width={width} maxHeight={height} />
        )}
      />
    </section>
  );
};
