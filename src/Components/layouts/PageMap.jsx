import React from "react";
import { Routes, Route } from "react-router-dom";

import HtmlLesson1 from "../../pages/html/HtmlLesson1";
import HtmlHomePage from "../../pages/html/HtmlHomePage";
import HtmlRequestResponsePage from "../../pages/html/HtmlRequestResponsePage";

import CssLesson1 from "../../pages/css/CssLesson1";
import CssHomePage from "../../pages/css/CssHomePage";
import CssSelectorsPage from "../../pages/css/CssSelectorsPage";
import CssBoxModelPage from "../../pages/css/CssBoxModelPage";
import CssColorsPage from "../../pages/css/CssColorPage";
import CssFontsPage from "../../pages/css/CssFontsPage";
import CssFlexboxPage from "../../pages/css/CssFlexboxPage";
import CssGridPage from "../../pages/css/CssGridPage";

import JsLesson1 from "../../pages/javascript/JsLesson1"
import JavaScriptHomePage from "../../pages/javascript/JavaScriptHomePage";
import PrimitiveAndComplexTypeJs from "../../pages/javascript/PrimitiveAndComplexTypesJs";
import JavaScriptFunctionsPage from "../../pages/javascript/JavaScriptFunctionsPage";
import JavaScriptClassesPage from "../../pages/javascript/JavaScriptClassesPage";
import JavaScriptScopePage from "../../pages/javascript/JavaScriptScopePage";
import JavaScriptArraysPage from "../../pages/javascript/JavaScriptArraysPage";
import JsOperatorsPage from "../../pages/javascript/JsOperatorsPage";
import JsControlFlowPage from "../../pages/javascript/JsControlFlowPage";
import JsObjectsPage from "../../pages/javascript/JsObjectsPage";
import JsDomPage from "../../pages/javascript/JsDomPage";
import JsES6Page from "../../pages/javascript/JsES6Page";
import JsSyncAsyncPage from "../../pages/javascript/JsSyncAsyncPage";
import JsPromisesPage from "../../pages/javascript/JsPromisesPage";

import TypeScriptHomePage from "../../pages/typescript/TypeScriptHomePage";

import ReactLesson1 from "../../pages/react/ReactLesson1";
import TerminalCheatSheet from "../../pages/react/TerminalCheatSheet";
import ReactHomePage from "../../pages/react/ReactHomePage";
import ReactStateAndPropsPage from "../../pages/react/ReactStateAndPropsPage";



function PageMap(props){
    const pagesMap = {
    HtmlLesson1: <HtmlLesson1 />,
    HtmlHomePage: <HtmlHomePage />,
    HtmlRequestResponsePage: <HtmlRequestResponsePage/>,

    CssLesson1: <CssLesson1 />,
    CssHomePage: <CssHomePage />,
    CssSelectorsPage: <CssSelectorsPage/>,
    CssBoxModelPage:<CssBoxModelPage/>,
    CssColorsPage: <CssColorsPage/>,
    CssFontsPage:<CssFontsPage/>,
    CssFlexboxPage:<CssFlexboxPage/>,
    CssGridPage:<CssGridPage/>,
    
    JsLesson1: <JsLesson1 />,
    JavaScriptHomePage: <JavaScriptHomePage />,
    PrimitiveAndComplexTypeJs: <PrimitiveAndComplexTypeJs/>,
    JavaScriptFunctionsPage: <JavaScriptFunctionsPage />,
    JavaScriptClassesPage: <JavaScriptClassesPage/>,
    JavaScriptScopePage: <JavaScriptScopePage />,
    JavaScriptArraysPage: <JavaScriptArraysPage/>,
    JsOperatorsPage:<JsOperatorsPage/>,
    JsControlFlowPage: <JsControlFlowPage/>,
    JsObjectsPage:<JsObjectsPage/>,
    JsDomPage:<JsDomPage />,
    JsES6Page:<JsES6Page/>,
    JsSyncAsyncPage:<JsSyncAsyncPage/>,
    JsPromisesPage:<JsPromisesPage/>,
    
    TypeScriptHomePage:<TypeScriptHomePage/>,

    ReactLesson1: <ReactLesson1 />,
    TerminalCheatSheet: <TerminalCheatSheet/>,
    ReactHomePage:<ReactHomePage />,
    ReactStateAndPropsPage: <ReactStateAndPropsPage />
  };

  return (
    <>
        {pagesMap[props.page]}
    </>
  );
}
export default PageMap;