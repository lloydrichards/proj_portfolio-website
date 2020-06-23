export interface AssemblyLine {
  materials: Array<MaterialType>;
}

export interface OldSystemList {
  MixedBin: boolean;
  PETBin: boolean;
  HDPEBin: boolean;
  PPBin: boolean;
  PSBin: boolean;
  LDPEBin: boolean;
  PVCBin: boolean;
  OTHERBin: boolean;
  TRASHBin: boolean;
}

export interface MissingLines {
  "Missing-rPET-SeperateRefiner": boolean;
  "Missing-rHDPE-SeperateRefiner": boolean;
  "Missing-rPP-Refiner": boolean;
  "Missing-rPS-Refiner": boolean;
  "Missing-rPVC-Refiner": boolean;
  "Missing-rLDPE-Refiner": boolean;
  "Missing-PS-Grinder": boolean;
  "Missing-rHDPE-MixedRefiner": boolean;
  "Missing-PP-Grinder": boolean;
  "Missing-rPET-Refiner": boolean;
  "Missing-HDPE-SeperateGrinder": boolean;
  "Missing-PET-SeperateGrinder": boolean;
  "Missing-PET-MixedGrinder": boolean;
  "Missing-HDPE-MixedGrinder": boolean;
  "Missing-PVC-Grinder": boolean;
  "Missing-Other-Refiner": boolean;
  "Missing-Other-MachineSorting": boolean;
  "Missing-LDPE-MachineSorting": boolean;
  "Missing-PS-MachineSorting": boolean;
  "Missing-PS-HandSorting": boolean;
  "Missing-PP-MachineSorting": boolean;
  "Missing-HDPE-MachineSorting": boolean;
  "Missing-PET-MachineSorting": boolean;
  "Missing-PET-HandSorting": boolean;
  "Missing-HDPE-HandSorting": boolean;
  "Missing-PP-HandSorting": boolean;
  "Missing-LDPE-HandSorting": boolean;
  "Missing-Other-HandSorting": boolean;
  "Missing-WindowFrames": boolean;
  "Missing-rPETCloths": boolean;
  "Missing-rPETFiber": boolean;
  "Missing-Toys": boolean;
  "Missing-PETFurniture": boolean;
  "Missing-HDPEBottles": boolean;
  "Missing-BottleCaps": boolean;
  "Missing-PETBottles": boolean;
  "Missing-PVCPipes": boolean;
  "Missing-Buckets": boolean;
  "Missing-OfficeSupplies": boolean;
  "Missing-HDPEPipes": boolean;
  "Missing-GardenFurniture": boolean;
  "Missing-Concrete": boolean;
  "Missing-PlasticBags": boolean;
  "Missing-LandscapeFabric": boolean;
  "Missing-PictureFrames": boolean;
  "Missing-Insulation": boolean;
  "Missing-ConcreteInfill": boolean;
  "Mixed-Garbage": boolean;
  none: boolean;
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

  PETHandSorting: boolean;
  HDPEHandSorting: boolean;
  PPHandSorting: boolean;
  PSHandSorting: boolean;
  LDPEHandSorting: boolean;
  PVCHandSorting: boolean;
  OTHERHandSorting: boolean;

  PETMachineSorting: boolean;
  HDPEMachineSorting: boolean;
  PPMachineSorting: boolean;
  PSMachineSorting: boolean;
  LDPEMachineSorting: boolean;
  OTHERMachineSorting: boolean;

  PETMixedGrinder: boolean;
  PETSeperateGrinder: boolean;
  HDPEMixedGrinder: boolean;
  HDPESeperateGrinder: boolean;
  PPGrinder: boolean;
  PSGrinder: boolean;
  PVCGrinder: boolean;

  EPSSmelter: boolean;

  rPETMixedRefiner: boolean;
  rPETSeperateRefiner: boolean;
  rHDPEMixedRefiner: boolean;
  rHDPESeperateRefiner: boolean;
  rPPRefiner: boolean;
  rPSRefiner: boolean;
  rLDPERefiner: boolean;
  rPVCRefiner: boolean;
  OtherRefiner: boolean;

  ProductWindowFrames: boolean;
  ProductPETFurniture: boolean;
  ProductrPETCloths: boolean;
  ProductToys: boolean;
  ProductrPETFiber: boolean;
  ProductBottleCaps: boolean;
  ProductHDPEBottles: boolean;
  ProductPETBottles: boolean;
  ProductPVCPipes: boolean;
  ProductHDPEPipes: boolean;
  ProductBuckets: boolean;
  ProductOfficeSupplies: boolean;
  ProductLandscapeFabric: boolean;
  ProductInsulation: boolean;
  ProductPictureFrames: boolean;
  ProductPlasticBags: boolean;
  ProductGardenFurniture: boolean;
  ProductConstructionInfill: boolean;
  ProductConcrete: boolean;
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
  toWaste: keyof MissingLines;
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

export interface FactoryProps {
  systems: SystemList;
}

export interface ToggleProps {
  systems: SystemList;
  getSystemId: (id: string) => void;
}
