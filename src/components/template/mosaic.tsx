"use client";

import { LayoutGroup } from "framer-motion";
import type { FC, ReactNode } from "react";

type MosaicProps = {
  children: ReactNode[];
  sidebar?: boolean;
  as?: "main" | "article";
};

export const Mosaic: FC<MosaicProps> = ({
  children,
  sidebar,
  as: Tag = "main",
}) => {
  return sidebar ? (
    <LayoutGroup>
      <aside className="mosaic-rows grid grid-cols-subgrid col-span-full md:col-span-2 lg:col-span-6">
        {children[0]}
      </aside>
      <Tag className="col-span-full grid min-h-dvh grid-flow-dense auto-rows-min grid-cols-subgrid md:col-[3/-1] lg:col-[7/-1]">
        {...children.slice(1)}
      </Tag>
    </LayoutGroup>
  ) : (
    <LayoutGroup>
      <Tag className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
        {children}
      </Tag>
    </LayoutGroup>
  );
};
