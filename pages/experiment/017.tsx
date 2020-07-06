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
import { GroundPipesBackground } from "../../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../../components/LifePlastic/SkyPipesForeground";
import { nanoid } from "nanoid";
import { StartingSystems } from "../../components/LifePlastic/data/StartingSystems";
import { FactoryButton } from "../../components/LifePlastic/Buttons";
import UIButtons from "../../components/LifePlastic/UI/NavBarRedesign";
import { Diagram } from "../../components/LifePlastic/styles/PlasticStyles";
import { GarbageBackground } from "../../components/LifePlastic/Garbage";
import { GarbagePile } from "../../components/LifePlastic/Plastic/GarbagePile";
import { AddLabels } from "../../components/LifePlastic/AddLabels";
import TutorialOverlay from "../../components/LifePlastic/UI/TutorialOverlay";
import { Routes } from "../../components/LifePlastic/Routes";

export const plasticColourPicker = (type: keyof FormType) => {
  switch (type) {
    case "PET":
      return "#d50000";
    case "HDPE":
      return "#aa00ff";
    case "PP":
      return "#304ffe";
    case "PS":
      return "#00b8d4";
    case "LDPE":
      return "#00c853";
    case "PVC":
      return "#ffd600";
    case "OTHER":
      return "#ff6d00";
    case "MIXED":
      return "#78909c";
    case "GARBAGE":
      return "#424242";
    default:
      return "#424242";
  }
};

const Experiment017: React.FC = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>(StartingSystems);
  const [garbagePile, setGarbagePile] = React.useState<number>(0);
  const [mode, setMode] = React.useState<boolean>(true);

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
      } else {
        addGarbage(setMaterials)(item);
      }
    } else {
      addGarbage(setMaterials)(item);
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

  const addGarbage = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType) => {
    setGarbagePile(garbagePile + 1);
    setState((state) => {
      console.log("removed");
      const materials = state.materials.filter((i) => parent.id != i.id);
      return { materials };
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

  const toggleSystem = (id: any) => {
    if (Object.keys(systems).find((i) => i == id)) {
      const verifiedId: keyof SystemList = id;
      const selectedSystem = systems[verifiedId];
      if (selectedSystem) {
        console.log(`${verifiedId} turned OFF`);
        setSystems({ ...systems, [verifiedId]: false });
      } else {
        console.log(`${verifiedId} turned ON`);
        setSystems({ ...systems, [verifiedId]: true });
      }
    } else {
      console.log(`${id} is not a valid ID`);
    }
  };

  return (
    <Layout title="Experiment | 017">
      <h2>017 - Onboarding Tutorial</h2>
      <h4>Date: June 30th 2020</h4>
      <p>
        As part of the usability redesign for the Life of Plastic, one of the
        key areas to tackle was the Onboarding where users were introduced to
        the diagram and how to explore it. This should be a click based
        adventure where the user clicks a 'next' button and watches a few
        bottles flow through to the next stage. Here there should be some text
        and explination on what is happening and what to expect, along with
        another 'next' button.
      </p>
      <p>
        Some things I will need to experiment and design will be a splash screen
        and a way to focus the users attention onto the process at hand and give
        a little bit of information on what is happening.
      </p>
      <Diagram>
        <GarbagePile GarbagePile={garbagePile} />
        <AddLabels />
        <GarbageBackground />
        <SkyPipesBackground systems={systems} />
        <GroundPipesBackground systems={systems} />
        <GroundFactories systems={systems} />
        <SkyFactories systems={systems} />
        <GroundPipesForeground systems={systems} />
        <SkyPipesForeground systems={systems} />
        <Bins systems={systems} />
        <Routes
          routeStyle={{
            GarbageLines: "none",
            MixedLines: "none",
            BaleLines: "none",
            PelletLines: "none",
            RegrindLines: "none",
            HandLines: "none",
            ProductsLines: "none",
            MissingLines: "none",
          }}
        />
        {mode ? <div></div> : <TutorialOverlay />}

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
        <FactoryButton
          systems={systems}
          getSystemId={(id) => toggleSystem(id)}
        />
      </Diagram>
      <UIButtons
        systems={systems}
        addRecyclable={addRecyclable}
        resetState={() => {
          setSystems(StartingSystems);
          setMaterials({
            materials: [],
          });
        }}
        setSystem={(systems) => setSystems(systems)}
        modeChange={() => setMode(!mode)}
        saveSystem={() => console.log("saved")}
      />
    </Layout>
  );
};

export default Experiment017;
