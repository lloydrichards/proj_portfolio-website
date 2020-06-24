import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticlePellet = ({
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
      delay: colour === "black" ? 0: delay,
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
        <g id="Pellet" transform="rotate(-90) translate(-21 0)">
          <path
            d="M.672 18.426h1.36c-.547-1.694-1.769-6.116-.001-9.275C3.636 6.28 5.95 2.535 6.25 1.129h2.138c.42.745 1.26 2.554 1.26 3.825v3.128h1.792V4.954c0-1.271.84-3.08 1.261-3.825h2.256c.298 1.406 2.424 4.6 4.372 8.021 1.79 3.146.55 7.582.003 9.276h1.34v2.706h-1.343v-.64H2.035v.64H.672v-2.706z"
            fill={colour}
          />
          <path
            d="M19.329 18.435h-8.647m8.647 0c.546-1.688 1.794-6.134 0-9.285-1.948-3.422-4.074-6.615-4.372-8.021h-2.256m6.628 17.306h-6.325M8.388 1.129H6.25C5.952 2.535 3.636 6.28 2.03 9.15c-1.77 3.164-.54 7.596.005 9.284l5.873-.009m.48-17.297v6.953h1.26M8.389 1.13c.42.745 1.26 2.554 1.26 3.825v3.128m3.053-6.953v6.953H11.44M12.7 1.13c-.42.745-1.261 2.554-1.261 3.825v3.128m-1.791 0h1.79M7.91 18.426l-1.287-1.918m1.286 1.918l5.096.009m0 0c.06-.125 1.034-.842 1.513-1.927M.672 18.426h20v2.706h-1.343v-.64H2.035v.64H.672v-2.706z"
            stroke="#000"
            stroke-width=".5"
          />
        </g>
      </svg>
    </div>
  );
};
