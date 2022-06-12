import React from 'react'
import './Style/NavbarLeft.scss'

export default function NavbarLeft() {
  return (
    <div className='navbar-left'>
      <nav className='navbar'>
      <p className='follow'>Me Follow</p>
      <div className='line'></div>
        <a href="https://github.com/EdwinDij" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com/Edwindijeont" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://linkedin.com/in/edwin-dijeont-1469a0226" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>

      </nav>
  
    </div>
  )
}
