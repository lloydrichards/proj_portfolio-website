"use client";

import { HexagonIcon, PenToolIcon, TerminalIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  PALETTES,
  type Palette,
  usePalette,
} from "@/providers/palette-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atom/tooltip";

const PALETTE_META: Record<
  Palette,
  { icon: typeof HexagonIcon; label: string }
> = {
  standard: { icon: HexagonIcon, label: "standard" },
  nerdy: { icon: TerminalIcon, label: "nerdy" },
  analog: { icon: PenToolIcon, label: "analog" },
};

export const PaletteToggle = ({ className }: { className?: string }) => {
  const { palette, setPalette } = usePalette();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cyclePalette = () => {
    const currentIndex = PALETTES.indexOf(palette);
    const nextIndex = (currentIndex + 1) % PALETTES.length;
    setPalette(PALETTES[nextIndex]);
  };

  // Use "standard" during SSR/hydration to match server render
  const activePalette = mounted ? palette : "standard";
  const nextPalette =
    PALETTES[(PALETTES.indexOf(activePalette) + 1) % PALETTES.length];

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            className={cn(
              "size-full p-0 inline-flex items-center justify-center rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
              className,
            )}
            onClick={() => cyclePalette()}
          />
        }
      >
        {PALETTES.map((p) => {
          const { icon: Icon } = PALETTE_META[p];
          const isActive = activePalette === p;
          return (
            <Icon
              key={p}
              className={cn(
                "size-[1.2rem] transition-all duration-300 absolute",
                isActive
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 rotate-90 opacity-0",
              )}
            />
          );
        })}
        <span className="sr-only">Toggle palette</span>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        Switch to {nextPalette} palette
      </TooltipContent>
    </Tooltip>
  );
};
