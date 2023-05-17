import React, { useRef, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  axisLeft,
} from 'd3';

const dimensions = {
  width: 700,
  height: 300,
  chartWidth: 600,
  chartHeight: 250,
  marginLeft: 50,
};

const Experiment020 = () => {
  const svgRef = useRef(null);
  const [data] = useState<Array<number>>([25, 36, 29, 60, 48, 22, 39]);

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, dimensions.chartWidth]);
    const yScale = scaleLinear()
      .domain([0, 100])
      .range([dimensions.chartHeight, 0]);

    const myLine = line<any>()
      .x((_, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    const xAxis = axisBottom(xScale);
    const yAxis = axisLeft(yScale);

    const xAxisGroup = svg.append('g');
    xAxisGroup
      .style(
        'transform',
        `translate(${dimensions.marginLeft}px,${dimensions.chartHeight}px)`
      )
      .call(xAxis);

    const yAxisGroup = svg.append('g');
    yAxisGroup
      .style('transform', `translateX(${dimensions.marginLeft}px)`)
      .call(yAxis);

    const lines = svg.append('g');
    lines
      .style('transform', `translateX(${dimensions.marginLeft}px)`)
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'tomato');
  }, [data]);

  return (
    <Layout title='Experiment | 020'>
      <h2>020 - D3.js and Line Chart</h2>
      <h4>Date: July 22nd 2020</h4>
      <p></p>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        ref={svgRef}
      ></svg>
    </Layout>
  );
};

export default Experiment020;
