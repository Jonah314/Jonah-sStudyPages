import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../Styles/leftNavbarCSS.css";



function LeftNavBar(props) {
  

  return (


    <div className="leftNavbar">
      <h2 className="center">{props.topic}</h2>
      <ul>
        <li>Topics for </li>
        <li>More topics</li>
      </ul>
    </div>
  );
}

export default LeftNavBar;
