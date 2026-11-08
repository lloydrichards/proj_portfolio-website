import { geoCentroid } from "d3";
import world from "../data/countries.json";
export const countries = world.map((country) => ({
  type: "Feature" as const,
  properties: { code: country.code, name: country.name },
  geometry: { type: "MultiPolygon" as const, coordinates: country.coordinates },
}));
export const countryNames = Object.fromEntries(
  countries.map((country) => [
    country.properties.code,
    country.properties.name,
  ]),
);
export const countryCenters = Object.fromEntries(
  countries.map((country) => [country.properties.code, geoCentroid(country)]),
);
