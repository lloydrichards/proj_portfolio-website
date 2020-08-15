import * as React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { FullWidthBackground, H2 } from './StyledLayoutComponents';
import Contact from '../Contact';

type Props = {
  title?: string;
  description?: string;
  previewImage?: string;
  currentURL?: string;
};

const twitterHandle = '@LRichardsDesign';
const siteName = 'Lloyd Richards Design';

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Lloyd Richards Design',
  description = 'Welcome to the digital portfolio of Lloyd Richards.  Find projects, blogs and experiments in data visualization and garden design.',
  previewImage = '/images/home/preview_home.png',
  currentURL = '',
}) => (
  <div style={{ margin: 'auto', maxWidth: '1080px' }}>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      {/* Twitter */}
      <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
      <meta name='twitter:description ' content={description} key='twdesc' />
      <meta
        name='twitter:image'
        content={'https://www.lloydrichardsdesign.com' + previewImage}
        key='twimage'
      />

      {/* Open Graph */}
      <meta property='og:type' content='website' key='ogtype' />
      <meta
        property='og:url'
        content={'https://www.lloydrichardsdesign.com' + currentURL}
        key='ogurl'
      />
      <meta
        property='og:image'
        content={'https://www.lloydrichardsdesign.com' + previewImage}
        key='ogimage'
      />
      <meta property='og:site_name' content={siteName} key='ogsitename' />
      <meta
        property='og:title'
        content={title + ' | Lloyd Richards Design'}
        key='ogtitle'
      />
      <meta property='og:description' content={description} key='ogdesc' />
    </Head>
    <div style={{ position: 'relative', height: 50, zIndex: 9, width: '100%' }}>
      <FullWidthBackground />
      <Navbar />
    </div>
    {children}
    <div className='Contact' style={{ width: '100%', height: '100%' }}>
      <FullWidthBackground />
      <H2>Contact</H2>
      <Contact />
    </div>
  </div>
);

export default Layout;
