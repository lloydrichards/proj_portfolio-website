import anime from "animejs";
import React from "react";

interface BoxManager {
  boxes: Array<BoxType>;
  boxes2: Array<BoxType>;
  circles: Array<BoxType>;
}

interface BoxType {
  id: string;
}

interface BoxProps {
  id: string;
  pathRef: string;
  onComplete?: () => void;
}

const BoxOnPath = ({ pathRef, onComplete }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      duration: 5000,
      easing: "linear",
      complete: onComplete,
    });

    return instance.pause;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "pink",
        position: "absolute",
        top: "-14px",
        left: "-12px",
      }}
    ></div>
  );
};

const CircleOnPath = ({ pathRef }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      duration: 8000,
      easing: "linear",
    });
    return instance.pause;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "lightblue",
        borderRadius: "50%",
        position: "absolute",
        top: "-14px",
        left: "-12px",
      }}
    ></div>
  );
};

export const SVGExample = () => {
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
  );
};

export const AddSVGExample = () => {
  const [state, setState] = React.useState<BoxManager>({
    boxes: [],
    boxes2: [],
    circles: [],
  });

  const onAddBtnClick = () => {
    const newId = Math.random().toString();
    setState((state) => {
      const boxes = state.boxes.concat({ id: newId });
      // console.log(boxes);
      return { ...state, boxes };
    });
  };

  return (
    <div>
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
    </div>
  );
};

export const AddSVGExample2 = () => {
  const [state, setState] = React.useState<BoxManager>({
    boxes: [],
    boxes2: [],
    circles: [],
  });

  const onAddBtnClick = () => {
    const newId = Math.random().toString();
    setState((state) => {
      const boxes = state.boxes.concat({ id: newId });
      // console.log(boxes);
      return { ...state, boxes };
    });
  };
  return (
    <div>
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
    </div>
  );
};

export const AddSVGExample3 = () => {
  const [state, setState] = React.useState<BoxManager>({
    boxes: [],
    boxes2: [],
    circles: [],
  });

  const onAddBtnClick2 = () => {
    const newId = Math.random().toString();
    setState((state) => {
      const boxes2 = state.boxes2.concat({ id: newId });
      // console.log(boxes2);
      return { ...state, boxes2 };
    });
  };

  const addCircle = () => {
    const newId = Math.random().toString();
    setState((state) => {
      const circles = state.circles.concat({ id: newId });
      // console.log(circles);
      return { ...state, circles };
    });
  };

  const onComplete = (id: string) => {
    const boxes = state.boxes.filter((item) => id === item.id);
    // console.log("completed!");
    addCircle();
    return { boxes };
  };

  return (
    <div>
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
    </div>
  );
};
