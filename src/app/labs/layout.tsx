import { LabContent } from "@/app/labs/lab-content";
import { LabInfoCard } from "@/app/labs/lab-info-card";
import { Mosaic } from "@/components/template/mosaic";
import { getAllLabs } from "@/services/api/get-all-labs";
import { Effect } from "effect";
import { FC, ReactNode } from "react";
import { LabNavigation } from "./lab_navigation";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await Effect.runPromise(getAllLabs);
  const allLabs = content.map(({ frontmatter }) => frontmatter);
  return (
    <Mosaic sidebar>
      <LabNavigation labs={allLabs} />
      <LabInfoCard labs={allLabs} />
      <LabContent labs={allLabs}>{children}</LabContent>
    </Mosaic>
  );
};

export default LabLayout;
