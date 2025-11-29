import type { FC, ReactNode } from "react";

export const Mosaic: FC<{ children: ReactNode[]; sidebar?: boolean }> = ({
  children,
  sidebar,
}) => {
  return sidebar ? (
    <>
      <aside className="mosaic-rows grid grid-cols-subgrid md:col-span-2 lg:col-span-6">
        {children[0]}
      </aside>
      <main className="col-span-full grid min-h-dvh grid-flow-dense auto-rows-min grid-cols-subgrid md:col-[3/-1] lg:col-[7/-1]">
        {...children.slice(1)}
      </main>
    </>
  ) : (
    <main className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      {children}
    </main>
  );
};
