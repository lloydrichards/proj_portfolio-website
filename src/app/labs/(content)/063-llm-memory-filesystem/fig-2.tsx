"use client";

import * as Plot from "@observablehq/plot";
import {
  FigurePlot,
  type FigurePlotProps,
} from "@/components/molecule/plot-figure";
import data from "./data/fig-2.json";

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 2,
});
const percent = new Intl.NumberFormat("en", { style: "percent" });
const zurichTick = new Intl.DateTimeFormat("en", {
  timeZone: "Europe/Zurich",
  weekday: "short",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
});
export const fig2PhaseColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];
export const fig2Phases = [
  {
    phase: "Contract and filesystem model",
    mode: "Learning",
  },
  {
    phase: "Core implementation",
    mode: "Building",
  },
  {
    phase: "Explanation and representation",
    mode: "Explaining",
  },
  {
    phase: "Architecture and adversarial audit",
    mode: "Reviewing",
  },
  {
    phase: "Targeted hardening",
    mode: "Building",
  },
];

const ordered = [...data].sort(
  (left, right) =>
    Date.parse(left.started_at_utc) - Date.parse(right.started_at_utc),
);
const outputTotal = ordered.reduce(
  (total, turn) => total + turn.output_tokens,
  0,
);
const turnSeries = `Recorded user turns (${ordered.length})`;
const outputSeries = `Model output tokens (${compact.format(outputTotal)})`;
const gapThreshold = 60 * 60 * 1000;
let output = 0;
const progress = ordered.map((turn, index) => {
  output += turn.output_tokens;
  return {
    ...turn,
    at: new Date(turn.started_at_utc),
    turnProgress: (index + 1) / ordered.length,
    outputProgress: output / outputTotal,
  };
});
const continuousSeries = progress.flatMap((turn) => [
  { at: turn.at, kind: turnSeries, progress: turn.turnProgress },
  { at: turn.at, kind: outputSeries, progress: turn.outputProgress },
]);
const series = progress.flatMap((turn, index) => {
  const previous = progress[index - 1];
  const gap =
    previous && turn.at.getTime() - previous.at.getTime() > gapThreshold
      ? [
          {
            at: new Date((previous.at.getTime() + turn.at.getTime()) / 2),
            kind: turnSeries,
            progress: Number.NaN,
          },
          {
            at: new Date((previous.at.getTime() + turn.at.getTime()) / 2),
            kind: outputSeries,
            progress: Number.NaN,
          },
        ]
      : [];

  return [
    ...gap,
    { at: turn.at, kind: turnSeries, progress: turn.turnProgress },
    { at: turn.at, kind: outputSeries, progress: turn.outputProgress },
  ];
});
const markers = fig2Phases.flatMap((phase, index) => {
  const firstTurn = progress.find((turn) => turn.phase === phase.phase);
  return firstTurn
    ? [
        {
          ...phase,
          at: firstTurn.at,
          progress: firstTurn.outputProgress,
          number: index + 1,
        },
      ]
    : [];
});

export const fig2Options: Plot.PlotOptions = {
  height: 390,
  marginLeft: 54,
  marginTop: 16,
  marginRight: 32,
  marginBottom: 54,
  x: {
    type: "utc",
    label: "Development journey",
    tickFormat: zurichTick.format,
  },
  y: {
    grid: true,
    label: "Share of total",
    labelAnchor: "center",
    zero: true,
    percent: true,
  },
  color: {
    domain: [turnSeries, outputSeries],
    range: ["var(--chart-1)", "var(--chart-4)"],
    legend: true,
  },
  marks: [
    Plot.lineY(continuousSeries, {
      x: "at",
      y: "progress",
      stroke: "kind",
      curve: "step-after",
      strokeWidth: 1,
      strokeOpacity: 0.5,
    }),
    Plot.lineY(series, {
      x: "at",
      y: "progress",
      stroke: "kind",
      curve: "step-after",
      strokeWidth: 2.2,
      channels: {
        at: { value: "at", label: "Active" },
        progress: { value: "progress", label: "Progress" },
      },
      tip: {
        format: {
          x: false,
          y: false,
          at: (value: Date) =>
            value.toLocaleString("en", { timeZone: "Europe/Zurich" }),
          progress: percent.format,
        },
      },
    }),
    ...markers.map((marker, index) =>
      Plot.dot([marker], {
        x: "at",
        y: "progress",
        r: 9,
        fill: fig2PhaseColors[index],
        stroke: "var(--background)",
        strokeWidth: 2,
      }),
    ),
    ...markers.map((marker, index) =>
      Plot.ruleX([marker], {
        x: "at",
        y: "progress",
        stroke: fig2PhaseColors[index],
        strokeWidth: 1,
        opacity: 0.5,
      }),
    ),
    ...markers.map((marker) =>
      Plot.text([marker], {
        x: "at",
        y: "progress",
        text: "number",
        fill: "var(--background)",
        fontWeight: 700,
      }),
    ),
  ],
};

export function Figure2Plot(props: Omit<FigurePlotProps, "options">) {
  return <FigurePlot {...props} options={fig2Options} />;
}
