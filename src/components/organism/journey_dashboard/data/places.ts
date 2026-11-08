// Country uses a three-letter code. Dates retain the month/year precision supplied by Lloyd.
export type PlaceRecord = {
  id: string;
  date: string;
  end?: string | null;
  place: string;
  country: string;
  kind: "lived" | "visited";
  title: string;
};

// All entries were confirmed as places lived. Each next arrival ends the previous stay.
const residences = [
  {
    id: "stavanger-1988",
    date: "1988-04",
    place: "Stavanger, Norway",
    country: "NOR",
  },
  {
    id: "aberdeen-1991",
    date: "1991-01",
    place: "Aberdeen, Scotland",
    country: "GBR",
  },
  {
    id: "bogota-1994",
    date: "1994-01",
    place: "Bogotá, Colombia",
    country: "COL",
  },
  {
    id: "aberdeen-1995",
    date: "1995-01",
    place: "Aberdeen, Scotland",
    country: "GBR",
  },
  {
    id: "anchorage-1996",
    date: "1996-06",
    place: "Anchorage, Alaska",
    country: "USA",
  },
  {
    id: "aberdeen-1999",
    date: "1999-06",
    place: "Aberdeen, Scotland",
    country: "GBR",
  },
  {
    id: "calgary-2000",
    date: "2000-03",
    place: "Calgary, Canada",
    country: "CAN",
  },
  { id: "australia-2012", date: "2012-01", place: "Australia", country: "AUS" },
  {
    id: "calgary-2012",
    date: "2012-06",
    place: "Calgary, Canada",
    country: "CAN",
  },
  {
    id: "costa-rica-2014",
    date: "2014-01",
    place: "Costa Rica",
    country: "CRI",
  },
  { id: "nicaragua-2014", date: "2014-02", place: "Nicaragua", country: "NIC" },
  {
    id: "calgary-2014",
    date: "2014-06",
    place: "Calgary, Canada",
    country: "CAN",
  },
  {
    id: "barcelona-2014",
    date: "2014-11",
    place: "Barcelona, Spain",
    country: "ESP",
  },
  { id: "morocco-2014", date: "2014-12", place: "Morocco", country: "MAR" },
  { id: "turkey-2015", date: "2015-01", place: "Turkey", country: "TUR" },
  {
    id: "granada-2015",
    date: "2015-03",
    place: "Granada, Spain",
    country: "ESP",
  },
  {
    id: "bristol-2015",
    date: "2015-06",
    place: "Bristol, England",
    country: "GBR",
  },
  { id: "germany", date: "2018-12", place: "Berlin, Germany", country: "DEU" },
  {
    id: "switzerland",
    date: "2019-11",
    place: "Zurich, Switzerland",
    country: "CHE",
  },
];

const homes: PlaceRecord[] = residences.map((residence, index) => ({
  ...residence,
  end: residences[index + 1]?.date ?? null,
  kind: "lived",
  title: `Living in ${residence.place}`,
}));

// Visits are point-in-time records: no trip duration or return date was supplied.
const visits = [
  { id: "croatia-2023", date: "2023-09", place: "Croatia", country: "HRV" },
  {
    id: "los-angeles-2013",
    date: "2013-01",
    place: "Los Angeles, US",
    country: "USA",
  },
  { id: "france-2022", date: "2022-05", place: "France", country: "FRA" },
  { id: "guatemala-2014", date: "2014-04", place: "Guatemala", country: "GTM" },
  { id: "poland-2014", date: "2014-11", place: "Poland", country: "POL" },
  { id: "denmark-2014", date: "2014-11", place: "Denmark", country: "DNK" },
  {
    id: "amsterdam-2024",
    date: "2024-09",
    place: "Amsterdam, Netherlands",
    country: "NLD",
  },
  {
    id: "montenegro-2026",
    date: "2026-05",
    place: "Montenegro",
    country: "MNE",
  },
  { id: "italy-2021", date: "2021-10", place: "Italy", country: "ITA" },
  { id: "iceland-2015", date: "2015-07", place: "Iceland", country: "ISL" },
  { id: "thailand-2025", date: "2025-12", place: "Thailand", country: "THA" },
  { id: "cambodia-2025", date: "2025-12", place: "Cambodia", country: "KHM" },
  { id: "malaysia-2026", date: "2026-01", place: "Malaysia", country: "MYS" },
  { id: "singapore-2026", date: "2026-01", place: "Singapore", country: "SGP" },
  { id: "mexico-2012", date: "2012-02", place: "Mexico", country: "MEX" },
];

export const places: PlaceRecord[] = [
  ...homes,
  ...visits.map((visit) => ({
    ...visit,
    kind: "visited" as const,
    title: `Visiting ${visit.place}`,
  })),
];
