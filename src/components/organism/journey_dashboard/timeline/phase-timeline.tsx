"use client";
import { useEffect, useRef, useState } from "react";
import { formatDate, recordDates, timestamp } from "../model/dates";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyPhase } from "../model/types";
import { nearestMark, staggerNearbyPoints } from "./nearest-mark";
import styles from "./phase-timeline.module.css";
import { type TimelineData, timelineLane, timePosition } from "./timeline-data";

export default function PhaseTimeline({
  phase,
  data,
  selectedRecordId,
  onSelectRecord,
}: {
  phase: JourneyPhase;
  data: TimelineData;
  selectedRecordId: string | null;
  onSelectRecord: (id: string, phaseId?: string) => void;
}) {
  const plot = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(240);
  const [hovered, setHovered] = useState<string | null>(null);
  useEffect(() => {
    const element = plot.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setWidth(element.clientWidth));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const ids = new Set(
    [...phase.started, ...phase.continuing].map((record) => record.id),
  );
  const range = { start: phase.start, end: phase.end };
  const position = (date: string) => (timePosition(date, range) / 100) * width;
  const choose = (id: string) =>
    onSelectRecord(
      id,
      phase.continuing.some((record) => record.id === id)
        ? phase.id
        : undefined,
    );
  return (
    <section
      className={styles.root}
      id={`${phase.id}-timeline`}
      tabIndex={-1}
      aria-label={`Explore entries in ${phase.label}`}
    >
      <div className={styles.dates}>
        <span>{formatDate(phase.end)}</span>
        <span>{formatDate(phase.start)}</span>
      </div>
      <div ref={plot} className={styles.plot}>
        {data.lanes.map((lane) => {
          const ends: number[] = [];
          const laneMarks = data.marks
            .filter(
              (mark) =>
                ids.has(mark.record.id) &&
                timelineLane(mark.record.lane) === lane,
            )
            .toSorted(
              (a, b) => timestamp(a.record.start) - timestamp(b.record.start),
            )
            .map((mark) => {
              const start = Math.max(
                timestamp(mark.record.start),
                timestamp(range.start),
              );
              let channel = ends.findIndex((end) => end < start);
              if (channel < 0) channel = ends.length;
              ends[channel] = mark.point
                ? start
                : Math.min(
                    timestamp(mark.record.end ?? range.end),
                    timestamp(range.end),
                  );
              return { ...mark, channel };
            });
          const baseHeight = Math.max(44, ends.length * 12 + 12);
          const baseSegments = laneMarks.map(({ record, point, channel }) => ({
            id: record.id,
            x1: position(point ? record.start : (record.end ?? range.end)),
            x2: position(record.start),
            y1: baseHeight / 2 + (channel - (ends.length - 1) / 2) * 12,
            y2: baseHeight / 2 + (channel - (ends.length - 1) / 2) * 12,
          }));
          const { segments, height } = staggerNearbyPoints(
            baseSegments,
            new Set(
              laneMarks
                .filter((mark) => mark.point)
                .map((mark) => mark.record.id),
            ),
            baseHeight,
          );
          return (
            <div
              key={lane}
              className={styles.lane}
              style={{ height }}
              data-events={lane === "Events"}
            >
              <span className={styles.label}>
                {lane === "Education" ? "Learning" : lane}
              </span>
              <div className={styles.track} style={{ height }}>
                {laneMarks.map(({ record, point }, index) => {
                  const segment = segments[index];
                  const label = `${recordPresentation(record).heading}, ${recordDates(record)}`;
                  return (
                    <span key={record.id}>
                      <span
                        className={point ? styles.dot : styles.bar}
                        data-record-id={record.id}
                        data-event={point && record.lane === "Events"}
                        data-selected={record.id === selectedRecordId}
                        data-hovered={record.id === hovered}
                        style={{
                          left: segment.x1,
                          top: segment.y1,
                          width: point
                            ? undefined
                            : Math.max(3, segment.x2 - segment.x1),
                        }}
                      />
                      <button
                        type="button"
                        className={styles.keyboardTarget}
                        style={{
                          left: (segment.x1 + segment.x2) / 2,
                          top: segment.y1,
                        }}
                        aria-label={label}
                        aria-pressed={record.id === selectedRecordId}
                        onClick={() => choose(record.id)}
                      >
                        <span>{label}</span>
                      </button>
                    </span>
                  );
                })}
                {!!segments.length && (
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={styles.nearestTarget}
                    style={{ cursor: hovered ? "pointer" : "default" }}
                    onPointerMove={(event) => {
                      const b =
                        event.currentTarget.parentElement?.getBoundingClientRect();
                      if (!b) return;
                      setHovered(
                        nearestMark(
                          segments,
                          event.clientX - b.left,
                          event.clientY - b.top,
                        ),
                      );
                    }}
                    onPointerLeave={() => setHovered(null)}
                    onClick={(event) => {
                      const b =
                        event.currentTarget.parentElement?.getBoundingClientRect();
                      if (!b) return;
                      const id = nearestMark(
                        segments,
                        event.clientX - b.left,
                        event.clientY - b.top,
                      );
                      if (id) choose(id);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
