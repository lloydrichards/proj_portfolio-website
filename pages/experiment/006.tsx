import React from "react";
import Layout from "../../components/Layout";
import anime from "animejs";

const Experiment006 = () => {
  React.useEffect(() => {
    const first = anime.path("#first-svg path");
    const second = anime.path("#second-svg path");

    const tl = anime.timeline({
      easing: "linear",

      loop: true,
    });

    tl.add({
      targets: "#emoji",
      translateX: first("x"),
      translateY: first("y"),
      rotate: first("angle"),
      duration: 5000,
    }).add({
      targets: "#emoji",
      translateX: second("x"),
      translateY: second("y"),
      rotate: second("angle"),
      backgroundColor: "lightblue",
      duration: 8000,
    });
  }, []);

  return (
    <Layout>
      <h2>006 - SVG's & Anime.js </h2>
      <h4>Date: June 2nd 2020</h4>
      <p>
        Goign to playing around with SVGs and anime.js. Using this nifty SVG
        line creater{" "}
        <a href="https://codepen.io/anthonydugois/pen/mewdyZ">
          SVG Path Builder
        </a>{" "}
        I made a path and drew it below
      </p>
      <div style={{ width: 800, height: 600 }}>
        <div style={{ position: "relative" }}>
          <div
            id="emoji"
            style={{
              height: 25,
              width: 25,
              backgroundColor: "tomato",
              fontSize: "2em",
              position: "absolute",
              top: "-14px",
              left: "-12px",
            }}
          ></div>
          <svg
            id="first-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="red"
              fill="none"
              d="M 200 100 Q 200 100 200 350 Q 200 450 250 450 Q 300 450 300 350 C 300 300 300 250 300 200 L 400 200 A 50 50 0 1 1 400 450 "
            ></path>
          </svg>
          <svg
            id="second-svg"
            width={800}
            height={600}
            style={{ position: "absolute" }}
          >
            <path
              stroke="blue"
              fill="none"
              d="M 350 450 Q 300 450 300 500 Q 300 550 350 550 L 500 550 Q 600 550 600 450 L 600 350 C 600 250 500 250 500 350 Q 500 400 450 400 L 200 400 Q 100 400 100 300 Q 100 200 200 200 Q 250 200 250 250 Q 250 300 200 300 Q 150 300 150 250 L 150 100 "
            ></path>
          </svg>
        </div>
      </div>
      <p>Now I've added</p>
    </Layout>
  );
};

export default Experiment006;
