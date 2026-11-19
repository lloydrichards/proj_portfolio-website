import { createLabScriptLoader } from "./load-lab-script";

export type P5 = {
  width: number;
  height: number;
  deltaTime: number;
  push: () => void;
  pop: () => void;
  translate: (x: number, y: number) => void;
  rotate: (angle: number) => void;
  rect: (x: number, y: number, width: number, height: number) => void;
  rectMode: (mode: "center") => void;
  setup: () => void;
  draw: () => void;
  createCanvas: (width: number, height: number) => void;
  resizeCanvas: (width: number, height: number, noRedraw?: boolean) => void;
  background: (color: string | number) => void;
  noStroke: () => void;
  fill: (color: string | number, ...channels: number[]) => void;
  stroke: (color: string) => void;
  circle: (x: number, y: number, diameter: number) => void;
  line: (x1: number, y1: number, x2: number, y2: number) => void;
  random: (min: number, max: number) => number;
  dist: (x1: number, y1: number, x2: number, y2: number) => number;
  describe: (description: string) => void;
  remove: () => void;
};

type P5Constructor = new (sketch: (p: P5) => void, host: HTMLDivElement) => P5;

export const loadP5 = createLabScriptLoader(
  "/labs/vendor/p5-1.11.13/p5.min.js",
  () => (window as Window & { p5?: P5Constructor }).p5,
);
