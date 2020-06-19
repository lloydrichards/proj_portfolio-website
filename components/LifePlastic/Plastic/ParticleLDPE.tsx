import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticleLDPE = ({
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
      duration: path.length / velocity - (delay ? delay : 0),
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
          <g id="LDPE1" transform="rotate(-90) translate(-21 0)">
            <path
              d="M16.825 20.348h-12.9v-1.583c0-.367.057-1.224.301-1.712.306-.61.361-1.11.361-1.748V5.39c0-.638-.055-1.137-.36-1.748-.245-.488-.303-1.344-.301-1.711V.348h12.899V1.93c.001.367-.057 1.223-.3 1.711-.306.61-.361 1.11-.361 1.748v9.915c0 .638.055 1.138.36 1.748.244.488.302 1.345.3 1.712v1.583z"
              fill={colour}
            />
            <path
              d="M16.825 18.765v1.583h-12.9v-1.583m12.9 0h-12.9m12.9 0c.001-.367-.057-1.224-.3-1.712-.306-.61-.361-1.11-.361-1.748V5.39c0-.638.055-1.137.36-1.748.244-.488.302-1.344.3-1.711M3.927 18.765c-.002-.367.056-1.224.3-1.712.306-.61.361-1.11.361-1.748V5.39c0-.638-.055-1.137-.36-1.748-.245-.488-.303-1.344-.301-1.711m0 0h12.899m-12.9 0V.348h12.9V1.93M10.33 7.304v3.01m0 3.01v-3.01m0 0h3.079m-3.08 0H7.362m2.969 0l-2.143 2.143m2.143-2.143l2.17-2.17m-2.17 2.17l2.143 2.143m-2.143-2.143L8.187 8.171"
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
          <g id="LDPE2" transform="rotate(-90) translate(-21 0)">
            <path
              d="M4.284 20.348c-.546-1.688-1.39-6.134-.397-10.422A590.833 590.833 0 006.021.348H8.16c.42.745 1.261 2.554 1.261 3.825v3.128h1.791V4.173c0-1.271.841-3.08 1.262-3.825h2.256c.298 1.406 1.141 5.29 2.134 9.578.992 4.288.149 8.734-.397 10.422H4.284z"
              fill={colour}
            />
            <path
              d="M8.16.348H6.02a590.833 590.833 0 01-2.134 9.578c-.992 4.288-.149 8.734.397 10.422H7.68m.48-20V7.3h1.26M8.16.348c.42.745 1.26 2.554 1.26 3.825v3.128M12.473.348V7.3H9.42M12.473.348h2.256c.298 1.406 1.141 5.29 2.134 9.578.992 4.288.149 8.734-.397 10.422h-3.69m-.303-20c-.42.745-1.262 2.554-1.262 3.825v3.128M7.68 20.348l-1.287-3.41m1.287 3.41h5.095m0 0c.06-.125 1.035-2.326 1.514-3.41"
              stroke="#000"
              stroke-width=".5"
            />
          </g>
        </svg>
      </div>
    );
  }
};
