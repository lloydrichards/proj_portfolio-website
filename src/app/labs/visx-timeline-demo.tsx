"use client";

import { useState } from "react";
import { Button } from "@/components/atom/button";

export function VisxTimelineDemo({ mode }: { mode: "brush" | "playback" }) {
  const [running, setRunning] = useState(false);
  const title = mode === "brush" ? "Brushable timeline" : "Timeline playback";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <figcaption className="flex items-center gap-3 p-3">
        <Button type="button" onClick={() => setRunning(!running)}>
          {running ? "Close demo" : "Run demo"}
        </Button>
        <span>{title}</span>
      </figcaption>
      {running && (
        <iframe
          title={title}
          sandbox="allow-scripts"
          src={`/labs/visx-timeline/index.html?mode=${mode}`}
          className="block h-67 w-full border-0 border-t"
        />
      )}
    </figure>
  );
}
