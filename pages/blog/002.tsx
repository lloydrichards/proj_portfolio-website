import React from 'react';
import Layout from '../../components/layout/Layout';
import {
  Content,
  H4,
  H2,
} from '../../components/layout/StyledLayoutComponents';
import SeriesNavigation from '../../components/blog/SeriesNavigation';
import { BlogData } from '../../components/data/BlogData';

const Blog001 = () => {
  return (
    <Layout
      title='Blog 002'
      description='Breaking down Feeld into its basic components to understand its core usability.  Examing other dating apps and what makes Feeld different.'
      currentURL='/blog/002'
      previewImage='/images/blog/002/preview_blog002.png'
    >
      <H2>Blog 002 - Dating App Architecture</H2>
      <H4>Date: Aug 18th 2020</H4>
      <Content>
        In this blog post I will be breaking down the app into its core
        architecture so I can compare it to other dating apps. This will allow
        me to see what features differentiate Feeld from the rest. We've already
        established that the core concept is unique and that users come for that
        USP but doest the UX support or hinder that characteristic?
      </Content>

      <SeriesNavigation backNav={BlogData.find((i) => i.id == 21)} />
    </Layout>
  );
};

export default Blog001;
