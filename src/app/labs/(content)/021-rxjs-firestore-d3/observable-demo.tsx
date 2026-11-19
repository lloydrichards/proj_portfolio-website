"use client";

import { line, scaleLinear, scaleUtc, utcFormat } from "d3";
import { useEffect, useId, useState } from "react";
import { createLabScriptLoader } from "@/app/labs/load-lab-script";
import { Button } from "@/components/atom/button";
import { Input } from "@/components/atom/input";
import airQuality from "./air-quality.json";
import pokemon from "./pokemon.json";

type Observable<T> = {
  pipe(
    ...operators: ((source: Observable<T>) => Observable<T>)[]
  ): Observable<T>;
  subscribe(
    next: (value: T) => void,
    error?: undefined,
    complete?: () => void,
  ): { unsubscribe(): void };
};

type RxJS = {
  BehaviorSubject: new <T>(
    initial: T,
  ) => Observable<T> & { next(value: T): void };
  interval(milliseconds: number): Observable<number>;
  operators: {
    debounceTime<T>(
      milliseconds: number,
    ): (source: Observable<T>) => Observable<T>;
    distinctUntilChanged<T>(): (source: Observable<T>) => Observable<T>;
    take<T>(count: number): (source: Observable<T>) => Observable<T>;
  };
};

const loadRxJS = createLabScriptLoader(
  "/labs/vendor/rxjs-6.6.3/rxjs.umd.min.js",
  () => (window as Window & { rxjs?: RxJS }).rxjs,
);
const formatTime = utcFormat("%H:%M");
const readings = airQuality.map(({ timestamp, iaq }) => ({
  time: new Date(timestamp),
  iaq,
}));
const windowSize = 48;

function PokemonSearch({ rxjs }: { rxjs: RxJS }) {
  const id = useId();
  const [search, setSearch] = useState("");
  const [settledQuery, setSettledQuery] = useState("");
  const [subject] = useState(() => new rxjs.BehaviorSubject(""));

  useEffect(() => {
    const subscription = subject
      .pipe(
        rxjs.operators.debounceTime(750),
        rxjs.operators.distinctUntilChanged(),
      )
      .subscribe(setSettledQuery);
    return () => subscription.unsubscribe();
  }, [rxjs, subject]);

  const query = search.trim().toLowerCase();
  const matches =
    query.length >= 3 && query === settledQuery
      ? pokemon.filter((name) => name.toLowerCase().includes(query))
      : [];

  return (
    <section aria-label="Pokémon search" className="grid gap-2">
      <label htmlFor={id} className="font-medium">
        Search Pokémon names
      </label>
      <Input
        id={id}
        value={search}
        placeholder="e.g. char"
        onChange={(event) => {
          const text = event.target.value;
          setSearch(text);
          subject.next(text.trim().toLowerCase());
        }}
      />
      <div role="status" className="text-sm">
        {query.length < 3
          ? "Enter at least three letters."
          : query !== settledQuery
            ? "Waiting for you to finish typing…"
            : matches.length
              ? `${matches.length} matches`
              : "No matches in the sample data."}
      </div>
      {matches.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {matches.map((name) => (
            <li key={name} className="rounded bg-muted px-2 py-1 text-sm">
              {name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function AirQualityChart({ rxjs }: { rxjs: RxJS }) {
  const [count, setCount] = useState(windowSize);
  const [replayFrom, setReplayFrom] = useState<number | null>(null);
  const playing = replayFrom !== null;
  const finished = count === readings.length;

  useEffect(() => {
    if (replayFrom === null) return;
    const subscription = rxjs
      .interval(700)
      .pipe(rxjs.operators.take(readings.length - replayFrom))
      .subscribe(
        (index) => setCount(replayFrom + index + 1),
        undefined,
        () => setReplayFrom(null),
      );
    return () => subscription.unsubscribe();
  }, [replayFrom, rxjs]);

  const visible = readings.slice(count - windowSize, count);
  const latest = visible.slice(-5).reverse();
  const x = scaleUtc(
    [visible[0].time, visible.at(-1)?.time ?? visible[0].time],
    [0, 540],
  );
  const y = scaleLinear([0, 200], [0, 160]);
  const points = line<(typeof readings)[number]>()
    .x((reading) => x(reading.time))
    .y((reading) => 160 - y(reading.iaq))(visible);

  return (
    <section
      aria-label="Air-quality replay"
      className="grid gap-3 border-t pt-4"
    >
      <h3 className="font-medium">Air-quality readings</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          disabled={finished}
          onClick={() => setReplayFrom(playing ? null : count)}
        >
          {playing
            ? "Pause replay"
            : count === windowSize
              ? "Play readings"
              : "Resume replay"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setReplayFrom(null);
            setCount(windowSize);
          }}
        >
          Reset
        </Button>
        <span className="text-sm" role="status">
          {finished
            ? "Replay complete."
            : `${count - windowSize} of ${readings.length - windowSize} new readings replayed.`}
        </span>
      </div>
      <svg
        viewBox="0 0 610 218"
        role="img"
        aria-label="Air-quality index over time using a rolling window of 48 sample readings"
        className="h-auto w-full"
      >
        <g transform="translate(48 22)" fontSize={15}>
          <text y={-8} fill="currentColor">
            IAQ
          </text>
          {y.ticks(4).map((tick) => (
            <g key={tick} transform={`translate(0 ${160 - y(tick)})`}>
              <line x2={540} stroke="currentColor" opacity={0.25} />
              <text
                x={-8}
                textAnchor="end"
                dominantBaseline="middle"
                fill="currentColor"
              >
                {tick}
              </text>
            </g>
          ))}
          {x.ticks(4).map((tick) => (
            <text
              key={tick.getTime()}
              x={x(tick)}
              y={184}
              textAnchor="middle"
              fill="currentColor"
            >
              {formatTime(tick)}
            </text>
          ))}
          <path
            d={points ?? undefined}
            stroke="steelblue"
            strokeWidth={3}
            fill="none"
          />
        </g>
      </svg>
      <div className="text-sm">
        <h4 className="font-medium">Last five readings (UTC)</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {latest.map((reading) => (
            <li
              className="rounded bg-muted px-2 py-1"
              key={reading.time.getTime()}
            >
              <time dateTime={reading.time.toISOString()}>
                {formatTime(reading.time)}
              </time>
              {" · "}
              {reading.iaq}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ObservableDemo() {
  const [running, setRunning] = useState(false);
  const [rxjs, setRxJS] = useState<RxJS>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!running) return;
    let active = true;
    void loadRxJS().then(
      (library) => {
        if (active) setRxJS(library);
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

  return (
    <figure className="not-prose my-6 grid gap-4 rounded-lg border p-4">
      <figcaption className="flex flex-wrap items-center gap-3">
        <Button
          type="button"
          onClick={() => {
            setFailed(false);
            setRunning(!running);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        <span className="text-sm">Local Pokémon and air-quality samples</span>
      </figcaption>
      {failed && (
        <p role="status">RxJS could not load. Run the demo again to retry.</p>
      )}
      {running && !rxjs && <p role="status">Loading RxJS…</p>}
      {running && rxjs && (
        <>
          <PokemonSearch rxjs={rxjs} />
          <AirQualityChart rxjs={rxjs} />
        </>
      )}
    </figure>
  );
}
