import p5 from 'p5';

const sketch_particleExample = (p: p5) => {
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
  // this class describes the properties of a single particle.
  class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    x: number;
    y: number;
    r: number;
    xSpeed: number;
    ySpeed: number;

    constructor() {
      this.x = p.random(0, p.width);
      this.y = p.random(0, p.height);
      this.r = p.random(1, 8);
      this.xSpeed = p.random(-2, 2);
      this.ySpeed = p.random(-1, 1.5);
    }

    // creation of a particle.
    createParticle() {
      p.noStroke();
      p.fill('rgba(255,99,71,1)');
      p.circle(this.x, this.y, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
      if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
      if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles: Array<Particle>) {
      particles.forEach((element) => {
        let dis = p.dist(this.x, this.y, element.x, element.y);
        if (dis < 85) {
          p.stroke('rgba(255,255,255,0.25)');
          p.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  // an array to add multiple particles
  let particles: Array<Particle> = [];

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    drawBackground();
    setupPosition();
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  };

  p.draw = () => {
    p.background('#0f0f0f');
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  };
};

export default sketch_particleExample;
