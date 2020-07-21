import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { Content, CardTitle } from './layout/StyledLayoutComponents';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [post] = useState<Array<Blog>>(
    BlogData.sort((a, b) => +b.date - +a.date)
  );
  return (
    <Grid container spacing={1}>
      {post.map((i) => (
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
    </Grid>
  );
}

export default Blog;

const BlogData: Array<Blog> = [
  {
    id: 1,
    date: new Date('2020-01-01'),
    title: '001 - Setting Up with Next.js',
    description: '',
    href: '/experiment/001',
    tag: ['Code'],
  },
  {
    id: 2,
    date: new Date('2020-01-02'),
    title: '002 - Working with API',
    description: '',
    href: '/experiment/002',
    tag: ['Code'],
  },
  {
    id: 3,
    date: new Date('2020-01-4'),
    title: '003 - Working with Netlify',
    description: '',
    href: '/experiment/003',
    tag: ['Code'],
  },
  {
    id: 4,
    date: new Date('2020-01-07'),
    title: '004 - Setting up D3.js',
    description: '',
    href: '/experiment/004',
    tag: ['Code'],
  },
  {
    id: 5,
    date: new Date('2020-01-08'),
    title: '005 - Setting up Anime.js',
    description: '',
    href: '/experiment/005',
    tag: ['Code'],
  },
];

//     <Link href='/experiment/006'>
//       <a>006 - SVGs & Anime.js</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/007'>
//       <a>007 - Little SVG System</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/008'>
//       <a>008 - Restructure the Assembly Line</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/009'>
//       <a>009 - Importing the Plastic Illistration</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/010'>
//       <a>010 - Starting with the PET Cycle</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/011'>
//       <a>011 - Adding and Taking Away Routes</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/012'>
//       <a>012 - Implimenting some Data</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/013'>
//       <a>013 - Add Tutorial</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/014'>
//       <a>014 - Create Example Components</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/015'>
//       <a>015 - Animated Notifications</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/016'>
//       <a>016 - Autocomplete Species w/ Algolia</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/017'>
//       <a>017 - Life of Platic Tutorial</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/experiment/018'>
//       <a>018 - Intergrating P5.js</a>
//     </Link>
//   </li>
// </ul>
