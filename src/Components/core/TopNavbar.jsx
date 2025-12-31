import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/topNavbarCSS.css";
import {useState, useEffect} from 'react';

function TopNavbar({ onSelect }) {

  const handleSelect = (value) => {
    onSelect(value);
  };

  return (
    <nav className="topNavbar">
      <ul className="navList">
        <li onClick={() => handleSelect("HTML")} role="button" tabIndex={0}>
          HTML
        </li>
        <li onClick={() => handleSelect("CSS")} role="button" tabIndex={0}>
          CSS
        </li>
        <li onClick={() => handleSelect("JAVASCRIPT")} role="button" tabIndex={0}>
          JAVASCRIPT
        </li>
        <li onClick={() => handleSelect("TYPESCRIPT")} role="button" tabIndex={0}>
          TYPESCRIPT
        </li>
        <li onClick={() => handleSelect("REACT")} role="button" tabIndex={0}>
          REACT
        </li>
        
      </ul>
    </nav>
  );
}

export default TopNavbar;