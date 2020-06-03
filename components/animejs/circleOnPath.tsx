import React from "react";
import anime from "animejs";

interface BoxProps {
  id: string;
  pathRef: string;
}

export const CircleOnPath = ({ pathRef }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      duration: 8000,
      easing: "linear",
    });
    return instance.pause;
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "lightblue",
        borderRadius: "50%",
        position: "absolute",
        top: "-14px",
        left: "-12px",
      }}
    ></div>
  );
};
