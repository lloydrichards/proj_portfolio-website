import { Timeline } from "@/components/chart/timeline/Timeline";
import { ResponsiveWrapper } from "@/components/template/responsive_wrapper";
import { createPageMetadata } from "@/lib/seo";
import { getAllOccupations } from "@/services/api/get-all-occupations";

export const metadata = createPageMetadata({
  title: "Timeline",
  description: "Chronological overview of my professional life.",
});

const TimelinePage: React.FC = async () => {
  const allOccupations = await getAllOccupations();
  return (
    <main className="col-span-full py-6">
      <ResponsiveWrapper>
        <Timeline data={allOccupations} />
      </ResponsiveWrapper>
    </main>
  );
};

export default TimelinePage;
