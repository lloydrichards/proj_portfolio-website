import React from "react";
import { scaleLinear } from "d3-scale";

import Layout from "../../components/Layout";

function RandomData() {
  const data = [...Array(100)].map(() => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500,
    };
  });
  return data;
}

const Experiment004: React.FC = () => {
  const data = RandomData();

  const w = 600,
    h = 600,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  const xScale = scaleLinear().domain([0, 50]).range([0, width]);

  const yScale = scaleLinear().domain([0, 50]).range([height, 0]);

  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={5}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: "tomato" }}
    />
  ));

  return (
    <Layout>
      <h2>004 - Getting D3.js Running </h2>
      <h4>Date: May 20th 2020</h4>
      <p>Some text that I want to change red...</p>
      <p>
        Using D3 and React. D3 is used mostly for doing calculations on the data
        and React deals with the DOM. In the few instances for Transitions,
        Axises and Brushing where D3 needs to access the DOM then we can switch.
      </p>
      <p>
        D3 is more than enough for simple interactions, like click or hover.
        React comes in when you want to interact more and effect their state. Or
        link multiple parts of a visualization together.
      </p>
      <h3>Installing</h3>
      <p>To set up D3 in my react environment, first install d3.js</p>
      <code>npm install d3</code>
      <p>D3 can then be called into a react component using:</p>
      <code>import * as d3 from "d3";</code>
      <p></p>
      <h3>Example 1</h3>
      <div>
        <svg width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}></g>
          {circles}
        </svg>
      </div>
    </Layout>
  );
};

export default Experiment004;
