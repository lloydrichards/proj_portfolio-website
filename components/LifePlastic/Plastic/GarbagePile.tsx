import * as React from "react";
import anime from "animejs";

interface GarbagePileProps {
  GarbagePile: number;
}

export const GarbagePile: React.FC<GarbagePileProps> = ({ GarbagePile }) => {
  const ref = React.useRef<SVGPathElement>(null);
  React.useEffect(() => {
    const instance = anime({
      targets: ref.current,
      translateY: GarbagePile * -10,
      easing: "linear",
    });

    return instance.pause;
  }, [GarbagePile]);
  return (
    <svg
      width="1050"
      height="4028"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", zIndex: -1 }}
      overflow="hidden"
    >
      <path
        ref={ref}
        d="M62.41 4090.4l-67.353 29.44v965.35H1055.98v-965.35l-68.44-29.44-25.961-7.49-17.559-8.34-13.057-8.44-19.967-21.82-11.648-28.53h-8.319c-16.04-6.78-48.949-20.95-52.265-23.43-4.145-3.11-14.922-3.88-19.067-5.43-4.145-1.55-7.461-5.43-10.777-10.86-3.316-5.43-9.118-4.66-13.263-4.66h-7.461c-8.29.26-26.03.62-30.672 0-4.643-.62-9.672-8.01-11.606-11.63-3.592-.78-11.606-3.26-14.922-6.98-3.316-3.72-15.75-1.55-21.553 0l-4.974-10.08-4.974-12.41c-3.868.77-15.253 1.86-29.843 0-18.238-2.33-9.948-6.83-14.922-6.83-3.979 0-1.658-3.72 0-5.58l-12.434-11.2h-17.409l-19.895 16.78c-6.908-3.93-21.554-12.79-24.87-16.78-3.316-3.99-9.671-6.09-12.434-6.64h-16.58l-19.136 6.64h-14.351l-35.877 16.78-19.733-16.78h-8.969l-17.939 16.78h-16.144l-39.465 15.11h-12.557v20.14h-62.786v18.46c-8.969.56-30.495 1.34-44.846 0-14.351-1.34-5.98 9.51 0 15.1l-14.351 15.11h-23.32l-26.908 8.39c-5.382 6.15-16.145 20.48-16.145 28.53v11.75l-12.557 10.07h-7.175l-16.481 6.82h-28.309l-23.162 17.45H62.41z"
        fill="#424242"
        opacity="0.9"
      />
    </svg>
  );
};
