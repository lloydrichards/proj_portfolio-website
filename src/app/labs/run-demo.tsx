"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/atom/button";

export function RunDemo({
  title,
  src,
  height,
  syncScroll = false,
}: {
  title: string;
  src: `/labs/${string}`;
  height: number | string;
  syncScroll?: boolean;
}) {
  const [running, setRunning] = useState(false);
  const viewportId = useId();
  const frame = useRef<HTMLIFrameElement>(null);

  const sendPageScroll = useCallback(() => {
    frame.current?.contentWindow?.postMessage(
      { type: "lab-scroll", y: window.scrollY },
      "*",
    );
  }, []);

  useEffect(() => {
    if (!running || !syncScroll) return;
    window.addEventListener("scroll", sendPageScroll, { passive: true });
    return () => window.removeEventListener("scroll", sendPageScroll);
  }, [running, syncScroll, sendPageScroll]);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-md border border-border">
      <figcaption className="flex items-center gap-3 border-b border-border/50 bg-muted/50 p-3">
        <Button
          type="button"
          aria-controls={viewportId}
          aria-expanded={running}
          className="w-28 shrink-0"
          onClick={() => setRunning(!running)}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        <span className="min-w-0 text-sm font-medium">{title}</span>
      </figcaption>
      <div id={viewportId} className="bg-muted/30" style={{ height }}>
        {running ? (
          <iframe
            ref={frame}
            title={title}
            sandbox="allow-scripts"
            src={src}
            onLoad={syncScroll ? sendPageScroll : undefined}
            className="block size-full border-0"
          />
        ) : (
          <p className="grid size-full place-items-center p-4 text-center text-sm text-muted-foreground">
            Select Run demo to load the interactive example.
          </p>
        )}
      </div>
    </figure>
  );
}
