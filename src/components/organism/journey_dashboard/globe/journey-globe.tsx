"use client";

import { cva } from "class-variance-authority";
import { geoOrthographic, geoPath } from "d3";
import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { GlobeData } from "./globe-data";
import { countries } from "./world";

const countryStyle = cva("stroke-background stroke-[0.6]", {
  variants: {
    status: {
      unrecorded:
        "fill-[color-mix(in_srgb,var(--foreground)_10%,var(--background))]",
      earlier:
        "fill-[color-mix(in_srgb,var(--foreground)_40%,var(--background))]",
      activity:
        "fill-[color-mix(in_srgb,var(--primary)_36%,var(--background))]",
      lived: "fill-primary [fill-opacity:0.75]",
    },
  },
});

const keySwatch = cva(
  "before:content-[''] before:inline-block before:size-2 before:mr-1.25",
  {
    variants: {
      kind: {
        lived: "before:bg-primary before:opacity-75",
        activity:
          "before:bg-[color-mix(in_srgb,var(--primary)_36%,var(--background))]",
        earlier:
          "before:bg-[color-mix(in_srgb,var(--foreground)_40%,var(--background))]",
        unrecorded:
          "before:bg-[color-mix(in_srgb,var(--foreground)_10%,var(--background))] before:border before:border-border",
      },
      mobile: {
        true: "[@media(max-width:960px)]:before:size-1.5 [@media(max-width:960px)]:before:mr-[3px]",
      },
    },
  },
);

const sphere = { type: "Sphere" as const };

export default function JourneyGlobe({ data }: { data: GlobeData }) {
  const [camera, setCamera] = useState(data.center);
  const cameraRef = useRef(camera);
  const [manualKey, setManualKey] = useState<string | null>(null);
  const drag = useRef<{
    x: number;
    y: number;
    center: [number, number];
  } | null>(null);
  const manual = manualKey === data.focusKey;
  const previousFocus = useRef(data.focusKey);
  useEffect(() => {
    if (previousFocus.current === data.focusKey) return;
    previousFocus.current = data.focusKey;
    setManualKey(null);
    drag.current = null;
  }, [data.focusKey]);
  const [longitude, latitude] = data.center;
  useEffect(() => {
    if (manual) return;
    const start = cameraRef.current;
    const delta = ((longitude - start[0] + 540) % 360) - 180;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 0
      : 450;
    const began = performance.now();
    let frame = 0;
    function update(now: number) {
      const progress = duration ? Math.min(1, (now - began) / duration) : 1;
      const eased = 1 - (1 - progress) ** 3;
      const next: [number, number] = [
        start[0] + delta * eased,
        start[1] + (latitude - start[1]) * eased,
      ];
      cameraRef.current = next;
      setCamera(next);
      if (progress < 1) frame = requestAnimationFrame(update);
    }
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [longitude, latitude, manual]);
  const projection = geoOrthographic()
    .translate([160, 160])
    .scale(149)
    .rotate([-camera[0], -camera[1]])
    .clipAngle(90);
  const path = geoPath(projection);
  const known = new Set(data.history.map((place) => place.code));
  const active = new Map(data.active.map((place) => [place.code, place.kind]));
  const selected = new Set(
    data.markers
      .filter((place) => place.selected)
      .map((place) => place.country),
  );
  return (
    <figure
      className="relative text-center shrink-0 my-0 min-[961px]:mt-2 min-[961px]:mb-3.5 [@media(max-width:960px)]:col-start-1 [@media(max-width:960px)]:row-start-1 [@media(max-width:960px)]:self-center"
      aria-label="Places globe"
    >
      <svg
        viewBox="0 0 320 320"
        className="block w-full h-[clamp(90px,20dvh,220px)] touch-pan-y cursor-grab active:cursor-grabbing [@media(min-width:961px)_and_(max-height:650px)]:h-22.5 [@media(max-width:960px)]:h-[100px] [@media(max-width:960px)_and_(max-height:500px)]:h-14"
        role="img"
        aria-label={`Places in this phase: ${data.caption}. Highlighted countries belong to this phase; earlier countries are muted.`}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          drag.current = { x: event.clientX, y: event.clientY, center: camera };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const origin = drag.current;
          if (
            !origin ||
            Math.hypot(event.clientX - origin.x, event.clientY - origin.y) < 4
          )
            return;
          const next: [number, number] = [
            origin.center[0] - (event.clientX - origin.x) * 0.6,
            Math.max(
              -80,
              Math.min(80, origin.center[1] + (event.clientY - origin.y) * 0.5),
            ),
          ];
          setManualKey(data.focusKey);
          cameraRef.current = next;
          setCamera(next);
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <path d={path(sphere) ?? ""} className="fill-background" />
        {countries.map((country) => (
          <path
            key={country.properties.code}
            d={path(country) ?? ""}
            className={countryStyle({
              status:
                selected.has(country.properties.code) ||
                active.get(country.properties.code) === "lived"
                  ? "lived"
                  : active.has(country.properties.code)
                    ? "activity"
                    : known.has(country.properties.code)
                      ? "earlier"
                      : "unrecorded",
            })}
            data-known={known.has(country.properties.code)}
            data-active={active.get(country.properties.code)}
            data-selected={selected.has(country.properties.code)}
          />
        ))}
        <path
          d={path(sphere) ?? ""}
          className="fill-none stroke-border stroke-[0.7]"
        />
      </svg>
      <figcaption
        className="text-xs leading-[1.6] mt-0.5 mx-auto mb-1 max-w-full min-h-[1.6em] line-clamp-2 text-balance [@media(max-width:960px)]:hidden"
        title={data.caption}
      >
        {data.caption}
      </figcaption>
      <GlobeKey />
      {manual && (
        <button
          className="absolute top-0 right-0 grid place-items-center size-11 text-muted-foreground bg-background rounded-md hover:text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 [@media(max-width:960px)]:-top-2 [@media(max-width:960px)]:-right-2 [@media(max-width:960px)]:bg-transparent"
          type="button"
          aria-label="Return to phase"
          title="Return to phase"
          onClick={() => setManualKey(null)}
        >
          <RotateCcw size={16} aria-hidden="true" />
        </button>
      )}
    </figure>
  );
}

export function GlobeKey({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={cn(
        "justify-center gap-3 text-muted-foreground text-[10px]",
        mobile
          ? "hidden [@media(max-width:960px)]:flex [@media(max-width:960px)]:col-span-full [@media(max-width:960px)]:gap-2 [@media(max-width:960px)]:mt-0.5 [@media(max-width:960px)]:mb-1.5 [@media(max-width:960px)]:text-[9px]"
          : "flex [@media(max-width:960px)]:hidden",
      )}
    >
      <span className={keySwatch({ kind: "lived", mobile })}>Lived</span>
      <span className={keySwatch({ kind: "activity", mobile })}>Visited</span>
      <span className={keySwatch({ kind: "earlier", mobile })}>Earlier</span>
    </div>
  );
}
