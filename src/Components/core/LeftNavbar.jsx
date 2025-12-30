import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../Styles/leftNavbarCSS.css";



function LeftNavBar(props) {
  const pagesByTopic = {
  HTML: [
    { id: 1, name: "HtmlLesson1" }
  ],
  CSS: [
    { id: 1, name: "CssLesson1" }
  ],
  JAVASCRIPT: [
    { id: 1, name: "JsLesson1" }
  ],
  REACT: [
    { id: 1, name: "ReactLesson1" },
    { id: 2, name: "TerminalCheatSheet" }
  ]};

  const topics = pagesByTopic[props.topic] || [];

  const handleSelectPage = (value) => {
    props.pageLinks(value);
  };

  function SetPagesLinks() {
    return (
      <>
        {topics.map(page => (
          <li key={page.id} onClick={() => handleSelectPage(page.name)} role="button" tabIndex={0}>
            {page.name}</li>
        ))}
      </>
    );
  }



  return (



    <div className="leftNavbar">
      <h2 className="center">{props.topic}</h2>
      <ul>
        <SetPagesLinks />
      </ul>
    </div>
  );
}

export default LeftNavBar;
