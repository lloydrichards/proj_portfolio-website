import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { LabApi } from "@/services/LabApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Lab } from "@/types/Lab";
import { Effect, Schema } from "effect";
import { FC } from "react";

export const metadata = createPageMetadata({
  title: "Labs",
  description: "Rag tag collection of experiments and prototypes.",
});

const LabOverviewPage: FC = async () => {
  const allLabs = await RuntimeServer.runPromise(
    LabApi.all.pipe(Effect.andThen(Schema.encode(Lab.Array))),
  );

  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Lab Grid
      </h1>
      {allLabs.map((lab) => (
        <Tile key={lab.slug} size={lab.isFeatured ? "box-md" : "square-md"}>
          <LabCard lab={lab} asLink />
        </Tile>
      ))}
    </article>
  );
};

export default LabOverviewPage;
