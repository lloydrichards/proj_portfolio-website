import React, { useRef, useEffect } from "react";
import {
  Selection,
  scaleTime,
  axisLeft,
  timeYear,
  timeFormat,
  min,
  timeMonth,
} from "d3";
import { select } from "d3-selection";
import "d3-transition";
import { DarkLinenPaper } from "../layout/StyledLayoutComponents";
import useResizeObserver from "../helpers/useResizeObserver";

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

const TimeLine: React.FC<Props> = ({ occupations, background }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  const lookupInRange = (
    corner: Date,
    allValues: Array<Occupation>,
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
      case "Work":
        return "#CBE0F2";
      case "Education":
        return "#EECEC9";
      case "Volunteer":
        return "#F0E2CE";
    }
  };

  const orderInRange = (
    value: Occupation,
    backArg: any,
    midArg: any,
    frontArg: any,
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
    text: Selection<SVGTextElement, Occupation, null, unknown>,
    width: number,
    textMargin: number,
  ) => {
    text.each(function () {
      var text = select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line: string[] = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", textMargin + 16)
          .attr("y", y);

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node()!.getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", textMargin + 16)
            .attr("y", y)
            .attr("dy", `${++lineNumber * lineHeight + dy}em`)
            .text(word);
        }
      }
    });
  };

  var lineMargin = 50;
  var axisLabelMargin = 0;
  var textMargin = 200;
  var textWidth = 500;
  var textSpacing = 150;

  var diagramHeight =
    textSpacing * occupations.filter((i) => i.selected == true).length;

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    if (dimensions.width < 600) {
      lineMargin = 0;
      textMargin = 50;
      textWidth = dimensions.width - 75;
      axisLabelMargin = 50;
      textSpacing = 190;
    } else if (dimensions.width < 960) {
      lineMargin = 25;
      textMargin = 150;
      axisLabelMargin = 50;
      textWidth = dimensions.width - 200;
      textSpacing = 135;
    } else {
      lineMargin = 100;
      textMargin = 300;
      textWidth = dimensions.width - 300;
      textSpacing = 110;
    }
    diagramHeight =
      textSpacing * occupations.filter((i) => i.selected == true).length;

    const yScale = scaleTime()
      .domain([
        min(occupations, (d) => d.start) || new Date("1988-04-18"),
        new Date(),
      ])
      .range([diagramHeight, 0]);

    const yAxis = axisLeft<any>(yScale)
      .ticks(timeYear, 1)
      .tickSize(5)
      .tickFormat(timeFormat("%Y"));

    const yAxisMonth = axisLeft<any>(yScale).ticks(timeMonth, 1).tickSize(3);

    svg
      .select<SVGGElement>(".y-axis")
      .style("transform", `translateX(${lineMargin}px)`)
      .transition()
      .duration(1000)
      .attr("stroke-width", 2)
      .call(yAxis)
      .selectAll("text")
      .attr("font-family", "Josefin Sans, serif")
      .attr("font-size", "1.6em")
      .attr("fill", DarkLinenPaper)
      .style("transform", `translateX(${axisLabelMargin}px)`);

    svg
      .select<SVGGElement>(".x-axis")
      .style("transform", `translateX(${lineMargin}px)`)
      .attr("stroke-width", 1)
      .transition()
      .duration(1000)
      .call(yAxisMonth)
      .selectAll("text")
      .attr("fill", "none");

    svg
      .selectAll(".data-back")
      .data(occupations.filter((d) => orderInRange(d, true, false, false)))
      .join("rect")
      .attr("class", "data-back")
      .transition()
      .duration(1000)
      .attr("x", lineMargin + 10)
      .attr("y", (value) => yScale(+value.end))
      .attr("width", 35)
      .attr("height", (value) => yScale(+value.start) - yScale(+value.end))
      .attr("fill", (value) =>
        value.selected ? categoryColor(value.category) : background,
      )
      .attr("stroke", (value) =>
        value.selected ? background : categoryColor(value.category),
      )
      .attr("stroke-width", "2px");

    svg
      .selectAll(".data-mid")
      .data(occupations.filter((d) => orderInRange(d, false, true, false)))
      .join("rect")
      .attr("class", "data-mid")
      .transition()
      .duration(1000)
      .attr("x", lineMargin + 5)
      .attr("y", (value) => yScale(+value.end))
      .attr("width", 30)
      .attr("height", (value) => yScale(+value.start) - yScale(+value.end))
      .attr("fill", (value) =>
        value.selected ? categoryColor(value.category) : background,
      )
      .attr("stroke", (value) =>
        value.selected ? background : categoryColor(value.category),
      )
      .attr("stroke-width", "2px");

    svg
      .selectAll(".data-front")
      .data(occupations.filter((d) => orderInRange(d, false, false, true)))
      .join("rect")
      .attr("class", "data-front")
      .transition()
      .duration(1000)
      .attr("x", lineMargin)
      .attr("y", (value) => yScale(+value.end))
      .attr("width", 25)
      .attr("height", (value) => yScale(+value.start) - yScale(+value.end))
      .attr("fill", (value) =>
        value.selected ? categoryColor(value.category) : background,
      )
      .attr("stroke", (value) =>
        value.selected ? background : categoryColor(value.category),
      )
      .attr("stroke-width", "2px");

    svg
      .selectAll(".label-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("rect")
      .attr("class", "label-occupation")
      .transition()
      .duration(1000)
      .attr("width", (d) => d.title.length * 11)
      .attr("height", 20)
      .attr("x", textMargin)
      .attr("y", (_, i) => i * textSpacing)
      .attr("fill", (d) => categoryColor(d.category));

    svg
      .selectAll(".path-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("path")
      .attr("class", "path-occupation")
      .transition()
      .duration(1000)
      .attr("d", (d, i) => {
        //const randomOffset = Math.floor(Math.random() * 8) + 155;
        return `M${lineMargin + 25} ${yScale(d.start) - 16} L${
          textMargin - lineMargin - 5
        } ${yScale(d.start) - 16} L${textMargin - lineMargin + 5} ${
          i * textSpacing + 10
        } L${textMargin} ${i * textSpacing + 10}`;
      })
      .attr("fill", "none")
      .attr("stroke", (d) => categoryColor(d.category))
      .attr("stroke-width", "2px");

    svg
      .selectAll<SVGTextElement, any>(".text-title-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("text")
      .attr("class", "text-title-occupation")
      .attr("opacity", 0)
      .transition()
      .duration(1000)
      .attr("opacity", 1)
      .attr("x", textMargin + 8)
      .attr("y", (_, i) => i * textSpacing + 17)
      .text((value) => value.title)
      .attr("font-family", "Josefin Sans, serif")
      .attr("font-size", "1.4em")
      .attr("fill", DarkLinenPaper);

    svg
      .selectAll<SVGTextElement, any>(".text-subtitle-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("text")
      .attr("class", "text-subtitle-occupation")
      .attr("opacity", 0)
      .attr("x", textMargin + 8)
      .attr("y", (_, i) => i * textSpacing + 35)
      .transition()
      .duration(1000)
      .attr("opacity", 0)
      .text((value) => `${value.company}, ${value.location}`)
      .attr("font-family", "Maven Pro, sans-serif")
      .attr("font-size", "1em")
      .attr("fill", DarkLinenPaper)
      .style("font-style", "italic");

    svg
      .selectAll<SVGTextElement, any>(".text-desc-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("text")
      .attr("class", "text-desc-occupation")
      .attr("x", textMargin)
      .attr("y", (_, i) => i * textSpacing + 55)
      .attr("dy", 0)
      .text((value) => value.description)
      .attr("font-family", "Maven Pro, sans-serif")
      .attr("font-size", "1em")
      .attr("fill", DarkLinenPaper)
      .call(wrap, textWidth, textMargin);

    // const LifeEvents = svg.append('g').selectAll('line').data(events);
    // LifeEvents.join(
    //   (enter) => enter.append('line'),
    //   (update) => update.attr('className', 'updated'),
    //   (exit) => exit.transition().style('opacity', 0).remove()
    // )
    //   .attr('x1', 25)
    //   .attr('x2', textMargin)
    //   .attr('y1', (value) => yScale(value.date))
    //   .attr('y2', (value) => yScale(value.date))
    //   .attr('stroke', DarkLinenPaper)
    //   .attr('stroke-dasharray', '8');

    // LifeEvents.join(
    //   (enter) => enter.append('text'),
    //   (update) => update.attr('className', 'updated'),
    //   (exit) => exit.remove()
    // )
    //   .attr('x', 5)
    //   .attr('y', (value) => yScale(value.date) - 5)
    //   .attr('dy', 0)
    //   .attr('text-anchor', 'start')
    //   .text((value) => value.title)
    //   .attr('font-family', 'Josefin Sans, serif')
    //   .attr('font-size', '0.6em')
    //   .attr('fill', DarkLinenPaper);
  }, [occupations, dimensions]);

  return (
    <div style={{ height: "100%" }} ref={wrapperRef}>
      <svg
        style={{ background, overflow: "visible" }}
        width="100%"
        height={diagramHeight}
        ref={svgRef}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default TimeLine;
