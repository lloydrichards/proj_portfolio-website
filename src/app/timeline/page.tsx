import { TimelineDashboard } from "@/components/organism/timeline_dashboard/timeline_dashboard";
import { allOccupations } from "@generated";

const TimelinePage = () => {
  return (
    <main className="mb-8 flex min-h-screen flex-col items-center gap-8">
      <TimelineDashboard occupations={allOccupations} />
    </main>
  );
};

export default TimelinePage;
