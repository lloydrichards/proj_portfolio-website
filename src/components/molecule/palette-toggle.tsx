"use client";

import { HexagonIcon, TerminalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { usePalette } from "@/providers/palette-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atom/tooltip";

export const PaletteToggle = ({ className }: { className?: string }) => {
  const { palette, setPalette } = usePalette();

  const togglePalette = () => {
    setPalette(palette === "standard" ? "nerdy" : "standard");
  };

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
            onClick={() => togglePalette()}
          />
        }
      >
        <HexagonIcon className="size-[1.2rem] scale-100 rotate-0 transition-all [[data-theme=nerdy]_&]:scale-0 [[data-theme=nerdy]_&]:-rotate-90" />
        <TerminalIcon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all [[data-theme=nerdy]_&]:scale-100 [[data-theme=nerdy]_&]:rotate-0" />
        <span className="sr-only">Toggle palette</span>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        Switch to {palette === "standard" ? "nerdy" : "standard"} palette
      </TooltipContent>
    </Tooltip>
  );
};
