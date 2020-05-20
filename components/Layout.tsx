import * as React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    {children}
    <footer>
      <hr />
      <span>Lloyd Richards | Portfolio</span>
    </footer>
  </div>
);

export default Layout;
