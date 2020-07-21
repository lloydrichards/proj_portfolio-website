import p5 from 'p5';

const sketch_MArch2014 = (p: p5) => {
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
    p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    drawBackground();
    setupPosition();
  };

  p.draw = () => {
    p.background('#0f0f0f');
  };
};

export default sketch_MArch2014;