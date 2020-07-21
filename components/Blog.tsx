import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { H3, Content, CardTitle } from './layout/StyledLayoutComponents';

interface Blog {
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
  const [post, setPosts] = useState<Array<Blog>>(BlogData);
  return (
    <Grid container spacing={1}>
      {post.map((i) => (
        <Grid key={i.id} item xs={12}>
          <Card elevation={0} style={{ background: '#f6f3f0' }}>
            <CardContent style={{ padding: "0 1em" }}>
              <CardTitle>
                {i.title} |<i>{i.date.toDateString()}</i>
              </CardTitle>
              <Content>{i.description}</Content>
            </CardContent>
            <CardActions style={{padding:"0 1em"}}>
              <Button size='small' style={{ marginLeft: 'auto' }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;

const BlogData: Array<Blog> = [
  {
    id: 1,
    date: new Date('2020-01-01'),
    title: 'Something',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet egestas hac ac lectus ultricies in risus non. Tellus augue morbi quis egestas tellus lectus et. Habitant ut porta commodo est ne',
    href: '',
    tag: ['Code'],
  },
  {
    id: 2,
    date: new Date('2020-01-01'),
    title: 'Something',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet egestas hac ac lectus ultricies in risus non. Tellus augue morbi quis egestas tellus lectus et. Habitant ut porta commodo est ne',
    href: '',
    tag: ['Code'],
  },
];
