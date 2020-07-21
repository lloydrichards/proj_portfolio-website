import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Content, CardTitle } from './layout/StyledLayoutComponents';
import { useRouter } from 'next/router';
import { BlogData } from './BlogData';

export interface Blog {
  id: number;
  date: Date;
  title: string;
  description: string;
  href: string;
  tag: Array<keyof Tag>;
}

interface Tag {
  Code: boolean;
}

function Blog() {
  const router = useRouter();
  const [posts] = useState<Array<Blog>>(
    BlogData.sort((a, b) => +b.date - +a.date)
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const numberOfItems = expanded ? 5 : 2;
  return (
    <Grid container spacing={1}>
      {posts.slice(0, numberOfItems).map((i) => (
        <Grid key={i.id} item xs={12}>
          <Card elevation={0} style={{ background: '#f6f3f0' }}>
            <CardContent style={{ padding: '0 1em' }}>
              <CardTitle>
                {i.title} |<i>{i.date.toDateString()}</i>
              </CardTitle>
              <Content>{i.description}</Content>
            </CardContent>
            <CardActions style={{ padding: '0 1em' }}>
              <Button
                onClick={() => router.push(i.href)}
                size='small'
                style={{ marginLeft: 'auto' }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Button
        startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setExpanded(!expanded)}
        size='small'
        style={{ marginLeft: 'auto' }}
      >
        {expanded ? 'Less' : 'More'}
      </Button>
    </Grid>
  );
}

export default Blog;
