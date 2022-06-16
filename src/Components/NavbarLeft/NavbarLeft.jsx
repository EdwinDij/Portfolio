import React from 'react'
import './Style/NavbarLeft.scss'

export default function NavbarLeft() {
  return (
    <div className='navbar-left'>
      <nav className='navbar'>
      <p className='follow'>Me Follow</p>

        <a href="https://github.com/EdwinDij" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github brand-style"></i>
        </a>
        <a href="https://twitter.com/Edwindijeont" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter brand-style"></i>
        </a>
        <a href="https://linkedin.com/in/edwin-dijeont-1469a0226" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin brand-style"></i>
        </a>

      </nav>
  
    </div>
  )
}
