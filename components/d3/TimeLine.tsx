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

interface Props {
  width: number;
  height: number;
  occupations: Array<Occupation>;
  events: Array<LifeEvent>;
  background: string;
}

const TimeLine: React.FC<Props> = ({
  width,
  occupations,
  events,
  background,
}) => {
  const svgRef = useRef(null);
  const windowRef = useRef<HTMLDivElement>(null);

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
    width: number,
    textMargin: number
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
        tspan = text
          .text(null)
          .append('tspan')
          .attr('x', textMargin + 16)
          .attr('y', y);

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(' '));
        if (tspan.node()!.getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(' '));
          line = [word];
          tspan = text
            .append('tspan')
            .attr('x', textMargin + 16)
            .attr('y', y)
            .attr('dy', `${++lineNumber * lineHeight + dy}em`)
            .text(word);
        }
      }
    });
  };

  var lineMargin = 50;
  var textMargin = 200;
  var textWidth = 500;
  var textSpacing = 150;

  var diagramHeight =
    textSpacing * occupations.filter((i) => i.selected == true).length;

  useEffect(() => {
    if (windowRef.current) {
      if (windowRef.current.offsetWidth < 600) {
        lineMargin = 0;
        textMargin = 50;
        textWidth = windowRef.current.offsetWidth - 75;
        textSpacing = 190;
      } else if (windowRef.current.offsetWidth < 960) {
        lineMargin = 25;
        textMargin = 150;
        textWidth = windowRef.current.offsetWidth - 200;
        textSpacing = 135;
      } else {
        lineMargin = 100;
        textMargin = 300;
        textWidth = windowRef.current.offsetWidth - 300;
        textSpacing = 110;
      }
      diagramHeight =
        textSpacing * occupations.filter((i) => i.selected == true).length;
    }

    const clean = select(svgRef.current);
    clean.selectAll('g').remove();

    const svg = select(svgRef.current);

    const yScale = scaleTime()
      .domain([
        min(occupations, (d) => d.start) || new Date('1988-04-18'),
        new Date(),
      ])
      .range([diagramHeight, 0]);

    const yAxis = axisLeft<any>(yScale)
      .ticks(timeYear, 1)
      .tickSize(5)
      .tickFormat(timeFormat('%Y'));

    const BackBoxes = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => orderInRange(d, true, false, false)));
    BackBoxes.join('rect')
      .attr('x', lineMargin + 10)
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
      .attr('x', lineMargin + 5)
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
      .attr('x', lineMargin)
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

    const Axis = svg.append('g');
    Axis.style('transform', `translateX(${lineMargin}px)`)
      .attr('stroke-width', 2)
      .call(yAxis)
      .selectAll('text')
      .attr('font-family', 'Josefin Sans, serif')
      .attr('font-size', '1.4em')
      .attr('fill', DarkLinenPaper)
      .style('transform', `translateX(${-lineMargin + 40}px)`);

    const OccupationLabels = svg
      .append('g')
      .selectAll('rect')
      .data(occupations.filter((d) => d.selected));

    OccupationLabels.join('rect')
      .attr('width', (d) => d.title.length * 11)
      .attr('height', 20)
      .attr('x', textMargin)
      .attr('y', (_, i) => i * textSpacing)
      .attr('fill', (d) => categoryColor(d.category));

    OccupationLabels.join('path')
      .attr('d', (d, i) => {
        //const randomOffset = Math.floor(Math.random() * 8) + 155;
        return `M${lineMargin + 25} ${yScale(d.start) - 16} L${
          textMargin - lineMargin - 5
        } ${yScale(d.start) - 16} L${textMargin - lineMargin + 5} ${
          i * textSpacing + 10
        } L${textMargin} ${i * textSpacing + 10}`;
      })
      .attr('fill', 'none')
      .attr('stroke', (d) => categoryColor(d.category))
      .attr('stroke-width', '2px');

    OccupationLabels.join('text')
      .attr('x', textMargin + 8)
      .attr('y', (_, i) => i * textSpacing + 17)
      .text((value) => value.title)
      .attr('font-family', 'Josefin Sans, serif')
      .attr('font-size', '1.4em')
      .attr('fill', DarkLinenPaper);

    OccupationLabels.join('text')
      .attr('x', textMargin + 8)
      .attr('y', (_, i) => i * textSpacing + 35)
      .text((value) => `${value.company}, ${value.location}`)
      .attr('font-family', 'Maven Pro, sans-serif')
      .attr('font-size', '1em')
      .attr('fill', DarkLinenPaper)
      .style('font-style', 'italic');

    OccupationLabels.join('text')
      .attr('x', textMargin)
      .attr('y', (_, i) => i * textSpacing + 55)
      .attr('dy', 0)
      .text((value) => value.description)
      .attr('font-family', 'Maven Pro, sans-serif')
      .attr('font-size', '1em')
      .attr('fill', DarkLinenPaper)
      .call(wrap, textWidth, textMargin);

    const LifeEvents = svg.append('g').selectAll('line').data(events);
    LifeEvents.join(
      (enter) => enter.append('line'),
      (update) => update.attr('className', 'updated'),
      (exit) => exit.transition().style('opacity', 0).remove()
    )
      .attr('x1', 25)
      .attr('x2', textMargin)
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
    <div ref={windowRef}>
      <svg
        style={{ background, overflow: 'visible' }}
        width={windowRef.current ? windowRef.current.offsetWidth : width}
        height={diagramHeight}
        ref={svgRef}
      />
    </div>
  );
};

export default TimeLine;
