import React from "react";
import anime from "animejs";

interface BoxProps {
  id: string;
  pathRef: string;
  delay?: number;
  onComplete?: () => void;
  onClick?: () => void;
}

const velocity = 0.0005;

export const Garbage = ({ pathRef, onComplete, delay }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path.length / velocity,
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
        top: "-12px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Grind = ({ pathRef, onComplete, delay }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path.length / velocity,
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
        top: "415px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Pellet = ({ id, pathRef, onComplete, delay }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path.length / velocity,
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
        top: "415px",
        left: "-12px",
      }}
    ></div>
  );
};
export const Product = ({ pathRef, onComplete, delay }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path.length / velocity,
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
        top: "420px",
        left: "-25px",
      }}
    ></div>
  );
};

export const Waste = ({ pathRef, onComplete, delay }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      delay: delay,
      duration: path.length / velocity,
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
        backgroundColor: "black",
        position: "absolute",
        top: "-5px",
        left: "-5px",
      }}
    ></div>
  );
};
