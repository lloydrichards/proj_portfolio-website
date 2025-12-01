import { Layer, ManagedRuntime } from "effect";
import { Dataset } from "./Dataset/Dataset";
import { GitHub } from "./GitHub";
import { Laboratory } from "./Laboratory";
import { Portfolio } from "./Portfolio";

const MainLayer = Layer.mergeAll(
  Laboratory.Default,
  Portfolio.Default,
  Dataset.Default,
  GitHub.Default,
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
