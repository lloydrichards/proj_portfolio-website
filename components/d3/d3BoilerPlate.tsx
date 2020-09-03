import React, { useRef, useEffect } from 'react';
import useResizeObserver from '../helpers/useResizeObserver';
import { select } from 'd3-selection';

interface Props {
  data: any;
}
const d3BoilerPlate: React.FC<Props> = ({ data }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
    //D3 Code goes here!
    svg.append('g');
  }, [data, dimensions]);
  return (
    <div ref={wrapperRef}>
      <svg ref={svgRef}>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </div>
  );
};

export default d3BoilerPlate;
