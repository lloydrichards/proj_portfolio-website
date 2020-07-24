/** @jsx jsx */
import Link from 'next/link';
import { css, jsx } from '@emotion/core';

const Navbar = () => {
  return (
    <div
      css={css`
        background-color: rgba(246, 243, 240, 0.9);
        backdrop-filter: blur(3px);
        z-index: 9;
        overflow: visible;
        position: fixed;
        width: 100%;
        max-width: 1080px;
        a {
          float: right;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          color: #8b7a70;
          font-family: 'Josefin Sans', serif;
          font-size: 1em;
        }
        a.title {
          float: left;
          padding: 0.35em 1em;
          color: black;
          font-family: 'Raleway', sans-serif;
          font-size: 1.5em;
        }
        /* The dropdown container */
        .dropdown {
          float: right;
          overflow: hidden;
        }

        /* Dropdown button */
        .dropdown .dropbtn {
          color: #8b7a70;
          font-family: 'Josefin Sans', serif;
          font-size: 1em;
          border: none;
          outline: none;
          padding: 14px 16px;
          background-color: inherit;
          margin: 0; /* Important for vertical align on mobile phones */
        }

        /* Dropdown content (hidden by default) */
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        /* Links inside the dropdown */
        .dropdown-content a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
        }

        /* Add a grey background color to dropdown links on hover */
        .dropdown-content a:hover {
          background-color: #ddd;
        }

        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}
    >
      <Link href='/'>
        <a className='title'>Lloyd Richards</a>
      </Link>
      <a href='#Contact'>Contact</a>
      <a href='#CV'>CV</a>
      <div className='dropdown'>
        <button className='dropbtn'>Blog</button>
        <div className='dropdown-content'>
          <a href='/#Blog'>Recent</a>
          <a href='/blog'>Blog</a>
        </div>
      </div>
      <div className='dropdown'>
        <button className='dropbtn'>Portfolio</button>
        <div className='dropdown-content'>
          <a href='/#Portfolio'>Recent</a>
          <a href='/portfolio'>Portfolio</a>
        </div>
      </div>
      <a href='#About'>About</a>
    </div>
  );
};

export default Navbar;
