import {
  scaleBand,
  scaleLinear,
  scaleOrdinal,
  schemeObservable10,
  stack,
} from "d3";
import type { StackedData } from "./stacked_bar_chart";

export const useStackedBarData = (
  data: StackedData[],
  {
    innerHeight,
    innerWidth,
    cDomain,
  }: { innerHeight: number; innerWidth: number; cDomain?: string[] },
) => {
  // Move all data processing here
  const allSeries = Array.from(new Set(data.map((d) => d.series)));
  const allStacks = Array.from(new Set(data.map((d) => d.stack)));

  const stackTotals = allStacks.map((stack) => ({
    stack,
    total: data
      .filter((d) => d.stack === stack)
      .reduce((sum, d) => sum + d.value, 0),
  }));

  const sortedStacks = stackTotals
    .sort((a, b) => b.total - a.total)
    .map((item) => item.stack);

  const groupedData = sortedStacks.map((stack) => {
    const stackData: { stack: string; [key: string]: number | string } = {
      stack,
    };
    allSeries.forEach((series) => {
      const match = data.find((d) => d.stack === stack && d.series === series);
      stackData[series] = match?.value || 0;
    });
    return stackData;
  });

  const stackGenerator = stack<(typeof groupedData)[0]>().keys(allSeries);
  const series = stackGenerator(groupedData);

  // Create scales
  const xScale = scaleBand()
    .range([0, innerWidth])
    .domain(sortedStacks)
    .padding(0.1);

  const yScale = scaleLinear()
    .domain([0, Math.max(...series.flat().map((d) => d[1]))])
    .range([innerHeight, 0]);

  const cScale = scaleOrdinal<string>()
    .domain(cDomain ?? allStacks)
    .range(schemeObservable10);

  return {
    xScale,
    yScale,
    cScale,
    series,
  };
};
