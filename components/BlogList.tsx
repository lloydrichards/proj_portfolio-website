import React from 'react';
import Link from 'next/link';

function BlogList() {
  return (
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      
  );
}

export default BlogList;
