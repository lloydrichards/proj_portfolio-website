import {
  extent,
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  randomLcg,
  scaleUtc,
} from "d3";
import { folder, Leva, useControls } from "leva";
import { type FC, useEffect, useState } from "react";

const topics = ["SPORT", "NEWS", "MEDIA"] as const;
type Topic = (typeof topics)[number];
type Node = {
  id: string;
  timestamp: Date;
  x: number;
  y: number;
  count: number;
  type?: Topic;
  color?: string;
};

const simulationConfig = {
  "Layout Force": folder({
    collisionStr: {
      value: 1,
      min: 0,
      max: 1,
    },
    xStr: {
      value: 1,
      min: 0,
      max: 1,
    },
    yStr: {
      value: 0.05,
      min: 0,
      max: 1,
    },
    selectStr: {
      value: 0.25,
      min: 0,
      max: 1,
    },
    selectRad: {
      value: 2,
      min: 0,
      max: 10,
    },
    padding: {
      value: 4,
      min: -10,
      max: 16,
    },
  }),
  Axis: folder({
    offset: {
      value: 40,
      min: -100,
      max: 100,
    },
  }),
  alpha: {
    value: 0.5,
    min: 0,
    max: 1,
  },
};

const addDays = (date: Date, days: number) => {
  const copy = new Date(Number(date));
  copy.setUTCDate(date.getUTCDate() + days);
  return copy;
};

const random = randomLcg(0.31);
const randomTopic = () => {
  return topics[Math.floor(random() * topics.length)];
};
export const MockBubbles: Node[] = Array.from({ length: 200 }).map((_, i) => ({
  id: `node-${i}`,
  x: Math.floor(random() * 500) + 1,
  y: 150,
  timestamp: addDays(new Date("2023-07-01"), i + Math.ceil(random() * 32) - 16),
  count: Math.floor(random() * 10) + 10,
  type: randomTopic(),
}));

const topicColor = (topic: Topic) => {
  switch (topic) {
    case "SPORT":
      return "#e6194b";
    case "NEWS":
      return "#3cb44b";
    case "MEDIA":
      return "#ffe119";
  }
};

interface Props {
  data: Array<Node>;
  width: number;
  height: number;
}

export const BeeSwarmChart: FC<Props> = ({ data, width, height }) => {
  // Controls
  const {
    padding,
    collisionStr,
    alpha,
    // offset,
    xStr,
    yStr,
    selectStr,
    selectRad,
  } = useControls("Simulation", simulationConfig);

  const [selected, setSelected] = useState<Topic | null>(null);
  const [nodes, setNodes] = useState(() => data);
  const marginLeft = 16;
  const innerWidth = width - 2 * marginLeft;

  useEffect(() => {
    const xScale = scaleUtc()
      .domain(extent(data, (node) => node.timestamp) as [Date, Date])
      .range([0, innerWidth * 2]);
    const simulator = forceSimulation(data.map((node) => ({ ...node })))
      .alpha(alpha)
      .force(
        "forceX",
        forceX<Node>((node) => xScale(node.timestamp)).strength(xStr),
      )
      .force(
        "forceY",
        forceY<Node>(height / 2).strength(
          (node) => yStr + (node.type === selected ? selectStr : 0),
        ),
      )
      .force(
        "collide",
        forceCollide<Node>()
          .strength(collisionStr)
          .radius((node) =>
            Math.max(
              0,
              (node.count / Math.PI) * 2 +
                padding -
                (node.type === selected ? selectRad : 0),
            ),
          ),
      )
      .on("tick", () =>
        setNodes(simulator.nodes().map((node) => ({ ...node }))),
      );
    return () => {
      simulator.stop();
    };
  }, [
    data,
    alpha,
    innerWidth,
    height,
    collisionStr,
    padding,
    selectStr,
    xStr,
    yStr,
    selected,
    selectRad,
  ]);

  return (
    <div className="simulation">
      <svg
        role="img"
        aria-label="Bee swarm simulation"
        viewBox={`0 0 ${Math.max(1, width * 2)} ${Math.max(1, height)}`}
      >
        <g transform={`translate(${marginLeft},0)`}>
          {nodes.map((d) => (
            // biome-ignore lint/a11y/noStaticElementInteractions: Topic buttons provide the same interaction by keyboard.
            <circle
              key={d.id}
              cx={d.x}
              cy={d.y}
              r={((d?.count || 0) / Math.PI) * 2}
              opacity={selected ? (d.type === selected ? 1 : 0.2) : 0.8}
              fill={topicColor(d.type || "SPORT")}
              stroke="black"
              strokeWidth={1}
              onClick={() =>
                setSelected(selected === d.type ? null : d.type || null)
              }
            />
          ))}
        </g>
      </svg>
      <fieldset className="topics" aria-label="Filter by topic">
        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            aria-pressed={selected === topic}
            onClick={() => setSelected(selected === topic ? null : topic)}
          >
            {topic.toLowerCase()}
          </button>
        ))}
      </fieldset>
      <details className="simulation-controls">
        <summary>Simulation controls</summary>
        <Leva fill flat titleBar={false} />
      </details>
    </div>
  );
};
