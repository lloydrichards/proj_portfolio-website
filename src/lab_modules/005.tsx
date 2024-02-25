/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import anime from "animejs";

interface BoxProps {
  translateX: number;
  translateY: number;
  initX: number;
  initY: number;
}

export class Box2 extends React.Component<BoxProps> {
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    const { translateX, translateY, initX, initY } = this.props;
    anime({
      targets: ".square",
      translateX: { value: translateX + initX },
      translateY: { value: translateY + initY },
      duration: 2000,
    });
  };
  render() {
    return (
      <div
        className="square"
        style={{ height: 50, width: 50, backgroundColor: "tomato" }}
      ></div>
    );
  }
}

export class Diamond extends React.Component {
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    anime({
      targets: ".diamond",
      translateX: 250,
      translateY: -250,
      duration: 2000,
    });
  };
  render() {
    return (
      <div
        className="diamond"
        style={{
          height: 50,
          width: 50,
          backgroundColor: "orange",
          transform: "rotate(45deg)",
        }}
      ></div>
    );
  }
}

export class Circle extends React.Component<BoxProps> {
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    const { translateX, translateY, initX, initY } = this.props;
    anime({
      targets: ".circle",
      translateX: { value: translateX + initX },
      translateY: { value: translateY + initY },
      duration: 1000,
    });
  };
  render() {
    return (
      <div
        className="circle"
        style={{
          height: 50,
          width: 50,
          backgroundColor: "lightblue",
          borderRadius: "50%",
        }}
      ></div>
    );
  }
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
