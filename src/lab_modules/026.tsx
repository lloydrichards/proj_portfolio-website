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

export const OptimizedNestedBubblePacking: FC<Props> = ({
  data,
  width = 680,
  height = 600,
}) => {
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
    data.map((d) => ({ ...d, color: topicColor(d.type || "SPORT") })),
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
    const layoutSim = forceSimulation().force(
      "collide",
      forceCollide<Node>()
        .strength(1)
        .radius((d) => (d.count || 0) / Math.PI + 56),
    );

    layoutSim.on("tick", () => {
      layoutSim.tick(1);
      setLayout([...layoutSim.nodes()]);
    });
    layoutSim.nodes(topics);

    layoutSim.alpha(0.8).restart();
    setLayoutSimulator(layoutSim);

    return () => {
      layoutSim.stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update Layout Simulator
  useEffect(() => {
    if (layoutSimulator) {
      layoutSimulator
        .force("forceX", forceX(width / 2))
        .force("forceY", forceY(height / 2));

      layoutSimulator.nodes(topics);
      layoutSimulator.on("tick", () => {
        layoutSimulator.tick(1);
        setLayout([...layoutSimulator.nodes()]);
      });
      layoutSimulator.alpha(0.8).restart();
    }
  }, [layoutSimulator, topics, width, height]);

  // Node Simulator
  useEffect(() => {
    const nodeSim = forceSimulation().force(
      "collide",
      forceCollide<Node>()
        .strength(1)
        .radius((d) => d.count + 10),
    );
    nodeSim.nodes(dataNodes);
    setNodeSimulator(nodeSim);

    return () => {
      nodeSim.stop();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update Node Simulator
  useEffect(() => {
    if (nodeSimulator) {
      nodeSimulator
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
        );
      nodeSimulator.nodes(dataNodes);
      nodeSimulator.on("tick", () => {
        nodeSimulator.tick(1);
        setNodes([...nodeSimulator.nodes()]);
      });
      nodeSimulator.alpha(0.8).restart();
    }
  }, [nodeSimulator, layout, dataNodes]); // eslint-disable-line react-hooks/exhaustive-deps

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
      })),
    );
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full overflow-scroll">
      <svg width={width} height={height} className="bg-accent">
        {layout.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={(d?.count || 0) / Math.PI + 44}
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

const simpleButton = {
  backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "8px 16px",
  borderRadius: "5px",
  margin: "0px 2px",
  cursor: "pointer",
};

export const BubbleMachine = () => {
  const [data, setData] = useState<Node[]>(MockBubbles);
  const [idx, setIdx] = useState<number>(MockBubbles.length);
  const [width, setWidth] = useState(680);
  const [height] = useState(600);

  const addBubble = () => {
    setIdx(idx + 1);
    const newTopic = randomTopic();
    setData([
      ...data,
      {
        id: `node-${idx + 1}`,
        type: newTopic,
        x: width,
        y: height / 2,
        count: Math.ceil(Math.random() * 10),
        color: topicColor(newTopic),
      },
    ]);
  };

  const removeBubble = () => {
    setData(data.slice(0, data.length - 1));
  };

  const updateBubble = () => {
    const last = data[data.length - 1];
    setData([
      ...data.slice(0, data.length - 1),
      { ...last, count: last.count + Math.ceil(Math.random() * 5) },
    ]);
  };

  return (
    <div>
      <button style={simpleButton} onClick={addBubble}>
        Add Bubble
      </button>
      <button style={simpleButton} onClick={removeBubble}>
        Remove Bubble
      </button>
      <button style={simpleButton} onClick={updateBubble}>
        Update Bubble
      </button>
      <div className="my-4">
        <OptimizedNestedBubblePacking
          data={data}
          width={width}
          height={height}
        />
      </div>
      <button style={simpleButton} onClick={() => setWidth(width + 50)}>
        Increase Width
      </button>
      <button style={simpleButton} onClick={() => setWidth(width - 50)}>
        Decrease Width
      </button>
    </div>
  );
};
