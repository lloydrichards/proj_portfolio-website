/** @jsx jsx */
import Link from 'next/link';
import { css, jsx } from '@emotion/core';
import { FullWidthBackground } from './StyledLayoutComponents';

const Navbar = () => {
  return (
    <div
      css={css`
        background-color: rgba(246, 243, 240, 0.2);
        backdrop-filter: blur(3px);
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
        a.title {
          float: left;
          padding: 0.35em 1em;
          color: black;
          font-family: 'Raleway', sans-serif;
          font-size: 1.5em;
        }
      `}
    >
        <Link href='/'>
          <a className='title'>Lloyd Richards</a>
        </Link>
      <a href='#About'>About</a>
      <a href='#Projects'>Projects</a>
      <a href='#Blog'>Blog</a>
      <a href='#CV'>CV</a>
      <a href='#Contact'>Contact</a>
    </div>
  );
};

export default Navbar;
