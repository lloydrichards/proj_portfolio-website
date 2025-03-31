import { Tile } from "@/components/atom/tile";
import { OccupationCard } from "@/components/chart/timeline/internal/OccupationCard";
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
    <>
      <aside className="col-span-1 grid grid-cols-subgrid md:col-span-2 lg:col-span-6">
        <Tile className="col-span-full h-full" size="unset" />
      </aside>
      <main className="mosaic-rows col-[2/-1] grid min-h-dvh grid-cols-subgrid md:col-[3/-1] lg:col-[7/-1]">
        {allOccupations.map((o) => (
          <Tile className="col-span-full row-span-5" size="unset" key={o.id}>
            <OccupationCard data={o} />
          </Tile>
        ))}
        {/* <ResponsiveWrapper>
      <Timeline data={allOccupations} />
      </ResponsiveWrapper> */}
      </main>
    </>
  );
};

export default TimelinePage;
