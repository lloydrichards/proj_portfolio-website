import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: React.FC = () => (
  <Layout title="Home | Lloyd's Working Portfolio">
    <h1>Lloyd's Working Portfolio</h1>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/001">
          <a>001 - Setting Up with Next.js</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/002">
          <a>002 - Working with API</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/003">
          <a>003 - Working with Netlify</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/004">
          <a>004 - Setting up D3.js</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/005">
          <a>005 - Setting up Anime.js</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/006">
          <a>006 - SVGs & Anime.js</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/007">
          <a>007 - Little SVG System</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/008">
          <a>008 - Restructure the Assembly Line</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/009">
          <a>009 - Importing the Plastic Illistration</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/010">
          <a>010 - Starting with the PET Cycle</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/011">
          <a>011 - Adding and Taking Away Routes</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/012">
          <a>012 - Implimenting some Data</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
