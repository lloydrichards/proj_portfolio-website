"use client";
import { ChevronDown, MapPin, X } from "lucide-react";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { countryNames } from "../globe/world";
import { recordDates } from "../model/dates";
import { locationHistory } from "../model/geography";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyPhase } from "../model/types";
import styles from "./phase-places.module.css";

export default function PhasePlaces({ phase }: { phase: JourneyPhase }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();
  const records = [...phase.started, ...phase.continuing];
  const homes = records
    .filter((record) => record.placeKind === "lived")
    .toSorted((a, b) => a.start.localeCompare(b.start));
  const visits = phase.started
    .filter((record) => record.placeKind === "visited")
    .toSorted((a, b) => a.start.localeCompare(b.start));
  const activities = locationHistory(
    records.filter((record) => record.source === "CV database"),
    countryNames,
  );
  const homeNames = [...new Set(homes.map((record) => record.location))];
  const summary =
    [
      homeNames.length === 1
        ? homeNames[0].split(",")[0]
        : homeNames.length
          ? `${homeNames.length} places lived`
          : null,
      visits.length
        ? `${visits.length} ${visits.length === 1 ? "visit" : "visits"}`
        : null,
    ]
      .filter(Boolean)
      .join(" · ") || "Places in this phase";
  useLayoutEffect(() => {
    if (!open || !trigger.current || !panel.current || !root.current) return;
    const box = trigger.current.getBoundingClientRect();
    const sidebar = window.matchMedia("(max-width: 960px)").matches
      ? Number.parseFloat(
          getComputedStyle(root.current).getPropertyValue(
            "--journey-sidebar-height",
          ),
        ) || 180
      : 24;
    const height = Math.min(
      360,
      window.innerHeight - sidebar - 24,
      panel.current.scrollHeight,
    );
    const width = Math.min(380, window.innerWidth - 32);
    Object.assign(panel.current.style, {
      position: "fixed",
      left: `${Math.max(16, Math.min(box.left, window.innerWidth - width - 16))}px`,
      top: `${Math.max(sidebar + 8, Math.min(box.bottom + 4, window.innerHeight - height - 12))}px`,
      width: `${width}px`,
      maxHeight: `${height}px`,
    });
  }, [open]);
  useEffect(() => {
    if (!open) return;
    close.current?.focus({ preventScroll: true });
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus({ preventScroll: true });
      }
    }
    const dismiss = () => setOpen(false);
    window.addEventListener("scroll", dismiss, { passive: true });
    window.addEventListener("resize", dismiss);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", dismiss);
      window.removeEventListener("resize", dismiss);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  if (!homes.length && !visits.length && !activities.length) return null;
  return (
    <div ref={root} className={styles.root}>
      {[...homes, ...visits].map((record) => (
        <span
          key={record.id}
          className={styles.anchor}
          aria-hidden="true"
          id={
            phase.continuing.includes(record)
              ? `${phase.id}-entry-${record.id}`
              : `entry-${record.id}`
          }
        />
      ))}
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="dialog"
        onClick={() => setOpen(!open)}
      >
        <MapPin size={13} aria-hidden="true" />
        <span>{summary}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      <div
        ref={panel}
        id={id}
        hidden={!open}
        className={styles.panel}
        role="dialog"
        aria-label={`Places in ${phase.label}`}
      >
        <div className={styles.heading}>
          <span>Places · {phase.label}</span>
          <button
            ref={close}
            type="button"
            aria-label="Close place details"
            onClick={() => {
              setOpen(false);
              trigger.current?.focus({ preventScroll: true });
            }}
          >
            <X size={16} />
          </button>
        </div>
        {!!homes.length && (
          <section>
            <h3>Lived</h3>
            <ul>
              {homes.map((record) => (
                <li key={record.id}>
                  <span>{record.location}</span>
                  <small>{recordDates(record)}</small>
                </li>
              ))}
            </ul>
          </section>
        )}
        {!!visits.length && (
          <section>
            <h3>Visited</h3>
            <ul>
              {visits.map((record) => (
                <li key={record.id}>
                  <span>{record.location}</span>
                  <small>{recordDates(record)}</small>
                </li>
              ))}
            </ul>
          </section>
        )}
        {!!activities.length && (
          <section>
            <h3>Work &amp; conferences</h3>
            <ul>
              {activities.map((place) => (
                <li key={place.code}>
                  <span>{countryNames[place.code]}</span>
                  {place.recordIds.map((recordId) => {
                    const record = records.find(
                      (record) => record.id === recordId,
                    );
                    return (
                      record && (
                        <small key={record.id}>
                          {recordPresentation(record).heading} ·{" "}
                          {recordDates(record)}
                        </small>
                      )
                    );
                  })}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
