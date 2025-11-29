"use client";
import { curveStep, line, min, scaleOrdinal, scaleTime } from "d3";
import type { FC } from "react";

interface Occupation {
  start_date: string;
  end_date?: string;
  title: string;
  description: string;
  category: string;
}

interface TimelineProps {
  data: Occupation[];
  maxHeight?: number;
  width: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
export const SimpleTimelineChart: FC<TimelineProps> = ({
  data,
  maxHeight,
  width,
  margin = {
    top: 16,
    right: 0,
    bottom: 16,
    left: 48,
  },
}) => {
  const textBlockHeight = 96;
  const textMargin = 180;
  const height = data.length * textBlockHeight || maxHeight || 400;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // Scales
  const yScale = scaleTime()
    .domain([
      min(data, (d) => new Date(d.start_date)) || new Date("1988-04-18"),
      new Date(),
    ])
    .range([innerHeight, margin.bottom]);
  const xScale = scaleOrdinal<number, number>()
    .domain([0, 1, 2])
    .range([margin.left, margin.left + 16, margin.left + 32]);
  const cScale = scaleOrdinal<string>()
    .domain(Array.from(new Set(data.map((d) => d.category))))
    .range(["#FBBF24", "#F87171", "#60A5FA"]);

  // Helpers
  const lookupInRange = (
    corner: Date,
    allValues: Array<Occupation>,
  ): boolean => {
    let result: boolean = false;
    allValues.forEach((i) => {
      if (
        corner > new Date(i.start_date) &&
        corner < new Date(i.end_date || new Date())
      ) {
        result = true;
        return true;
      }
    });
    return result;
  };

  const dataWithChannels = data
    .sort(
      (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
    )
    .map((d) => {
      if (
        lookupInRange(new Date(d.end_date || new Date()), data) &&
        lookupInRange(new Date(d.start_date), data)
      ) {
        return { ...d, channel: 2 };
      } else if (lookupInRange(new Date(d.start_date), data)) {
        return { ...d, channel: 1 };
      } else {
        return { ...d, channel: 0 };
      }
    });

  const lineConnector = line()
    .curve(curveStep)
    .x((d) => d[0])
    .y((d) => d[1]);

  return (
    <div
      style={{
        height,
        width,
        maxHeight: maxHeight || undefined,
        overflow: "scroll",
      }}
    >
      <svg width={width} height={height}>
        {/* <AxisLeft scale={yScale} top={margin.top} left={margin.left} /> */}
        {dataWithChannels.map((d, idx) => {
          {
            const startDate = new Date(d.start_date);
            const endDate = new Date(d.end_date || new Date());
            const y1 = yScale(startDate);
            const y2 = yScale(endDate);
            const height = y1 - y2;
            return (
              <g key={idx}>
                <rect
                  x={xScale(d.channel)}
                  y={y2}
                  width={48}
                  height={height}
                  fill={cScale(d.category) || "black"}
                  stroke="black"
                />
                <text
                  x={textMargin}
                  y={idx * textBlockHeight + 20}
                  fill="black"
                  fontSize={12}
                  fontWeight="bold"
                >
                  {d.title}
                </text>
                <foreignObject
                  x={textMargin}
                  y={idx * textBlockHeight + 40}
                  width={innerWidth - textMargin}
                  height={textBlockHeight - 16}
                >
                  <p className="m-0 text-sm">{d.description}</p>
                </foreignObject>
                <rect
                  x={textMargin}
                  y={idx * textBlockHeight + 8}
                  width={innerWidth - textMargin}
                  height={textBlockHeight - 16}
                  fill={cScale(d.category) || "black"}
                  opacity={0.2}
                />
                <path
                  d={
                    lineConnector([
                      [xScale(d.channel) + 48, y1 - height / 2],
                      [textMargin, idx * textBlockHeight + textBlockHeight / 2],
                    ]) || ""
                  }
                  stroke={cScale(d.category) || "black"}
                  fill="none"
                  strokeWidth={2}
                />
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
};

export const mockOccupations: Occupation[] = [
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
