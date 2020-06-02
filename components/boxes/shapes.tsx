import React from "react";
import anime from "animejs";

interface BoxProps {
  translateX: number;
  translateY: number;
  initX: number;
  initY: number;
}

export const Box = ({ translateX, translateY, initX, initY }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const instance = anime({
      targets: ref.current,
      keyframes: [
        { translateY: initY, translateX: initX },
        {
          translateY: translateY,
          translateX: translateX,
          rotate: 360,
          scale: 2,
        },
      ],
      duration: 2000,
      loop: true,
      direction: "alternative",
    });
    return instance.pause;
  }, [translateX, translateY, initX, initY]);
  return (
    <div
      ref={ref}
      style={{
        height: 25,
        width: 25,
        backgroundColor: "tomato",
      }}
    ></div>
  );
};
