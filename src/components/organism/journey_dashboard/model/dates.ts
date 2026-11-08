import type { JourneyRecord } from "./types";
export const timestamp = (date: string) =>
  Date.parse(date.length === 4 ? `${date}-01-01T00:00:00Z` : date);
const monthYear = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
export function formatDate(date: string) {
  return date.length === 4 ? date : monthYear.format(new Date(timestamp(date)));
}
export function recordDates(record: JourneyRecord) {
  if (record.kind === "moment")
    return record.start.length === 4
      ? `${record.start} · year only`
      : record.start.length === 7
        ? formatDate(record.start)
        : new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          }).format(new Date(timestamp(record.start)));
  const date = (value: string) =>
    record.lane === "Events"
      ? new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(timestamp(value)))
      : formatDate(value);
  return `${date(record.start)} – ${record.end ? date(record.end) : "Present"}`;
}
