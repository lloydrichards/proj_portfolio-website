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

const IndexPage: React.FC = () => (
  <Layout title="Home | Lloyd's Working Portfolio">
    <div
      className='Intro'
      style={{
        width: '100%',
        height: '95vh',
        background: '#F6F3F0',
      }}
    >
      <FullWidthBackground />
      <div style={{ position: 'absolute', top: 0, margin: '240px 120px' }}>
        <H1>Hi, I'm Lloyd</H1>
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          laoreet egestas hac ac lectus ultricies in risus non. Tellus augue
          morbi quis egestas tellus lectus et. Habitant ut porta commodo est nec
          bibendum et quisque.
        </Intro>
        <Button
          style={{
            margin: '0 1em',
            textTransform: 'none',
            color: 'black',
            fontFamily: "'Josefin Slab', serif",
            fontSize: '1.5em',
          }}
        >
          Contact Me
        </Button>
      </div>
    </div>
    <div className='About' style={{ width: '100%', minHeight: '320px' }}>
      <H2>About</H2>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        laoreet egestas hac ac lectus ultricies in risus non. Tellus augue morbi
        quis egestas tellus lectus et. Habitant ut porta commodo est nec
        bibendum et quisque. Pretium amet, aenean faucibus gravida sapien
        sollicitudin. Arcu arcu, pharetra, amet sed commodo eu leo tellus. Nulla
        amet pharetra ultrices tortor mattis urna mauris massa. Egestas aliquet
        neque lectus massa bibendum velit. Accumsan at diam, lorem ultrices
        vitae sit. Viverra semper vestibulum phasellus non.
      </Content>
      <ContentList>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      </ContentList>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        laoreet egestas hac ac lectus ultricies in risus non.
      </Content>
    </div>
    <div className='Recent' style={{ width: '100%', minHeight: '640px' }}>
      <H2>Recent</H2>
      <Projects />
    </div>
    <div
      className='Blog'
      style={{
        width: '100%',
        position: 'relative',
        top: 0,
        minHeight: '320px',
        background: '#F6F3F0',
      }}
    >
      <FullWidthBackground />
      <H2>Blog</H2>
      <Blog />
    </div>
    <div className='CV' style={{ width: '100%', minHeight: '320px' }}>
      <H2>CV</H2>
    </div>
  </Layout>
);

export default IndexPage;
