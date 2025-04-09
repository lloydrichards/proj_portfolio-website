import { Tile } from "@/components/atom/tile";
import { CVDashboard } from "@/components/organism/cv_dashboard/cv_dashboard.server";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Timeline",
  description: "Chronological overview of my professional life.",
});

const TimelinePage: React.FC = async () => {
  return (
    <main className="contents">
      <Tile size="unset" className="col-span-full">
        <h1 className={typefaceHeading1("p-2")}>Timeline</h1>
      </Tile>
      <CVDashboard />
    </main>
  );
};

export default TimelinePage;
