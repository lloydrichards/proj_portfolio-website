import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ReviewText from './ReviewText';
import { Grid, Typography, List } from '@material-ui/core';
import ApprovedText from './ApprovedText';
import RejectedText from './RejectedText';

export type Quote = {
  id: string;
  sentiment: number;
  text: string;
  author: string;
};

const InterviewApp = () => {
  const [unreviewed, setUnreviewed] = useState<Array<Quote>>();
  const [positive, setPositive] = useState<Array<Quote>>();
  const [negative, setNegative] = useState<Array<Quote>>();

  useEffect(() => {
    try {
      fetch('https://type.fit/api/quotes').then(function (response) {
        return response.json().then(function (data) {
          data.forEach((i: any) => {
            i.sentiment = Math.floor(Math.random() * 3);
            i.id = nanoid();
          });
          setUnreviewed(data);
          console.log(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!unreviewed) return <div />;

  const currentText = unreviewed[0];

  return (
    <div className='App'>
      <Grid container style={{ minHeight: '300px', margin: '6rem 0' }}>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={6}>
          <ReviewText
            quote={currentText}
            handleApprove={() => {
              console.log('Approved');
              setPositive(
                positive ? [currentText, ...positive] : [currentText]
              );
              setUnreviewed(unreviewed.filter((i) => i.id !== currentText.id));
            }}
            handleReject={() => {
              console.log('Rejected');
              setNegative(
                negative ? [currentText, ...negative] : [currentText]
              );
              setUnreviewed(unreviewed.filter((i) => i.id !== currentText.id));
              console.log(unreviewed);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3} />
      </Grid>

      <Grid container style={{ padding: '2em' }}>
        <Grid item xs={6}>
          <Typography component='span' variant='h4' color='textPrimary'>
            Correct
          </Typography>
          <List>
            {positive?.map((i) => (
              <ApprovedText quote={i} key={i.id} />
            ))}
          </List>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Typography component='span' variant='h4' color='textPrimary'>
            Incorrect
          </Typography>
          <List>
            {negative?.map((i) => (
              <RejectedText quote={i} key={i.id} />
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default InterviewApp;
