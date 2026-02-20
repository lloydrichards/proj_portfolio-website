"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from "d3";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export const BasicTimeline = () => {
  const svgRef = useRef(null);
  const [data, setData] = useState([10, 12, 24, 31, 2, 37]);
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg
        .selectAll("circle")
        .data(data)
        .join(
          (enter) =>
            enter
              .append("circle")
              .attr("class", "new")
              .attr("r", (value) => value)
              .attr("cx", (value) => value * 10)
              .attr("cy", 50)
              .attr("stroke", "tomato"),
          (update) => update.attr("class", "updated"),
          (exit) => exit.transition().duration(1000).attr("r", 0).remove(),
        )
        .transition()
        .duration(1000)
        .attr("r", (value) => value);
    }
  }, [data]);

  return (
    <div>
      <svg
        width={600}
        height={200}
        ref={svgRef}
        style={{ background: "#f6f3f0" }}
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
    </div>
  );
};

export const CVTimeline = () => {
  const [occupations] = useState(occupationSampleData);

  return (
    <TimeLine
      dimensions={{ width: 600, height: 400 }}
      occupations={occupations}
    />
  );
};

export const CVTimelineWithForm = () => {
  const [occupations] = useState(occupationSampleData);

  return (
    <div>
      <TimeLine
        dimensions={{ width: 600, height: 400 }}
        occupations={occupations}
      />
      <form>
        {/* <input
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="title"
        />
        <input
          name="startDate"
          value={values.startDate}
          onChange={handleChange}
          placeholder="startDate"
        />
        <input
          name="endDate"
          value={values.endDate}
          onChange={handleChange}
          placeholder="endDate"
        />
        <select name="category" value={values.category} onChange={handleChange}>
          <option value="" label="Select a Category" />
          <option value="Work" label="Work" />
          <option value="Education" label="Education" />
          <option value="Volunteer" label="Volunteer" />
        </select>
        <button type="submit">Add</button> */}
      </form>
    </div>
  );
};

interface Tag {
  architect: boolean;
  landscaper: boolean;
  baker: boolean;
  coder: boolean;
  farmer: boolean;
  manager: boolean;
}

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

const occupationSampleData: Array<Occupation> = [
  {
    id: "001",
    selected: true,
    title: "number 1",
    company: "",
    location: "",
    description: "",
    skills: [""],
    character: [""],
    category: "Work",
    tag: ["coder"],
    start: new Date("2019-12-01"),
    end: new Date("2020-03-23"),
  },
  {
    id: "002",
    selected: false,
    title: "number 2",
    company: "",
    location: "",
    description: "",
    skills: [""],
    character: [""],
    category: "Education",
    tag: ["coder"],
    start: new Date("2018-06-02"),
    end: new Date("2019-01-01"),
  },
  {
    id: "003",
    selected: true,
    title: "number 3",
    company: "",
    location: "",
    description: "",
    skills: [""],
    character: [""],
    category: "Work",
    tag: ["coder"],
    start: new Date("2019-04-29"),
    end: new Date("2019-12-31"),
  },
  {
    id: "004",
    selected: true,
    title: "number 4",
    company: "",
    location: "",
    description: "",
    skills: [""],
    character: [""],
    category: "Volunteer",
    tag: ["coder"],
    start: new Date("2019-02-29"),
    end: new Date("2019-06-31"),
  },
];

interface Props {
  occupations: Array<Occupation>;
  dimensions?: {
    width: number;
    height: number;
  };
}

const TimeLine: React.FC<Props> = ({ occupations, dimensions }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);

  const lookupInRange = useCallback(
    (corner: Date, allValues: Array<Occupation>): boolean => {
      let result: boolean = false;
      allValues.forEach((i) => {
        if (corner > i.start && corner < i.end) {
          result = true;
          return true;
        }
      });
      return result;
    },
    [],
  );

  const categoryColor = useCallback((category: keyof Category) => {
    switch (category) {
      case "Work":
        return "#CBE0F2";
      case "Education":
        return "#EECEC9";
      case "Volunteer":
        return "#F0E2CE";
    }
  }, []);

  const orderInRange = useCallback(
    (
      value: Occupation,
      backArg: boolean,
      midArg: boolean,
      frontArg: boolean,
    ): boolean => {
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
    },
    [occupations, lookupInRange],
  );

  const wrap = useCallback(
    (
      text: d3.Selection<SVGTextElement, Occupation, null, unknown>,
      width: number,
      textMargin: number,
    ) => {
      text.each(function () {
        const text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          lineHeight = 1.1; // ems

        let word: string | undefined,
          line: string[] = [],
          lineNumber = 0,
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", textMargin + 16)
            .attr("y", y);

        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          const node = tspan.node();
          if (node && node.getComputedTextLength() > width) {
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
    },
    [],
  );

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    let lineMargin = 50;
    let axisLabelMargin = 0;
    let textMargin = 200;
    let textWidth = 500;
    let textSpacing = 150;
    let diagramHeight =
      textSpacing * occupations.filter((i) => i.selected === true).length;
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
      textSpacing * occupations.filter((i) => i.selected === true).length;

    const yScale = d3
      .scaleTime()
      .domain([
        d3.min(occupations, (d) => d.start) || new Date("1988-04-18"),
        d3.max(occupations, (d) => d.end) || new Date(),
      ])
      .range([diagramHeight, 0]);

    const yAxis = d3
      .axisLeft<Date>(yScale)
      .ticks(d3.timeYear, 1)
      .tickSize(5)
      .tickFormat(d3.timeFormat("%Y"));

    const yAxisMonth = d3
      .axisLeft<Date>(yScale)
      .ticks(d3.timeMonth, 1)
      .tickSize(3);

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
      .attr("fill", "#000000")
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
        value.selected ? categoryColor(value.category) : "#f6f3f0",
      )
      .attr("stroke", (value) =>
        value.selected ? "#f6f3f0" : categoryColor(value.category),
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
        value.selected ? categoryColor(value.category) : "#f6f3f0",
      )
      .attr("stroke", (value) =>
        value.selected ? "#f6f3f0" : categoryColor(value.category),
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
        value.selected ? categoryColor(value.category) : "#f6f3f0",
      )
      .attr("stroke", (value) =>
        value.selected ? "#f6f3f0" : categoryColor(value.category),
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
      .selectAll<SVGTextElement, Occupation>(".text-title-occupation")
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
      .attr("fill", "#000000");

    svg
      .selectAll<SVGTextElement, Occupation>(".text-subtitle-occupation")
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
      .attr("fill", "#000000")
      .style("font-style", "italic");

    svg
      .selectAll<SVGTextElement, Occupation>(".text-desc-occupation")
      .data(occupations.filter((d) => d.selected))
      .join("text")
      .attr("class", "text-desc-occupation")
      .attr("x", textMargin)
      .attr("y", (_, i) => i * textSpacing + 55)
      .attr("dy", 0)
      .text((value) => value.description)
      .attr("font-family", "Maven Pro, sans-serif")
      .attr("font-size", "1em")
      .attr("fill", "#000000")
      .call(wrap, textWidth, textMargin);
  }, [occupations, dimensions, orderInRange, categoryColor, wrap]);

  return (
    <div
      style={{ height: dimensions?.height, width: dimensions?.width }}
      ref={wrapperRef}
    >
      <svg
        style={{ overflow: "visible" }}
        width="100%"
        height={dimensions?.height}
        ref={svgRef}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};
