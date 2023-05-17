import React from "react";
import anime from "animejs";

interface BoxProps {
  id: string;
  pathRef: string;
  onComplete?: () => void;
}

export const BoxOnPath = ({ pathRef, onComplete }: BoxProps) => {
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
        backgroundColor: "pink",
        position: "absolute",
        top: "-14px",
        left: "-12px",
      }}
    ></div>
  );
};
