"use client";

import {
  extent,
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  scaleTime,
} from "d3";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
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
  vx?: number;
  vy?: number;
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
      className: "fill-chart-1/70 stroke-chart-1",
    },
    fix: {
      label: "Fix",
      className: "fill-chart-2/70 stroke-chart-2",
    },
    docs: {
      label: "Docs",
      className: "fill-chart-3/70 stroke-chart-3",
    },
    refactor: {
      label: "Refactor",
      className: "fill-chart-4/70 stroke-chart-4",
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
  const containerRef = useRef<HTMLElement>(null);
  const dotRefsMap = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [isMounted, setIsMounted] = useState(false);
  const [simulationSize, setSimulationSize] = useState({
    width: 0,
    height,
  });
  const [, startTransition] = useTransition();

  // Keyboard navigation state
  const [activeDotIndex, setActiveDotIndex] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const lastActiveIndexRef = useRef<number | null>(null);

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
        startTransition(() => {
          setSimulationSize({ width: nextWidth, height: nextHeight });
        });
      }
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  const simWidth = Math.max(240, simulationSize.width || 1000);
  const simHeight = Math.max(120, simulationSize.height || height);

  const { nodes, width, padding, tickDates, xScaleDomain, tickFormat } =
    useMemo(() => {
      const widthValue = simWidth;
      const paddingValue = { top: 24, right: 12, bottom: 28, left: 12 };
      const filtered = commits.filter((commit) => commit.date);

      if (!filtered.length) {
        return {
          nodes: [] as BeeSwarmNode[],
          width: widthValue,
          padding: paddingValue,
          tickDates: [] as Date[],
          tickFormat: (d: Date) => d.toLocaleDateString(),
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
      const tickFormat = xScale.tickFormat(5);

      const nodesValue: BeeSwarmNode[] = parsed.map((commit) => ({
        ...commit,
        type: getCommitType(commit.message),
        tags: tagsBySha[commit.sha] || [],
      }));

      const radius = 5;
      const seed = hashString(nodesValue.map((node) => node.sha).join("|"));
      const rng = mulberry32(seed);
      const plotHeight = simHeight - paddingValue.top - paddingValue.bottom;
      const centerY = paddingValue.top + plotHeight / 2;
      const yMin = paddingValue.top + radius + 4;
      const yMax = simHeight - paddingValue.bottom - radius - 4;

      const boundingForce = () => {
        for (const node of nodesValue) {
          if (node.y != null) {
            if (node.y < yMin) {
              node.vy = (node.vy ?? 0) + (yMin - node.y) * 0.5;
            }
            if (node.y > yMax) {
              node.vy = (node.vy ?? 0) + (yMax - node.y) * 0.5;
            }
          }
        }
      };

      const simulation = forceSimulation<BeeSwarmNode>(nodesValue)
        .randomSource(rng)
        .force(
          "x",
          forceX<BeeSwarmNode>((node) => xScale(node.dateValue)).strength(1),
        )
        .force("y", forceY(centerY).strength(0.05))
        .force(
          "collide",
          forceCollide<BeeSwarmNode>((node) =>
            node.type === "other" ? radius + 1.5 : radius + 2.5,
          ),
        )
        .force("bounds", boundingForce)
        .stop();

      for (let i = 0; i < 140; i += 1) {
        simulation.tick();
      }

      return {
        nodes: nodesValue,
        width: widthValue,
        padding: paddingValue,
        tickDates,
        tickFormat,
        xScaleDomain: [minDate, maxDate],
      };
    }, [commits, tagsBySha, simHeight, simWidth]);

  // Build sorted list of navigable dots (semantic commits + tag dots, sorted by x)
  const navigableNodes = useMemo(() => {
    const semantic = nodes.filter((node) => node.type !== "other");
    return semantic.sort((a, b) => (a.x ?? 0) - (b.x ?? 0));
  }, [nodes]);

  // Lookup map: sha -> index in navigableNodes for O(1) access during render
  const navIndexBySha = useMemo(() => {
    const map = new Map<string, number>();
    for (let i = 0; i < navigableNodes.length; i++) {
      map.set(navigableNodes[i].sha, i);
    }
    return map;
  }, [navigableNodes]);

  const setDotRef = useCallback((sha: string, el: HTMLButtonElement | null) => {
    if (el) {
      dotRefsMap.current.set(sha, el);
    } else {
      dotRefsMap.current.delete(sha);
    }
  }, []);

  const focusDot = useCallback(
    (index: number) => {
      const node = navigableNodes[index];
      if (!node) return;
      const el = dotRefsMap.current.get(node.sha);
      if (el) {
        el.focus();
      }
      setActiveDotIndex(index);
      lastActiveIndexRef.current = index;
      setIsNavigating(true);
    },
    [navigableNodes],
  );

  const handleContainerFocus = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      // Only handle direct focus on the container (not bubbled from dots)
      if (e.target !== containerRef.current) return;

      // If returning to the chart, restore last position
      if (lastActiveIndexRef.current != null && navigableNodes.length > 0) {
        const idx = Math.min(
          lastActiveIndexRef.current,
          navigableNodes.length - 1,
        );
        setActiveDotIndex(idx);
        setIsNavigating(false); // Container focused, not navigating yet
      }
    },
    [navigableNodes],
  );

  const handleContainerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!navigableNodes.length) return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown": {
          e.preventDefault();
          if (!isNavigating) {
            // First arrow press: enter navigation, focus first (or last remembered) dot
            const startIdx = lastActiveIndexRef.current ?? 0;
            focusDot(Math.min(startIdx, navigableNodes.length - 1));
          } else {
            // Move to next dot
            const next = (activeDotIndex ?? -1) + 1;
            if (next < navigableNodes.length) {
              focusDot(next);
            }
          }
          break;
        }
        case "ArrowLeft":
        case "ArrowUp": {
          e.preventDefault();
          if (!isNavigating) {
            const startIdx = lastActiveIndexRef.current ?? 0;
            focusDot(Math.min(startIdx, navigableNodes.length - 1));
          } else {
            const prev = (activeDotIndex ?? 1) - 1;
            if (prev >= 0) {
              focusDot(prev);
            }
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          setActiveDotIndex(null);
          setIsNavigating(false);
          containerRef.current?.focus();
          break;
        }
        default:
          break;
      }
    },
    [navigableNodes, isNavigating, activeDotIndex, focusDot],
  );

  const handleContainerBlur = useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      // If focus leaves the chart container entirely, deactivate navigation
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setIsNavigating(false);
        setActiveDotIndex(null);
      }
    },
    [],
  );

  const renderWidth = width || simWidth;
  const renderHeight = simHeight;

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
    <figure
      ref={containerRef}
      className={cn("relative h-full min-h-0 w-full outline-none", className)}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: Composite widget pattern - single tab stop for keyboard navigation
      tabIndex={0}
      aria-roledescription="interactive chart"
      aria-label="GitHub commits chart. Use arrow keys to explore individual commits, Tab to skip."
      onKeyDown={handleContainerKeyDown}
      onFocus={handleContainerFocus}
      onBlur={handleContainerBlur}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${renderWidth} ${renderHeight}`}
        preserveAspectRatio="none"
        role="img"
        aria-hidden="true"
      >
        <line
          x1={padding.left}
          x2={renderWidth - padding.right}
          y1={padding.top}
          y2={padding.top}
          className="stroke-muted-foreground/20 transition-all duration-350"
        />
        <line
          x1={padding.left}
          x2={renderWidth - padding.right}
          y1={padding.top + (renderHeight - padding.top - padding.bottom) / 2}
          y2={padding.top + (renderHeight - padding.top - padding.bottom) / 2}
          className="stroke-muted-foreground/10 transition-all duration-350"
        />
        <line
          x1={padding.left}
          x2={renderWidth - padding.right}
          y1={renderHeight - padding.bottom}
          y2={renderHeight - padding.bottom}
          className="stroke-muted-foreground/20 transition-all duration-350"
        />
        {nodes
          .filter((node) => node.tags.length > 0)
          .map((node) => (
            <line
              key={`tag-line-${node.sha}`}
              x1={node.x ?? renderWidth / 2}
              x2={node.x ?? renderWidth / 2}
              y1={node.y ?? renderHeight / 2}
              y2={renderHeight - padding.bottom}
              className="stroke-muted-foreground/25 transition-all duration-350"
            />
          ))}
        {tickDates.map((tick) => {
          const domain = xScaleDomain ?? [tick, tick];
          const x = scaleTime()
            .domain(domain)
            .range([padding.left, renderWidth - padding.right])
            .clamp(true)(tick);
          return (
            <g key={tick.toISOString()}>
              <line
                x1={x}
                x2={x}
                y1={renderHeight - padding.bottom}
                y2={renderHeight - padding.bottom + 6}
                className="stroke-muted-foreground/30 transition-all duration-350"
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
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute transition-[left,top] duration-350 ease-out"
                    style={{
                      left: formatPercent(
                        ((node.x ?? renderWidth / 2) / renderWidth) * 100,
                      ),
                      top: formatPercent(
                        ((renderHeight - padding.bottom) / renderHeight) * 100,
                      ),
                      transform: "translate(-50%, -50%)",
                    }}
                    aria-label={`Tags for ${node.shortSha}`}
                  />
                }
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-muted-foreground/40" />
              </TooltipTrigger>
              <TooltipContent className="pointer-events-none">
                {tooltipContent}
              </TooltipContent>
            </Tooltip>
          );
        })}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        {tickDates.map((tick) => {
          const domain = xScaleDomain ?? [tick, tick];
          const x = scaleTime()
            .domain(domain)
            .range([padding.left, renderWidth - padding.right])
            .clamp(true)(tick);
          return (
            <span
              key={`label-${tick.toISOString()}`}
              className="absolute -translate-x-1/2 text-sm text-muted-foreground transition-[left] duration-350 ease-out"
              style={{
                left: formatPercent((x / renderWidth) * 100),
                bottom: "4px",
              }}
            >
              {tickFormat(tick)}
            </span>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-center justify-end gap-3 pt-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-chart-1/70 ring-1 ring-chart-1" />
          Feature
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-chart-2/70 ring-1 ring-chart-2" />
          Fix
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-chart-3/70 ring-1 ring-chart-3" />
          Docs
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-chart-4/70 ring-1 ring-chart-4" />
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
              className="absolute transition-[left,top] duration-350 ease-out"
              style={{
                left: formatPercent(
                  ((node.x ?? renderWidth / 2) / renderWidth) * 100,
                ),
                top: formatPercent(
                  ((node.y ?? renderHeight / 2) / renderHeight) * 100,
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

        const navIndex = navIndexBySha.get(node.sha) ?? -1;
        const isActive = isNavigating && activeDotIndex === navIndex;

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
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        );

        return (
          <Tooltip key={node.sha}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  ref={(el) => setDotRef(node.sha, el)}
                  tabIndex={-1}
                  className={cn(
                    "absolute rounded-full transition-[left,top] duration-350 ease-out",
                    isActive &&
                      "ring-2 ring-ring ring-offset-1 ring-offset-background",
                  )}
                  style={{
                    left: formatPercent(
                      ((node.x ?? renderWidth / 2) / renderWidth) * 100,
                    ),
                    top: formatPercent(
                      ((node.y ?? renderHeight / 2) / renderHeight) * 100,
                    ),
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-label={`${node.shortSha} ${node.message}`}
                />
              }
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
            </TooltipTrigger>
            <TooltipContent className="pointer-events-none">
              {tooltipContent}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </figure>
  );
};
