"use client";

import {
  extent,
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  scaleTime,
  timeFormat,
} from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/atom/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atom/tooltip";
import { cn } from "@/lib/utils";
import type { GitHubCommit } from "@/services/GitHub";

type BeeSwarmChartProps = {
  commits: GitHubCommit[];
  tagsBySha: Record<string, string[]>;
  height?: number;
  className?: string;
};

type BeeSwarmNode = GitHubCommit & {
  dateValue: Date;
  type: string;
  tags: string[];
  x?: number;
  y?: number;
};

const formatCommitMessage = (message: string) =>
  message.length > 64 ? `${message.slice(0, 61)}...` : message;

const formatCommitDate = (date?: string) => {
  if (!date) {
    return "Unknown date";
  }
  const parsed = new Date(date);
  if (Number.isNaN(parsed.valueOf())) {
    return "Unknown date";
  }
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
};

const formatPercent = (value: number) => `${Number(value.toFixed(4))}%`;

const axisTickFormat = timeFormat("%b %Y");

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const mulberry32 = (seed: number) => {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const COMMIT_TYPE_STYLES: Record<string, { label: string; className: string }> =
  {
    feature: {
      label: "Feature",
      className: "fill-emerald-500/70 stroke-emerald-400",
    },
    fix: {
      label: "Fix",
      className: "fill-amber-500/70 stroke-amber-400",
    },
    docs: {
      label: "Docs",
      className: "fill-sky-500/70 stroke-sky-400",
    },
    refactor: {
      label: "Refactor",
      className: "fill-violet-500/70 stroke-violet-400",
    },
    other: {
      label: "Other",
      className: "fill-muted-foreground/50 stroke-muted-foreground/40",
    },
  };

const COMMIT_TYPE_ALIASES: Record<string, keyof typeof COMMIT_TYPE_STYLES> = {
  feat: "feature",
  feature: "feature",
  fix: "fix",
  bugfix: "fix",
  hotfix: "fix",
  docs: "docs",
  doc: "docs",
  documentation: "docs",
  refactor: "refactor",
  refactoring: "refactor",
};

const getCommitType = (message: string) => {
  const match = message.match(/^([a-zA-Z]+)(?:\([\w.-]+\))?(!)?:/);
  const type = match?.[1]?.toLowerCase() ?? "other";
  return COMMIT_TYPE_ALIASES[type] ?? "other";
};

export const BeeSwarmChart = ({
  commits,
  tagsBySha,
  height = 400,
  className,
}: BeeSwarmChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    const element = containerRef.current;
    if (!element) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const nextWidth = Math.max(240, Math.round(entry.contentRect.width));
        const nextHeight = Math.max(120, Math.round(entry.contentRect.height));
        setContainerSize({ width: nextWidth, height: nextHeight });
      }
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  const chartWidth = Math.max(240, containerSize.width || 1000);
  const chartHeight = Math.max(120, containerSize.height || height);

  const { nodes, width, padding, tickDates, xScaleDomain } = useMemo(() => {
    const widthValue = chartWidth;
    const paddingValue = { top: 24, right: 12, bottom: 28, left: 12 };
    const filtered = commits.filter((commit) => commit.date);

    if (!filtered.length) {
      return {
        nodes: [] as BeeSwarmNode[],
        width: widthValue,
        padding: paddingValue,
        tickDates: [] as Date[],
        xScaleDomain: null as [Date, Date] | null,
      };
    }

    const parsed = filtered.map((commit) => ({
      ...commit,
      dateValue: new Date(commit.date ?? ""),
    }));
    const [minDate, maxDate] = extent(parsed, (item) => item.dateValue) as [
      Date,
      Date,
    ];
    const xScale = scaleTime()
      .domain([minDate, maxDate])
      .range([paddingValue.left, widthValue - paddingValue.right]);
    const tickDates = xScale.ticks(5);

    const nodesValue: BeeSwarmNode[] = parsed.map((commit) => ({
      ...commit,
      type: getCommitType(commit.message),
      tags: tagsBySha[commit.sha] || [],
    }));

    const radius = 5;
    const seed = hashString(nodesValue.map((node) => node.sha).join("|"));
    const rng = mulberry32(seed);
    const plotHeight = chartHeight - paddingValue.top - paddingValue.bottom;
    const centerY = paddingValue.top + plotHeight / 2;
    const simulation = forceSimulation<BeeSwarmNode>(nodesValue)
      .randomSource(rng)
      .force(
        "x",
        forceX<BeeSwarmNode>((node) => xScale(node.dateValue)).strength(1),
      )
      .force("y", forceY(centerY).strength(0.12))
      .force(
        "collide",
        forceCollide<BeeSwarmNode>((node) =>
          node.type === "other" ? radius + 1 : radius + 2,
        ),
      )
      .stop();

    for (let i = 0; i < 140; i += 1) {
      simulation.tick();
    }

    return {
      nodes: nodesValue,
      width: widthValue,
      padding: paddingValue,
      tickDates,
      xScaleDomain: [minDate, maxDate],
    };
  }, [commits, tagsBySha, chartHeight, chartWidth]);

  if (!isMounted) {
    return (
      <div
        className={cn(
          "flex h-55 w-full items-center justify-center text-xs text-muted-foreground",
          className,
        )}
      >
        Loading chart...
      </div>
    );
  }

  if (!nodes.length) {
    return (
      <div
        className={cn(
          "flex h-55 w-full items-center justify-center text-xs text-muted-foreground",
          className,
        )}
      >
        No commit data available.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full min-h-0 w-full", className)}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${width} ${chartHeight}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="GitHub commits bee swarm chart"
      >
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top}
          y2={padding.top}
          className="stroke-muted-foreground/20"
        />
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + (chartHeight - padding.top - padding.bottom) / 2}
          y2={padding.top + (chartHeight - padding.top - padding.bottom) / 2}
          className="stroke-muted-foreground/10"
        />
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={chartHeight - padding.bottom}
          y2={chartHeight - padding.bottom}
          className="stroke-muted-foreground/20"
        />
        {nodes
          .filter((node) => node.tags.length > 0)
          .map((node) => (
            <line
              key={`tag-line-${node.sha}`}
              x1={node.x ?? width / 2}
              x2={node.x ?? width / 2}
              y1={node.y ?? chartHeight / 2}
              y2={chartHeight - padding.bottom}
              className="stroke-muted-foreground/25"
            />
          ))}
        {tickDates.map((tick, index) => {
          const domain = xScaleDomain ?? [tick, tick];
          const x = scaleTime()
            .domain(domain)
            .range([padding.left, width - padding.right])
            .clamp(true)(tick);
          return (
            <g key={`${tick.toISOString()}-${index}`}>
              <line
                x1={x}
                x2={x}
                y1={chartHeight - padding.bottom}
                y2={chartHeight - padding.bottom + 6}
                className="stroke-muted-foreground/30"
              />
            </g>
          );
        })}
      </svg>
      {nodes
        .filter((node) => node.tags.length > 0)
        .map((node) => {
          const tooltipContent = (
            <div className="select-none text-sm font-medium">
              {node.tags.join(", ")}
            </div>
          );

          return (
            <Tooltip key={`tag-dot-${node.sha}`}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="absolute"
                  style={{
                    left: formatPercent(((node.x ?? width / 2) / width) * 100),
                    top: formatPercent(
                      ((chartHeight - padding.bottom) / chartHeight) * 100,
                    ),
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-label={`Tags for ${node.shortSha}`}
                >
                  <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-muted-foreground/40" />
                </button>
              </TooltipTrigger>
              <TooltipContent
                className="pointer-events-none"
                positionerClassName="pointer-events-none"
              >
                {tooltipContent}
              </TooltipContent>
            </Tooltip>
          );
        })}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        {tickDates.map((tick, index) => {
          const domain = xScaleDomain ?? [tick, tick];
          const x = scaleTime()
            .domain(domain)
            .range([padding.left, width - padding.right])
            .clamp(true)(tick);
          return (
            <span
              key={`label-${tick.toISOString()}-${index}`}
              className="absolute -translate-x-1/2 text-sm text-muted-foreground"
              style={{ left: formatPercent((x / width) * 100), bottom: "4px" }}
            >
              {axisTickFormat(tick)}
            </span>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500/70 ring-1 ring-emerald-400" />
          Feature
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-500/70 ring-1 ring-amber-400" />
          Fix
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky-500/70 ring-1 ring-sky-400" />
          Docs
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet-500/70 ring-1 ring-violet-400" />
          Refactor
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 ring-1 ring-muted-foreground/40" />
          Other
        </span>
      </div>
      {nodes.map((node) => {
        const style = COMMIT_TYPE_STYLES[node.type] ?? COMMIT_TYPE_STYLES.other;
        const hasSemanticType = node.type !== "other";
        const dotRadius = hasSemanticType ? 5 : 3;

        if (!hasSemanticType) {
          return (
            <span
              key={node.sha}
              className="absolute"
              style={{
                left: formatPercent(((node.x ?? width / 2) / width) * 100),
                top: formatPercent(
                  ((node.y ?? chartHeight / 2) / chartHeight) * 100,
                ),
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                className="block"
                width={8}
                height={8}
                viewBox="0 0 8 8"
                role="img"
              >
                <circle
                  cx={4}
                  cy={4}
                  r={dotRadius}
                  className={style.className}
                  strokeWidth={1}
                />
              </svg>
            </span>
          );
        }

        const tooltipContent = (
          <div className="max-w-65 select-none text-sm">
            <div className="font-medium">
              {formatCommitMessage(node.message)}
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs opacity-80">
              <span className="font-mono">{node.shortSha}</span>
              <span>{formatCommitDate(node.date)}</span>
            </div>
            {node.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {node.tags.map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        );

        return (
          <Tooltip key={node.sha}>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="absolute"
                style={{
                  left: formatPercent(((node.x ?? width / 2) / width) * 100),
                  top: formatPercent(
                    ((node.y ?? chartHeight / 2) / chartHeight) * 100,
                  ),
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={`${node.shortSha} ${node.message}`}
              >
                <svg
                  className="block"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  role="img"
                >
                  <circle
                    cx={6}
                    cy={6}
                    r={dotRadius}
                    className={cn(
                      "transition-transform duration-150 hover:scale-110",
                      style.className,
                    )}
                    strokeWidth={1}
                  />
                </svg>
              </button>
            </TooltipTrigger>
            <TooltipContent
              className="pointer-events-none"
              positionerClassName="pointer-events-none"
            >
              {tooltipContent}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};
