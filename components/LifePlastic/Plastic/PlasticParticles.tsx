import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";

export const velocity = 0.2;

export const Plastic = ({ pathRef, onComplete, delay, colour }: BoxProps) => {
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
        height: 10,
        width: 10,
        borderRadius: "50%",
        backgroundColor: `${colour}`,
        position: "absolute",
        top: "-5px",
        left: "-5px",
      }}
    ></div>
  );
};

export const Garbage = ({ pathRef, onComplete, delay, colour }: BoxProps) => {
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

  return (
    <div
      ref={ref}
      style={{
        height: 10,
        width: 10,
        backgroundColor: `${colour}`,
        position: "absolute",
        top: "-5px",
        left: "-5px",
      }}
    ></div>
  );
};
