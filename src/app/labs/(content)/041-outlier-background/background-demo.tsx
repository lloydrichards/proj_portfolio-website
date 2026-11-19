"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/atom/button";

export function BackgroundDemo() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = canvas.current;
    if (!running || !element) return;
    let active = true;
    let stop: (() => void) | undefined;
    void import("./background")
      .then(({ startBackground }) => {
        if (!active) return;
        stop = startBackground(element);
        setMessage(stop ? "" : "This browser could not start WebGL 2.");
      })
      .catch(() => {
        if (active) setMessage("The 3D scene could not start.");
      });
    return () => {
      active = false;
      stop?.();
    };
  }, [running]);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <figcaption className="flex flex-wrap items-center gap-3 p-3">
        <Button
          type="button"
          onClick={() => {
            setMessage(running ? "" : "Loading the 3D scene…");
            setRunning(!running);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        {message && (
          <span role="status" className="text-sm">
            {message}
          </span>
        )}
      </figcaption>
      {running && (
        <canvas
          ref={canvas}
          aria-label="Animated Outlier conference background"
          className="block h-112 w-full bg-[#100e0f]"
        />
      )}
    </figure>
  );
}
