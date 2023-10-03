import { AxisBottom } from "@visx/axis";
import {
  Simulation,
  SimulationNodeDatum,
  extent,
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  scaleTime,
} from "d3";
import { addDays } from "date-fns";
import { Leva, folder, useControls } from "leva";
import { FC, useEffect, useState } from "react";

type Topic = "SPORT" | "NEWS" | "MEDIA";
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

const randomTopic = () => {
  const types: Topic[] = ["SPORT", "NEWS", "MEDIA"];
  const randomIdx = Math.floor(Math.random() * types.length);
  return types[randomIdx];
};
export const MockBubbles: Node[] = Array.from({ length: 200 }).map((_, i) => ({
  id: `node-${i}`,
  x: Math.floor(Math.random() * 500) + 1,
  y: 150,
  timestamp: addDays(new Date(), i + Math.ceil(Math.random() * 32) - 16),
  count: Math.floor(Math.random() * 10) + 10,
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
    offset,
    xStr,
    yStr,
    selectStr,
    selectRad,
  } = useControls("Simulation", simulationConfig);

  // States
  const [selected, setSelected] = useState<Topic | null>(null);
  const [nodes, setNodes] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >(data.map((d) => ({ ...d, color: topicColor(d.type || "SPORT") })));
  const [simulator, setSimulator] =
    useState<Simulation<SimulationNodeDatum, undefined>>();

  // Dimensions
  const margin = { top: 0, right: 16, bottom: 0, left: 16 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleTime()
    .domain(extent(data, (d) => d.timestamp) as [Date, Date])
    .range([0, innerWidth * 2]);

  // Layout Simulator
  useEffect(() => {
    const forceSim = forceSimulation();
    forceSim.nodes(nodes);
    forceSim.alpha(alpha).restart();
    setSimulator(forceSim);
    return () => {
      forceSim.stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update Layout Simulator
  useEffect(() => {
    if (simulator) {
      simulator
        .force(
          "forceX",
          forceX<Node>((d) => xScale(d.timestamp)).strength(xStr)
        )
        .force(
          "forceY",
          forceY<Node>(height / 2).strength(
            (d) => yStr + (d.type == selected ? selectStr : 0)
          )
        )
        .force(
          "collide",
          forceCollide<Node>()
            .strength(collisionStr)
            .radius(
              (d) =>
                ((d.count || 0) / Math.PI) * 2 +
                padding -
                (d.type == selected ? selectRad : 0)
            )
        );

      simulator.nodes(nodes);
      simulator.on("tick", () => {
        simulator.tick(1);
        setNodes([...simulator.nodes()]);
      });
      simulator.alpha(alpha).restart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    simulator,
    alpha,
    nodes,
    width,
    height,
    collisionStr,
    padding,
    selectStr,
    xStr,
    yStr,
    selected,
    selectRad,
  ]);

  // Data Update
  useEffect(() => {
    const updatedNodes = data.map((d) => {
      const existing = nodes.find((n) => n.id == d.id);
      if (existing) {
        return { ...existing, count: d.count };
      }
      return d;
    });
    setNodes(updatedNodes);
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full overflow-scroll">
      <Leva collapsed={true} />
      <svg width={width * 2} height={height} className="bg-accent">
        <g transform={`translate(${margin.left},${margin.top})`}>
          {nodes.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={((d?.count || 0) / Math.PI) * 2}
              opacity={selected ? (d.type == selected ? 1 : 0.2) : 0.8}
              fill={d?.color}
              stroke="black"
              strokeWidth={1}
              onClick={() =>
                setSelected(selected == d.type ? null : d.type || null)
              }
            />
          ))}
          <AxisBottom scale={xScale} top={height / 2 + offset} left={0} />
        </g>
      </svg>
    </div>
  );
};
