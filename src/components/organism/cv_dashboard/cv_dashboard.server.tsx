import { Tile } from "@/components/atom/tile";
import { OccupationCard } from "@/components/molecule/occupation_card";
import { Dataset } from "@/services/Dataset/Dataset";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Occupation } from "@/types/Occupation";
import { Effect, Schema } from "effect";
import { CVDashboardClient } from "./cv_dashboard.client";
import { DashboardProvider, TextBlocWrapper } from "./use-dashboard";

export const CVDashboard = async () => {
  const allOccupations = await RuntimeServer.runPromise(
    Dataset.allOccupations().pipe(
      Effect.andThen(Schema.encode(Occupation.Array)),
    ),
  );
  return (
    <DashboardProvider>
      <aside className="col-span-1 grid grid-cols-subgrid md:col-span-2 lg:col-span-4">
        <Tile className="col-span-full h-full" size="unset">
          <CVDashboardClient data={allOccupations} />
        </Tile>
      </aside>
      <section className="mosaic-rows col-[2/-1] grid min-h-dvh grid-cols-subgrid md:col-[3/-1] lg:col-[5/-1]">
        {allOccupations.map((o) => (
          <Tile
            className="col-span-full row-span-3 md:row-span-5 lg:row-span-6 xl:row-span-5"
            size="unset"
            key={o.id}
          >
            <TextBlocWrapper>
              <OccupationCard data={o} />
            </TextBlocWrapper>
          </Tile>
        ))}
      </section>
    </DashboardProvider>
  );
};
