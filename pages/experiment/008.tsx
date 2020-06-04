import React from "react";
import Layout from "../../components/Layout";
import { nanoid } from "nanoid";
import {
  Garbage,
  Grind,
  Pellet,
  Product,
  Waste,
} from "../../components/animejs/garbage";

interface AssemblyLine {
  materials: Array<MaterialType>;
}

interface MaterialType {
  name: string;
  id: string;
  type: string;
  path: string;
  highlight: boolean;
}

interface PathType {
  name: string;
  type: string;
  amount: number;
  path: string;
}
const routes = [
  {
    parent: "garbage",
    possibleRoutes: [
      {
        name: "grind1",
        type: "grind",
        amount: 1,
        path: "#grind1-svg path",
      },
      {
        name: "grind2",
        type: "grind",
        amount: 1,
        path: "#grind2-svg path",
      },
      {
        name: "grind1",
        type: "grind",
        amount: 1,
        path: "#grind1-svg path",
      },
      {
        name: "grind2",
        type: "grind",
        amount: 1,
        path: "#grind2-svg path",
      },
      {
        name: "grind1",
        type: "grind",
        amount: 1,
        path: "#grind1-svg path",
      },
      {
        name: "grind2",
        type: "grind",
        amount: 1,
        path: "#grind2-svg path",
      },
      {
        name: "waste6",
        type: "waste",
        amount: 1,
        path: "#waste6-svg path",
      },
    ],
  },
  {
    parent: "grind1",
    possibleRoutes: [
      { name: "pellet2", type: "pellet", amount: 1, path: "#pellet2-svg path" },
      { name: "pellet2", type: "pellet", amount: 1, path: "#pellet2-svg path" },
      { name: "pellet2", type: "pellet", amount: 1, path: "#pellet2-svg path" },
      { name: "waste8", type: "waste", amount: 1, path: "#waste8-svg path" },
    ],
  },
  {
    parent: "grind2",
    possibleRoutes: [
      { name: "pellet1", type: "pellet", amount: 1, path: "#pellet1-svg path" },
      { name: "pellet1", type: "pellet", amount: 1, path: "#pellet1-svg path" },
      { name: "pellet1", type: "pellet", amount: 1, path: "#pellet1-svg path" },
      { name: "waste7", type: "waste", amount: 1, path: "#waste7-svg path" },
    ],
  },
  {
    parent: "pellet1",
    possibleRoutes: [
      {
        name: "product1",
        type: "product",
        amount: 1,
        path: "#product1-svg path",
      },
      {
        name: "product2",
        type: "product",
        amount: 1,
        path: "#product2-svg path",
      },
      {
        name: "product1",
        type: "product",
        amount: 1,
        path: "#product1-svg path",
      },
      {
        name: "product2",
        type: "product",
        amount: 1,
        path: "#product2-svg path",
      },
      {
        name: "product1",
        type: "product",
        amount: 1,
        path: "#product1-svg path",
      },
      {
        name: "product2",
        type: "product",
        amount: 1,
        path: "#product2-svg path",
      },
      {
        name: "product1",
        type: "product",
        amount: 1,
        path: "#product1-svg path",
      },
      {
        name: "product2",
        type: "product",
        amount: 1,
        path: "#product2-svg path",
      },
      { name: "waste2", type: "waste", amount: 1, path: "#waste2-svg path" },
    ],
  },
  {
    parent: "pellet2",
    possibleRoutes: [
      {
        name: "product3",
        type: "product",
        amount: 1,
        path: "#product3-svg path",
      },
      {
        name: "product3",
        type: "product",
        amount: 1,
        path: "#product3-svg path",
      },
      {
        name: "product3",
        type: "product",
        amount: 1,
        path: "#product3-svg path",
      },
      { name: "waste1", type: "waste", amount: 1, path: "#waste1-svg path" },
    ],
  },
  {
    parent: "product1",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      { name: "waste5", type: "waste", amount: 1, path: "#waste5-svg path" },
    ],
  },
  {
    parent: "product2",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      { name: "waste4", type: "waste", amount: 1, path: "#waste4-svg path" },
    ],
  },
  {
    parent: "product3",
    possibleRoutes: [
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      {
        name: "garbage",
        type: "garbage",
        amount: 1,
        path: "#garbage-svg path",
      },
      { name: "waste3", type: "waste", amount: 1, path: "#waste3-svg path" },
    ],
  },
];

export const Experiment007 = () => {
  const [state, setState] = React.useState<AssemblyLine>({
    materials: [],
  });

  const nextPath = (item: MaterialType) => {
    const currentPath = routes.find((i) => i.parent === item.name);
    if (currentPath) {
      const picked = Math.floor(
        Math.random() * currentPath.possibleRoutes.length
      );
      const nextPath = currentPath.possibleRoutes[picked];
      nextMaterial(item, nextPath);
      console.log(nextPath);
    }
  };

  const nextMaterial = (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    setState((state) => {
      const modifiedMaterials = state.materials.concat({
        name: nextPath.name,
        id: newId,
        type: nextPath.type,
        path: nextPath.path,
        highlight: parent.highlight,
      });
      const materials = modifiedMaterials.filter((i) => parent.id != i.id);
      console.log(materials);
      return { ...state, materials };
    });
  };

  const addGarbage = () => {
    const newId = nanoid();
    setState((state) => {
      const materials = state.materials.concat({
        name: "garbage",
        id: newId,
        type: "garbage",
        path: "#garbage-svg path",
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  return (
    <Layout title="Experiment | 008">
      <h2>008 - Restructure the Assembly Line </h2>
      <h4>Date: June 4th 2020</h4>
      <p>
        The last experiment was a big success but I ended up coding myself into
        a corner. In the previous experiment I had a state for each type of
        particle and then rendered each according to their type. This was fine,
        except that when one particle could turn into multiple types then it
        meant that i ran into issues with the callback functions. Now I need to
        to set up my state so that each particle has a specific type and this
        type can be rendered differently depending on when it completes.
      </p>
      <p>
        I think I need to set up a particle state and then using a function,
        look up that type and what it can turn into and then execute this based
        on a certain probability.
      </p>
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
              materials: [],
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
        {state.materials.map((item) => {
          switch (item.type) {
            case "garbage":
              return (
                <Garbage
                  key={item.id}
                  id={item.id}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "grind":
              return (
                <Grind
                  key={item.id}
                  id={item.id}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "pellet":
              return (
                <Pellet
                  key={item.id}
                  id={item.id}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "product":
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "waste":
              return (
                <Waste
                  key={item.id}
                  id={item.id}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
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
    </Layout>
  );
};

export default Experiment007;
