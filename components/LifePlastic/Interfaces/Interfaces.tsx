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
}

export interface PlasticType {
  PET: boolean;
  HDPE: boolean;
  PP: boolean;
  PS: boolean;
  LDPE: boolean;
  PVC: boolean;
  OTHER: boolean;
  GARBAGE: boolean;
}

export interface FormType {
  PET: boolean;
  HDPE: boolean;
  PP: boolean;
  PS: boolean;
  LDPE: boolean;
  PVC: boolean;
  OTHER: boolean;
  GARBAGE: boolean;
  Bale: boolean;
  Regrind: boolean;
  Pellet: boolean;
}

export interface MaterialType {
  name: string;
  delay: number;
  id: string;
  type: string;
  path: string;
  highlight: boolean;
}

export interface RouteType {
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
