import React, { useRef, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import * as d3 from 'd3';
import TimeLine, {
  Occupation,
  LifeEvent,
  Category,
} from '../../components/d3/TimeLine';
import { LinenPaper } from '../../components/layout/StyledLayoutComponents';
import { Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

const Experiment019 = () => {
  const svgRef = useRef(null);
  const [data, setData] = useState([10, 12, 24, 31, 2, 37]);
  const [occupations, setOccupations] = useState(occupationSampleData);
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
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TimeLine
            width={400}
            height={800}
            occupations={occupations}
            events={eventSampleData}
            background={LinenPaper}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>
            This feels really good. I've built a <code>TimeLine.tsx</code>{' '}
            component that can take in props for the data, including occupations
            and events which it then renders into this horizontal timeline. The
            graph scales to the size of the data and even orders the boxes and
            colours them accoring to their overlap and props. So cool to see
            this come together so nicely!
          </p>
          <p>
            The timeline here is build with some dummy data which is being
            managed in the parent component which should allow me to edit and
            tweak the data on the go as well as filter it. Lets have a go
          </p>
          <Formik
            onSubmit={(data, { resetForm }) => {
              try {
                setOccupations([
                  ...occupations,
                  {
                    id: nanoid(),
                    selected: true,
                    title: data.title,
                    company: '',
                    location: '',
                    description: '',
                    skills: [''],
                    character: [''],
                    category: data.category as keyof Category,
                    tag: ['coder'],
                    start: new Date(data.startDate),
                    end: new Date(data.endDate),
                  },
                ]);
              } catch (error) {
                console.log(error);
              }
              resetForm();
            }}
            initialValues={{
              title: '',
              startDate: '',
              endDate: '',
              category: '',
              tag: [''],
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <input
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                  placeholder='title'
                />
                <input
                  name='startDate'
                  value={values.startDate}
                  onChange={handleChange}
                  placeholder='startDate'
                />
                <input
                  name='endDate'
                  value={values.endDate}
                  onChange={handleChange}
                  placeholder='endDate'
                />
                <select
                  name='category'
                  value={values.category}
                  onChange={handleChange}
                >
                  <option value='' label='Select a Category' />
                  <option value='Work' label='Work' />
                  <option value='Education' label='Education' />
                  <option value='Volunteer' label='Volunteer' />
                </select>
                <button type='submit'>Add</button>
              </Form>
            )}
          </Formik>
          <p>
            That kind of works. There seems to be an issue with the different
            layers of boxes not being removed when changing layers, but i'm not
            really sure what to do about this.
          </p>
          <p>
            The question now is: Do I render the whole chart in one go,
            including the text on the side? Or should this be a seperate
            component that lists the items and then I can figure out how to draw
            a line between them?
          </p>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Experiment019;

const eventSampleData: Array<LifeEvent> = [
  { id: '001', title: 'Moved to Switzerland', date: new Date('2020-01-03') },
];

const occupationSampleData: Array<Occupation> = [
  {
    id: '001',
    selected: true,
    title: 'number 1',
    company:"",
    location:"",
    description:"",
    skills:[""],
    character:[""],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2019-12-01'),
    end: new Date('2020-03-23'),
  },
  {
    id: '002',
    selected: false,
    title: 'number 2',
    company:"",
    location:"",
    description:"",
    skills:[""],
    character:[""],
    category: 'Education',
    tag: ['coder'],
    start: new Date('2018-06-02'),
    end: new Date('2019-01-01'),
  },
  {
    id: '003',
    selected: true,
    title: 'number 3',
    company:"",
    location:"",
    description:"",
    skills:[""],
    character:[""],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2019-04-29'),
    end: new Date('2019-12-31'),
  },
  {
    id: '004',
    selected: true,
    title: 'number 4',
    company:"",
    location:"",
    description:"",
    skills:[""],
    character:[""],
    category: 'Volunteer',
    tag: ['coder'],
    start: new Date('2019-02-29'),
    end: new Date('2019-06-31'),
  },
];
