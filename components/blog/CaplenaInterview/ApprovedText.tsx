import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import { Quote } from '../App';

interface Props {
  quote: Quote;
}

const showSentiment = (id: number) => {
  switch (id) {
    case 0:
      return <SentimentSatisfiedOutlinedIcon fontSize='large' />;
    case 1:
      return <SentimentDissatisfiedOutlinedIcon fontSize='large' />;
    case 2:
      return <SentimentSatisfiedIcon fontSize='large' />;
    default:
      return;
  }
};

const ApprovedText: React.FC<Props> = ({ quote }) => {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar style={{ background: 'green' }}>
          {showSentiment(quote.sentiment)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={quote.text} secondary={quote.author} />
    </ListItem>
  );
};

export default ApprovedText;
