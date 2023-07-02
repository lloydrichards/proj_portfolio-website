"use client";
import { Timeline } from "@/components/charts/timeline/Timeline";
import { ResponsiveChart } from "@/components/charts/utils/ResponsiveChart";
import { Occupation } from "contentlayer/generated";
import { isAfter, subYears } from "date-fns";
import { FC } from "react";

type Props = {
  occupations: Occupation[];
};
const TimelineSection: FC<Props> = ({ occupations }) => {
  return (
    <section className="min-h-96 prose mt-8 w-full px-2">
      <h2 className="font-serif">CV Timeline</h2>
      <ResponsiveChart
        className="prose h-full w-full"
        render={({ width, height }) => (
          <Timeline
            data={occupations.filter((d) =>
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

export default TimelineSection;
