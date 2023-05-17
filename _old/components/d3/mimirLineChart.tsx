import React, { useRef, useEffect, useState } from 'react';
import useResizeObserver from '../helpers/useResizeObserver';

import {
  scaleLinear,
  extent,
  scaleTime,
  timeFormat,
  axisLeft,
  axisBottom,
  line,
  select,
  curveCardinal,
  brushX,
} from 'd3';
import usePrevious from '../helpers/usePrevious';

type Reading = {
  __typename?: 'Reading';
  id: string;
  timestamp: string;
  userId?: string;
  deviceId: string;
  temperature: number;
  humidity: number;
  pressure: number;
  altitude: number;
  luminance: number;
  iaq: number;
  iaqAccuracy: number;
  eVOC: number;
  eCO2: number;
  bearing: number;
  batteryPercent?: number;
  user?: string;
  device?: string;
};

interface Props {
  data: Array<Reading>;
}
const LineChartMimir: React.FC<Props> = ({ data }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  const [selection, setSelection] = useState<[Date, Date]>([
    new Date(0),
    new Date(0),
  ]);
  const previousSelection = usePrevious(selection);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // X and Y Scales
    const xScale = scaleTime()
      .domain(extent(data, (d) => new Date(+d.timestamp)) as Array<Date>)
      .range([0, dimensions.width]);
    const yScale = scaleLinear().domain([0, 400]).range([dimensions.height, 0]);
    //Axis
    const xAxis = axisBottom(xScale)
      .ticks(10)
      .tickPadding(5)
      .tickFormat(
        timeFormat('%a %H:%M') as (
          value: Date | { valueOf(): number },
          i: number
        ) => string
      );
    const yAxis = axisLeft(yScale);
    svg
      .select<SVGGElement>('.x-axis')
      .style('transform', `translate(0px, ${dimensions.height}px)`)
      .call(xAxis);
    svg.select<SVGGElement>('.y-axis').call(yAxis);

    //Brush
    const brush = brushX()
      .extent([
        [0, 0],
        [dimensions.width, dimensions.height],
      ])
      .on('start brush end', (e: any) => {
        if (e.selection) {
          const timeSelection = e.selection.map(xScale.invert);
          setSelection(timeSelection);
        }
      });
    if (previousSelection === selection) {
      svg
        .select<SVGGElement>('.brush')
        .call(brush)
        .call(brush.move, selection.map(xScale));
    }

    // Add the line
    const Line = line<Reading>()
      .defined((d) => !isNaN(d.iaq as number))
      .curve(curveCardinal)
      .x((d) => xScale(+d.timestamp))
      .y((d) => yScale(d.iaq as number));

    svg
      .selectAll('.data-point')
      .data(data)
      .join((enter) =>
        enter
          .append('circle')
          .attr('cx', (d) => xScale(+d.timestamp))
          .attr('cy', (d) => yScale(d.iaq))
      )
      .attr('class', 'data-point')
      .transition()
      .duration(1000)
      .attr('cx', (d) => xScale(+d.timestamp))
      .attr('cy', (d) => yScale(d.iaq))
      .attr('r', (d) =>
        new Date(+d.timestamp) >= selection[0] &&
        new Date(+d.timestamp) <= selection[1]
          ? 4
          : 2
      )
      .attr('fill', (d) =>
        new Date(+d.timestamp) >= selection[0] &&
        new Date(+d.timestamp) <= selection[1]
          ? 'tomato'
          : 'black'
      );

    svg
      .selectAll('.tooltip')
      .data(data)
      .join('text')
      .attr('class', 'tooltip')
      .transition()
      .duration(2000)
      .attr('opacity', (d) =>
        new Date(+d.timestamp) >= selection[0] &&
        new Date(+d.timestamp) <= selection[1]
          ? 1
          : 0
      )
      .attr('x', (d) => xScale(+d.timestamp))
      .attr('y', (d) => yScale(d.iaq) - 8)
      .attr('font-size', '10px')
      .attr('text-anchor', 'middle')
      .text((d) => `${d.iaq.toFixed(0)}`);

    svg
      .selectAll('.data-line')
      .data([data])
      .join('path')
      .attr('class', 'data-line')
      .transition()
      .duration(1000)
      .attr('opacity', 1)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', Line);
  }, [data, dimensions, selection]);
  return (
    <div style={{ width: '100%', height: '100%' }} ref={wrapperRef}>
      <svg
        style={{ overflow: 'visible', marginBottom: '1.5rem' }}
        ref={svgRef}
        width='100%'
        height='100%'
      >
        <g className='x-axis' />
        <g className='y-axis' />
        <g className='brush' />
      </svg>
      <small style={{ marginLeft: '6rem' }}>
        Selected IAQ: [
        {data
          .filter(
            (d) =>
              new Date(+d.timestamp) >= selection[0] &&
              new Date(+d.timestamp) <= selection[1]
          )
          .map((d) => d.iaq)
          .join(', ')}
        ]
      </small>
    </div>
  );
};
export default LineChartMimir;
