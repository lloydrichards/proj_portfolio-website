"use client";

import { useEffect, useRef, useState } from "react";
import { createLabScriptLoader } from "@/app/labs/load-lab-script";
import { loadP5 } from "@/app/labs/load-p5";
import { Button } from "@/components/atom/button";

type Point = { x: number; y: number };
type Body = { position: Point; angle: number };
type World = { bodies: Body[] };
type Engine = { world: World };
type Matter = {
  Engine: {
    create(): Engine;
    update(engine: Engine, delta: number): void;
    clear(engine: Engine): void;
  };
  Bodies: {
    rectangle(
      x: number,
      y: number,
      width: number,
      height: number,
      options: { isStatic?: boolean; restitution?: number },
    ): Body;
  };
  Composite: {
    add(world: World, body: Body): void;
    remove(world: World, body: Body): void;
    clear(world: World, keepStatic: boolean): void;
  };
};

const loadMatter = createLabScriptLoader(
  "/labs/vendor/matter-js-0.20.0/matter.min.js",
  () => (window as Window & { Matter?: Matter }).Matter,
);

const width = 400;
const height = 360;
const step = 1000 / 60;

export function PhysicsDemo() {
  const host = useRef<HTMLDivElement>(null);
  const addBox = useRef<(point: Point) => void>(null);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );

  useEffect(() => {
    const container = host.current;
    if (!running || !container) return;

    let active = true;
    let cleanup: (() => void) | undefined;

    void Promise.all([loadP5(), loadMatter()])
      .then(([P5, matter]) => {
        if (!active) return;

        const { Engine, Bodies, Composite } = matter;
        const engine = Engine.create();
        const ground = Bodies.rectangle(200, 300, 200, 25, { isStatic: true });
        Composite.add(engine.world, ground);

        const boxes = new Set<Body>();
        const spawn = ({ x, y }: Point) => {
          const box = Bodies.rectangle(x, y, 20, 20, { restitution: 0.9 });
          boxes.add(box);
          Composite.add(engine.world, box);
        };

        const sketch = new P5((p) => {
          let elapsed = 0;
          p.setup = () => {
            p.createCanvas(width, height);
            p.rectMode("center");
            p.noStroke();
            p.describe(
              "Small blue squares fall and bounce off a horizontal platform.",
            );
          };
          p.draw = () => {
            elapsed += Math.min(p.deltaTime, 4 * step);
            while (elapsed >= step) {
              Engine.update(engine, step);
              elapsed -= step;
            }
            p.background(51);
            p.fill(240);
            p.rect(ground.position.x, ground.position.y, 200, 25);
            p.fill("#93c5fd");
            for (const box of boxes) {
              const { x, y } = box.position;
              if (y > height + 40 || x < -40 || x > width + 40) {
                Composite.remove(engine.world, box);
                boxes.delete(box);
                continue;
              }
              p.push();
              p.translate(x, y);
              p.rotate(box.angle);
              p.rect(0, 0, 20, 20);
              p.pop();
            }
          };
        }, container);

        function dropAtPointer(event: PointerEvent) {
          if (
            event.button !== 0 ||
            !(event.target instanceof HTMLCanvasElement)
          )
            return;
          const bounds = event.target.getBoundingClientRect();
          spawn({
            x: ((event.clientX - bounds.left) / bounds.width) * width,
            y: ((event.clientY - bounds.top) / bounds.height) * height,
          });
        }

        addBox.current = spawn;
        container.addEventListener("pointerdown", dropAtPointer);
        cleanup = () => {
          container.removeEventListener("pointerdown", dropAtPointer);
          addBox.current = null;
          sketch.remove();
          Composite.clear(engine.world, false);
          Engine.clear(engine);
        };
        setStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setRunning(false);
        setStatus("error");
      });

    return () => {
      active = false;
      cleanup?.();
    };
  }, [running]);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <div
        ref={host}
        className="mx-auto max-w-[400px] [&_canvas]:block [&_canvas]:h-auto! [&_canvas]:w-full!"
      />
      <figcaption className="flex flex-wrap items-center gap-3 p-3">
        <Button
          type="button"
          onClick={() => {
            setStatus(running ? "idle" : "loading");
            setRunning(!running);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        {status === "ready" && (
          <Button
            type="button"
            variant="outline"
            onClick={() => addBox.current?.({ x: width / 2, y: 40 })}
          >
            Drop a box
          </Button>
        )}
        <span className="text-sm" role="status">
          {status === "error"
            ? "The sketch could not load. Run the demo to retry."
            : status === "loading"
              ? "Loading p5.js and Matter.js…"
              : "Click or tap the sketch to drop a box and watch it bounce."}
        </span>
      </figcaption>
    </figure>
  );
}
