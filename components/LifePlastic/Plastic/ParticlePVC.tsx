import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticlePVC = ({
  pathRef,
  onComplete,
  delay,
  colour,
  version,
}: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path("d").totalLength / velocity,
      easing: "linear",
      complete: onComplete,
    });

    return instance.pause;
  }, []);

  if (version === 0) {
    return (
      <div
        ref={ref}
        style={{
          height: 22,
          width: 22,
          position: "absolute",
          top: "-11px",
          left: "-11px",
        }}
      >
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="PVC1" transform="rotate(-90) translate(-21 0)">
            <path
              d="M8.988 4.412V2.9h.785V1.428h-.785V.348H13.7v1.08h-2.69V2.9h.589v1.512h.797c.642 0 1.162.52 1.162 1.162v13.611c0 .642-.52 1.163-1.162 1.163H8.214c-.642 0-1.163-.52-1.163-1.163V5.575c0-.643.52-1.163 1.162-1.163h.775z"
              fill={colour}
            />
            <path
              d="M8.988 4.412V2.9h.785m-.785 1.512h2.61m-2.61 0h-.775c-.642 0-1.162.52-1.162 1.162v13.611c0 .642.52 1.163 1.163 1.163h4.182c.642 0 1.162-.52 1.162-1.163V5.575c0-.643-.52-1.163-1.162-1.163h-.797m0 0V2.9h-.589m-1.237 0V1.428m0 1.472h1.237M9.773 1.428h1.237m-1.237 0h-.785V.348H13.7v1.08h-2.69m0 0V2.9"
              stroke="#000"
              stroke-width=".5"
            />
          </g>
        </svg>
      </div>
    );
  } else {
    return (
      <div
        ref={ref}
        style={{
          height: 22,
          width: 22,
          position: "absolute",
          top: "-11px",
          left: "-11px",
        }}
      >
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="PVC2" transform="rotate(-90) translate(-21 0)">
            <path
              d="M7.861.348h5.028v1.59h-.628V9.59h.628v1.59h-.628v7.578h.628v1.59H7.861v-1.59h.629V11.18H7.86V9.59h.629V1.938H7.86V.348z"
              fill={colour}
            />
            <path
              d="M8.49 18.758H7.86v1.59h5.028v-1.59h-.628m-3.771 0V11.18m0 7.578h3.77M8.49 11.18H7.86V9.59h.629m0 1.59h3.77M8.49 9.59V1.938m0 7.652h3.77M8.49 1.938H7.86V.348h5.028v1.59h-.628m-3.771 0h3.77m0 0V9.59m0 0h.63v1.59h-.63m0 0v7.578"
              stroke="#000"
              stroke-width=".5"
            />
          </g>
        </svg>
      </div>
    );
  }
};
