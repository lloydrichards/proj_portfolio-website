"use client";

import { curveStep, extent, line, scaleOrdinal, scaleUtc } from "d3";
import {
  ResponsiveWrapper,
  useResponsive,
} from "@/components/template/responsive_wrapper";

interface Occupation {
  start_date: string;
  end_date?: string;
  title: string;
  description: string;
  category: string;
}

function SimpleTimelineChart({ data }: { data: Occupation[] }) {
  const { width } = useResponsive();
  if (!width || !data.length) return null;

  const compact = width < 480;
  const rowHeight = compact ? 112 : 96;
  const barWidth = compact ? 28 : 48;
  const labelX = compact ? 88 : 180;
  const labelWidth = Math.max(1, width - labelX - 12);
  const height = data.length * rowHeight;
  const today = new Date();
  const dates = data
    .map((occupation) => ({
      ...occupation,
      start: new Date(occupation.start_date),
      end: occupation.end_date ? new Date(occupation.end_date) : today,
    }))
    .sort((a, b) => +a.start - +b.start);
  const [start, end] = extent(
    dates.flatMap((occupation) => [occupation.start, occupation.end]),
  );
  const yScale = scaleUtc([start ?? today, end ?? today], [height - 16, 16]);
  const xScale = scaleOrdinal<number, number>()
    .domain([0, 1, 2])
    .range(compact ? [12, 26, 40] : [48, 64, 80]);
  const color = scaleOrdinal<string, string>()
    .domain(Array.from(new Set(data.map((occupation) => occupation.category))))
    .range(["#FBBF24", "#F87171", "#60A5FA"]);
  const connector = line().curve(curveStep);
  const overlaps = (date: Date) =>
    dates.some(
      (occupation) => date > occupation.start && date < occupation.end,
    );

  return (
    <svg
      width={width}
      height={height}
      className="block max-w-full"
      role="img"
      aria-label="CV timeline with six sample occupations"
    >
      {dates.map((occupation, index) => {
        const channel = overlaps(occupation.start)
          ? overlaps(occupation.end)
            ? 2
            : 1
          : 0;
        const x = xScale(channel);
        const top = yScale(occupation.end);
        const bottom = yScale(occupation.start);
        const rowY = index * rowHeight + 8;
        const fill = color(occupation.category);
        return (
          <g key={occupation.title}>
            <rect
              x={x}
              y={top}
              width={barWidth}
              height={bottom - top}
              fill={fill}
              stroke="currentColor"
            />
            <path
              d={
                connector([
                  [x + barWidth, (top + bottom) / 2],
                  [labelX, rowY + (rowHeight - 16) / 2],
                ]) ?? undefined
              }
              stroke={fill}
              fill="none"
              strokeWidth={2}
            />
            <rect
              x={labelX}
              y={rowY}
              width={labelWidth}
              height={rowHeight - 16}
              fill={fill}
              opacity={0.2}
            />
            <foreignObject
              x={labelX}
              y={rowY}
              width={labelWidth}
              height={rowHeight - 16}
            >
              <div className="not-prose grid gap-1 p-2 text-xs leading-tight">
                <p className="font-semibold">{occupation.title}</p>
                <p>{occupation.description}</p>
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

export function TimelineDemo() {
  return (
    <ResponsiveWrapper className="not-prose my-6 min-w-0 rounded-lg bg-muted/30 ring-1 ring-border ring-inset">
      <SimpleTimelineChart data={mockOccupations} />
    </ResponsiveWrapper>
  );
}

const mockOccupations: Occupation[] = [
  {
    start_date: "2020-01-01",
    end_date: "2020-12-31",
    title: "Software Engineer",
    description:
      "Developed and maintained web applications using React and Node.js",
    category: "WORK",
  },
  {
    start_date: "2021-09-01",
    end_date: "2022-04-31",
    title: "Data Analyst",
    description: "Analyzed customer data to identify trends and insights",
    category: "WORK",
  },
  {
    start_date: "2020-04-01",
    end_date: "2021-03-31",
    title: "Content Writer",
    description: "Wrote blog posts and articles for a variety of industries",
    category: "EDUCATION",
  },
  {
    start_date: "2022-06-01",
    end_date: "2022-08-31",
    title: "Graphic Designer",
    description: "Created visual designs for print and digital media",
    category: "VOLUNTEER",
  },
  {
    start_date: "2021-05-01",
    end_date: "2021-12-31",
    title: "Project Manager",
    description:
      "Managed software development projects using Agile methodologies",
    category: "EDUCATION",
  },
  {
    start_date: "2022-01-01",
    end_date: "2022-10-31",
    title: "Customer Support Specialist",
    description: "Provided technical support to customers via phone and email",
    category: "WORK",
  },
];
