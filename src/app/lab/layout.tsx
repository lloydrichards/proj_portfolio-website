import { FC, ReactNode } from "react";
import { LabList } from "./lab_list";

const LabLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  return (
    <main className="flex gap-4">
      <LabList />
      <article className="flex flex-col">{children}</article>
    </main>
  );
};

export default LabLayout;
