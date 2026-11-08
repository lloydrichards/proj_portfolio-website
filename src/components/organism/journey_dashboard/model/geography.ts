import type { JourneyRecord } from "./types";

export type LocationHistory = {
  code: string;
  kind: "lived" | "visited" | "activity";
  recordIds: string[];
};
const countryAliases: Record<string, string> = {
  canada: "CAN",
  uk: "GBR",
  "united kingdom": "GBR",
  scotland: "GBR",
  germany: "DEU",
  switzerland: "CHE",
  spain: "ESP",
  portugal: "PRT",
  "costa rica": "CRI",
  morocco: "MAR",
  turkey: "TUR",
  türkiye: "TUR",
};

// Activity locations establish a connection to a country, not a residence there.
export function locationHistory(
  records: JourneyRecord[],
  countryNames: Record<string, string>,
): LocationHistory[] {
  const names = Object.fromEntries(
    Object.entries(countryNames).map(([code, name]) => [
      name.toLowerCase(),
      code,
    ]),
  );
  const history = new Map<string, LocationHistory>();
  const priority = { activity: 0, visited: 1, lived: 2 };
  for (const record of records) {
    const codes = record.country
      ? [record.country]
      : record.location
          .split(/[,;]/)
          .map(
            (name) =>
              countryAliases[name.trim().toLowerCase()] ??
              names[name.trim().toLowerCase()],
          );
    for (const code of new Set(
      codes.filter((value): value is string =>
        Boolean(value && countryNames[value]),
      ),
    )) {
      const kind = record.placeKind ?? "activity";
      const previous = history.get(code);
      history.set(code, {
        code,
        kind:
          previous && priority[previous.kind] > priority[kind]
            ? previous.kind
            : kind,
        recordIds: [...(previous?.recordIds ?? []), record.id],
      });
    }
  }
  return [...history.values()].sort((a, b) =>
    countryNames[a.code].localeCompare(countryNames[b.code]),
  );
}
