import type { JourneyDashboardData } from "../model/dashboard";
import { timestamp } from "../model/dates";
import { type JourneyRecord, type Lane, lanes } from "../model/types";

const timelineLanes: readonly Lane[] = lanes.filter(
  (lane) => lane !== "Places" && lane !== "Events",
);
export function timelineLane(lane: Lane): Lane {
  return lane === "Events" ? "Education" : lane;
}

export function timePosition(
  date: string,
  range: { start: string; end: string },
) {
  const duration = timestamp(range.end) - timestamp(range.start);
  return duration > 0
    ? Math.max(
        0,
        Math.min(
          100,
          ((timestamp(range.end) - timestamp(date)) / duration) * 100,
        ),
      )
    : 0;
}

export function isTimelinePoint(record: JourneyRecord) {
  if (record.kind === "moment") return true;
  if (record.lane !== "Events" || !record.end) return false;
  const start = new Date(timestamp(record.start));
  const year = start.getUTCFullYear();
  const month = start.getUTCMonth();
  const lastDay = new Date(Date.UTC(year, month + 2, 0)).getUTCDate();
  const nextMonth = Date.UTC(
    year,
    month + 1,
    Math.min(start.getUTCDate(), lastDay),
  );
  return timestamp(record.end) < nextMonth;
}

export function prepareTimelineData(data: JourneyDashboardData) {
  const available = (record: JourneyRecord) =>
    timestamp(record.start) <= timestamp(data.range.end);
  const marks = timelineLanes.flatMap((lane) => {
    const ends: number[] = [];
    return data.records
      .filter(
        (record) => available(record) && timelineLane(record.lane) === lane,
      )
      .toSorted((a, b) => timestamp(a.start) - timestamp(b.start))
      .map((record) => {
        let channel = ends.findIndex((end) => end < timestamp(record.start));
        if (channel === -1) channel = ends.length;
        ends[channel] = timestamp(record.end ?? data.range.end);
        return { record, channel, point: isTimelinePoint(record) };
      })
      .map((mark) => ({ ...mark, channels: ends.length }));
  });
  const latest = timestamp(data.range.end);
  const earliest = timestamp(data.range.start);
  return {
    marks,
    lanes: timelineLanes,
    phases: data.phases,
    navigationRecords: data.timelineRecords.filter(available),
    range: data.range,
    ticks: Array.from({ length: 5 }, (_, index) => {
      const year = new Date(
        latest - ((latest - earliest) * index) / 4,
      ).getUTCFullYear();
      return { year, position: timePosition(`${year}-01-01`, data.range) };
    }),
  };
}
export type TimelineData = ReturnType<typeof prepareTimelineData>;
