import React from 'react';
import './Style/Projects.scss';
import Nav from '../Home/Nav';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import { motion } from 'framer-motion';
export default function Projects() {
  return (
    <div className='content-projects'>
      <motion.nav className='navBar'
      initial={{height: "100vw",}}
      animate={{ height: "4rem" , transition: {duration: 1}}}
      exit={{height: "100vw", transition: {duration: 0.5}}}
      >
        <h1 className='name'> Edwin</h1>
          <Nav />
      </motion.nav>
      <div className='container'>
        <h2 className='page-name'>
          Projets
        </h2>
        <div className="project-button">
          <input type="button" value="All" className='button' />
          <input type="button" value="HTML" className='button' />
          <input type="button" value="Javascript" className='button' />
          <input type="button" value="React" className='button' />
          <input type="button" value="Node" className='button' />
        </div>
        <div className='project-container'>
          <div className='project-card'>

            <figure class="snip1576" id="html">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
              <figcaption>
                <h3>Réservia <span>html-css</span></h3>
              </figcaption>
              <a href="https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/" target="_blank" rel="noopener noreferrer"></a>
            </figure>

            <figure class="snip1576" id="html">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
              <figcaption>
                <h3>OHmyfood <span>html-css</span></h3>
              </figcaption>
              <a href="https://edwindij.github.io/EdwinDijeont_3_26112021/" target="_blank" rel="noopener noreferrer"></a>
            </figure>

            <figure class="snip1576" id="html">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
              <figcaption>
                <h3>Kanap <span>Javascript</span></h3>
              </figcaption>
              <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-" target="_blank" rel="noopener noreferrer"></a>
            </figure>

            <figure class="snip1576" id="html">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
              <figcaption>
                <h3>Piquante <span>Node.js - MongoDB</span></h3>
              </figcaption>
              <a href="https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--" target="_blank" rel="noopener noreferrer"></a>
            </figure>

            <figure class="snip1576" id="html">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
              <figcaption>
                <h3>Groupomania <span>ReactJs - Node.js - Mysql</span></h3>
              </figcaption>
              <a href="https://github.com/EdwinDij/groupomania" target="_blank" rel="noopener noreferrer"></a>
            </figure>



          </div>
        </div>
        <NavbarLeft />
      </div>
    </div>
  )
}
