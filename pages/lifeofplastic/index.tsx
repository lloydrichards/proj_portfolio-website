import React from "react";

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
import UIButtons from "../../components/LifePlastic/UI/NavBarRedesign";
import {
  Diagram,
  TutorialTitleDIV,
  TutorialDIV,
  SKYBACKGROUND,
  NavBar,
  Toggle,
} from "../../components/LifePlastic/styles/PlasticStyles";
import RevealBox from "../../components/LifePlastic/UI/RevealBox";
import { GarbageBackground } from "../../components/LifePlastic/Garbage";
import { GarbagePile } from "../../components/LifePlastic/Plastic/GarbagePile";
import TutorialLines from "../../components/LifePlastic/TutorialLines";
import Example1 from "../../components/LifePlastic/examples/example1";
import Example2 from "../../components/LifePlastic/examples/example2";
import Example3 from "../../components/LifePlastic/examples/example3";
import { AddLabels } from "../../components/LifePlastic/AddLabels";
import TutorialOverlay from "../../components/LifePlastic/UI/TutorialOverlay";
import SymbolAnatomy from "../../components/LifePlastic/examples/SymbolAnatomy";

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

const Experiment013: React.FC = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>(StartingSystems);
  const [garbagePile, setGarbagePile] = React.useState<number>(0);
  const [tutorial, setTutorial] = React.useState<boolean>(true);
  const [triggerTutorial, setTriggerTutorial] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    console.log(garbagePile);
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
        <RevealBox show={triggerTutorial} onRemove={() => setTutorial(false)}>
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
            <SymbolAnatomy />
          </TutorialDIV>
          <TutorialDIV>
            <p>
              To start exploring what these relationships looks like, you can
              click the PET button below and then click the recycle symbol to
              add plastic. If you're unsure what to do, there is a tutorial in
              the top right. Have fun exploring!
            </p>
          </TutorialDIV>
          <TutorialLines />
          <div style={{ position: "relative", zIndex: 10, top: -30 }}>
            <NavBar>
              <div style={{ height: "60px", width: "100px" }} />
              <Toggle
                onClick={() => {
                  setTriggerTutorial(true);
                }}
              >
                PET
              </Toggle>
            </NavBar>
          </div>
        </RevealBox>
      ) : (
        <div />
      )}
      <Diagram>
        <div style={{ position: "absolute", zIndex: 9 }}>
          <TutorialTitleDIV>
            <h1>Life of Plastic</h1>
            <h3>...it's fantastic!</h3>
          </TutorialTitleDIV>
          {tutorial ? (
            <div />
          ) : (
            <button
              style={{
                background: `${SKYBACKGROUND}`,
                zIndex: 3,
                cursor: "pointer",
                float: "right",
                margin: "10px 30px",
                overflow: "visible",
                display: "block",
                border: "none",
                outline: "none",
                fontSize: "18px",
                lineHeight: "83%",
                letterSpacing: "3px",
                fontFamily: "Muli,sans-serif",
                fontWeight: 200,
                position: "relative",
                top: -150,
                left: 100,
              }}
              onClick={() => {
                setMaterials({
                  materials: [],
                });
                setTutorial(true);
                setTriggerTutorial(false);
              }}
            >
              Back to Intro
            </button>
          )}
        </div>
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
    </div>
  );
};

export default Experiment013;
