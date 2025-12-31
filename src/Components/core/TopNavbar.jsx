import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/topNavbarCSS.css";

function TopNavbar({ onSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsDropdownOpen(false); // close dropdown after selecting
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="topNavbar">
      <div className="topNavPhoneMenu">
        <button className="dropDownButton" onClick={toggleDropdown}>
          Topic V
        </button>
        {isDropdownOpen && (
          <div className="topNavDropDownContent">
            <p onClick={() => handleSelect("HTML")}>HTML</p>
            <p onClick={() => handleSelect("CSS")}>CSS</p>
            <p onClick={() => handleSelect("JAVASCRIPT")}>JAVASCRIPT</p>
            <p onClick={() => handleSelect("TYPESCRIPT")}>TYPESCRIPT</p>
            <p onClick={() => handleSelect("REACT")}>REACT</p>
          </div>
        )}
      </div>

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