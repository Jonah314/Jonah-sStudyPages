import React from "react";
import Header from "../core/Header";
import TopNavbar from "../core/TopNavbar";
import LeftNavBar from "../core/LeftNavbar";
import MainContent from "./MainContent";
import "../../Styles/appLayoutCSS.css";
import {useState} from 'react';

function AppLayout() {
  const [selectedTopic, setSelectedTopic]= useState("");
  const [selectedPage, setPage] = useState("");

  return (
    <div className="appLayout">
      <Header />
      <TopNavbar onSelect={setSelectedTopic} />
      <div className="center">
        <div className="bottom">
          <LeftNavBar topic={selectedTopic}/>
          <MainContent page={selectedPage}/>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
