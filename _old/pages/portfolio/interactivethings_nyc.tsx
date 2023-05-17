import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useSpring, animated } from 'react-spring/web.cjs';
import {
  Modal,
  Backdrop,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';
import {
  H3,
  H2,
  H4,
  Content,
} from '../../components/layout/StyledLayoutComponents';
import { useRouter } from 'next/router';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const mimiropen = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout
      title='IxT NYC Data Visualization'
      description='Creating a data visualization that links Switzerland with New York City in a playful yet interesting way.'
      currentURL={router.pathname}
      previewImage='/images/projects/interactivethings_nyc/preview_IxT_NYC.png'
    >
      <Modal
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'none',
        }}
        aria-labelledby={currentTitle}
        aria-describedby={`Image of ${currentTitle}`}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <img
              style={{ height: '80vh' }}
              src={currentImage}
              alt={`Image of Interactive Things NYC data Visualization ${currentTitle}`}
            />
          </div>
        </Fade>
      </Modal>
      <H4>Date: May 29th 2020</H4>
      <H2>Interactive Things: NYC Data Visualization</H2>
      <Content>
        One particularly fun project I got to work on during my time with
        Interactive Things was designing a farewell card for one of the partners
        that was moving to New York City. Given full control over the project, I
        quickly brainstormed various datasets and ideas for connecting Zurich
        with NYC. After a few attempts I settles on a scale representation of
        the city alongside the tallest mountains in the Appalachian Mountains in
        comparision to some of the most famous Swiss mountains.
      </Content>
      <Content>
        Thankfully the whole thing fit onto a A5 card and I was able to add some
        nice details like the individual heights as well as the respective tree
        line for each mountain range.
      </Content>
      <Content>
        <i>
          Below you will find a few of the other versions that I came up with as
          I refined the design.
        </i>
      </Content>
      <Grid container justify='center'>
        <Grid item xs={12} sm={8}>
          <img
            width='100%'
            src='/images/projects/interactivethings_nyc/Card_V8.png'
            alt='IxT NYC Data Visualization'
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: '2em 0' }} />
      <Grid container spacing={2} justify='center' alignItems='stretch'>
        <Grid item xs={3}>
          <Card
            onClick={() => {
              setCurrentImage(
                '/images/projects/interactivethings_nyc/Card_V1.png'
              );
              setCurrentTitle('Version 1');
              handleOpen();
            }}
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: '100%',
              background: '#F6F3F0',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
              }}
              src='/images/projects/interactivethings_nyc/Thumb_Card_V1.png'
              alt='Interactive Things NYC Data Visualization Version 1'
            />
            <CardContent>
              <H3 style={{ color: 'white' }}>Version 1</H3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            onClick={() => {
              setCurrentImage(
                '/images/projects/interactivethings_nyc/Card_V5.png'
              );
              setCurrentTitle('Version 5');
              handleOpen();
            }}
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: '100%',
              background: '#F6F3F0',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
              }}
              src='/images/projects/interactivethings_nyc/Thumb_Card_V5.png'
              alt='Interactive Things NYC Data Visualization Version 5'
            />
            <CardContent>
              <H3 style={{ color: 'white' }}>Version 5</H3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            onClick={() => {
              setCurrentImage(
                '/images/projects/interactivethings_nyc/Card_V8.png'
              );
              setCurrentTitle('Version 8');
              handleOpen();
            }}
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: '100%',
              background: '#F6F3F0',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
              }}
              src='/images/projects/interactivethings_nyc/Thumb_Card_V8.png'
              alt='Interactive Things NYC Data Visualization Version 8'
            />
            <CardContent>
              <H3 style={{ color: 'black' }}>Version 8</H3>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default mimiropen;
