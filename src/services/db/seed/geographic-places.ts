// GeoNames cities15000, retrieved 2026-11-08. Coordinates are longitude, latitude.
// https://www.geonames.org/ — CC BY 4.0. Episode dates remain in places.ts.
export const geographicPlaces = [
  {
    id: "3137115",
    label: "Stavanger",
    country: "NOR",
    coordinates: [5.73332, 58.97005],
  },
  {
    id: "2657832",
    label: "Aberdeen",
    country: "GBR",
    coordinates: [-2.09814, 57.14369],
  },
  {
    id: "3688689",
    label: "Bogotá",
    country: "COL",
    coordinates: [-74.08175, 4.60971],
  },
  {
    id: "5879400",
    label: "Anchorage",
    country: "USA",
    coordinates: [-149.90028, 61.21806],
  },
  {
    id: "5913490",
    label: "Calgary",
    country: "CAN",
    coordinates: [-114.08529, 51.05011],
  },
  {
    id: "3128760",
    label: "Barcelona",
    country: "ESP",
    coordinates: [2.15899, 41.38879],
  },
  {
    id: "2517117",
    label: "Granada",
    country: "ESP",
    coordinates: [-3.60667, 37.18817],
  },
  {
    id: "2654675",
    label: "Bristol",
    country: "GBR",
    coordinates: [-2.59665, 51.45523],
  },
  {
    id: "2950159",
    label: "Berlin",
    country: "DEU",
    coordinates: [13.41053, 52.52437],
  },
  {
    id: "2657896",
    label: "Zurich",
    country: "CHE",
    coordinates: [8.55, 47.36667],
  },
] satisfies {
  id: string;
  label: string;
  country: string;
  coordinates: [number, number];
}[];
