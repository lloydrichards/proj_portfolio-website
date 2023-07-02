"use client";
import { Timeline } from "@/components/charts/timeline/Timeline";
import { ResponsiveChart } from "@/components/charts/utils/ResponsiveChart";
import { allOccupations } from "contentlayer/generated";

const TimelinePage = () => {
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8">
      <h1>Timeline Page</h1>
      <ResponsiveChart
        className="prose h-full w-full"
        render={({ width, height }) => (
          <Timeline data={allOccupations} width={width} maxHeight={height} />
        )}
      />
    </main>
  );
};

export default TimelinePage;
