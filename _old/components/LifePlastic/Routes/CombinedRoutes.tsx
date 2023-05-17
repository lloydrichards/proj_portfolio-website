import { BaleRoutes } from "./BaleRoutes";
import { GarbageRoutes } from "./GarbageRoutes";
import { HandRoutes } from "./HandRoutes";
import { MixedRoutes } from "./MixedRoutes";
import { PelletRoutes } from "./PelletRoutes";
import { ProductRoutes } from "./ProductRoutes";
import { RegrindRoutes } from "./RegrindRoutes";
import { MissingRoutes } from "./MissingRoutes";

export const CombinedRoutes = [
  ...BaleRoutes,
  ...GarbageRoutes,
  ...HandRoutes,
  ...MixedRoutes,
  ...PelletRoutes,
  ...ProductRoutes,
  ...RegrindRoutes,
  ...MissingRoutes,
];
