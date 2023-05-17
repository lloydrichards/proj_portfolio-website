import React from 'react';
import Layout from '../../components/layout/Layout';
import {
  Content,
  H4,
  H2,
  ContentList,
  H3,
} from '../../components/layout/StyledLayoutComponents';
import InterviewApp from '../../components/blog/CaplenaInterview/InterviewApp';
import { Card } from '@material-ui/core';

const Blog001 = () => {
  return (
    <Layout
      title='Blog 003'
      description='Coding task for a Frontend Dev Position.  Creating an App in 90min based on task contraints.'
      currentURL='/blog/003'
      previewImage='/images/blog/003/preview_blog003.png'
    >
      <H2>Blog 003 - Interview Coding Task</H2>
      <H4>Date: Sept 3rd 2020</H4>
      <Content>
        As part of a recent interview I did for a frontend developer position, I
        had to complete a 90min code task. The timer started as soon as I opened
        the instructions and needed to be a deployable app by the end of the
        time. It was certainly an interesting experiance coding something so
        quickly while at the same time having to make design and UX decisions.
        While the original code can be found on my github{' '}
        <a href='https://github.com/lloydrichards/caplena-interview-app'>
          (link)
        </a>
        , I thought it would be fun to recreate it here and have a little go at
        making some improvements without the time restriction.
      </Content>
      <Content>When I opened the task, I found the following exercise:</Content>
      <ContentList>
        <li>
          Single-page app based on modern frontend technologies of your choice
        </li>
        <li>Complete within 90min</li>
        <li>
          Functionality: Web-app for reviewing the sentiment of short texts.
        </li>
        <li>
          Short texts (~ 1 sentence each) come in, one by one. They each have a
          sentiment (either positive, neutral or negative) assigned to them.
        </li>
        <li>
          The user should review and give feedback on every text, either saying
          the sentiment given to it is "correct" or "incorrect".
        </li>
        <li>
          The reviewed texts should be visible somewhere, including the feedback
          result.
        </li>
      </ContentList>
      <Content>
        After making a few quick sketches on some idea that came to mind, I
        quickly jumped into a fresh project of Create-React-App with Typescript
        and started coding. First task was getting the statements and sentiments
        in a data structure so I quickly found an API that provided
        inspirational quotes and fetches it with <code>useEffect()</code> in the
        app.tsx. While I fetched the data I added in an id for manipulating the
        state as well as gave it a 'sentiment' value of either 0,1 or 2.
      </Content>
      <Content>
        With the data in place I would then make a ReviewText component that
        took in the first element of the <code>unreviewedText</code> and offered
        a simple UI for marking it correct or incorrect. Once the selection was
        picked I could then add this id to either the <code>correctText</code>{' '}
        or <code>incorrectText</code> states and remove it from the{' '}
        <code>unreviewedText</code>. Finally, I could render a list of each of
        the correct and incorrect texts below the UI for 'review' and make sure
        that the newly added text was always appearing at the top of the list by
        spreading the old list behind the new additions.{' '}
        <code>setCorrectText([currentText, ...correctText]);</code>
      </Content>
      <H3 style={{ textAlign: 'left' }}>The Result:</H3>
      <Card elevation={3} style={{ margin: '1rem', background: 'whitesmoke' }}>
        <InterviewApp />
      </Card>

      <Content>
        While I'm going to win any awards for this, I am still quite happy with
        the results. Mostly that I was able to get something like this scrapped
        together in 90min from concept to deploy. A lot of the heavy lifting for
        the CSS and Responsive elements comes down to Material UI which took
        quite a few of a larger design decisions of fmy hands and made it
        possible to focus on data structure. There are still some area that I
        think are missing that I knew how to impliment, such as moving items
        back and forth between the Correct and Incorrect Lists. As well as
        animating the UI and lists as items came in.
      </Content>
      <Content>
        If I have some time, I will impliment these this weekend...
      </Content>
    </Layout>
  );
};

export default Blog001;
