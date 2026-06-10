"use client";
import { max } from "d3";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atom/tooltip";
import { typefaceMeta } from "@/components/tokens/typeface";
import { AesLayer } from "./aes_layer";
import { GeomLayer } from "./geom_layer";
import { useStackedBarData } from "./use-stacked-bar-data";

export interface StackedData {
  stack: string;
  series: string;
  value: number;
}

interface StackedBarChartProps {
  height?: number;
  width?: number;
  margins?: { top: number; right: number; bottom: number; left: number };
  title?: string;
  data: StackedData[];
  seriesDomain?: string[];
}

type SegmentPos = { stackIdx: number; segIdx: number };

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  margins = { top: 10, right: 10, bottom: 48, left: 10 },
  height = 200,
  width = 300,
  title,
  seriesDomain,
}) => {
  const innerWidth = width - margins.left - margins.right;
  const innerHeight = height - margins.top - margins.bottom;
  const containerRef = useRef<HTMLElement>(null);

  const { cScale, series, xScale, yScale } = useStackedBarData(data, {
    innerHeight,
    innerWidth,
    cDomain: seriesDomain,
  });

  // Build a flat grid of navigable segment keys: [stackIdx][segIdx]
  const segmentGrid = useMemo(() => {
    const stacks = xScale.domain();
    const grid: string[][] = [];

    for (const stackName of stacks) {
      const col: string[] = [];
      for (const s of series) {
        const d = s.find((item) => item.data.stack === stackName);
        if (!d) continue;
        const segmentHeight = max([0, yScale(d[0]) - yScale(d[1])]);
        if (!segmentHeight) continue;
        col.push(`${s.key}-${stackName}`);
      }
      if (col.length > 0) {
        grid.push(col);
      }
    }
    return grid;
  }, [series, xScale, yScale]);

  // Navigation state
  const [activePos, setActivePos] = useState<SegmentPos | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const lastPosRef = useRef<SegmentPos | null>(null);

  const getSegmentEl = useCallback(
    (pos: SegmentPos): HTMLButtonElement | null => {
      const key = segmentGrid[pos.stackIdx]?.[pos.segIdx];
      if (!key) return null;
      return (
        containerRef.current?.querySelector<HTMLButtonElement>(
          `[data-seg-key="${key}"]`,
        ) ?? null
      );
    },
    [segmentGrid],
  );

  const focusSegment = useCallback(
    (pos: SegmentPos) => {
      const el = getSegmentEl(pos);
      if (el) {
        el.focus();
      }
      setActivePos(pos);
      lastPosRef.current = pos;
      setIsNavigating(true);
    },
    [getSegmentEl],
  );

  const getStartPos = useCallback((): SegmentPos => {
    const last = lastPosRef.current ?? { stackIdx: 0, segIdx: 0 };
    return {
      stackIdx: Math.min(last.stackIdx, segmentGrid.length - 1),
      segIdx: Math.min(
        last.segIdx,
        (segmentGrid[Math.min(last.stackIdx, segmentGrid.length - 1)]?.length ??
          1) - 1,
      ),
    };
  }, [segmentGrid]);

  const handleContainerFocus = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      if (e.target !== containerRef.current) return;
      if (lastPosRef.current != null && segmentGrid.length > 0) {
        setActivePos(getStartPos());
        setIsNavigating(false);
      }
    },
    [segmentGrid, getStartPos],
  );

  const handleContainerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!segmentGrid.length) return;

      switch (e.key) {
        case "ArrowRight": {
          e.preventDefault();
          if (!isNavigating) {
            focusSegment(getStartPos());
          } else {
            const next = (activePos?.stackIdx ?? -1) + 1;
            if (next < segmentGrid.length) {
              const segIdx = Math.min(
                activePos?.segIdx ?? 0,
                (segmentGrid[next]?.length ?? 1) - 1,
              );
              focusSegment({ stackIdx: next, segIdx });
            }
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          if (!isNavigating) {
            focusSegment(getStartPos());
          } else {
            const prev = (activePos?.stackIdx ?? 1) - 1;
            if (prev >= 0) {
              const segIdx = Math.min(
                activePos?.segIdx ?? 0,
                (segmentGrid[prev]?.length ?? 1) - 1,
              );
              focusSegment({ stackIdx: prev, segIdx });
            }
          }
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          if (!isNavigating) {
            focusSegment(getStartPos());
          } else {
            const stackIdx = activePos?.stackIdx ?? 0;
            const prev = (activePos?.segIdx ?? 1) - 1;
            if (prev >= 0) {
              focusSegment({ stackIdx, segIdx: prev });
            }
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (!isNavigating) {
            focusSegment(getStartPos());
          } else {
            const stackIdx = activePos?.stackIdx ?? 0;
            const col = segmentGrid[stackIdx];
            const next = (activePos?.segIdx ?? -1) + 1;
            if (col && next < col.length) {
              focusSegment({ stackIdx, segIdx: next });
            }
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          setActivePos(null);
          setIsNavigating(false);
          containerRef.current?.focus();
          break;
        }
        default:
          break;
      }
    },
    [segmentGrid, isNavigating, activePos, focusSegment, getStartPos],
  );

  const handleContainerBlur = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setIsNavigating(false);
        setActivePos(null);
      }
    },
    [],
  );

  if (height <= 0 || width <= 0) {
    return null;
  }

  const chartWidth = max([0, width]);
  const chartHeight = max([0, height]);

  return (
    <figure
      ref={containerRef}
      className="relative m-0 outline-none transition-[width,height] duration-350 ease-out"
      style={{ width: chartWidth, height: chartHeight }}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: Composite widget pattern - single tab stop for keyboard navigation
      tabIndex={0}
      aria-roledescription="interactive chart"
      aria-label={`${title ?? "Stacked bar chart"}. Use arrow keys to explore bars, Tab to skip.`}
      onKeyDown={handleContainerKeyDown}
      onFocus={handleContainerFocus}
      onBlur={handleContainerBlur}
    >
      <svg
        width={chartWidth}
        height={chartHeight}
        overflow="visible"
        aria-hidden="true"
        className="transition-[width,height] duration-350 ease-out"
      >
        <g transform={`translate(${margins.left},${margins.top})`}>
          {/* Title */}
          {title && (
            <text
              x={innerWidth}
              y={-margins.top / 2}
              textAnchor="end"
              dominantBaseline="middle"
              className={typefaceMeta("fill-muted-foreground font-medium")}
            >
              {title}
            </text>
          )}

          <AesLayer xScale={xScale} yScale={yScale} height={innerHeight} />
          <GeomLayer
            xScale={xScale}
            yScale={yScale}
            cScale={cScale}
            series={series}
          />
        </g>
      </svg>
      {series.map((s) =>
        s.map((d) => {
          const xValue = xScale(d.data.stack);
          if (xValue === undefined) {
            return null;
          }
          const segmentHeight = max([0, yScale(d[0]) - yScale(d[1])]);
          if (!segmentHeight) {
            return null;
          }
          const left = margins.left + xValue;
          const top = margins.top + yScale(d[1]);
          const widthValue = xScale.bandwidth();
          const value = d.data[s.key] as number;
          const label = `${s.key}: ${value}hrs`;
          const segKey = `${s.key}-${d.data.stack}`;

          return (
            <Tooltip key={`tooltip-${segKey}`}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    data-seg-key={segKey}
                    tabIndex={-1}
                    aria-label={label}
                    className="absolute rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    style={{
                      left,
                      top,
                      width: widthValue,
                      height: segmentHeight,
                    }}
                  />
                }
              ></TooltipTrigger>
              <TooltipContent className="pointer-events-none">
                <span className="text-sm font-medium">{label}</span>
              </TooltipContent>
            </Tooltip>
          );
        }),
      )}
    </figure>
  );
};
