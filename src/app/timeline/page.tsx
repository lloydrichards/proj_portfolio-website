import { Timeline } from "@/components/chart/timeline/Timeline";
import { ResponsiveWrapper } from "@/components/template/responsive_wrapper";
import { createPageMetadata } from "@/lib/seo";
import { DataApi } from "@/services/DataApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Occupation } from "@/types/Occupation";
import { Effect, Schema } from "effect";

export const metadata = createPageMetadata({
  title: "Timeline",
  description: "Chronological overview of my professional life.",
});

const TimelinePage: React.FC = async () => {
  const allOccupations = await RuntimeServer.runPromise(
    DataApi.allOccupations.pipe(
      Effect.andThen(Schema.encode(Occupation.Array)),
    ),
  );
  return (
    <main className="col-span-full py-6">
      <ResponsiveWrapper>
        <Timeline data={allOccupations} />
      </ResponsiveWrapper>
    </main>
  );
};

export default TimelinePage;
