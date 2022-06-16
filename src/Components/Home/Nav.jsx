import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {

    return (

        <div className='navLink'> 
            <Link to="/" className='link link-home'>Home</Link>
            <Link to="/Resume" className='link'>CV</Link>
            <Link to="/Projects" className='link'>Projets</Link>
            <a href='mailto:edwin.d899@gmail.com' className='linkToMail link'>Contact</a>
        </div>
    )
}
