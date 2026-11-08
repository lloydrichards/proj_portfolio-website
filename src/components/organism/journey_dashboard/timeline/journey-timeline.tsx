"use client";
import { type CSSProperties, useEffect, useRef } from "react";
import { recordDates } from "../model/dates";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyPhase } from "../model/types";
import styles from "./timeline.module.css";
import { type TimelineData, timelineLane, timePosition } from "./timeline-data";

export default function JourneyTimeline({
  data,
  activePhase,
  selectedRecordId,
  onSelectPhase,
  onSelectRecord,
}: {
  data: TimelineData;
  activePhase: JourneyPhase;
  selectedRecordId: string | null;
  onSelectPhase: (id: string) => void;
  onSelectRecord: (id: string) => void;
}) {
  const overview = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = overview.current?.querySelector<HTMLElement>(
      `[data-phase="${activePhase.id}"]`,
    );
    const strip = overview.current;
    if (!element || !strip) return;
    const box = element.getBoundingClientRect();
    const bounds = strip.getBoundingClientRect();
    if (box.left < bounds.left || box.right > bounds.right)
      strip.scrollTo({
        left:
          element.offsetLeft -
          strip.offsetLeft -
          (strip.clientWidth - element.clientWidth) / 2,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }, [activePhase.id]);
  const { marks, lanes, phases, ticks, range } = data;
  const position = (date: string) => timePosition(date, range);
  const activeIds = new Set(
    [...activePhase.started, ...activePhase.continuing].map(
      (record) => record.id,
    ),
  );
  return (
    <>
      <div className={styles.desktopPlot} id="journey-timeline" tabIndex={-1}>
        <div className={styles.laneLabels}>
          {lanes.map((lane) => (
            <span key={lane}>{lane === "Education" ? "Learning" : lane}</span>
          ))}
        </div>
        <div className={styles.field}>
          {ticks.map(({ year, position: tickPosition }) => (
            <span
              className={styles.year}
              key={year}
              style={
                {
                  "--time": `${tickPosition}%`,
                } as CSSProperties
              }
            >
              {year}
            </span>
          ))}
          {lanes.map((lane, index) => (
            <span
              key={lane}
              className={styles.track}
              style={
                {
                  "--lane": `${(index + 0.5) * (100 / lanes.length)}%`,
                } as CSSProperties
              }
            />
          ))}
          {phases.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className={styles.phaseBand}
              data-compact={position(chapter.start) - position(chapter.end) < 5}
              aria-label={`${chapter.label}: ${chapter.title}`}
              aria-current={
                activePhase.id === chapter.id ? "location" : undefined
              }
              style={{
                top: `${position(chapter.end)}%`,
                height: `${position(chapter.start) - position(chapter.end)}%`,
              }}
              onClick={(event) => {
                event.preventDefault();
                onSelectPhase(chapter.id);
              }}
            ></a>
          ))}
          {marks.map(({ record, channel, channels, point }) => (
            <span
              key={record.id}
              className={point ? styles.mapDot : styles.duration}
              data-event={point && record.lane === "Events"}
              data-active={activeIds.has(record.id)}
              data-inspected={selectedRecordId === record.id}
              title={`${recordPresentation(record).heading} · ${recordDates(record)}`}
              style={
                {
                  "--time": `${position(point ? record.start : (record.end ?? range.end))}%`,
                  "--lane": `${(lanes.indexOf(timelineLane(record.lane)) + 0.5) * (100 / lanes.length)}%`,
                  "--offset": `${(channel - (channels - 1) / 2) * 18}px`,
                  "--duration": `${position(record.start) - position(record.end ?? range.end)}%`,
                } as CSSProperties
              }
            />
          ))}
          {marks.map(({ record, channel, channels, point }) => (
            <button
              type="button"
              key={`hit-${record.id}`}
              className={styles.recordHit}
              style={{
                top: `${point ? position(record.start) : (position(record.start) + position(record.end ?? range.end)) / 2}%`,
                left: `calc(${(lanes.indexOf(timelineLane(record.lane)) + 0.5) * (100 / lanes.length)}% + ${(channel - (channels - 1) / 2) * 18}px)`,
                height: point
                  ? "24px"
                  : `max(24px, ${position(record.start) - position(record.end ?? range.end)}%)`,
              }}
              aria-label={`${recordPresentation(record).heading}${record.organization ? `, ${record.organization}` : ""}, ${recordDates(record)}`}
              aria-pressed={selectedRecordId === record.id}
              onClick={() => onSelectRecord(record.id)}
              title={`${recordPresentation(record).heading} · ${record.organization} · ${recordDates(record)}`}
            />
          ))}
        </div>
      </div>
      <nav className={styles.mobileOverview} aria-label="Journey phases">
        <div className={styles.overviewDates}>
          <span>Present</span>
          <span>{range.start.slice(0, 4)}</span>
        </div>
        <div ref={overview} className={styles.phaseStrip}>
          {phases.map((phase) => (
            <button
              type="button"
              key={phase.id}
              data-phase={phase.id}
              aria-label={`${phase.label}: ${phase.title}`}
              aria-current={
                phase.id === activePhase.id ? "location" : undefined
              }
              style={{ flexGrow: position(phase.start) - position(phase.end) }}
              onClick={() => onSelectPhase(phase.id)}
            >
              <span>{phase.start.slice(0, 4)}</span>
            </button>
          ))}
        </div>
      </nav>
      <div className={styles.picker}>
        <label htmlFor="journey-chapter">Explore the timeline</label>
        <select
          id="journey-chapter"
          value={activePhase.id}
          onChange={(event) => {
            const value = event.target.value;
            if (value.startsWith("entry-")) onSelectRecord(value.slice(6));
            else onSelectPhase(value);
          }}
        >
          <optgroup label="Phases">
            {phases.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.label} · {chapter.title}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    </>
  );
}
