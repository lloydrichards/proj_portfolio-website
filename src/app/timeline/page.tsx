import { Timeline } from "@/components/chart/timeline/Timeline";
import { ResponsiveWrapper } from "@/components/template/responsive_wrapper";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { getAllOccupations } from "@/services/get-all-occupations";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Timeline",
  description: "Chronological overview of my professional life.",
});

const TimelinePage: React.FC = async () => {
  const allOccupations = await getAllOccupations();
  const data = allOccupations.map((o) => o.frontmatter);
  return (
    <main className="col-span-full">
      <h1 className={typefaceHeading1()}>Welcome to the timeline page</h1>
      <ResponsiveWrapper>
        <Timeline data={data} />
      </ResponsiveWrapper>
    </main>
  );
};

export default TimelinePage;
