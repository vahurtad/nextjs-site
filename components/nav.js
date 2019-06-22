import React from 'react';
import Link from 'next/link';
import { Previous, Next } from 'grommet-icons';

const Nav = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link prefetch href="/">
          <a href="/">
            <Previous color="#403f4c" size="medium" />
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/repo-list">
          <a href="/repo-list">
            Projects
            <Next color="#403f4c" size="medium" />
          </a>
        </Link>
      </li>
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
