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
import SeriesNavigation from '../../components/blog/SeriesNavigation';
import { BlogData } from '../../components/data/BlogData';

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
      <Content>
        Looking at the{' '}
        <a href='https://play.google.com/store/apps/details?id=co.feeld&hl=en&showAllReviews=true'>
          Google Play
        </a>{' '}
        and{' '}
        <a href='https://apps.apple.com/us/app/feeld-for-couples-singles/id887914690#see-all/reviews'>
          App Store
        </a>{' '}
        there are some real gems of user feedback. On average the Google Play
        has 2.4/5 stars (7,548 reviews) and the App Store has 4.3/5 stars (12k
        reviews).
      </Content>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='Two times noforn'
            date='28/4/2019'
            stars={1}
            review='Sounds awesome. Sadly, it is the opposite. Ugh. Really bad.'
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='3 for 3nder'
            date='1/9/2019'
            stars={3}
            review='Great but not Great.  The idea of this app is great, which is exactly what brought me here in the first place but I have to admit from a technical point of view it’s not very good.'
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='Bernadette Pierce'
            date='1/6/2019'
            stars={1}
            review='So Glitchy... The concept of this app is by far the best of its kind. But I simply cant get over how many bugs there are, or things that dont work correctly.'
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='888Noeljp'
            date='11/1/2020'
            stars={2}
            review='Want to like it, but ... in practice not working for me.'
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='Emil Ferent'
            date='10/8/2020'
            stars={2}
            review='I like the content, but the latest update, where they rushed to implement pay for likes just like in Tinder demonstrates how poor the app is built'
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <ReviewCard
            color='#fc4600'
            reviewer='The dude'
            date='13/9/2019'
            stars={1}
            review='Concept is great, execution of the app is not.  The app idea is great and the user base is also a good size. But the people who own the app are most likely not the developers and have probably outsourced the work elsewhere.'
          />
        </Grid>
      </Grid>
      <Content>
        What is of particular notice when reading through the reviews is that
        several themes come up. Leaving out those who were just frustrated they
        didn't get more matches, there seems to three main greavances:
      </Content>
      <ContentList>
        <li>The app is too glitchy and has too many technical issues.</li>
        <li>
          The concept is great, but the execution doesn't live up to the idea.
        </li>
        <li>The paid features do not add value to the experiance.</li>
      </ContentList>
      <Content>
        I'm also quite interested in the massive difference in rating between
        the android and apple version. Whether this means that there are two
        versions or if android users are just more honest? Certainly there seems
        to be more feedback from the developers on the App Store, but at the
        same time most of the reviewers do not give their name and give star
        rating quite different from the text review.
      </Content>
      <SeriesNavigation forwardNav={BlogData.find((i) => i.id == 22)} />
    </Layout>
  );
};

export default Blog001;
