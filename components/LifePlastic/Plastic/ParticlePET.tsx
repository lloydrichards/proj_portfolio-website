import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticlePET = ({
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
          <g id="PET1" transform="rotate(-90) translate(-21 0)">
            <path
              d="M9.036.348h2.675v1.538h-.236v.75c.794.246 2.381.966 2.381 1.872v1.664c-.054.216 0 .555-.601 1.087.2.162.601.67.601 1.41v10.518a1.16 1.16 0 01-2.32 0 1.16 1.16 0 01-2.321 0 1.16 1.16 0 11-2.32 0V8.67c0-.74.4-1.248.6-1.41-.6-.532-.546-.871-.6-1.087V4.508c0-.906 1.587-1.626 2.38-1.873v-.75h-.239V.349z"
              fill={colour}
            />
            <path
              d="M9.276 1.886h-.24V.348h2.675v1.538h-.236m-2.2 0v.75c-.793.246-2.38.966-2.38 1.872v1.664c.054.216 0 .555.6 1.087m1.78-5.373h2.2m-3.98 5.373c-.2.162-.6.67-.6 1.41v10.518a1.16 1.16 0 102.32 0 1.16 1.16 0 102.32 0 1.16 1.16 0 102.321 0V8.67c0-.74-.4-1.248-.601-1.41m-5.76 0h5.76m0 0c.601-.532.547-.871.601-1.087V4.508c0-.906-1.587-1.626-2.381-1.873v-.75"
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
          <g id="PET2" transform="rotate(-90) translate(-21 0)">
            <path
              d="M9.036.348h2.675v1.538h-.236v.75c.794.246 2.38.966 2.38 1.872v8.746a.705.705 0 010 1.41c.39 0 .707.344.707.733 0 .39-.315.705-.705.705l-.001 3.085a1.16 1.16 0 11-2.32 0 1.16 1.16 0 01-2.321 0 1.16 1.16 0 11-2.32 0l-.006-3.085a.705.705 0 01-.698-.705c0-.39.314-.733.704-.733h-.007a.705.705 0 01.007-1.41V4.508c0-.906 1.587-1.626 2.38-1.873v-.75h-.239V.349z"
              fill={colour}
            />
            <path
              d="M9.276 1.886h-.24V.348h2.675v1.538h-.236m-2.2 0v.75c-.793.246-2.38.966-2.38 1.872v8.746m2.38-11.368h2.2m0 0v.75c.794.246 2.38.966 2.38 1.872v8.746m-6.96 0a.705.705 0 00-.007 1.41m.007-1.41h6.96m0 0a.705.705 0 010 1.41m0 0H6.889m6.968 0c.39 0 .707.344.707.733 0 .39-.316.705-.706.705m-6.969-1.438h.007c-.39 0-.704.344-.704.733 0 .387.312.702.698.705m6.968 0H6.89m6.968 0l-.001 3.085a1.16 1.16 0 11-2.32 0 1.16 1.16 0 01-2.321 0 1.16 1.16 0 11-2.32 0l-.006-3.085"
              stroke="#000"
              stroke-width=".5"
            />
          </g>
        </svg>
      </div>
    );
  }
};
