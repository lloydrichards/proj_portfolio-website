import { LabContent } from "@/app/labs/lab-content";
import { LabInfoCard } from "@/app/labs/lab-info-card";
import { Mosaic } from "@/components/template/mosaic";
import { api } from "@/services/api";
import { FC, ReactNode } from "react";
import { LabNavigation } from "./lab_navigation";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allLabs = await api.labs.fetchAllLabs();
  return (
    <Mosaic sidebar>
      <LabNavigation labs={allLabs} />
      <LabInfoCard labs={allLabs} />
      <LabContent labs={allLabs}>{children}</LabContent>
    </Mosaic>
  );
};

export default LabLayout;
