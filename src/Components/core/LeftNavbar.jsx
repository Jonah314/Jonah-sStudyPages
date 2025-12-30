import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../Styles/leftNavbarCSS.css";



function LeftNavBar(props) {
  const pagesByTopic = {
  HTML: [
    { id: 1, name: "HtmlLesson1" },
    { id: 2, name: "HtmlHomePage"},
    { id: 3, name: "HtmlRequestResponsePage"}
  ],
  CSS: [
    { id: 1, name: "CssLesson1" },
    { id: 2, name: "CssHomePage"}
  ],
  JAVASCRIPT: [
    { id: 1, name: "JsLesson1" },
    { id: 2, name: "JavaScriptHomePage"},
    { id: 3, name: "PrimitiveAndComplexTypeJs"},
    { id: 4, name: "JavaScriptFunctionsPage"},
    { id: 5, name: "JavaScriptClassesPage"},
    { id: 6, name: "JavaScriptScopePage"},
    { id: 7, name: "JavaScriptArraysPage"}
  ],
  REACT: [
    { id: 1, name: "ReactLesson1" },
    { id: 2, name: "TerminalCheatSheet" },
    { id: 3, name: "ReactHomePage"},
    { id: 4, name: "ReactStateAndPropsPage"}
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
