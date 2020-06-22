import React from "react";
import Layout from "../../components/Layout";
import * as chroma from "chroma-js";

import {
  AssemblyLine,
  RouteType,
  PathType,
  MaterialType,
  SystemList,
  FormType,
} from "../../components/LifePlastic/Interfaces/Interfaces";
import { RootRoutes } from "../../components/LifePlastic/data/RootRoutes";
import { CombinedRoutes } from "../../components/LifePlastic/Routes/CombinedRoutes";

import { Plastic } from "../../components/LifePlastic/Plastic/PlasticParticles";
import { ParticlePET } from "../../components/LifePlastic/Plastic/ParticlePET";
import { ParticleHDPE } from "../../components/LifePlastic/Plastic/ParticleHDPE";
import { ParticlePP } from "../../components/LifePlastic/Plastic/ParticlePP";
import { ParticlePS } from "../../components/LifePlastic/Plastic/ParticlePS";
import { ParticleLDPE } from "../../components/LifePlastic/Plastic/ParticleLDPE";
import { ParticlePVC } from "../../components/LifePlastic/Plastic/ParticlePVC";
import { ParticleOTHER } from "../../components/LifePlastic/Plastic/ParticleOTHER";
import { ParticleGARBAGE } from "../../components/LifePlastic/Plastic/ParticleGARBAGE";
import { ParticlePellet } from "../../components/LifePlastic/Plastic/ParticlePellet";
import { ParticleBale } from "../../components/LifePlastic/Plastic/ParticleBale";

import { GroundFactories } from "../../components/LifePlastic/GroundFactories";
import { SkyFactories } from "../../components/LifePlastic/SkyFactories";
import { Bins } from "../../components/LifePlastic/Bins";
import { Routes } from "../../components/LifePlastic/Routes";
import { GroundPipesBackground } from "../../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../../components/LifePlastic/SkyPipesForeground";
import { nanoid } from "nanoid";

const Experiment012: React.FC = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems] = React.useState<SystemList>({
    MixedBin: true,
    PETBin: true,
    HDPEBin: true,
    PPBin: true,
    PSBin: true,
    LDPEBin: true,
    PVCBin: true,
    OTHERBin: true,
    TRASHBin: true,
    PETMachineSort: true,
    HDPEMachineSort: true,
    PPMachineSort: true,
    PSMachineSort: true,
    LDPEMachineSort: true,
    OTHERMachineSort: true,
    SeperatedPETGrinder: true,
    OTHERRefiner: true,
  });

  const pathBuilder = (path: RouteType): Array<string> => {
    if (path.possible.length === path.probability.length) {
      let arrayReturn: Array<string> = [];
      for (let x = 0; x < path.possible.length; x++) {
        for (let y = 0; y < path.probability[x]; y++) {
          arrayReturn.push(path.possible[x]);
        }
      }
      return arrayReturn;
    } else {
      console.log(
        `The Routes and Probabilities for ${path.parent} don't match!`
      );
      return ["none"];
    }
  };

  const pickPath = (path: RouteType): PathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Pick random path
      const builtPaths = pathBuilder(path);
      const picked = Math.floor(Math.random() * builtPaths.length);
      return routeLookUp(builtPaths[picked]);
      //else, goes to waste
    } else return routeLookUp(path.toWaste);
  };

  const nextPath = (item: MaterialType) => {
    const currentPath = RootRoutes.find((i) => i.parent === item.name);
    if (currentPath) {
      const nextPath = pickPath(currentPath);
      if (nextPath.type != "undefined") {
        for (var x = 0; x < nextPath.amount; x++)
          nextMaterial(setMaterials)(item, nextPath);
      }
    }
  };

  const nextMaterial = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    if (nextPath.type != "undefined") {
      setState((state) => {
        const modifiedMaterials = state.materials.concat([
          {
            name: nextPath.name,
            delay: Math.floor(Math.random() * 10) * 100,
            id: newId,
            type: nextPath.type,
            plastic: nextPath.plastic,
            version: parent.version,
            path: `#${nextPath.name}`,
            highlight: parent.highlight,
          },
        ]);
        const materials = modifiedMaterials.filter((i) => parent.id != i.id);
        return { ...state, materials };
      });
    }
  };

  const routeLookUp = (route: string): PathType => {
    const foundRoute = CombinedRoutes.find((i) => i.name === route);
    if (foundRoute) {
      return foundRoute;
    } else {
      return {
        name: "undefined",
        plastic: "undefined",
        type: "undefined",
        amount: 1,
        path: "undefined",
      };
    }
  };

  const addRecyclable = (route: string) => {
    const newId = nanoid();
    const startRoute = routeLookUp(route);
    setMaterials((state) => {
      const materials = state.materials.concat({
        name: startRoute.name,
        delay: 0,
        id: newId,
        type: startRoute.type,
        plastic: startRoute.plastic,
        version: Math.floor(Math.random() * 2),
        path: `#${startRoute.name}`,
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  const randomRecycling = (addItem: (pickedItem: string) => void) => (
    possibleRoutes: Array<string>
  ) => {
    const randomNumber = Math.floor(Math.random() * possibleRoutes.length);
    addItem(possibleRoutes[randomNumber]);
  };

  const plasticColourPicker = (type: keyof FormType) => {
    const cPallet = chroma.scale("Spectral").mode("lch").colors(7);
    switch (type) {
      case "PET":
        return cPallet[0];
      case "HDPE":
        return cPallet[1];
      case "PP":
        return cPallet[2];
      case "PS":
        return cPallet[3];
      case "LDPE":
        return cPallet[4];
      case "PVC":
        return cPallet[5];
      case "OTHER":
        return cPallet[6];
      case "MIXED":
        return "grey";
      case "GARBAGE":
        return "black";
      default:
        return "black";
    }
  };
  return (
    <Layout title="Experiment | 009">
      <h2>011 - Implimenting some Data</h2>
      <h4>Date: June 21th 2020</h4>
      <p>
        The plan now is to start implimenting some data and figuring out how to
        remove specific paths. I came up with a functions while on a hike
        yesterday that should help to control the movement of plastic between
        the various routes. Currently all the routes are given equal weight so
        there is no priority for certain routes.
      </p>
      <pre>
        <code>
          {`{
    parent: "Bale-PP-Hand",
    require: "PPHandSorting",
    possible: ["Mixed-HDPERecovery_2", "Regrind-PP"],
    probability: [1,19],
    waste: "PPHandSorting-Garbage",
  },
          `}
        </code>
      </pre>
      <pre>
        <code>
          {`export const func = (arrayRoutes, arrayProb) => {
  if (arrayRoutes.length === arrayProb.length){
    let arrayReturn = [];
    for(const x=0; x < arrayRoutes.length; x++){
      for (const y=0; y< arrayProb[x]; y++){
        arrayReturn.concat(arrayRoutes[x]);
      }
    }
    return arrayReturn;
  } else {console.log("The Routes and Probabilities don't match!")}
}
          `}
        </code>
      </pre>
      <p>
        What this should do when its given the <code>object.possible</code> and{" "}
        <code>object.probability</code> is build an array of routes equal to the
        numbers in the probability. So for the example above it would be a 5%
        chance of going to Mixed-HDPERecovery-2 and 95% chance to go to
        Regrind-PP. This will also allow me to remoce the garbage routes and
        instead impliment something that is more evident of when a system is
        missing such as the material just dropping out the pipe and keeping its
        type and plastic.{" "}
      </p>

      <p>
        The second problem is that currently everything moves 1:1 across the
        diagram and this makes everything quite liniar. What i would like to do
        is impliment something that adds up over time and fires only when a
        certain amount has been formed. For PET this could be 10 Bottles `{">"}`
        1 Bale `{">"}` 25 Regrind `{">"}` 1 Pellet `{">"}` 10 Bottles. In this
        way the material is conserved across the diagram, but because there are
        waste streams and inefficiencies in the system, it doesnt always mean
        that putting 10 bottles in will make 10 bottles out, and probablt not
        when you only put 10 in.
      </p>
      <div
        style={{
          position: "absolute",
        }}
      >
        <button
          onClick={() => {
            randomRecycling(addRecyclable)([
              "Mixed-PS-Machine",
              "Mixed-PS-Hand",
              "Mixed-Other",
              "Mixed-LDPE",
              "Mixed-PP",
              "Mixed-HDPE",
              "Mixed-PETE",
            ]);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1600,
            left: 150,
            backgroundColor: "green",
          }}
        >
          Add MIX
        </button>
        <button
          onClick={() => {
            addRecyclable("PET");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1100,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add PET
        </button>
        <button
          onClick={() => {
            addRecyclable("HDPE");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1200,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add HDPE
        </button>
        <button
          onClick={() => {
            addRecyclable("PP");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1300,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add PP
        </button>
        <button
          onClick={() => {
            addRecyclable("PS");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1400,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add PS
        </button>
        <button
          onClick={() => {
            addRecyclable("LDPE");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1500,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add LDPE
        </button>
        <button
          onClick={() => {
            addRecyclable("PVC");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1600,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add PVC
        </button>
        <button
          onClick={() => {
            addRecyclable("Other");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1600,
            left: 600,
            backgroundColor: "green",
          }}
        >
          Add Other
        </button>
        <button
          onClick={() => {
            console.log(materials);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1600,
            left: 450,
            backgroundColor: "blue",
          }}
        >
          State
        </button>
      </div>
      <div></div>
      <div
        style={{
          position: "absolute",
        }}
      >
        <SkyPipesBackground />
        <GroundPipesBackground />
        <GroundFactories />
        <SkyFactories />
        <GroundPipesForeground />
        <SkyPipesForeground />
        <Bins />
        {materials.materials.map((item) => {
          switch (item.type) {
            case "PET":
              return (
                <ParticlePET
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "HDPE":
              return (
                <ParticleHDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PP":
              return (
                <ParticlePP
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PS":
              return (
                <ParticlePS
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "LDPE":
              return (
                <ParticleLDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PVC":
              return (
                <ParticlePVC
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Bale":
              return (
                <ParticleBale
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Regrind":
              return (
                <Plastic
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Pellet":
              return (
                <ParticlePellet
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "OTHER":
              return (
                <ParticleOTHER
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "MIXED":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "GARBAGE":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
        <Routes
          routeStyle={{
            GarbageLines: "none",
            MixedLines: "none",
            BaleLines: "none",
            PelletLines: "none",
            RegrindLines: "red",
            HandLines: "none",
            ProductsLines: "none",
            MissingLines: "none",
          }}
        />
      </div>
    </Layout>
  );
};

export default Experiment012;
