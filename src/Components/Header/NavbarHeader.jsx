import React from "react";
import './Styles/NavbarHeader.scss';

function NavbarHeader () {
    return (
       <div className="header">
            <span>Home</span>
            <span>Technologie</span>
            <span>Projets</span>
            <a href= "mailto:edwin.d899@hmail.com">Contact</a>
       </div>
    )
}

export default NavbarHeader