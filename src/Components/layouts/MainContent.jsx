import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlLesson1 from "../../pages/html/HtmlLesson1";
import CssLesson1 from "../../pages/css/CssLesson1";
import JsLesson1 from "../../pages/javascript/JsLesson1"

import ReactLesson1 from "../../pages/react/ReactLesson1";
import TerminalCheatSheet from "../../pages/react/TerminalCheatSheet";
import '../../Styles/mainContentCSS.css';

function MainContent(props) {
  
  const pagesMap = {
    HtmlLesson1: <HtmlLesson1 />,
    CssLesson1: <CssLesson1 />,
    JsLesson1: <JsLesson1 />,
    ReactLesson1: <ReactLesson1 />,
    TerminalCheatSheet: <TerminalCheatSheet/>
  };



  return (
    <>
      <div className="mainContent">
        <h1>Content Area</h1>
        <h2>{props.page}</h2>
        {pagesMap[props.page]}
      </div>
    </>
  );
}

export default MainContent;
