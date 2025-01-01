import { FC, ReactNode } from "react";
import { LabNavigation } from "./lab_navigation";
import { getAllLabs } from "@/services/get-all-labs";
import { LabInfoCard } from "@/app/lab/lab-info-card";
import { LabContent } from "@/app/lab/lab-content";
import { Mosaic } from "@/components/template/mosaic";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await getAllLabs();
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
