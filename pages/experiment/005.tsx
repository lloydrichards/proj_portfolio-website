import React from "react";
import Layout from "../../components/Layout";
import anime from "animejs";
import { Box } from "../../components/boxes/shapes";

interface BoxProps {
  translateX: number;
  translateY: number;
  initX: number;
  initY: number;
}

class Box2 extends React.Component<BoxProps> {
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

class Diamond extends React.Component {
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

class Circle extends React.Component<BoxProps> {
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
class Experiment005 extends React.Component {
  state = {
    translateX: 0,
    translateY: 0,
    arrayCircles: [],
  };

  addCircle = (x: number, y: number) => {
    return {};
  };

  render() {
    const { translateX, translateY } = this.state;
    return (
      <Layout>
        <h2>005 - Setting up Anime.js </h2>
        <h4>Date: June 2nd 2020</h4>
        <p>
          Experimenting with SVG manipulation and animation in order to prepare
          for making my final project. My goals and tasks include:
        </p>
        <ul>
          <li>Setup Anime.JS</li>
          <li>Make Simple animation on click event</li>
          <li>Get SVG object to follow a non-linear path</li>
          <li>Get several SVGs to follow the same path after each click</li>
        </ul>
        <h2>anime.js</h2>
        <p>Installed anime.js into my package.json through npm</p>
        <code>npm install animejs --save</code>
        <p>followed by importing it into this functional components</p>
        <code>import anime from 'animejs';</code>
        <hr />
        <p>Lets try move some squares around the place</p>
        <Diamond />
        <div style={{ padding: "10px" }}>
          <button
            onClick={() =>
              this.setState({
                translateX: translateX + 50,
              })
            }
          >
            Move X!
          </button>
          <button
            onClick={() =>
              this.setState({
                translateY: translateY + 50,
              })
            }
          >
            Move Y!
          </button>
          <button
            onClick={() =>
              this.setState({
                translateX: 0,
                translateY: 0,
              })
            }
          >
            Reset!
          </button>
        </div>

        <Box2
          translateX={-translateX}
          translateY={translateY}
          initX={250}
          initY={0}
        />
        <p>
          For this, i had to create a class based component for the box that
          toook in the props for the translateX. This was then rendered during
          componentDidMount and componentDidUpdate through a this.anime
          function. The click action was then taken care of by a button on the
          page (also a class based component) that updated its state which was
          passed to the Box component.
        </p>
        <Circle
          translateX={translateX}
          translateY={translateY}
          initX={250}
          initY={0}
        />
        <p>
          Added another class and then used the same button to effect its
          movement but in a different way. When updating the props I ran into an
          issue with typescript that it didn't recognize the this.box reference.
          I'm not sure how to fix this but will ask Peter. This will also be a
          key issue when wanting to make new objects on click and each one
          having a seperate ref
        </p>
        <p>
          The problem I see with this current version is that the state is
          currently being help on the page component, and I need each object to
          have its own stored state and then for the top level to controll how
          many of these there are.
        </p>
        <hr />
        <h2>After Chatting with Peter</h2>
        <p>
          After a long chat with Peter about using Typescript with anime.js I've
          made some big changes to how to write the components for this. The
          main difference is to use pure Functional Components for the objects
          and then dealing with the anime() in the useEffect.
        </p>
        <pre>
          <code>
            {`const Box2 = ({ translateX, translateY, initX, initY }: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const instance = anime({
      targets: ref.current,
      translateX: { value: translateX + initX },
      translateY: { value: translateY + initY },
      duration: 20000,
    });
    return instance.pause;
  }, [translateX, translateY, initX, initY]);

  return (
    <div
      ref={ref}
      style={{
        height: 50,
        width: 50,
        backgroundColor: "tomato",
        transform: "translateX(500px)",
      }}
    ></div>
  );
};`}
          </code>
        </pre>
        <p>Here is a box made from a 'pure' functional component</p>
        <Box translateX={350} translateY={0} initX={0} initY={0} />
        <p>
          Peter also suggested ways to clean up the state managment system.
          Suggesting that there should be a BoxManagement component that uses
          hooks to manage an array of boxes that holds the id's and internal
          states of each box. Then each box can be be rendered using map.
        </p>
        <pre>
          <code>{`
        interface BoxManagerState {
            boxes: Array<{id: string, state: 'default' | 'fadeOut'}>
        }
        
        const BoxManager = () => {
            const [state, setState] = React.useState<BoxManagerState>({
                boxes: []
            })
            const actions = React.useMemo(() => ({
             removeBox: (id: string) => setState({
                 ...state, 
                 boxes: state.boxes.filter(x => x.id === id)})
            }), [])
        
            return state.boxes.map(x => 
                <Box2 
                    key={x.id}  
                    id={x.id} 
                    actions={actions} 
                    onComplete={() => 
                        actions.removeBox(x.id)} 
                    style={x.state} />)
        }
        `}</code>
        </pre>
      </Layout>
    );
  }
}

export default Experiment005;
