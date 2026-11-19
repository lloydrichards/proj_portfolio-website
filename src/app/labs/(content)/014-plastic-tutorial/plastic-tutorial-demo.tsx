"use client";

import { useEffect, useRef, useState } from "react";
import { loadAnime } from "@/app/labs/load-anime";
import { Button } from "@/components/atom/button";

const ASSET_PATH = "/labs/014-plastic-tutorial";
const straightPath = {
  d: "M165.67 43.945v162.731",
  x: 165.67,
  y: 43.945,
  easing: "easeOutBounce",
};
const recyclingPath = {
  d: "M165.67 43.945V162.48c0 11.046 9.076 20 20.121 20v0c11.046 0 20.122-8.954 20.122-20V63.945c0-11.045-8.955-20-20-20h-17.369",
  x: 165.67,
  y: 43.945,
  easing: "linear",
};

const examples = [
  {
    title: "Make, consume, trash",
    image: "example1.svg",
    paths: [
      {
        ...straightPath,
        d: "M165.848 43.105v162.731",
        x: 165.848,
        y: 43.105,
        delay: 1000,
      },
    ],
  },
  {
    title: "Ideal recycling loop",
    image: "example2.svg",
    paths: [{ ...recyclingPath, delay: 0 }],
  },
  {
    title: "Recycling with losses",
    image: "example3.svg",
    paths: [
      { ...recyclingPath, delay: 1000 },
      { ...straightPath, delay: 3000 },
    ],
  },
];

export function PlasticTutorialDemo() {
  const diagrams = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "running" | "error"
  >("idle");

  useEffect(() => {
    if (!enabled || !diagrams.current) return;

    const motions =
      diagrams.current.querySelectorAll<SVGGElement>("[data-motion]");
    const cleanups: (() => void)[] = [];
    let cancelled = false;

    async function start() {
      try {
        const anime = await loadAnime();
        if (cancelled) return;

        for (const motion of motions) {
          const pathElement = motion.querySelector("path");
          const bottle = motion.querySelector<SVGGElement>("[data-bottle]");
          if (!pathElement || !bottle) continue;

          const path = anime.path(pathElement);
          const animation = anime({
            targets: bottle,
            translateX: path("x"),
            translateY: path("y"),
            rotate: path("angle"),
            duration: pathElement.getTotalLength() / 0.05,
            delay: Number(motion.dataset.delay),
            easing: motion.dataset.easing,
            loop: true,
          });
          cleanups.push(() => {
            animation.pause();
            anime.remove(bottle);
            bottle.style.removeProperty("transform");
          });
        }
        setStatus("running");
      } catch {
        if (cancelled) return;
        setStatus("error");
        setEnabled(false);
      }
    }

    void start();

    return () => {
      cancelled = true;
      for (const cleanup of cleanups) cleanup();
    };
  }, [enabled]);

  return (
    <div className="not-prose my-6 space-y-4">
      <Button
        type="button"
        onClick={() => {
          setStatus(enabled ? "idle" : "loading");
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Stop demo" : "Run demo"}
      </Button>
      {status === "loading" && <p role="status">Loading animation…</p>}
      {status === "error" && (
        <p role="status">
          The animation could not load. Run the demo to retry.
        </p>
      )}
      <div ref={diagrams} className="grid gap-4 sm:grid-cols-3">
        {examples.map(({ title, image, paths }) => (
          <figure key={image}>
            <svg
              viewBox="0 0 226 251"
              aria-hidden="true"
              className="h-auto w-full rounded-md bg-white"
            >
              <image href={`${ASSET_PATH}/${image}`} width="226" height="251" />
              {paths.map(({ d, x, y, easing, delay }) => (
                <g
                  key={d}
                  data-motion=""
                  data-easing={easing}
                  data-delay={delay}
                >
                  <path d={d} fill="none" />
                  <g
                    data-bottle=""
                    transform={`translate(${x} ${y}) rotate(90)`}
                  >
                    <image
                      href={`${ASSET_PATH}/bottle.svg`}
                      x="-10"
                      y="-10"
                      width="21"
                      height="21"
                    />
                  </g>
                </g>
              ))}
            </svg>
            <figcaption className="mt-2 text-center text-sm">
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
