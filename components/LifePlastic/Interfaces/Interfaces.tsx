export interface AssemblyLine {
  materials: Array<MaterialType>;
}

export interface SystemList {
  MixedBin: boolean;
  PETBin: boolean;
  HDPEBin: boolean;
  PPBin: boolean;
  PSBin: boolean;
  LDPEBin: boolean;
  PVCBin: boolean;
  OTHERBin: boolean;
  TRASHBin: boolean;
  PETMachineSort: boolean;
  HDPEMachineSort: boolean;
  PPMachineSort: boolean;
  PSMachineSort: boolean;
  LDPEMachineSort: boolean;
  OTHERMachineSort: boolean;
  SeperatedPETGrinder: boolean;
  OTHERRefiner: boolean;
}

export interface PlasticType {
  PET: boolean;
  HDPE: boolean;
  PP: boolean;
  PS: boolean;
  LDPE: boolean;
  PVC: boolean;
  OTHER: boolean;
  MIXED: boolean;
  GARBAGE: boolean;
  undefined: boolean;
}

export interface FormType {
  PET: boolean;
  HDPE: boolean;
  PP: boolean;
  PS: boolean;
  LDPE: boolean;
  PVC: boolean;
  OTHER: boolean;
  MIXED: boolean;
  GARBAGE: boolean;
  Bale: boolean;
  Regrind: boolean;
  Pellet: boolean;
  undefined: boolean;
}

export interface MaterialType {
  name: string;
  delay: number;
  id: string;
  type: keyof FormType;
  plastic: keyof PlasticType;
  version: number;
  path: string;
  highlight: boolean;
}

export interface RouteType {
  parent: string;
  require: keyof SystemList;
  possible: Array<string>;
  probability: Array<number>;
  toWaste: string;
}
export interface OldRouteType {
  parent: string;
  require: keyof SystemList;
  possible: Array<string>;
  waste: string;
  wasteChance: number;
}

export interface PathType {
  name: string;
  plastic: keyof PlasticType;
  type: keyof FormType;
  amount: number;
  path: string;
}

export interface BoxProps {
  id: string;
  colour: string;
  pathRef: string;
  delay?: number;
  version: number;
  onComplete?: () => void;
  onClick?: () => void;
}
