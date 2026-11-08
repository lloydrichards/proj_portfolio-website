import type { JourneyRecord } from "./types";

export function recordPresentation(record: JourneyRecord) {
  const type = record.annotation
    ? "annotation"
    : record.lane === "Places"
      ? "home"
      : record.lane === "Events"
        ? record.source === "Personal account"
          ? "turning-point"
          : "activity"
        : record.lane === "Education"
          ? "education"
          : "role";
  return {
    type,
    heading:
      type === "home"
        ? record.location
        : type === "activity"
          ? record.organization || record.title
          : record.title,
    secondary: type === "activity" ? record.title : record.organization,
  };
}
