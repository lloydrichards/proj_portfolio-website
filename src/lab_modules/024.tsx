import {
  Simulation,
  SimulationNodeDatum,
  forceCollide,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
} from "d3";
import { FC, useEffect, useState } from "react";

const simulation = forceSimulation();

type Node = {
  id: string;
  x?: number;
  y?: number;
  count: number;
  color?: string;
};

interface Props {
  data: Array<Node>;
  width: number;
  height: number;
}

export const MockBubbles: Node[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `node-${i}`,
  x: Math.floor(Math.random() * 500) + 1,
  y: Math.floor(Math.random() * 500) + 1,
  count: Math.floor(Math.random() * 24) + 4,
}));

const randomColor = () => {
  // create list of accessible colors
  const colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const BubblePacking: FC<Props> = ({
  data,
  width = 680,
  height = 500,
}) => {
  const [renderCounter, setRenderCounter] = useState(0);
  const [items, setItems] = useState<Array<Node>>([]);

  function endSimulation() {
    setRenderCounter((count) => count + 1);
  }

  function updateSimulation() {
    setRenderCounter((count) => count + 1);
    simulation.tick(1);
  }

  useEffect(() => {
    const nodes = data.map((d) => ({ ...d, color: randomColor() }));
    setItems(nodes);

    simulation
      .force("forceX", forceX(width / 2))
      .force("forceY", forceY(height / 2))
      .force("charge", forceManyBody())
      .force(
        "collide",
        forceCollide<Node>()
          .strength(0.1)
          .radius((d) => d.count + 10),
      )
      .on("tick", updateSimulation)
      .on("end", endSimulation)
      .nodes(nodes)
      .alpha(0.5)
      .restart();
  }, [data, width, height]);

  return (
    <div className="w-full overflow-scroll">
      <svg width={width} height={height} className="bg-accent">
        {items.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.count + 5}
            fill={d.color}
            stroke="black"
            strokeWidth={1}
          />
        ))}
      </svg>
    </div>
  );
};

export const BubblePacking2: FC<Props> = ({
  data,
  width = 680,
  height = 500,
}) => {
  const [layout, setLayout] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >([]);

  useEffect(() => {
    const simulation = forceSimulation()
      .alphaMin(0.1)
      .force("forceX", forceX(width / 2))
      .force("forceY", forceY(height / 2))
      .force("charge", forceManyBody())
      .force(
        "collide",
        forceCollide<Node>()
          .strength(0.5)
          .radius((d) => d.count + 10),
      );

    simulation.on("tick", () => {
      simulation.tick(1);
      setLayout([...simulation.nodes()]);
    });
    simulation.nodes([...data.map((d) => ({ ...d, color: randomColor() }))]);

    simulation.alpha(0.5).restart();

    return () => {
      simulation.stop();
    };
  }, [data, width, height]);

  return (
    <div className="w-full overflow-scroll">
      <svg width={width} height={height} className="bg-accent">
        {layout.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={(d?.count || 0) + 5}
            fill={d.color}
            stroke="black"
            strokeWidth={1}
          />
        ))}
      </svg>
    </div>
  );
};
