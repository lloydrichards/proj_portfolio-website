import React, { useState } from 'react';
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
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
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
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          height: '100%',
          background: '#F6F3F0',
        }}
      >
        <img
          style={{
            position: 'absolute',
            width: '100%',
            opacity: hovered ? '50%' : '10%',
          }}
          src={project.image}
          alt={project.title}
        />
        <CardContent>
          <H3>{project.title}</H3>
          <Description>{project.description}</Description>
        </CardContent>
        {hovered ? (
          <CardActions
            style={{ position: 'absolute', width: '95%', bottom: 8 }}
          >
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
        ) : null}
      </Card>
    </Grid>
  );
};

export default ProjectCard;
