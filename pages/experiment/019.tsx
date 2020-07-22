import React, { useRef, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import * as d3 from 'd3';
import TimeLine from '../../components/d3/TimeLine';

const Experiment019 = () => {
  const svgRef = useRef(null);
  const [data, setData] = useState([10, 12, 24, 31, 2, 37]);
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg
        .selectAll('circle')
        .data(data)
        .join(
          (enter) =>
            enter
              .append('circle')
              .attr('class', 'new')
              .attr('r', (value) => value)
              .attr('cx', (value) => value * 10)
              .attr('cy', 50)
              .attr('stroke', 'tomato'),
          (update) => update.attr('class', 'updated'),
          (exit) => exit.transition().duration(1000).attr('r', 0).remove()
        )
        .transition()
        .duration(1000)
        .attr('r', (value) => value);
    }
  }, [data]);

  return (
    <Layout title='Experiment | 019'>
      <h2>019 - D3.js and CV Timeline</h2>
      <h4>Date: July 22nd 2020</h4>
      <p>
        The plan here is to build a system in which a timeline of past education
        and experiance. There are several pieces here that I'd like to include
        in this diagram including linking blurbs and their place on the
        timeline, as well as tooltips for included skills.
      </p>
      <p>
        First step is to setup D3.js with a timeline and a simple input for data
        and squares. Lets have a go at the new(er) <code>.join()</code> pattern
        in React.
      </p>
      <svg
        width={400}
        height={200}
        ref={svgRef}
        style={{ background: '#f6f3f0' }}
      ></svg>
      <br />
      <button
        onClick={() => setData([...data, Math.floor(Math.random() * 40)])}
      >
        Add Circle
      </button>
      <button onClick={() => setData(data.map((i) => i + 5))}>
        Increase Circle
      </button>
      <button onClick={() => setData(data.slice(0, 2))}>Remove Circle</button>
      <p>
        Okay, so thats a working D3 example. With this, the data is being
        managed by React and <code>useStae()</code> and then using{' '}
        <code>useEffect()</code> D3 can take over the manipulation of the svgs
        inside its box. While I'm sure D3 could build the whole timeline I'm
        thinking off, what I think is better is if the text blurbs are generated
        as a list beside the timeline and then using D3, build the timeline and
        draw lines that connect to the appropriate list item.
      </p>
      <TimeLine />
    </Layout>
  );
};

export default Experiment019;
