import React from 'react';
import './Style/Projects.scss';
import Nav from '../Home/Nav';
export default function Projects() {
  return (
    <div className='content-projects'>
      <nav className='navBar'>
        <h1 className='name'> Edwin</h1>
        <Nav />
      </nav>
      <div className='container'>
        <h2 className='page-name'>
          Projets
        </h2>
        <div className='project-container'>
          <div className="project-button">
            <input type="button" value="All" className='button' />
            <input type="button" value="HTML" className='button' />
            <input type="button" value="Javascript" className='button' />
            <input type="button" value="React" className='button' />
            <input type="button" value="Node" className='button' />
          </div>
        </div>
      </div>
    </div>
  )
}
