"use client";
import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { formatDate, recordDates, timestamp } from "../model/dates";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyPhase } from "../model/types";
import { nearestMark, staggerNearbyPoints } from "./nearest-mark";
import { type TimelineData, timelineLane, timePosition } from "./timeline-data";

const phaseMark = cva(
  "absolute pointer-events-none -translate-y-1/2 bg-primary h-1.5",
  {
    variants: {
      shape: {
        bar: "",
        point: "w-1.5 rounded-full -translate-x-1/2",
        event:
          "size-1.75 rounded-none -translate-x-1/2 rotate-45 outline-2 outline-background",
      },
      eventLaneBar: { true: "h-1 bg-muted-foreground" },
      selected: { true: "bg-foreground outline outline-primary" },
      hovered: { true: "bg-foreground" },
    },
    compoundVariants: [
      { shape: "event", selected: true, class: "outline-2 outline-background" },
    ],
  },
);

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
      className="hidden [@media(max-width:960px)]:block my-0 [@media(max-width:960px)]:mt-4 [@media(max-width:960px)]:mb-6 scroll-mt-[calc(var(--journey-sidebar-height,180px)+20px)] focus:outline-none"
      id={`${phase.id}-timeline`}
      tabIndex={-1}
      aria-label={`Explore entries in ${phase.label}`}
    >
      <div className="flex justify-between ml-16 text-[10px] text-muted-foreground">
        <span>{formatDate(phase.end)}</span>
        <span>{formatDate(phase.start)}</span>
      </div>
      <div ref={plot} className="ml-16">
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
              className="relative"
              style={{ height }}
              data-events={lane === "Events"}
            >
              <span className="absolute -left-16 top-3.5 text-[10px] text-foreground">
                {lane === "Education" ? "Learning" : lane}
              </span>
              <div
                className="relative before:content-[''] before:absolute before:top-1/2 before:w-full before:border-t before:border-border"
                style={{ height }}
              >
                {laneMarks.map(({ record, point }, index) => {
                  const segment = segments[index];
                  const label = `${recordPresentation(record).heading}, ${recordDates(record)}`;
                  return (
                    <span key={record.id}>
                      <span
                        className={cn(
                          phaseMark({
                            shape: point
                              ? record.lane === "Events"
                                ? "event"
                                : "point"
                              : "bar",
                            eventLaneBar: !point && lane === "Events",
                            selected: record.id === selectedRecordId,
                            hovered: record.id === hovered,
                          }),
                        )}
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
                        className="group absolute size-6 -translate-1/2 pointer-events-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:z-2"
                        style={{
                          left: (segment.x1 + segment.x2) / 2,
                          top: segment.y1,
                        }}
                        aria-label={label}
                        aria-pressed={record.id === selectedRecordId}
                        onClick={() => choose(record.id)}
                      >
                        <span className="absolute size-px overflow-hidden [clip-path:inset(50%)] group-focus-visible:w-max group-focus-visible:max-w-50 group-focus-visible:h-auto group-focus-visible:[clip-path:none] group-focus-visible:overflow-visible group-focus-visible:left-0 group-focus-visible:bottom-7 group-focus-visible:p-1.5 group-focus-visible:text-[10px] group-focus-visible:bg-background group-focus-visible:text-foreground">
                          {label}
                        </span>
                      </button>
                    </span>
                  );
                })}
                {!!segments.length && (
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 -inset-x-3 w-[calc(100%+24px)] h-full",
                      hovered ? "cursor-pointer" : "cursor-default",
                    )}
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
