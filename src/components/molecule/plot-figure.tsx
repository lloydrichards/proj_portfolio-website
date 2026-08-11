"use client";

import * as Plot from "@observablehq/plot";
import type { ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface FigurePlotProps {
  options: Plot.PlotOptions;
  ariaLabel: string;
  className?: string;
  minHeight?: number;
  minWidth?: number;
}

export function FigureCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border bg-card p-4 text-card-foreground shadow-xs md:p-6">
      <figcaption className="mb-5 max-w-3xl">
        <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
        <p className="mt-1 text-muted-foreground text-sm">{description}</p>
      </figcaption>
      {children}
    </figure>
  );
}

export function FigurePlot({
  options,
  ariaLabel,
  className,
  minHeight = 320,
  minWidth = 0,
}: FigurePlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const scrollHintId = useId();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      const nextWidth = Math.floor(container.getBoundingClientRect().width);
      if (nextWidth > 0) setWidth(nextWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || width === 0) return;

    const baseStyle = {
      background: "transparent",
      color: "var(--foreground)",
      fontFamily: "inherit",
      fontSize: "12px",
      maxWidth: width < 640 ? "none" : "100%",
    };
    const style =
      typeof options.style === "string"
        ? `${Object.entries(baseStyle)
            .map(([property, value]) => `${property}: ${value}`)
            .join("; ")}; ${options.style}`
        : { ...baseStyle, ...(options.style ?? {}) };
    const plot = Plot.plot({
      ...options,
      width: width < 640 ? Math.max(width, minWidth) : width,
      style,
    });
    plot.style.setProperty("--plot-background", "var(--popover)");
    for (const svg of plot.querySelectorAll("svg")) {
      svg.style.setProperty("--plot-background", "var(--popover)");
    }
    plot.setAttribute("role", "img");
    plot.setAttribute("aria-label", ariaLabel);
    container.replaceChildren(plot);

    return () => plot.remove();
  }, [ariaLabel, minWidth, options, width]);

  return (
    <div
      className={cn("not-prose min-w-0 max-w-full overflow-hidden", className)}
    >
      {minWidth > 0 ? (
        <p
          id={scrollHintId}
          className="mb-2 text-muted-foreground text-xs sm:hidden"
        >
          Scroll horizontally to explore the complete chart.
        </p>
      ) : null}
      <div
        ref={containerRef}
        aria-describedby={minWidth > 0 ? scrollHintId : undefined}
        className="w-full max-w-full overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        style={{ contain: "inline-size", minHeight }}
        tabIndex={minWidth > 0 ? 0 : undefined}
      />
    </div>
  );
}
