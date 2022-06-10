import React from "react";
//import { Link } from "react-router-dom";
import './Styles/NavbarHeader.scss';


function NavbarHeader () {
    return (
       <div className="header">
            <a href="#technologie">Technologie</a>
            <a href="#projets">Projets</a>
            <a href= "mailto:edwin.d899@hmail.com">Contact</a>
       </div>
    )
}

export default NavbarHeader