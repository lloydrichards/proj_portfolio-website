import React, { useRef, useState, useEffect } from 'react';
import { select, scaleTime, axisLeft } from 'd3';

const dim = {
  width: 400,
  height: 800,
  marginLeft: 100,
};

const TimeLine = () => {
  const svgRef = useRef(null);
  const [data, setData] = useState(timelineData);

  useEffect(() => {
    const svg = select(svgRef.current);

    const yScale = scaleTime()
      .domain([new Date('2018-01-01'), new Date('2020-07-22')])
      .range([dim.height, 0]);

      const yAxis = axisLeft(yScale)

      const Axis = svg.append('g').style('transform', `translateX(${dim.marginLeft}px)`).call(yAxis)
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
    end: new Date('2020-02-23'),
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
];
