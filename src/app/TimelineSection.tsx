"use client";
import { Timeline } from "@/components/charts/timeline/Timeline";
import { ResponsiveChart } from "@/components/charts/utils/ResponsiveChart";
import { allOccupations } from "contentlayer/generated";
import { isAfter, subYears } from "date-fns";

export const TimelineSection = () => {
  return (
    <section className="min-h-96 prose mt-8 w-full px-2">
      <h2 className="font-serif">CV Timeline</h2>
      <ResponsiveChart
        className="prose h-full w-full"
        render={({ width, height }) => (
          <Timeline
            data={allOccupations.filter((d) =>
              isAfter(new Date(d.start_date), subYears(new Date(), 5))
            )}
            width={width}
            maxHeight={height}
          />
        )}
      />
    </section>
  );
};
