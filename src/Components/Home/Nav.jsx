import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div className='navLink'> 
            <Link to="/" className='link'>Home</Link>
            <Link to="/Resume" className='link'>CV</Link>
            <p className='link'>Projets</p>
            <p className='link'>Contact</p>
        </div>
    )
}
