import React from 'react';
import Layout from '../../components/layout/Layout';
import { Grid, Card, CardContent } from '@material-ui/core';
import {
  H3,
  Content,
  H4,
  ContentList,
  H2,
} from '../../components/layout/StyledLayoutComponents';
import ReviewCard from '../../components/blog/ReviewCard';

const Blog001 = () => {
  return (
    <Layout
      title='Blog 001'
      description='Starting the redesign of Feeld.  Working on understanding the USP and user research.'
      currentURL='/blog/001'
      previewImage='/images/blog/001/preview_blog001.png'
    >
      <H2>Blog 001 - Starting Feeld Redesign</H2>
      <H4>Date: Aug 16th 2020</H4>
      <Content>
        This will be the start of a fairly odd project, but one that I've been
        wanting to do for a long time. So why not document the process 😄. The
        problem starts with a dating app called{' '}
        <a href='https://feeld.co/'>Feeld</a>. The basic premise is that this is
        a dating app for couples or those interested more in polyamorour or
        alternative relationships. This is a super interesting concept,
        especially from a UX perspective, but unfortunately the app comes no
        where near its own potential.
      </Content>
      <Content>
        What I'm hoping to acheive in this series is to first go in an examine
        whats wrong with the app currently and then re-envision it as something
        more true to the core user. This will be partly design and partly code
        as I'd like to make a basic MVP of my concept that could be used to test
        the user experiance. Lets jump right in!
      </Content>
      <H3 style={{ textAlign: 'left' }}>Users</H3>
      <Content>
        From my experiance using the app I've noticed four distinct groups of
        users based on their intent with the app. From these four there are
        multiple combinations of gender, orientation and sexual preference. But
        lets start with breaking down these user stories.
      </Content>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <H3>Baby Poly's 👶</H3>
              <Content style={{ padding: '.5em' }}>
                New to the polyamory scene, have little experiance but are
                curious about the possibilies.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Facts</H4>
              <ContentList style={{ padding: '0em 1.5em', margin: '0em' }}>
                <li>Single</li>
                <li>Little/no experiance</li>
              </ContentList>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Problems</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Looking for others seeking alternative relationships. Not sure
                what they want.
              </Content>
              <H4 style={{ margin: '1em' }}>Behaviours</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Might use the app for intense periods at the start but overtime
                will loose interest or if they mind a monogamous relationship
                will abandon the app.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Needs & Goals</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Find others with similar goals</li>
                <li>Safely engage others</li>
                <li>Inclusive space for exploration</li>
              </ContentList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <H3>Unicorns 🦄</H3>
              <Content style={{ padding: '.5em' }}>
                Single people looking for sexual experiances with couples or
                groups.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Facts</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Single or in relationship</li>
                <li>Sexual appetite for couples</li>
                <li>Some experiance</li>
              </ContentList>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Problems</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Looking for couples open to a third person in relationship/bed.
                Able to see everyone involved and be part of a group
                conversation.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Behaviours</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Use app from time to time when in the mood. Aren't seeking
                relationships so will usualy not continue chatting with couples
                after. Will want to 'cast a large net' and see what interests
                them.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Needs & Goals</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Larger pool of people</li>
                <li>Group chat with couple, not just one person</li>
                <li>Clear intentions for the interaction</li>
              </ContentList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <H3>Unicorn Hunters 🏹</H3>
              <Content style={{ padding: '.5em' }}>
                Couples looking to spice up their sex life by bringing in a
                single person to play with.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Facts</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Couple</li>
                <li>Sexual appetite for threesomes</li>
                <li>Use the app together</li>
              </ContentList>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Problems</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Are in relationship but want to have a sexual experiance
                together with another person. Private and don't want this to be
                known by their closer friends/family.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Behaviours</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Use the app togehter, searching profiles and dicussing together
                outside the app their interests. Might have different
                preferences or desires. Will use the app periodically but more
                consistantly over time as long as they enjoy it.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Needs & Goals</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Privacy</li>
                <li>Group chat</li>
                <li>Clear intentions from start</li>
              </ContentList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <H3>Poly Couples 💑</H3>
              <Content style={{ padding: '.5em' }}>
                Couples looking for relationships with other experianced poly
                couples.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Facts</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Couple</li>
                <li>Seeking friendship/relationship</li>
                <li>Have experiance with open relations</li>
              </ContentList>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Problems</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Have a hard time finding others with similar ideas about
                relationships. Feel marginalized or objectified in other dating
                apps. Feel misunderstood.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Behaviours</H4>
              <Content style={{ padding: '0em 0.5em', margin: '0em' }}>
                Use the app regularly to interact with other poly couples. Will
                typically find another relationship, meet, and then move to
                another app like WhatsApp for futher communication.
              </Content>
              <H4 style={{ margin: '1em 1em 0.5em' }}>Needs & Goals</H4>
              <ContentList style={{ padding: '0em 2em', margin: '0em' }}>
                <li>Group Chat</li>
                <li>Chat organization/filtering</li>
                <li>Clear boundaries about relationships</li>
              </ContentList>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Content>
        There are of course many many other types of users, and part of that is
        the pure USP of this app that it allows such a scope of different users
        with different desires and needs. Without diving into the gender
        diversity on the app, I think its best to understand why people are
        there as opposed to other dating apps, and what they get from Feeld that
        other apps don't provide.
      </Content>
      <Grid container>
        <Grid item xs={12} sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Content
            style={{
              padding: '2em 5em',
              background: '#fc4600',
              borderRadius: '1em',
              color: 'white',
              fontSize: '1em',
              lineHeight: '1.5em',
            }}
          >
            "We believe nothing is more unpredictable or less binary than human
            desire. This is why we created Feeld, where everyone can be honest
            with themselves while being responsible towards others." ~Feeld
            Website
          </Content>
        </Grid>
        <Grid item xs={12} sm={2} md={3}></Grid>
      </Grid>
      <H3 style={{ textAlign: 'left' }}>The Current App</H3>
      <Content>
        As the app currently stands there are two main functionalities when
        using regularly. The first is the search functionality, where you set
        preferences for what you are looking for and then have a typical
        Like/Dislike way of searching for matches. The second is the chat
        functionality where you can view matches, start conversations with them
        and create group chats.
      </Content>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <H3>Search Function</H3>
          <img
            style={{ width: '100%' }}
            src='/images/blog/001/Feeld_Analysis1.png'
            alt='Breakdown of the Feeld App by Component in Search'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <H3>Chat Function</H3>
          <img
            style={{ width: '100%' }}
            src='/images/blog/001/Feeld_Analysis2.png'
            alt='Breakdown of the Feeld App by Component in Chat'
          />
        </Grid>
      </Grid>
      <Content>
        Some things to notice when using the app:
        <ContentList>
          <li>
            Primary actions such as Like/Dislike and Super Like are places at
            the bottom for quick access
          </li>
          <li>
            Profiles are not always indicative of the user, depends on how they
            set up their account.
          </li>
          <li>
            Chats always start with just 1-on-1 and the group chat feature is an
            extra step.
          </li>
          <li>
            There is a lot of focus on paid features such as the Like You
            sections and the heart in the Menu
          </li>
          <li>
            There is no way to organize the chat or know more about each Chat
            appart from remembering.
          </li>
        </ContentList>
      </Content>
      <H4>Usability Issues</H4>
      <Content>
        <ContentList>
          <li>
            Pictures and Profiles require vertical and horizontal swipe motions.
            These are regularly confused, resulting in it being hard to view
            pictures.
          </li>
          <li>
            Matches appear out of order so it is hard to find someone you has
            recently matched.
          </li>
          <li>
            25% of the buttons on Menu are for paid features resulting dead
            space for non paying users.
          </li>
          <li>
            Profiles for couples are sometimes created by a single person
            resulting in them being incorrectly labeled
          </li>
          <li>
            Search preferences are very narrow and result in a lot of incorrect
            pairing
          </li>
          <li>
            The focus is on finding new people, not in chatting with the people
            you already matches. Results in stale connections.
          </li>
        </ContentList>
      </Content>
      <H3 style={{ textAlign: 'left' }}>Customer Feedback</H3>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <ReviewCard
            color='#fc4600'
            reviewer=''
            date='28/4/2019'
            stars={3}
            review=''
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Blog001;
