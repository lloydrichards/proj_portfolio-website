import { geoCentroid } from "d3";
import type { JourneyGeographicPlace } from "@/types/Journey";
import { timestamp } from "../model/dates";
import { locationHistory } from "../model/geography";
import type { JourneyPhase, JourneyRecord } from "../model/types";
import { countryCenters, countryNames } from "./world";

type GlobePlace = {
  id: string;
  label: string;
  country: string;
  coordinates: [number, number];
  precision: "city" | "country";
  home: boolean;
  active: boolean;
  activeHome: boolean;
  selected: boolean;
  recordIds: string[];
};

function locate(
  record: JourneyRecord,
  geographicPlaces: JourneyGeographicPlace[],
) {
  const city =
    geographicPlaces.find((place) => place.id === record.geographicPlaceId) ??
    geographicPlaces.find((place) =>
      record.location
        .split(/[,;]/)
        .some(
          (part) => part.trim().toLowerCase() === place.label.toLowerCase(),
        ),
    );
  if (city) return [{ ...city, precision: "city" as const }];
  return locationHistory([record], countryNames).map(({ code }) => ({
    id: code,
    label: countryNames[code],
    country: code,
    coordinates: countryCenters[code],
    precision: "country" as const,
  }));
}

export function prepareGlobeData(
  records: JourneyRecord[],
  phase: JourneyPhase,
  selectedRecordId?: string | null,
  geographicPlaces: JourneyGeographicPlace[] = [],
) {
  const activeIds = new Set(
    [...phase.started, ...phase.continuing].map((record) => record.id),
  );
  const reached = records.filter(
    (record) =>
      timestamp(record.start) < timestamp(phase.end) ||
      activeIds.has(record.id),
  );
  const places = new Map<string, GlobePlace>();
  const homeLabels: string[] = [];
  for (const record of [...reached].sort(
    (a, b) => timestamp(a.start) - timestamp(b.start),
  )) {
    const active = activeIds.has(record.id);
    const home = record.placeKind === "lived";
    for (const place of locate(record, geographicPlaces)) {
      const previous = places.get(place.id);
      places.set(place.id, {
        ...place,
        home: home || !!previous?.home,
        active: active || !!previous?.active,
        activeHome: (home && active) || !!previous?.activeHome,
        selected:
          (active && record.id === selectedRecordId) || !!previous?.selected,
        recordIds: [...(previous?.recordIds ?? []), record.id],
      });
      if (active && home && homeLabels.at(-1) !== place.label)
        homeLabels.push(place.label);
    }
  }
  const allPlaces = [...places.values()];
  // A country-level activity adds no extra point beside a known home there.
  // Keep it when explicitly selected so entry focus remains available.
  const markers = allPlaces.filter(
    (place) =>
      place.home ||
      place.selected ||
      place.precision === "city" ||
      !allPlaces.some((other) => other.home && other.country === place.country),
  );
  const selected = markers.filter((place) => place.selected);
  const homes = markers.filter((place) => place.activeHome);
  const active = markers.filter((place) => place.active);
  const focus = selected.length ? selected : homes.length ? homes : active;
  const center: [number, number] = focus.length
    ? geoCentroid({
        type: "MultiPoint",
        coordinates: focus.map((place) => place.coordinates),
      })
    : [0, 25];
  const homeCaption =
    homeLabels.length > 3
      ? `${homeLabels[0]} → ${homeLabels.length - 2} places → ${homeLabels.at(-1)}`
      : homeLabels.join(" → ");
  return {
    markers,
    center,
    focusKey: `${phase.id}:${selected.length ? selectedRecordId : ""}`,
    caption: selected.length
      ? selected.map((place) => place.label).join(" · ")
      : homeCaption ||
        active.map((place) => place.label).join(" · ") ||
        "No locations recorded for this phase",
    history: locationHistory(reached, countryNames),
    active: locationHistory(
      reached.filter((record) => activeIds.has(record.id)),
      countryNames,
    ),
  };
}
export type GlobeData = ReturnType<typeof prepareGlobeData>;

/** The homepage shows authored homes and visits across the whole journey. */
export function prepareLifetimeGlobeData(
  records: JourneyRecord[],
  geographicPlaces: JourneyGeographicPlace[],
  asOf: string,
): GlobeData {
  const reached = records.filter(
    (record) =>
      record.lane === "Places" && timestamp(record.start) <= timestamp(asOf),
  );
  const currentHome = reached
    .filter(
      (record) =>
        record.placeKind === "lived" &&
        (record.end === null || timestamp(record.end) > timestamp(asOf)),
    )
    .toSorted((a, b) => timestamp(b.start) - timestamp(a.start))[0];
  const home = geographicPlaces.find(
    (place) => place.id === currentHome?.geographicPlaceId,
  );
  const history = locationHistory(reached, countryNames);
  return {
    markers: [],
    center: home?.coordinates ?? [0, 25],
    focusKey: `current-home:${currentHome?.id ?? "unknown"}`,
    caption: "Places lived in and visited",
    history,
    active: history,
  };
}
