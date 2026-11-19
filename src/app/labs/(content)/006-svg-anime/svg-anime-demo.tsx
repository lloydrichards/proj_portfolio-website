"use client";

import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type Anime, loadAnime } from "@/app/labs/load-anime";
import { Button } from "@/components/atom/button";

const firstPath =
  "M 200 100 Q 200 100 200 350 Q 200 450 250 450 Q 300 450 300 350 C 300 300 300 250 300 200 L 400 200 A 50 50 0 1 1 400 450";
const secondPath =
  "M 350 450 Q 300 450 300 500 Q 300 550 350 550 L 500 550 Q 600 550 600 450 L 600 350 C 600 250 500 250 500 350 Q 500 400 450 400 L 200 400 Q 100 400 100 300 Q 100 200 200 200 Q 250 200 250 250 Q 250 300 200 300 Q 150 300 150 250 L 150 100";

type PathRef = RefObject<SVGPathElement | null>;

function followPath(anime: Anime, element: SVGPathElement) {
  const path = anime.path(element);
  return {
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
  };
}

function Timeline({
  anime,
  first,
  second,
}: {
  anime: Anime;
  first: PathRef;
  second: PathRef;
}) {
  const marker = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!marker.current || !first.current || !second.current) return;

    const animation = anime.timeline({
      easing: "linear",
      loop: true,
      autoplay: false,
    });
    animation
      .add({
        targets: marker.current,
        ...followPath(anime, first.current),
        fill: "#ff6347",
        duration: 5000,
      })
      .add({
        targets: marker.current,
        ...followPath(anime, second.current),
        fill: "#add8e6",
        duration: 8000,
      });
    animation.play();

    return () => animation.pause();
  }, [anime, first, second]);

  return (
    <g ref={marker} fill="#ff6347">
      <rect x={-12.5} y={-12.5} width={25} height={25} />
    </g>
  );
}

function PathFollower({
  anime,
  id,
  path,
  shape,
  onComplete,
}: {
  anime: Anime;
  id: number;
  path: PathRef;
  shape: "box" | "circle";
  onComplete?: (id: number) => void;
}) {
  const marker = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!marker.current || !path.current) return;

    let active = true;
    const animation = anime({
      targets: marker.current,
      ...followPath(anime, path.current),
      duration: shape === "box" ? 5000 : 8000,
      easing: "linear",
      complete: () => {
        if (active) onComplete?.(id);
      },
    });

    return () => {
      active = false;
      animation.pause();
    };
  }, [anime, id, path, shape, onComplete]);

  return (
    <g ref={marker}>
      {shape === "box" ? (
        <rect x={-12.5} y={-12.5} width={25} height={25} fill="pink" />
      ) : (
        <circle r={12.5} fill="lightblue" />
      )}
    </g>
  );
}

export function SvgAnimeDemo({
  example,
}: {
  example: "timeline" | "add" | "independent" | "sequence";
}) {
  const [running, setRunning] = useState(false);
  const [anime, setAnime] = useState<Anime>();
  const [loadFailed, setLoadFailed] = useState(false);
  const [boxes, setBoxes] = useState<number[]>([]);
  const [circles, setCircles] = useState<number[]>([]);
  const first = useRef<SVGPathElement>(null);
  const second = useRef<SVGPathElement>(null);
  const timeline = example === "timeline";
  const sequence = example === "sequence";

  useEffect(() => {
    if (!running) return;

    let active = true;
    loadAnime().then(
      (library) => {
        if (active) setAnime(() => library);
      },
      () => {
        if (active) {
          setLoadFailed(true);
          setRunning(false);
        }
      },
    );

    return () => {
      active = false;
    };
  }, [running]);

  const addCircle = useCallback((id: number) => {
    setCircles((current) => [...current, id]);
  }, []);

  return (
    <div className="my-6 space-y-3 rounded-md border p-4">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          onClick={() => {
            setLoadFailed(false);
            setRunning(!running);
            setBoxes([]);
            setCircles([]);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        {!timeline && (
          <Button
            type="button"
            variant="outline"
            disabled={!running || !anime}
            onClick={() => setBoxes((current) => [...current, current.length])}
          >
            {sequence ? "Add Box 2" : "Add Box 1"}
          </Button>
        )}
      </div>
      {running && !anime && <p role="status">Loading Anime.js…</p>}
      {loadFailed && <p role="status">Could not load Anime.js.</p>}
      <svg
        viewBox={timeline || sequence ? "75 75 550 500" : "175 75 300 400"}
        className="mx-auto block max-h-96 w-full rounded-sm bg-muted"
        aria-hidden="true"
      >
        <path
          ref={first}
          d={firstPath}
          fill="none"
          strokeWidth={2}
          className={
            timeline
              ? "stroke-red-500"
              : sequence
                ? "stroke-blue-700 dark:stroke-blue-400"
                : "stroke-green-600 dark:stroke-green-400"
          }
        />
        {(timeline || sequence) && (
          <path
            ref={second}
            d={secondPath}
            fill="none"
            strokeWidth={2}
            className={timeline ? "stroke-blue-500" : "stroke-pink-500"}
          />
        )}
        {/* Anime.js reports path coordinates relative to the viewBox origin. */}
        <g
          transform={
            timeline || sequence ? "translate(75 75)" : "translate(175 75)"
          }
        >
          {running && anime && timeline && (
            <Timeline anime={anime} first={first} second={second} />
          )}
          {running &&
            anime &&
            boxes.map((id) => (
              <PathFollower
                key={id}
                anime={anime}
                id={id}
                path={first}
                shape="box"
                onComplete={sequence ? addCircle : undefined}
              />
            ))}
          {running &&
            anime &&
            circles.map((id) => (
              <PathFollower
                key={`circle-${id}`}
                anime={anime}
                id={id}
                path={second}
                shape="circle"
              />
            ))}
        </g>
      </svg>
    </div>
  );
}
