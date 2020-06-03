import React from "react";
import Layout from "../../components/Layout";
import anime from "animejs";
import { nanoid } from "nanoid";
import { BoxOnPath } from "../../components/animejs/boxOnPath";
import { CircleOnPath } from "../../components/animejs/circleOnPath";

interface BoxManager {
  boxes: Array<BoxType>;
  boxes2: Array<BoxType>;
  circles: Array<BoxType>;
}

interface BoxType {
  id: string;
}

const Experiment006 = () => {
  const [state, setState] = React.useState<BoxManager>({
    boxes: [],
    boxes2: [],
    circles: [],
  });

  const onAddBtnClick = () => {
    const newId = nanoid();
    setState((state) => {
      const boxes = state.boxes.concat({ id: newId });
      console.log(boxes);
      return { ...state, boxes };
    });
  };

  const onAddBtnClick2 = () => {
    const newId = nanoid();
    setState((state) => {
      const boxes2 = state.boxes2.concat({ id: newId });
      console.log(boxes2);
      return { ...state, boxes2 };
    });
  };

  const addCircle = () => {
    const newId = nanoid();
    setState((state) => {
      const circles = state.circles.concat({ id: newId });
      console.log(circles);
      return { ...state, circles };
    });
  };

  const onComplete = (id: string) => {
    const boxes = state.boxes.filter((item) => id === item.id);
    console.log("completed!");
    addCircle();
    return { boxes };
  };

  React.useEffect(() => {
    const first = anime.path("#first-svg path");
    const second = anime.path("#second-svg path");

    const tl = anime.timeline({
      easing: "linear",
      loop: true,
    });

    tl.add({
      targets: "#emoji",
      translateX: first("x"),
      translateY: first("y"),
      rotate: first("angle"),
      duration: 5000,
    }).add({
      targets: "#emoji",
      translateX: second("x"),
      translateY: second("y"),
      rotate: second("angle"),
      backgroundColor: "lightblue",
      duration: 8000,
    });
  }, []);

  return (
    <Layout>
      <h2>006 - SVG's & Anime.js </h2>
      <h4>Date: June 3rd 2020</h4>
      <p>
        Goign to playing around with SVGs and anime.js. Using this nifty SVG
        line creater{" "}
        <a href="https://codepen.io/anthonydugois/pen/mewdyZ">
          SVG Path Builder
        </a>{" "}
        I made a path and drew it below
      </p>
      <div style={{ width: 800, height: 600 }}>
        <div style={{ position: "relative" }}>
          <div
            id="emoji"
            style={{
              height: 25,
              width: 25,
              backgroundColor: "tomato",
              fontSize: "2em",
              position: "absolute",
              top: "-14px",
              left: "-12px",
            }}
          ></div>
          <svg
            id="first-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="red"
              fill="none"
              d="M 200 100 Q 200 100 200 350 Q 200 450 250 450 Q 300 450 300 350 C 300 300 300 250 300 200 L 400 200 A 50 50 0 1 1 400 450 "
            ></path>
          </svg>
          <svg
            id="second-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="blue"
              fill="none"
              d="M 350 450 Q 300 450 300 500 Q 300 550 350 550 L 500 550 Q 600 550 600 450 L 600 350 C 600 250 500 250 500 350 Q 500 400 450 400 L 200 400 Q 100 400 100 300 Q 100 200 200 200 Q 250 200 250 250 Q 250 300 200 300 Q 150 300 150 250 L 150 100 "
            ></path>
          </svg>
        </div>
      </div>
      <p>
        Now I've added a second blue svg path and using the timeline function to
        link the two paths together. These animations can be chained together
        using the <code>{`.add({})`}</code> There is still a bit of a problem
        with the animation instantly jumping to the next start, which could
        either be ignored and the paths lined up, or another animations added
        between them.
      </p>
      <hr />
      <p>
        Now lets see if we can add a button and add a new svg each time I press
        it.
      </p>
      <p>
        This doesn't work because the <code>useEffect()</code> rerenders each
        time a new id is created. Instead I think I need to break this up into
        seperate components that each deal with their own rendering and have the
        path and id passed into them.
      </p>
      <button onClick={onAddBtnClick}>Add Box 1</button>

      <div style={{ width: 800, height: 600 }}>
        <div style={{ position: "relative" }}>
          {state.boxes.map((box) => (
            <BoxOnPath key={box.id} id={box.id} pathRef={"#fourth-svg path"} />
          ))}
          <svg
            id="fourth-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="green"
              fill="none"
              d="M 200 100 Q 200 100 200 350 Q 200 450 250 450 Q 300 450 300 350 C 300 300 300 250 300 200 L 400 200 A 50 50 0 1 1 400 450 "
            ></path>
          </svg>
        </div>
      </div>
      <p>
        Ta Da! That wasn't too hard. For this, I made a new component that took
        in the id and a string reference to the path. Inside the component I was
        able to then animate each piece individually without reloading the
        others. In this way each component deals with its own animation and
        complete state and can then pass wheather its finished or not onto the
        next part of the state. There are two ways this could be implimented
        now:
      </p>
      <ul>
        <li>
          Either by having several arrays of objects for each part of the
          assembly line. For example{" "}
          <pre>
            <code>{`instance BottleManager = {
                PETBottles: Array<PETBottle>;
                PETGrinds: Array<PETGrind>;
                PETPellets: Array<PETPellet>;
                PETFibres: Array<PETFibre>;
                etc etc...
            }`}</code>
          </pre>
          And in this way each time something finishes its line then it is
          removed and a new object is added to the next process. When these
          callback functions are invoked then there can also be the added chance
          of of it going down one of several paths. This would mean though that
          the state would get very large and complicated with each type having
          an array of itself.
        </li>
        <li>
          The second option could be that each bottle is a single object that
          travels the whole length of the assembly line and at various places
          the object is updated with new paths, new svg forms. This might help
          in being able to track something through the whole process as you
          could use the same ref to highlight or scroll lock to that object.
          <pre>
            <code>{`instance BottleManager = {
                Bottles: Array<Bottle>
            }
            
            instance Bottle {
                paths: Array[string];
                type: string;
                highlight: boolean;
                color: string;

            }`}</code>
          </pre>
          This could mean though that the random nature of the bottle is
          calculated when its created and fed into the array of path strings. In
          this way, each bottle knows where its doing from the start which might
          reduce performance issues. However this could also lead to problems
          incase parts of the assembly are removed mid process.
        </li>
      </ul>
      <hr />
      <p>
        For now, lets try use the callback function to trigger a second
        animation
      </p>
      <button onClick={onAddBtnClick2}>Add Box 2</button>
      <div style={{ width: 800, height: 600 }}>
        <div style={{ position: "relative" }}>
          {state.boxes2.map((box) => (
            <BoxOnPath
              key={box.id}
              id={box.id}
              pathRef={"#fourth-svg path"}
              onComplete={() => onComplete(box.id)}
            />
          ))}
          {state.circles.map((circle) => (
            <CircleOnPath
              key={circle.id}
              id={circle.id}
              pathRef={"#fifth-svg path"}
            />
          ))}
          <svg
            id="fourth-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="darkblue"
              fill="none"
              d="M 200 100 Q 200 100 200 350 Q 200 450 250 450 Q 300 450 300 350 C 300 300 300 250 300 200 L 400 200 A 50 50 0 1 1 400 450 "
            ></path>
          </svg>
          <svg
            id="fifth-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="pink"
              fill="none"
              d="M 350 450 Q 300 450 300 500 Q 300 550 350 550 L 500 550 Q 600 550 600 450 L 600 350 C 600 250 500 250 500 350 Q 500 400 450 400 L 200 400 Q 100 400 100 300 Q 100 200 200 200 Q 250 200 250 250 Q 250 300 200 300 Q 150 300 150 250 L 150 100 "
            ></path>
          </svg>
        </div>
      </div>
      <p>
        Using the <code>{`complet: () =>{}`}</code> properties I could pass in a
        callback function that could be used to add the circle once the square
        was completed. At this time I could also remove the square or call on a
        different animation like fading it out. I'd also like to experiment with
        adding several circles when a single square arrives and then staggering
        their deployment. this could be interesting for creating almost a
        particle effect with several bits breaking down from the single path.
      </p>
    </Layout>
  );
};

export default Experiment006;
