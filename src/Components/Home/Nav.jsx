import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div className='navLink'> 
            <Link to="/" className='link'>Home</Link>
            <Link to="/Resume" className='link'>CV</Link>
            <Link to="/Projects" className='link'>Projets</Link>
            <Link to="/Contact" className='link'>Contact</Link>
        </div>
    )
}
