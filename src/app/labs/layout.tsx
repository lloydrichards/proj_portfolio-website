import { LabContent } from "@/app/labs/lab-content";
import { LabInfoCard } from "@/app/labs/lab-info-card";
import { Mosaic } from "@/components/template/mosaic";
import { LabApi } from "@/services/LabApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Lab } from "@/types/Lab";
import { Effect, Schema } from "effect";
import { FC, ReactNode } from "react";
import { LabNavigation } from "./lab_navigation";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allLabs = await RuntimeServer.runPromise(
    LabApi.pipe(
      Effect.andThen((a) => a.all),
      Effect.andThen(Schema.encode(Lab.Array)),
    ),
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
