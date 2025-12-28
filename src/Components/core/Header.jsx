import React from 'react';
import '../../Styles/headerCSS.css';
import StudyLogo from './StudyLogo';

function Header(){
    return(
        <>
            <div className="header">
                 <StudyLogo />
            </div>
            
        </>
    );
}

export default Header;