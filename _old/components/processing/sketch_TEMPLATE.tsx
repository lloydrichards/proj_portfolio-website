import p5 from 'p5';

const sketch_MArch2014 = (p: p5) => {
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    drawBackground();
  };

  const drawBackground = () => {
    p.background(0);
  };

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    drawBackground();
  };

  p.draw = () => {
    p.background('#0f0f0f');
  };
};

export default sketch_MArch2014;
