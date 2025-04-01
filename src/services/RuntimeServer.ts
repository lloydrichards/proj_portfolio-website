import { Layer, ManagedRuntime } from "effect";
import { DataApi } from "./DataApi";
import { LabApi } from "./LabApi";
import { ProjectApi } from "./ProjectApi";

const MainLayer = Layer.mergeAll(
  LabApi.Default,
  ProjectApi.Default,
  DataApi.Default,
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
