import React from "react";
import { Routes, Route } from "react-router-dom";

import HtmlLesson1 from "../../pages/html/HtmlLesson1";
import HtmlHomePage from "../../pages/html/HtmlHomePage";
import HtmlRequestResponsePage from "../../pages/html/HtmlRequestResponsePage";

import CssLesson1 from "../../pages/css/CssLesson1";
import CssHomePage from "../../pages/css/CssHomePage";

import JsLesson1 from "../../pages/javascript/JsLesson1"
import JavaScriptHomePage from "../../pages/javascript/JavaScriptHomePage";
import PrimitiveAndComplexTypeJs from "../../pages/javascript/PrimitiveAndComplexTypesJs";
import JavaScriptFunctionsPage from "../../pages/javascript/JavaScriptFunctionsPage";
import JavaScriptClassesPage from "../../pages/javascript/JavaScriptClassesPage";
import JavaScriptScopePage from "../../pages/javascript/JavaScriptScopePage";
import JavaScriptArraysPage from "../../pages/javascript/JavaScriptArraysPage";

import ReactLesson1 from "../../pages/react/ReactLesson1";
import TerminalCheatSheet from "../../pages/react/TerminalCheatSheet";
import ReactHomePage from "../../pages/react/ReactHomePage";
import ReactStateAndPropsPage from "../../pages/react/ReactStateAndPropsPage";

import '../../Styles/mainContentCSS.css';




function MainContent(props) {
  
  const pagesMap = {
    HtmlLesson1: <HtmlLesson1 />,
    HtmlHomePage: <HtmlHomePage />,
    HtmlRequestResponsePage: <HtmlRequestResponsePage/>,

    CssLesson1: <CssLesson1 />,
    CssHomePage: <CssHomePage />,
    
    JsLesson1: <JsLesson1 />,
    JavaScriptHomePage: <JavaScriptHomePage />,
    PrimitiveAndComplexTypeJs: <PrimitiveAndComplexTypeJs/>,
    JavaScriptFunctionsPage: <JavaScriptFunctionsPage />,
    JavaScriptClassesPage: <JavaScriptClassesPage/>,
    JavaScriptScopePage: <JavaScriptScopePage />,
    JavaScriptArraysPage: <JavaScriptArraysPage/>,

    ReactLesson1: <ReactLesson1 />,
    TerminalCheatSheet: <TerminalCheatSheet/>,
    ReactHomePage:<ReactHomePage />,
    ReactStateAndPropsPage: <ReactStateAndPropsPage />
  };



  return (
    <>
      <div className="mainContent">
        
        
        {pagesMap[props.page]}
      </div>
    </>
  );
}

export default MainContent;
