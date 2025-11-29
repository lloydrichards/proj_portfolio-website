import { Effect, Schema } from "effect";
import type { FC, ReactNode } from "react";
import { LabContent } from "@/app/labs/lab-content";
import { LabInfoCard } from "@/app/labs/lab-info-card";
import { Mosaic } from "@/components/template/mosaic";
import { Laboratory } from "@/services/Laboratory";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Lab } from "@/types/Lab";
import { LabNavigation } from "./lab_navigation";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allLabs = await RuntimeServer.runPromise(
    Laboratory.all.pipe(Effect.andThen(Schema.encode(Lab.Array))),
  );
  return (
    <Mosaic sidebar>
      <LabNavigation labs={allLabs} />
      <LabInfoCard labs={allLabs} />
      <LabContent labs={allLabs}>{children}</LabContent>
    </Mosaic>
  );
};

export default LabLayout;
