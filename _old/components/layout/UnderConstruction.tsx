import React from 'react';
import { Grid } from '@material-ui/core';
import { H2, Intro } from './StyledLayoutComponents';

const UnderConstruction = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} />
      <Grid item xs={12} sm={6}>
        <H2 style={{ textAlign: 'center' }}>Under Construction</H2>
        <Intro style={{ padding: '1em' }}>
          Oh no! It looks like this page isn't finished yet 😅 Check back later
          and I'll probably have finished building this page. If not, send me a
          message to remind me to get on it! Thanks 😃
        </Intro>
      </Grid>
      <Grid item xs={12} sm={3} />
    </Grid>
  );
};

export default UnderConstruction;
