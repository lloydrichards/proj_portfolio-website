import { createLabScriptLoader } from "./load-lab-script";

type AnimePathValue = {
  totalLength: number;
};

type AnimeValue =
  | number
  | string
  | [number | string, number | string]
  | AnimePathValue;

type AnimeOptions = {
  targets: Element;
  duration?: number;
  delay?: number;
  easing?: string;
  translateX?: AnimeValue;
  translateY?: AnimeValue;
  rotate?: AnimeValue;
  scale?: AnimeValue;
  fill?: AnimeValue;
  loop?: boolean;
  direction?: "alternate";
  autoplay?: boolean;
  complete?: () => void;
};

export type AnimeAnimation = {
  pause(): void;
  play(): void;
  restart(): void;
};

type AnimeTimeline = AnimeAnimation & {
  add(options: AnimeOptions): AnimeTimeline;
};

export type Anime = {
  (options: AnimeOptions): AnimeAnimation;
  path(
    element: SVGPathElement,
  ): (property: "x" | "y" | "angle") => AnimePathValue;
  timeline(options: Omit<AnimeOptions, "targets">): AnimeTimeline;
  remove(targets: AnimeOptions["targets"]): void;
};

export const loadAnime = createLabScriptLoader(
  "/labs/vendor/animejs-3.2.2/anime.min.js",
  () => (window as Window & { anime?: Anime }).anime,
);
