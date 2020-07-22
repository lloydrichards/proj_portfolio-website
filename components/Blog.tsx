import React, { useState } from 'react';
import { Grid, Card, CardContent, CardHeader, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Content } from './layout/StyledLayoutComponents';
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
          <Card
            elevation={0}
            style={{ background: '#f6f3f0', maxWidth: '720px', margin: '0 auto' }}
          >
            <CardHeader
              style={{ padding: '0 1em' }}
              action={
                <Button
                  onClick={() => router.push(i.href)}
                  size='small'
                  style={{ marginLeft: 'auto' }}
                >
                  Read More
                </Button>
              }
              title={i.title}
              subheader={i.date.toDateString()}
            />
            <CardContent style={{ padding: '0 1em' }}>
              <Content>{i.description}</Content>
            </CardContent>
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
