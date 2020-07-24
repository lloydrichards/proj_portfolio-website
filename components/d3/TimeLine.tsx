import React, { useRef, useState, useEffect } from 'react';
import { select, scaleTime, axisLeft } from 'd3';

const dim = {
  width: 400,
  height: 800,
  marginLeft: 100,
};

const TimeLine = () => {
  const svgRef = useRef(null);
  const [data] = useState(timelineData);

  useEffect(() => {
    const svg = select(svgRef.current);

    const yScale = scaleTime()
      .domain([new Date('2018-01-01'), new Date('2020-07-22')])
      .range([dim.height, 0]);

    const yAxis = axisLeft<any>(yScale);

    const Axis = svg.append('g');
    Axis.style('transform', `translateX(${dim.marginLeft}px)`).call(yAxis);

    const Boxes = svg.append('g');
    Boxes.selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', 100)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', (_, i) => i * 10 + 25)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', 'teal')
      .attr('stroke', 'lightgrey');
  }, [data]);

  return (
    <div>
      <svg
        style={{ background: 'lightgrey', overflow: 'visible' }}
        width={dim.width}
        height={dim.height}
        ref={svgRef}
      />
    </div>
  );
};

export default TimeLine;

const timelineData = [
  {
    id: '001',
    title: 'number 1',
    category: 'Code',
    start: new Date('2020-01-01'),
    end: new Date('2020-03-23'),
  },
  {
    id: '002',
    title: 'number 2',
    category: 'Design',
    start: new Date('2018-06-02'),
    end: new Date('2019-01-01'),
  },
  {
    id: '003',
    title: 'number 3',
    category: 'Other',
    start: new Date('2019-04-29'),
    end: new Date('2019-12-31'),
  },
  {
    id: '004',
    title: 'number 4',
    category: 'Other',
    start: new Date('2019-02-29'),
    end: new Date('2019-5-31'),
  },
];
