import React from 'react';
import Header from '../core/Header';
import LeftNavBar from '../core/LeftNavbar';
import TopNavbar from '../core/TopNavbar';
import MainContent from './MainContent';
import '../../Styles/appLayoutCSS.css';

function AppLayout(){
    return(
        <>
            <div className = "appLayout">
                <div className ="top">
                    <Header />
                    <TopNavbar />
                </div>
                
                <div className="center">
                    <div className="bottom">
                        <LeftNavBar />
                        <MainContent />
                    </div>
                </div>
                
                
                <h1> Testing... App Lay out</h1>
            </div>
        </>
    );
}
export default AppLayout;