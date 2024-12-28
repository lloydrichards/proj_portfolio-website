"use client";
import {
  SimulationNodeDatum,
  forceCollide,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  sum,
} from "d3";
import { FC, useEffect, useState } from "react";

type Topic = "SPORT" | "NEWS" | "MEDIA";
type Node = {
  id: string;
  x: number;
  y: number;
  count: number;
  type?: Topic;
  color?: string;
};

interface Props {
  data: Array<Node>;
  width: number;
  height: number;
}

const randomTopic = () => {
  const types: Topic[] = ["SPORT", "NEWS", "MEDIA"];
  const randomIdx = Math.floor(Math.random() * types.length);
  return types[randomIdx];
};
export const MockBubbles: Node[] = Array.from({ length: 25 }).map((_, i) => ({
  id: `node-${i}`,
  x: Math.floor(Math.random() * 500) + 1,
  y: Math.floor(Math.random() * 500) + 1,
  count: Math.floor(Math.random() * 24) + 4,
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

export const NestedBubblePacking: FC<Props> = ({
  data,
  width = 680,
  height = 600,
}) => {
  const [layout, setLayout] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >([]);
  const [nodes, setNodes] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >([]);

  // Layout Simulator
  useEffect(() => {
    const topics = [
      {
        id: "root-SPORT",
        x: width / 2,
        y: height / 2,
        type: "SPORT",
        color: topicColor("SPORT"),
        count: sum(data, (d) => (d.type == "SPORT" ? d.count : 0)),
      },
      {
        id: "root-NEWS",
        x: width / 2,
        y: height / 2,
        type: "NEWS",
        color: topicColor("NEWS"),
        count: sum(data, (d) => (d.type == "NEWS" ? d.count : 0)),
      },
      {
        id: "root-MEDIA",
        x: width / 2,
        y: height / 2,
        type: "MEDIA",
        color: topicColor("MEDIA"),
        count: sum(data, (d) => (d.type == "MEDIA" ? d.count : 0)),
      },
    ];
    const layoutSim = forceSimulation()
      .alphaMin(0.1)
      .force("forceX", forceX(width / 2))
      .force("forceY", forceY(height / 2))
      .force("charge", forceManyBody())
      .force(
        "collide",
        forceCollide<Node>()
          .strength(0.5)
          .radius((d) => ((d.count || 0) / Math.PI) * 2.2 + 24),
      );

    layoutSim.on("tick", () => {
      layoutSim.tick(1);
      setLayout([...layoutSim.nodes()]);
    });
    layoutSim.nodes(topics);

    layoutSim.alpha(0.2).restart();

    return () => {
      layoutSim.stop();
    };
  }, [data, width, height]);

  // Node Simulator
  useEffect(() => {
    const nodeSim = forceSimulation()
      .alphaMin(0.1)
      .force(
        "forceX",
        forceX<SimulationNodeDatum & Partial<Node>>(
          (d) => layout.find((e) => e.type == d.type)?.x || width / 2,
        ),
      )
      .force(
        "forceY",
        forceY<SimulationNodeDatum & Partial<Node>>(
          (d) => layout.find((e) => e.type == d.type)?.y || width / 2,
        ),
      )
      .force("charge", forceManyBody())
      .force(
        "collide",
        forceCollide<Node>()
          .strength(0.5)
          .radius((d) => d.count + 10),
      );

    nodeSim.on("tick", () => {
      nodeSim.tick(1);
      setNodes([...nodeSim.nodes()]);
    });
    nodeSim.nodes([
      ...data.map((d) => ({ ...d, color: topicColor(d.type || "SPORT") })),
    ]);

    nodeSim.alpha(0.8).restart();

    return () => {
      nodeSim.stop();
    };
  }, [data, layout, width, height]);

  return (
    <div className="w-full overflow-scroll">
      <svg width={width} height={height} className="bg-accent">
        {layout.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={((d?.count || 0) / Math.PI) * 2.2 + 16}
            fill="none"
            opacity={0.8}
            stroke={d?.color}
            strokeWidth={2}
          />
        ))}
        {nodes.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={(d?.count || 0) + 5}
            fill={d?.color}
            stroke="black"
            strokeWidth={1}
          />
        ))}
      </svg>
    </div>
  );
};
