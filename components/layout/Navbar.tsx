/** @jsx jsx */
import Link from 'next/link';
import { css, jsx } from '@emotion/core';

const Navbar = () => {
  return (
    <div
      css={css`
        z-index: 9;
        overflow: hidden;
        position: fixed;
        width: 100%;
        max-width: 1080px;
        a {
          float: right;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          color: #8b7a70;
          font-family: 'Josefin Slab', serif;
          font-size: 1em;
        }
      `}
    >
      <div
        css={css`
          float: left;
          a {
            padding-left: 2em;
            color: black;
            font-family: 'Raleway', sans-serif;
            font-size: 36px;
          }
        `}
      >
        <Link href='/'>
          <a>Lloyd Richards</a>
        </Link>
      </div>
      <a href='#About'>About</a>
      <a href='#Projects'>Projects</a>
      <a href='#Blog'>Blog</a>
      <a href='#CV'>CV</a>
      <a href='#Contact'>Contact</a>
    </div>
  );
};

export default Navbar;