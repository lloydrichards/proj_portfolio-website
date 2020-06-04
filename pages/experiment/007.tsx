import React from "react";
import Layout from "../../components/Layout";
import { nanoid } from "nanoid";
import {
  Garbage,
  Grind,
  Pellet,
  Product,
} from "../../components/animejs/garbage";

interface AssemblyLine {
  garbage: Array<GarbageType>;
  grinds: Array<GrindType>;
  pellets: Array<PelletType>;
  products: Array<ProductType>;
}

interface GarbageType {
  id: string;
  type: string;
  highlight: boolean;
}
interface GrindType {
  id: string;
  type: string;
  highlight: boolean;
}
interface PelletType {
  id: string;
  type: string;
  highlight: boolean;
}
interface ProductType {
  id: string;
  type: string;
  highlight: boolean;
}

const routes = [
  { parent: "garbage", possibleRoutes: ["grind1", "grind2"] },
  { parent: "grind1", possibleRoutes: ["pellet2"] },
  { parent: "grind2", possibleRoutes: ["pellet1"] },
  { parent: "pellet2", possibleRoutes: ["product2", "product3"] },
  { parent: "pellet1", possibleRoutes: ["product1"] },
  { parent: "product1", possibleRoutes: ["garbage"] },
  { parent: "product2", possibleRoutes: ["garbage"] },
  { parent: "product3", possibleRoutes: ["garbage"] },
];

export const Experiment007 = () => {
  const [state, setState] = React.useState<AssemblyLine>({
    garbage: [],
    grinds: [],
    pellets: [],
    products: [],
  });

  const nextPath = (
    item: GarbageType | GrindType | PelletType | ProductType
  ) => {
    const nextRoute = routes.find((i) => i.parent === item.type);
    if (nextRoute) {
      return nextRoute.possibleRoutes[
        Math.floor(Math.random() * nextRoute.possibleRoutes.length)
      ];
    } else return "garbage";
  };

  const addGarbage = () => {
    const newId = nanoid();
    setState((state) => {
      const garbage = state.garbage.concat({
        id: newId,
        type: "garbage",
        highlight: false,
      });
      return { ...state, garbage };
    });
  };
  const addGrind = (parent: GarbageType) => {
    setState((state) => {
      const grinds = state.grinds.concat({
        id: parent.id,
        type: nextPath(parent),
        highlight: parent.highlight,
      });
      const garbage = state.garbage.filter((i) => parent.id != i.id);
      return { ...state, garbage, grinds };
    });
  };
  const addPellet = (parent: GrindType) => {
    setState((state) => {
      const pellets = state.pellets.concat({
        id: parent.id,
        type: nextPath(parent),
        highlight: parent.highlight,
      });

      const grinds = state.grinds.filter((i) => parent.id != i.id);
      return { ...state, grinds, pellets };
    });
  };
  const addProduct = (parent: PelletType) => {
    setState((state) => {
      const products = state.products.concat({
        id: parent.id,
        type: nextPath(parent),
        highlight: parent.highlight,
      });
      const pellets = state.pellets.filter((i) => parent.id != i.id);
      return { ...state, pellets, products };
    });
  };

  return (
    <Layout title="Experiment | 007">
      <h2>007 - Little SVG System </h2>
      <h4>Date: June 3rd 2020</h4>
      <p>
        The plan with this is to have a small system of pipes and boxes that
        move around in a circle. There needs to be multiple paths that it can
        take with an input, a cycling feature, and a garbage. The plan is:
      </p>
      <ol>
        <li>Create SVG paths in Figma that lead around in a few ways.</li>
        <li>Add a few buttons to add a square, pause, and reset</li>
        <li>Add probability to move between different lines</li>
        <li>Add state for garbage collected overtime</li>
        <li>
          (optional) Add the ability to remove a pipe which will cause the
          squares to fall to the garbage
        </li>
      </ol>
      <p>Lets jump into this!</p>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            addGarbage();
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 100,
            backgroundColor: "green",
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            console.log(state);
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 350,
            backgroundColor: "blue",
          }}
        >
          State
        </button>
        <button
          onClick={() => {
            setState({
              garbage: [],
              grinds: [],
              pellets: [],
              products: [],
            });
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 500,
            backgroundColor: "red",
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ width: 800, height: 2000 }}>
        {state.garbage.map((item) => (
          <Garbage
            key={item.id}
            id={item.id}
            pathRef={"#garbage-svg path"}
            onComplete={() => addGrind(item)}
          />
        ))}
        {state.grinds.map((item) => (
          <Grind
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={() => addPellet(item)}
          />
        ))}
        {state.pellets.map((item) => (
          <Pellet
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={() => addProduct(item)}
          />
        ))}
        {state.products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={addGarbage}
          />
        ))}
        <div style={{ position: "relative" }}>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product1-svg"
          >
            <path
              d="M211.5 466v110.5c0 16.569-13.431 30-30 30h-31c-16.569 0-30 13.431-30 30v223c0 16.569 13.431 30 30 30H196c16.569 0 30 13.431 30 30V935"
              fill="none"
              stroke="purple"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet1-svg"
          >
            <path
              d="M540 1847.5v9.5c0 16.57 13.431 30 30 30h72c16.569 0 30-13.43 30-30V320.5c0-16.569-13.431-30-30-30H239.5c-16.569 0-30 13.431-30 30v123"
              fill="none"
              stroke="blue"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product3-svg"
          >
            <path
              d="M426 470h119c16.569 0 30 13.431 30 30v109.5c0 9.665-7.835 17.5-17.5 17.5v0c-9.665 0-17.5 7.835-17.5 17.5v88"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product2-svg"
          >
            <path
              d="M426 495v32c0 16.569-13.431 30-30 30h-28.5c-16.569 0-30 13.431-30 30v145.5"
              fill="none"
              stroke="red"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet2-svg"
          >
            <path
              d="M426 1847.5v40.5c0 16.57 13.431 30 30 30h217c16.569 0 30-13.43 30-30V287.5c0-16.569-13.431-30-30-30H456c-16.569 0-30 13.431-30 30v156"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind2-svg"
          >
            <path
              d="M436 1317h74c16.569 0 30 13.43 30 30v52.5c0 16.57-13.431 30-30 30H384c-16.569 0-30 13.43-30 30v94c0 16.57 13.431 30 30 30h126c16.569 0 30 13.43 30 30V1838"
              fill="none"
              stroke="green"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind1-svg"
          >
            <path
              d="M426 1331.5V1448c0 16.57-13.431 30-30 30H221c-16.569 0-30 13.43-30 30v138.5c0 16.57 13.431 30 30 30h175c16.569 0 30 13.43 30 30v129"
              fill="none"
              stroke="pink"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="garbage-svg"
          >
            <path
              d="M323 1012v150.01c0 16.57 13.431 29.99 30 29.99h41.5c16.569 0 30 13.43 30 30v85"
              fill="none"
              stroke="lightblue"
            />
          </svg>
          <svg
            id="waste8-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M411 1843.5H76.5c-16.569 0-30 13.43-30 30v80.5"
            />
          </svg>
          <svg
            id="waste7-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M523 1847h-11.5c-10.77 0-19.5 8.73-19.5 19.5v0c0 10.77-8.73 19.5-19.5 19.5h-396c-16.569 0-30 13.43-30 30v43"
            />
          </svg>
          <svg
            id="waste6-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M407.5 1320h-331c-16.569 0-30 13.43-30 30v610.5"
            />
          </svg>
          <svg
            id="waste5-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M212.5 936H202c-16.569 0-30 13.431-30 30v272c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v662.5"
            />
          </svg>
          <svg
            id="waste4-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M320 736h-7.5c-16.569 0-30 13.431-30 30v471.5c0 16.57-13.431 30-30 30h-176c-16.569 0-30 13.43-30 30v660"
            />
          </svg>
          <svg
            id="waste3-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M528 734.5h-9c-16.569 0-30 13.431-30 30V870c0 16.569-13.431 30-30 30H314c-16.569 0-30 13.431-30 30v306c0 16.57-13.431 30-30 30H76.5c-16.569 0-30 13.43-30 30v661.5"
            />
          </svg>
          <svg
            id="waste2-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M193 456h-1c-16.569 0-30 13.431-30 30v5.5c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30V1954"
            />
          </svg>
          <svg
            id="waste1-svg"
            width="800"
            height="2000"
            style={{ position: "absolute" }}
          >
            <path
              fill="none"
              stroke="lightgrey"
              d="M409.5 472.5h-15.75c-14.774 0-26.75 11.976-26.75 26.75v0c0 14.774-11.976 26.75-26.75 26.75H283c-16.569 0-30 13.431-30 30v241c0 16.569-13.431 30-30 30H76.5c-16.569 0-30 13.431-30 30v1102"
            />
          </svg>
        </div>
      </div>
      <p>
        Used Figma and SVGOMG to create paths that were copy and pasted into the
        page component. Each one was given a unique id and colour to help
        identify them. Currently there are three paths:{" "}
        <pre>
          <code>{`Garbage -> Grind 1 -> Pellet 2 -Product 2
Garbage -> Grind 1 -> Pellet 2 -Product 3
Garbage -> Grind 2 -> Pellet 1 -Product 1`}</code>
        </pre>
      </p>
      <p>
        Buttons added and moved to the centre of the diagram. Had to move their
        zIndex up since they were being blocked by the SVGs when trying to
        click. Debugged with a console log to make sure everything is working.
      </p>
      <p>
        Hooked up some simple random logic that generates a new piece each time
        something gets to the end. By pressing 'Add' you can introduce parts to
        the system which will cycle around and around. Need to set up some more
        logic as well as a seperate state for the possible direction. Will also
        be usefull to figure out how to remove the elements after they complete
        as it slows down after a while.
      </p>
      <p>
        Would also be interesting to play around with the 'speed' of the
        assembly line by having a contant that can be changed which effects the
        speed proportionally. There is a method on the <code>anime.path()</code>{" "}
        that should allow to figure out its length and then use some kind of
        velocity calculated off of distance/time.
      </p>
      <hr />
      <p>
        Added a filter that removes the object when its converted to the next
        type. Have also implimented a lookup table for what paths the item can
        take. Now the state remains the same size throughout, though the ids of
        each object changes. Would like to next work on a click event to
        highlight something and then pass this property along to the next
        conversion. Additionally Id like to try splitting up the conversion so
        when 'garbage' converts to 'grind' it results in say 5 smaller circles
        which could go either way. Additionally, some conversions could only
        take place when a certain amount have accomulated, say when 5 pellets
        are turned into a product.
      </p>
    </Layout>
  );
};

export default Experiment007;
