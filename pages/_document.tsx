// /pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;1,300&family=Maven+Pro:wght@400;500&family=Raleway&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body style={{ margin: '0px' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
