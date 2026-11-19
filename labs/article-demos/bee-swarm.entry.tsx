import { createRoot } from "react-dom/client";
import { BeeSwarmChart, MockBubbles } from "./bee-swarm";

const root = document.getElementById("demo");
if (root)
  createRoot(root).render(
    <BeeSwarmChart width={600} height={400} data={MockBubbles} />,
  );
