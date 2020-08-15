import React from 'react';
import { Project } from './Projects';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { H3, Description } from './layout/StyledLayoutComponents';


interface ProjCard {
  project: Project;
}
const ProjectCard: React.FC<ProjCard> = ({ project }) => {
  return (
    <Grid
      item
      key={project.id}
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
        <img
          style={{ position: 'absolute', width: '100%', opacity: '50%' }}
          src={project.image}
          alt={project.title}
        />
        <CardContent>
          <H3>{project.title}</H3>
          <Description>{project.description}</Description>
        </CardContent>
        <CardActions style={{ position: 'absolute', width: '95%', bottom: 8 }}>
          {project.github ? (
            <Button
              size='small'
              style={{ float: 'left' }}
              href={project.github}
            >
              GitHub
            </Button>
          ) : null}
          <Button
            size='small'
            style={{ marginLeft: 'auto' }}
            href={project.link}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
