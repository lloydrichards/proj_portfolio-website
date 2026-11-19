import { createRoot } from "react-dom/client";
import { MockBubbles, OptimizedNestedBubblePacking } from "./nested-bubbles";

const root = document.getElementById("demo");
if (root)
  createRoot(root).render(<OptimizedNestedBubblePacking data={MockBubbles} />);
