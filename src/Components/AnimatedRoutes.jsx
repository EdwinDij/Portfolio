import React from 'react'
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import {
    Routes,
    Route,
    useLocation,
  }
    from 'react-router-dom';
  
function AnimatedRoutes() {
    const location = useLocation();
    return (
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="Resume" element={<Resume />} />
                <Route path='Projects' element={<Projects />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
    )
}

export default AnimatedRoutes