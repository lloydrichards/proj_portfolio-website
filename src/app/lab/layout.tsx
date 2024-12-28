import { FC, ReactNode } from "react";
import { LabNavigation } from "@/components/organism/lab_navigation";
import { getAllLabs } from "@/services/get-all-labs";
import { LabInfoCard } from "@/components/molecule/lab-info-card";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await getAllLabs();
  const allLabs = content.map(({ frontmatter }) => frontmatter);
  return (
    <main className="col-span-full grid grid-cols-subgrid">
      <LabNavigation labs={allLabs} className="col-span-3" />
      <article className="col-span-8 grid grid-cols-subgrid *:col-span-full">
        <LabInfoCard labs={allLabs} />
        {children}
      </article>
    </main>
  );
};

export default LabLayout;
