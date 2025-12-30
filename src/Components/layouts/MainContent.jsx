import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlLesson1 from "../../pages/html/HtmlLesson1";
import CssLesson1 from "../../pages/css/CssLesson1";
import JsLesson1 from "../../pages/javascript/JsLesson1"

import ReactLesson1 from "../../pages/react/ReactLesson1";
import '../../Styles/mainContentCSS.css';

function MainContent() {
  return (
    <>
      <div className="mainContent">
        <h1>Content Area</h1>
      </div>
    </>
  );
}

export default MainContent;
