"use client";

import * as Plot from "@observablehq/plot";
import {
  FigurePlot,
  type FigurePlotProps,
} from "@/components/molecule/plot-figure";
import data from "./data/fig-1.json";

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});
const currency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "CHF",
  maximumFractionDigits: 2,
});

let cumulativeMinutes = 0;
const sessions = data.map((session) => {
  const activeStart = cumulativeMinutes;
  cumulativeMinutes += session.active_minutes;
  return {
    ...session,
    activeStart,
    activeEnd: cumulativeMinutes,
    activeCenter: activeStart + session.active_minutes / 2,
    visibleOrder:
      session.active_minutes >= 20 ? String(session.session_order) : "",
  };
});
const phases = [
  ...new Map(
    [...data]
      .sort((left, right) => left.phase_order - right.phase_order)
      .map((session) => [session.phase, session.phase]),
  ).values(),
];

export const fig1Options: Plot.PlotOptions = {
  height: 300,
  marginLeft: 110,
  marginRight: 24,
  marginBottom: 54,
  x: {
    grid: true,
    label: "Recorded activity, sessions concatenated",
    ticks: 6,
    tickFormat: (value) => `${value}m`,
  },
  y: { label: null, domain: phases },
  color: {
    legend: true,
    domain: ["Learning", "Building", "Explaining", "Reviewing"],
    range: [
      "var(--chart-1)",
      "var(--chart-2)",
      "var(--chart-3)",
      "var(--chart-4)",
    ],
  },
  marks: [
    Plot.rectX(sessions, {
      x1: "activeStart",
      x2: "activeEnd",
      y: "phase",
      fill: "mode",
      fillOpacity: 0.9,
      inset: 1,
      channels: {
        active_minutes: { value: "active_minutes", label: "Active" },
        api_calls: { value: "api_calls", label: "API calls" },
        direct_tokens: { value: "direct_tokens", label: "Direct tokens" },
        cost_chf: { value: "cost_chf", label: "Cost" },
      },
      tip: {
        format: {
          active_minutes: (value) => `${value} min`,
          api_calls: true,
          direct_tokens: compact.format,
          cost_chf: currency.format,
          fill: false,
          y: false,
          x: false,
        },
      },
    }),
    Plot.text(sessions, {
      x: "activeCenter",
      y: "phase",
      text: "visibleOrder",
      fill: "var(--foreground)",
      stroke: "var(--background)",
      strokeWidth: 3,
      paintOrder: "stroke",
    }),
  ],
};

export function Figure1Plot(props: Omit<FigurePlotProps, "options">) {
  return <FigurePlot {...props} options={fig1Options} />;
}
