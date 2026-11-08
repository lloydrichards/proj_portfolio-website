"use client";

import { geoOrthographic, geoPath } from "d3";
import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./globe.module.css";
import type { GlobeData } from "./globe-data";
import { countries } from "./world";

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
    <figure className={styles.root} aria-label="Places globe">
      <svg
        viewBox="0 0 320 320"
        className={styles.globe}
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
        <path d={path(sphere) ?? ""} className={styles.ocean} />
        {countries.map((country) => (
          <path
            key={country.properties.code}
            d={path(country) ?? ""}
            className={styles.country}
            data-known={known.has(country.properties.code)}
            data-active={active.get(country.properties.code)}
            data-selected={selected.has(country.properties.code)}
          />
        ))}
        <path d={path(sphere) ?? ""} className={styles.rim} />
      </svg>
      <figcaption className={styles.caption} title={data.caption}>
        {data.caption}
      </figcaption>
      <GlobeKey />
      {manual && (
        <button
          className={styles.reset}
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
    <div className={`${styles.key} ${mobile ? styles.mobileKey : ""}`}>
      <span className={styles.activeKey}>
        {mobile ? "Lived" : "Lived this phase"}
      </span>
      <span className={styles.activityKey}>Visited / activity</span>
      <span className={styles.historyKey}>
        {mobile ? "Earlier" : "Earlier places"}
      </span>
      <span className={styles.unrecordedKey}>No record</span>
    </div>
  );
}
