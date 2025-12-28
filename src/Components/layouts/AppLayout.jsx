import React from 'react';
import Header from '../core/Header';
import LeftNavBar from '../core/LeftNavbar';
import TopNavbar from '../core/TopNavbar';
import MainContent from './MainContent';
import '../../Styles/appLayoutCSS.css';

function AppLayout(){
    return(
        <>
            <div class = "appLayout">
                <div className ="top">
                    <Header />
                    <TopNavbar />
                </div>
                
                <div className="bottom">
                    <LeftNavBar />
                    <MainContent />
                </div>
                
                <h1> Testing... App Lay out</h1>
            </div>
        </>
    );
}
export default AppLayout;