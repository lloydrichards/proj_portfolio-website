import { FC, ReactNode } from "react";

export const Mosaic: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      {children}
    </main>
  );
};
