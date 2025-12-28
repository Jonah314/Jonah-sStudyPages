import React from 'react';
import "../../Styles/topNavbarCSS.css";

function TopNavbar() {
  return (
    <nav className="topNavbar">
      <ul className="navList">
        <li>
          <a href="/css">CSS</a>
        </li>
        <li>
          <a href="/html">HTML</a>
        </li>
        <li>
          <a href="/javascript">JavaScript</a>
        </li>
        <li>
          <a href="/react">React</a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavbar;