import * as React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { FullWidthBackground, H2 } from './StyledLayoutComponents';
import Contact from '../Contact';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div style={{ margin: 'auto', maxWidth: '1080px' }}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Navbar />
    {children}
      <div className='Contact' style={{ width: '100%', height:"100%" }}>
        <FullWidthBackground />
        <H2>Contact</H2>
        <Contact />
      </div>
  </div>
);

export default Layout;
