import React, { useState } from 'react';
import { Grid, Card, Button, CardHeader } from '@material-ui/core';
import { H2 } from '../../components/layout/StyledLayoutComponents';
import { useRouter } from 'next/router';
import { BlogData } from '../../components/BlogData';
import Layout from '../../components/layout/Layout';

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

  return (
    <Layout>
      <H2>Blog</H2>
      <Grid container spacing={1} style={{ position: 'relative', top: 50 }}>
        {posts.map((i) => (
          <Grid key={i.id} item xs={12}>
            <Card
              elevation={0}
              style={{
                background: '#f6f3f0',
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              <CardHeader
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Blog;
