"use client";
import { Timeline } from "@/components/charts/timeline/Timeline";
import { ResponsiveChart } from "@/components/charts/utils/ResponsiveChart";
import { Occupation } from "contentlayer/generated";
import { FC } from "react";

type Props = {
  occupations: Occupation[];
};
const TimelineDashboard: FC<Props> = ({ occupations }) => {
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

export default TimelineDashboard;
