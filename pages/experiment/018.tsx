import React from 'react';
import p5 from 'p5';
import Layout from '../../components/layout/Layout';
import sketch_particleExample from '../../components/processing/sketch_particleExample';

const sketch = (p: p5) => {
  let x = 0;
  let y = 0;
  const setupPosition = () => {
    x = p.windowWidth / 2;
    y = p.windowHeight / 4;
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    drawBackground();
    setupPosition();
  };

  const drawBackground = () => {
    p.background(0);
  };
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight / 2);
    drawBackground();
    setupPosition();
  };

  p.draw = () => {
    p.fill(255, 255, 255, 25);
    p.noStroke();
    p.ellipse(x, y, 48, 48);

    x = x + p.random(-10, 10);
    y = y + p.random(-10, 10);
  };
};

class Experiment018 extends React.Component {
  myRef: React.RefObject<HTMLDivElement>;
  myRef2: React.RefObject<HTMLDivElement>;
  myP5?: p5;
  myP52?: p5;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }

  Sketch = (p: p5) => {
    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
  };

  componentDidMount() {
    const p5 = require('p5');
    this.myP5 = new p5(sketch, this.myRef.current);
    this.myP52 = new p5(sketch_particleExample, this.myRef2.current);
  }
  render() {
    return (
      <Layout title='Experiment | 018'>
        <h2>018 - Intergrating P5.js</h2>
        <p>
          P5.js is actually where I started with coding and data visualization
          and a lot of love goes out to{' '}
          <a href='https://shiffman.net/'>Daniel Shiffman</a> and his channel{' '}
          <a href='https://thecodingtrain.com/'>The Coding Train</a> where I
          learnt most of my initial understanding of Javascript, APIs, even
          Firebase. Its been a while since I last used P5.js and since then have
          moved much more into React and Typescript so will need to see how the
          two play with each other. If this is sucessful then I'll start to have
          a look at some simple algorythms and build some fun little programs
          with P5.js and then try impliment them in D3.js as well.
        </p>
        <div ref={this.myRef}></div>
        <p>
          That took a lot of tweaking and swaering, but I got it working. It
          seemed there is a problem with implimenting the p5 instance when using
          either <code>useEffect()</code> on a functional component or{' '}
          <code>componentDidMount()</code> on a class component. In the end it
          turned out I had to require the p5 library inside the
          componentDiDMount which kind of screwed up the type for it and set it
          to any, but did let it render. Not sure if this is a good solution,
          but at least I can now make things.
        </p>
        <p>
          Something I quite like about this thought is that I can now break up
          the sketches into seperate files and import them as needed. This I
          think will be super useful for experimenting and forking different
          sketches and seeing how they might work in varous areas of a site.
        </p>
        <div ref={this.myRef2}></div>
      </Layout>
    );
  }
}

export default Experiment018;
