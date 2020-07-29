import React from 'react';
import * as yup from 'yup';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import { Intro } from './layout/StyledLayoutComponents';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SendIcon from '@material-ui/icons/Send';
import { Formik, Form } from 'formik';
import { MyTextField } from './formik/TextField';
import { MyTextArea } from './formik/TextArea';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

const Contact = () => {
  return (
    <Grid id='Contact' container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card
          elevation={0}
          style={{ background: '#F6F3F0', maxWidth: '480px', margin: '0 auto' }}
        >
          <CardContent>
            <Intro>
              Thank you for visiting my page, I hope you found something of
              interest here. As this site is primariliy for my own
              experimentations and documentation, I'm always thrilled to hear
              how people experiances it. If you have any questions or comments,
              feel free to fill out the contact. I m looking forward to hearing
              from you!
            </Intro>
            <Intro>
              Alternatively, if you would like to follow along with me on some
              of my other social media platforms, you can find them in the links
              below.
            </Intro>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <IconButton
              target='_blank'
              href='https://www.linkedin.com/in/lloyddrichards/'
              aria-label='linkedIn'
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              target='_blank'
              href='https://www.instagram.com/lloydrichardsdesign/'
              aria-label='Instagram'
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              target='_blank'
              href='https://twitter.com/LRichardsDesign'
              aria-label='Twitter'
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              target='_blank'
              href='https://github.com/lloydrichards'
              aria-label='Github'
            >
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Formik
          onSubmit={async (data, { setErrors, setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              console.log(data);
            } catch (error) {
              setErrors(error);
            }
            setSubmitting(false);
            resetForm();
          }}
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
        >
          {({ isSubmitting }) => (
            <Card
              elevation={0}
              style={{
                background: '#F6F3F0',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              <Form>
                <CardContent>
                  <div style={{ padding: '1em' }}>
                    <MyTextField label='Name' name='name' />
                  </div>
                  <div style={{ padding: '1em' }}>
                    <MyTextField label='Email' name='email' />
                  </div>
                  <div style={{ padding: '1em' }}>
                    <MyTextArea rowsMax={4} label='Message' name='message' />
                  </div>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button
                    disabled={isSubmitting}
                    type='submit'
                    variant='outlined'
                    startIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </CardActions>
              </Form>
            </Card>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Contact;
