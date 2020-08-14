import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '@material-ui/core/Button';
import {
  FullWidthBackground,
  H2,
  H1,
  Intro,
  Content,
  ContentList,
} from '../components/layout/StyledLayoutComponents';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import { Grid } from '@material-ui/core';
import CV from '../components/CV';
import { useRouter } from 'next/router';

const IndexPage: React.FC = () => {
  const router = useRouter();
  return (
    <Layout
      title='Home | Lloyd Richards Design'
      currentURL={router.pathname}
      previewImage={'/images/preview/preview_home.png'}
    >
      <div
        className='Intro'
        style={{
          width: '100%',
          height: '100%',
          background: '#F6F3F0',
        }}
      >
        <FullWidthBackground />

        <Grid
          container
          direction='row-reverse'
          alignItems='stretch'
          style={{ height: '95vh' }}
        >
          <Grid
            item
            sm={12}
            md={6}
            style={{ padding: '2em', marginTop: '30vh' }}
          >
            <H1>Hello, I'm Lloyd</H1>
            <Intro>
              I'm a Zurich based <b>Data Visualization</b> and{' '}
              <b>Garden Designer</b>. Pretty weird combinations, right? Let me
              tell you how I got here.
            </Intro>
            <Button
              style={{
                margin: '0em',
                textTransform: 'none',
                color: 'black',
                fontFamily: "'Josefin Sans', serif",
                fontSize: '1.5em',
              }}
              onClick={() => router.push('/#Contact')}
            >
              Contact Me
            </Button>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src='/images/LloydRichards_Cover_small.png'
              alt='Lloyd Richards Portrait'
              style={{
                position: 'relative',
                bottom: 0,
                right: 0,
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div id='About' style={{ width: '100%', minHeight: '320px' }}>
        <H2>About</H2>
        <Grid container>
          <Grid item xs={12} sm={6} md={8}>
            <Content>
              In my life, I've traveled to a lot of places, met a lot of people
              and been many things. From a Baker in Canada; to a Bamboo Builder
              in Costa Rica; to a Landscaper in England; to a Web Designer in
              Switzerland. My passion for life and experiancing new things has
              always overpowered any fears I might have about trying new things.
              At the core of most of my decisions are three main principles:
            </Content>
            <ContentList>
              <li>
                Passionate for <b>Sustainability</b> and having a positive
                impact on the planet
              </li>
              <li>
                Obsessed about <b>System Thinking</b> and understanding the
                interconnection of disiplines
              </li>
              <li>
                Constantly <b>Learning</b> new skills, and applying to real
                world projects.
              </li>
            </ContentList>
            <Content>
              I bring a unique perspective to the projects I work on, being able
              to empathize with different users, seeing the problem from
              different angles, and come up with solutions from different
              understandings.
            </Content>
          </Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
      </div>
      <div id='Portfolio' style={{ width: '100%', minHeight: '640px' }}>
        <H2>
          Recent <a href='/portfolio'>/ Portfolio</a>
        </H2>
        <Projects />
      </div>
      <div
        id='Blog'
        style={{
          width: '100%',
          position: 'relative',
          top: 0,
          minHeight: '320px',
          background: '#F6F3F0',
        }}
      >
        <FullWidthBackground />
        <H2>
          Recent <a href='/blog'>/ Blog</a>
        </H2>
        <Blog />
      </div>
      <div id='CV' style={{ width: '100%', minHeight: '320px' }}>
        <H2>CV</H2>
        <CV />
      </div>
    </Layout>
  );
};

export default IndexPage;
