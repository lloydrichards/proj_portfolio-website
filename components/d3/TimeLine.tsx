import React, { useRef, useEffect } from 'react';
import {
  Selection,
  select,
  scaleTime,
  axisLeft,
  timeYear,
  timeFormat,
  min,
  EnterElement,
} from 'd3';
import { DarkLinenPaper } from '../layout/StyledLayoutComponents';

export interface Occupation {
  id: string;
  selected: boolean;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: Array<string>;
  character: Array<string>;
  category: keyof Category;
  tag: Array<keyof Tag>;
  start: Date;
  end: Date;
}

export interface LifeEvent {
  id: string;
  title: string;
  date: Date;
}

export interface Category {
  Education: boolean;
  Work: boolean;
  Volunteer: boolean;
}

interface Tag {
  architect: boolean;
  landscaper: boolean;
  baker: boolean;
  coder: boolean;
  farmer: boolean;
  manager: boolean;
}
const dim = {
  width: 400,
  height: 800,
  marginLeft: 100,
  textPadding: 120,
  background: '#f6f3f0',
};

interface Props {
  width: number;
  height: number;
  occupations: Array<Occupation>;
  events: Array<LifeEvent>;
  background: string;
}

const TimeLine: React.FC<Props> = ({
  width,
  height,
  occupations,
  events,
  background,
}) => {
  const svgRef = useRef(null);

  const lookupInRange = (
    corner: Date,
    allValues: Array<Occupation>
  ): boolean => {
    let result: boolean = false;
    allValues.forEach((i) => {
      if (corner > i.start && corner < i.end) {
        result = true;
        return true;
      }
    });
    return result;
  };

  const categoryColor = (category: keyof Category) => {
    switch (category) {
      case 'Work':
        return '#CBE0F2';
      case 'Education':
        return '#EECEC9';
      case 'Volunteer':
        return '#F0E2CE';
    }
  };

  const orderInRange = (
    value: Occupation,
    backArg: any,
    midArg: any,
    frontArg: any
  ): boolean | number | string => {
    if (
      lookupInRange(value.end, occupations) &&
      lookupInRange(value.start, occupations)
    ) {
      return backArg;
    } else if (lookupInRange(value.start, occupations)) {
      return midArg;
    } else {
      return frontArg;
    }
  };

  const wrap = (
    text: Selection<
      Element | EnterElement | Document | Window | SVGTextElement | null,
      Occupation,
      SVGGElement,
      unknown
    >,
    width: number
  ) => {
    text.each(function () {
      var text = select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line: string[] = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr('y'),
        dy = parseFloat(text.attr('dy')),
        tspan = text.text(null).append('tspan').attr('x', 215).attr('y', y);

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(' '));
        if (tspan.node()!.getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(' '));
          line = [word];
          tspan = text
            .append('tspan')
            .attr('x', 215)
            .attr('y', y)
            .attr('dy', `${++lineNumber * lineHeight + dy}em`)
            .text(word);
        }
      }
    });
  };

  useEffect(() => {
    const clean = select(svgRef.current);
    clean.selectAll('g').remove();

    const svg = select(svgRef.current);

    const yScale = scaleTime()
      .domain([
        min(occupations, (d) => d.start) || new Date('1988-04-18'),
        new Date(),
      ])
      .range([height, 0]);

    const yAxis = axisLeft<any>(yScale)
      .ticks(timeYear, 1)
      .tickFormat(timeFormat('%Y'));

    const Axis = svg.append('g');
    Axis.style('transform', `translateX(${dim.marginLeft}px)`).call(yAxis);

    const BackBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, true, false, false)));
    BackBoxes.join('rect')
      .attr('x', 115)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 35)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : background
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const MidBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, false, true, false)));
    MidBoxes.join('rect')
      .attr('x', 110)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 30)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : background
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const FrontBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, false, false, true)));
    FrontBoxes.join('rect')
      .attr('x', 105)
      .attr('y', (value) => yScale(+value.end))
      .attr('width', 25)
      .attr('height', (value) => yScale(+value.start) - yScale(+value.end))
      .attr('fill', (value) =>
        value.selected ? categoryColor(value.category) : background
      )
      .attr('stroke', (value) =>
        value.selected ? background : categoryColor(value.category)
      )
      .attr('stroke-width', '2px');

    const OccupationLabels = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => d.selected));

    OccupationLabels.join('rect')
      .attr('width', (d) => d.title.length * 11)
      .attr('height', 20)
      .attr('x', 200)
      .attr('y', (_, i) => i * dim.textPadding)
      .attr('fill', (d) => categoryColor(d.category));

    OccupationLabels.join('path')
      .attr('d', (d, i) => {
        //const randomOffset = Math.floor(Math.random() * 8) + 155;
        return `M120 ${
          (yScale(d.start) - yScale(d.end)) / 2 + yScale(d.end)
        } L${160} ${
          (yScale(d.start) - yScale(d.end)) / 2 + yScale(d.end)
        } L${170} ${i * dim.textPadding + 10} L200 ${i * dim.textPadding + 10}`;
      })
      .attr('fill', 'none')
      .attr('stroke', (d) => categoryColor(d.category))
      .attr('stroke-width', '2px');

    OccupationLabels.join('text')
      .attr('x', 208)
      .attr('y', (_, i) => i * dim.textPadding + 17)
      .text((value) => value.title)
      .attr('font-family', 'Josefin Sans, serif')
      .attr('font-size', '1.4em')
      .attr('fill', DarkLinenPaper);

    OccupationLabels.join('text')
      .attr('x', 208)
      .attr('y', (_, i) => i * dim.textPadding + 35)
      .text((value) => `${value.company}, ${value.location}`)
      .attr('font-family', 'Maven Pro, sans-serif')
      .attr('font-size', '1em')
      .attr('fill', DarkLinenPaper)
      .style('font-style', 'italic');

    OccupationLabels.join('text')
      .attr('x', 224)
      .attr('y', (_, i) => i * dim.textPadding + 55)
      .attr('dy', 0)
      .text((value) => value.description)
      .attr('font-family', 'Maven Pro, sans-serif')
      .attr('font-size', '1em')
      .attr('fill', DarkLinenPaper)
      .call(wrap, 550);

    const LifeEvents = svg.append('g').selectAll('line').data(events);
    LifeEvents.join(
      (enter) => enter.append('line'),
      (update) => update.attr('className', 'updated'),
      (exit) => exit.transition().style('opacity', 0).remove()
    )
      .attr('x1', 25)
      .attr('x2', 200)
      .attr('y1', (value) => yScale(value.date))
      .attr('y2', (value) => yScale(value.date))
      .attr('stroke', DarkLinenPaper)
      .attr('stroke-dasharray', '8');

    LifeEvents.join(
      (enter) => enter.append('text'),
      (update) => update.attr('className', 'updated'),
      (exit) => exit.remove()
    )
      .attr('x', 5)
      .attr('y', (value) => yScale(value.date) - 5)
      .attr('dy', 0)
      .attr('text-anchor', 'start')
      .text((value) => value.title)
      .attr('font-family', 'Josefin Sans, serif')
      .attr('font-size', '0.6em')
      .attr('fill', DarkLinenPaper);
  }, [occupations]);

  return (
    <div>
      <svg
        style={{ background, overflow: 'visible' }}
        width={width}
        height={height}
        ref={svgRef}
      />
    </div>
  );
};

export default TimeLine;
