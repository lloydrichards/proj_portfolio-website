import React from "react";
import Layout from "../../components/Layout";

import {
  AssemblyLine,
  RouteType,
  PathType,
  MaterialType,
  SystemList,
  FormType,
} from "../../components/LifePlastic/Interfaces/Interfaces";
import { RootRoutes } from "../../components/LifePlastic/RootRoutes";
import { CombinedRoutes } from "../../components/LifePlastic/Routes/CombinedRoutes";

import { Garbage, Waste } from "../../components/animejs/garbage";

import { GroundFactories } from "../../components/LifePlastic/GroundFactories";
import { SkyFactories } from "../../components/LifePlastic/SkyFactories";
import { Bins } from "../../components/LifePlastic/Bins";
import { Routes } from "../../components/LifePlastic/Routes";
import { GroundPipesBackground } from "../../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../../components/LifePlastic/SkyPipesForeground";
import { Processes } from "../../components/LifePlastic/Processes";
import { nanoid } from "nanoid";

const Experiment010: React.FC = () => {
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

  const pickPath = (path: RouteType): PathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Chance it still goes to waste
      if (path.wasteChance > Math.random()) {
        return routeLookUp(path.waste);
      } else {
        //Pick random path
        const picked = Math.floor(Math.random() * path.possible.length);
        return routeLookUp(path.possible[picked]);
      }
      //else, goes to waste
    } else return routeLookUp(path.waste);
  };

  const nextPath = (item: MaterialType) => {
    const currentPath = RootRoutes.find((i) => i.parent === item.name);
    if (currentPath) {
      const nextPath = pickPath(currentPath);
      console.log(nextPath);
      for (var x = 0; x < nextPath.amount; x++)
        nextMaterial(setMaterials)(item, nextPath);
    }
  };

  const nextMaterial = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    setState((state) => {
      const modifiedMaterials = state.materials.concat([
        {
          name: nextPath.name,
          delay: Math.floor(Math.random() * 10) * 100,
          id: newId,
          type: nextPath.type,
          path: `#${nextPath.name}`,
          highlight: parent.highlight,
        },
      ]);
      const materials = modifiedMaterials.filter((i) => parent.id != i.id);
      return { ...state, materials };
    });
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

  const addRecyclable = (route: keyof FormType) => {
    const newId = nanoid();
    setMaterials((state) => {
      const materials = state.materials.concat({
        name: route,
        delay: 0,
        id: newId,
        type: route,
        path: `#${route}`,
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  return (
    <Layout title="Experiment | 009">
      <h2>010 - Starting with the PET Cycle</h2>
      <h4>Date: June 16th 2020</h4>
      <p>
        And so starts the process of implimenting all the paths and the movement
        of platic through the system. Will first impliment a simple button and
        add one PET bottle at a time and then slowly build up the other systems.
      </p>
      <div>
        <button
          onClick={() => {
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 2000,
            left: 150,
            backgroundColor: "green",
          }}
        >
          Add MIX
        </button>
        <button
          onClick={() => {
            addRecyclable("PET");
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 2000,
            left: 300,
            backgroundColor: "green",
          }}
        >
          Add PET
        </button>
        <button
          onClick={() => {
            addRecyclable("OTHER");
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 2000,
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
            top: 2000,
            left: 450,
            backgroundColor: "blue",
          }}
        >
          State
        </button>
      </div>
      <div></div>
      <div>
        <SkyPipesBackground />
        <GroundPipesBackground />
        <GroundFactories />
        <SkyFactories />
        <Bins />
        <GroundPipesForeground />
        <SkyPipesForeground />
        {materials.materials.map((item) => {
          switch (item.type) {
            case "PET":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PP":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Bale":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Regrind":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Pellet":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "OTHER":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "GARBAGE":
              return (
                <Waste
                  key={item.id}
                  id={item.id}
                  delay={item.delay}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
        <Routes />
        <Processes />
      </div>
    </Layout>
  );
};

export default Experiment010;
