import React, { useMemo } from "react";
import { useRouter } from "next/router";

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
import { StartingSystems } from "../../components/LifePlastic/data/StartingSystems";
import { FactoryButton } from "../../components/LifePlastic/Buttons";
import UIButtons from "../../components/LifePlastic/UI/NavBar";
import {
  Diagram,
  TutorialTitleDIV,
  TutorialDIV,
} from "../../components/LifePlastic/styles/PlasticStyles";
import RevealBox from "../../components/LifePlastic/UI/RevealBox";
import { GarbageBackground } from "../../components/LifePlastic/Garbage";
import { GarbagePile } from "../../components/LifePlastic/Plastic/GarbagePile";
import TutorialLines from "../../components/LifePlastic/TutorialLines";
import Example1 from "../../components/LifePlastic/examples/example1";
import Example2 from "../../components/LifePlastic/examples/example2";
import Example3 from "../../components/LifePlastic/examples/example3";
import { AddLabels } from "../../components/LifePlastic/AddLabels";
import RecyclingSymbols from "../../components/LifePlastic/RecyclingSymbols";
import { Processes } from "../../components/LifePlastic/Processes";
import { InitializeSystems } from "../../components/LifePlastic/data/InitializeSystems";

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

const buildInitialSystems = (
  initialSystem: SystemList,
  param: string | Array<string>
): SystemList => {
  const overwrites: Partial<SystemList> = {};
  if (param) {
    if (Array.isArray(param)) {
      param.forEach((system) => {
        if (isKeyOfState(initialSystem, system)) {
          overwrites[system] = true;
        }
      });
    } else if (isKeyOfState(initialSystem, param)) {
      overwrites[param] = true;
    }
  }
  return { ...initialSystem, ...overwrites };
};

const isKeyOfState = (
  system: SystemList,
  key: string
): key is keyof SystemList => {
  return system.hasOwnProperty(key);
};

const saveSystemState = (systemState: SystemList): string => {
  var urlString: string = "/lifeofplastic";
  for (const [key, value] of Object.entries(systemState)) {
    if (value === true) {
      urlString += `/${key}`;
    }
  }
  return urlString;
};

const useInitalizeSystem = () => {
  const router = useRouter();
  return useMemo(() => {
    return buildInitialSystems(InitializeSystems, router.query.param);
  }, [router.query.param]);
};

const Experiment013: React.FC = () => {
  const router = useRouter();
  const builtFromQuery = useInitalizeSystem();

  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>(builtFromQuery);
  const [garbagePile, setGarbagePile] = React.useState<number>(0);
  const [tutorial, setTutorial] = React.useState<boolean>(true);
  const [mode, setMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    setSystems(builtFromQuery);
  }, [builtFromQuery]);

  React.useEffect(() => {
    if (garbagePile >= 2) {
      console.log("Remove Tutorial");
      setTutorial(false);
    }
  }, [garbagePile]);

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
    <div style={{ margin: "auto", width: "1080px" }} title="Life of Plastic">
      {tutorial ? (
        <RevealBox>
          <TutorialTitleDIV>
            <h1>Life of Plastic</h1>
            <h3>...it's fantastic!</h3>
          </TutorialTitleDIV>
          <TutorialDIV>
            <p>
              Plastic, like most consumable packaging, has for a long time been
              a through-put design. Resources would be used to make bottles,
              which would be consumed and eventually thrown away. In this model,
              resources move in one direction, from production to consumption.
            </p>
            <Example1 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              Thankfully, in the 21st century, we have recycling which promises
              to loop the resources back into the production cycle and divert
              them from becoming waste. In an ideal system, resources would
              never reach landfills and instead be caught in a regenerative
              cycle.
            </p>
            <Example2 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              Unfortunately, our current recycling system is just not that
              efficent and we are left with some material being recycled back,
              while some is still diverted to landfills. While every recycling
              system is different, in general PET plastic bottles could be
              reused up to 7 times. This is roughly 85% efficent.
            </p>
            <Example3 />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              However, not all plastic is created equal. There are 7 types of
              plastic that can be recycles, though most places will only deal
              with PET, HDPE and PP. The technology exists to recycle the other
              4 types but depending on the supply and demand, they might not be
              available in your municipality.
            </p>
          </TutorialDIV>
          <TutorialDIV>
            <p>
              Try clicking on one off the plastic types and scroll down to see
              where the product ends up. You can add and remove proccesses to
              see how it effects how much keeps in the system. Maybe research
              what your munipality offers and get an idea for where your plastic
              really ends up.
            </p>
          </TutorialDIV>

          <TutorialLines />
        </RevealBox>
      ) : (
        <div />
      )}
      <Diagram>
        <GarbagePile GarbagePile={garbagePile} />
        <RecyclingSymbols />
        <AddLabels />
        <GarbageBackground />
        <SkyPipesBackground systems={systems} />
        <GroundPipesBackground systems={systems} />
        <GroundFactories systems={systems} />
        <SkyFactories systems={systems} />
        <GroundPipesForeground systems={systems} />
        <SkyPipesForeground systems={systems} />
        <Bins systems={systems} />
        {mode ? (
          <div>
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
          </div>
        ) : (
          <div style={{ position: "absolute" }}>
            <Processes />
            <Routes
              routeStyle={{
                GarbageLines: "#none",
                MixedLines: "#8e8e8e",
                BaleLines: "#8e8e8e",
                PelletLines: "#8e8e8e",
                RegrindLines: "#8e8e8e",
                HandLines: "#8e8e8e",
                ProductsLines: "#8e8e8e",
                MissingLines: "none",
              }}
            />
          </div>
        )}

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
        modeChange={() => setMode(!mode)}
        saveSystem={() => router.push(saveSystemState(systems))}
      />
    </div>
  );
};

export default Experiment013;
