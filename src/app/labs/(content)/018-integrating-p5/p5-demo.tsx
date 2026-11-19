"use client";

import { useEffect, useRef, useState } from "react";
import { loadP5, type P5 } from "@/app/labs/load-p5";
import { Button } from "@/components/atom/button";

type Sketch = "random-walk" | "particles";
type Size = [width: number, height: number];

const descriptions = {
  "random-walk":
    "A white circle takes small random steps, leaving a trail on a black background.",
  particles:
    "Orange particles bounce off the edges. Faint lines connect particles that move close together.",
};

function randomWalk(p: P5, size: () => Size) {
  let x = 0;
  let y = 0;
  p.setup = () => {
    p.createCanvas(...size());
    p.describe(descriptions["random-walk"]);
    p.background(0);
    x = p.width / 2;
    y = p.height / 2;
  };
  p.draw = () => {
    if (x < 0 || x > p.width || y < 0 || y > p.height) {
      x = p.width / 2;
      y = p.height / 2;
    }
    p.noStroke();
    p.fill(255, 255, 255, 25);
    p.circle(x, y, 48);
    x += p.random(-10, 10);
    y += p.random(-10, 10);
  };
}

function bouncingParticles(p: P5, size: () => Size) {
  const createParticle = () => ({
    x: p.random(0, p.width),
    y: p.random(0, p.height),
    diameter: p.random(1, 8),
    xSpeed: p.random(-2, 2),
    ySpeed: p.random(-1, 1.5),
  });

  let particles: ReturnType<typeof createParticle>[] = [];
  p.setup = () => {
    p.createCanvas(...size());
    p.describe(descriptions.particles);
    particles = Array.from({ length: 100 }, createParticle);
  };
  p.draw = () => {
    p.background("#0f0f0f");
    for (const [index, particle] of particles.entries()) {
      p.noStroke();
      p.fill("tomato");
      p.circle(particle.x, particle.y, particle.diameter);

      particle.x += particle.xSpeed;
      particle.y += particle.ySpeed;
      if (particle.x <= 0 || particle.x >= p.width) {
        particle.x = Math.min(p.width, Math.max(0, particle.x));
        particle.xSpeed *= -1;
      }
      if (particle.y <= 0 || particle.y >= p.height) {
        particle.y = Math.min(p.height, Math.max(0, particle.y));
        particle.ySpeed *= -1;
      }

      for (const neighbor of particles.slice(index + 1)) {
        if (p.dist(particle.x, particle.y, neighbor.x, neighbor.y) < 85) {
          p.stroke("rgba(255,255,255,0.25)");
          p.line(particle.x, particle.y, neighbor.x, neighbor.y);
        }
      }
    }
  };
}

export function P5Demo({ sketch }: { sketch: Sketch }) {
  const host = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );

  useEffect(() => {
    const container = host.current;
    if (!running || !container) return;

    const size = (): Size => {
      const width = Math.max(1, container.clientWidth);
      return [width, Math.max(180, Math.round(width / 2))];
    };

    let active = true;
    let cleanup: (() => void) | undefined;
    void loadP5()
      .then((library) => {
        if (!active) return;

        const draw = sketch === "random-walk" ? randomWalk : bouncingParticles;
        const instance = new library((p) => draw(p, size), container);
        const observer = new ResizeObserver(() => {
          const [width, height] = size();
          if (
            container.querySelector("canvas") &&
            (width !== instance.width || height !== instance.height)
          ) {
            instance.resizeCanvas(width, height, true);
          }
        });
        observer.observe(container);
        cleanup = () => {
          observer.disconnect();
          instance.remove();
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
  }, [running, sketch]);

  const label = sketch === "random-walk" ? "random walk" : "particle sketch";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <div className="w-full [&_canvas]:block" ref={host} />
      <figcaption className="flex flex-wrap items-center gap-3 p-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setStatus(running ? "idle" : "loading");
            setRunning(!running);
          }}
        >
          {running ? "Stop" : "Run"} {label}
        </Button>
        <span className="text-sm" role="status">
          {status === "error"
            ? "The sketch could not load. Run it again to retry."
            : status === "loading"
              ? "Loading p5.js…"
              : descriptions[sketch]}
        </span>
      </figcaption>
    </figure>
  );
}
