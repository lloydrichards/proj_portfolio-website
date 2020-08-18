import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button, Grid } from '@material-ui/core';
import { H4 } from '../layout/StyledLayoutComponents';
import { Blog } from '../Blog';
import { Project } from '../Projects';

interface SeriesNav {
  backNav?: Blog;
  forwardNav?: Blog;
  project?: Project;
}
const SeriesNavigation: React.FC<SeriesNav> = ({
  backNav,
  forwardNav,
  project,
}) => {
  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='baseline'
      spacing={2}
      style={{ width: '100%' }}
    >
      <Grid
        item
        container
        xs={4}
        direction='column'
        alignItems='flex-start'
        style={{ padding: '1em' }}
      >
        <Button
          disabled={!backNav}
          startIcon={<ArrowBackIosIcon />}
          href={backNav?.href}
        >
          Last Article
        </Button>
        <H4 style={{ color: '#8B7A70' }}>{backNav?.title}</H4>
      </Grid>
      <Grid item xs={4}>
        {project ? <Button href={project.href}>{project.title}</Button> : null}
      </Grid>
      <Grid
        item
        container
        xs={4}
        direction='column'
        alignItems='flex-end'
        style={{ padding: '1em' }}
      >
        <Button
          disabled={!forwardNav}
          endIcon={<ArrowForwardIosIcon />}
          href={forwardNav?.href}
        >
          Next Article
        </Button>
        <H4 style={{ color: '#8B7A70' }}>{forwardNav?.title}</H4>
      </Grid>
    </Grid>
  );
};

export default SeriesNavigation;
