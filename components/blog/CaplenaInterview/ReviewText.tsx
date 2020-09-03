import React from 'react';
import { Quote } from '../App';
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  Grid,
} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

interface Props {
  quote: Quote;
  handleApprove: () => void;
  handleReject: () => void;
}

const showSentiment = (id: number) => {
  switch (id) {
    case 0:
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '2em',
            color: 'green',
          }}
        >
          <SentimentSatisfiedOutlinedIcon fontSize='large' /> Positive
        </div>
      );
    case 1:
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '2em',
            color: 'tomato',
          }}
        >
          <SentimentDissatisfiedOutlinedIcon fontSize='large' /> Negative
        </div>
      );
    case 2:
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '2em',
            color: 'blue',
          }}
        >
          <SentimentSatisfiedIcon fontSize='large' /> Neutral
        </div>
      );
    default:
      return;
  }
};

const ReviewText: React.FC<Props> = ({
  quote,
  handleApprove,
  handleReject,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          Do you think the sentiment is correct?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={8} alignItems='center'>
            <Typography variant='h5' component='h2'>
              {quote.text}
            </Typography>
            <Typography style={{ textAlign: 'right' }} color='textSecondary'>
              ~{quote.author}
            </Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography color='textSecondary' gutterBottom>
          Sentiment
        </Typography>
            {showSentiment(quote.sentiment)}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<ThumbUpAltOutlinedIcon />}
          size='large'
          onClick={handleApprove}
        >
          Correct
        </Button>
        <Button
          endIcon={<ThumbDownAltOutlinedIcon />}
          style={{ marginLeft: 'auto' }}
          size='large'
          onClick={handleReject}
        >
          Incorrect
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReviewText;
