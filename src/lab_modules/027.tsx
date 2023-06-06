import {
  Simulation,
  SimulationNodeDatum,
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  sum,
} from "d3";
import { FC, useEffect, useState } from "react";
import { useControls, folder } from "leva";

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

export const OptimizedNestedBubblePacking: FC<Props> = ({ data }) => {
  const { width, height } = useControls("Container", {
    width: {
      value: 680,
      min: 0,
      max: 1000,
      step: 1,
    },
    height: {
      value: 600,
      min: 0,
      max: 1000,
      step: 1,
    },
  });
  const { padding, collisionStr, nodeRad, nodeStr, alpha } = useControls(
    "Simulation",
    {
      "Layout Force": folder({
        collisionStr: {
          value: 1,
          min: 0,
          max: 1,
        },
        padding: {
          value: 20,
          min: -24,
          max: 56,
        },
      }),
      "Node Force": folder({
        nodeStr: {
          value: 1,
          min: 0,
          max: 1,
        },
        nodeRad: {
          value: 12,
          min: 0,
          max: 56,
        },
      }),
      alpha: {
        value: 0.8,
        min: 0,
        max: 1,
      },
    }
  );
  const [topics, setTopics] = useState([
    {
      id: "root-SPORT",
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      type: "SPORT",
      color: topicColor("SPORT"),
      count: sum(data, (d) => (d.type == "SPORT" ? d.count : 0)),
    },
    {
      id: "root-NEWS",
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      type: "NEWS",
      color: topicColor("NEWS"),
      count: sum(data, (d) => (d.type == "NEWS" ? d.count : 0)),
    },
    {
      id: "root-MEDIA",
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      type: "MEDIA",
      color: topicColor("MEDIA"),
      count: sum(data, (d) => (d.type == "MEDIA" ? d.count : 0)),
    },
  ]);
  const [dataNodes, setDataNodes] = useState<Node[]>(
    data.map((d) => ({ ...d, color: topicColor(d.type || "SPORT") }))
  );
  const [layout, setLayout] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >([]);
  const [nodes, setNodes] = useState<
    Array<SimulationNodeDatum & Partial<Node>>
  >([]);
  const [layoutSimulator, setLayoutSimulator] =
    useState<Simulation<SimulationNodeDatum, undefined>>();
  const [nodeSimulator, setNodeSimulator] =
    useState<Simulation<SimulationNodeDatum, undefined>>();

  // Layout Simulator
  useEffect(() => {
    const layoutSim = forceSimulation();
    layoutSim.nodes(topics);
    layoutSim.alpha(alpha).restart();
    setLayoutSimulator(layoutSim);
    return () => {
      layoutSim.stop();
    };
  }, []);

  // Update Layout Simulator
  useEffect(() => {
    if (layoutSimulator) {
      layoutSimulator
        .force("forceX", forceX(width / 2))
        .force("forceY", forceY(height / 2))
        .force(
          "collide",
          forceCollide<Node>()
            .strength(collisionStr)
            .radius(
              (d) => (d.count || 0) / Math.PI + nodeRad * Math.PI * 2 + padding
            )
        );

      layoutSimulator.nodes(topics);
      layoutSimulator.on("tick", () => {
        layoutSimulator.tick(1);
        setLayout([...layoutSimulator.nodes()]);
      });
      layoutSimulator.alpha(alpha).restart();
    }
  }, [
    layoutSimulator,
    alpha,
    topics,
    width,
    height,
    collisionStr,
    nodeRad,
    padding,
  ]);

  // Node Simulator
  useEffect(() => {
    const nodeSim = forceSimulation();
    nodeSim.nodes(dataNodes);
    setNodeSimulator(nodeSim);
    return () => {
      nodeSim.stop();
    };
  }, []);

  // Update Node Simulator
  useEffect(() => {
    if (nodeSimulator) {
      nodeSimulator
        .force(
          "forceX",
          forceX<SimulationNodeDatum & Partial<Node>>(
            (d) => layout.find((e) => e.type == d.type)?.x || width / 2
          )
        )
        .force(
          "forceY",
          forceY<SimulationNodeDatum & Partial<Node>>(
            (d) => layout.find((e) => e.type == d.type)?.y || width / 2
          )
        )
        .force(
          "collide",
          forceCollide<Node>()
            .strength(nodeStr)
            .radius((d) => d.count + nodeRad)
        );
      nodeSimulator.nodes(dataNodes);
      nodeSimulator.on("tick", () => {
        nodeSimulator.tick(1);
        setNodes([...nodeSimulator.nodes()]);
      });
      nodeSimulator.alpha(alpha).restart();
    }
  }, [nodeSimulator, layout, alpha, dataNodes, nodeStr, nodeRad]);

  // Data Update
  useEffect(() => {
    const updatedNodes = data.map((d) => {
      const existing = dataNodes.find((n) => n.id == d.id);
      if (existing) {
        return { ...existing, count: d.count };
      }
      return d;
    });
    setDataNodes(updatedNodes);
    setTopics(
      topics.map((t) => ({
        ...t,
        count: sum(updatedNodes, (d) => (d.type == t.type ? d.count : 0)),
      }))
    );
  }, [data]);

  return (
    <div className="w-full overflow-scroll">
      <svg width={width} height={height} className="bg-accent">
        {layout.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={(d?.count || 0) / Math.PI + nodeRad * Math.PI * 2}
            opacity={0.2}
            fill={d?.color}
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
