"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/atom/button";
import { TileTrigger } from "@/components/atom/expandable-tile";

type TileExpandButtonProps = {
  className?: string;
};

export const TileExpandButton: FC<TileExpandButtonProps> = ({ className }) => {
  return (
    <TileTrigger
      className={className}
      render={<Button variant="ghost" size="icon-sm" />}
    >
      <span className="group-aria-expanded/button:hidden">
        <Maximize2 />
      </span>
      <span className="hidden group-aria-expanded/button:inline">
        <Minimize2 />
      </span>
    </TileTrigger>
  );
};
