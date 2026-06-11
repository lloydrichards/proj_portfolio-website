"use client";

import { Loader2Icon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  PALETTES,
  type Palette,
  usePalette,
} from "@/providers/palette-provider";
import { typefaceMeta } from "../tokens/typeface";

const PALETTE_LABELS: Record<Palette, string> = {
  standard: "Standard",
  nerdy: "Nerdy",
  analog: "Analog",
};

/**
 * A mosaic tile showing all 6 theme combinations (3 palettes x 2 modes)
 * with direct selection. Each cell is a miniature swatch previewing the
 * palette's background, card, primary, and secondary colors.
 */
export const ThemeSwitcherTile = ({ className }: { className?: string }) => {
  const { palette, setPalette } = usePalette();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center",
          className,
        )}
      >
        <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const modes = ["light", "dark"] as const;

  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-2 pt-1.5 pb-0.5 md:px-3 md:pt-2 md:pb-1">
        <p
          className={typefaceMeta(
            "text-muted-foreground text-[10px] uppercase md:text-xs",
          )}
        >
          Theme
        </p>
      </div>

      {/* Grid: 3 columns (palettes) x 2 rows (modes) */}
      <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-1 p-1.5 md:gap-1.5 md:p-2">
        {modes.map((mode) =>
          PALETTES.map((p) => {
            const isActive = palette === p && theme === mode;
            return (
              <button
                key={`${p}-${mode}`}
                type="button"
                onClick={() => {
                  setPalette(p);
                  setTheme(mode);
                }}
                aria-label={`${PALETTE_LABELS[p]} ${mode}`}
                aria-pressed={isActive}
                className={cn(
                  "group relative flex flex-col items-center justify-center gap-0.5 rounded-sm border transition-colors duration-150 md:gap-1",
                  "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                  isActive
                    ? "border-primary bg-accent"
                    : "border-border/50 hover:border-border hover:bg-muted/50",
                )}
              >
                {/* Swatch: 4 dots representing bg, card, primary, secondary */}
                <SwatchPreview palette={p} mode={mode} />
                {/* Label (only on first row) */}
                {mode === "light" && (
                  <span
                    className={typefaceMeta(
                      "text-muted-foreground hidden text-[10px] leading-none md:block",
                    )}
                  >
                    {PALETTE_LABELS[p]}
                  </span>
                )}
              </button>
            );
          }),
        )}
      </div>

      {/* Mode indicators */}
      <div className="grid grid-cols-2 gap-1 px-1.5 pb-1.5 md:gap-1.5 md:px-2 md:pb-2">
        {modes.map((mode) => (
          <div
            key={mode}
            className="flex items-center justify-center gap-1 py-0.5"
          >
            {mode === "light" ? (
              <SunIcon className="size-2.5 text-muted-foreground md:size-3" />
            ) : (
              <MoonIcon className="size-2.5 text-muted-foreground md:size-3" />
            )}
            <span
              className={typefaceMeta(
                "text-muted-foreground text-[9px] md:text-[10px]",
              )}
            >
              {mode}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Renders a 2x2 dot grid previewing a palette's characteristic colors.
 * Uses hardcoded representative values from each theme's CSS to give
 * an honest preview without needing to parse computed styles.
 */
function SwatchPreview({
  palette,
  mode,
}: {
  palette: Palette;
  mode: "light" | "dark";
}) {
  const colors = SWATCH_COLORS[palette][mode];
  return (
    <div className="grid grid-cols-2 gap-0.5">
      {colors.map((color, i) => (
        <div
          key={i}
          className={cn(
            "size-2.5 rounded-full md:size-3",
            mode === "light" && i < 2 && "ring-1 ring-border/30",
          )}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

/**
 * Representative colors for each palette + mode combination.
 * Order: [background, card, primary, secondary]
 * Pulled directly from the CSS theme files.
 */
const SWATCH_COLORS: Record<
  Palette,
  Record<"light" | "dark", [string, string, string, string]>
> = {
  standard: {
    light: [
      "hsl(210 40% 98%)", // bg: mono-050
      "hsl(210 40% 96.1%)", // card: mono-100
      "hsl(162.9 93.5% 24.3%)", // primary-700
      "hsl(37.7 92.1% 50.2%)", // secondary-500
    ],
    dark: [
      "hsl(222.2 47.4% 11.2%)", // bg: mono-900
      "hsl(217.2 32.6% 17.5%)", // card: mono-800
      "hsl(160.1 84.1% 39.4%)", // primary-500
      "hsl(37.7 92.1% 50.2%)", // secondary-500
    ],
  },
  nerdy: {
    light: [
      "hsl(80 20% 97%)", // bg: mono-050
      "hsl(75 15% 93%)", // card: mono-100
      "hsl(142 60% 30%)", // primary-600
      "hsl(280 40% 48%)", // secondary-500
    ],
    dark: [
      "hsl(110 22% 5%)", // bg: mono-950
      "hsl(105 18% 9%)", // card: mono-900
      "hsl(138 42% 48%)", // primary-400
      "hsl(278 35% 58%)", // secondary-400
    ],
  },
  analog: {
    light: [
      "hsl(40 30% 97%)", // bg: mono-050
      "hsl(38 28% 93%)", // card: mono-100
      "hsl(6 60% 36%)", // primary-600
      "hsl(220 38% 42%)", // secondary-500
    ],
    dark: [
      "hsl(22 26% 11%)", // bg: mono-900
      "hsl(24 22% 16%)", // card: mono-800
      "hsl(10 52% 52%)", // primary-400
      "hsl(222 30% 52%)", // secondary-400
    ],
  },
};
