"use client";
import { allOccupations } from "contentlayer/generated";
import dynamic from "next/dynamic";

const TimelineDashboard = dynamic(
  () => import("@/components/timeline/timeline_dashboard/TimelineDashboard"),
  {
    ssr: false,
  },
);

const TimelinePage = () => {
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8">
      <TimelineDashboard occupations={allOccupations} />
    </main>
  );
};

export default TimelinePage;
