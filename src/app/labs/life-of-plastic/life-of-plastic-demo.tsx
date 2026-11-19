"use client";

import { useEffect, useRef, useState } from "react";
import { type Anime, loadAnime } from "@/app/labs/load-anime";
import { Button } from "@/components/atom/button";
import data from "./routes.json";

type Lab = "008" | "010" | "011" | "012" | "013" | "017";
type Route = (typeof data.paths)[number];
type Rule = {
  parent: string;
  require: string;
  possible: string[];
  waste?: string;
  wasteChance?: number;
  probability?: number[];
};
type Settings = Record<string, boolean>;
type Piece = { id: number; route: Route };
type Simulation = { pieces: Piece[]; waste: number; nextId: number };

const artwork = "/labs/009-plastic-illustration/life-of-plastic.svg";
const scenePaths = new Map(data.paths.map((route) => [route.name, route]));
const schematicPaths = new Map(
  data.schematicPaths.map((route) => [route.name, route]),
);
const oldRules = new Map<string, Rule>(
  data.old.map((rule) => [rule.parent, rule]),
);
const weightedRules = new Map<string, Rule>(
  data.weighted.map((rule) => [rule.parent, rule]),
);
const schematicRules = new Map<string, Rule>(
  data.schematicRules.map((rule) => [rule.parent, rule]),
);
const schematicSystems: Settings = { sort: true, refineA: true, refineB: true };
const initialSimulation: Simulation = { pieces: [], waste: 0, nextId: 0 };
const materials = ["PET", "HDPE", "PP", "PS", "LDPE", "PVC", "Other"];
const colors: Record<string, string> = {
  PET: "#d50000",
  HDPE: "#aa00ff",
  PP: "#304ffe",
  PS: "#007e94",
  LDPE: "#008c39",
  PVC: "#ad7800",
  OTHER: "#c04f00",
  MIXED: "#546e7a",
  GARBAGE: "#424242",
};
const schematicColors: Record<string, string> = {
  garbage: "#15803d",
  grind: "#4d7c0f",
  pellet: "#1d4ed8",
  product: "#c2410c",
  waste: "#52525b",
};
const labels: Record<string, string> = {
  sort: "Sorting",
  refineA: "Refiner A",
  refineB: "Refiner B",
  PETSeperateGrinder: "PET grinder",
  rPETSeperateRefiner: "PET refiner",
};
const onboarding = [
  {
    title: "Recycling systems",
    y: 1460,
    text: "Switch a recycling system on or off to change which factories can process its plastic.",
  },
  {
    title: "Add a bottle",
    y: 1760,
    text: "Drop a PET bottle into the sorting line. You can add more pieces with the controls.",
    add: true,
  },
  {
    title: "Baling and grinding",
    y: 2240,
    text: "Bottles are compressed into bales and sent to a grinder. Follow a bale through the diagram.",
  },
  {
    title: "Missing factories",
    y: 2650,
    text: "Switch a factory off. Material that reaches an unavailable process takes the waste route.",
  },
  {
    title: "Manufacturing",
    y: 420,
    text: "Refined plastic travels back up to be made into new products.",
  },
  {
    title: "Back into the cycle",
    y: 1080,
    text: "A new product can enter the system again, sometimes as a different kind of plastic.",
  },
];

function factoryLabel(key: string) {
  return (
    labels[key] ??
    key
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace("Seperate", "Separate")
  );
}

function nextRoute(rule: Rule, systems: Settings) {
  if (!systems[rule.require]) return rule.waste;
  if (rule.wasteChance && Math.random() < rule.wasteChance) return rule.waste;
  if (!rule.probability)
    return rule.possible[Math.floor(Math.random() * rule.possible.length)];
  const total = rule.probability.reduce((sum, weight) => sum + weight, 0);
  let ticket = Math.random() * total;
  return rule.possible.find((_, index) => {
    ticket -= rule.probability?.[index] ?? 0;
    return ticket < 0;
  });
}

function addPieces(state: Simulation, route: Route, amount: number) {
  const count = Math.min(amount, Math.max(0, 120 - state.pieces.length));
  const pieces = Array.from({ length: count }, (_, index) => ({
    id: state.nextId + index,
    route,
  }));
  return {
    ...state,
    pieces: [...state.pieces, ...pieces],
    nextId: state.nextId + count,
  };
}

function Particle({
  anime,
  piece,
  color,
  finish,
}: {
  anime: Anime;
  piece: Piece;
  color: string;
  finish: (piece: Piece) => void;
}) {
  const path = useRef<SVGPathElement>(null);
  const target = useRef<SVGGElement>(null);
  const onFinish = useRef(finish);

  useEffect(() => {
    onFinish.current = finish;
  }, [finish]);

  useEffect(() => {
    if (!path.current || !target.current) return;
    const element = target.current;
    const length = path.current.getTotalLength();
    const follow = anime.path(path.current);
    let active = true;
    const animation = anime({
      targets: element,
      translateX: follow("x"),
      translateY: follow("y"),
      rotate: follow("angle"),
      duration: Math.max(260, length * 2.1),
      easing: "linear",
      complete: () => {
        if (active) onFinish.current(piece);
      },
    });
    return () => {
      active = false;
      animation.pause();
      anime.remove(element);
    };
  }, [anime, piece]);

  const type = piece.route.type.toLowerCase();
  const round = type === "pellet" || type === "regrind" || type === "grind";
  return (
    <>
      <path
        ref={path}
        d={piece.route.path}
        fill="none"
        stroke={color}
        strokeWidth={5}
        opacity={0.55}
      />
      <g
        ref={target}
        data-particle={piece.route.name}
        fill={color}
        stroke="white"
        strokeWidth={3}
      >
        {round ? (
          <circle r={type === "pellet" ? 12 : 16} />
        ) : (
          <rect
            x={-21}
            y={-13}
            width={42}
            height={26}
            rx={type === "bale" ? 2 : 8}
          />
        )}
      </g>
    </>
  );
}

export function LifeOfPlasticDemo({ lab }: { lab: Lab }) {
  const schematic = lab === "008";
  const simple = lab === "010";
  const lateUI = lab === "013" || lab === "017";
  const guided = lab === "017";
  const paths = schematic ? schematicPaths : scenePaths;
  const rules = schematic
    ? schematicRules
    : lab === "010" || lab === "011"
      ? oldRules
      : weightedRules;
  const defaults = schematic ? schematicSystems : data.systems;
  const viewport = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [anime, setAnime] = useState<Anime>();
  const [running, setRunning] = useState(false);
  const [failed, setFailed] = useState(false);
  const [simulation, setSimulation] = useState(initialSimulation);
  const [systems, setSystems] = useState<Settings>(defaults);
  const [factory, setFactory] = useState(
    schematic ? "refineA" : "PETSeperateGrinder",
  );
  const [step, setStep] = useState(0);
  const [guide, setGuide] = useState(guided);
  const [legend, setLegend] = useState(false);

  useEffect(() => {
    if (!running) return;
    let active = true;
    void loadAnime().then(
      (library) => {
        if (active) setAnime(() => library);
      },
      () => {
        if (active) {
          setFailed(true);
          setRunning(false);
        }
      },
    );
    return () => {
      active = false;
    };
  }, [running]);

  function focusScene(y: number) {
    const frame = viewport.current;
    const scene = svg.current;
    if (!frame || !scene) return;
    const scale = scene.clientHeight / (schematic ? 2000 : 4028);
    frame.scrollTo({ top: y * scale - frame.clientHeight / 2 });
  }

  function addMaterial(name: string) {
    const route = paths.get(name);
    if (!route) return;
    setSimulation((state) => addPieces(state, route, 1));
    focusScene(schematic ? 1060 : 1790);
  }

  function finish(piece: Piece) {
    const rule = rules.get(piece.route.name);
    const name = rule ? nextRoute(rule, systems) : undefined;
    const route = name ? paths.get(name) : undefined;
    setSimulation((state) => {
      if (!state.pieces.some((current) => current.id === piece.id))
        return state;
      const remaining = {
        ...state,
        pieces: state.pieces.filter((current) => current.id !== piece.id),
      };
      return route
        ? addPieces(remaining, route, route.amount)
        : { ...remaining, waste: state.waste + 1 };
    });
  }

  function clearPieces() {
    setSimulation((state) => ({ ...initialSimulation, nextId: state.nextId }));
  }

  function reset() {
    clearPieces();
    setSystems(defaults);
    setStep(0);
    if (guided) setGuide(true);
    focusScene(guided ? onboarding[0].y : schematic ? 1060 : 1790);
  }

  function goToStep(index: number) {
    const entry = onboarding[index];
    if (!entry) {
      setGuide(false);
      return;
    }
    setStep(index);
    if (entry.add) addMaterial("PET");
    focusScene(entry.y);
  }

  const active = running && anime;
  const sceneWidth = schematic ? 800 : 1050;
  const sceneHeight = schematic ? 2000 : 4028;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border">
      <figcaption className="space-y-3 border-b p-3">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            onClick={() => {
              setFailed(false);
              if (running) clearPieces();
              setRunning(!running);
            }}
          >
            {running ? "Stop demo" : "Run demo"}
          </Button>
          {active && (
            <Button type="button" variant="outline" onClick={reset}>
              Reset
            </Button>
          )}
          {active && lateUI && (
            <Button
              type="button"
              variant="outline"
              aria-expanded={legend}
              onClick={() => setLegend(!legend)}
            >
              Legend
            </Button>
          )}
          {active && guided && !guide && (
            <Button type="button" variant="outline" onClick={reset}>
              Restart tutorial
            </Button>
          )}
          <span className="text-sm" role="status">
            {failed
              ? "The animation could not load. Run the demo to retry."
              : running && !anime
                ? "Loading Anime.js…"
                : active
                  ? `${simulation.pieces.length} in transit · ${simulation.waste} to waste`
                  : "Run the demo to move material through the assembly line."}
          </span>
        </div>
        {active && (
          <div className="flex flex-wrap items-center gap-2">
            {(schematic ? ["garbage"] : materials).map((material) => (
              <Button
                key={material}
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => addMaterial(material)}
              >
                Add {material === "garbage" ? "material" : material}
              </Button>
            ))}
          </div>
        )}
        {active && !simple && (
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 text-sm">
              {schematic ? "Process" : "Factory"}
              <select
                className="min-w-0 rounded border bg-background p-1"
                value={factory}
                onChange={(event) => setFactory(event.target.value)}
              >
                {Object.keys(defaults).map((key) => (
                  <option key={key} value={key}>
                    {factoryLabel(key)}
                  </option>
                ))}
              </select>
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              aria-pressed={systems[factory]}
              onClick={() =>
                setSystems((current) => ({
                  ...current,
                  [factory]: !current[factory],
                }))
              }
            >
              {systems[factory] ? "On" : "Off"}
            </Button>
          </div>
        )}
        {active && lateUI && (
          <fieldset className="flex flex-wrap gap-2">
            <legend className="mb-1 text-sm">Recycling systems</legend>
            {Object.entries(data.recyclingSystems).map(([name, keys]) => (
              <Button
                key={name}
                type="button"
                size="sm"
                variant="outline"
                aria-pressed={systems[keys[0]]}
                onClick={() =>
                  setSystems((current) => {
                    const enabled = !current[keys[0]];
                    return {
                      ...current,
                      ...Object.fromEntries(keys.map((key) => [key, enabled])),
                    };
                  })
                }
              >
                {name}
              </Button>
            ))}
          </fieldset>
        )}
        {active && legend && (
          <ul className="flex flex-wrap gap-3 text-sm">
            {materials.map((name) => (
              <li className="flex items-center gap-1" key={name}>
                <span
                  className="size-3 rounded-full"
                  style={{ backgroundColor: colors[name.toUpperCase()] }}
                />
                {name}
              </li>
            ))}
          </ul>
        )}
        {active && guide && (
          <div className="space-y-2 rounded-md border p-3">
            <p className="font-semibold">
              {step + 1} of {onboarding.length} · {onboarding[step].title}
            </p>
            <p className="text-sm">{onboarding[step].text}</p>
            <div className="flex flex-wrap gap-2">
              {step > 0 && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => goToStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              <Button
                type="button"
                size="sm"
                onClick={() => goToStep(step + 1)}
              >
                {step + 1 === onboarding.length
                  ? "Finish tutorial"
                  : "Next step"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setGuide(false)}
              >
                Skip tutorial
              </Button>
            </div>
          </div>
        )}
      </figcaption>
      <section
        ref={viewport}
        aria-label="Scrollable Life of Plastic illustration"
        hidden={lab === "013" && !running}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: Give keyboard users access to the scrollable diagram.
        tabIndex={0}
        className="max-h-[32rem] overflow-auto bg-white"
      >
        <svg
          ref={svg}
          viewBox={`0 0 ${sceneWidth} ${sceneHeight}`}
          aria-label={
            schematic
              ? "Original assembly line schematic"
              : "Life of Plastic recycling diagram"
          }
          className="block h-auto w-full"
        >
          {schematic ? (
            data.schematicPaths.map((route) => (
              <path
                key={route.name}
                d={route.path}
                fill="none"
                stroke={schematicColors[route.type]}
                strokeWidth={8}
              />
            ))
          ) : (
            <image href={artwork} width={sceneWidth} height={sceneHeight} />
          )}
          {active &&
            simulation.pieces.map((piece) => (
              <Particle
                key={piece.id}
                anime={anime}
                piece={piece}
                finish={finish}
                color={
                  schematic
                    ? schematicColors[piece.route.type]
                    : simple
                      ? "#15803d"
                      : (colors[piece.route.plastic.toUpperCase()] ?? "#424242")
                }
              />
            ))}
        </svg>
      </section>
    </figure>
  );
}
