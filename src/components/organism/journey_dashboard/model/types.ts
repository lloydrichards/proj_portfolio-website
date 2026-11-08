export type JourneyAnnotation = {
  kind: "pivot" | "learning";
  phaseLeadFor?: string;
  afterRecordId?: string;
  contextLane: "Work" | "Volunteer" | "Education";
};
export const lanes = [
  "Work",
  "Volunteer",
  "Education",
  "Places",
  "Events",
] as const;
export type Lane = (typeof lanes)[number];
export type JourneyRecord = {
  id: string;
  lane: Lane;
  title: string;
  organization: string;
  location: string;
  description: string;
  start: string;
  end: string | null;
  kind: "moment" | "period";
  source: "CV database" | "Personal account";
  commitment?: number;
  country?: string;
  geographicPlaceId?: string;
  placeKind?: "lived" | "visited";
  endExclusive?: boolean;
  note?: string;
  annotation?: JourneyAnnotation;
};
export type JourneyPhase = {
  id: string;
  start: string;
  end: string;
  label: string;
  title: string;
  subtitle: string;
  reason: string;
  started: JourneyRecord[];
  continuing: JourneyRecord[];
};
