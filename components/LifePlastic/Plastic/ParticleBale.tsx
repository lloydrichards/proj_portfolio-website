import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticleBale = ({
  pathRef,
  onComplete,
  delay,
  colour,
}: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      opacity: colour === "black" ? [0.5, 0] : 1,
      delay: colour === "black" ? 0 : delay,
      duration: path("d").totalLength / velocity,
      easing: "linear",
      complete: onComplete,
    });

    return instance.pause;
  }, []);
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
        <g id="Bale" transform="rotate(-90) translate(-21 0)">
          <path
            d="M.672 18.337h1.363L2.03 10.27l-.005-8.076c0-.637.517-1.154 1.154-1.154h14.996c.637 0 1.153.516 1.153 1.153v16.144h1.344v2.706h-1.343v-.64H2.035v.64H.672v-2.706z"
            fill={colour}
          />
          <path
            d="M10.682 18.346h8.647v-8.077m-8.647 8.077H2.035L2.03 10.27m8.652 8.076L10.677 1.04m0 0H3.179c-.637 0-1.154.517-1.154 1.154l.005 8.076m8.647-9.23h7.498c.637 0 1.153.516 1.153 1.153v8.076m-17.298 0h17.298M.672 18.337h20v2.706h-1.343v-.64H2.035v.64H.672v-2.706z"
            stroke="#000"
            stroke-width=".5"
          />
        </g>
      </svg>
    </div>
  );
};
