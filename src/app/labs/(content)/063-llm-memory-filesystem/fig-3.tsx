"use client";

import * as Plot from "@observablehq/plot";
import {
  FigurePlot,
  type FigurePlotProps,
} from "@/components/molecule/plot-figure";
import data from "./data/fig-3.json";

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});
const currency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "CHF",
  maximumFractionDigits: 2,
});
const totals = [
  ...new Map(
    data.map((row) => [
      row.phase,
      {
        phase: row.phase,
        cost_chf: row.phase_cost_chf,
        label: currency.format(row.phase_cost_chf),
      },
    ]),
  ).values(),
].sort((left, right) => right.cost_chf - left.cost_chf);
const models = [...new Set(data.map((row) => row.model))].sort();

export const fig3Options: Plot.PlotOptions = {
  height: 300,
  marginLeft: 110,
  marginRight: 82,
  marginBottom: 54,
  x: {
    grid: true,
    label: "Recorded model cost (CHF)",
    ticks: 5,
    tickFormat: (value) => `CHF ${compact.format(value)}`,
  },
  y: { label: null, domain: totals.map((phase) => phase.phase) },
  color: {
    domain: models,
    range: ["var(--chart-1)", "var(--chart-4)"],
    legend: true,
  },
  marks: [
    Plot.barX(data, {
      x: "model_cost_chf",
      y: "phase",
      fill: "model",
      fillOpacity: 0.88,
      inset: 1,
      channels: {
        cost: { value: "model_cost_chf", label: "Cost" },
        model: { value: "model", label: "Model" },
      },
      tip: {
        format: {
          model: true,
          cost: currency.format,
          fill: false,
          y: false,
          x: false,
        },
      },
    }),
    Plot.text(totals, {
      x: "cost_chf",
      y: "phase",
      text: "label",
      dx: 6,
      textAnchor: "start",
      fill: "var(--foreground)",
      fontWeight: 600,
    }),
    Plot.ruleX([0]),
  ],
};

export function Figure3Plot(props: Omit<FigurePlotProps, "options">) {
  return <FigurePlot {...props} options={fig3Options} />;
}
