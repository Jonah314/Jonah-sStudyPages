import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../Styles/leftNavbarCSS.css";
import {useState} from 'react';



function LeftNavBar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pagesByTopic = {
  HTML: [

    { id: 1, name: "HtmlHomePage", title: "Home"},
    { id: 2, name: "HtmlRequestResponsePage", title:"Html Request Response"}
  ],
  CSS: [
    { id: 1, name: "CssHomePage", title: "Home"},
    { id: 2, name: "CssSelectorsPage", title:"Selectors"},
    { id: 3, name: "CssBoxModelPage", title:"Box Model"},
    { id: 4, name: "CssColorsPage", title:"Colors"},
    { id: 5, name: "CssFontsPage", title:"Fonts & Web-Safe Fonts"},
    { id: 6, name: "CssFlexboxPage", title:"Flexbox"},
    { id: 7, name: "CssGridPage", title:"Grid"}
    
  ],
  JAVASCRIPT: [
    { id: 1, name: "JavaScriptHomePage", title:"Home"},
    { id: 2, name: "PrimitiveAndComplexTypeJs",title:"Primitive & Complex Types"},
    { id: 3, name: "JavaScriptFunctionsPage", title: "Functions"},
    { id: 4, name: "JavaScriptClassesPage", title:"Class"},
    { id: 5, name: "JavaScriptScopePage", title: "Scope"},
    { id: 6, name: "JavaScriptArraysPage", title:"Arrays"},
    { id: 7, name: "JsOperatorsPage", title:"Operators"},
    { id: 8, name: "JsControlFlowPage", title:"Control Flow"},
    { id: 9, name: "JsObjectsPage", title:"Objects"},
    { id: 10, name: "JsDomPage", title:"DOM"},
    { id: 11, name: "JsES6Page", title:"ES6 Features"},
    { id: 12, name: "JsSyncAsyncPage", title: "Synchronous Vs Asynchronous"},
    { id: 13, name: "JsPromisesPage", title: "Promises"}
  ],
  TYPESCRIPT:[
    { id: 1, name: "TypeScriptHomePage", title:"TypeScript"}
  ],
  REACT: [
    { id: 1, name: "ReactHomePage", title:"Home"},
    { id: 2, name: "TerminalCheatSheet", title:"Terminal Cheat Sheet" },
    { id: 3, name: "ReactStateAndPropsPage", title:"State & Props"}
  ]};

  const topics = pagesByTopic[props.topic] || [];

  const handleSelectPage = (value) => {
    props.pageLinks(value);
    setIsDropdownOpen(false); // close dropdown after selecting
  };

  function SetPagesLinks() {
    return (
      <>
        {topics.map(page => (
          <li key={page.id} onClick={() => handleSelectPage(page.name)} role="button" tabIndex={0}>
            {page.title}</li>
        ))}
      </>
    );
  }
   const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };


  return (



    <div className="leftNavbar">
      <div className="leftNavbarPhone">
        <button className="leftDropDownButton" onClick={toggleDropdown}>
          V {props.topic} V
        </button>
        {isDropdownOpen && (
          <SetPagesLinks />
        )}
      </div>

      <div className="fullScreen">
          <h2 className="center">{props.topic}</h2>
          <ul className="center">
            <SetPagesLinks />
          </ul>
      </div>
      
    </div>
  );
}

export default LeftNavBar;
