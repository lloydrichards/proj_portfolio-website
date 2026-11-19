"use client";

import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  type Anime,
  type AnimeAnimation,
  loadAnime,
} from "@/app/labs/load-anime";
import { Button } from "@/components/atom/button";

type Route =
  | "garbage"
  | "grind1"
  | "grind2"
  | "pellet1"
  | "pellet2"
  | "product1"
  | "product2"
  | "product3";

const routes: Record<
  Route,
  { path: string; color: string; next: [Route, ...Route[]] }
> = {
  garbage: {
    path: "M323 1012v150.01c0 16.57 13.431 29.99 30 29.99h41.5c16.569 0 30 13.43 30 30v85",
    color: "#3b82f6",
    next: ["grind1", "grind2"],
  },
  grind1: {
    path: "M426 1331.5V1448c0 16.57-13.431 30-30 30H221c-16.569 0-30 13.43-30 30v138.5c0 16.57 13.431 30 30 30h175c16.569 0 30 13.43 30 30v129",
    color: "#ec4899",
    next: ["pellet2"],
  },
  grind2: {
    path: "M436 1317h74c16.569 0 30 13.43 30 30v52.5c0 16.57-13.431 30-30 30H384c-16.569 0-30 13.43-30 30v94c0 16.57 13.431 30 30 30h126c16.569 0 30 13.43 30 30V1838",
    color: "#22c55e",
    next: ["pellet1"],
  },
  pellet1: {
    path: "M540 1847.5v9.5c0 16.57 13.431 30 30 30h72c16.569 0 30-13.43 30-30V320.5c0-16.569-13.431-30-30-30H239.5c-16.569 0-30 13.431-30 30v123",
    color: "#3b82f6",
    next: ["product1"],
  },
  pellet2: {
    path: "M426 1847.5v40.5c0 16.57 13.431 30 30 30h217c16.569 0 30-13.43 30-30V287.5c0-16.569-13.431-30-30-30H456c-16.569 0-30 13.431-30 30v156",
    color: "#f97316",
    next: ["product2", "product3"],
  },
  product1: {
    path: "M211.5 466v110.5c0 16.569-13.431 30-30 30h-31c-16.569 0-30 13.431-30 30v223c0 16.569 13.431 30 30 30H196c16.569 0 30 13.431 30 30V935",
    color: "#a855f7",
    next: ["garbage"],
  },
  product2: {
    path: "M426 495v32c0 16.569-13.431 30-30 30h-28.5c-16.569 0-30 13.431-30 30v145.5",
    color: "#ef4444",
    next: ["garbage"],
  },
  product3: {
    path: "M426 470h119c16.569 0 30 13.431 30 30v109.5c0 9.665-7.835 17.5-17.5 17.5v0c-9.665 0-17.5 7.835-17.5 17.5v88",
    color: "#f97316",
    next: ["garbage"],
  },
};

const wastePaths = [
  "M409.5 472.5h-15.75c-14.774 0-26.75 11.976-26.75 26.75v0c0 14.774-11.976 26.75-26.75 26.75H283c-16.569 0-30 13.431-30 30v241c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30v1102",
  "M193 456h-1c-16.569 0-30 13.431-30 30v5.5c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30V1954",
  "M528 734.5h-9c-16.569 0-30 13.431-30 30V870c0 16.569-13.431 30-30 30H314c-16.569 0-30 13.431-30 30v306c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v661.5",
  "M320 736h-7.5c-16.569 0-30 13.431-30 30v471.5c0 16.57-13.431 30-30 30h-176c-16.569 0-30 13.43-30 30v660",
  "M212.5 936H202c-16.569 0-30 13.431-30 30v272c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v662.5",
  "M407.5 1320h-331c-16.569 0-30 13.43-30 30v610.5",
  "M523 1847h-11.5c-10.77 0-19.5 8.73-19.5 19.5v0c0 10.77-8.73 19.5-19.5 19.5h-396c-16.569 0-30 13.43-30 30v43",
  "M411 1843.5H76.5c-16.569 0-30 13.43-30 30v80.5",
];

const velocity = 0.25;

type Piece = {
  id: number;
  route: Route;
};

function MovingPiece({
  anime,
  diagram,
  paused,
  piece,
  advance,
}: {
  anime: Anime;
  diagram: RefObject<SVGSVGElement | null>;
  paused: boolean;
  piece: Piece;
  advance: (piece: Piece) => void;
}) {
  const target = useRef<SVGGElement>(null);
  const animation = useRef<AnimeAnimation>(null);

  useEffect(() => {
    const pathElement = diagram.current?.querySelector<SVGPathElement>(
      `[data-route="${piece.route}"]`,
    );
    const element = target.current;
    if (!pathElement || !element) return;

    const path = anime.path(pathElement);
    const instance = anime({
      targets: element,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      duration: pathElement.getTotalLength() / velocity,
      easing: "linear",
      autoplay: false,
      complete: () => advance(piece),
    });
    animation.current = instance;

    return () => {
      instance.pause();
      anime.remove(element);
      animation.current = null;
    };
  }, [advance, anime, diagram, piece]);

  useEffect(() => {
    if (paused) {
      animation.current?.pause();
    } else {
      animation.current?.play();
    }
  }, [paused]);

  const route = piece.route;

  return (
    <g ref={target}>
      {route === "garbage" ? (
        <rect x={-12.5} y={-12.5} width={25} height={25} fill="green" />
      ) : route.startsWith("product") ? (
        <rect x={-25} y={-12.5} width={50} height={25} fill="tomato" />
      ) : (
        <circle
          r={12.5}
          fill={route.startsWith("grind") ? "lightgreen" : "blue"}
        />
      )}
    </g>
  );
}

export function SVGSystem() {
  const diagram = useRef<SVGSVGElement>(null);
  const nextId = useRef(0);
  const [anime, setAnime] = useState<Anime>();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [paused, setPaused] = useState(false);

  function addPiece() {
    const piece: Piece = { id: nextId.current++, route: "garbage" };
    setPieces((existing) => [...existing, piece]);
  }

  async function startDemo() {
    setStatus("loading");
    try {
      const library = await loadAnime();
      setAnime(() => library);
      addPiece();
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  const advance = useCallback((piece: Piece) => {
    const choices = routes[piece.route].next;
    const route =
      choices[Math.floor(Math.random() * choices.length)] ?? choices[0];
    setPieces((existing) =>
      existing.map((current) =>
        current.id === piece.id ? { ...current, route } : current,
      ),
    );
  }, []);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <figcaption className="flex flex-wrap items-center gap-2 border-b p-3">
        {anime ? (
          <>
            <Button type="button" onClick={addPiece}>
              Add piece
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={pieces.length === 0}
              onClick={() => setPaused(!paused)}
            >
              {paused ? "Resume" : "Pause"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={pieces.length === 0}
              onClick={() => {
                setPieces([]);
                setPaused(false);
              }}
            >
              Reset
            </Button>
            <span className="text-sm" role="status">
              {pieces.length} {pieces.length === 1 ? "piece" : "pieces"}
            </span>
          </>
        ) : (
          <Button
            type="button"
            disabled={status === "loading"}
            onClick={startDemo}
          >
            {status === "loading" ? "Loading demo…" : "Run demo"}
          </Button>
        )}
        {status === "error" && (
          <span className="text-sm" role="status">
            The demo could not load. Try again.
          </span>
        )}
      </figcaption>

      <svg
        aria-label="Assembly line with paths for garbage, grinds, pellets, and products"
        className="block max-h-[40rem] w-full text-muted-foreground"
        ref={diagram}
        role="img"
        viewBox="0 0 800 2000"
      >
        <g fill="none" strokeWidth={4}>
          {wastePaths.map((path) => (
            <path key={path} d={path} stroke="currentColor" opacity={0.28} />
          ))}
          {Object.entries(routes).map(([route, { path, color }]) => (
            <path key={route} d={path} stroke={color} data-route={route} />
          ))}
        </g>
        {anime &&
          pieces.map((piece) => (
            <MovingPiece
              key={`${piece.id}:${piece.route}`}
              anime={anime}
              diagram={diagram}
              paused={paused}
              piece={piece}
              advance={advance}
            />
          ))}
      </svg>
    </figure>
  );
}
