import { Tile } from "@/components/atom/tile";
import { Timeline } from "@/components/chart/timeline/timeline";
import { OccupationCard } from "@/components/molecule/occupation_card";
import { ResponsiveWrapper } from "@/components/template/responsive_wrapper";
import { typefaceHeading1 } from "@/components/tokens/typeface";
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
    <main className="contents">
      <Tile size="unset" className="col-span-full">
        <h1 className={typefaceHeading1("p-2")}>Timeline</h1>
      </Tile>
      <aside className="col-span-1 grid grid-cols-subgrid md:col-span-2 lg:col-span-4">
        <Tile className="col-span-full h-full" size="unset">
          <ResponsiveWrapper>
            <Timeline data={allOccupations} />
          </ResponsiveWrapper>
        </Tile>
      </aside>
      <section className="mosaic-rows col-[2/-1] grid min-h-dvh grid-cols-subgrid md:col-[3/-1] lg:col-[5/-1]">
        {allOccupations.map((o) => (
          <Tile
            className="col-span-full row-span-3 md:row-span-5 lg:row-span-6 xl:row-span-5"
            size="unset"
            key={o.id}
          >
            <OccupationCard data={o} />
          </Tile>
        ))}
      </section>
    </main>
  );
};

export default TimelinePage;
