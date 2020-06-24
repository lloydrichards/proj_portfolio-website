import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticlePP = ({
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
      opacity: colour === "black" ? [0.5, 0] : 1,
      delay: colour === "black" ? 0: delay,
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
          <g id="PP1" transform="rotate(-90) translate(-21 0)">
            <path
              d="M5.91 20.348v-1.376L4.625 2.137H3.57V.347h13.61v1.79h-1.054L14.84 18.972v1.376H5.91z"
              fill={colour}
            />
            <path
              d="M5.91 18.972v1.376h8.931v-1.376m-8.931 0L4.625 2.137M5.91 18.972h8.931M4.625 2.137H3.57V.347h13.61v1.79h-1.054m-11.5 0h11.5M14.84 18.972l1.285-16.835"
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
          <g id="PP2" transform="rotate(-90) translate(-21 0)">
            <path
              d="M16.56.348c.583 0 1.056.473 1.056 1.056v3.801c0 .564-.44 1.024-.997 1.055v12.527a1.56 1.56 0 01-1.56 1.56H5.832a1.56 1.56 0 01-1.561-1.56V6.262h-.082a1.057 1.057 0 01-1.056-1.056V1.404c0-.583.473-1.056 1.056-1.056h12.37z"
              fill={colour}
            />
            <path
              d="M16.56 6.262c.583 0 1.056-.473 1.056-1.057v-3.8c0-.584-.473-1.057-1.056-1.057H4.19c-.584 0-1.057.473-1.057 1.056v3.802c0 .583.473 1.056 1.056 1.056l12.43-.002v12.527a1.56 1.56 0 01-1.56 1.56H5.832a1.56 1.56 0 01-1.561-1.56V6.262m2.155 3.255h7.83m-7.83 2.593h7.83"
              stroke="#000"
              stroke-width=".5"
            />
          </g>
        </svg>
      </div>
    );
  }
};
