import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import { Intro } from './layout/StyledLayoutComponents';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card elevation={0} style={{ background: '#F6F3F0' }}>
          <CardContent>
            <Intro>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              laoreet egestas hac ac lectus ultricies in risus non. Tellus augue
              morbi quis egestas tellus lectus et. Habitant ut porta commodo est
              nec bibendum et quisque. Pretium amet, aenean faucibus gravida
              sapien sollicitudin. Arcu arcu, pharet
            </Intro>
            <Intro>
              Lorem ipsu gestas tellus lectus et. Habitant ut porta commodo est
              nec bibendum et quisque. Pretium amet, aenean faucibus gravida
              sapien sollicitudin. Arcu arcu, pharet
            </Intro>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <IconButton aria-label='linkedIn'>
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label='Instagram'>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label='Github'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card elevation={0} style={{ background: '#F6F3F0' }}>
          <CardContent></CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button variant='outlined' startIcon={<SendIcon />}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
