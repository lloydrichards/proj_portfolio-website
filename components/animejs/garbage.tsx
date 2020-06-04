import React from "react";
import anime from "animejs";

interface BoxProps {
  id: string;
  pathRef: string;
  onComplete?: () => void;
}

export const Garbage = ({ pathRef, onComplete }: BoxProps) => {
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
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "green",
        position: "absolute",
        top: "560px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Grind = ({ pathRef, onComplete }: BoxProps) => {
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
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "lightgreen",
        position: "absolute",
        borderRadius: "50%",
        top: "560px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Pellet = ({ id, pathRef, onComplete }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      duration: Math.ceil(Math.random() * 1000) + 5000,
      easing: "linear",
      complete: onComplete,
    });

    return instance.pause;
  }, [id]);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "blue",
        position: "absolute",
        borderRadius: "50%",
        top: "560px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Product = ({ pathRef, onComplete }: BoxProps) => {
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
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 50,
        backgroundColor: "tomato",
        position: "absolute",
        top: "560px",
        left: "-25px",
      }}
    ></div>
  );
};
