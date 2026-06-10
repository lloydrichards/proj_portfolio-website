import { Effect, Schema } from "effect";
import type { FC } from "react";
import { ExpandableTile } from "@/components/atom/expandable-tile";
import { LabCard } from "@/components/molecule/lab_card";
import { Mosaic } from "@/components/template/mosaic";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { Laboratory } from "@/services/Laboratory";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Lab } from "@/types/Lab";

export const metadata = createPageMetadata({
  title: "Labs",
  description: "Rag tag collection of experiments and prototypes.",
});

const LabOverviewPage: FC = async () => {
  const visibleLabs = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* Laboratory;
      return yield* svc.visible;
    }).pipe(Effect.andThen(Schema.encodeEffect(Lab.Array))),
  );

  return (
    <Mosaic render={<article />}>
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Lab Grid
      </h1>
      {visibleLabs.map((lab) => (
        <ExpandableTile key={lab.slug} sizes={["square-md", "box-md"]}>
          <LabCard lab={lab} expandable />
        </ExpandableTile>
      ))}
    </Mosaic>
  );
};

export default LabOverviewPage;
