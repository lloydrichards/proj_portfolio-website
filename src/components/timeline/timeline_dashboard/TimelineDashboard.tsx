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
    <section className="min-h-96 prose mt-8 w-full px-2 dark:prose-invert">
      <h2 className="font-serif">CV Timeline</h2>
      <ResponsiveChart
        className="prose h-full w-full dark:prose-invert"
        render={({ width, height }) => (
          <Timeline data={occupations} width={width} maxHeight={height} />
        )}
      />
    </section>
  );
};

export default TimelineDashboard;