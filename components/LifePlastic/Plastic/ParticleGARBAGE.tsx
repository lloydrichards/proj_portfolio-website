import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticleGARBAGE = ({
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
      opacity: colour === "#424242" ? [0.5, 0] : 1,
      delay: colour === "#424242" ? 0: delay,
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
        zIndex: 6
      }}
    >
      <svg
        width="21"
        height="21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ParticleGarbage" transform="rotate(-90) translate(-21 0)">
          <path
            d="M2.018 9.162c-1.77 3.165-2.289 6.476.004 9.284 1.596 1.956 3.35 2.761 5.873 2.698l5.096.004c2.677.22 4.633-.616 6.325-2.701 2.284-2.816 1.794-6.134 0-9.285-1.948-3.422-7.591-4.098-7.89-5.504 0-1.272.842-1.772 1.262-2.517H8.375c.42.745 1.26 1.245 1.26 2.517-.297 1.406-6.011 2.634-7.617 5.504z"
            fill={colour}
          />
          <path
            d="M7.895 21.144c-2.523.063-4.277-.742-5.873-2.697-2.293-2.81-1.775-6.12-.004-9.285 1.606-2.87 7.32-4.098 7.618-5.504 0-1.272-.841-1.772-1.261-2.517h4.313c-.42.745-1.261 1.245-1.261 2.517.298 1.406 5.941 2.082 7.889 5.504 1.794 3.15 2.284 6.469 0 9.284-1.692 2.086-3.648 2.922-6.325 2.702m-5.096-.004L6.61 16.52m1.286 4.624l5.096.004m0 0c.434-1.265.992-3.219 1.513-4.628M9.99 5.858l-2.094 1.63m3.044-1.63l2.442 2.315m-3.021-1.01L8.718 10.26"
            stroke="#000"
            stroke-width=".5"
          />
        </g>
      </svg>
    </div>
  );
};
