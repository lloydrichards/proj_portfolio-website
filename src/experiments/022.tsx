import React from 'react';
import p5 from 'p5';
import Matter from 'matter-js';
import Layout from '../../components/layout/Layout';

const sketch = (p: p5) => {
  var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

  class Box {
    body: Matter.Body;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
      this.h = h;
      this.w = w;
      this.body = Bodies.rectangle(x, y, w, h, { restitution: 0.9 });
      World.add(world, this.body);
    }
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;

      p.push();
      p.translate(pos.x, pos.y);
      p.rotate(angle);
      p.rect(0, 0, this.w, this.h);
      p.rectMode('center');
      p.pop();
    }
  }
  var engine = Engine.create(),
    world = engine.world,
    boxes: Array<Box> = [],
    ground = Bodies.rectangle(200, 300, 200, 25, {
      isStatic: true,
    });

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth - 87, p.windowHeight / 2);
    drawBackground();
  };

  const drawBackground = () => {
    p.background(51);
  };
  p.mousePressed = () => {
    boxes.push(new Box(p.mouseX, p.mouseY, 20, 20));
  };
  p.setup = () => {
    p.createCanvas(window.innerWidth - 87, window.innerHeight / 2);
    drawBackground();
    Engine.run(engine);
    World.add(world, ground);
  };

  p.draw = () => {
    drawBackground();
    boxes.forEach((box) => {
      box.show();
    });
    p.rectMode('center');
    p.rect(ground.position.x, ground.position.y, 200, 25);
  };
};

class Experiment018 extends React.Component {
  myRef: React.RefObject<HTMLDivElement>;
  myP5?: p5;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const p5 = require('p5');
    this.myP5 = new p5(sketch, this.myRef.current);
  }
  render() {
    return (
      <Layout title='Experiment | 022'>
        <h2>022 - Intergrating P5.js and Matter.js</h2>
        <p></p>
        <div ref={this.myRef}></div>
      </Layout>
    );
  }
}

export default Experiment018;
