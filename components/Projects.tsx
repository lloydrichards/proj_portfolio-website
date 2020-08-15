import React, { useState, useEffect } from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import { ProjectData } from './data/ProjectData';
import ProjectCard from './ProjectCard';

export interface Project {
  id: string;
  date: Date;
  title: string;
  description: string;
  href: string;
  category: Array<keyof Category>;
  image: string;
  github?: string;
  link?: string;
}

interface Category {
  Design: boolean;
  Garden: boolean;
  Code: boolean;
  Other: boolean;
}

const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState<Array<Project>>(
    ProjectData.sort((a, b) => +b.date - +a.date)
  );
  const [categories, setCategories] = useState<Category>({
    Design: true,
    Garden: true,
    Code: true,
    Other: true,
  });
  useEffect(() => {
    setCurrentProjects(
      ProjectData.filter((i) => i.category.some((r) => categories[r] === true))
    );
  }, [categories]);
  return (
    <div>
      <ButtonGroup
        variant='text'
        size='large'
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <Button
          onClick={() =>
            setCategories({
              Design: true,
              Garden: true,
              Code: true,
              Other: true,
            })
          }
          style={{
            color:
              categories.Design && categories.Code && categories.Garden
                ? '#8B7A70'
                : '#F0ECE8',
          }}
        >
          All
        </Button>
        <Button
          onClick={() =>
            setCategories({ ...categories, Design: !categories.Design })
          }
          style={{
            color: categories.Design ? '#8B7A70' : '#F0ECE8',
          }}
        >
          Design
        </Button>
        <Button
          onClick={() =>
            setCategories({ ...categories, Code: !categories.Code })
          }
          style={{
            color: categories.Code ? '#8B7A70' : '#F0ECE8',
          }}
        >
          Code
        </Button>
        <Button
          onClick={() =>
            setCategories({ ...categories, Garden: !categories.Garden })
          }
          style={{
            color: categories.Garden ? '#8B7A70' : '#F0ECE8',
          }}
        >
          Gardens
        </Button>
      </ButtonGroup>
      <Grid container spacing={2} style={{ width: '100%', margin: '0 auto' }}>
        {currentProjects.slice(0, 6).map((i) => (
          <ProjectCard project={i} key={i.id} />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
