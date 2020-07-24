import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {
  H3,
  Description,
  H2,
} from '../../components/layout/StyledLayoutComponents';
import { ProjectData } from '../../components/ProjectData';
import Layout from '../../components/layout/Layout';

export interface Project {
  id: string;
  date: Date;
  title: string;
  description: string;
  href: string;
  category: Array<keyof Category>;
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
  const [expanded, setExpanded] = useState<boolean>(false);
  useEffect(() => {
    setCurrentProjects(
      ProjectData.filter((i) => i.category.some((r) => categories[r] === true))
    );
  }, [categories]);
  return (
    <Layout>
      <H2>Portfolio</H2>
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
        {currentProjects.map((i) => (
          <Grid
            item
            key={i.id}
            xs={12}
            sm={6}
            md={4}
            style={{ width: '340px', height: '340px' }}
          >
            <Card
              elevation={0}
              style={{
                position: 'relative',
                height: '100%',
                background: '#F6F3F0',
              }}
            >
              <CardContent>
                <H3>{i.title}</H3>
                <Description>{i.description}</Description>
              </CardContent>
              <CardActions
                style={{ position: 'absolute', width: '95%', bottom: 8 }}
              >
                {i.github ? (
                  <Button size='small' style={{ float: 'left' }}>
                    GitHub
                  </Button>
                ) : null}
                <Button size='small' style={{ marginLeft: 'auto' }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Projects;
